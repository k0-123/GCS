"use client";

import { useState } from "react";
import { Crosshair, ShieldCheck, Timer, Users, Maximize2, Phone } from "lucide-react";
import { GalleryLightbox } from "@/components/ui/GalleryLightbox";

const GALLERY_PANELS = [
  {
    url: "/images/hero-polished.jpg",
    title: "High-Gloss Mirror Polished Warehouse Floor",
  },
  {
    url: "/images/hero-overview.jpg",
    title: "Laser Screeding & Concrete Finishing Crew",
  },
  {
    url: "https://www.gangadharconcretesolution.com/images/glry3.jpg",
    title: "High-Bay Logistics Warehouse Slab Execution",
  },
];

export function MockupHero() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section className="relative w-full min-h-[640px] sm:min-h-[720px] lg:min-h-[780px] overflow-hidden bg-[#F8FAFC] flex flex-col justify-between pt-16 sm:pt-20 select-none">

      {/* 
        1. RIGHT SIDE: MASSIVE INDUSTRIAL WAREHOUSE & FM2 LASER SCREED MACHINE
        (Full view of Somero FM2 Laser Screed machine & polished concrete floor)
      */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/images/hero-screed.jpg"
          alt="Somero FM2 Laser Screed Machine on Job Site"
          className="w-full h-full object-cover object-right lg:object-center"
        />
      </div>

      {/* 
        2. ELEGANT WHITE DIAGONAL CANVAS, ATMOSPHERIC VOLUMETRIC MIST & CONTINUOUS SLANTED BLUE RIBBON
      */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <svg viewBox="0 0 1000 700" preserveAspectRatio="none" className="w-full h-full">
          {/* White canvas cutaway */}
          <path d="M 0 0 L 260 0 L 0 450 Z" fill="white" />

          {/* 
            Slanted Royal Blue Ribbon (#04509A) starting at navbar bottom line (y=64) with rounded bottom-right corner
          */}
          <path
            d="M 223 64 L 268 64 L 218 150 Q 208 165 178 165 L 164.67 165 L 223 64 Z"
            fill="#04509A"
          />
        </svg>
      </div>

      {/* White fog — strongest behind text, fades outward in all directions */}
      <div
        className="absolute inset-0 z-[5] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 65% at 22% 38%, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 30%, rgba(255,255,255,0.35) 55%, rgba(255,255,255,0.1) 75%, transparent 100%)",
        }}
      />

      {/* 
        3. HERO LEFT TEXT CONTENT (Positioned on top of Volumetric Mist Canvas)
      */}
      <div className="relative z-20 max-w-[1440px] mx-auto w-full px-6 sm:px-10 lg:px-14 my-auto pt-4 sm:pt-8 lg:pt-10 pb-6">
        <div className="max-w-md lg:max-w-lg">

          {/* Eyebrow Label */}
          <div className="flex items-center gap-2 mb-4">
            <div className="h-[3px] w-8 bg-[#04509A] rounded-full" />
            <span className="text-[11px] sm:text-[12px] font-mono font-bold uppercase tracking-[0.2em]" style={{ color: '#04509A' }}>
              Laser Screed Specialists
            </span>
          </div>

          {/* Main Headline */}
          <div className="mb-5">
            <h1 className="text-[38px] sm:text-[54px] lg:text-[66px] leading-[0.92] tracking-tight font-display font-black uppercase whitespace-nowrap" style={{ color: '#3B3D42' }}>
              STRONG FLOORS.
            </h1>

            <h1 className="text-[38px] sm:text-[54px] lg:text-[66px] leading-[0.92] tracking-tight font-display font-black uppercase mt-0.5" style={{ color: '#04509A' }}>
              SOLID FUTURES.
            </h1>
            {/* Blue divider line under SOLID FUTURES */}
            <div className="h-[3.5px] w-20 sm:w-28 bg-[#04509A] mt-4 rounded-full" />
          </div>

          {/* Subheadline Text */}
          <p className="text-[15px] sm:text-[17px] lg:text-[19px] font-normal leading-[1.7] max-w-sm tracking-wide" style={{ color: '#44484F' }}>
            Precision Laser Screed Flooring<br />
            for Industrial, Commercial &amp; Residential Spaces.
          </p>

        </div>
      </div>

      {/* 
        4. LOWER SECTION: ROYAL BLUE FEATURE BANNER (EXTENDS UNDERNEATH 3-PHOTO SHOWCASE, 3-CARD CODE 100% FROZEN)
      */}
      <div className="relative z-30 w-full pb-12 sm:pb-16 -mt-20 sm:-mt-26 lg:-mt-32">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-end justify-between gap-0 lg:gap-4 drop-shadow-2xl relative">

          {/* Left: Royal Blue Feature Banner (Attached Flush to Left Screen Edge) */}
          <div className="w-full lg:flex-1 bg-gradient-to-r from-[#04509A] via-[#084A99] to-[#0557B8] text-white py-5 px-6 sm:py-6 sm:px-8 -ml-[500px] pl-[516px] sm:pl-[524px] lg:pl-[540px] rounded-r-3xl rounded-l-none border border-white/20 border-l-0 shadow-2xl relative z-10 -mr-0 lg:-mr-36">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 items-center pr-6 sm:pr-12 lg:pr-36">

              {/* Feature 1: PRECISION */}
              <div className="flex items-center gap-3 border-r border-white/20 pr-3">
                <div className="w-10 h-10 rounded-full border-2 border-white/50 flex items-center justify-center bg-white/10 shrink-0">
                  <Crosshair className="w-5 h-5 text-white" />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-display font-black text-[12px] sm:text-[13px] uppercase tracking-wider text-white leading-none">
                    PRECISION
                  </h4>
                  <p className="text-white/85 text-[10px] sm:text-[11px] font-sans font-medium leading-tight mt-1">
                    Laser Guided
                  </p>
                </div>
              </div>

              {/* Feature 2: DURABILITY */}
              <div className="flex items-center gap-3 border-r border-white/20 pr-3">
                <div className="w-10 h-10 rounded-full border-2 border-white/50 flex items-center justify-center bg-white/10 shrink-0">
                  <ShieldCheck className="w-5 h-5 text-white" />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-display font-black text-[12px] sm:text-[13px] uppercase tracking-wider text-white leading-none">
                    DURABILITY
                  </h4>
                  <p className="text-white/85 text-[10px] sm:text-[11px] font-sans font-medium leading-tight mt-1">
                    Stronger Floors
                  </p>
                </div>
              </div>

              {/* Feature 3: EFFICIENCY */}
              <div className="flex items-center gap-3 border-r border-white/20 pr-3">
                <div className="w-10 h-10 rounded-full border-2 border-white/50 flex items-center justify-center bg-white/10 shrink-0">
                  <Timer className="w-5 h-5 text-white" />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-display font-black text-[12px] sm:text-[13px] uppercase tracking-wider text-white leading-none">
                    EFFICIENCY
                  </h4>
                  <p className="text-white/85 text-[10px] sm:text-[11px] font-sans font-medium leading-tight mt-1">
                    Faster Execution
                  </p>
                </div>
              </div>

              {/* Feature 4: EXPERT TEAM */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border-2 border-white/50 flex items-center justify-center bg-white/10 shrink-0">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-display font-black text-[12px] sm:text-[13px] uppercase tracking-wider text-white leading-none">
                    EXPERT TEAM
                  </h4>
                  <p className="text-white/85 text-[10px] sm:text-[11px] font-sans font-medium leading-tight mt-1">
                    Trusted Pros
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Bottom: Sleek 3-Photo Showcase Frame (100% FROZEN & UNTOUCHED) */}
          <div className="w-full lg:w-[480px] xl:w-[520px] shrink-0 bg-white p-2 rounded-tl-[2rem] rounded-br-[2rem] rounded-tr-none rounded-bl-none border-4 border-white shadow-2xl -skew-x-12 z-20">
            <div className="grid grid-cols-3 gap-2 h-32 sm:h-36 md:h-40 overflow-hidden rounded-tl-[1.5rem] rounded-br-[1.5rem] rounded-tr-none rounded-bl-none bg-white">
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
                    className="w-full h-full object-cover skew-x-12 scale-135 group-hover/img:scale-145 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/15 group-hover/img:bg-transparent transition-colors" />
                  <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm text-white p-1 rounded-full opacity-0 group-hover/img:opacity-100 transition-opacity skew-x-12">
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
