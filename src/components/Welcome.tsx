"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Welcome() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="relative py-24 sm:py-32 bg-cream overflow-hidden">
      <div className="absolute inset-0 tile-pattern" />

      <div className="absolute top-1/2 left-0 -translate-y-1/2 pointer-events-none select-none overflow-hidden w-full">
        <span className="font-display text-[8rem] sm:text-[13rem] lg:text-[18rem] font-bold text-pine/[0.04] leading-none whitespace-nowrap block -ml-10 italic">
          Ahlan
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="fade-in-left relative order-2 lg:order-1" style={{ transitionDelay: "0.15s" }}>
            <div className="relative max-w-lg mx-auto lg:mx-0">
              <div className="relative aspect-[4/5] overflow-hidden shadow-2xl">
                <Image src="/img/mandi-chicken.jpg" alt="Yemeni chicken mandi" fill className="object-cover" sizes="(max-width: 1024px) 90vw, 45vw" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-pine-deep/30 to-transparent" />
              </div>
              <div className="absolute right-2 sm:-right-6 top-8 w-[46%] aspect-[3/4] overflow-hidden shadow-2xl border-4 border-cream">
                <Image src="/img/haneeth-lamb.jpg" alt="Haneeth lamb shank" fill className="object-cover" sizes="(max-width: 1024px) 40vw, 20vw" />
              </div>
              <div className="absolute left-2 sm:-left-6 -bottom-8 w-[42%] aspect-square overflow-hidden shadow-2xl border-4 border-cream">
                <Image src="/img/rashoosh.jpg" alt="Rashoosh tandoor bread" fill className="object-cover" sizes="(max-width: 1024px) 30vw, 15vw" />
              </div>
              <div className="absolute -inset-4 border border-copper/25 pointer-events-none hidden lg:block" />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="fade-in-up">
              <span className="inline-block text-[10px] uppercase tracking-[0.4em] text-pom font-bold mb-6 bg-pom/5 px-4 py-2">Ahlan wa Sahlan &middot; Welcome</span>
            </div>

            <div className="fade-in-up" style={{ transitionDelay: "0.1s" }}>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-ink leading-[1.04] mb-8">
                A first for Dallas,
                <br />
                <span className="text-pom italic">straight from Yemen.</span>
              </h2>
            </div>

            <div className="fade-in-up" style={{ transitionDelay: "0.2s" }}>
              <div className="w-20 h-1 bg-gradient-to-r from-copper to-copper/20 mb-8" />
            </div>

            <div className="fade-in-up space-y-5" style={{ transitionDelay: "0.3s" }}>
              <p className="text-ink/70 text-lg sm:text-xl leading-relaxed max-w-xl">
                Yemandi is the first authentic Yemeni restaurant in DFW — and it
                went viral for a reason. Our specialty is mandi: spiced rice with
                lamb or chicken, slow-cooked until it falls off the bone.
              </p>
              <p className="text-ink/55 text-lg leading-relaxed max-w-xl">
                Everything is made fresh in-house, including rashoosh bread baked
                in a traditional tandoor — sizzling fahsa, saltah in the stone
                pot, haneeth, and more. Halal meats, premium ingredients, always.
              </p>
            </div>

            <div className="fade-in-up flex flex-wrap gap-8 mt-10 pt-10 border-t border-ink/10" style={{ transitionDelay: "0.4s" }}>
              {[
                { number: "100%", label: "Halal" },
                { number: "Tandoor", label: "Bread" },
                { number: "Slow", label: "Cooked" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display text-2xl sm:text-3xl font-bold text-pom">{stat.number}</div>
                  <div className="text-ink/40 text-xs uppercase tracking-widest mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
