"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Ruler,
  Maximize2,
  ShieldCheck,
  Layers,
  Sparkles,
  Zap,
  Award,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

export interface NavbarServiceItem {
  slug: string;
  title: string;
  badge: string;
  desc: string;
  icon: any;
  image: string;
}

const navbarServicesList: NavbarServiceItem[] = [
  {
    slug: "laser-screed",
    title: "Laser Screed Flooring (FM1/FM2)",
    badge: "FM1 · F 1.8",
    desc: "Somero automated laser screed laying up to 1,200 m²/day to TR34 standards.",
    icon: Ruler,
    image: "/images/card_laser_screed.png",
  },
  {
    slug: "vna-flooring",
    title: "VNA Flooring (DM1/DM2)",
    badge: "DM1 · 12-13m",
    desc: "Very Narrow Aisle super-flat floors for high-bay warehouse logistics.",
    icon: Maximize2,
    image: "/images/card_vna_flooring.png",
  },
  {
    slug: "sfrc",
    title: "SFRC Steel Fiber Concrete",
    badge: "Joint Reduction",
    desc: "Ductile steel fiber reinforced slabs eliminating traditional rebar mesh.",
    icon: ShieldCheck,
    image: "/images/card_sfrc_flooring.png",
  },
  {
    slug: "jointless",
    title: "Jointless Concrete Slabs",
    badge: "50m x 50m Bays",
    desc: "Large bay jointless concrete floors minimizing floor maintenance costs.",
    icon: Layers,
    image: "/images/card_jointless_flooring.png",
  },
  {
    slug: "polishing-densification",
    title: "Polishing & Densification",
    badge: "Mirror Gloss",
    desc: "Chemical silicate hardeners & Husqvarna diamond tool burnishing.",
    icon: Sparkles,
    image: "/images/card_concrete_polishing.png",
  },
  {
    slug: "epoxy",
    title: "Epoxy & PU Coating",
    badge: "Chemical Resistant",
    desc: "Seamless, high-impact industrial floor coatings for chemical & food plants.",
    icon: Zap,
    image: "/images/card_armour_joints.png",
  },
  {
    slug: "testing-certification",
    title: "TR34 Testing & Certification",
    badge: "TR34 Certified",
    desc: "Third-party chartered engineer Dipstick scanning & FM sign-off.",
    icon: Award,
    image: "/images/card_testing_certification.png",
  },
  {
    slug: "specialty-joints",
    title: "Armour Joints & ABS Dowels",
    badge: "Load Transfer",
    desc: "Heavy-duty steel Armour Joints & 6mm ABS diamond dowel sleeves.",
    icon: CheckCircle2,
    image: "/images/armour_joint_dowel.png",
  },
];

interface NavbarServicesSliderProps {
  onClose?: () => void;
}

export function NavbarServicesSlider({ onClose }: NavbarServicesSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="absolute top-full left-0 right-0 z-50 bg-[#0B2F4A] text-white border-t-2 border-safety-amber shadow-2xl py-6 px-4 md:px-8 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Bar */}
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="font-mono text-safety-amber text-[11px] uppercase tracking-[1px] bg-safety-amber/10 px-2.5 py-0.5 rounded border border-safety-amber/20 font-bold">
              Services Slider Directory
            </span>
            <span className="text-[13px] text-slab-white/70 font-medium hidden sm:inline">
              Hover or click arrows to browse all 8 precision flooring solutions
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={scrollLeft}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-screed-blue text-white flex items-center justify-center transition-colors border border-white/15"
              title="Previous Services"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={scrollRight}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-screed-blue text-white flex items-center justify-center transition-colors border border-white/15"
              title="Next Services"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <Link
              href="/services"
              onClick={onClose}
              className="ml-3 inline-flex items-center gap-1.5 text-[12px] font-mono text-safety-amber hover:text-safety-amber/80 font-bold underline"
            >
              View Hub <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Horizontal Slider Cards Container */}
        <div
          ref={sliderRef}
          className="flex items-stretch gap-4 overflow-x-auto pb-2 scrollbar-none scroll-touch"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {navbarServicesList.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.slug}
                href={`/services/${item.slug}`}
                onClick={onClose}
                className="group relative w-72 shrink-0 bg-slab-white/5 border border-white/15 rounded-[4px] p-4 flex flex-col justify-between hover:bg-slab-white/10 hover:border-screed-blue transition-all duration-200"
              >
                <div>
                  {/* Card Image Header */}
                  <div className="relative h-28 w-full rounded-[3px] overflow-hidden mb-3 bg-ink-navy border border-white/10">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-navy/80 via-transparent to-transparent opacity-80" />
                    <span className="absolute top-2 right-2 font-mono text-[10px] bg-ink-navy/90 text-safety-amber px-2 py-0.5 rounded font-bold border border-white/10">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Icon Header */}
                  <div className="flex items-start gap-2.5 mb-2">
                    <div className="p-1.5 rounded bg-screed-blue/20 text-safety-amber shrink-0 mt-0.5 border border-safety-amber/30">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="font-display font-bold text-slab-white text-[14px] leading-snug group-hover:text-safety-amber transition-colors">
                      {item.title}
                    </h4>
                  </div>

                  {/* Description */}
                  <p className="text-slab-white/70 text-[12px] leading-relaxed line-clamp-2">
                    {item.desc}
                  </p>
                </div>

                {/* Footer Link Prompt */}
                <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-safety-amber font-semibold group-hover:underline">
                  <span>Explore Specs</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
