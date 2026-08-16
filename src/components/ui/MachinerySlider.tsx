"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Wrench, Shield, CheckCircle } from "lucide-react";

interface MachineItem {
  name: string;
  model: string;
  role: string;
  specs: string[];
  image: string;
}

const MACHINERY: MachineItem[] = [
  {
    name: "Somero Laser Screed Machine",
    model: "S-158C / S-485",
    role: "Precision Concrete Leveling & Placement",
    specs: ["1,200 m² daily pour capacity", "TR34 FM1/FM2 Tolerance", "Automatic Laser Elevation Control"],
    image: "/images/hero-screed.webp",
  },
  {
    name: "Husqvarna Ride-On Power Trowel",
    model: "CRT 36-26A",
    role: "Heavy-Duty Mirror Finishing & Polishing",
    specs: ["Dual 36-inch rotor diameter", "High RPM burnishing", "Optimum flatness compaction"],
    image: "/images/hero-polished.webp",
  },
  {
    name: "Husqvarna Walk-Behind Trowel",
    model: "MCT 36-5",
    role: "Edge & Detail Surface Finishing",
    specs: ["Precision blade pitch control", "Heavy-duty gear transmission", "Smooth perimeter edge work"],
    image: "/images/hero-overview.webp",
  },
  {
    name: "Semi-Mechanized Hardener Spreader",
    model: "GCS Topping Spreader",
    role: "Dry-Shake Floor Hardener Application",
    specs: ["3.5 – 4.0 kg/m² uniform rate", "Eliminates hardener clumping", "Enhanced abrasion resistance"],
    image: "/images/armour_joint_dowel.webp",
  },
];

export function MachinerySlider() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? MACHINERY.length - 1 : i - 1));
  const next = () => setIndex((i) => (i + 1) % MACHINERY.length);

  const current = MACHINERY[index];

  return (
    <div className="bg-[#0A2540] border border-[#A6C9E8]/30 rounded-xl p-6 md:p-8 text-white shadow-2xl">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 mb-2">
            <Wrench className="w-4 h-4 text-[#E2861F]" />
            <span className="font-mono text-xs uppercase font-bold text-[#E2861F] tracking-widest">
              State-of-the-Art Fleet
            </span>
          </div>
          <h3 className="font-display font-black text-2xl md:text-3xl uppercase tracking-tight text-white">
            High-Performance Machinery
          </h3>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#E2861F] text-white flex items-center justify-center transition-colors border border-white/20"
            aria-label="Previous Machine"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="font-mono text-xs text-white/70">
            0{index + 1} / 0{MACHINERY.length}
          </span>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#E2861F] text-white flex items-center justify-center transition-colors border border-white/20"
            aria-label="Next Machine"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Machine Image */}
        <div className="lg:col-span-6 relative h-64 md:h-80 w-full rounded-lg overflow-hidden border border-white/15">
          <img
            src={current.image}
            alt={current.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-md p-3 rounded border border-white/20">
            <span className="text-[#E2861F] text-xs font-mono font-bold uppercase block">
              {current.model}
            </span>
            <span className="text-white text-sm font-display font-bold">
              {current.role}
            </span>
          </div>
        </div>

        {/* Machine Details */}
        <div className="lg:col-span-6 space-y-4">
          <span className="inline-block px-3 py-1 bg-[#E2861F]/20 text-[#E2861F] font-mono text-xs font-bold rounded uppercase">
            Model: {current.model}
          </span>
          
          <h4 className="font-display font-black text-2xl uppercase text-white leading-tight">
            {current.name}
          </h4>

          <p className="text-white/80 text-sm leading-relaxed">
            Maintained to factory specs and operated by GCS certified site technicians for consistent, high-tolerance industrial concrete pours.
          </p>

          <div className="space-y-2 pt-2">
            {current.specs.map((spec, i) => (
              <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-white/90">
                <CheckCircle className="w-4 h-4 text-[#E2861F] shrink-0" />
                <span>{spec}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
