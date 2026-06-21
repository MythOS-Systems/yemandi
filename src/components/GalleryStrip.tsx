"use client";

import Image from "next/image";

const row = [
  { src: "/img/mandi-chicken-whole.jpg", alt: "Whole chicken mandi" },
  { src: "/img/lamb-akdah.jpg", alt: "Lamb akdah" },
  { src: "/img/kebab-sanani.jpg", alt: "Kebab sanani" },
  { src: "/img/shrimp-mutafayah.jpg", alt: "Shrimp mutafayah" },
  { src: "/img/fahsa-lamb.jpg", alt: "Lamb fahsa" },
  { src: "/img/hummus.jpg", alt: "Hummus" },
  { src: "/img/berry-salad.jpg", alt: "Yemandi berry salad" },
  { src: "/img/adeni-fries.jpg", alt: "Adeni fries" },
];

export default function GalleryStrip() {
  const images = [...row, ...row];
  return (
    <section className="relative py-14 bg-ink overflow-hidden">
      <div className="text-center mb-8">
        <p className="text-cream/30 text-[10px] uppercase tracking-[0.5em]">From the clay oven to your table</p>
      </div>
      <div className="relative">
        <div className="flex gap-4 w-max animate-marquee">
          {images.map((img, i) => (
            <div key={i} className="relative flex-shrink-0 w-64 sm:w-80 aspect-[4/3] overflow-hidden group">
              <Image src={img.src} alt={img.alt} fill className="object-cover group-hover:scale-110 transition-transform duration-700" sizes="320px" />
              <div className="absolute inset-0 bg-ink/20 group-hover:bg-ink/0 transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { animation: marquee 38s linear infinite; }
        @media (prefers-reduced-motion: reduce) { .animate-marquee { animation: none; } }
      `}</style>
    </section>
  );
}
