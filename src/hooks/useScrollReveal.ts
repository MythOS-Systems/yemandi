"use client";

import { useEffect, useRef } from "react";

export function useScrollReveal(threshold = 0.1) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold }
    );

    const els = ref.current?.querySelectorAll(
      ".fade-in-up, .fade-in-left, .fade-in-right, .scale-in"
    );
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
