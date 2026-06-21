"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const signatures = [
  { name: "Lamb Mandi", note: "Tender slow-cooked lamb over smoky, saffron-spiced rice — the dish we're named for.", img: "/img/haneeth-lamb.jpg", tag: "The Signature" },
  { name: "Chicken Mandi", note: "Half or whole chicken, slow-roasted and served on fragrant mandi rice.", img: "/img/mandi-chicken.jpg", tag: "House Favorite" },
  { name: "Fahsa", note: "Bubbling Yemeni stew of shredded meat in a sizzling stone pot — eaten with bread.", img: "/img/fahsa-beef.jpg", tag: "Served Sizzling" },
  { name: "Saltah", note: "Yemen's national dish — a hearty hot pot finished with fenugreek foam.", img: "/img/saltah.jpg", tag: "National Dish" },
];

export default function SignatureDishes() {
  const ref = useScrollReveal(0.05);

  return (
    <section ref={ref} className="relative py-24 sm:py-28 bg-pine-deep overflow-hidden">
      <div className="absolute inset-0 tile-pattern-dark" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="fade-in-up">
            <span className="inline-block text-[10px] uppercase tracking-[0.4em] text-gold font-bold mb-5 bg-gold/10 px-4 py-2">From the Clay Oven</span>
          </div>
          <h2 className="fade-in-up font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-cream leading-[1.05]" style={{ transitionDelay: "0.1s" }}>
            The dishes we&apos;re <span className="text-gradient-gold italic">known for</span>
          </h2>
          <p className="fade-in-up text-cream/55 text-lg mt-5 leading-relaxed" style={{ transitionDelay: "0.2s" }}>
            Yemeni classics — slow-cooked over fire, served sizzling, and meant to be shared.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {signatures.map((dish, i) => (
            <div key={dish.name} className="scale-in group relative overflow-hidden bg-ink/40" style={{ transitionDelay: `${0.08 * i}s` }}>
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image src={dish.img} alt={dish.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-pine-deep via-pine-deep/20 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block text-[9px] uppercase tracking-widest text-gold bg-gold/15 backdrop-blur-sm px-3 py-1 mb-3 rounded-full font-bold">{dish.tag}</span>
                <h3 className="font-display text-2xl font-bold text-cream mb-2">{dish.name}</h3>
                <p className="text-cream/60 text-sm leading-relaxed">{dish.note}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="fade-in-up text-center mt-14" style={{ transitionDelay: "0.2s" }}>
          <Link href="/menu" className="inline-block border-2 border-copper/40 text-gold px-9 py-4 text-sm uppercase tracking-[0.18em] font-bold hover:bg-copper hover:text-pine-deep hover:border-copper transition-all">
            See the Full Menu
          </Link>
        </div>
      </div>
    </section>
  );
}
