"use client";

import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export default function VisitCTA() {
  return (
    <section className="relative bg-paper py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <Reveal>
            <span className="text-[11px] uppercase tracking-[0.4em] text-clay font-bold">Find Us</span>
            <h2 className="font-display font-black uppercase tracking-tighter2 leading-[0.82] text-ink text-[14vw] sm:text-7xl lg:text-8xl mt-3">
              Come
              <br />
              <span className="font-serif italic font-medium tracking-normal lowercase text-clay">hungry.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-3 mt-9">
              <a href={site.order} target="_blank" rel="noopener noreferrer" className="bg-clay text-paper px-9 py-4 text-xs uppercase tracking-[0.2em] font-bold hover:bg-clay-deep transition-colors">
                Order Online
              </a>
              <Link href="/menu" className="border border-ink/25 text-ink px-9 py-4 text-xs uppercase tracking-[0.2em] font-bold hover:bg-ink hover:text-paper transition-colors">
                See the Menu
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal y={40} className="space-y-4">
          <a href={`https://maps.google.com/?q=${site.address.mapsQuery}`} target="_blank" rel="noopener noreferrer" className="block p-7 bg-paper-2 border border-ink/10 hover:border-clay/50 transition-colors group">
            <p className="text-[10px] uppercase tracking-[0.3em] text-clay font-bold mb-2">Address</p>
            <p className="font-display font-bold uppercase tracking-tight text-ink text-2xl leading-tight group-hover:text-clay transition-colors">{site.address.line1}<br />{site.address.line2}</p>
          </a>
          <div className="grid grid-cols-2 gap-4">
            <a href={site.phoneHref} className="p-7 bg-paper-2 border border-ink/10 hover:border-clay/50 transition-colors">
              <p className="text-[10px] uppercase tracking-[0.3em] text-clay font-bold mb-2">Call</p>
              <p className="font-display font-bold text-ink text-xl">{site.phone}</p>
            </a>
            <div className="p-7 bg-paper-2 border border-ink/10">
              <p className="text-[10px] uppercase tracking-[0.3em] text-clay font-bold mb-2">Hours</p>
              <p className="font-display font-bold text-ink text-xl leading-tight">Daily<br /><span className="text-ink/60 text-base font-body font-normal">11am – late</span></p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
