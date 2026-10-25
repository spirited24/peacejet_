import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { companyConfig } from "@/data/companyConfig";
import { Shield, Lock, FileText, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Peace Jet Construction & Design",
  description:
    "Privacy and data protection policy for Peace Jet Construction & Design Ltd., compliant with the Nigeria Data Protection Act (NDPA) and NDPR standards.",
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "October 2026";

  return (
    <div className="bg-[#F7F5F8] min-h-screen py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs uppercase font-sans font-medium tracking-wider text-[#241333]/70 hover:text-[#54228A] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Homepage</span>
        </Link>

        <div className="bg-white p-8 sm:p-12 border border-[#241333]/10 shadow-luxury">
          <div className="flex items-center gap-2 text-xs font-sans uppercase tracking-[0.2em] font-semibold text-[#C6A04A] mb-3">
            <Shield className="w-4 h-4 text-[#C6A04A]" />
            <span>Corporate Governance &amp; Data Security</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl font-medium text-[#241333] pb-4 border-b border-[#241333]/10">
            Privacy &amp; Confidentiality Policy
          </h1>

          <div className="mt-2 text-xs font-sans text-neutral-500">
            Last Updated: {lastUpdated} &bull; Effective for {companyConfig.legalName}
          </div>

          <div className="mt-8 space-y-8 font-sans text-xs sm:text-sm text-[#241333]/80 leading-relaxed">
            <section>
              <h2 className="font-serif text-lg font-semibold text-[#241333] mb-2">
                1. Commitment to Client Confidentiality
              </h2>
              <p>
                {companyConfig.legalName} (&ldquo;Peace Jet&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is committed to safeguarding the privacy, architectural assets, and personal information of our clients, property owners, and digital visitors. We adhere strictly to the Nigeria Data Protection Act (NDPA), the Nigeria Data Protection Regulation (NDPR), and relevant international data protection principles applicable to our diaspora clients.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-lg font-semibold text-[#241333] mb-2">
                2. Information We Collect
              </h2>
              <p>
                To provide architectural design, construction feasibility, and project supervision services, we collect information submitted voluntarily by you through our consultation and quote request portals, including:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-neutral-700">
                <li>Client identity information: Full name, legal entity name, designation.</li>
                <li>Contact coordinates: Verified email addresses, telephone numbers, and country code indicators.</li>
                <li>Project parameters: Property location, structural typology, estimated budget bands in Nigerian Naira, and project timelines.</li>
                <li>Architectural assets: Optional uploaded site surveys, title deeds, conceptual drawings, and photographic references.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-lg font-semibold text-[#241333] mb-2">
                3. Purpose of Processing
              </h2>
              <p>We process your information exclusively for legitimate building and business purposes:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-neutral-700">
                <li>Developing tailored Bills of Quantities (BOQ), cost projections, and feasibility audits.</li>
                <li>Coordinating statutory municipal building plan approvals with Lagos State or relevant state agencies.</li>
                <li>Providing continuous progress tracking, milestone video documentation, and expenditure updates.</li>
                <li>Direct correspondence via telephone, email, or verified WhatsApp channels as requested by you.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-lg font-semibold text-[#241333] mb-2">
                4. Non-Disclosure &amp; Intellectual Asset Protection
              </h2>
              <p>
                We do not sell, rent, monetize, or trade your personal information or private architectural briefs to third-party marketing entities. Any architectural drawings or site documents shared with structural sub-contractors, certified MEP engineers, or state regulators are transmitted strictly under non-disclosure obligations.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-lg font-semibold text-[#241333] mb-2">
                5. Illustrative Concept Imagery Clarification
              </h2>
              <p>
                In alignment with ethical advertising standards, architectural visualizations and concept renders published on this website are designated as illustrative studies to demonstrate spatial and material possibilities. Real completed private residences remain subject to client non-disclosure agreements and are photographed only with express written client consent.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-lg font-semibold text-[#241333] mb-2">
                6. Data Retention &amp; Security Measures
              </h2>
              <p>
                We maintain appropriate physical, electronic, and procedural safeguards to protect your personal and project information against unauthorized access, loss, or alteration. Data is retained only for the duration required to service your project or satisfy legal compliance obligations.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-lg font-semibold text-[#241333] mb-2">
                7. Contact Our Privacy Officer
              </h2>
              <p>
                For any questions regarding this Privacy Policy or to exercise your rights of data access, correction, or deletion, please contact our administrative desk:
              </p>
              <div className="mt-3 p-4 bg-[#F7F5F8] border border-[#241333]/10 text-xs">
                <p>
                  <strong>Entity:</strong> {companyConfig.legalName}
                </p>
                <p>
                  <strong>Location:</strong> {companyConfig.location.city}, {companyConfig.location.state}, {companyConfig.location.country}
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <a href={`mailto:${companyConfig.contact.email}`} className="text-[#54228A] underline">
                    {companyConfig.contact.email}
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
