"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { machineryFleet } from "@/lib/data/services";
import { Cpu, CheckCircle2, Zap, Cog, Activity } from "lucide-react";

export function MachineryFleetShowcase() {
  const [activeMachineryId, setActiveMachineryId] = useState<string>(machineryFleet[0].id);

  const activeMachine = machineryFleet.find((m) => m.id === activeMachineryId) || machineryFleet[0];

  return (
    <section className="bg-concrete-grey/40 py-16 md:py-24 border-y border-concrete-grey relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-mono text-screed-blue text-[13px] uppercase tracking-[1px] bg-screed-blue/10 px-3.5 py-1 rounded-[2px] border border-screed-blue/20 mb-3 inline-block font-semibold">
            Machinery & Laser Technology Fleet
          </span>
          <h2 className="text-ink-navy text-[28px] md:text-[40px] font-display font-black leading-tight">
            State-of-the-Art Flooring Machinery
          </h2>
          <p className="mt-4 text-graphite text-[16px] md:text-[17px] leading-relaxed">
            GCS continuously invests in international-grade machinery to ensure maximum floor flatness, high output rates, and zero manual error.
          </p>
        </div>

        {/* Machinery Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10">
          {machineryFleet.map((machine) => {
            const isActive = machine.id === activeMachineryId;
            return (
              <button
                key={machine.id}
                onClick={() => setActiveMachineryId(machine.id)}
                className={`px-4 py-3 rounded-[3px] font-display text-[14px] font-bold transition-all duration-200 flex items-center gap-2.5 ${
                  isActive
                    ? "bg-ink-navy text-slab-white shadow-md shadow-ink-navy/20 scale-[1.02]"
                    : "bg-slab-white text-graphite hover:bg-concrete-grey border border-concrete-grey"
                }`}
              >
                <Cog className={`w-4 h-4 ${isActive ? "text-safety-amber animate-spin-slow" : "text-screed-blue"}`} />
                <span>{machine.name.split(" ")[0]} {machine.name.split(" ")[1]}</span>
                <span
                  className={`text-[11px] px-2 py-0.5 rounded font-mono ${
                    isActive ? "bg-screed-blue text-slab-white" : "bg-concrete-grey text-graphite/70"
                  }`}
                >
                  {machine.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Display Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeMachine.id}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="bg-slab-white border border-concrete-grey rounded-[4px] p-6 md:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          >
            {/* Left Machine Intro */}
            <div className="lg:col-span-6 space-y-6">
              {activeMachine.image && (
                <div className="relative w-full h-52 md:h-64 rounded-[3px] overflow-hidden border border-concrete-grey shadow-inner bg-ink-navy">
                  <img
                    src={activeMachine.image}
                    alt={activeMachine.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-navy/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center text-slab-white text-[12px] font-mono">
                    <span className="bg-ink-navy/80 backdrop-blur-md px-2.5 py-1 rounded border border-slab-white/10">
                      GCS Fleet Photo
                    </span>
                    <span className="bg-safety-amber/90 text-ink-navy font-bold px-2.5 py-1 rounded">
                      {activeMachine.badge}
                    </span>
                  </div>
                </div>
              )}

              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-[12px] uppercase tracking-[1px] bg-screed-blue/10 text-screed-blue px-3 py-1 rounded-[2px] font-bold">
                  {activeMachine.category}
                </span>
                <span className="font-mono text-[12px] bg-safety-amber/15 text-safety-amber px-3 py-1 rounded-[2px] font-bold">
                  {activeMachine.badge}
                </span>
              </div>

              <div>
                <h3 className="text-ink-navy text-[24px] md:text-[32px] font-display font-black leading-tight mb-2">
                  {activeMachine.name}
                </h3>
                <p className="text-screed-blue font-medium text-[16px]">
                  {activeMachine.tagline}
                </p>
              </div>

              <p className="text-graphite text-[16px] leading-relaxed">
                {activeMachine.description}
              </p>

              {/* Highlights Checklist */}
              <div className="pt-2">
                <h4 className="font-display font-bold text-[14px] uppercase tracking-[0.5px] text-ink-navy mb-3 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-safety-amber" />
                  Engineering Highlights
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeMachine.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-[14px] text-graphite">
                      <CheckCircle2 className="w-4 h-4 text-screed-blue shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Specs Table Card */}
            <div className="lg:col-span-6 bg-ink-navy text-slab-white p-6 md:p-8 rounded-[4px] space-y-5">
              <div className="flex items-center justify-between border-b border-slab-white/10 pb-4">
                <div className="flex items-center gap-2 font-display font-bold text-[16px]">
                  <Cpu className="w-5 h-5 text-safety-amber" />
                  <span>Technical Specifications</span>
                </div>
                <span className="font-mono text-[11px] text-slab-white/60 uppercase">
                  GCS Verified Fleet
                </span>
              </div>

              <div className="space-y-3.5">
                {activeMachine.specs.map((spec, idx) => (
                  <div key={idx} className="flex justify-between items-center text-[14px] border-b border-slab-white/5 pb-2.5">
                    <span className="text-slab-white/70 font-medium">{spec.label}</span>
                    <span className="font-mono font-bold text-safety-amber text-right">{spec.value}</span>
                  </div>
                ))}
              </div>

              <div className="bg-slab-white/5 p-4 rounded-[3px] border border-slab-white/10 mt-4 flex items-center gap-3">
                <Activity className="w-5 h-5 text-screed-blue shrink-0" />
                <p className="text-[13px] text-slab-white/80 leading-snug">
                  Maintained under rigorous preventive inspection routines to assure 100% operational uptime on your pour site.
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
