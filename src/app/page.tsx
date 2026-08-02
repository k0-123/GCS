"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { StatBlock } from "@/components/ui/StatBlock";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";
import { serviceOverview } from "@/lib/data/services";
import { galleryImages } from "@/lib/data/projects";
import { MockupHero } from "@/components/ui/MockupHero";
import { ProjectSlider } from "@/components/ui/ProjectSlider";
import { MachinerySlider } from "@/components/ui/MachinerySlider";
import { GalleryLightbox } from "@/components/ui/GalleryLightbox";
import { InfiniteMarquee } from "@/components/ui/InfiniteMarquee";
import {
  Shield,
  Ruler,
  Monitor,
  Zap,
  Bell,
  Layers,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";

/* ============================
   1. TRUSTED CLIENTS STRIP
   ============================ */
function TrustedClientsSection() {
  return (
    <section className="bg-[#F8FAFC] py-14 md:py-20 border-b border-slate-200 text-[#1E293B] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
        <ScrollReveal variant="fade-blur">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="h-[3px] w-8 bg-[#04509A] rounded-full" />
            <span className="font-mono text-[12px] font-bold uppercase text-[#04509A] tracking-[0.2em]">
              Our Trusted Clients
            </span>
            <div className="h-[3px] w-8 bg-[#04509A] rounded-full" />
          </div>

          <h2 className="font-display font-black text-[#1E293B] text-[24px] sm:text-[32px] lg:text-[38px] uppercase tracking-tight max-w-3xl mx-auto leading-tight">
            TRUSTED BY <span style={{ color: '#04509A' }}>INDUSTRY LEADERS</span> ACROSS INDIA
          </h2>
        </ScrollReveal>
      </div>

      <InfiniteMarquee />
    </section>
  );
}

/* ============================
   2. FEATURED PROJECTS SLIDER SECTION
   ============================ */
function FeaturedProjectsSection() {
  return (
    <section className="bg-[#F8FAFC] py-20 md:py-28 border-b border-slate-200" id="featured-projects">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="fade-up">
          <ProjectSlider />
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ============================
   3. ABOUT SNIPPET
   ============================ */
function AboutSnippet() {
  return (
    <section className="bg-white py-20 md:py-28 text-[#1E293B] border-b border-slate-200" id="about-snippet">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Story Area */}
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Our Heritage & Expertise"
              title="Jaipur's First Laser Screed Concrete Flooring Company"
              theme="light"
            />
            <ScrollReveal variant="fade-up" delay={0.2}>
              <p className="text-[#475569] text-[17px] leading-[1.7] mb-5 font-normal">
                Gangadhar Concrete Solution (GCS) was founded by young entrepreneur{" "}
                <strong className="text-[#04509A] font-bold">Manoj Choudhary</strong> with a single mission: bring international-standard, value-engineered concrete flooring solutions to India&apos;s industrial and warehousing sector.
              </p>
              <p className="text-[#475569] text-[17px] leading-[1.7] mb-5">
                We are among India&apos;s fastest-growing concrete flooring solution providers, working strictly to global benchmarks — the{" "}
                <strong className="text-[#04509A] font-bold">UK Concrete Society&apos;s TR34 (4th edition)</strong>, American <strong className="text-[#04509A] font-bold">ASTM E1155</strong>, and <strong className="text-[#04509A] font-bold">DIN codes</strong> — governing surface regularity for free-movement and defined-movement warehouse floors.
              </p>
              <p className="text-[#475569] text-[17px] leading-[1.7] mb-6">
                With continuous R&amp;D investment in Somero laser screeds, Husqvarna power trowels, and digital optical levellers, our trained engineers and technicians have delivered over{" "}
                <span className="font-bold text-[#04509A]">60,00,000+ sq. ft.</span> of high-precision industrial floor space across India.
              </p>

              {/* Quick Heritage Badges */}
              <div className="flex flex-wrap gap-3 mb-8 text-[12px] font-mono">
                <span className="bg-[#04509A]/10 text-[#04509A] px-3 py-1 rounded font-bold border border-[#04509A]/20">
                  Jaipur, Rajasthan Origin
                </span>
                <span className="bg-amber-500/10 text-amber-700 px-3 py-1 rounded font-bold border border-amber-500/20">
                  TR34 FM1 / FM2 / DM1 Certified
                </span>
                <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded font-bold border border-slate-200">
                  Turnkey Engineering
                </span>
              </div>

              <Button href="/about" variant="secondary" className="group border-[#04509A] text-[#04509A] hover:bg-[#04509A] hover:text-white">
                Read Our Full Company Story
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </ScrollReveal>
          </div>

          {/* Right Team Photo & Motto Box */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal variant="slide-right" delay={0.3}>
              <div className="relative h-72 sm:h-80 overflow-hidden rounded-2xl border-2 border-[#04509A] bg-[#0B2F4A] group shadow-xl">
                <img
                  src="/images/gcs_team_somero.jpg"
                  alt="GCS Founders & Engineers with Somero S-158C Laser Screed Machine"
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2F4A]/90 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <div className="bg-[#0B2F4A]/90 backdrop-blur-md px-3 py-1.5 text-[12px] font-mono text-white rounded-lg border border-white/20 font-bold">
                    GCS Team & Somero S-158C Machine
                  </div>
                  <span className="text-[11px] font-mono bg-amber-500 text-slate-900 font-black px-2.5 py-1 rounded">
                    Jaipur HQ
                  </span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="slide-right" delay={0.4}>
              <div className="border-l-[4px] border-[#04509A] bg-[#F8FAFC] p-6 md:p-8 rounded-r-2xl border-t border-b border-r border-slate-200 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display font-bold text-[#04509A] text-[15px] uppercase tracking-[0.5px]">
                    Our Motto
                  </h3>
                  <span className="text-[11px] font-mono text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 font-bold">
                    TR34 Standard
                  </span>
                </div>
                <p className="font-display text-[#1E293B] text-[20px] md:text-[22px] italic font-black leading-snug mb-3">
                  &ldquo;Your Floor, Our Expertise.&rdquo;
                </p>
                <p className="text-[#64748B] text-[14px] leading-[1.6]">
                  Dedicated to delivering high-precision FM1/FM2 and VNA-grade super-flat floors across India.
                </p>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ============================
   4. SERVICES OVERVIEW
   ============================ */
function ServicesOverview() {
  return (
    <section className="bg-[#F8FAFC] py-20 md:py-28 border-b border-slate-200" id="services-overview">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What We Do"
          title="Concrete Flooring Solutions, Engineered End-to-End"
          align="center"
          theme="light"
        />

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

        <ScrollReveal variant="fade-up" delay={0.3}>
          <div className="text-center mt-12">
            <Button href="/services" variant="secondary">
              View All Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ============================
   5. MACHINERY SLIDER SECTION
   ============================ */
function MachinerySection() {
  return (
    <section className="bg-white py-20 md:py-28 border-b border-slate-200" id="machinery">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="fade-up">
          <MachinerySlider />
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ============================
   6. WHY GCS — TRUST SECTION
   ============================ */
const trustPoints = [
  {
    icon: Shield,
    title: "Turnkey, Single-Source Responsibility",
    desc: "From inspection to design, engineering, detailing, construction, and certification, under one roof.",
  },
  {
    icon: Ruler,
    title: "International Standards",
    desc: "Floors designed and tested to TR34 (4th edition), ASTM E1155, and DIN codes.",
  },
  {
    icon: Monitor,
    title: "Latest Technology & Software",
    desc: "Modern flooring machinery operated by well-trained crews for accurate, repeatable results.",
  },
  {
    icon: Zap,
    title: "Speed Without Compromise",
    desc: "Planned execution that cuts project time and cost.",
  },
  {
    icon: Bell,
    title: "Live Project Updates",
    desc: "Clients stay informed on progress throughout the job.",
  },
  {
    icon: Layers,
    title: "Broad Service Range",
    desc: "A single contractor for every stage of the flooring lifecycle.",
  },
  {
    icon: HeartHandshake,
    title: "Pre- and Post-Service Support",
    desc: "The same attention to detail before, during, and after the project.",
  },
];

function WhyGCS() {
  return (
    <section className="bg-[#F8FAFC] py-20 md:py-28 text-[#1E293B] border-b border-slate-200" id="why-gcs">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="Why GCS"
              title="Why Clients Choose GCS"
              theme="light"
            />
            <ScrollReveal variant="fade-up" delay={0.2}>
              <div className="space-y-8">
                <StatBlock
                  value="60,00,000+"
                  label="sq. ft. of laser screed & densification flooring completed"
                  suffix=""
                  theme="light"
                />
                <StatBlock
                  value="16"
                  label="industrial and warehousing projects delivered pan-India"
                  suffix=""
                  theme="light"
                />
                <div className="flex gap-3 flex-wrap mt-4">
                  {["TR34", "ASTM E1155", "DIN"].map((badge) => (
                    <span
                      key={badge}
                      className="font-mono text-[12px] font-bold text-[#04509A] bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-8">
            <StaggerContainer className="space-y-0" staggerDelay={0.06} initialDelay={0.2}>
              {trustPoints.map((point) => (
                <StaggerItem key={point.title}>
                  <div className="flex items-start gap-4 py-4 border-b border-slate-200 last:border-b-0 group">
                    <div className="shrink-0 w-10 h-10 flex items-center justify-center bg-white border border-slate-200 rounded-xl group-hover:border-[#04509A] transition-colors shadow-sm">
                      <point.icon className="w-5 h-5 text-[#04509A]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-[#1E293B] text-[16px] mb-1">
                        {point.title}
                      </h4>
                      <p className="text-[#475569] text-[15px] leading-[1.5]">{point.desc}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ============================
   7. SITE GALLERY & LIGHTBOX MODAL
   ============================ */
function SiteGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-20 md:py-28 border-b border-slate-200" id="gallery">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="On-Site Evidence"
          title="Project Photography & Machinery in Action"
          description="Verified job site photography across India. Click any image to open full interactive slider."
          align="center"
          theme="light"
        />

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.06}>
          {galleryImages.map((img, i) => (
            <StaggerItem key={i}>
              <div
                onClick={() => setLightboxIndex(i)}
                className="group relative h-64 overflow-hidden rounded-2xl border-2 border-slate-200 bg-[#1E293B] shadow-md cursor-pointer hover:border-[#04509A] transition-colors"
              >
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B]/90 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-display font-bold text-white text-[14px]">
                    {img.title}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <GalleryLightbox
          images={galleryImages}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      </div>
    </section>
  );
}

/* ============================
   8. PROOF STRIP (STATS SECTION)
   ============================ */
function ProofStrip() {
  return (
    <section className="bg-ink-navy py-14 md:py-20 text-slab-white relative overflow-hidden border-t-2 border-safety-amber" id="proof-strip">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-screed-blue/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-safety-amber/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center md:text-left">
          
          <div className="space-y-1">
            <div className="h-[3px] w-10 bg-safety-amber rounded-full mb-3 mx-auto md:mx-0" />
            <div className="font-display font-black text-[32px] sm:text-[42px] lg:text-[48px] text-slab-white tracking-tight leading-none">
              60,00,000+
            </div>
            <p className="font-mono text-[13px] text-slab-white/70 uppercase tracking-[0.5px]">
              sq. ft. floor area delivered
            </p>
          </div>

          <div className="space-y-1">
            <div className="h-[3px] w-10 bg-screed-blue rounded-full mb-3 mx-auto md:mx-0" />
            <div className="font-display font-black text-[32px] sm:text-[42px] lg:text-[48px] text-slab-white tracking-tight leading-none">
              16+
            </div>
            <p className="font-mono text-[13px] text-slab-white/70 uppercase tracking-[0.5px]">
              completed industrial projects
            </p>
          </div>

          <div className="space-y-1">
            <div className="h-[3px] w-10 bg-safety-amber rounded-full mb-3 mx-auto md:mx-0" />
            <div className="font-display font-black text-[32px] sm:text-[42px] lg:text-[48px] text-slab-white tracking-tight leading-none">
              7+
            </div>
            <p className="font-mono text-[13px] text-slab-white/70 uppercase tracking-[0.5px]">
              industrial hubs served
            </p>
          </div>

          <div className="space-y-1">
            <div className="h-[3px] w-10 bg-screed-blue rounded-full mb-3 mx-auto md:mx-0" />
            <div className="font-display font-black text-[32px] sm:text-[42px] lg:text-[48px] text-safety-amber tracking-tight leading-none">
              3
            </div>
            <p className="font-mono text-[13px] text-slab-white/70 uppercase tracking-[0.5px]">
              global codes (TR34, ASTM, DIN)
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ============================
   9. FINAL CTA SECTION
   ============================ */
function FinalCTA() {
  return (
    <section className="bg-[#F8FAFC] py-20 md:py-28 text-[#1E293B] border-t border-slate-200" id="final-cta">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal variant="fade-blur">
          <span className="font-mono text-[12px] font-bold uppercase tracking-[1px] text-[#04509A] bg-[#04509A]/10 px-3.5 py-1.5 rounded-[2px] border border-[#04509A]/20 mb-4 inline-block">
            Engineering Consultation &amp; Site Assessment
          </span>

          <h2 className="font-display font-black text-[#1E293B] text-[30px] sm:text-[40px] lg:text-[46px] leading-[1.08] tracking-tight mb-5">
            Ready for a Floor Built to International Standards?
          </h2>

          <p className="text-[#475569] text-[16px] sm:text-[18px] leading-[1.65] max-w-2xl mx-auto mb-8 font-normal">
            Tell us about your site, load requirements, and timeline — our engineers will assess your sub-base, recommend the right floor classification (FM or DM grade), and give you a clear, practical plan.
          </p>

          {/* Key Engineering Highlights Chips */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8 text-[12px] font-mono text-slate-700">
            <span className="bg-white px-3.5 py-1.5 rounded-[3px] border border-slate-200 shadow-sm font-semibold">
              ✓ Up to 1,200 m²/day Pouring Speed
            </span>
            <span className="bg-white px-3.5 py-1.5 rounded-[3px] border border-slate-200 shadow-sm font-semibold text-[#04509A]">
              ✓ TR34 FM1 / FM2 Certified
            </span>
            <span className="bg-white px-3.5 py-1.5 rounded-[3px] border border-slate-200 shadow-sm font-semibold">
              ✓ Turnkey Single-Source Responsibility
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" size="lg" className="bg-[#04509A] hover:bg-[#003E99] text-white font-bold py-4 px-8 rounded-xl shadow-xl shadow-[#04509A]/25">
              Request a Free Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button href="tel:+919772586211" variant="secondary" size="lg" className="border-2 border-[#04509A] text-[#04509A] hover:bg-[#04509A] hover:text-white font-bold py-4 px-6 rounded-xl transition-all">
              Call Engineer: +91 9772586211
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ============================
   HOMEPAGE
   ============================ */
export default function HomePage() {
  return (
    <>
      <MockupHero />
      <AboutSnippet />
      <TrustedClientsSection />
      <FeaturedProjectsSection />
      <ServicesOverview />
      <MachinerySection />
      <WhyGCS />
      <SiteGallery />
      <ProofStrip />
      <FinalCTA />
    </>
  );
}
