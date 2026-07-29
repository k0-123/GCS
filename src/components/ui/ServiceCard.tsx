"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  specChip: string;
  href: string;
  className?: string;
}

/**
 * Service card per design.md:
 * Slab White surface, 1px Concrete Grey border, no shadow.
 * On hover: border → Screed Blue, mono spec chip appears
 * with amber underline draw.
 */
export function ServiceCard({
  title,
  description,
  specChip,
  href,
  className,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative block p-6 md:p-8 bg-slab-white border border-concrete-grey rounded-[2px]",
        "transition-colors duration-300 ease-out",
        "hover:border-screed-blue",
        className
      )}
    >
      {/* Card title */}
      <h3 className="font-display font-bold text-[18px] md:text-[20px] text-ink-navy leading-snug mb-3 relative">
        {title}
        {/* Amber underline draw on hover */}
        <span
          className="absolute -bottom-1 left-0 h-[2px] w-full bg-safety-amber origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"
          aria-hidden="true"
        />
      </h3>

      {/* Description */}
      <p className="text-graphite text-[15px] leading-[1.6] mb-6">{description}</p>

      {/* Spec chip — hidden by default, appears on hover */}
      <div className="flex items-center justify-between">
        <span
          className={cn(
            "font-mono text-[13px] text-screed-blue bg-concrete-grey px-3 py-1 rounded-[2px]",
            "opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0",
            "transition-all duration-300 ease-out delay-100"
          )}
        >
          {specChip}
        </span>

        <span
          className={cn(
            "flex items-center gap-1 text-screed-blue text-sm font-medium",
            "opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          )}
        >
          Learn More
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
