"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Pause, Play, ShieldCheck } from "lucide-react";

export interface HeroSlide {
  id: string;
  image: string;
  badge: string;
  titlePrefix: string;
  titleHighlight: string;
  titleSuffix: string;
  description: string;
  ctaPrimaryText: string;
  ctaPrimaryLink: string;
  ctaSecondaryText: string;
  ctaSecondaryLink: string;
  tag: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: "laser-screed",
    image: "/images/hero-screed.jpg",
    badge: "Somero S-158C Technology",
    titlePrefix: "HIGH-PRECISION",
    titleHighlight: "LASER SCREED",
    titleSuffix: "FLOORING.",
    description:
      "Jaipur's 1st dedicated laser screed concrete flooring company. Delivering ultra-flat FM1, FM2 & VNA floors to TR34 & ASTM E1155 global standards.",
    ctaPrimaryText: "GET FREE ESTIMATE",
    ctaPrimaryLink: "/contact",
    ctaSecondaryText: "VIEW OUR WORK",
    ctaSecondaryLink: "/projects",
    tag: "Somero Laser Screeding in Action",
  },
  {
    id: "polished-finish",
    image: "/images/hero-polished.jpg",
    badge: "Husqvarna Ride-On Trowels",
    titlePrefix: "DUST-PROOF &",
    titleHighlight: "POLISHED CONCRETE",
    titleSuffix: "SLABS.",
    description:
      "High-durability, mirror-polished industrial floors designed for maximum abrasion resistance, low long-term maintenance, and heavy forklift traffic.",
    ctaPrimaryText: "EXPLORE SERVICES",
    ctaPrimaryLink: "/services",
    ctaSecondaryText: "CALL EXPERTS",
    ctaSecondaryLink: "/contact",
    tag: "Power Trowel Mirror Polishing Pass",
  },
  {
    id: "turnkey-overview",
    image: "/images/hero-overview.jpg",
    badge: "Turnkey Sub-Base to Certification",
    titlePrefix: "SUPER-FLAT",
    titleHighlight: "WAREHOUSE & PLANT",
    titleSuffix: "FLOORS.",
    description:
      "Over 60,00,000+ sq. ft. delivered across 16 major industrial projects in Rajasthan, Gujarat & pan-India. Single-source responsibility from engineering to TR34 certification.",
    ctaPrimaryText: "REQUEST CONSULTATION",
    ctaPrimaryLink: "/contact",
    ctaSecondaryText: "SEE PROJECTS",
    ctaSecondaryLink: "/projects",
    tag: "Precision Concrete Joint & Finishing Systems",
  },
  {
    id: "renew-project",
    image: "https://www.gangadharconcretesolution.com/images/renew1.jpg",
    badge: "10,00,000 Sq. Ft. Landmark Project",
    titlePrefix: "BUILT FOR",
    titleHighlight: "RENEW POWER",
    titleSuffix: "DHOLERA.",
    description:
      "Large-scale jointless SFRC laser screed floor execution for renewable energy manufacturing hub in Ahmedabad, Gujarat.",
    ctaPrimaryText: "VIEW PROJECT DETAILS",
    ctaPrimaryLink: "/projects",
    ctaSecondaryText: "GET ESTIMATE",
    ctaSecondaryLink: "/contact",
    tag: "Renew Power Dholera Site Execution",
  },
];

