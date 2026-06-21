import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="relative bg-night text-paper overflow-hidden">
      {/* giant wordmark */}
      <div className="px-6 pt-16 pb-8 border-b border-paper/10 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <p className="font-display font-black uppercase tracking-tighter2 leading-[0.8] text-clay text-[22vw] lg:text-[16rem]">
            Yemandi
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 sm:grid-cols-4 gap-10">
        <div className="col-span-2 sm:col-span-1">
          <p className="text-paper/55 text-sm leading-relaxed max-w-xs">
            The first authentic Yemeni table in DFW. Slow-cooked, hand-torn, 100% halal.
          </p>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-saffron font-bold mb-4">Visit</p>
          <a href={`https://maps.google.com/?q=${site.address.mapsQuery}`} target="_blank" rel="noopener noreferrer" className="text-paper/55 text-sm hover:text-paper transition-colors block leading-relaxed">
            {site.address.line1}<br />{site.address.line2}
          </a>
          <a href={site.phoneHref} className="text-paper/55 text-sm hover:text-paper transition-colors block mt-3">{site.phone}</a>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-saffron font-bold mb-4">Explore</p>
          <div className="flex flex-col gap-2">
            {[["/menu","Menu"],["/about","Story"],["/gallery","Gallery"],["/visit","Visit"]].map(([h,l]) => (
              <Link key={h} href={h} className="text-paper/55 text-sm hover:text-paper transition-colors">{l}</Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-saffron font-bold mb-4">Order</p>
          <a href={site.order} target="_blank" rel="noopener noreferrer" className="inline-block bg-clay text-paper px-6 py-3 text-[11px] uppercase tracking-[0.18em] font-bold hover:bg-paper hover:text-night transition-colors">
            Order Online
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-6 border-t border-paper/10 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-paper/35 text-xs">&copy; {new Date().getFullYear()} {site.fullName}. All rights reserved.</p>
        <p className="text-paper/35 text-xs uppercase tracking-[0.2em]">Yemeni Soul Food &middot; Richardson, TX</p>
      </div>
    </footer>
  );
}
