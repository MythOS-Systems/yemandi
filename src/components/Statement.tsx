"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "@/components/Reveal";

export default function Statement() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section ref={ref} className="relative bg-night text-paper overflow-hidden py-24 sm:py-36">
      {/* faint kinetic word */}
      <div className="absolute -top-2 left-0 right-0 overflow-hidden pointer-events-none select-none">
        <div className="marquee marquee-r" style={{ ["--dur" as string]: "120s" }}>
          {[0, 1].map((k) => (
            <span key={k} className="font-display font-black uppercase text-paper/[0.05] text-[14vw] leading-none whitespace-nowrap pr-8" aria-hidden={k === 1}>
              YEMENI SOUL FOOD · YEMENI SOUL FOOD ·
            </span>
          ))}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* text */}
        <div className="lg:col-span-7 order-2 lg:order-1">
          <Reveal>
            <span className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.4em] text-saffron font-bold mb-7">
              <span className="h-px w-8 bg-saffron/60" /> A DFW First
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display font-black uppercase tracking-tighter2 leading-[0.88] text-[12vw] sm:text-7xl lg:text-8xl">
              Not just dinner.
              <br />
              <span className="font-serif italic font-medium tracking-normal lowercase text-clay">a table you</span>
              <br />
              gather around.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-paper/65 text-lg leading-relaxed max-w-xl mt-8">
              We brought the first authentic Yemeni kitchen to the metroplex —
              slow-cooked mandi and haneeth, sizzling fahsa, fenugreek saltah,
              and rashoosh torn fresh from the clay oven. It&apos;s food meant to
              be shared, with your hands, with your people.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="flex flex-wrap gap-10 mt-10 pt-10 border-t border-paper/15">
              {[
                { n: "1st", l: "Yemeni in DFW" },
                { n: "100%", l: "Halal" },
                { n: "Clay", l: "Oven Bread" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display font-black text-4xl text-saffron leading-none">{s.n}</div>
                  <div className="text-paper/50 text-[11px] uppercase tracking-[0.2em] mt-2">{s.l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* parallax arch image */}
        <div className="lg:col-span-5 order-1 lg:order-2">
          <Reveal y={48} className="relative mx-auto max-w-sm">
            <div className="rounded-[50%] overflow-hidden ring-1 ring-paper/15 shadow-2xl">
              <motion.div style={{ y: imgY }} className="relative aspect-[4/5] scale-125">
                <Image src="/img/pro-saltah.jpg" alt="Sizzling Yemeni saltah in a stone pot" fill className="object-cover" sizes="(max-width:1024px) 80vw, 420px" />
              </motion.div>
            </div>
            <div className="rounded-[50%] absolute -inset-3 border border-saffron/30 pointer-events-none" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
