import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { getEnabledServices } from "@/data/servicesData";
import { ArrowRight, Check } from "lucide-react";

export const ServicesShowcase: React.FC = () => {
  const services = getEnabledServices().slice(0, 6);

  return (
    <section className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#241333]/10">
          <SectionHeading
            eyebrow="Our Capabilities"
            title="Comprehensive Architectural &amp; Building Solutions"
            subtitle="From structural civil foundations to exquisite interior joinery and finishing, we deliver seamless turnkey execution under one accountable leadership team."
          />
          <div className="flex-shrink-0">
            <Button href="/services" variant="primary" size="md" icon>
              View All 13 Services
            </Button>
          </div>
        </div>

        {/* Services Grid with Editorial Image Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group flex flex-col bg-[#F7F5F8] border border-[#241333]/10 overflow-hidden hover:shadow-luxury-hover transition-all duration-300"
            >
              {/* Image Preview */}
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
                <Image
                  src={service.imageUrl}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <span className="absolute bottom-3 left-4 font-mono text-xs text-[#E0BF72] tracking-widest uppercase">
                  0{index + 1} &bull; {service.category}
                </span>
              </div>

              {/* Service Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl font-medium text-[#241333] group-hover:text-[#54228A] transition-colors">
                    <Link href={`/services#${service.id}`} className="focus:outline-none">
                      {service.title}
                    </Link>
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#241333]/70 mt-2.5 leading-relaxed line-clamp-3">
                    {service.shortDescription}
                  </p>

                  <ul className="mt-4 space-y-1.5 border-t border-[#241333]/10 pt-4">
                    {service.features.slice(0, 2).map((feat, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-[#241333]/80 font-sans">
                        <Check className="w-3.5 h-3.5 text-[#C6A04A] flex-shrink-0" />
                        <span className="truncate">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-[#241333]/10 flex items-center justify-between">
                  <Link
                    href={`/services#${service.id}`}
                    className="font-sans text-xs font-semibold uppercase tracking-wider text-[#54228A] flex items-center gap-1.5 group-hover:gap-2.5 transition-all"
                  >
                    <span>Service Scope</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    href="/request-quote"
                    className="text-[11px] font-sans text-[#241333]/60 hover:text-[#C6A04A] uppercase tracking-wide"
                  >
                    Request Quote &rarr;
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
