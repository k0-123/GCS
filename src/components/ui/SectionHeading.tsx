"use client";

import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  theme = "light",
  className,
}: SectionHeadingProps) {
  return (
    <ScrollReveal variant="fade-blur" className={cn("mb-12 md:mb-16", className)}>
      <div
        className={cn(
          align === "center" && "text-center mx-auto max-w-3xl"
        )}
      >
        {eyebrow && (
          <span
            className={cn(
              "font-display text-[13px] md:text-[15px] uppercase tracking-[0.5px] font-bold mb-3 block",
              theme === "dark" ? "text-safety-amber" : "text-screed-blue"
            )}
          >
            {eyebrow}
          </span>
        )}
        <h2
          className={cn(
            "font-display font-bold text-[28px] md:text-[36px] leading-[1.1] tracking-tight",
            theme === "dark" ? "text-slab-white" : "text-ink-navy"
          )}
        >
          {title}
        </h2>
        {description && (
          <p
            className={cn(
              "mt-4 text-[17px] leading-[1.6] max-w-2xl",
              theme === "dark" ? "text-slab-white/70" : "text-graphite",
              align === "center" && "mx-auto"
            )}
          >
            {description}
          </p>
        )}
      </div>
    </ScrollReveal>
  );
}
