import React from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { companyConfig, hasValidWhatsApp } from "@/data/companyConfig";
import { getEnabledServices } from "@/data/servicesData";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Linkedin,
  ArrowRight,
  Shield,
  Sparkles,
} from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const enabledServices = getEnabledServices().slice(0, 7);
  const showWhatsApp = hasValidWhatsApp(companyConfig);
  const rawWhatsApp = companyConfig.contact.whatsapp.replace(/\D/g, "");

  return (
    <footer className="bg-[#241333] text-white pt-16 pb-12 border-t border-[#C6A04A]/30">
      {/* Upper Footer CTA Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 border-b border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#E0BF72] font-semibold flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              Turnkey Architectural &amp; Building Services
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal mt-2 tracking-tight">
              Ready to construct your vision with architectural elegance?
            </h3>
            <p className="font-sans text-white/70 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
              Whether building a luxury duplex in Ikoyi, modernizing a corporate suite in Victoria Island, or embarking on a custom residential build from the diaspora.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-start lg:justify-end">
            <Link
              href="/request-quote"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#C6A04A] text-[#241333] font-sans font-semibold text-xs uppercase tracking-wider hover:bg-[#E0BF72] transition-colors shadow-lg"
            >
              <span>Request Project Proposal</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-white/10 text-white font-sans font-medium text-xs uppercase tracking-wider hover:bg-white/20 transition-colors border border-white/20"
            >
              <span>Consultation Desk</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col">
            <Logo variant="light" />
            <p className="mt-5 text-sm text-white/70 font-sans leading-relaxed">
              {companyConfig.shortDescription}
            </p>

            <div className="mt-6 p-4 bg-white/5 border border-[#C6A04A]/30">
              <div className="flex items-center gap-2 text-xs font-serif font-medium text-[#E0BF72]">
                <Sparkles className="w-4 h-4 text-[#C6A04A]" />
                <span>{companyConfig.femaleOwnedBadge}</span>
              </div>
              <p className="mt-1 font-sans text-[11px] text-white/60">
                Pioneering uncompromising precision, transparent cost controls, and architectural permanence across Lagos and beyond.
              </p>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">
              {companyConfig.socialLinks.instagram && (
                <a
                  href={companyConfig.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Peace Jet on Instagram"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/80 hover:text-[#C6A04A] hover:bg-white/20 transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              )}
              {companyConfig.socialLinks.linkedin && (
                <a
                  href={companyConfig.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Peace Jet on LinkedIn"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/80 hover:text-[#C6A04A] hover:bg-white/20 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-sm tracking-[0.2em] uppercase text-[#E0BF72] font-semibold mb-5">
              Navigation
            </h4>
            <ul className="space-y-3 font-sans text-xs tracking-wider uppercase text-white/75">
              <li>
                <Link href="/" className="hover:text-[#C6A04A] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#C6A04A] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#C6A04A] transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-[#C6A04A] transition-colors">
                  Project Folio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#C6A04A] transition-colors">
                  Contact Office
                </Link>
              </li>
              <li>
                <Link href="/request-quote" className="hover:text-[#C6A04A] transition-colors text-[#E0BF72]">
                  Request a Quote
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-[#C6A04A] transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Services */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-sm tracking-[0.2em] uppercase text-[#E0BF72] font-semibold mb-5">
              Expertise
            </h4>
            <ul className="space-y-2.5 font-sans text-xs text-white/70">
              {enabledServices.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.id}`}
                    className="hover:text-white transition-colors block py-0.5"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-sm tracking-[0.2em] uppercase text-[#E0BF72] font-semibold mb-5">
              Lagos Office
            </h4>
            <div className="space-y-3.5 font-sans text-xs text-white/75 leading-relaxed">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C6A04A] flex-shrink-0 mt-0.5" />
                <span>
                  {companyConfig.location.city}, {companyConfig.location.state},{" "}
                  {companyConfig.location.country}
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#C6A04A] flex-shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <a
                    href={`tel:${companyConfig.contact.phone.replace(/\s+/g, '')}`}
                    className="hover:text-[#C6A04A] transition-colors"
                  >
                    {companyConfig.contact.phone}
                  </a>
                  <a
                    href={`tel:${companyConfig.contact.secondaryPhone.replace(/\s+/g, '')}`}
                    className="hover:text-[#C6A04A] transition-colors"
                  >
                    {companyConfig.contact.secondaryPhone}
                  </a>
                </div>
              </div>

              {companyConfig.contact.email && (
                <div className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-[#C6A04A] flex-shrink-0 mt-0.5" />
                  <a
                    href={`mailto:${companyConfig.contact.email}`}
                    className="hover:text-[#C6A04A] transition-colors break-all"
                  >
                    {companyConfig.contact.email}
                  </a>
                </div>
              )}

              <div className="flex items-start gap-2.5 pt-2">
                <Clock className="w-4 h-4 text-[#C6A04A] flex-shrink-0 mt-0.5" />
                <span className="text-[11px] text-white/60">
                  {companyConfig.contact.operatingHours}
                </span>
              </div>

              {showWhatsApp && (
                <div className="pt-2">
                  <a
                    href={`https://wa.me/${rawWhatsApp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/40 text-[11px] font-medium tracking-wide uppercase hover:bg-[#25D366] hover:text-white transition-colors"
                  >
                    <span>Connect on WhatsApp</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Concept Disclaimer & Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-white/10 text-white/50 text-[11px] font-sans">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p>
            &copy; {currentYear} {companyConfig.legalName}. All rights reserved. &ldquo;{companyConfig.tagline}&rdquo;
          </p>

          <div className="flex items-center gap-4 text-white/60">
            <Link href="/privacy-policy" className="hover:text-[#C6A04A] transition-colors">
              Privacy Policy
            </Link>
            <span>&bull;</span>
            <Link href="/request-quote" className="hover:text-[#C6A04A] transition-colors">
              Client Onboarding
            </Link>
            <span>&bull;</span>
            <span className="flex items-center gap-1 text-[#E0BF72]">
              <Shield className="w-3 h-3" />
              Verified Architecture Folio
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
