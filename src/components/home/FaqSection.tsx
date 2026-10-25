import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { faqsData } from "@/data/faqsData";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

export const FaqSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Common Inquiries"
          title="Frequently Asked Questions"
          subtitle="Clear answers regarding our architectural standards, milestone budgeting, Lagos building codes, and diaspora coordination."
          align="center"
          className="mb-14"
        />

        <div className="bg-[#F7F5F8] p-6 sm:p-10 border border-[#241333]/10 shadow-sm">
          <Accordion items={faqsData} />
        </div>

        <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <span className="text-xs sm:text-sm font-sans text-[#241333]/70">
            Have a specific structural or architectural question not covered here?
          </span>
          <Link
            href="/contact"
            className="text-xs uppercase font-sans font-semibold tracking-wider text-[#54228A] hover:underline flex items-center gap-1.5"
          >
            <MessageCircle className="w-4 h-4 text-[#C6A04A]" />
            <span>Speak with our Engineering Desk &rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
