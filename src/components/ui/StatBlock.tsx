"use client";

import { useRef, useEffect, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface StatBlockProps {
  value: string;
  label: string;
  suffix?: string;
  className?: string;
  theme?: "light" | "dark";
}

/**
 * Large stat display with animated count-up.
 * Uses mono font for the numeric value.
 * Amber accent line above.
 */
export function StatBlock({
  value,
  label,
  suffix,
  className,
  theme = "dark",
}: StatBlockProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: "some" });
  const shouldReduceMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState(shouldReduceMotion ? value : "0");

  useEffect(() => {
    if (!isInView || shouldReduceMotion) {
      if (isInView) setDisplayValue(value);
      return;
    }

    // Extract the numeric part for animation
    const numericMatch = value.replace(/,/g, "").match(/\d+/);
    if (!numericMatch) {
      setDisplayValue(value);
      return;
    }

    const target = parseInt(numericMatch[0], 10);
    const duration = 1800;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(target * eased);

      // Re-format with Indian comma notation
      const formatted = value.replace(
        numericMatch[0].replace(/,/g, ""),
        current.toLocaleString("en-IN")
      );
      setDisplayValue(formatted);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, shouldReduceMotion]);

  return (
    <div ref={ref} className={cn("relative", className)}>
      {/* Amber accent line */}
      <div className="w-10 h-[2px] bg-safety-amber mb-4" aria-hidden="true" />
      <div
        className={cn(
          "font-mono text-[28px] sm:text-[36px] md:text-[48px] font-bold leading-none tracking-tight",
          theme === "dark" ? "text-slab-white" : "text-ink-navy"
        )}
      >
        {displayValue}
        {suffix && (
          <span className="text-[24px] md:text-[32px] text-safety-amber ml-1">
            {suffix}
          </span>
        )}
      </div>
      <p
        className={cn(
          "mt-2 text-[15px]",
          theme === "dark" ? "text-slab-white/60" : "text-graphite"
        )}
      >
        {label}
      </p>
    </div>
  );
}