export function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5500);

    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX;

    if (deltaX > 50) {
      prevSlide();
    } else if (deltaX < -50) {
      nextSlide();
    }
    setTouchStartX(null);
  };

  const currentSlide = HERO_SLIDES[currentIndex];

  return (
    <section
      className="relative w-full min-h-[580px] sm:min-h-[640px] lg:min-h-[720px] flex flex-col justify-between overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24 bg-[#0B2F4A] select-none"
      id="hero-slider"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Images with Crossfade Effect */}
      {HERO_SLIDES.map((slide, index) => {
        const isActive = index === currentIndex;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
            }`}
            style={{ transitionProperty: "opacity, transform" }}
          >
            <img
              src={slide.image}
              alt={slide.titleHighlight}
              className={`w-full h-full object-cover object-center transition-transform duration-10000 ease-out ${
                isActive ? "scale-105" : "scale-100"
              }`}
            />
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#031525]/95 via-[#0A2540]/80 to-[#031525]/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B2F4A] via-transparent to-black/60" />
          </div>
        );
      })}

      {/* Main Hero Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full my-auto">
        <div className="max-w-4xl">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-[#E2861F]/40 shadow-xl mb-5 transition-all duration-300">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E2861F] animate-pulse" />
            <span className="text-white text-[12px] sm:text-[13px] font-mono uppercase tracking-widest font-bold">
              {currentSlide.badge}
            </span>
          </div>

          {/* Dynamic Headline */}
          <h1 className="text-white text-[38px] sm:text-[56px] lg:text-[72px] leading-[0.98] tracking-tight font-display font-black uppercase drop-shadow-[0_6px_30px_rgba(0,0,0,0.9)] transition-all duration-500">
            {currentSlide.titlePrefix}{" "}
            <span className="text-[#E2861F] underline decoration-[#E2861F]/40 underline-offset-8">
              {currentSlide.titleHighlight}
            </span>{" "}
            {currentSlide.titleSuffix}
          </h1>

          {/* Subtitle / Description */}
          <p className="mt-6 text-white/90 text-[15px] sm:text-[18px] leading-relaxed font-normal max-w-2xl drop-shadow-md">
            {currentSlide.description}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 mt-8">
            <a
              href={currentSlide.ctaPrimaryLink}
              className="inline-flex items-center gap-3 bg-[#E2861F] text-white font-display font-bold uppercase text-[13px] sm:text-[15px] tracking-wider px-7 py-3.5 rounded-full hover:bg-white hover:text-[#005691] transition-all shadow-2xl shadow-[#E2861F]/40 transform hover:-translate-y-0.5"
            >
              <span className="w-6 h-6 rounded-full bg-white text-[#E2861F] flex items-center justify-center font-bold text-xs">
                ➔
              </span>
              {currentSlide.ctaPrimaryText}
            </a>

            <a
              href={currentSlide.ctaSecondaryLink}
              className="inline-flex items-center gap-3 bg-black/60 backdrop-blur-md border-2 border-white/80 text-white font-display font-bold uppercase text-[13px] sm:text-[15px] tracking-wider px-7 py-3.5 rounded-full hover:bg-white hover:text-[#005691] transition-all shadow-xl hover:border-white transform hover:-translate-y-0.5"
            >
              <span className="w-6 h-6 rounded-full bg-white/20 text-white flex items-center justify-center font-bold text-xs">
                ➔
              </span>
              {currentSlide.ctaSecondaryText}
            </a>
          </div>
        </div>
      </div>

      {/* Slider Navigation Bar Bottom */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 w-full mt-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/15 bg-black/30 backdrop-blur-md px-6 py-4 rounded-xl">
          
          {/* Current Slide Tag */}
          <div className="flex items-center gap-3 text-white/80 text-xs sm:text-sm font-mono">
            <ShieldCheck className="w-4 h-4 text-[#E2861F] shrink-0" />
            <span className="truncate max-w-[280px] sm:max-w-md font-semibold text-white">
              {currentSlide.tag}
            </span>
          </div>

          {/* Progress Indicators & Controls */}
          <div className="flex items-center gap-6">
            {/* Slide Index counter */}
            <span className="font-mono text-xs font-bold text-white/70">
              <span className="text-[#E2861F] text-base font-black">0{currentIndex + 1}</span> / 0{HERO_SLIDES.length}
            </span>

            {/* Slide Progress Dots */}
            <div className="flex items-center gap-2">
              {HERO_SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === currentIndex
                      ? "w-8 bg-[#E2861F] shadow-[0_0_10px_#E2861F]"
                      : "w-2.5 bg-white/30 hover:bg-white/60"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            {/* Prev / Next & Pause Buttons */}
            <div className="flex items-center gap-2 border-l border-white/20 pl-4">
              <button
                onClick={prevSlide}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#E2861F] text-white flex items-center justify-center transition-colors border border-white/20"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={() => setIsPaused(!isPaused)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#E2861F] text-white flex items-center justify-center transition-colors border border-white/20"
                aria-label={isPaused ? "Play Slider" : "Pause Slider"}
              >
                {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
              </button>

              <button
                onClick={nextSlide}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#E2861F] text-white flex items-center justify-center transition-colors border border-white/20"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
