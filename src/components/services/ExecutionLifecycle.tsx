"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { executionLifecyclePhases } from "@/lib/data/services";
import { CheckCircle2, ShieldAlert, FileText, ChevronRight } from "lucide-react";

export function ExecutionLifecycle() {
  const [activeStep, setActiveStep] = useState<number>(1);

  const currentPhase = executionLifecyclePhases.find((p) => p.stepNumber === activeStep) || executionLifecyclePhases[0];

  return (
    <section className="bg-slab-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-mono text-screed-blue text-[13px] uppercase tracking-[1px] bg-screed-blue/10 px-3.5 py-1 rounded-[2px] border border-screed-blue/20 mb-3 inline-block font-semibold">
            Quality Assurance Protocol
          </span>
          <h2 className="text-ink-navy text-[28px] md:text-[40px] font-display font-black leading-tight">
            The 5-Phase Execution & Quality Lifecycle
          </h2>
          <p className="mt-4 text-graphite text-[16px] md:text-[17px] leading-relaxed">
            Every GCS concrete floor undergoes a strict 5-stage engineering workflow from pre-pour sub-base testing to final TR34 chartered certification.
          </p>
        </div>

        {/* Stepper Tabs Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 mb-10">
          {executionLifecyclePhases.map((phase) => {
            const isActive = phase.stepNumber === activeStep;
            return (
              <button
                key={phase.stepNumber}
                onClick={() => setActiveStep(phase.stepNumber)}
                className={`p-4 rounded-[3px] border text-left transition-all duration-200 relative ${
                  isActive
                    ? "bg-screed-blue text-slab-white border-screed-blue shadow-md scale-[1.02]"
                    : "bg-concrete-grey/30 border-concrete-grey text-graphite hover:bg-concrete-grey/60"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`font-mono text-[12px] font-bold px-2 py-0.5 rounded ${
                      isActive ? "bg-safety-amber text-ink-navy font-black" : "bg-concrete-grey text-graphite/70"
                    }`}
                  >
                    Step 0{phase.stepNumber}
                  </span>
                  {phase.stepNumber < activeStep && (
                    <CheckCircle2 className="w-4 h-4 text-screed-blue" />
                  )}
                </div>
                <div className="font-display font-bold text-[14px] leading-snug line-clamp-2">
                  {phase.title.split(":")[1]?.trim() || phase.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Step Details Display Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPhase.stepNumber}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="bg-concrete-grey/20 border border-concrete-grey rounded-[4px] p-6 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
          >
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-[13px] bg-screed-blue text-slab-white px-3 py-1 rounded-[2px] font-bold">
                  {currentPhase.badgeText}
                </span>
                <span className="text-[14px] text-graphite/70 font-medium">
                  {currentPhase.subtitle}
                </span>
              </div>

              <h3 className="text-ink-navy text-[24px] md:text-[30px] font-display font-black leading-tight">
                {currentPhase.title}
              </h3>

              <p className="text-graphite text-[16px] leading-relaxed">
                {currentPhase.description}
              </p>

              {/* Key Activities Grid */}
              <div className="pt-2">
                <h4 className="font-display font-bold text-[14px] uppercase tracking-[0.5px] text-ink-navy mb-3">
                  Key Execution Tasks
                </h4>
                <div className="space-y-2.5">
                  {currentPhase.keyActivities.map((activity, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-slab-white p-3 rounded-[3px] border border-concrete-grey">
                      <ChevronRight className="w-4 h-4 text-screed-blue shrink-0 mt-0.5" />
                      <span className="text-[14px] text-graphite font-medium">{activity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Standards & Verification Card */}
            <div className="lg:col-span-5 bg-ink-navy text-slab-white p-6 md:p-8 rounded-[4px] flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center gap-2 text-safety-amber font-display font-bold text-[16px] mb-4">
                  <FileText className="w-5 h-5" />
                  <span>Compliance & Tolerances</span>
                </div>

                <div className="space-y-3">
                  {currentPhase.tolerancesAndStandards.map((std, idx) => (
                    <div key={idx} className="bg-slab-white/10 p-3.5 rounded-[3px] border border-slab-white/15">
                      <div className="font-mono text-[13px] text-safety-amber font-bold">{std}</div>
                      <div className="text-[12px] text-slab-white/70 mt-1">Verified on-site by GCS Site Engineer</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slab-white/10 bg-slab-white/5 p-4 rounded-[3px]">
                <div className="flex items-center gap-2.5">
                  <ShieldAlert className="w-5 h-5 text-safety-amber shrink-0" />
                  <div className="text-[13px] text-slab-white/80 leading-snug">
                    Strict adherence to UK TR34 4th Edition, ASTM E 1155 & DIN codes guaranteed on all floor handovers.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
