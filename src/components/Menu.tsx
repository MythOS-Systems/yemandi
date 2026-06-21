"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { staggerParent, staggerItem } from "@/components/Reveal";

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
  { name: "Haneeth Lamb Shank", note: "Slow-roasted lamb shank over smoky, spiced mandi rice.", price: "$34.99", img: "/img/haneeth-lamb.jpg", tag: "The Signature", category: "Mandi & Rice" },
  { name: "Chicken Mandi (Half)", note: "Half chicken slow-cooked over fragrant saffron rice.", price: "$17.99", img: "/img/mandi-chicken.jpg", tag: "House Favorite", category: "Mandi & Rice" },
  { name: "Chicken Mandi (Whole)", note: "A whole chicken over a bed of smoky mandi rice — built to share.", price: "$29.99", img: "/img/mandi-chicken-whole.jpg", category: "Mandi & Rice" },
  { name: "Chicken Akdah", note: "Chicken cooked in a sizzling clay pot with rice.", price: "$17.99", img: "/img/chicken-akdah.jpg", category: "Mandi & Rice" },
  { name: "Lamb Akdah", note: "Tender lamb in a clay pot, served with rice.", price: "$23.99", img: "/img/lamb-akdah.jpg", category: "Mandi & Rice" },
  { name: "Lahm Soghar", note: "Charred beef over rice — smoky and tender.", price: "$22.99", img: "/img/lahm-soghar.jpg", category: "Mandi & Rice" },
  { name: "Fahsa Beef", note: "Shredded beef bubbling in a sizzling stone pot — eaten with bread.", price: "$29.99", img: "/img/fahsa-beef.jpg", tag: "Served Sizzling", category: "Yemeni Hot Pots" },
  { name: "Fahsa Lamb", note: "The lamb version of Yemen's beloved hot pot stew.", price: "$30.00", img: "/img/fahsa-lamb.jpg", category: "Yemeni Hot Pots" },
  { name: "Sanani Saltah", note: "Yemen's national dish — hearty hot pot topped with fenugreek foam.", price: "$23.99", img: "/img/saltah.jpg", tag: "National Dish", category: "Yemeni Hot Pots" },
  { name: "Seafood Fahsa", note: "A sizzling stone pot loaded with mixed seafood.", price: "$41.99", img: "/img/seafood-fahsa.jpg", category: "Yemeni Hot Pots" },
  { name: "Kebab Sanani", note: "Sana'a-style grilled kebab, charred and spiced.", price: "$29.99", img: "/img/kebab-sanani.jpg", category: "Grills & Seafood" },
  { name: "Shrimp Mutafayah", note: "Shrimp in a rich, spiced Yemeni sauce.", price: "$26.99", img: "/img/shrimp-mutafayah.jpg", category: "Grills & Seafood" },
  { name: "Pompano Moofa", note: "Whole fish baked moofa-style in the clay oven.", price: "$29.99", img: "/img/pompano-moofa.jpg", category: "Grills & Seafood" },
  { name: "Fasoolia Nashif", note: "Charred white beans, smoky and savory.", price: "$17.99", img: "/img/fasoolia.jpg", category: "Beans & Breakfast" },
  { name: "Shakshookah Adeni", note: "Aden-style eggs simmered in spiced tomato.", price: "$17.99", img: "/img/shakshookah.jpg", category: "Beans & Breakfast" },
  { name: "Lahsah Eggs", note: "Yemeni-style eggs cooked in a sizzling pot.", price: "$19.99", img: "/img/lahsah-eggs.jpg", category: "Beans & Breakfast" },
  { name: "Kibda (Liver)", note: "Sautéed liver with peppers and Yemeni spices.", price: "$22.99", img: "/img/kibda.jpg", category: "Beans & Breakfast" },
  { name: "Hummus", note: "Creamy chickpea dip with warm bread.", price: "$9.99", img: "/img/hummus.jpg", category: "Mezze & Salads" },
  { name: "Baba Ghanouj", note: "Smoky roasted eggplant dip.", price: "$10.99", img: "/img/baba-ghanouj.jpg", category: "Mezze & Salads" },
  { name: "Shafoot", note: "Cold flatbread soaked in herbed yogurt — refreshing.", price: "$11.99", img: "/img/shafoot.jpg", tag: "Yemeni Classic", category: "Mezze & Salads" },
  { name: "Yemandi Berry Salad", note: "Greens with berries, nuts, and a bright dressing.", price: "$16.99", img: "/img/berry-salad.jpg", category: "Mezze & Salads" },
  { name: "Salmon Salad", note: "Grilled salmon over fresh greens.", price: "$29.99", img: "/img/salmon-salad.jpg", category: "Mezze & Salads" },
  { name: "Arugula Salad", note: "Peppery arugula, simply dressed.", price: "$10.99", img: "/img/arugula-salad.jpg", category: "Mezze & Salads" },
  { name: "Adeni Fries", note: "Aden-style spiced fries.", price: "$11.99", img: "/img/adeni-fries.jpg", category: "Mezze & Salads" },
  { name: "Rashoosh Bread", note: "Tandoor-baked Yemeni flatbread — single, double, or triple.", price: "$4.99", img: "/img/rashoosh.jpg", tag: "Baked Fresh", category: "Bread & Sweets" },
  { name: "Areekah", note: "Mashed dates and bread with honey and nigella — a Yemeni sweet.", price: "$14.99", img: "/img/areekah.jpg", category: "Bread & Sweets" },
  { name: "Masoub", note: "Banana bread pudding with honey, cream, and nuts.", price: "$14.99", img: "/img/masoub.jpg", tag: "Don't Miss", category: "Bread & Sweets" },
  { name: "Lamb Broth (Marag)", note: "Rich Yemeni lamb broth — comforting and warming.", price: "$3.99", img: "/img/marag.jpg", category: "Bread & Sweets" },
  { name: "Sahawiq", note: "Fiery Yemeni hot sauce — red or green.", price: "$2.99", img: "/img/sahawiq.jpg", category: "Bread & Sweets" },
];

