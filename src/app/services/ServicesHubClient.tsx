"use client";

import { SectionDivider } from "@/components/ui/SectionDivider";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Button } from "@/components/ui/Button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";
import { serviceOverview } from "@/lib/data/services";
import { TR34ToleranceCalculator } from "@/components/services/TR34ToleranceCalculator";
import { MachineryFleetShowcase } from "@/components/services/MachineryFleetShowcase";
import { ExecutionLifecycle } from "@/components/services/ExecutionLifecycle";
import { JointMechanicsVisualizer } from "@/components/services/JointMechanicsVisualizer";
import { FloorROICalculator } from "@/components/services/FloorROICalculator";
import { Cpu, Activity, Award, ArrowRight, PhoneCall } from "lucide-react";

export default function ServicesHubClient() {
  return (
    <>
      {/* Compact & High-Impact Hero Banner */}
      <section className="bg-ink-navy pt-28 pb-14 md:pt-40 md:pb-20 relative overflow-hidden text-slab-white border-b border-screed-blue/30">
        {/* Background Ambient Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-screed-blue/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-safety-amber/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content Area (7 Cols) */}
            <div className="lg:col-span-7">
              <ScrollReveal variant="fade-blur">
                <span className="font-mono text-safety-amber text-[12px] md:text-[13px] uppercase tracking-[1px] font-bold bg-safety-amber/10 px-3.5 py-1.5 rounded-[2px] border border-safety-amber/20 mb-4 inline-block">
                  Jaipur&apos;s Pioneer in Concrete Screed Engineering
                </span>

                <h1 className="!text-white text-[32px] md:text-[46px] leading-[1.08] tracking-tight font-display font-black">
                  Precision Laser Screed & Flooring Services
                </h1>

                <p className="mt-4 text-slab-white/80 text-[15px] md:text-[17px] leading-[1.6]">
                  From wide-bay Somero laser screeding to super-flat VNA racking floors, GCS delivers complete end-to-end industrial flooring systems — engineered, tested, and certified to TR34 standards.
                </p>

                {/* Stat Badges */}
                <div className="mt-5 flex flex-wrap gap-2.5 text-[12px] font-mono text-slab-white/90">
                  <div className="flex items-center gap-2 bg-slab-white/10 px-3 py-1 rounded-[2px] border border-slab-white/15">
                    <Cpu className="w-3.5 h-3.5 text-safety-amber" />
                    <span>Somero S-158C Laser Tech</span>
                  </div>
                  <div className="flex items-center gap-2 bg-slab-white/10 px-3 py-1 rounded-[2px] border border-slab-white/15">
                    <Activity className="w-3.5 h-3.5 text-screed-blue" />
                    <span>1,200 m²/day Output</span>
                  </div>
                  <div className="flex items-center gap-2 bg-slab-white/10 px-3 py-1 rounded-[2px] border border-slab-white/15">
                    <Award className="w-3.5 h-3.5 text-safety-amber" />
                    <span>TR34 FM1 / DM1 Certified</span>
                  </div>
                </div>

                {/* Hero CTA Buttons */}
                <div className="mt-7 flex flex-wrap items-center gap-4">
                  <Button href="/contact" size="default" className="shadow-lg shadow-screed-blue/30">
                    Request Site Survey & Quote
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button href="tel:+919772586211" variant="secondary" size="default" className="border-2 border-slab-white/40 text-slab-white hover:bg-slab-white hover:text-ink-navy transition-all font-semibold">
                    <PhoneCall className="w-4 h-4 mr-2 text-safety-amber" />
                    Call Engineer: +91 9772586211
                  </Button>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Hero Image Card (5 Cols) */}
            <div className="lg:col-span-5">
              <ScrollReveal variant="slide-right" delay={0.2}>
                <div className="relative w-full h-64 md:h-80 rounded-[4px] overflow-hidden border-2 border-screed-blue/50 shadow-2xl shadow-ink-navy/50 bg-ink-navy group">
                  <img
                    src="/images/service_hero_banner.png"
                    alt="GCS Industrial Laser Screed Pouring"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-navy/90 via-ink-navy/20 to-transparent" />
                  
                  {/* Badge overlay on image */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div className="bg-ink-navy/90 backdrop-blur-md px-3 py-1.5 rounded-[2px] border border-slab-white/20 text-slab-white text-[12px] font-mono font-bold flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-safety-amber animate-pulse" />
                      Live Site Pouring Fleet
                    </div>
                    <span className="font-mono text-[11px] bg-screed-blue text-slab-white px-2.5 py-1 rounded font-bold uppercase">
                      TR34 Standard
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider from="navy" to="grey" />

      {/* Service Overview Grid Section */}
      <section id="service-grid" className="bg-concrete-grey py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-ink-navy text-[28px] md:text-[36px] font-display font-black">
              Comprehensive Flooring Services
            </h2>
            <p className="text-graphite text-[16px] mt-2">
              Select any flooring service below to view technical specifications, joint layouts, and engineering certifications.
            </p>
          </div>

          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            staggerDelay={0.08}
          >
            {serviceOverview.map((service) => (
              <StaggerItem key={service.slug}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  specChip={service.specChip}
                  image={service.image}
                  href={`/services/${service.slug}`}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Interactive TR34 Racking & Flatness Tolerance Calculator */}
      <TR34ToleranceCalculator />

      {/* Machinery & Technology Fleet Showcase */}
      <MachineryFleetShowcase />

      {/* 5-Phase Execution & Quality Control Lifecycle */}
      <ExecutionLifecycle />

      {/* Structural Joint Mechanics (Armour Joint & Plate Dowels) */}
      <JointMechanicsVisualizer />

      {/* Laser Screed Speed & ROI Calculator */}
      <FloorROICalculator />
    </>
  );
}
