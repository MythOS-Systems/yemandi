"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Wordmark from "@/components/Wordmark";
import { site } from "@/lib/site";

const navLinks = [
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "Our Story" },
  { href: "/gallery", label: "Gallery" },
  { href: "/catering", label: "Catering" },
  { href: "/visit", label: "Visit" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setIsOpen(false), [pathname]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-pine-deep/95 backdrop-blur-md shadow-2xl py-2.5" : "bg-gradient-to-b from-pine-deep/70 to-transparent py-4"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Wordmark className="shrink-0" tone="light" />

          <div className="hidden md:flex items-center gap-9">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={`relative transition-colors text-[11px] uppercase tracking-[0.22em] font-semibold group ${pathname === link.href ? "text-gold" : "text-cream/80 hover:text-cream"}`}>
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-px bg-gold transition-all duration-300 ${pathname === link.href ? "w-full" : "w-0 group-hover:w-full"}`} />
              </Link>
            ))}
            <a href={site.order} target="_blank" rel="noopener noreferrer" className="bg-copper text-pine-deep px-5 py-2.5 text-[11px] uppercase tracking-[0.18em] font-bold hover:bg-gold transition-all hover:-translate-y-px">
              Order Online
            </a>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-cream p-2 relative w-10 h-10 flex items-center justify-center" aria-label={isOpen ? "Close menu" : "Open menu"} aria-expanded={isOpen}>
            <div className="relative w-5 h-4">
              <span className={`absolute left-0 w-full h-px bg-cream transition-all duration-300 ${isOpen ? "top-1/2 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 top-1/2 w-full h-px bg-cream transition-all duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`} />
              <span className={`absolute left-0 w-full h-px bg-cream transition-all duration-300 ${isOpen ? "top-1/2 -rotate-45" : "top-full"}`} />
            </div>
          </button>
        </div>
      </div>

      <div className={`md:hidden overflow-hidden transition-all duration-500 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="bg-pine-deep/98 backdrop-blur-md border-t border-cream/5 px-6 py-6 space-y-1">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={`block transition-colors text-sm uppercase tracking-[0.2em] py-3 border-b border-cream/5 ${pathname === link.href ? "text-gold" : "text-cream/70 hover:text-cream"}`}>
              {link.label}
            </Link>
          ))}
          <a href={site.order} target="_blank" rel="noopener noreferrer" className="block bg-copper text-pine-deep px-5 py-3 text-sm uppercase tracking-[0.15em] font-bold text-center mt-4">
            Order Online
          </a>
        </div>
      </div>
    </nav>
  );
}
