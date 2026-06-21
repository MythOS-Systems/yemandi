"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const photos = [
  { src: "/img/haneeth-lamb.jpg", alt: "Haneeth lamb shank over mandi" },
  { src: "/img/mandi-chicken.jpg", alt: "Chicken mandi" },
  { src: "/img/mandi-chicken-whole.jpg", alt: "Whole chicken mandi" },
  { src: "/img/fahsa-beef.jpg", alt: "Beef fahsa" },
  { src: "/img/fahsa-lamb.jpg", alt: "Lamb fahsa" },
  { src: "/img/saltah.jpg", alt: "Sanani saltah" },
  { src: "/img/kebab-sanani.jpg", alt: "Kebab sanani" },
  { src: "/img/lamb-akdah.jpg", alt: "Lamb akdah" },
  { src: "/img/chicken-akdah.jpg", alt: "Chicken akdah" },
  { src: "/img/lahm-soghar.jpg", alt: "Lahm soghar charred beef" },
  { src: "/img/shrimp-mutafayah.jpg", alt: "Shrimp mutafayah" },
  { src: "/img/seafood-fahsa.jpg", alt: "Seafood fahsa" },
  { src: "/img/pompano-moofa.jpg", alt: "Pompano moofa" },
  { src: "/img/kibda.jpg", alt: "Kibda liver" },
  { src: "/img/shakshookah.jpg", alt: "Shakshookah adeni" },
  { src: "/img/fasoolia.jpg", alt: "Fasoolia nashif" },
  { src: "/img/hummus.jpg", alt: "Hummus" },
  { src: "/img/baba-ghanouj.jpg", alt: "Baba ghanouj" },
  { src: "/img/shafoot.jpg", alt: "Shafoot" },
  { src: "/img/berry-salad.jpg", alt: "Yemandi berry salad" },
  { src: "/img/adeni-fries.jpg", alt: "Adeni fries" },
  { src: "/img/rashoosh.jpg", alt: "Rashoosh bread" },
  { src: "/img/areekah.jpg", alt: "Areekah" },
  { src: "/img/masoub.jpg", alt: "Masoub" },
];

export default function Gallery() {
  const ref = useScrollReveal(0.02);
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const prev = useCallback(() => setOpen((i) => (i === null ? i : (i + photos.length - 1) % photos.length)), []);
  const next = useCallback(() => setOpen((i) => (i === null ? i : (i + 1) % photos.length)), []);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close, prev, next]);

  return (
    <section ref={ref} className="relative py-16 sm:py-20 bg-cream overflow-hidden">
      <div className="absolute inset-0 tile-pattern" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {photos.map((p, i) => (
            <button key={p.src} onClick={() => setOpen(i)} className="scale-in group relative block w-full aspect-square overflow-hidden shadow-md hover:shadow-2xl transition-shadow" style={{ transitionDelay: `${0.02 * (i % 8)}s` }} aria-label={`View ${p.alt}`}>
              <Image src={p.src} alt={p.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw" />
              <div className="absolute inset-0 bg-pine-deep/0 group-hover:bg-pine-deep/20 transition-colors" />
            </button>
          ))}
        </div>
      </div>

      {open !== null && (
        <div className="fixed inset-0 z-[100] bg-pine-deep/95 backdrop-blur-sm flex items-center justify-center p-4" onClick={close}>
          <button onClick={close} className="absolute top-5 right-5 text-cream/70 hover:text-gold w-12 h-12 flex items-center justify-center text-3xl" aria-label="Close">&times;</button>
          <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-3 sm:left-8 text-cream/70 hover:text-gold w-12 h-12 flex items-center justify-center text-4xl" aria-label="Previous">&#8249;</button>
          <div className="relative max-w-4xl max-h-[82vh] w-full aspect-[4/3]" onClick={(e) => e.stopPropagation()}>
            <Image src={photos[open].src} alt={photos[open].alt} fill className="object-contain" sizes="90vw" />
            <p className="absolute -bottom-9 left-0 right-0 text-center text-cream/60 text-sm">{photos[open].alt}</p>
          </div>
          <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-3 sm:right-8 text-cream/70 hover:text-gold w-12 h-12 flex items-center justify-center text-4xl" aria-label="Next">&#8250;</button>
        </div>
      )}
    </section>
  );
}
