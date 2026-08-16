"use client";

import { useState } from "react";
import { Crosshair, ShieldCheck, Timer, Users, Maximize2, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GalleryLightbox } from "@/components/ui/GalleryLightbox";

const GALLERY_PANELS = [
  {
    url: "/images/hero-polished.webp",
    title: "High-Gloss Mirror Polished Warehouse Floor",
  },
  {
    url: "/images/mewar_industries.webp",
    title: "Ride-On Power Trowel Concrete Finishing Pass",
  },
  {
    url: "/images/vna_superflat_warehouse.webp",
    title: "High-Bay Logistics Warehouse Slab Execution",
  },
];

export function MockupHero() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section className="relative w-full min-h-[640px] sm:min-h-[720px] lg:min-h-[780px] overflow-hidden bg-[#F8FAFC] flex flex-col justify-between pt-20 sm:pt-24 lg:pt-20 select-none">

      {/* 
        1. RIGHT SIDE / BACKGROUND: SOMERO LASER SCREED MACHINE & JOB SITE
      */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/images/hero-screed.webp"
          alt="Somero FM2 Laser Screed Machine on Job Site"
          className="w-full h-full object-cover object-center"
        />
        {/* Mobile Gradient Overlay for Maximum Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/80 to-white/90 lg:hidden" />
      </div>

      {/* 
        2. DESKTOP-ONLY ELEGANT WHITE DIAGONAL CANVAS & BLUE RIBBON (Hidden on Mobile)
      */}
      <div className="hidden lg:block absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <svg viewBox="0 0 1000 700" preserveAspectRatio="none" className="w-full h-full">
          {/* White canvas cutaway */}
          <path d="M 0 0 L 260 0 L 0 450 Z" fill="white" />

          {/* Slanted Royal Blue Ribbon starting at navbar bottom line (y=64) */}
          <path
            d="M 223 64 L 268 64 L 218 150 Q 208 165 178 165 L 164.67 165 L 223 64 Z"
            fill="#04509A"
          />
        </svg>
      </div>

      {/* Desktop Volumetric White Fog (Hidden on Mobile) */}
      <div
        className="hidden lg:block absolute inset-0 z-[5] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 65% at 22% 38%, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 30%, rgba(255,255,255,0.35) 55%, rgba(255,255,255,0.1) 75%, transparent 100%)",
        }}
      />

      {/* 
        3. HERO LEFT TEXT CONTENT
      */}
      <div className="relative z-40 max-w-[1440px] mx-auto w-full px-4 sm:px-8 lg:px-14 my-auto pt-6 sm:pt-10 lg:pt-10 pb-6 pointer-events-auto">
        <div className="max-w-xl lg:max-w-lg bg-white/90 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none p-5 sm:p-7 lg:p-0 rounded-2xl lg:rounded-none border border-slate-200/80 lg:border-none shadow-xl lg:shadow-none">

          {/* Eyebrow Label */}
          <div className="flex items-center gap-2 mb-3 sm:mb-4">
            <div className="h-[3px] w-6 sm:w-8 bg-[#04509A] rounded-full shrink-0" />
            <span className="text-[11px] sm:text-[12px] font-mono font-bold uppercase tracking-wider text-[#04509A]">
              Laser Screed Specialists
            </span>
          </div>

          {/* Main Headline */}
          <div className="mb-4 sm:mb-5">
            <h1 className="text-[32px] sm:text-[50px] lg:text-[66px] leading-[0.95] lg:leading-[0.92] tracking-tight font-display font-black uppercase text-[#3B3D42]">
              STRONG FLOORS.
            </h1>

            <h1 className="text-[32px] sm:text-[50px] lg:text-[66px] leading-[0.95] lg:leading-[0.92] tracking-tight font-display font-black uppercase mt-1 text-[#04509A]">
              SOLID FUTURES.
            </h1>
            {/* Blue divider line */}
            <div className="h-[3.5px] w-16 sm:w-28 bg-[#04509A] mt-3 sm:mt-4 rounded-full" />
          </div>

          {/* Subheadline Text */}
          <p className="text-[14px] sm:text-[17px] lg:text-[19px] font-normal leading-[1.6] max-w-md tracking-wide text-[#44484F] mb-5 sm:mb-6">
            Precision Laser Screed Concrete Flooring for Industrial, Commercial &amp; Warehousing Facilities.
          </p>

          {/* Hero Action Buttons (z-50 pointer-events-auto ensures 100% clickability) */}
          <div className="relative z-50 pointer-events-auto flex flex-wrap items-center gap-3">
            <Button href="/services" size="default" className="bg-[#04509A] hover:bg-[#003E99] text-white font-bold px-5 py-3 rounded-lg shadow-md cursor-pointer relative z-50">
              Explore Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button href="tel:+919772586211" variant="secondary" size="default" className="border-2 border-[#04509A] text-[#04509A] hover:bg-[#04509A] hover:text-white font-bold px-4 py-3 rounded-lg cursor-pointer relative z-50">
              Call: +91 9772586211
            </Button>
          </div>

        </div>
      </div>

      {/* 
        4. LOWER SECTION: FEATURE BANNER & 3-PHOTO SHOWCASE (Mobile Responsive + Untouched Desktop)
      */}
      <div className="relative z-30 w-full pb-8 sm:pb-12 lg:pb-16 mt-4 lg:-mt-32">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-stretch lg:items-end justify-between gap-4 lg:gap-4 drop-shadow-2xl relative">

          {/* Left: Royal Blue Feature Banner */}
          <div className="w-full lg:flex-1 bg-gradient-to-r from-[#04509A] via-[#084A99] to-[#0557B8] text-white py-4 px-5 sm:py-6 sm:px-8 lg:-ml-[500px] lg:pl-[540px] rounded-xl lg:rounded-r-3xl lg:rounded-l-none border border-white/20 shadow-2xl relative z-10 lg:-mr-36">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 items-center lg:pr-36">

              {/* Feature 1: PRECISION */}
              <div className="flex items-center gap-2.5 sm:gap-3 border-r border-white/20 pr-2 sm:pr-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white/50 flex items-center justify-center bg-white/10 shrink-0">
                  <Crosshair className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-display font-black text-[11px] sm:text-[13px] uppercase tracking-wider text-white leading-none">
                    PRECISION
                  </h4>
                  <p className="text-white/85 text-[10px] sm:text-[11px] font-sans font-medium leading-tight mt-1">
                    Laser Guided
                  </p>
                </div>
              </div>

              {/* Feature 2: DURABILITY */}
              <div className="flex items-center gap-2.5 sm:gap-3 sm:border-r border-white/20 pr-2 sm:pr-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white/50 flex items-center justify-center bg-white/10 shrink-0">
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-display font-black text-[11px] sm:text-[13px] uppercase tracking-wider text-white leading-none">
                    DURABILITY
                  </h4>
                  <p className="text-white/85 text-[10px] sm:text-[11px] font-sans font-medium leading-tight mt-1">
                    Stronger Floors
                  </p>
                </div>
              </div>

              {/* Feature 3: EFFICIENCY */}
              <div className="flex items-center gap-2.5 sm:gap-3 border-r border-white/20 pr-2 sm:pr-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white/50 flex items-center justify-center bg-white/10 shrink-0">
                  <Timer className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-display font-black text-[11px] sm:text-[13px] uppercase tracking-wider text-white leading-none">
                    EFFICIENCY
                  </h4>
                  <p className="text-white/85 text-[10px] sm:text-[11px] font-sans font-medium leading-tight mt-1">
                    Faster Execution
                  </p>
                </div>
              </div>

              {/* Feature 4: EXPERT TEAM */}
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white/50 flex items-center justify-center bg-white/10 shrink-0">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-display font-black text-[11px] sm:text-[13px] uppercase tracking-wider text-white leading-none">
                    EXPERT TEAM
                  </h4>
                  <p className="text-white/85 text-[10px] sm:text-[11px] font-sans font-medium leading-tight mt-1">
                    Trusted Pros
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Bottom: 3-Photo Showcase Frame */}
          <div className="w-full lg:w-[480px] xl:w-[520px] shrink-0 bg-white p-2 rounded-xl lg:rounded-tl-[2rem] lg:rounded-br-[2rem] lg:rounded-tr-none lg:rounded-bl-none border-2 lg:border-4 border-white shadow-2xl lg:-skew-x-12 z-20">
            <div className="grid grid-cols-3 gap-2 h-28 sm:h-36 md:h-40 overflow-hidden rounded-lg lg:rounded-tl-[1.5rem] lg:rounded-br-[1.5rem] lg:rounded-tr-none lg:rounded-bl-none bg-white">
              {GALLERY_PANELS.map((panel, idx) => (
                <div
                  key={idx}
                  onClick={() => setLightboxIndex(idx)}
                  className="relative h-full w-full overflow-hidden cursor-pointer group/img"
                  title={`View ${panel.title}`}
                >
                  <img
                    src={panel.url}
                    alt={panel.title}
                    className="w-full h-full object-cover lg:skew-x-12 scale-110 lg:scale-135 group-hover/img:scale-145 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/15 group-hover/img:bg-transparent transition-colors" />
                  <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm text-white p-1 rounded-full opacity-0 group-hover/img:opacity-100 transition-opacity lg:skew-x-12">
                    <Maximize2 className="w-3.5 h-3.5 text-[#0052CC]" />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Fullscreen Interactive Photo Gallery Lightbox */}
      <GalleryLightbox
        images={GALLERY_PANELS}
        initialIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
      />
    </section>
  );
}
