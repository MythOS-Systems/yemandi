import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Menu — Mandi, Haneeth, Fahsa & Saltah in Richardson",
  description:
    "Yemandi's full menu — lamb & chicken mandi, haneeth, sizzling fahsa, saltah, kebab sanani, Yemeni mezze, and tandoor rashoosh. 100% halal, with prices.",
};

export default function MenuPage() {
  return (
    <>
      <Navigation />
      <main className="bg-paper">
        {/* header */}
        <header className="relative pt-32 pb-10 sm:pt-40 sm:pb-12 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-start justify-between gap-6">
              <div>
                <span className="text-[11px] uppercase tracking-[0.4em] text-clay font-bold">The Table</span>
                <h1 className="font-display font-black uppercase tracking-tighter2 leading-[0.82] text-ink text-[18vw] sm:text-8xl lg:text-9xl mt-3">
                  The <span className="font-serif italic font-medium tracking-normal lowercase text-clay">menu</span>
                </h1>
                <p className="text-ink/60 text-base sm:text-lg max-w-md mt-5 leading-relaxed">
                  Slow-cooked over fire, torn by hand. Mandi, haneeth, sizzling
                  fahsa and saltah — every dish made fresh.
                </p>
              </div>

              {/* halal stamp/seal — replaces the generic pill */}
              <div className="shrink-0 mt-4 hidden sm:block">
                <div className="relative w-32 h-32 lg:w-36 lg:h-36 rounded-full border-2 border-clay text-clay flex flex-col items-center justify-center -rotate-[8deg]">
                  <span className="absolute inset-[6px] rounded-full border border-clay/35" />
                  <span className="font-display font-black text-4xl lg:text-5xl leading-none">100%</span>
                  <span className="font-display font-bold tracking-[0.3em] text-sm mt-1">HALAL</span>
                  <span className="font-body text-[8px] uppercase tracking-[0.25em] text-clay/70 mt-1">Yemeni Kitchen</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        <Menu />
      </main>
      <Footer />
    </>
  );
}
