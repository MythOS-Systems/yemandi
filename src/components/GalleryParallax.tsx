"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "@/components/Reveal";

const cols = [
  ["/img/pro-shrimp.jpg", "/img/pro-hummus.jpg", "/img/pro-mandi-meat.jpg"],
  ["/img/pro-fish.jpg", "/img/pro-drink-straw.jpg", "/img/pro-fries.jpg"],
  ["/img/pro-fahsa.jpg", "/img/pro-babaghanouj.jpg", "/img/pro-bread.jpg"],
];

export default function GalleryParallax() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const up = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
  const down = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section ref={ref} className="relative bg-night py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-14">
          <span className="text-[11px] uppercase tracking-[0.4em] text-saffron font-bold">Straight From The Kitchen</span>
          <h2 className="font-display font-black uppercase tracking-tighter2 leading-[0.85] text-paper text-[12vw] sm:text-7xl mt-3">
            Feast your <span className="font-serif italic font-medium tracking-normal lowercase text-clay">eyes</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-3 gap-3 sm:gap-5">
          {cols.map((col, ci) => (
            <motion.div key={ci} style={{ y: ci === 1 ? down : up }} className="flex flex-col gap-3 sm:gap-5">
              {col.map((src) => (
                <div key={src} className="relative aspect-[3/4] overflow-hidden ring-1 ring-paper/10 group">
                  <Image
                    src={src}
                    alt="Yemandi dish"
                    fill
                    className="object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                    sizes="(max-width:1024px) 33vw, 30vw"
                  />
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
