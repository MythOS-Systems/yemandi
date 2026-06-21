import Link from "next/link";
import { cn } from "@/lib/utils";

// Text-based brand wordmark for Yemandi. Swap for a logo asset later.
export default function Wordmark({
  className,
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  const main = tone === "light" ? "text-cream" : "text-ink";
  const sub = tone === "light" ? "text-gold/85" : "text-pom/80";
  return (
    <Link href="/" className={cn("group inline-flex flex-col leading-none", className)}>
      <span className="flex items-center gap-2">
        <svg className="w-4 h-4 text-copper transition-transform duration-500 group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 2a8 8 0 018 8v10H4V10a8 8 0 018-8z" opacity="0.35" />
          <circle cx="12" cy="9" r="3" />
        </svg>
        <span className={cn("font-display text-2xl sm:text-[1.7rem] font-bold tracking-tight", main)}>
          Yemandi
        </span>
      </span>
      <span className={cn("text-[9px] uppercase tracking-[0.45em] mt-1 ml-6", sub)}>
        Yemeni Cuisine
      </span>
    </Link>
  );
}
