import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { getEnabledServices } from "@/data/servicesData";
import {
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Shield,
  Layers,
  Building,
  Home,
  Check,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Building Services & Architectural Capabilities | Peace Jet Lagos",
  description:
    "Explore Peace Jet's 13 turnkey construction and design services: luxury residential builds, commercial offices, architectural planning, interior design, custom joinery, and site supervision.",
};

export default function ServicesPage() {
  const services = getEnabledServices();

  return (
    <div className="bg-white">
      {/* Editorial Header */}
      <section className="relative py-24 sm:py-32 bg-[#241333] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop"
            alt="Peace Jet Building Capabilities"
            fill
            priority
            className="object-cover opacity-25 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#241333] via-[#241333]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 backdrop-blur-md border border-[#C6A04A]/40 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#E0BF72]" />
              <span className="font-sans text-xs uppercase tracking-[0.2em] font-semibold text-[#E0BF72]">
                End-To-End Architectural &amp; Building Solutions
              </span>
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl font-light tracking-tight text-white leading-tight">
              Turnkey Excellence Across the Entire Project Lifecycle.
            </h1>
            <p className="mt-6 text-base sm:text-xl text-neutral-300 font-sans font-light leading-relaxed">
              We integrate civil engineering, bespoke interior architecture, high-spec finishing, and site coordination into a unified, single-point delivery model.
            </p>
          </div>
        </div>
      </section>

      {/* Services Jump Navigation */}
      <section className="py-6 bg-[#F7F5F8] border-b border-[#241333]/10 sticky top-[73px] z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <span className="font-sans text-xs font-semibold uppercase tracking-wider text-[#54228A] flex-shrink-0 mr-2">
              Services Quick Jump:
            </span>
            {services.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="px-3 py-1.5 bg-white border border-[#241333]/10 text-[11px] font-sans font-medium text-[#241333] whitespace-nowrap hover:bg-[#54228A] hover:text-white transition-colors"
              >
                {service.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services Listing */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;

            return (
              <article
                key={service.id}
                id={service.id}
                className="scroll-mt-32 pt-8 border-t border-[#241333]/10 first:border-t-0 first:pt-0"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Image Column */}
                  <div className={`lg:col-span-6 ${isEven ? "" : "lg:order-2"}`}>
                    <div className="relative aspect-[16/11] overflow-hidden shadow-luxury bg-neutral-900 group">
                      <Image
                        src={service.imageUrl}
                        alt={service.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-sans">
                        <span className="px-3 py-1 bg-white/90 text-[#241333] font-semibold uppercase text-[10px] tracking-wider">
                          Service Code: PJ-0{index + 1}
                        </span>
                        <span className="text-[#E0BF72] tracking-wider uppercase">
                          {service.category} Division
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className={`lg:col-span-6 ${isEven ? "" : "lg:order-1"}`}>
                    <div className="inline-flex items-center gap-2 mb-3">
                      <span className="w-6 h-[1.5px] bg-[#C6A04A]" />
                      <span className="font-mono text-xs text-[#C6A04A] font-semibold tracking-widest uppercase">
                        Division 0{index + 1} &bull; {service.category}
                      </span>
                    </div>

                    <h2 className="font-serif text-2xl sm:text-4xl font-medium text-[#241333] leading-tight">
                      {service.title}
                    </h2>

                    <p className="font-sans text-sm sm:text-base text-[#241333]/75 mt-4 leading-relaxed">
                      {service.fullDescription}
                    </p>

                    {/* Features and Deliverables Grid */}
                    <div className="mt-6 pt-6 border-t border-[#241333]/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-serif text-xs uppercase tracking-wider font-semibold text-[#54228A] mb-2.5">
                          Key Capabilities
                        </h4>
                        <ul className="space-y-2">
                          {service.features.map((feat, i) => (
                            <li
                              key={i}
                              className="text-xs font-sans text-[#241333]/80 flex items-start gap-2"
                            >
                              <Check className="w-3.5 h-3.5 text-[#C6A04A] flex-shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-serif text-xs uppercase tracking-wider font-semibold text-[#54228A] mb-2.5">
                          Standard Deliverables
                        </h4>
                        <ul className="space-y-2">
                          {service.deliverables.map((deliv, i) => (
                            <li
                              key={i}
                              className="text-xs font-sans text-[#241333]/80 flex items-start gap-2"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#54228A] flex-shrink-0 mt-0.5" />
                              <span>{deliv}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="mt-8 flex flex-wrap items-center gap-4">
                      <Button href="/request-quote" variant="primary" size="sm" icon>
                        Inquire About This Service
                      </Button>
                      <Link
                        href="/projects"
                        className="text-xs font-sans font-medium uppercase tracking-wider text-[#241333] hover:text-[#54228A] underline-offset-4 hover:underline"
                      >
                        View Related Concept Studies &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Bottom Consultation Banner */}
      <section className="py-20 bg-[#F7F5F8] border-t border-[#241333]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            eyebrow="Custom Commissions"
            title="Need an Integrated Multi-Service Turnkey Package?"
            subtitle="We coordinate architectural design, structural engineering, statutory planning permissions, and bespoke interior fit-outs under one single accountable contract."
            align="center"
            className="mb-8"
          />
          <Button href="/request-quote" variant="gold" size="lg" icon>
            Request Full Project Proposal
          </Button>
        </div>
      </section>
    </div>
  );
}
