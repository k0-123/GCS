"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { jointSystemSpecs } from "@/lib/data/services";
import { ShieldCheck, CheckCircle2, Target, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function JointMechanicsVisualizer() {
  const [selectedJointId, setSelectedJointId] = useState<string>("armour-joint");

  const currentJoint = jointSystemSpecs.find((j) => j.id === selectedJointId) || jointSystemSpecs[0];

  return (
    <section className="bg-concrete-grey/30 py-16 md:py-24 border-t border-concrete-grey">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-mono text-screed-blue text-[13px] uppercase tracking-[1px] bg-screed-blue/10 px-3.5 py-1 rounded-[2px] border border-screed-blue/20 mb-3 inline-block font-semibold">
            Structural Load Transfer Systems
          </span>
          <h2 className="text-ink-navy text-[28px] md:text-[40px] font-display font-black leading-tight">
            Armour Joints & Plate Dowel Systems
          </h2>
          <p className="mt-4 text-graphite text-[16px] md:text-[17px] leading-relaxed">
            Even the most precise concrete slab is only as durable as its construction joints. Discover how GCS engineered joint protection systems prevent spalling, transfer heavy MHE loads, and eliminate differential deflection.
          </p>
        </div>

        {/* Tabs Switcher */}
        <div className="flex justify-center gap-3 mb-10">
          {jointSystemSpecs.map((joint) => {
            const isActive = joint.id === selectedJointId;
            return (
              <button
                key={joint.id}
                onClick={() => setSelectedJointId(joint.id)}
                className={`px-6 py-4 rounded-[3px] font-display text-[15px] font-bold transition-all duration-200 flex items-center gap-2.5 ${
                  isActive
                    ? "bg-screed-blue text-slab-white shadow-md shadow-screed-blue/20 scale-[1.02]"
                    : "bg-slab-white text-graphite hover:bg-concrete-grey border border-concrete-grey"
                }`}
              >
                <ShieldCheck className={`w-5 h-5 ${isActive ? "text-safety-amber" : "text-screed-blue"}`} />
                <span>{joint.title}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Display Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentJoint.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="bg-slab-white border border-concrete-grey rounded-[4px] p-6 md:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          >
            {/* Left Column: Specifications & Mechanics */}
            <div className="lg:col-span-7 space-y-6">
              <div className="relative w-full h-52 md:h-60 rounded-[3px] overflow-hidden border border-concrete-grey bg-ink-navy shadow-inner">
                <img
                  src="/images/armour_joint_dowel.webp"
                  alt={currentJoint.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-navy/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 flex items-center gap-2 font-mono text-[12px] text-slab-white">
                  <span className="bg-screed-blue px-2.5 py-1 rounded font-bold">
                    Technical Joint Specification
                  </span>
                  <span className="bg-ink-navy/80 backdrop-blur-md px-2.5 py-1 rounded border border-slab-white/10">
                    EN 10277 / EN 10025-2
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-[12px] uppercase tracking-[1px] bg-screed-blue/10 text-screed-blue px-3 py-1 rounded-[2px] font-bold">
                  {currentJoint.standard}
                </span>
              </div>

              <div>
                <h3 className="text-ink-navy text-[24px] md:text-[32px] font-display font-black leading-tight mb-2">
                  {currentJoint.title}
                </h3>
                <p className="text-screed-blue font-medium text-[15px]">
                  Material Specification: {currentJoint.material}
                </p>
              </div>

              <p className="text-graphite text-[16px] leading-relaxed">
                {currentJoint.description}
              </p>

              {/* Working Mechanism */}
              <div className="bg-concrete-grey/40 border-l-4 border-safety-amber p-4 rounded-r-[3px]">
                <h4 className="font-display font-bold text-[14px] uppercase tracking-[0.5px] text-ink-navy mb-1">
                  How It Works
                </h4>
                <p className="text-[15px] text-graphite leading-relaxed">
                  {currentJoint.mechanism}
                </p>
              </div>

              {/* Advantages List */}
              <div className="pt-2">
                <h4 className="font-display font-bold text-[14px] uppercase tracking-[0.5px] text-ink-navy mb-3">
                  Key Structural Advantages
                </h4>
                <ul className="space-y-2.5">
                  {currentJoint.advantages.map((adv, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-[15px] text-graphite">
                      <CheckCircle2 className="w-4.5 h-4.5 text-screed-blue shrink-0 mt-0.5" />
                      <span>{adv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Applications & CTA Box */}
            <div className="lg:col-span-5 bg-ink-navy text-slab-white p-6 md:p-8 rounded-[4px] space-y-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 font-display font-bold text-[16px] text-safety-amber mb-4 border-b border-slab-white/10 pb-3">
                  <Target className="w-5 h-5 text-safety-amber" />
                  <span>Ideal Applications</span>
                </div>

                <div className="space-y-2.5">
                  {currentJoint.applications.map((app, idx) => (
                    <div key={idx} className="bg-slab-white/5 p-3 rounded-[3px] border border-slab-white/10 flex items-center gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-safety-amber shrink-0" />
                      <span className="text-[14px] text-slab-white/80 font-medium">{app}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slab-white/10 space-y-3">
                <div className="text-[13px] text-slab-white/60">
                  Need custom joint layout engineering for your facility?
                </div>
                <Button href="/contact?service=specialty-joints" className="w-full justify-center">
                  Consult Engineering Team
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
