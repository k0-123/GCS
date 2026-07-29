"use client";

import { cn } from "@/lib/utils";

interface SectionDividerProps {
  from: "navy" | "white" | "grey";
  to: "navy" | "white" | "grey";
  className?: string;
}

const bgColors = {
  navy: "bg-ink-navy",
  white: "bg-slab-white",
  grey: "bg-concrete-grey",
};

/**
 * The signature "Screed Line" diagonal section divider.
 * A shallow 7° cut running bottom-left to top-right,
 * referencing the laser screed machine's pass across a bay.
 */
export function SectionDivider({ from, to, className }: SectionDividerProps) {
  return (
    <div className={cn("relative h-16 md:h-24 lg:h-32 -my-px", className)} aria-hidden="true">
      {/* Top color (from) */}
      <div
        className={cn(
          "absolute inset-0",
          bgColors[from]
        )}
        style={{
          clipPath: "polygon(0 0, 100% 0, 0 100%)",
        }}
      />
      {/* Bottom color (to) */}
      <div
        className={cn(
          "absolute inset-0",
          bgColors[to]
        )}
        style={{
          clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
        }}
      />
    </div>
  );
}
