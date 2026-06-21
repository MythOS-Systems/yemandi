"use client";

import Image from "next/image";
import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface Dish {
  name: string;
  note?: string;
  price: string;
  img?: string;
  tag?: string;
  category: string;
}

const categories = ["All", "Mandi & Rice", "Yemeni Hot Pots", "Grills & Seafood", "Beans & Breakfast", "Mezze & Salads", "Bread & Sweets"];

const dishes: Dish[] = [
  // Mandi & Rice
  { name: "Haneeth Lamb Shank", note: "Slow-roasted lamb shank over smoky, spiced mandi rice.", price: "$34.99", img: "/img/haneeth-lamb.jpg", tag: "The Signature", category: "Mandi & Rice" },
  { name: "Chicken Mandi (Half)", note: "Half chicken slow-cooked over fragrant saffron rice.", price: "$17.99", img: "/img/mandi-chicken.jpg", tag: "House Favorite", category: "Mandi & Rice" },
  { name: "Chicken Mandi (Whole)", note: "A whole chicken over a bed of smoky mandi rice — built to share.", price: "$29.99", img: "/img/mandi-chicken-whole.jpg", category: "Mandi & Rice" },
  { name: "Chicken Akdah", note: "Chicken cooked in a sizzling clay pot with rice.", price: "$17.99", img: "/img/chicken-akdah.jpg", category: "Mandi & Rice" },
  { name: "Lamb Akdah", note: "Tender lamb in a clay pot, served with rice.", price: "$23.99", img: "/img/lamb-akdah.jpg", category: "Mandi & Rice" },
  { name: "Lahm Soghar", note: "Charred beef over rice — smoky and tender.", price: "$22.99", img: "/img/lahm-soghar.jpg", category: "Mandi & Rice" },

  // Yemeni Hot Pots
  { name: "Fahsa Beef", note: "Shredded beef bubbling in a sizzling stone pot — eaten with bread.", price: "$29.99", img: "/img/fahsa-beef.jpg", tag: "Served Sizzling", category: "Yemeni Hot Pots" },
  { name: "Fahsa Lamb", note: "The lamb version of Yemen's beloved hot pot stew.", price: "$30.00", img: "/img/fahsa-lamb.jpg", category: "Yemeni Hot Pots" },
  { name: "Sanani Saltah", note: "Yemen's national dish — hearty hot pot topped with fenugreek foam.", price: "$23.99", img: "/img/saltah.jpg", tag: "National Dish", category: "Yemeni Hot Pots" },
  { name: "Seafood Fahsa", note: "A sizzling stone pot loaded with mixed seafood.", price: "$41.99", img: "/img/seafood-fahsa.jpg", category: "Yemeni Hot Pots" },

  // Grills & Seafood
  { name: "Kebab Sanani", note: "Sana'a-style grilled kebab, charred and spiced.", price: "$29.99", img: "/img/kebab-sanani.jpg", category: "Grills & Seafood" },
  { name: "Shrimp Mutafayah", note: "Shrimp in a rich, spiced Yemeni sauce.", price: "$26.99", img: "/img/shrimp-mutafayah.jpg", category: "Grills & Seafood" },
  { name: "Pompano Moofa", note: "Whole fish baked moofa-style in the clay oven.", price: "$29.99", img: "/img/pompano-moofa.jpg", category: "Grills & Seafood" },

  // Beans & Breakfast
  { name: "Fasoolia Nashif", note: "Charred white beans, smoky and savory.", price: "$17.99", img: "/img/fasoolia.jpg", category: "Beans & Breakfast" },
  { name: "Shakshookah Adeni", note: "Aden-style eggs simmered in spiced tomato.", price: "$17.99", img: "/img/shakshookah.jpg", category: "Beans & Breakfast" },
  { name: "Lahsah Eggs", note: "Yemeni-style eggs cooked in a sizzling pot.", price: "$19.99", img: "/img/lahsah-eggs.jpg", category: "Beans & Breakfast" },
  { name: "Kibda (Liver)", note: "Sautéed liver with peppers and Yemeni spices.", price: "$22.99", img: "/img/kibda.jpg", category: "Beans & Breakfast" },

  // Mezze & Salads
  { name: "Hummus", note: "Creamy chickpea dip with warm bread.", price: "$9.99", img: "/img/hummus.jpg", category: "Mezze & Salads" },
  { name: "Baba Ghanouj", note: "Smoky roasted eggplant dip.", price: "$10.99", img: "/img/baba-ghanouj.jpg", category: "Mezze & Salads" },
  { name: "Shafoot", note: "Cold flatbread soaked in herbed yogurt — refreshing.", price: "$11.99", img: "/img/shafoot.jpg", tag: "Yemeni Classic", category: "Mezze & Salads" },
  { name: "Yemandi Berry Salad", note: "Greens with berries, nuts, and a bright dressing.", price: "$16.99", img: "/img/berry-salad.jpg", category: "Mezze & Salads" },
  { name: "Salmon Salad", note: "Grilled salmon over fresh greens.", price: "$29.99", img: "/img/salmon-salad.jpg", category: "Mezze & Salads" },
  { name: "Arugula Salad", note: "Peppery arugula, simply dressed.", price: "$10.99", img: "/img/arugula-salad.jpg", category: "Mezze & Salads" },
  { name: "Adeni Fries", note: "Aden-style spiced fries.", price: "$11.99", img: "/img/adeni-fries.jpg", category: "Mezze & Salads" },

  // Bread & Sweets
  { name: "Rashoosh Bread", note: "Tandoor-baked Yemeni flatbread — single, double, or triple.", price: "$4.99", img: "/img/rashoosh.jpg", tag: "Baked Fresh", category: "Bread & Sweets" },
  { name: "Areekah", note: "Mashed dates and bread with honey and nigella — a Yemeni sweet.", price: "$14.99", img: "/img/areekah.jpg", category: "Bread & Sweets" },
  { name: "Masoub", note: "Banana bread pudding with honey, cream, and nuts.", price: "$14.99", img: "/img/masoub.jpg", tag: "Don't Miss", category: "Bread & Sweets" },
  { name: "Lamb Broth (Marag)", note: "Rich Yemeni lamb broth — comforting and warming.", price: "$3.99", img: "/img/marag.jpg", category: "Bread & Sweets" },
  { name: "Sahawiq", note: "Fiery Yemeni hot sauce — red or green.", price: "$2.99", img: "/img/sahawiq.jpg", category: "Bread & Sweets" },
];

