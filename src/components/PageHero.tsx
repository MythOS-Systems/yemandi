import { cn } from "@/lib/utils";

export default function PageHero({
  eyebrow,
  title,
  accent,
  subtitle,
  ghost,
  variant = "dark",
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  subtitle?: string;
  ghost?: string;
  variant?: "dark" | "light";
}) {
  const dark = variant === "dark";
  return (
    <section
      className={cn(
        "relative pt-32 pb-16 sm:pt-40 sm:pb-20 overflow-hidden",
        dark ? "bg-pine-deep" : "bg-cream"
      )}
    >
      <div className={cn("absolute inset-0", dark ? "tile-pattern-dark" : "tile-pattern")} />
      {ghost && (
        <div className="absolute top-1/2 left-0 -translate-y-1/2 pointer-events-none select-none overflow-hidden w-full">
          <span
            className={cn(
              "font-display text-[9rem] sm:text-[15rem] font-semibold leading-none whitespace-nowrap block -ml-10 italic",
              dark ? "text-cream/[0.03]" : "text-pom/[0.03]"
            )}
          >
            {ghost}
          </span>
        </div>
      )}
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <span
          className={cn(
            "inline-block text-[10px] uppercase tracking-[0.4em] font-bold mb-4 px-4 py-2",
            dark ? "text-gold bg-gold/10" : "text-pom bg-pom/5"
          )}
        >
          {eyebrow}
        </span>
        <h1
          className={cn(
            "font-display text-4xl sm:text-5xl lg:text-7xl font-semibold leading-[1.05] mb-6",
            dark ? "text-cream" : "text-ink"
          )}
        >
          {title}{" "}
          {accent && <span className={dark ? "text-gradient-gold italic" : "text-pom italic"}>{accent}</span>}
        </h1>
        {subtitle && (
          <p className={cn("text-lg max-w-xl mx-auto leading-relaxed", dark ? "text-cream/50" : "text-ink/50")}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
