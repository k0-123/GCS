"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { contactInfo } from "@/lib/data/navigation";
import { Phone, Mail, MapPin, CheckCircle2, Clock, ShieldCheck } from "lucide-react";

export default function ContactPageClient() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    location: "",
    floorType: "Laser Screed (FM1/FM2)",
    area: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero Banner */}
      <section className="bg-ink-navy py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <ScrollReveal variant="fade-blur">
            <span className="font-display text-safety-amber text-[13px] md:text-[15px] uppercase tracking-[0.5px] font-bold mb-3 block">
              Contact Us
            </span>
            <h1 className="text-slab-white text-[36px] md:text-[56px] leading-[1.05] tracking-tight font-display font-black max-w-4xl">
              Let&apos;s Talk About Your Flooring Project
            </h1>
            <p className="mt-6 text-slab-white/70 text-[17px] leading-[1.6] max-w-3xl">
              Share a few details about your site and requirements, and our team will get back to you — including a site visit and plate bearing test where needed.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider from="navy" to="white" />

      {/* Form + Direct Contact Details */}
      <section className="bg-slab-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Contact Form (7 cols) */}
            <div className="lg:col-span-7">
              <ScrollReveal variant="fade-up">
                <div className="bg-slab-white border border-concrete-grey p-6 md:p-10 rounded-[2px]">
                  <h3 className="font-display font-bold text-ink-navy text-[22px] mb-2">
                    Send Us an Enquiry
                  </h3>
                  <p className="text-graphite text-[15px] mb-8">
                    Fill out the form below to receive a consultation from our engineering team.
                  </p>

                  {submitted ? (
                    <div className="bg-concrete-grey/50 border border-screed-blue p-8 rounded-[2px] text-center my-8">
                      <CheckCircle2 className="w-12 h-12 text-screed-blue mx-auto mb-4" strokeWidth={1.5} />
                      <h4 className="font-display font-bold text-ink-navy text-[20px] mb-2">
                        Enquiry Received
                      </h4>
                      <p className="text-graphite text-[15px] max-w-md mx-auto">
                        Thank you for reaching out. Our engineering team will review your project details and contact you shortly.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="mt-6 text-screed-blue text-[14px] font-medium underline hover:text-ink-navy"
                      >
                        Submit another enquiry
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-[14px] font-medium text-ink-navy mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="e.g. Rahul Sharma"
                            className="w-full px-4 py-3 bg-slab-white border border-concrete-grey focus:border-screed-blue rounded-[2px] text-[15px] text-graphite outline-none transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-[14px] font-medium text-ink-navy mb-2">
                            Company Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            placeholder="e.g. Logistics Infra Ltd"
                            className="w-full px-4 py-3 bg-slab-white border border-concrete-grey focus:border-screed-blue rounded-[2px] text-[15px] text-graphite outline-none transition-colors"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-[14px] font-medium text-ink-navy mb-2">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+91 98765 43210"
                            className="w-full px-4 py-3 bg-slab-white border border-concrete-grey focus:border-screed-blue rounded-[2px] text-[15px] text-graphite outline-none transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-[14px] font-medium text-ink-navy mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="rahul@example.com"
                            className="w-full px-4 py-3 bg-slab-white border border-concrete-grey focus:border-screed-blue rounded-[2px] text-[15px] text-graphite outline-none transition-colors"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-[14px] font-medium text-ink-navy mb-2">
                            Project Location
                          </label>
                          <input
                            type="text"
                            value={formData.location}
                            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                            placeholder="e.g. Jaipur, Rajasthan"
                            className="w-full px-4 py-3 bg-slab-white border border-concrete-grey focus:border-screed-blue rounded-[2px] text-[15px] text-graphite outline-none transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-[14px] font-medium text-ink-navy mb-2">
                            Floor Type Needed
                          </label>
                          <select
                            value={formData.floorType}
                            onChange={(e) => setFormData({ ...formData, floorType: e.target.value })}
                            className="w-full px-4 py-3 bg-slab-white border border-concrete-grey focus:border-screed-blue rounded-[2px] text-[15px] text-graphite outline-none transition-colors"
                          >
                            <option value="Laser Screed (FM1/FM2)">Laser Screed (FM1/FM2)</option>
                            <option value="VNA Flooring (DM1/DM2)">VNA Flooring (DM1/DM2)</option>
                            <option value="SFRC Flooring">SFRC Flooring</option>
                            <option value="Jointless Floors">Jointless Floors</option>
                            <option value="Concrete Polishing & Densification">Concrete Polishing & Densification</option>
                            <option value="Epoxy Flooring">Epoxy Flooring</option>
                            <option value="Testing & Certification">Testing & Certification</option>
                            <option value="Not Sure Yet">Not Sure Yet</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-[14px] font-medium text-ink-navy mb-2">
                          Approximate Floor Area (sq. ft.)
                        </label>
                        <input
                          type="text"
                          value={formData.area}
                          onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                          placeholder="e.g. 2,50,000 sq. ft."
                          className="w-full px-4 py-3 bg-slab-white border border-concrete-grey focus:border-screed-blue rounded-[2px] text-[15px] text-graphite outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-[14px] font-medium text-ink-navy mb-2">
                          Project Details / Message
                        </label>
                        <textarea
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Describe your site conditions, load requirements, and timeline..."
                          className="w-full px-4 py-3 bg-slab-white border border-concrete-grey focus:border-screed-blue rounded-[2px] text-[15px] text-graphite outline-none transition-colors"
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full sm:w-auto">
                        Send Enquiry
                      </Button>
                    </form>
                  )}
                </div>
              </ScrollReveal>
            </div>

            {/* Contact Details & Info (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <ScrollReveal variant="slide-right" delay={0.2}>
                <div className="bg-concrete-grey/50 border border-concrete-grey p-6 md:p-8 rounded-[2px]">
                  <h3 className="font-display font-bold text-ink-navy text-[18px] uppercase tracking-[0.5px] mb-6">
                    Direct Contact Info
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-slab-white border border-concrete-grey rounded-[2px] flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5 text-screed-blue" strokeWidth={1.5} />
                      </div>
                      <div>
                        <span className="text-[13px] font-medium text-graphite/60 uppercase tracking-wider block mb-1">
                          Phone Numbers
                        </span>
                        {contactInfo.phone.map((p) => (
                          <a
                            key={p}
                            href={`tel:${p.replace(/\s/g, "")}`}
                            className="block font-mono text-[15px] font-medium text-ink-navy hover:text-screed-blue transition-colors"
                          >
                            {p}
                          </a>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-slab-white border border-concrete-grey rounded-[2px] flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5 text-screed-blue" strokeWidth={1.5} />
                      </div>
                      <div>
                        <span className="text-[13px] font-medium text-graphite/60 uppercase tracking-wider block mb-1">
                          Email Address
                        </span>
                        <a
                          href={`mailto:${contactInfo.email}`}
                          className="font-mono text-[15px] font-medium text-ink-navy hover:text-screed-blue transition-colors break-all"
                        >
                          {contactInfo.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-slab-white border border-concrete-grey rounded-[2px] flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5 text-screed-blue" strokeWidth={1.5} />
                      </div>
                      <div>
                        <span className="text-[13px] font-medium text-graphite/60 uppercase tracking-wider block mb-1">
                          Office Address
                        </span>
                        <p className="text-[15px] text-graphite leading-relaxed">
                          {contactInfo.address}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-slab-white border border-concrete-grey rounded-[2px] flex items-center justify-center shrink-0">
                        <Clock className="w-5 h-5 text-screed-blue" strokeWidth={1.5} />
                      </div>
                      <div>
                        <span className="text-[13px] font-medium text-graphite/60 uppercase tracking-wider block mb-1">
                          Business Hours
                        </span>
                        <p className="text-[15px] text-graphite">
                          {contactInfo.hours}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Verified Business Specs */}
              <ScrollReveal variant="slide-right" delay={0.3}>
                <div className="bg-ink-navy p-6 md:p-8 rounded-[2px] text-slab-white">
                  <div className="flex items-center gap-2 mb-4">
                    <ShieldCheck className="w-5 h-5 text-safety-amber" strokeWidth={1.5} />
                    <h3 className="font-display font-bold text-[16px] uppercase tracking-[0.5px] text-slab-white">
                      Verified Registration
                    </h3>
                  </div>
                  <div className="space-y-3 font-mono text-[13px] text-slab-white/70">
                    <div className="flex justify-between border-b border-slab-white/10 pb-2">
                      <span>GSTIN:</span>
                      <span className="text-slab-white">{contactInfo.gstin}</span>
                    </div>
                    <div className="flex justify-between border-b border-slab-white/10 pb-2">
                      <span>UDYAM:</span>
                      <span className="text-slab-white">{contactInfo.udyam}</span>
                    </div>
                    <div className="flex justify-between pt-1">
                      <span>Primary Location:</span>
                      <span className="text-slab-white">Jaipur, Rajasthan</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider from="white" to="grey" />

      {/* Google Map Section */}
      <section className="bg-concrete-grey py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionHeading
            eyebrow="Our Location"
            title="Headquarters in Jaipur, Rajasthan"
            description="Serving clients across Rajasthan, Gujarat, and Pan-India."
            align="center"
          />
          <ScrollReveal variant="fade-up">
            <div className="w-full h-[400px] bg-slab-white border border-concrete-grey rounded-[2px] overflow-hidden relative shadow-sm">
              <iframe
                title="GCS Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.123456789!2d75.7872709!3d26.9124336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db4123456789%3A0x123456789abcdef!2s32A%2C%20Vijay%20Nagar%20D%2C%20Jaipur%2C%20Rajasthan%20302012!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