export default function Menu() {
  const ref = useScrollReveal(0.04);
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? dishes : dishes.filter((d) => d.category === active);

  return (
    <section ref={ref} className="relative py-16 sm:py-20 bg-pine-deep overflow-hidden">
      <div className="absolute inset-0 tile-pattern-dark" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setActive(cat)} className={`px-5 py-2.5 text-xs uppercase tracking-[0.14em] font-semibold transition-all ${active === cat ? "bg-copper text-pine-deep" : "bg-cream/5 text-cream/50 hover:text-cream hover:bg-cream/10"}`}>
              {cat}
            </button>
          ))}
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-3 bg-gold/10 border border-gold/20 px-6 py-3 rounded-full">
            <svg className="w-4 h-4 text-gold" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0l3 9 9 3-9 3-3 9-3-9-9-3 9-3z" /></svg>
            <span className="text-cream/80 text-xs uppercase tracking-[0.2em] font-bold">Everything is 100% Halal</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((dish, i) => (
            <div key={dish.name} className={`scale-in group relative overflow-hidden transition-all duration-500 ${dish.img ? "bg-ink/50" : "bg-pine/30 border border-gold/10 hover:border-copper/40"}`} style={{ transitionDelay: `${0.03 * (i % 9)}s` }}>
              {dish.img ? (
                <>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={dish.img} alt={dish.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    {dish.tag && <span className="inline-block text-[10px] uppercase tracking-widest text-gold bg-gold/15 backdrop-blur-sm px-3 py-1 mb-3 rounded-full font-bold">{dish.tag}</span>}
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="font-display text-2xl font-bold text-cream">{dish.name}</h3>
                      <span className="text-gold font-bold text-lg shrink-0">{dish.price}</span>
                    </div>
                    {dish.note && <p className="text-cream/60 text-sm leading-relaxed mt-1.5">{dish.note}</p>}
                  </div>
                </>
              ) : (
                <div className="p-6 sm:p-7 h-full flex flex-col">
                  {dish.tag && <span className="inline-block text-[10px] uppercase tracking-widest text-gold bg-gold/10 px-3 py-1 mb-3 rounded-full font-bold self-start">{dish.tag}</span>}
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-xl font-bold text-cream group-hover:text-gold transition-colors">{dish.name}</h3>
                    <span className="text-gold font-bold text-lg shrink-0">{dish.price}</span>
                  </div>
                  {dish.note && <p className="text-cream/45 text-sm leading-relaxed mt-2">{dish.note}</p>}
                  <div className="mt-auto pt-4 text-[10px] uppercase tracking-widest text-cream/20">{dish.category}</div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <p className="text-cream/30 text-sm">Prices subject to change &middot; Mandi by the half or whole &middot; Catering available</p>
        </div>
      </div>
    </section>
  );
}
