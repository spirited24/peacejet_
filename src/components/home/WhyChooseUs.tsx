import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { companyConfig } from "@/data/companyConfig";
import {
  Sparkles,
  ShieldCheck,
  Eye,
  Layers,
  Clock,
  Coins,
} from "lucide-react";

const PILLARS = [
  {
    icon: Sparkles,
    title: "Female-Owned Spatial Rigor",
    description:
      "A culture of unrelenting refinement, tactile harmony, and zero tolerance for sloppy finishing or cut corners that compromise building integrity.",
  },
  {
    icon: Coins,
    title: "Transparent Milestone Budgeting",
    description:
      "Itemized bills of quantities and strictly audited stage payments. You never release funds until the previous construction milestone passes quality inspection.",
  },
  {
    icon: Eye,
    title: "Diaspora Real-Time Oversight",
    description:
      "Continuous digital visibility for our clients in the UK, US, Canada, and Europe via weekly drone footage, detailed video walkthroughs, and executive dashboards.",
  },
  {
    icon: Layers,
    title: "Coastal Climate Engineering",
    description:
      "All foundations, waterproofing membranes, and exterior finishes are engineered specifically to resist Lagos high humidity, saltwater corrosion, and tropical rainfall.",
  },
  {
    icon: Clock,
    title: "Strict Timeline Adherence",
    description:
      "Structured critical-path project scheduling with dedicated on-site project directors and supply chain pipelines that prevent costly project stalling.",
  },
  {
    icon: ShieldCheck,
    title: "Single-Point Turnkey Handover",
    description:
      "No finger-pointing between architects and building contractors. Peace Jet coordinates statutory approvals, civil builds, MEP, joinery, and interior styling.",
  },
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#241333] text-white relative overflow-hidden">
      {/* Decorative Brand Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#54228A]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C6A04A]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="The Peace Jet Difference"
          title="Why Leading Property Owners &amp; Corporations Trust Peace Jet"
          subtitle="We eliminate the common pitfalls of Nigerian construction by combining refined architectural aesthetics with rigorous institutional project management."
          isDark
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-8 bg-white/5 border border-white/10 hover:border-[#C6A04A]/60 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 bg-[#54228A] text-[#E0BF72] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-[#C6A04A]/30">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-medium text-white group-hover:text-[#E0BF72] transition-colors">
                  {pillar.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-neutral-300 mt-3 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
