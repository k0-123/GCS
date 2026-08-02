import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { footerServices, contactInfo } from "@/lib/data/navigation";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="bg-ink-navy text-slab-white">
      {/* Amber top line */}
      <div className="h-[2px] bg-safety-amber" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Company */}
          <div>
            <div className="mb-4 bg-white/90 p-2.5 rounded-lg inline-block">
              <Logo showTagline={false} />
            </div>
            <p className="text-slab-white/60 text-[14px] leading-relaxed mb-4">
              Jaipur&apos;s first dedicated laser screed concrete flooring company — delivering
              FM1/FM2 and VNA-grade floors to TR34, ASTM E1155, and DIN standards.
            </p>
            <p className="font-display text-safety-amber text-[14px] italic mb-4">
              Your Floor, Our Expertise.
            </p>
            <a
              href="/GCS-Brochure.pdf"
              download="GCS-Brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-safety-amber hover:bg-safety-amber/90 text-ink-navy font-display font-bold text-[13px] rounded-[3px] shadow-md hover:shadow-lg transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Brochure (PDF)
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-[14px] uppercase tracking-[0.5px] mb-5 text-slab-white/80">
              Services
            </h4>
            <ul className="space-y-2.5">
              {footerServices.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-slab-white/60 text-[14px] hover:text-slab-white transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-[14px] uppercase tracking-[0.5px] mb-5 text-slab-white/80">
              Company
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/about" className="text-slab-white/60 text-[14px] hover:text-slab-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-slab-white/60 text-[14px] hover:text-slab-white transition-colors">
                  Our Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slab-white/60 text-[14px] hover:text-slab-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-[14px] uppercase tracking-[0.5px] mb-5 text-slab-white/80">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 mt-0.5 text-safety-amber shrink-0" strokeWidth={1.5} />
                <div className="text-[14px]">
                  {contactInfo.phone.map((p) => (
                    <a
                      key={p}
                      href={`tel:${p.replace(/\s/g, "")}`}
                      className="block text-slab-white/60 hover:text-slab-white transition-colors"
                    >
                      {p}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 mt-0.5 text-safety-amber shrink-0" strokeWidth={1.5} />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-slab-white/60 text-[14px] hover:text-slab-white transition-colors break-all"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 text-safety-amber shrink-0" strokeWidth={1.5} />
                <span className="text-slab-white/60 text-[14px]">{contactInfo.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-slab-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slab-white/40 text-[13px]">
            © {new Date().getFullYear()} Gangadhar Concrete Solution. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-[12px] font-mono text-slab-white/40">
            <span>GSTIN: {contactInfo.gstin}</span>
            <span className="hidden sm:block">UDYAM: {contactInfo.udyam}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
