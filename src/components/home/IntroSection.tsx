import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { companyConfig } from "@/data/companyConfig";
import { CheckCircle2, Sparkles, Building, Ruler, Users } from "lucide-react";

export const IntroSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#F7F5F8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image Collage / Asymmetric Grid */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] w-full max-w-lg mx-auto overflow-hidden shadow-luxury">
              <Image
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop"
                alt="Peace Jet Architectural Design & Craftsmanship"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#241333]/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur-md border-l-4 border-[#C6A04A]">
                <p className="font-serif text-sm font-semibold text-[#241333]">
                  &ldquo;A woman-led architectural vision where engineering integrity meets tactile, sensory luxury.&rdquo;
                </p>
                <span className="font-sans text-[11px] text-[#54228A] font-medium uppercase tracking-wider block mt-1">
                  Peace Jet Leadership Philosophy
                </span>
              </div>
            </div>

            {/* Overlapping Floating Element */}
            <div className="hidden sm:block absolute -bottom-8 -right-4 w-56 p-5 bg-[#54228A] text-white shadow-xl border-t-2 border-[#C6A04A]">
              <span className="font-serif text-3xl font-light text-[#E0BF72] block">
                100%
              </span>
              <span className="font-sans text-xs uppercase tracking-wider font-medium text-white/90 mt-1 block">
                Milestone-Based Accountability
              </span>
              <span className="font-sans text-[11px] text-white/70 block mt-1">
                Zero unverified capital disbursements.
              </span>
            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <SectionHeading
              eyebrow="Our Story &amp; Philosophy"
              title="Redefining African Construction Through Architectural Rigor"
              subtitle="Peace Jet Construction & Design was founded with a singular ambition: to elevate Nigerian building standards by replacing compromised workmanship and opaque budgeting with architectural refinement, structural permanence, and female-led thoroughness."
            />

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3.5 p-3.5 bg-white border border-[#241333]/5 shadow-sm">
                <div className="p-1.5 bg-[#54228A]/10 text-[#54228A] flex-shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4 text-[#54228A]" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-medium text-[#241333]">
                    Female-Owned Detail &amp; Spatial Sensitivity
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-[#241333]/70 mt-1 leading-relaxed">
                    We approach structural spaces not merely as concrete boxes, but as living, breathing environments crafted for human comfort, lighting nuances, and enduring beauty.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 bg-white border border-[#241333]/5 shadow-sm">
                <div className="p-1.5 bg-[#54228A]/10 text-[#54228A] flex-shrink-0 mt-0.5">
                  <Ruler className="w-4 h-4 text-[#54228A]" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-medium text-[#241333]">
                    Obsession with Finishing &amp; Shadow-Line Precision
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-[#241333]/70 mt-1 leading-relaxed">
                    Where typical builders stop at rough screeding, Peace Jet executes laser-level tile reveals, bespoke cabinetry, and moisture-sealed envelope protection tailored for Lagos coastal climates.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 bg-white border border-[#241333]/5 shadow-sm">
                <div className="p-1.5 bg-[#54228A]/10 text-[#54228A] flex-shrink-0 mt-0.5">
                  <Users className="w-4 h-4 text-[#54228A]" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-medium text-[#241333]">
                    Trusted Diaspora &amp; Corporate Partnership
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-[#241333]/70 mt-1 leading-relaxed">
                    Complete digital visibility with weekly video audits, drone surveys, and itemized accounting so clients in Lagos, London, New York, or Atlanta build with effortless confidence.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <Button href="/about" variant="primary" size="md" icon>
                Read Our Company Story
              </Button>
              <Button href="/services" variant="outline" size="md">
                Explore Core Services
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
