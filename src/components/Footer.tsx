import Link from "next/link";
import Wordmark from "@/components/Wordmark";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="relative bg-pine-deep overflow-hidden">
      <div className="absolute inset-0 tile-pattern-dark" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="py-16 text-center border-b border-cream/8">
          <div className="flex justify-center mb-5">
            <Wordmark tone="light" />
          </div>
          <p className="text-cream/45 text-sm max-w-md mx-auto mb-8 leading-relaxed">
            The first authentic Yemeni restaurant in DFW — mandi, haneeth, fahsa,
            and fresh tandoor bread. 100% halal in Richardson.
          </p>
          <Link href="/visit" className="inline-block bg-copper text-pine-deep px-8 py-3 text-xs uppercase tracking-[0.2em] font-bold hover:bg-gold transition-all hover:-translate-y-px">
            Visit Us Today
          </Link>
        </div>

        <div className="py-12 grid grid-cols-1 sm:grid-cols-3 gap-10 text-center sm:text-left">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold mb-4">Find Us</p>
            <a href={`https://maps.google.com/?q=${site.address.mapsQuery}`} target="_blank" rel="noopener noreferrer" className="text-cream/45 text-sm leading-relaxed hover:text-cream/70 transition-colors block mb-3">
              {site.address.line1}<br />{site.address.line2}
            </a>
            <a href={site.phoneHref} className="text-cream/45 text-sm hover:text-cream/70 transition-colors">{site.phone}</a>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold mb-4">Navigate</p>
            <div className="flex flex-col gap-2">
              {[
                { href: "/menu", label: "Menu" },
                { href: "/about", label: "Our Story" },
                { href: "/gallery", label: "Gallery" },
                { href: "/catering", label: "Catering" },
                { href: "/visit", label: "Visit" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="text-cream/45 text-sm hover:text-cream/70 transition-colors">{link.label}</Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold mb-4">Connect</p>
            <div className="flex gap-3 justify-center sm:justify-start">
              <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-cream/5 flex items-center justify-center text-cream/40 hover:text-gold hover:bg-cream/10 transition-all" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </a>
              <a href={`https://maps.google.com/?q=${site.address.mapsQuery}`} target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-cream/5 flex items-center justify-center text-cream/40 hover:text-gold hover:bg-cream/10 transition-all" aria-label="Directions">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </a>
            </div>
            <p className="text-cream/30 text-xs mt-4">100% Halal &middot; Yemeni Cuisine</p>
          </div>
        </div>

        <div className="py-6 border-t border-cream/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-cream/20 text-xs">&copy; {new Date().getFullYear()} {site.fullName}. All rights reserved.</p>
          <p className="text-cream/20 text-xs flex items-center gap-2">
            <svg className="w-3 h-3 text-gold/40" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0l3 9 9 3-9 3-3 9-3-9-9-3 9-3z" /></svg>
            Authentic Yemeni Cuisine &middot; Richardson, TX
          </p>
        </div>
      </div>
    </footer>
  );
}
