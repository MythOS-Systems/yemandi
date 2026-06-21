"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Reveal, staggerParent, staggerItem } from "@/components/Reveal";

const dishes = [
  { name: "Lamb Mandi", tag: "The Signature", img: "/img/pro-mandi-meat.jpg" },
  { name: "Sizzling Fahsa", tag: "Stone Pot", img: "/img/pro-fahsa.jpg" },
  { name: "Sanani Saltah", tag: "National Dish", img: "/img/pro-saltah2.jpg" },
  { name: "Kebab Sanani", tag: "Charcoal", img: "/img/pro-kebab.jpg" },
];

export default function Signatures() {
  return (
    <section className="relative bg-paper py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <Reveal>
            <span className="text-[11px] uppercase tracking-[0.4em] text-clay font-bold">From the Clay Oven</span>
            <h2 className="font-display font-black uppercase tracking-tighter2 leading-[0.85] text-ink text-[13vw] sm:text-7xl lg:text-8xl mt-3">
              What we&apos;re
              <br />
              <span className="font-serif italic font-medium tracking-normal lowercase text-clay">known for</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link href="/menu" className="shrink-0 border border-ink/25 text-ink px-7 py-3.5 text-xs uppercase tracking-[0.2em] font-bold hover:bg-ink hover:text-paper transition-colors">
              Full Menu
            </Link>
          </Reveal>
        </div>

        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-10"
        >
          {dishes.map((d, i) => (
            <motion.div key={d.name} variants={staggerItem} className={i % 2 === 1 ? "lg:mt-16" : ""}>
              <div className="group relative">
                <div className={`${i % 2 === 0 ? "arch-tall" : "rounded-[50%]"} overflow-hidden ring-1 ring-ink/10 shadow-xl`}>
                  <div className="relative aspect-[3/4]">
                    <Image
                      src={d.img}
                      alt={d.name}
                      fill
                      className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                      sizes="(max-width:1024px) 45vw, 22vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-night/55 via-transparent to-transparent" />
                  </div>
                </div>
                <div className="mt-4">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-clay font-bold">{d.tag}</span>
                  <h3 className="font-display font-bold uppercase tracking-tight text-ink text-2xl sm:text-3xl leading-none mt-1">{d.name}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
