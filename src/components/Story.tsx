"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { site } from "@/lib/site";

export default function Story() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="relative py-16 sm:py-24 bg-cream overflow-hidden">
      <div className="absolute top-1/2 right-0 -translate-y-1/2 pointer-events-none select-none overflow-hidden">
        <span className="font-display text-[9rem] sm:text-[15rem] font-bold text-pine/[0.03] leading-none whitespace-nowrap italic">Yemen</span>
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="fade-in-left lg:col-span-5" style={{ transitionDelay: "0.1s" }}>
            <div className="relative max-w-md mx-auto lg:mx-0">
              <div className="relative aspect-[3/4] overflow-hidden shadow-2xl">
                <Image src="/img/haneeth-lamb.jpg" alt="Yemeni haneeth lamb over mandi rice" fill className="object-cover" sizes="(max-width: 1024px) 90vw, 40vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-pine-deep/30 to-transparent" />
              </div>
              <div className="absolute -inset-3 border border-copper/20 pointer-events-none" />
              <div className="absolute -inset-6 border border-pom/10 pointer-events-none hidden sm:block" />
              <div className="absolute -bottom-6 -right-4 sm:-right-10 bg-pine-deep text-cream p-6 shadow-xl max-w-[240px]">
                <svg className="w-6 h-6 text-gold/60 mb-2" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" /></svg>
                <p className="text-sm leading-relaxed text-cream/80 italic">Yemen on a platter — shared, smoky, and unforgettable.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="fade-in-up space-y-5" style={{ transitionDelay: "0.2s" }}>
              <p className="text-ink/70 text-lg sm:text-xl leading-relaxed">
                Yemandi opened as the first authentic Yemeni restaurant in DFW —
                and quickly went viral for bringing a cuisine Dallas had never
                tasted before to Richardson.
              </p>
              <p className="text-ink/60 text-lg leading-relaxed">
                At the heart of it is mandi: rice and meat slow-cooked low and
                smoky, a tradition from the Hadhramaut region of Yemen. Around it
                we serve haneeth, sizzling fahsa, fenugreek-topped saltah, and
                rashoosh bread baked fresh in a traditional tandoor.
              </p>
              <p className="text-ink/55 text-lg leading-relaxed">
                Everything is made in-house with halal meats and premium
                ingredients — and best enjoyed the Yemeni way: shared.
              </p>
            </div>

            <div className="fade-in-up mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4" style={{ transitionDelay: "0.3s" }}>
              <div className="p-6 bg-gradient-to-r from-pom/5 to-transparent border-l-4 border-copper">
                <p className="text-ink/70 text-sm font-semibold mb-1">A DFW first</p>
                <p className="text-ink/50 text-sm leading-relaxed">The area&apos;s first authentic Yemeni kitchen — featured in D Magazine.</p>
              </div>
              <div className="p-6 bg-gradient-to-r from-pom/5 to-transparent border-l-4 border-copper">
                <p className="text-ink/70 text-sm font-semibold mb-1">Tandoor-fresh</p>
                <p className="text-ink/50 text-sm leading-relaxed">Rashoosh bread baked to order in a traditional clay oven.</p>
              </div>
            </div>

            <div className="fade-in-up mt-8 flex flex-wrap gap-8" style={{ transitionDelay: "0.4s" }}>
              {[
                { number: `${site.rating}★`, label: "Guest Rating" },
                { number: "100%", label: "Halal" },
                { number: "1st", label: "Yemeni in DFW" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-display text-3xl font-bold text-pom">{s.number}</div>
                  <div className="text-ink/40 text-xs uppercase tracking-widest mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
