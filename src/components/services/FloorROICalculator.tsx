"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingUp, Clock, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function FloorROICalculator() {
  const [area, setArea] = useState<number>(3000);

  // Calculations based on GCS laser screed brochure metrics
  const laserDays = Math.ceil(area / 1200);
  const manualDays = Math.ceil(area / 300);
  const daysSaved = Math.max(1, manualDays - laserDays);

  // Estimated joint savings (manual screed requires joints every 4m = ~250m per 1,000m², laser screed reduces joints by ~65%)
  const manualJointMeters = Math.round((area / 1000) * 250);
  const laserJointMeters = Math.round(manualJointMeters * 0.35);
  const jointMetersSaved = manualJointMeters - laserJointMeters;

  return (
    <section className="bg-ink-navy py-16 md:py-24 text-slab-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-mono text-safety-amber text-[13px] uppercase tracking-[1px] bg-safety-amber/10 px-3.5 py-1 rounded-[2px] border border-safety-amber/20 mb-3 inline-block font-semibold">
            Speed & Cost Efficiency Estimator
          </span>
          <h2 className="text-slab-white text-[28px] md:text-[40px] font-display font-black leading-tight">
            Laser Screed Productivity & Savings Calculator
          </h2>
          <p className="mt-4 text-slab-white/70 text-[16px] md:text-[17px] leading-relaxed">
            Drag the slider below to input your project floor area and discover how laser screeding drastically reduces construction time, cuts floor joints, and lowers long-term operational costs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Controls Column */}
          <div className="lg:col-span-6 bg-slab-white/5 border border-slab-white/15 p-6 md:p-10 rounded-[4px] space-y-8 backdrop-blur-md">
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="font-display font-bold text-[16px] text-slab-white flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-safety-amber" />
                  <span>Proposed Floor Area</span>
                </label>
                <div className="font-mono font-black text-[24px] text-safety-amber bg-safety-amber/10 px-4 py-1 rounded-[2px] border border-safety-amber/30">
                  {area.toLocaleString()} m²
                </div>
              </div>

              {/* Range Slider */}
              <input
                type="range"
                min={500}
                max={25000}
                step={500}
                value={area}
                onChange={(e) => setArea(Number(e.target.value))}
                className="w-full h-3 bg-slab-white/10 rounded-lg appearance-none cursor-pointer accent-safety-amber"
              />

              <div className="flex justify-between text-[12px] font-mono text-slab-white/50 mt-2">
                <span>500 m²</span>
                <span>10,000 m²</span>
                <span>25,000 m²</span>
              </div>
            </div>

            {/* Comparison Metrics */}
            <div className="space-y-4 pt-4 border-t border-slab-white/10">
              <h4 className="font-display font-bold text-[14px] uppercase tracking-[0.5px] text-slab-white/60">
                Daily Pouring Output Rate
              </h4>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slab-white/5 p-4 rounded-[3px] border border-slab-white/10">
                  <div className="text-[12px] text-slab-white/60 font-mono mb-1">Manual Screed</div>
                  <div className="font-mono text-[20px] font-bold text-slab-white/70">~300 m²/day</div>
                  <div className="text-[12px] text-slab-white/40 mt-1">{manualDays} Days Total</div>
                </div>

                <div className="bg-screed-blue/30 p-4 rounded-[3px] border border-screed-blue/50">
                  <div className="text-[12px] text-safety-amber font-mono font-bold mb-1">GCS Laser Screed</div>
                  <div className="font-mono text-[20px] font-bold text-safety-amber">Up to 1,200 m²/day</div>
                  <div className="text-[12px] text-slab-white/80 mt-1">{laserDays} Days Total</div>
                </div>
              </div>
            </div>

            <Button href="/contact" className="w-full justify-center">
              Request Project Speed Quote
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Right Live Results Cards Column */}
          <div className="lg:col-span-6 space-y-4">
            {/* Days Saved Card */}
            <motion.div
              key={`days-${daysSaved}`}
              initial={{ scale: 0.96, opacity: 0.8 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-screed-blue/30 border border-screed-blue/60 p-6 md:p-8 rounded-[4px] flex items-center justify-between shadow-lg"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2 font-mono text-[13px] text-safety-amber font-bold uppercase tracking-[0.5px]">
                  <Clock className="w-4 h-4" />
                  <span>Execution Time Saved</span>
                </div>
                <div className="font-display font-black text-[32px] md:text-[42px] text-slab-white leading-none">
                  {daysSaved} Days Faster
                </div>
                <div className="text-[14px] text-slab-white/70">
                  Accelerates facility handover & revenue generation
                </div>
              </div>
            </motion.div>

            {/* Joint Reduction Card */}
            <motion.div
              key={`joints-${jointMetersSaved}`}
              initial={{ scale: 0.96, opacity: 0.8 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.05 }}
              className="bg-slab-white/5 border border-slab-white/15 p-6 md:p-8 rounded-[4px] flex items-center justify-between"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2 font-mono text-[13px] text-screed-blue font-bold uppercase tracking-[0.5px]">
                  <TrendingUp className="w-4 h-4 text-screed-blue" />
                  <span>Joint Reduction Efficiency</span>
                </div>
                <div className="font-display font-black text-[32px] md:text-[42px] text-safety-amber leading-none">
                  65% Fewer Joints
                </div>
                <div className="text-[14px] text-slab-white/70">
                  Eliminates ~{jointMetersSaved.toLocaleString()} metres of potential joint failure points
                </div>
              </div>
            </motion.div>

            {/* Quality & Maintenance Savings Card */}
            <motion.div
              key={`maint-${area}`}
              initial={{ scale: 0.96, opacity: 0.8 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="bg-slab-white/5 border border-slab-white/15 p-6 md:p-8 rounded-[4px] flex items-center justify-between"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2 font-mono text-[13px] text-safety-amber font-bold uppercase tracking-[0.5px]">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Long-Term Maintenance ROI</span>
                </div>
                <div className="font-display font-black text-[24px] md:text-[28px] text-slab-white leading-tight">
                  Lower Operational & Forklift Repair Costs
                </div>
                <div className="text-[14px] text-slab-white/70">
                  TR34 FM1/FM2 flatness prevents MHE tire wear and racking vibration damage.
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
