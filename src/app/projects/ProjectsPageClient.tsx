"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatBlock } from "@/components/ui/StatBlock";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";
import { projects, sectorLabels, type Project, galleryImages } from "@/lib/data/projects";
import { cn } from "@/lib/utils";
import { ArrowRight, MapPin, Maximize2, ShieldCheck, Award, Cpu } from "lucide-react";

type SectorFilter = "all" | Project["sector"];

export default function ProjectsPageClient() {
  const [filter, setFilter] = useState<SectorFilter>("all");

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.sector === filter);

  const sectors: SectorFilter[] = ["all", "energy", "manufacturing", "textiles", "automotive", "logistics", "chemicals", "pharma"];

  return (
    <>
      {/* ---- Hero Banner ---- */}
      <section className="bg-ink-navy pt-28 pb-14 md:pt-40 md:pb-20 relative overflow-hidden text-slab-white border-b border-screed-blue/30">
        {/* Background Ambient Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-screed-blue/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-safety-amber/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content Column (7 Cols) */}
            <div className="lg:col-span-7">
              <ScrollReveal variant="fade-blur">
                <span className="font-mono text-safety-amber text-[12px] md:text-[13px] uppercase tracking-[1px] font-bold bg-safety-amber/10 px-3.5 py-1.5 rounded-[2px] border border-safety-amber/20 mb-3 inline-block">
                  Proven Track Record Across India
                </span>

                <h1 className="!text-white text-[32px] md:text-[46px] leading-[1.08] tracking-tight font-display font-black">
                  Completed Industrial & Logistics Projects
                </h1>

                <p className="mt-4 text-slab-white/80 text-[15px] md:text-[17px] leading-[1.6]">
                  Over 60,00,000+ sq. ft. of precision laser screed, VNA super-flat, and densified concrete flooring delivered for leading industrial clients across Rajasthan, Gujarat, and pan-India.
                </p>

                {/* Stat Badges */}
                <div className="mt-5 flex flex-wrap gap-2.5 text-[12px] font-mono text-slab-white/90">
                  <div className="flex items-center gap-2 bg-slab-white/10 px-3 py-1 rounded-[2px] border border-slab-white/15">
                    <Maximize2 className="w-3.5 h-3.5 text-safety-amber" />
                    <span>60,00,000+ Sq. Ft. Delivered</span>
                  </div>
                  <div className="flex items-center gap-2 bg-slab-white/10 px-3 py-1 rounded-[2px] border border-slab-white/15">
                    <Award className="w-3.5 h-3.5 text-screed-blue" />
                    <span>16+ Major Industrial Slabs</span>
                  </div>
                  <div className="flex items-center gap-2 bg-slab-white/10 px-3 py-1 rounded-[2px] border border-slab-white/15">
                    <ShieldCheck className="w-3.5 h-3.5 text-safety-amber" />
                    <span>TR34 FM1 / DM1 Certified</span>
                  </div>
                </div>

                {/* Hero CTA Buttons */}
                <div className="mt-7 flex flex-wrap items-center gap-4">
                  <Button href="/contact" size="default" className="shadow-lg shadow-screed-blue/30">
                    Request Project Quote
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button href="tel:+919772586211" variant="secondary" size="default" className="border-2 border-slab-white/40 text-slab-white hover:bg-slab-white hover:text-ink-navy transition-all font-semibold">
                    Call Engineer: +91 9772586211
                  </Button>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Hero Image Card (5 Cols) */}
            <div className="lg:col-span-5">
              <ScrollReveal variant="slide-right" delay={0.2}>
                <div className="relative w-full h-64 md:h-80 rounded-[4px] overflow-hidden border-2 border-screed-blue/50 shadow-2xl bg-ink-navy group">
                  <img
                    src="/images/project_hero_banner.png"
                    alt="GCS Completed Superflat Warehouse Project"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-navy/90 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-slab-white text-[12px] font-mono">
                    <span className="bg-ink-navy/90 backdrop-blur-md px-3 py-1.5 rounded border border-slab-white/20 font-bold text-safety-amber">
                      Renew Power 1,000,000 Sq. Ft. Project
                    </span>
                    <span className="bg-screed-blue px-2.5 py-1 rounded font-bold uppercase">
                      TR34 FM1
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider from="navy" to="white" />

      {/* Stats Strip */}
      <section className="bg-slab-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <StatBlock value="60,00,000+" label="sq. ft. total area delivered" theme="light" />
            <StatBlock value="16+" label="completed major industrial projects" theme="light" />
            <StatBlock value="7+" label="states & industrial hubs across India" theme="light" />
          </div>
        </div>
      </section>

      <SectionDivider from="white" to="grey" />

      {/* Projects Cards Grid */}
      <section className="bg-concrete-grey py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="font-mono text-screed-blue text-[13px] uppercase tracking-[1px] bg-screed-blue/10 px-3.5 py-1 rounded-[2px] border border-screed-blue/20 font-semibold mb-2 inline-block">
                Project Directory
              </span>
              <h2 className="text-ink-navy text-[28px] md:text-[36px] font-display font-black">
                Verified Industrial Slabs
              </h2>
            </div>

            {/* Sector Filters */}
            <div className="flex flex-wrap gap-2">
              {sectors.map((s) => (
                <button
                  key={s}
                  onClick={() => setFilter(s)}
                  className={cn(
                    "px-3.5 py-1.5 text-[13px] font-display font-bold rounded-[2px] transition-all",
                    filter === s
                      ? "bg-ink-navy text-slab-white shadow"
                      : "bg-slab-white text-graphite border border-concrete-grey hover:bg-concrete-grey/60"
                  )}
                >
                  {s === "all" ? "All Sectors" : sectorLabels[s]}
                </button>
              ))}
            </div>
          </div>

          {/* Project Cards Grid with high-res photography */}
          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            staggerDelay={0.06}
            key={filter}
          >
            {filteredProjects.map((project, i) => (
              <StaggerItem key={`${project.client}-${i}`}>
                <div className="bg-slab-white border border-concrete-grey rounded-[3px] overflow-hidden hover:border-screed-blue transition-all duration-300 group flex flex-col justify-between h-full shadow-sm hover:shadow-md">
                  
                  {/* Project Image Header */}
                  <div className="relative h-48 w-full overflow-hidden bg-ink-navy">
                    <img
                      src={project.image}
                      alt={project.client}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-navy/70 via-transparent to-transparent opacity-80" />
                    <div className="absolute top-3 right-3 bg-ink-navy/90 backdrop-blur-sm px-2.5 py-1 text-[11px] font-mono text-safety-amber font-bold rounded-[2px] border border-slab-white/10">
                      {sectorLabels[project.sector]}
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-display font-bold text-ink-navy text-[18px] mb-3 leading-snug">
                        {project.client}
                      </h3>
                      <div className="flex items-center gap-2 text-graphite text-[14px] mb-2">
                        <MapPin className="w-4 h-4 text-screed-blue shrink-0" strokeWidth={1.5} />
                        <span>{project.location}</span>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-concrete-grey flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Maximize2 className="w-4 h-4 text-safety-amber shrink-0" strokeWidth={1.5} />
                        <span className="font-mono text-[14px] font-bold text-screed-blue">
                          {project.area}
                        </span>
                      </div>
                      <span className="font-mono text-[11px] bg-concrete-grey px-2 py-0.5 rounded text-graphite/80 font-bold">
                        TR34 Verified
                      </span>
                    </div>
                  </div>

                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {filteredProjects.length === 0 && (
            <p className="text-graphite text-center py-12">No projects in this sector yet.</p>
          )}
        </div>
      </section>

      <SectionDivider from="grey" to="white" />

      {/* Gallery Section */}
      <section className="bg-slab-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionHeading
            eyebrow="On-Site Evidence"
            title="Site Photography & Laser Screed Fleet"
            description="Verified photography from GCS industrial concrete flooring sites across India."
            align="center"
          />
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.06}>
            {galleryImages.map((img, i) => (
              <StaggerItem key={i}>
                <div className="group relative h-60 overflow-hidden rounded-[3px] border border-concrete-grey bg-ink-navy shadow-sm">
                  <img
                    src={img.url}
                    alt={img.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-navy/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="font-display font-bold text-slab-white text-[14px]">
                      {img.title}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-concrete-grey py-16 md:py-20 border-t border-concrete-grey">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
          <ScrollReveal variant="fade-blur">
            <h2 className="font-display font-black text-ink-navy text-[28px] md:text-[38px] leading-[1.1] mb-5">
              Discuss Your Flooring Requirements
            </h2>
            <p className="text-graphite text-[16px] md:text-[17px] leading-[1.6] mb-8">
              Share your site area, location, and equipment requirements — our engineers will provide TR34 tolerance recommendations and a custom quote.
            </p>
            <Button href="/contact" size="lg">
              Request a Project Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
