"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

// Scroll-reveal wrapper — fades/slides children in as they enter the viewport.
export function Reveal({
  children,
  y = 32,
  delay = 0,
  once = true,
  className,
}: {
  children: ReactNode;
  y?: number;
  delay?: number;
  once?: boolean;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.25 }}
      transition={{ duration: 0.8, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

// Staggered container + item for lists/grids.
export const staggerParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};
