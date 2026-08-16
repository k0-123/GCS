"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ShieldCheck, ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";

export interface ApproachStep {
  num: string;
  title: string;
  subtitle: string;
  desc: string;
  highlights: string[];
  image: string;
  standard: string;
}

const steps: ApproachStep[] = [
  {
    num: "01",
    title: "Pre-Survey & Sub-Base Benchmark",
    subtitle: "Level Survey & Plate Bearing Testing",
    desc: "Our engineers visit the site and carry out a digital level survey along with a plate bearing test (1 test per 2,000 m² of floor area) to confirm the sub-base is prepared to the exact tolerance and properly compacted.",
    highlights: ["Digital level survey across total site grid", "Plate bearing test at 2,000 m² intervals", "Sub-base compaction level & grade verification"],
    image: "/images/card_testing_certification.webp",
    standard: "ASTM E 1155 Sub-Base Standard",
  },
  {
    num: "02",
    title: "Pre-Pouring Slip Membrane",
    subtitle: "200-Micron LDPE Friction Reduction",
    desc: "A 200-micron LDPE slip membrane is installed across the entire slab footprint to reduce sub-base friction during concrete curing, drastically lowering the risk of unplanned drying shrinkage cracks.",
    highlights: ["200-micron LDPE sheet layout", "Friction coefficient minimization", "Sub-grade moisture protection"],
    image: "/images/card_laser_screed.webp",
    standard: "TR34 Slab Shrinkage Protocol",
  },
  {
    num: "03",
    title: "Formwork & Joint Engineering",
    subtitle: "Armour Joints & Plate Dowels",
    desc: "Adjustable timber formwork with L-angle profiles is aligned alongside heavy-duty steel Armour Joints at high-traffic construction joints. 6mm ABS diamond plate dowel sleeves (100×100mm @ 450mm c/c) are fixed for load transfer.",
    highlights: ["Steel Armour Joint placement", "6mm ABS diamond dowel sleeves @ 450mm c/c", "Zero vertical differential deflection"],
    image: "/images/armour_joint_dowel.webp",
    standard: "EN 10277-1 & EN 10025-2",
  },
  {
    num: "04",
    title: "Isolation Joints & Reinforcement",
    subtitle: "Column & Wall Restraint Elimination",
    desc: "Locally sourced steel reinforcement is laid per design specs. Compressible isolation joint materials (10mm for walls, 20mm for columns) are fixed to prevent structural restraint during slab expansion.",
    highlights: ["10mm compressible wall isolation", "20mm column boundary isolation", "Steel rebar / SFRC mesh positioning"],
    image: "/images/card_sfrc_flooring.webp",
    standard: "TR34 Isolation Joint Code",
  },
  {
    num: "05",
    title: "Automated Laser Screed Pouring",
    subtitle: "Somero S-158C Laying & Hardener Spreading",
    desc: "Concrete slump and temperature are verified on site. The Somero S-158C laser screed levels, vibrates, and compacts concrete in a single pass (up to 1,200 m²/day), followed by non-metallic hardener (3.5–4 kg/m²) via semi-mechanized spreader.",
    highlights: ["Somero S-158C 3D laser levelling", "Up to 1,200 m²/day pouring speed", "3.5–4.0 kg/m² non-metallic hardener"],
    image: "/images/gcs_team_somero.webp",
    standard: "TR34 Wide-Bay Standard",
  },
  {
    num: "06",
    title: "Flatness & Power Trowel Finishing",
    subtitle: "Husqvarna Ride-On Burnishing & Sawing",
    desc: "Our experienced finishing team completes the slab using Husqvarna CRT36 ride-on and MCT 36-5 walk-behind power trowels for high-density burnishing, followed by early-entry saw-cutting for contraction joints.",
    highlights: ["Husqvarna CRT36 ride-on power trowelling", "High-gloss densified finish", "Early-entry saw-cut contraction joints"],
    image: "/images/concrete_power_trowel.webp",
    standard: "ROT High-Density Burnish",
  },
  {
    num: "07",
    title: "TR34 Dipstick Testing & Certification",
    subtitle: "Independent Chartered Engineer Sign-Off",
    desc: "Independent third-party chartered engineers perform full Dipstick / F-meter profile scanning, delivering certified TR34 FM1, FM2, or DM1 documentation for facility handover.",
    highlights: ["Dipstick / F-meter profile scanning", "Property E & F metrics calculation", "Third-party chartered engineer sign-off"],
    image: "/images/card_vna_flooring.webp",
    standard: "TR34 4th Edition Certified",
  },
];

