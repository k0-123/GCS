"use client";

import { Button } from "@/components/ui/Button";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatBlock } from "@/components/ui/StatBlock";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/ScrollReveal";
import { HorizontalApproachStepper } from "@/components/about/HorizontalApproachStepper";
import {
  ArrowRight,
  Award,
  Target,
  Crosshair,
  Eye,
  Users,
  HardHat,
  Beaker,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Clock,
} from "lucide-react";

const valuePillars = [
  {
    icon: Award,
    title: "Turnkey Single-Source Responsibility",
    desc: "Complete project management from initial level survey, sub-base design, formwork, pouring, finishing, to TR34 certification.",
  },
  {
    icon: Zap,
    title: "International Standards (TR34, ASTM, DIN)",
    desc: "Strict compliance with UK TR34 4th Edition, ASTM E1155, and DIN 18202 tolerances for free & defined movement floors.",
  },
  {
    icon: Beaker,
    title: "Latest Technology & Machinery",
    desc: "Continuous investment in Somero S-158C laser screeds, Husqvarna CRT36 ride-on trowels, and digital optical levellers.",
  },
  {
    icon: Clock,
    title: "Speedy Execution & Cost Efficiency",
    desc: "Pouring up to 1,200 m²/day, drastically cutting project completion time and long-term MHE maintenance costs.",
  },
  {
    icon: Eye,
    title: "Live Project Updates & Transparency",
    desc: "Real-time client progress updates, transparent slump testing, and daily quality audit reports.",
  },
  {
    icon: Users,
    title: "Dedicated & Well-Trained Technicians",
    desc: "Experienced site engineers and certified operators focused on achieving millimeter-level precision.",
  },
];

