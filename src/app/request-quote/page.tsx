import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import { QuoteForm } from "@/components/quote/QuoteForm";
import { companyConfig } from "@/data/companyConfig";
import {
  Sparkles,
  ShieldCheck,
  FileCheck,
  Lock,
  Clock,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Request a Quote & Project Proposal | Peace Jet Construction Lagos",
  description:
    "Submit your luxury residential or commercial construction brief to Peace Jet Construction & Design. Receive a transparent itemized estimate, architectural feasibility, and milestone timeline.",
};

export default function RequestQuotePage() {
  return (
    <div className="bg-[#F7F5F8] min-h-screen">
      {/* Editorial Page Header */}
      <section className="relative py-20 sm:py-28 bg-[#241333] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2000&auto=format&fit=crop"
            alt="Peace Jet Project Onboarding"
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
                Architectural &amp; Building Proposal Portal
              </span>
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl font-light tracking-tight text-white leading-tight">
              Request a Project Proposal.
            </h1>
            <p className="mt-4 text-base sm:text-xl text-neutral-300 font-sans font-light leading-relaxed">
              Complete the project specifications below to receive an itemized Bill of Quantities (BOQ) feasibility, architectural consultation, and milestone timeline tailored to your site.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="py-12 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Trust Guarantees Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 text-xs font-sans text-[#241333]/80">
            <div className="p-4 bg-white border border-[#241333]/10 flex items-center gap-3 shadow-sm">
              <Lock className="w-5 h-5 text-[#54228A] flex-shrink-0" />
              <div>
                <strong className="block text-[#241333] font-semibold">
                  100% Confidential
                </strong>
                <span>Non-disclosure protected project review</span>
              </div>
            </div>

            <div className="p-4 bg-white border border-[#241333]/10 flex items-center gap-3 shadow-sm">
              <Clock className="w-5 h-5 text-[#C6A04A] flex-shrink-0" />
              <div>
                <strong className="block text-[#241333] font-semibold">
                  24–48h Response
                </strong>
                <span>Dedicated architectural director feedback</span>
              </div>
            </div>

            <div className="p-4 bg-white border border-[#241333]/10 flex items-center gap-3 shadow-sm">
              <FileCheck className="w-5 h-5 text-[#54228A] flex-shrink-0" />
              <div>
                <strong className="block text-[#241333] font-semibold">
                  Milestone Accuracy
                </strong>
                <span>Itemized Naira budgeting with zero hidden costs</span>
              </div>
            </div>
          </div>

          {/* Interactive Form Component */}
          <QuoteForm />
        </div>
      </section>
    </div>
  );
}
