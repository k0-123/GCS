"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatePresence } from "framer-motion";
import { NavbarServicesSlider } from "@/components/layout/NavbarServicesSlider";

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "HOME", href: "/" },
    { label: "ABOUT US", href: "/about" },
    { label: "SERVICES", href: "/services", hasDropdown: true },
    { label: "PROJECTS", href: "/projects" },
    { label: "EQUIPMENT", href: "/#machinery" },
    { label: "CONTACT US", href: "/contact" },
  ];

  return (
    <header
      onMouseLeave={() => setServicesOpen(false)}
      className="fixed top-0 left-0 right-0 z-50 w-full select-none transition-all duration-300 bg-white lg:bg-transparent border-b border-slate-200 lg:border-none shadow-sm lg:shadow-none"
    >
      
      {/* 
        FLUSH TOP NAVBAR CONTAINER (Edge-to-edge full width)
      */}
      <div
        className={cn(
          "relative w-full flex items-center justify-between transition-all duration-300 ease-in-out bg-white lg:bg-transparent px-4 sm:px-6 lg:px-0",
          scrolled ? "h-14 sm:h-16" : "h-16 sm:h-18"
        )}
      >
        
        {/* 1. TOP-LEFT WHITE LOGO CONTAINER */}
        <div className="relative z-30 bg-white h-full flex items-center gap-3 lg:border-b lg:border-slate-200 shrink-0 px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3 group">
            {/* Official GCS High-Res Logo Asset */}
            <div className="h-9 sm:h-11 md:h-12 w-auto flex items-center justify-center">
              <img
                src="/images/gcs-logo.webp"
                alt="GCS Laser Screed Flooring Solutions"
                className="h-full w-auto object-contain"
              />
            </div>
            {/* Stacked Subtext */}
            <div className="flex flex-col border-l border-slate-300 pl-3">
              <span className="font-display font-black text-[#3B3D42] text-[12px] sm:text-[14px] tracking-wider leading-none uppercase">
                LASER SCREED
              </span>
              <span className="font-sans font-bold text-[#04509A] text-[9px] sm:text-[10px] tracking-widest leading-tight uppercase mt-0.5">
                FLOORING SOLUTIONS
              </span>
            </div>
          </Link>
        </div>

        {/* 
          SLANTED ROYAL BLUE SHAPE IN NAVBAR (Desktop only)
        */}
        <div className={cn(
          "hidden lg:block absolute top-0 left-0 w-full h-full pointer-events-none z-20 transition-opacity duration-300",
          scrolled ? "opacity-0" : "opacity-100"
        )}>
          <svg viewBox="0 0 1000 64" preserveAspectRatio="none" className="w-full h-full">
            <path
              d="M 260 0 L 305 0 L 268 64 L 223 64 Z"
              fill="#04509A"
            />
          </svg>
        </div>

        {/* 2. WHITE NAVIGATION MENU BAR (Desktop - Full Edge Width) */}
        <div className="hidden lg:flex relative flex-1 h-full items-center justify-between bg-white border-b border-slate-200 pl-24 sm:pl-32 md:pl-40 pr-6 lg:pr-10 xl:pr-12">
          
          {/* Navigation Links */}
          <div className="flex items-center gap-6 xl:gap-9 font-display font-black text-[13px] xl:text-[14px] uppercase tracking-wider text-[#3B3D42] mx-auto">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : item.href.startsWith("/#")
                  ? false
                  : pathname.startsWith(item.href);

              if (item.hasDropdown) {
                return (
                  <div
                    key={item.label}
                    onMouseEnter={() => setServicesOpen(true)}
                    className="relative flex items-center gap-1 cursor-pointer py-5"
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "relative py-1.5 transition-colors hover:text-[#04509A] flex items-center gap-1",
                        isActive || servicesOpen ? "text-[#04509A]" : "text-[#3B3D42]"
                      )}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-200", servicesOpen ? "rotate-180 text-[#04509A]" : "text-slate-400")} />
                      {(isActive || servicesOpen) && (
                        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#04509A] rounded-full" />
                      )}
                    </Link>
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "relative py-1.5 transition-colors hover:text-[#04509A]",
                    isActive ? "text-[#04509A]" : "text-[#3B3D42]"
                  )}
                >
                  {item.label}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#04509A] rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right Phone Call Button */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+919772586211"
              className="inline-flex items-center gap-2.5 bg-[#04509A] hover:bg-[#033d7a] text-white font-display text-[15px] font-bold tracking-wide px-6 py-2.5 rounded-full transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Phone className="w-4.5 h-4.5 fill-white" />
              <span>+91  97725  86211</span>
            </a>
          </div>

        </div>

        {/* Mobile Hamburger Menu Icon */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden relative z-30 p-2 text-[#3B3D42] hover:text-[#04509A] bg-transparent hover:bg-slate-100 rounded-lg transition-all focus:outline-none focus:ring-0 active:bg-slate-200"
          aria-label="Toggle Menu"
        >
          {mobileOpen ? <X className="w-7 h-7 text-[#04509A]" /> : <Menu className="w-7 h-7 text-[#3B3D42]" />}
        </button>

      </div>

      {/* Services Dropdown Mega-Menu Slider */}
      <AnimatePresence>
        {servicesOpen && (
          <div onMouseEnter={() => setServicesOpen(true)}>
            <NavbarServicesSlider onClose={() => setServicesOpen(false)} />
          </div>
        )}
      </AnimatePresence>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-[#E2E8F0] px-6 py-4 shadow-2xl flex flex-col gap-3">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm font-display font-bold uppercase tracking-wider text-[#3B3D42] hover:text-[#04509A] py-1 border-b border-slate-100 last:border-b-0"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="tel:+919772586211"
            className="mt-1 flex items-center justify-center gap-2.5 bg-[#04509A] text-white font-mono text-xs font-bold py-2.5 rounded-xl shadow-md"
          >
            <Phone className="w-4 h-4 fill-white" />
            <span>Call +91 97725 86211</span>
          </a>
        </div>
      )}
    </header>
  );
}