export default function Menu() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? dishes : dishes.filter((d) => d.category === active);

  return (
    <section className="relative py-12 sm:py-16 bg-paper overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">
        {/* ---- Animated category tabs ---- */}
        <div className="sticky top-[68px] z-30 -mx-6 px-6 py-4 mb-10 bg-paper/85 backdrop-blur-md">
          <div className="flex gap-2 overflow-x-auto noscroll justify-start sm:justify-center">
            {categories.map((cat) => {
              const on = active === cat;
              return (
                <motion.button
                  key={cat}
                  onClick={() => setActive(cat)}
                  whileTap={{ scale: 0.92 }}
                  className="relative shrink-0 px-5 py-2.5 text-[11px] uppercase tracking-[0.16em] font-bold rounded-full transition-colors"
                >
                  {on && (
                    <motion.span
                      layoutId="menuTabPill"
                      className="absolute inset-0 bg-clay rounded-full"
                      transition={{ type: "spring", stiffness: 420, damping: 34 }}
                    />
                  )}
                  <span className={`relative z-10 ${on ? "text-paper" : "text-ink/55 hover:text-ink"}`}>{cat}</span>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* ---- Dish grid (re-animates on tab change) ---- */}
        <motion.div
          key={active}
          variants={staggerParent}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {filtered.map((dish) => (
            <motion.article
              key={dish.name}
              variants={staggerItem}
              className="group relative overflow-hidden bg-night shadow-lg"
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src={dish.img!}
                  alt={dish.name}
                  fill
                  className="object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-[1.08]"
                  sizes="(max-width:640px) 50vw, (max-width:1024px) 50vw, 33vw"
                />
                {/* strong legibility scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-night via-night/75 to-night/5" />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-night to-transparent" />
              </div>

              {dish.tag && (
                <span className="absolute top-3 left-3 bg-clay text-paper text-[9px] uppercase tracking-[0.18em] font-bold px-2.5 py-1">
                  {dish.tag}
                </span>
              )}

              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="flex items-end justify-between gap-3">
                  <h3 className="font-display font-bold uppercase tracking-tight text-paper text-xl sm:text-2xl leading-[0.95]">
                    {dish.name}
                  </h3>
                  <span className="font-display font-bold text-saffron text-lg shrink-0 leading-none">{dish.price}</span>
                </div>
                {dish.note && <p className="text-paper/75 text-[13px] leading-snug mt-2 max-w-[42ch]">{dish.note}</p>}
              </div>
            </motion.article>
          ))}
        </motion.div>

        <p className="text-center text-ink/40 text-sm mt-12">Prices subject to change &middot; Mandi by the half or whole &middot; Catering available</p>
      </div>
    </section>
  );
}
