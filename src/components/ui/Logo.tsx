"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showTagline?: boolean;
}

export function Logo({ className, showTagline = true }: LogoProps) {
  return (
    <Link href="/" className={cn("inline-flex items-center gap-3 group", className)}>
      {/* GCS Brochure Vector Icon */}
      <div className="relative w-10 h-10 shrink-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
        <svg viewBox="0 0 120 120" className="w-full h-full drop-shadow-sm">
          {/* Elliptical Swoosh Ring matching Brochure Logo */}
          <ellipse
            cx="60"
            cy="58"
            rx="52"
            ry="28"
            fill="none"
            stroke="#005691"
            strokeWidth="7"
            transform="rotate(-22 60 58)"
            strokeLinecap="round"
          />
          {/* Inner Accent Swoosh */}
          <ellipse
            cx="60"
            cy="58"
            rx="46"
            ry="22"
            fill="none"
            stroke="#E2861F"
            strokeWidth="3.5"
            transform="rotate(-22 60 58)"
            strokeDasharray="70 40"
          />
          {/* Stylized GCS Letters */}
          <g transform="rotate(-4 60 58)">
            <text
              x="32"
              y="68"
              fill="#005691"
              fontSize="34"
              fontWeight="900"
              fontFamily="system-ui, sans-serif"
              fontStyle="italic"
              letterSpacing="-2"
            >
              G
            </text>
            <text
              x="53"
              y="68"
              fill="#E2861F"
              fontSize="34"
              fontWeight="900"
              fontFamily="system-ui, sans-serif"
              fontStyle="italic"
              letterSpacing="-2"
            >
              C
            </text>
            <text
              x="74"
              y="68"
              fill="#005691"
              fontSize="34"
              fontWeight="900"
              fontFamily="system-ui, sans-serif"
              fontStyle="italic"
              letterSpacing="-2"
            >
              S
            </text>
          </g>
        </svg>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col">
        <span className="font-display font-black text-[#005691] text-[17px] md:text-[18px] tracking-tight leading-none uppercase">
          GANGADHAR
        </span>
        <span className="font-display font-bold text-[#E2861F] text-[11px] md:text-[12px] tracking-wider leading-tight uppercase">
          CONCRETE SOLUTION
        </span>
        {showTagline && (
          <span className="font-mono text-[9px] font-semibold text-graphite/70 tracking-tighter uppercase hidden sm:block">
            Laser Screed Technology
          </span>
        )}
      </div>
    </Link>
  );
}
