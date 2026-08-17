"use client";

import { Button } from "@/components/ui/Button";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { DataTable } from "@/components/ui/DataTable";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { ArrowRight, ArrowLeft, CheckCircle2, Target, ShieldCheck, Cpu } from "lucide-react";
import Link from "next/link";
import type { Service } from "@/lib/data/services";
import { TR34ToleranceCalculator } from "@/components/services/TR34ToleranceCalculator";
import { JointMechanicsVisualizer } from "@/components/services/JointMechanicsVisualizer";
import { FloorROICalculator } from "@/components/services/FloorROICalculator";
import { ExecutionLifecycle } from "@/components/services/ExecutionLifecycle";

interface ServicePageClientProps {
  service: Service;
}

export default function ServicePageClient({ service }: ServicePageClientProps) {
  return (
    <>
      {/* ---- Hero ---- */}
      <section className="bg-ink-navy pt-28 pb-14 md:pt-40 md:pb-20 relative overflow-hidden text-slab-white">
        <div className="absolute top-0 right-0 w-96 h-96 bg-screed-blue/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <ScrollReveal variant="fade-blur">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-slab-white/50 text-[14px] hover:text-slab-white transition-colors mb-6 font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              All Services Hub
            </Link>

            {/* Spec chip */}
            <div>
              <span className="inline-block font-mono text-[13px] text-safety-amber bg-safety-amber/10 px-3.5 py-1 rounded-[2px] border border-safety-amber/20 mb-4 font-bold">
                {service.specChip}
              </span>
            </div>

            <h1 className="!text-white text-[32px] md:text-[52px] leading-[1.08] tracking-tight font-display font-black max-w-4xl">
              {service.pageHeading}
            </h1>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider from="navy" to="white" />

      {/* ---- Main Content ---- */}
      <section className="bg-slab-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Left: Description (2 cols) */}
            <div className="lg:col-span-2">
              <ScrollReveal variant="fade-up">
                <div className="space-y-5">
                  {service.description.map((para, i) => (
                    <p key={i} className="text-graphite text-[17px] leading-[1.7]">
                      {para}
                    </p>
                  ))}
                </div>

                {service.applicableFor && (
                  <div className="mt-8 bg-concrete-grey/50 border-l-[4px] border-screed-blue p-5 rounded-r-[3px]">
                    <p className="text-[14px] text-screed-blue font-bold uppercase tracking-[0.5px] mb-1">
                      Applicable Operations & Equipment
                    </p>
                    <p className="text-graphite text-[16px] leading-[1.6]">
                      {service.applicableFor}
                    </p>
                  </div>
                )}
              </ScrollReveal>

              {/* Additional sections (e.g., Armour Joint, Plate Dowel) */}
              {service.additionalSections?.map((section, i) => (
                <ScrollReveal key={i} variant="fade-up" delay={0.1 * (i + 1)}>
                  <div className="mt-10 pt-10 border-t border-concrete-grey">
                    <h3 className="font-display font-bold text-ink-navy text-[22px] md:text-[26px] mb-4">
                      {section.heading}
                    </h3>
                    {section.description.map((para, j) => (
                      <p key={j} className="text-graphite text-[16px] leading-[1.7] mb-4">
                        {para}
                      </p>
                    ))}
                    {section.advantages && (
                      <div className="mt-6">
                        <h4 className="font-display font-bold text-ink-navy text-[15px] uppercase tracking-[0.5px] mb-3">
                          Engineering Advantages
                        </h4>
                        <ul className="space-y-2.5">
                          {section.advantages.map((adv, k) => (
                            <li key={k} className="flex items-start gap-2.5 text-graphite text-[15px]">
                              <CheckCircle2 className="w-4.5 h-4.5 text-screed-blue shrink-0 mt-0.5" strokeWidth={1.75} />
                              <span>{adv}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {section.applications && (
                      <div className="mt-6">
                        <h4 className="font-display font-bold text-ink-navy text-[15px] uppercase tracking-[0.5px] mb-3">
                          Ideal Applications
                        </h4>
                        <ul className="space-y-2.5">
                          {section.applications.map((app, k) => (
                            <li key={k} className="flex items-start gap-2.5 text-graphite text-[15px]">
                              <Target className="w-4.5 h-4.5 text-safety-amber shrink-0 mt-0.5" strokeWidth={1.75} />
                              <span>{app}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Right sidebar (1 col) */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                {/* Standards Sign-off Box */}
                <ScrollReveal variant="slide-right" delay={0.15}>
                  <div className="bg-ink-navy text-slab-white p-6 rounded-[3px]">
                    <div className="flex items-center gap-2 text-safety-amber font-display font-bold text-[15px] uppercase tracking-[0.5px] mb-3">
                      <ShieldCheck className="w-5 h-5 text-safety-amber" />
                      <span>International Compliance</span>
                    </div>
                    <ul className="space-y-2 text-[13px] text-slab-white/80 font-mono">
                      <li>• TR34 4th Edition Code</li>
                      <li>• ASTM E 1155 Levelness</li>
                      <li>• DIN 18202 Precision</li>
                      <li>• EN 10025-2 Duraplate</li>
                    </ul>
                  </div>
                </ScrollReveal>

                {/* Key Benefits */}
                <ScrollReveal variant="slide-right" delay={0.25}>
                  <div className="bg-concrete-grey/40 p-6 rounded-[3px] border border-concrete-grey">
                    <h3 className="font-display font-bold text-ink-navy text-[15px] uppercase tracking-[0.5px] mb-4">
                      Key Benefits
                    </h3>
                    <ul className="space-y-3">
                      {service.keyBenefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-screed-blue shrink-0 mt-0.5" strokeWidth={1.5} />
                          <span className="text-graphite text-[14px] leading-[1.5]">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>

                {/* Ideal Applications */}
                <ScrollReveal variant="slide-right" delay={0.35}>
                  <div className="bg-concrete-grey/20 p-6 rounded-[3px] border border-concrete-grey">
                    <h3 className="font-display font-bold text-ink-navy text-[15px] uppercase tracking-[0.5px] mb-4">
                      Target Facilities
                    </h3>
                    <ul className="space-y-3">
                      {service.idealApplications.map((app, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <Target className="w-4 h-4 text-safety-amber shrink-0 mt-0.5" strokeWidth={1.5} />
                          <span className="text-graphite text-[14px] leading-[1.5]">{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>

                {/* CTA */}
                <ScrollReveal variant="fade-up" delay={0.45}>
                  <Button href={service.ctaHref} className="w-full justify-center">
                    {service.cta}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Contextual Components */}
      {service.slug === "laser-screed" && (
        <>
          <FloorROICalculator />
          <TR34ToleranceCalculator />
        </>
      )}

      {service.slug === "vna-flooring" && (
        <TR34ToleranceCalculator />
      )}

      {service.slug === "specialty-joints" && (
        <JointMechanicsVisualizer />
      )}

      {service.slug === "testing-certification" && (
        <>
          <TR34ToleranceCalculator />
          <ExecutionLifecycle />
        </>
      )}

      {/* ---- Data Tables ---- */}
      {service.tables && service.tables.length > 0 && (
        <>
          {service.tables.map((table, i) => (
            <DataTable
              key={i}
              title={table.title}
              headers={table.headers}
              rows={table.rows}
              className="mb-0"
            />
          ))}
        </>
      )}

      {/* ---- Comparison Table ---- */}
      {service.comparisonTable && (
        <DataTable
          title={service.comparisonTable.title}
          headers={service.comparisonTable.headers}
          rows={service.comparisonTable.rows}
          className="mb-0"
        />
      )}

      {/* ---- Bottom CTA ---- */}
      <section className="bg-slab-white py-16 md:py-24 border-t border-concrete-grey">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
          <ScrollReveal variant="fade-blur">
            <h2 className="font-display font-black text-ink-navy text-[28px] md:text-[40px] leading-[1.1] mb-5">
              Ready to Upgrade Your Floor Performance?
            </h2>
            <p className="text-graphite text-[17px] leading-[1.6] mb-8">
              Discuss your site requirements with Gangadhar Concrete Solution. Our engineers provide full site surveys, TR34 tolerance matching, and custom quote estimations.
            </p>
            <Button href="/contact" size="lg">
              Request a Free Engineering Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
