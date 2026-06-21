"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { site } from "@/lib/site";

const ShuffleGrid = dynamic(() => import("@/components/ui/shuffle-grid"), {
  ssr: false,
  loading: () => (
    <div className="grid grid-cols-4 grid-rows-4 h-[340px] sm:h-[460px] lg:h-[560px] gap-1.5">
      {Array.from({ length: 16 }).map((_, i) => (
        <div key={i} className="w-full h-full bg-pine/40 animate-pulse" />
      ))}
    </div>
  ),
});

export default function Hero() {
  return (
    <section className="relative bg-pine-deep overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="absolute inset-0 tile-pattern-dark" />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 30% 20%, rgba(194,90,51,0.30) 0%, transparent 60%)" }} />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-7">
              <span className="h-px w-10 bg-copper/60" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-gold/90 font-semibold">First Authentic Yemeni in DFW</span>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-cream leading-[1.0]">
              Smoke, saffron,
              <br />
              <span className="text-gradient-gold italic">and slow fire.</span>
            </h1>

            <p className="text-cream/70 text-lg sm:text-xl leading-relaxed mt-8 max-w-lg">
              Authentic Yemeni mandi — spiced rice with slow-cooked lamb or
              chicken — plus haneeth, sizzling fahsa, saltah, and rashoosh bread
              baked in our tandoor. <span className="text-gold">100% halal.</span>
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-10">
              <Link href="/menu" className="bg-copper text-pine-deep px-9 py-4 text-sm uppercase tracking-[0.18em] font-bold text-center hover:bg-gold transition-all hover:-translate-y-0.5 shadow-xl">
                Explore the Menu
              </Link>
              <a href={site.order} target="_blank" rel="noopener noreferrer" className="border-2 border-cream/25 text-cream px-9 py-4 text-sm uppercase tracking-[0.18em] font-semibold text-center hover:border-copper hover:text-copper transition-all hover:-translate-y-0.5">
                Order Online
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 mt-10 pt-8 border-t border-cream/10">
              <Stat value={`${site.rating}★`} label="Guest Rating" />
              <Stat value="100%" label="Halal" />
              <Stat value="Tandoor" label="Fresh Bread" />
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 border border-copper/20 pointer-events-none hidden sm:block" />
            <ShuffleGrid />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-2xl font-bold text-gold">{value}</div>
      <div className="text-cream/40 text-[10px] uppercase tracking-[0.2em] mt-0.5">{label}</div>
    </div>
  );
}
