"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "@/components/Reveal";

export default function ShareFeature() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-16%", "16%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.15, 1.3]);

  return (
    <section ref={ref} className="relative h-[90vh] min-h-[560px] overflow-hidden flex items-center justify-center text-paper">
      {/* parallax background */}
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <Image src="/img/floor-dining.jpg" alt="Guests gathered on the floor around a Yemeni feast" fill className="object-cover" sizes="100vw" />
      </motion.div>
      <div className="absolute inset-0 bg-night/60" />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(32,20,13,0.5), rgba(32,20,13,0.2) 40%, rgba(32,20,13,0.75))" }} />

      <div className="relative z-10 text-center px-6 max-w-3xl">
        <Reveal>
          <span className="text-[11px] uppercase tracking-[0.4em] text-saffron font-bold">Eat the Yemeni Way</span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display font-black uppercase tracking-tighter2 leading-[0.85] text-[15vw] sm:text-8xl lg:text-[9rem] mt-4">
            Gather around
            <br />
            <span className="font-serif italic font-medium tracking-normal lowercase text-clay">the floor.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-paper/80 text-lg max-w-xl mx-auto mt-6 leading-relaxed">
            One steaming platter, warm bread, and everyone&apos;s hands reaching
            in. That&apos;s how Yemen eats — and how we serve it.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <Link href="/menu" className="inline-block mt-9 bg-paper text-ink px-9 py-4 text-xs uppercase tracking-[0.2em] font-bold hover:bg-clay hover:text-paper transition-colors">
            Explore the Table
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
