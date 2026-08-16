"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { tr34ClassSpecs } from "@/lib/data/services";
import { ShieldCheck, Ruler, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function TR34ToleranceCalculator() {
  const [selectedId, setSelectedId] = useState<string>("fm1");

  const currentSpec = tr34ClassSpecs.find((s) => s.id === selectedId) || tr34ClassSpecs[0];

  return (
    <section className="bg-ink-navy py-16 md:py-24 text-slab-white relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-screed-blue/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-safety-amber/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-mono text-safety-amber text-[13px] uppercase tracking-[1px] bg-safety-amber/10 px-3.5 py-1 rounded-[2px] border border-safety-amber/20 mb-4 inline-block">
            Engineering Precision Matrix
          </span>
          <h2 className="text-slab-white text-[28px] md:text-[40px] font-display font-black leading-tight">
            TR34 Floor Tolerance & Racking Height Calculator
          </h2>
          <p className="mt-4 text-slab-white/70 text-[16px] md:text-[17px]">
            Select your warehouse operational parameters below to determine the exact TR34 floor classification and flatness metrics required for your facility.
          </p>
        </div>

        {/* Height / Operational Selectors */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-10">
          {tr34ClassSpecs.map((spec) => {
            const isActive = spec.id === selectedId;
            return (
              <button
                key={spec.id}
                onClick={() => setSelectedId(spec.id)}
                className={`p-4 rounded-[3px] border text-left transition-all duration-300 relative ${
                  isActive
                    ? "bg-screed-blue border-safety-amber text-slab-white shadow-lg shadow-screed-blue/30 scale-[1.02]"
                    : "bg-slab-white/5 border-slab-white/10 text-slab-white/80 hover:bg-slab-white/10 hover:border-slab-white/20"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`font-mono text-[14px] font-bold ${isActive ? "text-safety-amber" : "text-slab-white/60"}`}>
                    {spec.classCode}
                  </span>
                  {isActive && <CheckCircle className="w-4 h-4 text-safety-amber" />}
                </div>
                <div className="font-display font-bold text-[15px] leading-tight mb-1">
                  {spec.rackingHeight}
                </div>
                <div className="text-[12px] text-slab-white/60 truncate">
                  {spec.movementType}
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Details Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSpec.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="bg-slab-white/5 border border-slab-white/15 backdrop-blur-md rounded-[4px] p-6 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Left Info Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="relative w-full h-48 md:h-56 rounded-[3px] overflow-hidden border border-slab-white/15 bg-ink-navy shadow-inner">
                <img
                  src="/images/vna_superflat_warehouse.webp"
                  alt="TR34 Warehouse Floor Flatness"
                  className="w-full h-full object-cover opacity-90 transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-navy via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 flex items-center gap-2 font-mono text-[12px] text-slab-white">
                  <span className="bg-safety-amber text-ink-navy font-black px-2.5 py-1 rounded">
                    TR34 4th Edition Standard
                  </span>
                  <span className="bg-ink-navy/80 backdrop-blur-md px-2.5 py-1 rounded border border-slab-white/10">
                    Precision Flatness
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-[16px] text-safety-amber font-bold bg-safety-amber/15 px-3 py-1 rounded-[2px] border border-safety-amber/30">
                  Class {currentSpec.classCode}
                </span>
                <span className="text-[13px] font-mono uppercase tracking-[0.5px] bg-slab-white/10 text-slab-white/80 px-3 py-1 rounded-[2px]">
                  {currentSpec.movementType}
                </span>
              </div>

              <h3 className="text-slab-white text-[22px] md:text-[28px] font-display font-bold leading-snug">
                Racking Elevation: {currentSpec.rackingHeight}
              </h3>

              <p className="text-slab-white/80 text-[16px] leading-relaxed">
                {currentSpec.description}
              </p>

              {/* Standards Badges */}
              <div className="flex flex-wrap gap-4 pt-2 text-[13px] text-slab-white/70">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-screed-blue shrink-0" />
                  <span>TR34 4th Edition Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Ruler className="w-4 h-4 text-safety-amber shrink-0" />
                  <span>ASTM E 1155 & DIN 18202 Verified</span>
                </div>
              </div>
            </div>

            {/* Right Spec Metrics Box */}
            <div className="lg:col-span-5 bg-ink-navy/80 border border-slab-white/20 p-6 md:p-8 rounded-[4px] space-y-6">
              <h4 className="font-display font-bold text-[14px] uppercase tracking-[1px] text-slab-white/60">
                TR34 Tolerance Metrics
              </h4>

              {/* Property E (Levelness) */}
              <div>
                <div className="flex justify-between items-center text-[14px] mb-2">
                  <span className="text-slab-white/80 font-medium">Property E (Levelness)</span>
                  <span className="font-mono font-bold text-safety-amber">{currentSpec.propertyE}</span>
                </div>
                <div className="w-full bg-slab-white/10 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-safety-amber h-full transition-all duration-500"
                    style={{
                      width: currentSpec.propertyE.includes("mm")
                        ? `${Math.max(20, 100 - parseFloat(currentSpec.propertyE) * 8)}%`
                        : "95%",
                    }}
                  />
                </div>
              </div>

              {/* Property F (Flatness) */}
              <div>
                <div className="flex justify-between items-center text-[14px] mb-2">
                  <span className="text-slab-white/80 font-medium">Property F (Flatness)</span>
                  <span className="font-mono font-bold text-screed-blue">{currentSpec.propertyF}</span>
                </div>
                <div className="w-full bg-slab-white/10 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-screed-blue h-full transition-all duration-500"
                    style={{
                      width: currentSpec.propertyF.includes("mm")
                        ? `${Math.max(20, 100 - parseFloat(currentSpec.propertyF) * 35)}%`
                        : "98%",
                    }}
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-slab-white/10">
                <div className="text-[12px] text-slab-white/50 uppercase tracking-[0.5px] mb-2">
                  Recommended Solution
                </div>
                <div className="font-display font-bold text-[16px] text-slab-white mb-4">
                  {currentSpec.recommendedService}
                </div>
                <Button href={`/services/${currentSpec.serviceSlug}`} className="w-full justify-center">
                  Explore {currentSpec.classCode} Service
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
