"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { site } from "@/lib/site";

const quotes = [
  { text: "The hottest seat in town is the floor at Yemandi — communal platters of mandi and warm bread, eaten the Yemeni way.", source: "D Magazine", detail: "Dallas dining" },
  { text: "The first authentic Yemeni restaurant in DFW — and it went viral on TikTok for good reason. The mandi is unreal.", source: "Featured", detail: "Richardson, TX" },
  { text: "Slow-cooked lamb that falls off the bone, smoky rice, and that fenugreek saltah bubbling in the stone pot.", source: "Guest Review", detail: `${site.rating}★ average` },
];

export default function PressBand() {
  const ref = useScrollReveal(0.1);

  return (
    <section ref={ref} className="relative py-24 sm:py-28 bg-cream overflow-hidden">
      <div className="absolute inset-0 tile-pattern" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="fade-in-up inline-block text-[10px] uppercase tracking-[0.4em] text-pom font-bold mb-4 bg-pom/5 px-4 py-2">A DFW First</span>
          <h2 className="fade-in-up font-display text-4xl sm:text-5xl font-bold text-ink" style={{ transitionDelay: "0.1s" }}>Dallas can&apos;t stop talking</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <div key={i} className="scale-in relative bg-white/60 border border-ink/8 p-8 flex flex-col" style={{ transitionDelay: `${0.1 * i}s` }}>
              <svg className="w-9 h-9 text-copper/30 mb-4" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" /></svg>
              <p className="font-display text-xl text-ink/80 leading-relaxed italic flex-1">{q.text}</p>
              <div className="mt-6 pt-5 border-t border-ink/10">
                <p className="text-pom font-bold text-sm uppercase tracking-[0.15em]">{q.source}</p>
                <p className="text-ink/40 text-xs mt-1">{q.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
