"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LaserLineProps {
  /** The spec text to pause on, e.g. "FM1 · F 1.8" */
  specText?: string;
  className?: string;
  /** Whether this is the hero version (full sweep) or a card hover underline */
  variant?: "hero" | "underline";
}

/**
 * The Laser Line — GCS's signature animated element.
 * Hero variant: A thin Amber line sweeps left-to-right on load,
 * pauses briefly on a spec number, then fades to 20% opacity.
 * Underline variant: Draws beneath text on hover.
 */
export function LaserLine({
  specText,
  className,
  variant = "hero",
}: LaserLineProps) {
  const shouldReduceMotion = useReducedMotion();

  if (variant === "underline") {
    return (
      <span
        className={cn(
          "absolute bottom-0 left-0 h-[2px] w-full bg-safety-amber origin-left",
          "scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out",
          className
        )}
        aria-hidden="true"
      />
    );
  }

  // Hero variant
  if (shouldReduceMotion) {
    return (
      <div className={cn("relative mt-6", className)}>
        <div className="h-[2px] bg-safety-amber/20 w-full" />
        {specText && (
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-mono text-sm text-safety-amber bg-ink-navy px-3 py-1">
            {specText}
          </span>
        )}
      </div>
    );
  }

  return (
    <div className={cn("relative mt-6 overflow-hidden", className)}>
      {/* Static background line at 20% */}
      <div className="h-[2px] bg-safety-amber/20 w-full" />

      {/* Animated sweep line */}
      <motion.div
        className="absolute top-0 left-0 h-[2px] bg-safety-amber w-full origin-left"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{
          duration: 1.4,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.5,
        }}
      />

      {/* Spec text badge that appears after sweep */}
      {specText && (
        <motion.span
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-mono text-sm text-safety-amber bg-ink-navy px-3 py-1 whitespace-nowrap"
          initial={{ opacity: 0, filter: "blur(4px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.6, delay: 1.6, ease: "easeOut" }}
        >
          {specText}
        </motion.span>
      )}
    </div>
  );
}
