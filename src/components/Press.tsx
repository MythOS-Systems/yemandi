"use client";

import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export default function Press() {
  return (
    <section className="relative bg-night text-paper py-24 sm:py-32 overflow-hidden">
      {/* marquee ribbon */}
      <div className="absolute top-6 left-0 right-0 overflow-hidden pointer-events-none">
        <div className="marquee marquee-l" style={{ ["--dur" as string]: "100s" }}>
          {[0, 1].map((k) => (
            <span key={k} className="font-display font-black uppercase text-paper/[0.05] text-[10vw] leading-none whitespace-nowrap pr-10" aria-hidden={k === 1}>
              AS FEATURED IN · AS FEATURED IN ·
            </span>
          ))}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-4">
          <span className="text-[11px] uppercase tracking-[0.4em] text-saffron font-bold">Press &amp; Praise</span>
        </Reveal>
        <Reveal delay={0.05} className="text-center mb-16">
          <h2 className="font-display font-black uppercase tracking-tighter2 leading-[0.85] text-[12vw] sm:text-7xl">
            Dallas is <span className="font-serif italic font-medium tracking-normal text-clay lowercase">talking.</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-paper/10 border border-paper/10">
          {site.press.map((p, i) => (
            <Reveal key={p.outlet} delay={i * 0.08} className="h-full">
              <a href={p.href} target="_blank" rel="noopener noreferrer" className="group flex h-full flex-col justify-between gap-8 bg-night hover:bg-paper/[0.03] transition-colors p-8 sm:p-10">
                <p className="font-serif italic text-2xl sm:text-[1.7rem] leading-snug text-paper/90">&ldquo;{p.quote}&rdquo;</p>
                <div className="flex items-end justify-between gap-4">
                  <span className="font-display font-bold uppercase tracking-tight text-saffron text-xl sm:text-2xl leading-none">{p.outlet}</span>
                  <span className="text-[11px] uppercase tracking-[0.2em] text-paper/50 group-hover:text-paper transition-colors">Read →</span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        {/* stat strip */}
        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-16 gap-y-6 text-center">
            {[
              { n: "6M+", l: "TikTok views" },
              { n: "1st", l: "Yemeni in DFW" },
              { n: `${site.rating}★`, l: "Guest rating" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display font-black text-5xl text-clay leading-none">{s.n}</div>
                <div className="text-paper/50 text-[11px] uppercase tracking-[0.2em] mt-2">{s.l}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
