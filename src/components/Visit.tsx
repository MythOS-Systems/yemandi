"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { site } from "@/lib/site";

export default function Visit() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="relative py-16 sm:py-24 bg-pine-deep overflow-hidden">
      <div className="absolute inset-0 tile-pattern-dark" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-2 space-y-5">
            <a href={`https://maps.google.com/?q=${site.address.mapsQuery}`} target="_blank" rel="noopener noreferrer" className="fade-in-up block p-7 bg-cream/5 border border-cream/10 hover:border-copper/40 hover:bg-cream/8 transition-all group" style={{ transitionDelay: "0.15s" }}>
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-copper/15 flex items-center justify-center shrink-0 group-hover:bg-copper/25 transition-colors">
                  <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold mb-2">Address</p>
                  <p className="text-cream/80 text-lg leading-relaxed group-hover:text-cream transition-colors">{site.address.line1}<br />{site.address.line2}</p>
                  <p className="text-gold/70 text-xs mt-2 uppercase tracking-wider">Get Directions →</p>
                </div>
              </div>
            </a>

            <a href={site.phoneHref} className="fade-in-up block p-7 bg-cream/5 border border-cream/10 hover:border-copper/40 hover:bg-cream/8 transition-all group" style={{ transitionDelay: "0.2s" }}>
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-copper/15 flex items-center justify-center shrink-0 group-hover:bg-copper/25 transition-colors">
                  <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11 11 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold mb-2">Call / Order</p>
                  <p className="text-cream/80 text-lg group-hover:text-cream transition-colors">{site.phone}</p>
                </div>
              </div>
            </a>

            <div className="fade-in-up p-7 bg-cream/5 border border-cream/10" style={{ transitionDelay: "0.25s" }}>
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-copper/15 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div className="flex-1">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold mb-3">Hours</p>
                  <ul className="space-y-1.5">
                    {site.hours.map((h) => (
                      <li key={h.day} className="flex items-baseline justify-between gap-4 text-sm">
                        <span className="text-cream/60">{h.day}</span>
                        <span className={h.late ? "text-gold font-semibold" : "text-cream/80"}>{h.time}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-cream/35 text-xs italic mt-3">Open daily &middot; late on weekends</p>
                </div>
              </div>
            </div>

            <div className="fade-in-up grid grid-cols-2 gap-3" style={{ transitionDelay: "0.3s" }}>
              <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 p-5 bg-cream/5 border border-cream/10 hover:border-copper/40 hover:bg-cream/8 transition-all group">
                <svg className="w-5 h-5 text-cream/50 group-hover:text-gold transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                <span className="text-cream/50 group-hover:text-cream text-sm font-semibold transition-colors">Facebook</span>
              </a>
              <a href={site.order} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 p-5 bg-copper text-pine-deep border border-copper hover:bg-gold transition-all font-bold">
                <span className="text-sm uppercase tracking-[0.1em]">Order Online</span>
              </a>
            </div>
          </div>

          <div className="fade-in-right lg:col-span-3" style={{ transitionDelay: "0.25s" }}>
            <div className="relative h-full">
              <div className="aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[520px] overflow-hidden border border-cream/10">
                <iframe title="Yemandi Yemeni Cuisine location" src="https://www.google.com/maps?q=888+S+Greenville+Ave+Richardson+TX+75081&output=embed" className="w-full h-full border-0" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </div>
              <div className="absolute -left-2 -top-2 w-10 h-10 border-l-2 border-t-2 border-copper/40 pointer-events-none" />
              <div className="absolute -right-2 -bottom-2 w-10 h-10 border-r-2 border-b-2 border-copper/40 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
