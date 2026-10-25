import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonialsData } from "@/data/testimonialsData";
import { Star, Quote, Info, CheckCircle } from "lucide-react";

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#F7F5F8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Client Experiences"
          title="Reputation Founded on Trust &amp; Precision"
          subtitle="How our architectural rigor, female-led attention to finishing, and transparent reporting resonate with homeowners and enterprise partners."
          align="center"
          className="mb-8"
        />

        {/* Explicit Disclosure Badge per brief requirement: "clearly marked as awaiting genuine reviews" */}
        <div className="max-w-2xl mx-auto mb-12 p-3.5 bg-white border border-[#C6A04A]/50 text-center flex items-center justify-center gap-2.5 shadow-sm">
          <Info className="w-4 h-4 text-[#C6A04A] flex-shrink-0" />
          <span className="font-sans text-xs text-[#241333]/80">
            <strong>Transparency Notice:</strong> This section contains illustrative client feedback previews while official completed project reviews undergo client verification and consent.
          </span>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="bg-white p-8 border border-[#241333]/10 shadow-sm flex flex-col justify-between relative group hover:border-[#54228A] transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1 text-[#C6A04A]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-[#54228A]/15" />
                </div>

                <p className="font-serif text-base italic text-[#241333] leading-relaxed">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#241333]/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-sans font-semibold text-sm text-[#241333]">
                      {item.clientName}
                    </h4>
                    <span className="text-xs text-[#241333]/60 font-sans block">
                      {item.role} &bull; {item.location}
                    </span>
                  </div>
                </div>
                <div className="mt-2 text-[11px] font-sans text-[#54228A] font-medium uppercase tracking-wider">
                  Scope: {item.projectType}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
