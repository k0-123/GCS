"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  specChip: string;
  href: string;
  image?: string;
  className?: string;
}

/**
 * Service card per design.md:
 * Slab White surface, 1px Concrete Grey border, no shadow.
 * On hover: border → Screed Blue, mono spec chip appears with amber underline draw.
 * Site photography: desaturated slightly with thin Navy duotone overlay,
 * returning to full color on hover.
 */
export function ServiceCard({
  title,
  description,
  specChip,
  href,
  image,
  className,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden bg-slab-white border border-concrete-grey rounded-[2px]",
        "transition-colors duration-300 ease-out",
        "hover:border-screed-blue",
        className
      )}
    >
      {/* Optional image header with Navy duotone overlay */}
      {image && (
        <div className="relative w-full h-44 overflow-hidden bg-ink-navy">
          <img
            src={image}
            alt={title}
            className={cn(
              "w-full h-full object-cover transition-all duration-500 ease-out",
              // Desaturated + navy duotone overlay by default; returns to full color on hover
              "grayscale contrast-125 opacity-70 group-hover:grayscale-0 group-hover:contrast-100 group-hover:opacity-100 group-hover:scale-105"
            )}
          />
          <div className="absolute inset-0 bg-ink-navy/30 group-hover:bg-transparent transition-colors duration-500" />
        </div>
      )}

      <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
        <div>
          {/* Card title */}
          <h3 className="font-display font-bold text-[18px] md:text-[20px] text-ink-navy leading-snug mb-3 relative inline-block">
            {title}
            {/* Amber underline draw on hover */}
            <span
              className="absolute -bottom-1 left-0 h-[2px] w-full bg-safety-amber origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"
              aria-hidden="true"
            />
          </h3>

          {/* Description */}
          <p className="text-graphite text-[15px] leading-[1.6] mb-6">{description}</p>
        </div>

        {/* Spec chip & Learn More */}
        <div className="flex items-center justify-between pt-4 border-t border-concrete-grey/50">
          <span
            className={cn(
              "font-mono text-[13px] text-screed-blue bg-concrete-grey px-3 py-1 rounded-[2px]",
              "opacity-80 group-hover:opacity-100 transition-opacity duration-300"
            )}
          >
            {specChip}
          </span>

          <span
            className={cn(
              "flex items-center gap-1 text-screed-blue text-sm font-medium",
              "group-hover:translate-x-1 transition-transform duration-300"
            )}
          >
            Learn More
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
