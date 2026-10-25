import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { companyConfig } from "@/data/companyConfig";
import {
  Sparkles,
  ShieldCheck,
  Award,
  CheckCircle2,
  Compass,
  MapPin,
  HeartHandshake,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Female-Owned Architectural & Construction Firm Lagos",
  description:
    "Learn about Peace Jet Construction & Design — our vision, female-led engineering precision, values, and dedication to building luxury residences and commercial spaces in Nigeria.",
};

const VALUES = [
  {
    icon: Sparkles,
    title: "Uncompromising Detail",
    description:
      "We believe true luxury resides in the invisible millimeter. From laser-straight shadow line reveals to flush joinery, we reject mediocre finishing.",
  },
  {
    icon: ShieldCheck,
    title: "Milestone Integrity",
    description:
      "Every naira disbursed corresponds directly to verified on-site structural progress. We operate with radical transparency and zero hidden contingencies.",
  },
  {
    icon: Compass,
    title: "Architectural Permanence",
    description:
      "We design structures to gracefully endure Lagos coastal humidity, saline air, and intense tropical sunlight using tested materials and bioclimatic shading.",
  },
  {
    icon: HeartHandshake,
    title: "Client-Centric Collaboration",
    description:
      "We view our clients as visionary co-creators. We maintain open communication, rapid responsiveness, and respect for your investments.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Editorial Page Header */}
      <section className="relative py-24 sm:py-32 bg-[#241333] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop"
            alt="About Peace Jet Architecture"
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
                Our Identity &amp; Heritage
              </span>
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl font-light tracking-tight text-white leading-tight">
              Elevating Construction Through Female-Led Rigor.
            </h1>
            <p className="mt-6 text-base sm:text-xl text-neutral-300 font-sans font-light leading-relaxed">
              Peace Jet Construction &amp; Design is a female-owned construction and interior architecture firm based in Lagos, Nigeria. We bridge the gap between heavy civil engineering and exquisite, sensory interior finishing.
            </p>
          </div>
        </div>
      </section>

      {/* Main Narrative Section */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <SectionHeading
                eyebrow="The Peace Jet Story"
                title="A Vision Born Out of Passion for Architectural Perfection"
                subtitle="The Nigerian built environment is vibrant, ambitious, and expanding rapidly. However, property owners have historically suffered from delayed completions, unverified cost creep, and poor craftsmanship."
              />

              <div className="mt-6 space-y-4 font-sans text-sm sm:text-base text-[#241333]/80 leading-relaxed">
                <p>
                  Peace Jet Construction &amp; Design was established to challenge that status quo. By bringing female executive leadership to the forefront of construction management, we infuse building sites with meticulous organizational hygiene, empathetic spatial design, and zero tolerance for compromised finishing.
                </p>
                <p>
                  Headquartered in Lagos, we oversee every phase of the project lifecycle — from raw land topographic assessment and architectural drafting to reinforced structural pouring, high-spec MEP engineering, custom Italian-style millwork, and turnkey interior staging.
                </p>
                <p>
                  Whether delivering a bespoke family duplex in Ikoyi, modernizing an executive boardroom in Victoria Island, or supervising a high-yield residential development from London, our commitment remains constant: <em>Building Your Vision. Creating Lasting Value.</em>
                </p>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <Button href="/request-quote" variant="primary" size="md" icon>
                  Start a Project Discussion
                </Button>
                <Button href="/projects" variant="outline" size="md">
                  View Concept Studies
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/5] overflow-hidden shadow-luxury">
                <Image
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop"
                  alt="Architectural detailing by Peace Jet"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#241333] text-white p-6 max-w-xs border-l-4 border-[#C6A04A] shadow-xl hidden sm:block">
                <span className="font-serif text-lg font-medium text-[#E0BF72] block">
                  Female-Owned &amp; Operated
                </span>
                <span className="font-sans text-xs text-neutral-300 mt-1 block">
                  Championing diversity, technical excellence, and precision craftsmanship in the African construction ecosystem.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 sm:py-28 bg-[#F7F5F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Guiding Principles"
            title="The Values Anchoring Every Peace Jet Structure"
            subtitle="Our standards are uncompromising. These pillars govern how we manage your capital, oversee our artisans, and assemble every beam."
            align="center"
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALUES.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="p-8 bg-white border border-[#241333]/10 hover:border-[#54228A] transition-all duration-300 shadow-sm"
                >
                  <div className="w-12 h-12 bg-[#54228A]/10 text-[#54228A] flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-medium text-[#241333]">
                    {val.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#241333]/70 mt-3 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Geographic Scope & Operational Excellence */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 bg-[#241333] text-white border border-[#C6A04A]/40 shadow-luxury">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <span className="font-sans text-xs uppercase tracking-[0.2em] font-semibold text-[#E0BF72] flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#C6A04A]" />
                  Operational Footprint &amp; Client Reach
                </span>
                <h3 className="font-serif text-2xl sm:text-4xl font-light text-white mt-3 leading-snug">
                  From Prime Lagos Neighborhoods to International Diaspora Commissions
                </h3>
                <p className="font-sans text-sm sm:text-base text-neutral-300 mt-4 leading-relaxed max-w-2xl">
                  While our primary operations center on Ikoyi, Banana Island, Victoria Island, Lekki, and Ikeja GRA, our architectural design studio and construction management consultants accept commissions across Nigeria and provide dedicated overseas client coordination for clients residing in the UK, North America, and the Middle East.
                </p>
              </div>
              <div className="lg:col-span-4 flex flex-col gap-4">
                <Button href="/request-quote" variant="gold" size="md" icon className="w-full text-center">
                  Consult on Your Site
                </Button>
                <Button href="/contact" variant="outline" size="md" className="w-full text-center border-white/30 text-white hover:text-white hover:bg-white/10">
                  Contact Our Lagos Desk
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
