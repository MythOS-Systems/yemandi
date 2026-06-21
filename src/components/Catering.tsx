"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { site } from "@/lib/site";

const packages = [
  { title: "Mandi Platters", desc: "Whole-chicken and lamb mandi on big platters of smoky rice — the centerpiece of any gathering.", icon: "M3 3h18v4H3zM5 7v14h14V7" },
  { title: "Events & Weddings", desc: "Full Yemeni spreads for celebrations — mandi, haneeth, saltah, salads, and fresh rashoosh.", icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" },
  { title: "Family Feasts", desc: "Order ahead and eat the Yemeni way at home — communal platters made to share.", icon: "M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2M9 7a4 4 0 108 0 4 4 0 00-8 0" },
];

export default function Catering() {
  const ref = useScrollReveal(0.05);

  return (
    <section ref={ref} className="relative bg-cream overflow-hidden">
      <div className="relative py-16 sm:py-20">
        <div className="absolute inset-0 tile-pattern" />
        <div className="relative max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in-left relative">
            <div className="relative aspect-[4/3] overflow-hidden shadow-2xl">
              <Image src="/img/mandi-chicken-whole.jpg" alt="A whole mandi platter for sharing" fill className="object-cover" sizes="(max-width: 1024px) 90vw, 45vw" />
            </div>
            <div className="absolute -inset-3 border border-copper/20 pointer-events-none hidden lg:block" />
          </div>
          <div>
            <span className="fade-in-up inline-block text-[10px] uppercase tracking-[0.4em] text-pom font-bold mb-5 bg-pom/5 px-4 py-2">Catering &amp; Large Orders</span>
            <h2 className="fade-in-up font-display text-4xl sm:text-5xl font-bold text-ink leading-[1.05] mb-6" style={{ transitionDelay: "0.1s" }}>
              Yemeni feasts for <span className="text-pom italic">any crowd.</span>
            </h2>
            <p className="fade-in-up text-ink/65 text-lg leading-relaxed mb-4" style={{ transitionDelay: "0.2s" }}>
              From mandi platters to full event spreads, we scale the same
              slow-cooked, halal Yemeni cooking — finished with tandoor-fresh
              rashoosh bread.
            </p>
            <p className="fade-in-up text-ink/55 text-base leading-relaxed" style={{ transitionDelay: "0.25s" }}>
              Tell us your date and headcount and we&apos;ll build a menu around it.
            </p>
            <div className="fade-in-up mt-8 flex flex-wrap gap-4" style={{ transitionDelay: "0.3s" }}>
              <a href={site.phoneHref} className="bg-copper text-pine-deep px-8 py-4 text-sm uppercase tracking-[0.18em] font-bold hover:bg-gold transition-all hover:-translate-y-0.5">Call {site.phone}</a>
              <a href={site.order} target="_blank" rel="noopener noreferrer" className="border-2 border-ink/20 text-ink px-8 py-4 text-sm uppercase tracking-[0.18em] font-semibold hover:border-pom hover:text-pom transition-all hover:-translate-y-0.5">Order Online</a>
            </div>
          </div>
        </div>
      </div>

      <div className="relative py-16 sm:py-20 bg-pine-deep">
        <div className="absolute inset-0 tile-pattern-dark" />
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((p, i) => (
              <div key={p.title} className="scale-in bg-cream/5 border border-cream/10 p-8 hover:border-copper/40 transition-colors" style={{ transitionDelay: `${0.1 * i}s` }}>
                <div className="w-14 h-14 rounded-full bg-copper/15 flex items-center justify-center mb-5">
                  <svg className="w-7 h-7 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={p.icon} /></svg>
                </div>
                <h3 className="font-display text-2xl font-bold text-cream mb-3">{p.title}</h3>
                <p className="text-cream/55 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-cream/40 text-sm mt-10">Please call ahead for large mandi orders so everything is fresh from the oven.</p>
        </div>
      </div>
    </section>
  );
}
