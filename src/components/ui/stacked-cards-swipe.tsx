"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

export interface SwipeCard {
  image: string;
  title: string;
  price?: string;
  description?: string;
}

// A swipeable stacked-card deck. Drag/swipe the top card left or right
// (works with touch AND mouse) to send it to the back and reveal the next.
// No hover required; infinite loop; mobile-friendly.
export function StackedCardsSwipe({
  cards,
  className = "",
}: {
  cards: SwipeCard[];
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const [dragging, setDragging] = useState(false);
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-220, 0, 220], [-14, 0, 14]);
  const n = cards.length;

  // three visible cards starting at current index
  const visible = [0, 1, 2].map((o) => (index + o) % n);

  function onDragEnd(_e: unknown, info: { offset: { x: number }; velocity: { x: number } }) {
    setDragging(false);
    const dx = info.offset.x;
    const vx = info.velocity.x;
    if (Math.abs(dx) > 90 || Math.abs(vx) > 500) {
      const dir = dx > 0 ? 1 : -1;
      animate(x, dir * 520, { duration: 0.28, ease: "easeIn" }).then(() => {
        setIndex((i) => (i + 1) % n);
        x.set(0);
      });
    } else {
      animate(x, 0, { type: "spring", stiffness: 320, damping: 30 });
    }
  }

  return (
    <div className={`relative w-full max-w-[360px] mx-auto aspect-[3/4] select-none ${className}`}>
      {/* render back-to-front so the top card is last in DOM */}
      {visible
        .map((ci, pos) => ({ ci, pos }))
        .reverse()
        .map(({ ci, pos }) => {
          const isTop = pos === 0;
          const card = cards[ci];
          // fanned-out resting positions: top centered, others peek left/right
          const fanX = pos === 1 ? -52 : pos === 2 ? 52 : 0;
          const fanR = pos === 1 ? -7 : pos === 2 ? 7 : 0;
          const fanS = pos === 0 ? 1 : 0.92;
          return (
            <motion.div
              key={`${ci}-${pos}`}
              className="absolute inset-0"
              style={{
                zIndex: 10 - pos,
                ...(isTop ? { x, rotate } : {}),
                cursor: isTop ? (dragging ? "grabbing" : "grab") : "default",
              }}
              initial={{ x: fanX, rotate: fanR, scale: fanS, opacity: 0 }}
              animate={isTop ? { scale: fanS, opacity: 1 } : { x: fanX, rotate: fanR, scale: fanS, opacity: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 28 }}
              drag={isTop ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.7}
              onDragStart={() => setDragging(true)}
              onDragEnd={isTop ? onDragEnd : undefined}
            >
              <article className={`w-full h-full overflow-hidden rounded-[1.4rem] bg-paper shadow-[0_30px_60px_-20px_rgba(32,20,13,0.5)] border border-ink/10 flex flex-col ${isTop ? "" : "pointer-events-none"}`}>
                <div className="relative flex-1 m-2.5 rounded-2xl overflow-hidden bg-night">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    draggable={false}
                    className="object-cover pointer-events-none"
                    sizes="360px"
                  />
                </div>
                <div className="px-5 pb-4 pt-1 flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="font-display font-bold uppercase tracking-tight text-ink text-xl leading-none truncate">{card.title}</h3>
                    {card.description && <p className="text-ink/55 text-xs mt-1 truncate">{card.description}</p>}
                  </div>
                  {card.price && <span className="font-display font-bold text-clay text-xl shrink-0">{card.price}</span>}
                </div>
              </article>
            </motion.div>
          );
        })}

      {/* swipe affordance + progress dots */}
      <div className="absolute -bottom-12 inset-x-0 flex flex-col items-center gap-3">
        <div className="flex gap-1.5">
          {cards.map((_, i) => (
            <span key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === index ? "w-6 bg-clay" : "w-1.5 bg-ink/20"}`} />
          ))}
        </div>
        <p className="text-[10px] uppercase tracking-[0.3em] text-ink/40">← Swipe →</p>
      </div>
    </div>
  );
}