export default function AboutPageClient() {
  return (
    <>
      {/* ---- Hero Banner ---- */}
      <section className="bg-ink-navy pt-28 pb-14 md:pt-40 md:pb-20 relative overflow-hidden text-slab-white border-b border-screed-blue/30">
        {/* Ambient Glow Effects */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-screed-blue/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-safety-amber/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7">
              <ScrollReveal variant="fade-blur">
                <span className="font-mono text-safety-amber text-[12px] md:text-[13px] uppercase tracking-[1px] font-bold bg-safety-amber/10 px-3.5 py-1.5 rounded-[2px] border border-safety-amber/20 mb-3 inline-block">
                  About Gangadhar Concrete Solution
                </span>

                <h1 className="!text-white text-[32px] md:text-[46px] leading-[1.08] tracking-tight font-display font-black">
                  Jaipur&apos;s First Laser Screed Concrete Flooring Pioneer
                </h1>

                <p className="mt-4 text-slab-white/80 text-[15px] md:text-[17px] leading-[1.6]">
                  Founded to bring international-grade precision, TR34 standard flatness, and value-engineered concrete flooring solutions across India&apos;s industrial and warehousing sectors.
                </p>

                {/* Hero CTA Buttons */}
                <div className="mt-7 flex flex-wrap items-center gap-4">
                  <Button href="/services" size="default" className="shadow-lg shadow-screed-blue/30">
                    Explore Flooring Services
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button href="/contact" variant="secondary" size="default" className="border-2 border-slab-white/40 text-slab-white hover:bg-slab-white hover:text-ink-navy transition-all font-semibold">
                    Contact Engineering Team
                  </Button>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Hero Image Frame */}
            <div className="lg:col-span-5">
              <ScrollReveal variant="slide-right" delay={0.2}>
                <div className="relative w-full h-64 md:h-80 rounded-[4px] overflow-hidden border-2 border-screed-blue/50 shadow-2xl bg-ink-navy group">
                  <img
                    src="/images/about_hero_banner.png"
                    alt="Gangadhar Concrete Solution Engineering Team"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-navy/90 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <span className="font-mono text-[12px] bg-ink-navy/90 text-safety-amber px-3 py-1 rounded border border-slab-white/10 font-bold">
                      TR34 / ASTM / DIN Certified
                    </span>
                    <span className="font-mono text-[11px] bg-screed-blue text-slab-white px-2.5 py-1 rounded font-bold uppercase">
                      GCS Engineering
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider from="navy" to="white" />

      {/* ---- Our Story & Real Team Photo ---- */}
      <section className="bg-slab-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left Story Text */}
            <div className="lg:col-span-6 space-y-5">
              <ScrollReveal variant="fade-up">
                <span className="font-mono text-screed-blue text-[13px] uppercase tracking-[1px] bg-screed-blue/10 px-3.5 py-1 rounded-[2px] border border-screed-blue/20 font-semibold mb-2 inline-block">
                  Company Heritage
                </span>
                <h2 className="text-ink-navy text-[28px] md:text-[38px] font-display font-black leading-tight">
                  Engineered Excellence from Jaipur to Pan-India
                </h2>
                <p className="text-graphite text-[16px] md:text-[17px] leading-[1.7]">
                  Gangadhar Concrete Solution was founded by <strong className="text-ink-navy font-semibold">Manoj Choudhary</strong>, a young entrepreneur determined to bring a higher level of professionalism and quality standards to concrete flooring in Rajasthan and across India.
                </p>
                <p className="text-graphite text-[16px] md:text-[17px] leading-[1.7]">
                  We operate in strict accordance with international codes — the <strong className="text-ink-navy font-semibold">TR34 (4th edition)</strong> from the UK Concrete Society, <strong className="text-ink-navy font-semibold">American ASTM E1155</strong>, and <strong className="text-ink-navy font-semibold">DIN codes</strong> — which govern surface regularity for free-movement and defined-movement warehouse floors.
                </p>
                <p className="text-graphite text-[16px] md:text-[17px] leading-[1.7]">
                  Supported by experienced engineers and qualified technicians, GCS utilizes state-of-the-art Somero laser screeds and Husqvarna power trowels to deliver high-performance slabs for industrial plants, distribution centres, and logistics hubs.
                </p>
              </ScrollReveal>
            </div>

            {/* Right Team Photo Card */}
            <div className="lg:col-span-6 space-y-6">
              <ScrollReveal variant="slide-right" delay={0.2}>
                <div className="relative w-full rounded-[4px] overflow-hidden border border-concrete-grey shadow-lg bg-ink-navy group">
                  <img
                    src="/images/gcs_team_somero.jpg"
                    alt="GCS Founders & Team with Somero S-158C Machine"
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-102"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-navy/90 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-4 right-4 text-slab-white">
                    <div className="font-display font-bold text-[16px] text-safety-amber">
                      GCS Leadership Team & Somero S-158C
                    </div>
                    <div className="text-[13px] text-slab-white/80 font-mono">
                      Manoj Choudhary (Founder) & Kailash Pali with Site Engineers
                    </div>
                  </div>
                </div>

                {/* Featured Project Banner & Stats */}
                <div className="bg-concrete-grey/40 border-l-4 border-screed-blue p-5 rounded-r-[3px] mt-4">
                  <div className="text-[13px] font-mono text-screed-blue font-bold uppercase tracking-[0.5px] mb-1">
                    Featured Project Milestone
                  </div>
                  <p className="text-[14px] text-graphite leading-relaxed">
                    Completed a <strong className="text-ink-navy">10,00,000 sq. ft.</strong> laser screed & densification project for <strong className="text-ink-navy">Renew Power, Dholera (Ahmedabad)</strong>.
                  </p>
                </div>

                {/* Deliverables Stat Blocks */}
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <StatBlock value="60,00,000+" label="sq. ft. delivered" theme="light" />
                  <StatBlock value="16+" label="major projects completed" theme="light" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider from="white" to="grey" />

      {/* ---- Vision, Mission & Motto ---- */}
      <section className="bg-concrete-grey py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionHeading
            eyebrow="Core Philosophy"
            title="Vision, Mission & Motto"
            align="center"
          />
          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            staggerDelay={0.1}
          >
            <StaggerItem>
              <div className="bg-slab-white border border-concrete-grey p-6 md:p-8 rounded-[4px] h-full shadow-sm hover:border-screed-blue transition-colors">
                <Target className="w-8 h-8 text-screed-blue mb-4" strokeWidth={1.5} />
                <h3 className="font-display font-bold text-ink-navy text-[18px] uppercase tracking-[0.5px] mb-3">
                  Our Vision
                </h3>
                <p className="text-graphite text-[15px] leading-[1.6]">
                  To go beyond client expectations by providing value-engineered concrete floors every time — building long-term, trusted partnerships across India&apos;s construction ecosystem.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-slab-white border border-concrete-grey p-6 md:p-8 rounded-[4px] h-full shadow-sm hover:border-screed-blue transition-colors">
                <ShieldCheck className="w-8 h-8 text-screed-blue mb-4" strokeWidth={1.5} />
                <h3 className="font-display font-bold text-ink-navy text-[18px] uppercase tracking-[0.5px] mb-3">
                  Our Mission
                </h3>
                <p className="text-graphite text-[15px] leading-[1.6]">
                  To become pan-India&apos;s most reliable concrete flooring company by delivering high-precision TR34 compliant floors safely, on time, and on budget.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-ink-navy text-slab-white p-6 md:p-8 rounded-[4px] h-full flex flex-col justify-between border border-slab-white/10 shadow-md">
                <div>
                  <h3 className="font-display font-bold text-slab-white/60 text-[14px] uppercase tracking-[1px] mb-4">
                    Our Motto
                  </h3>
                  <p className="font-display text-safety-amber text-[26px] md:text-[30px] font-black italic leading-tight">
                    &ldquo;Your Floor, Our Expertise.&rdquo;
                  </p>
                </div>
                <div className="pt-4 border-t border-slab-white/10 text-[13px] text-slab-white/70 font-mono">
                  GCS Engineering Commitment
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* ---- Horizontal Interactive Stepper ("Our Approach") ---- */}
      <HorizontalApproachStepper />

      {/* ---- Value Pillars & Why Choose Us ---- */}
      <section className="bg-slab-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionHeading
            eyebrow="Why Choose GCS"
            title="Our Turnkey Value Pillars"
          />
          <StaggerContainer
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            staggerDelay={0.08}
          >
            {valuePillars.map((v) => (
              <StaggerItem key={v.title}>
                <div className="flex items-start gap-4 p-6 bg-concrete-grey/30 rounded-[3px] border border-transparent hover:border-screed-blue/30 transition-all duration-200">
                  <v.icon className="w-6 h-6 text-screed-blue shrink-0 mt-0.5" strokeWidth={1.75} />
                  <div>
                    <h4 className="font-display font-bold text-ink-navy text-[16px] mb-1.5">
                      {v.title}
                    </h4>
                    <p className="text-graphite text-[14px] leading-[1.6]">{v.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ---- Bottom CTA ---- */}
      <section className="bg-concrete-grey py-16 md:py-20 border-t border-concrete-grey">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
          <ScrollReveal variant="fade-blur">
            <h2 className="font-display font-black text-ink-navy text-[28px] md:text-[38px] leading-[1.1] mb-4">
              Partner with Jaipur&apos;s Flooring Experts
            </h2>
            <p className="text-graphite text-[16px] md:text-[17px] leading-[1.6] mb-8">
              Reach out to our engineering team to discuss site surveys, TR34 floor specifications, or quote estimates for your facility.
            </p>
            <Button href="/contact" size="lg">
              Contact Engineering Team
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
