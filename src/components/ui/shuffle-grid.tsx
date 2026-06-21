"use client";

// Adapted from the 21st.dev ShuffleGrid template — wired to Yemandi's real
// food photography and palette. Animated 4x4 grid that reshuffles on a timer.
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const squareData = [
  { id: 1, src: "/img/mandi-chicken.jpg" },
  { id: 2, src: "/img/haneeth-lamb.jpg" },
  { id: 3, src: "/img/fahsa-beef.jpg" },
  { id: 4, src: "/img/saltah.jpg" },
  { id: 5, src: "/img/kebab-sanani.jpg" },
  { id: 6, src: "/img/rashoosh.jpg" },
  { id: 7, src: "/img/mandi-chicken-whole.jpg" },
  { id: 8, src: "/img/lamb-akdah.jpg" },
  { id: 9, src: "/img/shrimp-mutafayah.jpg" },
  { id: 10, src: "/img/hummus.jpg" },
  { id: 11, src: "/img/salmon-salad.jpg" },
  { id: 12, src: "/img/fahsa-lamb.jpg" },
  { id: 13, src: "/img/areekah.jpg" },
  { id: 14, src: "/img/baba-ghanouj.jpg" },
  { id: 15, src: "/img/kibda.jpg" },
  { id: 16, src: "/img/masoub.jpg" },
];

const shuffle = (array: typeof squareData) => {
  const a = [...array];
  let currentIndex = a.length;
  while (currentIndex !== 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [a[currentIndex], a[randomIndex]] = [a[randomIndex], a[currentIndex]];
  }
  return a;
};

const generateSquares = () =>
  shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full overflow-hidden bg-pine-deep"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  ));

export default function ShuffleGrid() {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [squares, setSquares] = useState(generateSquares);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const shuffleSquares = () => {
      setSquares(generateSquares());
      timeoutRef.current = setTimeout(shuffleSquares, 3200);
    };
    timeoutRef.current = setTimeout(shuffleSquares, 3200);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[340px] sm:h-[460px] lg:h-[560px] gap-1.5">
      {squares.map((sq) => sq)}
    </div>
  );
}
