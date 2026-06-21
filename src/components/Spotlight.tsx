"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Spotlight() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="relative py-24 sm:py-28 bg-pom-deep overflow-hidden">
      <div className="absolute inset-0 tile-pattern-dark" />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 60% at 80% 50%, rgba(230,174,76,0.14) 0%, transparent 60%)" }} />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="fade-in-left relative">
            <div className="relative aspect-[4/3] overflow-hidden shadow-2xl">
              <Image src="/img/fahsa-lamb.jpg" alt="Sizzling lamb fahsa in a stone pot" fill className="object-cover" sizes="(max-width: 1024px) 90vw, 45vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-pom-deep/40 to-transparent" />
            </div>
            <div className="absolute -inset-3 border border-gold/25 pointer-events-none hidden lg:block" />
          </div>

          <div>
            <div className="fade-in-up flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-gold/60" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold">Eat the Yemeni Way</span>
            </div>

            <h2 className="fade-in-up font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-cream leading-[1.05] mb-6" style={{ transitionDelay: "0.1s" }}>
              Gather around
              <br />
              <span className="text-gradient-gold italic">the floor.</span>
            </h2>

            <p className="fade-in-up text-cream/75 text-lg leading-relaxed mb-8 max-w-lg" style={{ transitionDelay: "0.2s" }}>
              In Yemen, the best meals are shared on the floor, hands reaching
              into a steaming platter of mandi and warm rashoosh. Yemandi brings
              that experience to Richardson — communal, generous, and made to
              linger over. Come hungry, bring everyone.
            </p>

            <div className="fade-in-up flex flex-wrap gap-4" style={{ transitionDelay: "0.3s" }}>
              <Link href="/menu" className="bg-copper text-pine-deep px-8 py-4 text-sm uppercase tracking-[0.18em] font-bold hover:bg-gold transition-all hover:-translate-y-0.5">Browse the Menu</Link>
              <Link href="/about" className="border-2 border-cream/25 text-cream px-8 py-4 text-sm uppercase tracking-[0.18em] font-semibold hover:border-gold hover:text-gold transition-all hover:-translate-y-0.5">Our Story</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
