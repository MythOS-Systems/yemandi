"use client";

import { Reveal } from "@/components/Reveal";

export default function PressQuote() {
  return (
    <section className="relative bg-clay text-paper py-20 sm:py-28 overflow-hidden">
      {/* top marquee ribbon */}
      <div className="absolute top-5 left-0 right-0 overflow-hidden pointer-events-none">
        <div className="marquee marquee-l" style={{ ["--dur" as string]: "90s" }}>
          {[0, 1].map((k) => (
            <span key={k} className="font-display font-black uppercase text-paper/15 text-5xl whitespace-nowrap pr-8" aria-hidden={k === 1}>
              FEATURED IN D MAGAZINE · VIRAL ON TIKTOK · A DFW FIRST ·
            </span>
          ))}
        </div>
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <Reveal>
          <svg className="w-12 h-12 mx-auto text-paper/40 mb-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
          </svg>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="font-display font-bold uppercase tracking-tight leading-[1.05] text-[7vw] sm:text-5xl lg:text-6xl">
            &ldquo;The hottest seat in town is the floor at Yemandi.&rdquo;
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-7 text-[12px] uppercase tracking-[0.3em] text-paper/70 font-bold">D Magazine &middot; Dallas</p>
        </Reveal>
      </div>
    </section>
  );
}
