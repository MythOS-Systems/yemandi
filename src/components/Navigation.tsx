"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";

// External links open in a new tab; internal use Next Link.
const links = [
  { label: "Menu", href: "/menu", ext: false },
  { label: "Reserve a Table", href: site.reserve, ext: true },
  { label: "Join Waitlist", href: site.waitlist, ext: true },
  { label: "Catering", href: site.cateringLead, ext: true },
  { label: "Loyalty", href: site.loyalty, ext: true },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => setOpen(false), [pathname]);

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "bg-paper/90 backdrop-blur-md border-b border-ink/10 py-3" : "py-5"}`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between gap-6">
        <Link href="/" className="shrink-0">
          <Image src="/img/yemandi-logo.png" alt="Yemandi Yemeni Cuisine" width={360} height={144} priority className={`w-auto transition-all duration-300 ${scrolled ? "h-14 sm:h-16" : "h-16 sm:h-20"}`} />
        </Link>

        <div className="hidden lg:flex items-center gap-7">
          {links.map((l) =>
            l.ext ? (
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="text-[11px] uppercase tracking-[0.18em] font-bold text-ink/70 hover:text-clay transition-colors">
                {l.label}
              </a>
            ) : (
              <Link key={l.label} href={l.href} className={`text-[11px] uppercase tracking-[0.18em] font-bold transition-colors ${pathname === l.href ? "text-clay" : "text-ink/70 hover:text-clay"}`}>
                {l.label}
              </Link>
            )
          )}
          <a href={site.order} target="_blank" rel="noopener noreferrer" className="bg-ink text-paper px-6 py-2.5 text-[11px] uppercase tracking-[0.16em] font-bold hover:bg-clay transition-colors">
            Order Online
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="lg:hidden w-10 h-10 flex items-center justify-center text-ink" aria-label="Menu" aria-expanded={open}>
          <div className="relative w-6 h-4">
            <span className={`absolute left-0 w-full h-0.5 bg-ink transition-all ${open ? "top-1/2 rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 top-1/2 w-full h-0.5 bg-ink transition-all ${open ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 w-full h-0.5 bg-ink transition-all ${open ? "top-1/2 -rotate-45" : "top-full"}`} />
          </div>
        </button>
      </div>

      <div className={`lg:hidden overflow-hidden transition-all duration-500 ${open ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="bg-paper border-t border-ink/10 px-6 py-5 space-y-1 mt-3">
          {links.map((l) =>
            l.ext ? (
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="block py-3 text-sm uppercase tracking-[0.18em] font-bold text-ink/80 border-b border-ink/5">{l.label}</a>
            ) : (
              <Link key={l.label} href={l.href} className="block py-3 text-sm uppercase tracking-[0.18em] font-bold text-ink/80 border-b border-ink/5">{l.label}</Link>
            )
          )}
          <a href={site.order} target="_blank" rel="noopener noreferrer" className="block bg-ink text-paper text-center px-6 py-3 mt-4 text-sm uppercase tracking-[0.16em] font-bold">
            Order Online
          </a>
        </div>
      </div>
    </nav>
  );
}
