import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { companyConfig } from "@/data/companyConfig";
import { Sparkles, Phone, Mail, ArrowRight } from "lucide-react";

export const CtaSection: React.FC = () => {
  return (
    <section className="relative py-24 sm:py-32 bg-[#241333] text-white overflow-hidden">
      {/* Background Architectural Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000&auto=format&fit=crop"
          alt="Peace Jet Construction & Design"
          fill
          className="object-cover object-center opacity-30 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#241333] via-[#241333]/90 to-[#241333]/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-[#C6A04A]/40 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#E0BF72]" />
            <span className="font-sans text-xs uppercase tracking-[0.2em] font-semibold text-[#E0BF72]">
              Lagos &bull; Nationwide &bull; International
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-white leading-tight">
            Transform Your Architectural Vision Into Reality.
          </h2>

          <p className="mt-6 text-base sm:text-lg text-neutral-300 font-sans font-light leading-relaxed">
            Partner with Peace Jet Construction &amp; Design for uncompromising structural engineering, bespoke interior architecture, and transparent milestone oversight.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Button href="/request-quote" variant="gold" size="lg" icon>
              Request a Project Quote
            </Button>
            <Button href="/contact" variant="outline" size="lg" className="border-white/40 text-white hover:text-white hover:bg-white/10">
              Schedule Consultation
            </Button>
          </div>

          <div className="mt-12 pt-8 border-t border-white/15 flex flex-col sm:flex-row items-start sm:items-center gap-6 text-xs font-sans text-neutral-300">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#C6A04A]" />
              <span>Direct Office: {companyConfig.contact.phone} &bull; {companyConfig.contact.secondaryPhone}</span>
            </div>
            {companyConfig.contact.email && (
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C6A04A]" />
                <span>Inquiries: {companyConfig.contact.inquiryEmail}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
