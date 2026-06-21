"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { site } from "@/lib/site";

const PHRASE = "YEMANDI · MANDI MADE TO SHARE · ";

function KineticRow({
  dir,
  dur,
  opacity,
  className = "",
}: {
  dir: "l" | "r";
  dur: number;
  opacity: number;
  className?: string;
}) {
  const text = PHRASE.repeat(8);
  return (
    <div
      className={`marquee marquee-${dir} ${className}`}
      style={{ ["--dur" as string]: `${dur}s`, opacity }}
    >
      <span className="font-display font-black uppercase tracking-tighter2 text-clay whitespace-nowrap pr-6 text-[12vw] leading-[0.9]">
        {text}
      </span>
      <span className="font-display font-black uppercase tracking-tighter2 text-clay whitespace-nowrap pr-6 text-[12vw] leading-[0.9]" aria-hidden>
        {text}
      </span>
    </div>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] bg-paper overflow-hidden flex items-center justify-center"
    >
      {/* ---- Kinetic tiled wordmark backdrop ---- */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 flex flex-col justify-center gap-[1.5vw] -rotate-[7deg] scale-125 pointer-events-none select-none"
      >
        <KineticRow dir="l" dur={150} opacity={0.07} />
        <KineticRow dir="r" dur={190} opacity={0.11} />
        <KineticRow dir="l" dur={130} opacity={0.5} className="!text-clay" />
        <KineticRow dir="r" dur={190} opacity={0.11} />
        <KineticRow dir="l" dur={160} opacity={0.07} />
      </motion.div>

      {/* soft paper vignette so center subject pops */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 42% 55% at 50% 48%, rgba(243,234,216,0.85) 0%, rgba(243,234,216,0) 70%)" }}
      />

      {/* ---- Center composition ---- */}
      <div className="relative z-10 flex flex-col items-center px-6 pt-24 pb-16">
        {/* wordmark badge */}
        <motion.div
          initial={{ y: -12 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 flex items-center gap-3"
        >
          <span className="h-px w-8 bg-clay/50" />
          <span className="font-body text-[11px] uppercase tracking-[0.45em] text-clay font-bold">
            Yemeni Soul Food
          </span>
          <span className="h-px w-8 bg-clay/50" />
        </motion.div>

        {/* arch-masked hero image */}
        <motion.div
          initial={{ scale: 0.96, y: 24 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
          className="relative w-[80vw] max-w-[440px] sm:max-w-[500px]"
        >
          <div className="arch-tall overflow-hidden shadow-[0_30px_80px_-20px_rgba(32,20,13,0.55)] ring-1 ring-ink/10">
            <motion.div style={{ y: imgY }} className="relative aspect-[3/4] scale-[1.05]">
              <Image
                src="/img/pro-flaming.jpg"
                alt="Flaming Yemeni mandi served tableside"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 640px) 80vw, 500px"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-night/45 via-transparent to-night/30" />
            </motion.div>
          </div>
          {/* clay arch outline echo */}
          <div className="arch-tall absolute -inset-3 border border-clay/40 pointer-events-none" />
          {/* logo icon on the lower part of the picture */}
          <Image
            src="/img/yemandi-mark2.png"
            alt="Yemandi"
            width={300}
            height={300}
            priority
            className="absolute left-1/2 -translate-x-1/2 bottom-4 sm:bottom-6 w-[42%] max-w-[200px] h-auto drop-shadow-[0_6px_18px_rgba(32,20,13,0.55)]"
          />
        </motion.div>

        {/* headline */}
        <motion.h1
          initial={{ y: 18 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="font-display font-black uppercase tracking-tighter2 text-ink text-center leading-[0.85] mt-8 text-[15vw] sm:text-[7rem]"
        >
          Mandi, made
          <br />
          <span className="font-serif italic font-medium tracking-normal lowercase text-clay">to share.</span>
        </motion.h1>

        {/* sub + CTAs */}
        <motion.div
          initial={{ y: 14 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
          className="flex flex-col items-center gap-6 mt-7"
        >
          <p className="text-ink/70 text-base sm:text-lg max-w-md text-center leading-relaxed">
            The first authentic Yemeni table in Dallas — slow-cooked over fire,
            torn by hand, eaten together.
          </p>
          <div className="flex items-center gap-3">
            <Link
              href="/menu"
              className="bg-clay text-paper px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-bold hover:bg-clay-deep transition-colors"
            >
              See the Menu
            </Link>
            <a
              href={site.order}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-ink/25 text-ink px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-bold hover:bg-ink hover:text-paper transition-colors"
            >
              Order
            </a>
          </div>
        </motion.div>
      </div>

      {/* ---- bottom dish marquee strip ---- */}
      <div className="absolute bottom-0 left-0 right-0 bg-clay py-3 overflow-hidden">
        <div className="marquee marquee-l" style={{ ["--dur" as string]: "60s" }}>
          {[0, 1].map((k) => (
            <span key={k} className="flex items-center" aria-hidden={k === 1}>
              {["Mandi", "Haneeth", "Fahsa", "Saltah", "Areekah", "Rashoosh", "Masoub", "Kabsah"].map((d) => (
                <span key={d} className="font-display font-bold uppercase tracking-wide text-paper text-lg px-6 flex items-center gap-6">
                  {d} <span className="text-saffron">&#10022;</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
