import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { companyConfig } from "@/data/companyConfig";
import { Sparkles, MapPin, ArrowRight, ShieldCheck, Award } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center bg-[#241333] text-white overflow-hidden">
      {/* Background Architectural Imagery with Editorial Treatment */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=85&w=2200&auto=format&fit=crop"
          alt="Peace Jet Luxury Architecture & Construction"
          fill
          priority
          className="object-cover object-center scale-105 animate-subtleZoom opacity-40 mix-blend-luminosity"
        />
        {/* Editorial Gradients & Brand Color Washes */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#241333] via-[#241333]/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#241333] via-transparent to-[#241333]/60" />
        {/* Subtle royal purple geometric overlay */}
        <div className="absolute inset-0 bg-[#54228A]/25 mix-blend-multiply" />
      </div>

      {/* Hero Architectural Grid Overlay Lines */}
      <div className="absolute inset-0 pointer-events-none z-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 hidden lg:block">
        <div className="h-full w-full border-x border-white/5 grid grid-cols-4 divide-x divide-white/5" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 w-full">
        <div className="max-w-3xl">
          {/* Female-Owned Architectural Excellence Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 backdrop-blur-md border border-[#C6A04A]/40 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#E0BF72]" />
            <span className="font-sans text-xs uppercase tracking-[0.2em] font-semibold text-[#E0BF72]">
              {companyConfig.femaleOwnedBadge} &bull; Lagos, Nigeria
            </span>
          </div>

          {/* Main Headline from Brief */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white leading-[1.08]">
            Building Your Vision. <br />
            <span className="font-normal italic text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E0BF72] to-[#C6A04A]">
              Creating Lasting Value.
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="mt-6 text-base sm:text-xl text-neutral-200 font-sans font-light leading-relaxed max-w-2xl">
            A premier Nigerian construction and interior design firm specializing in luxury residential builds, corporate commercial spaces, modern architectural planning, and transformative interior architecture across Lagos and nationwide.
          </p>

          {/* Action CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Button href="/request-quote" variant="gold" size="lg" icon>
              Start Your Project
            </Button>
            <Button href="/projects" variant="outline" size="lg" className="border-white/40 text-white hover:text-white hover:bg-white/10">
              Explore Our Work
            </Button>
          </div>

          {/* Trust Matrix Bar */}
          <div className="mt-16 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-3 gap-6 text-white/90">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-[#C6A04A]/40 flex items-center justify-center flex-shrink-0 text-[#C6A04A]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="font-serif text-sm font-semibold tracking-wide block">
                  Turnkey Reliability
                </span>
                <span className="text-[11px] text-neutral-300 font-sans">
                  From Blueprint to Handover
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-[#C6A04A]/40 flex items-center justify-center flex-shrink-0 text-[#C6A04A]">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <span className="font-serif text-sm font-semibold tracking-wide block">
                  Obsessive Finishing
                </span>
                <span className="text-[11px] text-neutral-300 font-sans">
                  Zero-Defect Standards
                </span>
              </div>
            </div>

            <div className="col-span-2 sm:col-span-1 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-[#C6A04A]/40 flex items-center justify-center flex-shrink-0 text-[#C6A04A]">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="font-serif text-sm font-semibold tracking-wide block">
                  Lagos &amp; Diaspora
                </span>
                <span className="text-[11px] text-neutral-300 font-sans">
                  Transparent Digital Tracking
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
