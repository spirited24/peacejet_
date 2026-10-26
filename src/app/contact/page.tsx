"use client";

import React, { useState } from "react";
import Image from "next/image";
import { companyConfig, hasValidWhatsApp } from "@/data/companyConfig";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  Sparkles,
  Send,
  CheckCircle2,
  AlertCircle,
  Building,
  Instagram,
} from "lucide-react";

export default function ContactPage() {
  const showWhatsApp = hasValidWhatsApp(companyConfig);
  const rawWhatsApp = companyConfig.contact.whatsapp.replace(/\D/g, "");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<{
    success: boolean;
    referenceId?: string;
    message?: string;
    isDemo?: boolean;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      alert("Please fill in your name, email, and message.");
      return;
    }

    setIsSubmitting(true);
    setResult(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setResult({
          success: true,
          referenceId: data.referenceId,
          message: data.message,
          isDemo: data.isDemoEnvironment,
        });
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setResult({
          success: false,
          message: data.error || "Unable to send message at this time.",
        });
      }
    } catch {
      setResult({
        success: false,
        message: "Network issue. Please reach out via phone or WhatsApp.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#F7F5F8] min-h-screen">
      {/* Editorial Header */}
      <section className="relative py-24 sm:py-32 bg-[#241333] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop"
            alt="Peace Jet Corporate Consultation"
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
                Client Relations &amp; Site Consultations
              </span>
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl font-light tracking-tight text-white leading-tight">
              Connect With Our Architectural Studio.
            </h1>
            <p className="mt-6 text-base sm:text-xl text-neutral-300 font-sans font-light leading-relaxed">
              We welcome private homeowners, corporate directors, and diaspora property developers to discuss upcoming commissions in Lagos and across Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Information Cards */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-white p-8 border border-[#241333]/10 shadow-sm">
                <span className="font-sans text-xs uppercase tracking-[0.2em] font-semibold text-[#C6A04A] block mb-2">
                  Headquarters &amp; Operations
                </span>
                <h2 className="font-serif text-2xl font-medium text-[#241333] pb-4 border-b border-[#241333]/10">
                  Peace Jet Construction &amp; Design
                </h2>

                <div className="mt-6 space-y-5 font-sans text-xs sm:text-sm text-[#241333]/80">
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 bg-[#54228A]/10 text-[#54228A] flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="block text-[#241333] font-semibold">
                        Registered Location:
                      </strong>
                      <span>
                        {companyConfig.location.city}, {companyConfig.location.state},{" "}
                        {companyConfig.location.country}
                      </span>
                      <span className="block text-[11px] text-neutral-500 mt-0.5">
                        Serving Ikoyi, Victoria Island, Banana Island, Lekki &amp; Nationwide
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 bg-[#54228A]/10 text-[#54228A] flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="block text-[#241333] font-semibold">
                        Direct Lines (Calls &amp; WhatsApp):
                      </strong>
                      <div className="flex flex-col gap-1 mt-1">
                        <a
                          href={`tel:${companyConfig.contact.phone.replace(/\s+/g, '')}`}
                          className="hover:text-[#54228A] transition-colors font-medium"
                        >
                          {companyConfig.contact.phone}
                        </a>
                        <a
                          href={`tel:${companyConfig.contact.secondaryPhone.replace(/\s+/g, '')}`}
                          className="hover:text-[#54228A] transition-colors font-medium"
                        >
                          {companyConfig.contact.secondaryPhone}
                        </a>
                      </div>
                    </div>
                  </div>

                  {companyConfig.contact.email && (
                    <div className="flex items-start gap-3.5">
                      <div className="w-9 h-9 bg-[#54228A]/10 text-[#54228A] flex items-center justify-center flex-shrink-0">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div>
                        <strong className="block text-[#241333] font-semibold">
                          Official Email:
                        </strong>
                        <a
                          href={`mailto:${companyConfig.contact.email}`}
                          className="hover:text-[#54228A] transition-colors break-all"
                        >
                          {companyConfig.contact.email}
                        </a>
                      </div>
                    </div>
                  )}

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 bg-[#54228A]/10 text-[#54228A] flex items-center justify-center flex-shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="block text-[#241333] font-semibold">
                        Studio &amp; Site Hours:
                      </strong>
                      <span>{companyConfig.contact.operatingHours}</span>
                    </div>
                  </div>

                  {companyConfig.socialLinks.instagram && (
                    <div className="flex items-start gap-3.5">
                      <div className="w-9 h-9 bg-[#54228A]/10 text-[#54228A] flex items-center justify-center flex-shrink-0">
                        <Instagram className="w-4 h-4" />
                      </div>
                      <div>
                        <strong className="block text-[#241333] font-semibold">
                          Instagram:
                        </strong>
                        <a
                          href={companyConfig.socialLinks.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-[#54228A] transition-colors break-all font-medium text-[#54228A]"
                        >
                          @p.e.a.c.ejetinteriors01_
                        </a>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-8 pt-6 border-t border-[#241333]/10 space-y-3">
                  <span className="font-sans text-xs uppercase tracking-wider text-[#241333]/70 font-semibold block">
                    Fast WhatsApp Inquiries:
                  </span>
                  <a
                    href={`https://wa.me/2348160410424?text=${encodeURIComponent("Hello Peace Jet Construction & Design! I would like to inquire about a project in Lagos.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-[#25D366] text-white font-sans text-xs font-semibold uppercase tracking-wider hover:bg-[#1EBE5D] transition-colors shadow-sm"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp Line 1 (0816 041 0424)</span>
                  </a>
                  <a
                    href={`https://wa.me/2347039061747?text=${encodeURIComponent("Hello Peace Jet Construction & Design! I would like to inquire about a project in Lagos.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-[#241333] text-[#25D366] border border-[#25D366]/40 font-sans text-xs font-semibold uppercase tracking-wider hover:bg-[#25D366] hover:text-white transition-colors shadow-sm"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp Line 2 (0703 906 1747)</span>
                  </a>
                </div>
              </div>

              {/* Female-Owned Commitment Badge */}
              <div className="p-6 bg-[#241333] text-white border-l-4 border-[#C6A04A]">
                <div className="flex items-center gap-2 text-xs font-serif font-medium text-[#E0BF72]">
                  <Sparkles className="w-4 h-4 text-[#C6A04A]" />
                  <span>{companyConfig.femaleOwnedBadge}</span>
                </div>
                <p className="mt-2 font-sans text-xs text-white/70 leading-relaxed">
                  Every inquiry receives dedicated attention from our architectural and quantity surveying partners.
                </p>
              </div>
            </div>

            {/* General Contact Message Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 sm:p-10 border border-[#241333]/10 shadow-luxury">
                <span className="font-sans text-xs uppercase tracking-[0.2em] font-semibold text-[#C6A04A] block mb-2">
                  Direct Inquiries
                </span>
                <h3 className="font-serif text-2xl font-medium text-[#241333] pb-4 border-b border-[#241333]/10">
                  Send a Message to Our Office
                </h3>

                {result?.success ? (
                  <div className="my-8 p-6 bg-[#F7F5F8] border border-[#C6A04A]/50 text-center">
                    <div className="w-12 h-12 bg-[#54228A] text-[#E0BF72] rounded-full mx-auto flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h4 className="font-serif text-xl text-[#241333] font-medium">
                      Message Registered
                    </h4>
                    <p className="font-sans text-xs text-neutral-600 mt-2">
                      {result.message} Reference ID:{" "}
                      <strong className="font-mono text-[#54228A]">
                        {result.referenceId}
                      </strong>
                    </p>

                    {result.isDemo && (
                      <p className="mt-3 text-[11px] font-sans text-neutral-500 bg-white p-2 border border-neutral-200">
                        System note: Operating in demonstration mode. Inquiry logged.
                      </p>
                    )}

                    <button
                      onClick={() => setResult(null)}
                      className="mt-6 px-4 py-2 bg-[#54228A] text-white text-xs font-sans uppercase tracking-wider hover:bg-[#3B1463]"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                    {result?.success === false && (
                      <div className="p-3 bg-red-50 text-red-700 text-xs flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        <span>{result.message}</span>
                      </div>
                    )}

                    <div>
                      <label className="block font-sans text-xs uppercase tracking-wider text-[#241333] font-medium mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="e.g. Chief Adeleke Johnson"
                        className="w-full px-4 py-3 bg-[#F7F5F8] border border-[#241333]/15 text-sm text-[#241333] focus:bg-white focus:outline-none focus:border-[#54228A]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-sans text-xs uppercase tracking-wider text-[#241333] font-medium mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="adeleke@domain.com"
                          className="w-full px-4 py-3 bg-[#F7F5F8] border border-[#241333]/15 text-sm text-[#241333] focus:bg-white focus:outline-none focus:border-[#54228A]"
                        />
                      </div>
                      <div>
                        <label className="block font-sans text-xs uppercase tracking-wider text-[#241333] font-medium mb-1.5">
                          Phone Number (Optional)
                        </label>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="+234 800 000 0000"
                          className="w-full px-4 py-3 bg-[#F7F5F8] border border-[#241333]/15 text-sm text-[#241333] focus:bg-white focus:outline-none focus:border-[#54228A]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-sans text-xs uppercase tracking-wider text-[#241333] font-medium mb-1.5">
                        Your Message or Project Query *
                      </label>
                      <textarea
                        rows={5}
                        required
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Tell us about your architectural, construction, or renovation inquiry..."
                        className="w-full px-4 py-3 bg-[#F7F5F8] border border-[#241333]/15 text-sm text-[#241333] focus:bg-white focus:outline-none focus:border-[#54228A]"
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                      <Button
                        type="submit"
                        variant="primary"
                        size="md"
                        loading={isSubmitting}
                        icon
                        className="w-full sm:w-auto"
                      >
                        Transmit Message
                      </Button>

                      <span className="text-[11px] text-neutral-500 font-sans">
                        Need itemized pricing? Use our{" "}
                        <a href="/request-quote" className="text-[#54228A] underline">
                          Quote Request Portal
                        </a>
                      </span>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
