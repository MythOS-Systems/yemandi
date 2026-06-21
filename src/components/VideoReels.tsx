"use client";

import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

const reels = ["/videos/reel-1.mp4", "/videos/reel-2.mp4"];

export default function VideoReels() {
  return (
    <section className="relative bg-paper-2 py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* copy */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <Reveal>
              <span className="text-[11px] uppercase tracking-[0.4em] text-clay font-bold">@yemandi_usa</span>
              <h2 className="font-display font-black uppercase tracking-tighter2 leading-[0.85] text-ink text-[13vw] sm:text-6xl lg:text-7xl mt-3">
                Caught on
                <br />
                <span className="font-serif italic font-medium tracking-normal lowercase text-clay">camera.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-ink/65 text-lg leading-relaxed mt-6 max-w-md">
                A month after opening, the internet found us — nearly{" "}
                <span className="text-clay font-semibold">6 million views</span> and
                counting. Here&apos;s what all the noise is about.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" className="inline-block mt-8 bg-ink text-paper px-8 py-4 text-xs uppercase tracking-[0.2em] font-bold hover:bg-clay transition-colors">
                Follow @yemandi_usa
              </a>
            </Reveal>
          </div>

          {/* vertical reels */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="flex justify-center gap-4 sm:gap-6">
              {reels.map((src, i) => (
                <Reveal key={src} delay={i * 0.12} y={48} className={i === 1 ? "mt-8 sm:mt-12" : ""}>
                  <div className="relative w-[42vw] max-w-[230px] aspect-[9/16] rounded-[1.4rem] overflow-hidden bg-night shadow-[0_30px_70px_-20px_rgba(32,20,13,0.5)] ring-1 ring-ink/10">
                    <video
                      src={src}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
