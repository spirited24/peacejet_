import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { MessageSquare, Compass, Hammer, KeyRound } from "lucide-react";

const STEPS = [
  {
    number: "01",
    name: "Consultation & Vision Discovery",
    icon: MessageSquare,
    tagline: "Aligning on aspirations, lifestyle, and site viability",
    details: [
      "Initial in-depth client design brief and lifestyle assessment",
      "Site survey, boundary verification, and soil topography evaluation",
      "Preliminary budget feasibility in Nigerian Naira and milestone roadmap",
      "Review of statutory Lagos State zoning laws and planning requirements",
    ],
  },
  {
    number: "02",
    name: "Planning & Architectural Design",
    icon: Compass,
    tagline: "Translating concepts into precision blueprints and 3D CGI",
    details: [
      "Photorealistic 3D visualization and virtual walkthrough animations",
      "Detailed structural, mechanical, and electrical engineering drawings",
      "Comprehensive Bill of Quantities (BOQ) with fixed material schedules",
      "Coordination and submission for Lagos State Physical Planning approvals",
    ],
  },
  {
    number: "03",
    name: "Precision Execution & Quality Control",
    icon: Hammer,
    tagline: "Translating architectural drawings into structural reality",
    details: [
      "Site mobilization and foundation engineering with certified materials",
      "Continuous on-site supervision by female-led QA engineering team",
      "Weekly digital progress reports with drone video logs for local & diaspora clients",
      "Milestone-based stage inspections before any disbursement sign-offs",
    ],
  },
  {
    number: "04",
    name: "Zero-Defect Handover & Warranty",
    icon: KeyRound,
    tagline: "Pristine key delivery and enduring structural peace of mind",
    details: [
      "Multi-stage final snagging audit ensuring absolute perfection in finishing",
      "Comprehensive deep cleaning, mechanical testing, and system commissioning",
      "Official key handover ceremony with complete as-built documentation folios",
      "Post-handover warranty support and dedicated facility care guidance",
    ],
  },
];

export const ProcessSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Proven Methodology"
          title="The 4-Step Peace Jet Project Journey"
          subtitle="From your initial conceptual inspiration in Lagos or abroad to pristine keys in hand, our structured process ensures absolute predictability and quality."
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative flex flex-col justify-between p-6 sm:p-7 bg-[#F7F5F8] border border-[#241333]/10 hover:border-[#54228A] transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-[#241333]/10">
                    <span className="font-mono text-2xl font-light text-[#C6A04A]">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 bg-white border border-[#241333]/15 flex items-center justify-center text-[#54228A] group-hover:bg-[#54228A] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-serif text-lg font-medium text-[#241333] mt-5 group-hover:text-[#54228A] transition-colors leading-snug">
                    {step.name}
                  </h3>

                  <p className="font-sans text-xs text-[#241333]/60 italic mt-1">
                    {step.tagline}
                  </p>

                  <ul className="mt-5 space-y-2 border-t border-[#241333]/10 pt-4">
                    {step.details.map((item, i) => (
                      <li
                        key={i}
                        className="text-xs font-sans text-[#241333]/75 flex items-start gap-2 leading-relaxed"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C6A04A] mt-1.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-3 text-[11px] font-sans uppercase tracking-wider text-[#54228A] font-semibold">
                  Phase {step.number} Protocol
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <Button href="/request-quote" variant="primary" size="md" icon>
            Initiate Phase 1: Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};
