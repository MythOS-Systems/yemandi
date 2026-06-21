"use client";

import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { StackedCardsSwipe } from "@/components/ui/stacked-cards-swipe";

const deck = [
  { image: "/img/pro-flaming.jpg", title: "Lamb Mandi", price: "$34.99", description: "slow-roasted, smoky rice" },
  { image: "/img/pro-fahsa.jpg", title: "Fahsa", price: "$29.99", description: "sizzling stone pot" },
  { image: "/img/pro-saltah.jpg", title: "Sanani Saltah", price: "$23.99", description: "fenugreek foam" },
  { image: "/img/pro-shrimp.jpg", title: "Shrimp Mutafayah", price: "$26.99", description: "spiced Yemeni sauce" },
  { image: "/img/pro-fish.jpg", title: "Pompano Moofa", price: "$29.99", description: "clay-oven baked" },
  { image: "/img/pro-mandi-chicken.jpg", title: "Chicken Mandi", price: "$17.99", description: "saffron rice" },
];

const items = [
  { name: "Haneeth Lamb Shank", note: "slow-roasted over smoky mandi rice", price: "$34.99" },
  { name: "Chicken Mandi", note: "half or whole, saffron rice", price: "$17.99" },
  { name: "Sanani Saltah", note: "hot pot, fenugreek foam", price: "$23.99" },
  { name: "Fahsa", note: "shredded meat, sizzling stone pot", price: "$29.99" },
  { name: "Kebab Sanani", note: "charcoal-grilled, Sana'a style", price: "$29.99" },
  { name: "Areekah", note: "dates, honey, nigella", price: "$14.99" },
];

export default function MenuPreview() {
  return (
    <section className="relative bg-paper-2 py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        {/* swipeable card deck */}
        <div className="lg:col-span-5 pb-16">
          <Reveal y={40}>
            <StackedCardsSwipe cards={deck} />
          </Reveal>
        </div>

        {/* list */}
        <div className="lg:col-span-7">
          <Reveal>
            <span className="text-[11px] uppercase tracking-[0.4em] text-clay font-bold">The Table</span>
            <h2 className="font-display font-black uppercase tracking-tighter2 leading-[0.85] text-ink text-[12vw] sm:text-6xl lg:text-7xl mt-3 mb-10">
              A taste of
              <br />
              <span className="font-serif italic font-medium tracking-normal lowercase text-clay">the menu</span>
            </h2>
          </Reveal>

          <ul className="divide-y divide-ink/12">
            {items.map((it, i) => (
              <Reveal key={it.name} delay={i * 0.05}>
                <li className="flex items-baseline gap-4 py-4 group">
                  <div className="min-w-0">
                    <span className="font-display font-bold uppercase tracking-tight text-ink text-xl sm:text-2xl group-hover:text-clay transition-colors">{it.name}</span>
                    <span className="text-ink/45 text-sm ml-3 hidden sm:inline">{it.note}</span>
                  </div>
                  <span className="flex-1 border-b border-dotted border-ink/25 translate-y-[-3px]" />
                  <span className="font-display font-bold text-clay text-xl shrink-0">{it.price}</span>
                </li>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.1}>
            <Link href="/menu" className="inline-block mt-10 bg-clay text-paper px-9 py-4 text-xs uppercase tracking-[0.2em] font-bold hover:bg-clay-deep transition-colors">
              See the Full Menu
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