export function HorizontalApproachStepper() {
  const [activeStepIdx, setActiveStepIdx] = useState<number>(0);

  const currentStep = steps[activeStepIdx];

  const handleNext = () => {
    setActiveStepIdx((prev) => (prev < steps.length - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setActiveStepIdx((prev) => (prev > 0 ? prev - 1 : steps.length - 1));
  };

  return (
    <section className="bg-ink-navy py-16 md:py-24 text-slab-white relative overflow-hidden border-y border-screed-blue/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-mono text-safety-amber text-[13px] uppercase tracking-[1px] bg-safety-amber/10 px-3.5 py-1 rounded-[2px] border border-safety-amber/20 mb-3 inline-block font-semibold">
            Engineering Execution Protocol
          </span>
          <h2 className="text-slab-white text-[28px] md:text-[40px] font-display font-black leading-tight">
            Our Approach — From Sub-Base to TR34 Certification
          </h2>
          <p className="mt-4 text-slab-white/70 text-[16px] md:text-[17px] leading-relaxed">
            Click through the horizontal stages below to see how GCS delivers precision engineered concrete floors.
          </p>
        </div>

        {/* Horizontal Stepper Bar */}
        <div className="flex items-center justify-between gap-2 overflow-x-auto pb-4 mb-8 scrollbar-thin">
          {steps.map((step, idx) => {
            const isActive = idx === activeStepIdx;
            return (
              <button
                key={step.num}
                onClick={() => setActiveStepIdx(idx)}
                className={`px-4 py-3 rounded-[3px] font-display text-[13px] md:text-[14px] font-bold whitespace-nowrap transition-all duration-200 flex items-center gap-2 border shrink-0 ${
                  isActive
                    ? "bg-screed-blue border-safety-amber text-slab-white shadow-lg shadow-screed-blue/30 scale-[1.03]"
                    : "bg-slab-white/5 border-slab-white/10 text-slab-white/70 hover:bg-slab-white/10"
                }`}
              >
                <span
                  className={`font-mono text-[12px] px-2 py-0.5 rounded ${
                    isActive ? "bg-safety-amber text-ink-navy font-black" : "bg-slab-white/10 text-slab-white/60"
                  }`}
                >
                  {step.num}
                </span>
                <span>{step.title.split("&")[0].trim()}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Display Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep.num}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25 }}
            className="bg-slab-white/5 border border-slab-white/15 backdrop-blur-md rounded-[4px] p-6 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Left Image Frame */}
            <div className="lg:col-span-5">
              <div className="relative w-full h-64 md:h-80 rounded-[3px] overflow-hidden border border-slab-white/20 bg-ink-navy shadow-xl group">
                <img
                  src={currentStep.image}
                  alt={currentStep.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-navy via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-[12px] font-mono">
                  <span className="bg-screed-blue text-slab-white font-bold px-2.5 py-1 rounded">
                    Stage {currentStep.num} of 07
                  </span>
                  <span className="bg-ink-navy/90 backdrop-blur-md text-safety-amber border border-safety-amber/30 px-2.5 py-1 rounded">
                    {currentStep.standard}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Details Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[14px] bg-safety-amber text-ink-navy px-3 py-1 rounded-[2px] font-black">
                  Step {currentStep.num}
                </span>
                <span className="text-[14px] text-slab-white/70 font-medium">
                  {currentStep.subtitle}
                </span>
              </div>

              <div>
                <h3 className="text-slab-white text-[24px] md:text-[32px] font-display font-black leading-tight mb-3">
                  {currentStep.title}
                </h3>
                <p className="text-slab-white/80 text-[16px] leading-relaxed">
                  {currentStep.desc}
                </p>
              </div>

              {/* Key Highlights */}
              <div className="space-y-2.5 pt-2">
                <h4 className="font-display font-bold text-[14px] uppercase tracking-[0.5px] text-safety-amber">
                  Execution Highlights
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {currentStep.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 bg-slab-white/5 p-3 rounded-[3px] border border-slab-white/10 text-[14px] text-slab-white/90">
                      <CheckCircle2 className="w-4 h-4 text-screed-blue shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between pt-4 border-t border-slab-white/10">
                <button
                  onClick={handlePrev}
                  className="inline-flex items-center gap-2 text-slab-white/70 hover:text-slab-white font-mono text-[13px] transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" /> Previous Step
                </button>
                
                <button
                  onClick={handleNext}
                  className="inline-flex items-center gap-2 text-safety-amber hover:text-safety-amber/80 font-mono text-[13px] font-bold transition-colors"
                >
                  Next Step <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
