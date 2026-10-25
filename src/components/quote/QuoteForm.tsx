"use client";

import React, { useState } from "react";
import { getEnabledServices } from "@/data/servicesData";
import { companyConfig } from "@/data/companyConfig";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Upload,
  X,
  FileText,
  Sparkles,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  Building,
} from "lucide-react";
import Link from "next/link";

interface FormErrors {
  [key: string]: string;
}

export const QuoteForm: React.FC = () => {
  const services = getEnabledServices();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    countryCode: "+234",
    phone: "",
    preferredContact: "phone",
    requiredService: services[0]?.title || "Luxury Residential Construction",
    projectLocation: "Lagos (Island - Ikoyi / VI / Banana Island)",
    propertyType: "Detached Luxury Villa / Duplex",
    projectStage: "Land Acquired / Ready for Architectural Planning",
    budgetRangeNaira: "₦75,000,000 – ₦150,000,000",
    timeframe: "1 – 3 Months",
    projectDescription: "",
    privacyConsent: false,
  });

  const [uploadedFile, setUploadedFile] = useState<{
    name: string;
    size: string;
    previewUrl?: string;
  } | null>(null);

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<{
    success: boolean;
    referenceId?: string;
    message?: string;
    isDemo?: boolean;
  } | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        setErrors((prev) => ({
          ...prev,
          file: "Uploaded file must be under 10MB.",
        }));
        return;
      }

      const sizeStr =
        file.size > 1024 * 1024
          ? `${(file.size / (1024 * 1024)).toFixed(1)} MB`
          : `${Math.round(file.size / 1024)} KB`;

      setUploadedFile({
        name: file.name,
        size: sizeStr,
        previewUrl: file.type.startsWith("image/")
          ? URL.createObjectURL(file)
          : undefined,
      });

      if (errors.file) {
        setErrors((prev) => {
          const next = { ...prev };
          delete next.file;
          return next;
        });
      }
    }
  };

  const removeFile = () => {
    setUploadedFile(null);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please provide a valid email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email format.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required for consultation coordination.";
    } else if (formData.phone.replace(/\D/g, "").length < 7) {
      newErrors.phone = "Please enter a complete phone number.";
    }

    if (!formData.projectDescription.trim()) {
      newErrors.projectDescription =
        "Please provide a brief summary of your project vision, requirements, or site specifications.";
    } else if (formData.projectDescription.trim().length < 20) {
      newErrors.projectDescription =
        "Please provide at least 20 characters so we can understand your requirements.";
    }

    if (!formData.privacyConsent) {
      newErrors.privacyConsent =
        "You must agree to the privacy policy and consent to be contacted regarding this project.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmissionResult(null);

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          phone: `${formData.countryCode} ${formData.phone}`,
          uploadedFileName: uploadedFile?.name,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmissionResult({
          success: true,
          referenceId: data.referenceId,
          message: data.message,
          isDemo: data.isDemoEnvironment,
        });
      } else {
        setSubmissionResult({
          success: false,
          message: data.error || "Failed to submit project inquiry.",
        });
      }
    } catch {
      setSubmissionResult({
        success: false,
        message:
          "Network connection issue. Please verify your connection or contact our Lagos office directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white border border-[#241333]/10 shadow-luxury p-6 sm:p-10 lg:p-12 relative">
      {/* Decorative Brand Header */}
      <div className="pb-6 mb-8 border-b border-[#241333]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="font-sans text-xs tracking-[0.2em] uppercase font-semibold text-[#C6A04A] flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            Project Onboarding
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#241333] mt-1">
            Request an Architectural &amp; Construction Proposal
          </h2>
        </div>
        <div className="text-left sm:text-right">
          <span className="inline-block px-3 py-1 bg-[#F7F5F8] border border-[#C6A04A]/30 text-[11px] font-sans text-[#241333] font-medium uppercase tracking-wider">
            Confidential Consultation
          </span>
        </div>
      </div>

      {/* Confirmation State Modal/Box */}
      {submissionResult?.success ? (
        <div className="py-12 px-6 sm:px-10 text-center bg-[#F7F5F8] border border-[#C6A04A]/40 animate-fadeIn">
          <div className="w-16 h-16 bg-[#54228A] text-[#E0BF72] rounded-full mx-auto flex items-center justify-center shadow-lg mb-6">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A04A]">
            Inquiry Registered
          </span>
          <h3 className="font-serif text-3xl font-medium text-[#241333] mt-2">
            Thank You, {formData.fullName}
          </h3>
          <p className="font-sans text-sm sm:text-base text-[#241333]/80 max-w-xl mx-auto mt-3 leading-relaxed">
            {submissionResult.message}
          </p>

          <div className="mt-6 inline-flex flex-col sm:flex-row items-center gap-3 p-4 bg-white border border-[#241333]/10 text-xs font-sans text-neutral-700">
            <div>
              <span className="text-neutral-500 uppercase tracking-wider block text-[10px]">
                Inquiry Tracking Code
              </span>
              <span className="font-mono font-bold text-[#54228A] text-sm">
                {submissionResult.referenceId}
              </span>
            </div>
            <div className="hidden sm:block w-[1px] h-8 bg-neutral-200 mx-2" />
            <div className="text-left">
              <span className="text-neutral-500 uppercase tracking-wider block text-[10px]">
                Primary Follow-Up Channel
              </span>
              <span className="font-medium text-[#241333] capitalize">
                {formData.preferredContact} ({formData.countryCode} {formData.phone})
              </span>
            </div>
          </div>

          {/* Transparent Demonstration Mode Note per brief */}
          {submissionResult.isDemo && (
            <div className="mt-6 max-w-md mx-auto p-3.5 bg-purple-50 border border-purple-200 text-left flex items-start gap-3">
              <AlertCircle className="w-4 h-4 text-[#54228A] flex-shrink-0 mt-0.5" />
              <p className="font-sans text-xs text-[#241333]/80 leading-relaxed">
                <strong>System Notice:</strong> The website is currently operating in <em>demonstration mode</em>. Your inquiry has been validated and logged in our system. Once live production email credentials (e.g. SMTP/Resend) are connected, automated notification emails will be dispatched instantly.
              </p>
            </div>
          )}

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                setSubmissionResult(null);
                setFormData((prev) => ({
                  ...prev,
                  projectDescription: "",
                  privacyConsent: false,
                }));
                setUploadedFile(null);
              }}
              className="px-6 py-3 bg-[#54228A] text-white text-xs font-sans uppercase tracking-wider hover:bg-[#3B1463] transition-colors"
            >
              Submit Another Inquiry
            </button>
            <Link
              href="/projects"
              className="px-6 py-3 bg-white border border-[#241333]/20 text-[#241333] text-xs font-sans uppercase tracking-wider hover:bg-neutral-50 transition-colors"
            >
              Explore Architectural Folio
            </Link>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-8">
          {submissionResult?.success === false && (
            <div className="p-4 bg-red-50 border-l-4 border-red-500 text-red-800 text-xs flex items-center gap-3">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{submissionResult.message}</span>
            </div>
          )}

          {/* Section 1: Client Identity & Communication */}
          <div>
            <h3 className="font-serif text-lg font-medium text-[#241333] mb-4 flex items-center gap-2">
              <span className="w-5 h-5 bg-[#54228A] text-white text-[11px] font-sans flex items-center justify-center">
                1
              </span>
              Contact &amp; Client Particulars
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block font-sans text-xs uppercase tracking-wider text-[#241333] font-medium mb-1.5"
                >
                  Full Name / Legal Entity <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="e.g. Dr. Ngozi Balogun / Horizon Capital Ltd"
                  className={`w-full px-4 py-3 bg-[#F7F5F8] border text-sm text-[#241333] placeholder:text-neutral-400 focus:bg-white focus:outline-none focus:border-[#54228A] transition-colors ${
                    errors.fullName ? "border-red-500" : "border-[#241333]/15"
                  }`}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-xs mt-1 font-sans">{errors.fullName}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block font-sans text-xs uppercase tracking-wider text-[#241333] font-medium mb-1.5"
                >
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="name@domain.com"
                  className={`w-full px-4 py-3 bg-[#F7F5F8] border text-sm text-[#241333] placeholder:text-neutral-400 focus:bg-white focus:outline-none focus:border-[#54228A] transition-colors ${
                    errors.email ? "border-red-500" : "border-[#241333]/15"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1 font-sans">{errors.email}</p>
                )}
              </div>

              {/* Phone with Country Code */}
              <div>
                <label
                  htmlFor="phone"
                  className="block font-sans text-xs uppercase tracking-wider text-[#241333] font-medium mb-1.5"
                >
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-2">
                  <select
                    name="countryCode"
                    id="countryCode"
                    value={formData.countryCode}
                    onChange={handleInputChange}
                    className="w-28 px-2 py-3 bg-[#F7F5F8] border border-[#241333]/15 text-xs text-[#241333] focus:bg-white focus:outline-none focus:border-[#54228A]"
                  >
                    <option value="+234">+234 (NG)</option>
                    <option value="+44">+44 (UK)</option>
                    <option value="+1">+1 (US/CA)</option>
                    <option value="+971">+971 (UAE)</option>
                    <option value="+27">+27 (SA)</option>
                    <option value="+233">+233 (GH)</option>
                    <option value="+33">+33 (FR)</option>
                  </select>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="801 234 5678"
                    className={`flex-1 px-4 py-3 bg-[#F7F5F8] border text-sm text-[#241333] placeholder:text-neutral-400 focus:bg-white focus:outline-none focus:border-[#54228A] transition-colors ${
                      errors.phone ? "border-red-500" : "border-[#241333]/15"
                    }`}
                  />
                </div>
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1 font-sans">{errors.phone}</p>
                )}
              </div>

              {/* Preferred Contact Method */}
              <div>
                <label
                  htmlFor="preferredContact"
                  className="block font-sans text-xs uppercase tracking-wider text-[#241333] font-medium mb-1.5"
                >
                  Preferred Contact Channel
                </label>
                <select
                  id="preferredContact"
                  name="preferredContact"
                  value={formData.preferredContact}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-[#F7F5F8] border border-[#241333]/15 text-sm text-[#241333] focus:bg-white focus:outline-none focus:border-[#54228A]"
                >
                  <option value="phone">Direct Phone Call</option>
                  <option value="whatsapp">WhatsApp Direct Chat</option>
                  <option value="email">Official Email Correspondence</option>
                </select>
              </div>
            </div>
          </div>

          {/* Section 2: Project Specifications */}
          <div className="pt-6 border-t border-[#241333]/10">
            <h3 className="font-serif text-lg font-medium text-[#241333] mb-4 flex items-center gap-2">
              <span className="w-5 h-5 bg-[#54228A] text-white text-[11px] font-sans flex items-center justify-center">
                2
              </span>
              Project Scope &amp; Site Parameters
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {/* Required Service */}
              <div>
                <label
                  htmlFor="requiredService"
                  className="block font-sans text-xs uppercase tracking-wider text-[#241333] font-medium mb-1.5"
                >
                  Primary Service Required <span className="text-red-500">*</span>
                </label>
                <select
                  id="requiredService"
                  name="requiredService"
                  value={formData.requiredService}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-[#F7F5F8] border border-[#241333]/15 text-sm text-[#241333] focus:bg-white focus:outline-none focus:border-[#54228A]"
                >
                  {services.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                  <option value="Comprehensive Turnkey Delivery">Comprehensive Turnkey Delivery</option>
                </select>
              </div>

              {/* Project Location */}
              <div>
                <label
                  htmlFor="projectLocation"
                  className="block font-sans text-xs uppercase tracking-wider text-[#241333] font-medium mb-1.5"
                >
                  Project Location <span className="text-red-500">*</span>
                </label>
                <select
                  id="projectLocation"
                  name="projectLocation"
                  value={formData.projectLocation}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-[#F7F5F8] border border-[#241333]/15 text-sm text-[#241333] focus:bg-white focus:outline-none focus:border-[#54228A]"
                >
                  <option value="Lagos (Island - Ikoyi / VI / Banana Island)">
                    Lagos (Island - Ikoyi / VI / Banana Island)
                  </option>
                  <option value="Lagos (Island - Lekki 1 / Chevron / Ajah)">
                    Lagos (Island - Lekki 1 / Chevron / Ajah)
                  </option>
                  <option value="Lagos (Eko Atlantic City)">Lagos (Eko Atlantic City)</option>
                  <option value="Lagos Mainland (Ikeja GRA / Magodo / Maryland)">
                    Lagos Mainland (Ikeja GRA / Magodo / Maryland)
                  </option>
                  <option value="Abuja (FCT - Maitama / Asokoro / Guzape)">
                    Abuja (FCT - Maitama / Asokoro / Guzape)
                  </option>
                  <option value="Port Harcourt (Rivers State)">Port Harcourt (Rivers State)</option>
                  <option value="Other Nigeria State">Other Nigeria State</option>
                  <option value="Diaspora / International Consultancy">
                    Diaspora / International Consultancy
                  </option>
                </select>
              </div>

              {/* Property Type */}
              <div>
                <label
                  htmlFor="propertyType"
                  className="block font-sans text-xs uppercase tracking-wider text-[#241333] font-medium mb-1.5"
                >
                  Property Type <span className="text-red-500">*</span>
                </label>
                <select
                  id="propertyType"
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-[#F7F5F8] border border-[#241333]/15 text-sm text-[#241333] focus:bg-white focus:outline-none focus:border-[#54228A]"
                >
                  <option value="Detached Luxury Villa / Duplex">Detached Luxury Villa / Duplex</option>
                  <option value="Semi-Detached / Terrace House">Semi-Detached / Terrace House</option>
                  <option value="Penthouse / Luxury Apartment">Penthouse / Luxury Apartment</option>
                  <option value="Commercial Office Headquarters">Commercial Office Headquarters</option>
                  <option value="Multi-Unit Residential Development">
                    Multi-Unit Residential Development
                  </option>
                  <option value="Hospitality / Boutique Hotel">Hospitality / Boutique Hotel</option>
                  <option value="Complete Structural Renovation">Complete Structural Renovation</option>
                  <option value="Other Architectural Project">Other Architectural Project</option>
                </select>
              </div>

              {/* Project Stage */}
              <div>
                <label
                  htmlFor="projectStage"
                  className="block font-sans text-xs uppercase tracking-wider text-[#241333] font-medium mb-1.5"
                >
                  Current Project Stage <span className="text-red-500">*</span>
                </label>
                <select
                  id="projectStage"
                  name="projectStage"
                  value={formData.projectStage}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-[#F7F5F8] border border-[#241333]/15 text-sm text-[#241333] focus:bg-white focus:outline-none focus:border-[#54228A]"
                >
                  <option value="Land Acquired / Ready for Architectural Planning">
                    Land Acquired / Ready for Architectural Planning
                  </option>
                  <option value="Approved Blueprints Available / Mobilization Stage">
                    Approved Blueprints Available / Mobilization Stage
                  </option>
                  <option value="Active Build / Quality Assurance or Finishing Takeover">
                    Active Build / Quality Assurance or Finishing Takeover
                  </option>
                  <option value="Existing Building / Complete Remodeling Required">
                    Existing Building / Complete Remodeling Required
                  </option>
                  <option value="Early Concept Exploration & Feasibility">
                    Early Concept Exploration &amp; Feasibility
                  </option>
                </select>
              </div>

              {/* Estimated Budget in Nigerian Naira */}
              <div>
                <label
                  htmlFor="budgetRangeNaira"
                  className="block font-sans text-xs uppercase tracking-wider text-[#241333] font-medium mb-1.5"
                >
                  Estimated Budget (NGN ₦) <span className="text-red-500">*</span>
                </label>
                <select
                  id="budgetRangeNaira"
                  name="budgetRangeNaira"
                  value={formData.budgetRangeNaira}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-[#F7F5F8] border border-[#241333]/15 text-sm text-[#241333] focus:bg-white focus:outline-none focus:border-[#54228A]"
                >
                  <option value="₦15,000,000 – ₦35,000,000">₦15,000,000 – ₦35,000,000</option>
                  <option value="₦35,000,000 – ₦75,000,000">₦35,000,000 – ₦75,000,000</option>
                  <option value="₦75,000,000 – ₦150,000,000">₦75,000,000 – ₦150,000,000</option>
                  <option value="₦150,000,000 – ₦300,000,000">₦150,000,000 – ₦300,000,000</option>
                  <option value="₦300,000,000 – ₦600,000,000+">₦300,000,000 – ₦600,000,000+</option>
                  <option value="Undisclosed / Bespoke Architecture">
                    Undisclosed / Bespoke Architecture
                  </option>
                </select>
              </div>

              {/* Desired Timeframe */}
              <div>
                <label
                  htmlFor="timeframe"
                  className="block font-sans text-xs uppercase tracking-wider text-[#241333] font-medium mb-1.5"
                >
                  Desired Timeline
                </label>
                <select
                  id="timeframe"
                  name="timeframe"
                  value={formData.timeframe}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-[#F7F5F8] border border-[#241333]/15 text-sm text-[#241333] focus:bg-white focus:outline-none focus:border-[#54228A]"
                >
                  <option value="Immediate (Within 30 Days)">Immediate (Within 30 Days)</option>
                  <option value="1 – 3 Months">1 – 3 Months</option>
                  <option value="3 – 6 Months">3 – 6 Months</option>
                  <option value="6 – 12 Months">6 – 12 Months</option>
                  <option value="Flexible / Strategic Planning">Flexible / Strategic Planning</option>
                </select>
              </div>
            </div>
          </div>

          {/* Section 3: Project Vision & Optional Plans */}
          <div className="pt-6 border-t border-[#241333]/10">
            <h3 className="font-serif text-lg font-medium text-[#241333] mb-4 flex items-center gap-2">
              <span className="w-5 h-5 bg-[#54228A] text-white text-[11px] font-sans flex items-center justify-center">
                3
              </span>
              Project Brief &amp; Document Upload
            </h3>

            {/* Description Textarea */}
            <div>
              <label
                htmlFor="projectDescription"
                className="block font-sans text-xs uppercase tracking-wider text-[#241333] font-medium mb-1.5"
              >
                Project Description &amp; Specific Requirements <span className="text-red-500">*</span>
              </label>
              <textarea
                id="projectDescription"
                name="projectDescription"
                rows={4}
                value={formData.projectDescription}
                onChange={handleInputChange}
                placeholder="Share details regarding your site dimensions, architectural vision, desired materials, number of rooms/wings, or specific finishing standards you expect..."
                className={`w-full px-4 py-3 bg-[#F7F5F8] border text-sm text-[#241333] placeholder:text-neutral-400 focus:bg-white focus:outline-none focus:border-[#54228A] transition-colors leading-relaxed ${
                  errors.projectDescription ? "border-red-500" : "border-[#241333]/15"
                }`}
              />
              {errors.projectDescription && (
                <p className="text-red-500 text-xs mt-1 font-sans">
                  {errors.projectDescription}
                </p>
              )}
            </div>

            {/* File Upload (Optional reference image or drawing) */}
            <div className="mt-5">
              <label className="block font-sans text-xs uppercase tracking-wider text-[#241333] font-medium mb-1.5">
                Optional Reference Material (Architectural Drawings, Survey, or Mood Board)
              </label>

              {!uploadedFile ? (
                <label className="border-2 border-dashed border-[#241333]/20 hover:border-[#54228A] transition-colors p-6 flex flex-col items-center justify-center cursor-pointer bg-[#F7F5F8]/60 hover:bg-[#F7F5F8]">
                  <Upload className="w-6 h-6 text-[#54228A] mb-2" />
                  <span className="font-sans text-xs font-medium text-[#241333]">
                    Click to select architectural file or drag &amp; drop
                  </span>
                  <span className="font-sans text-[11px] text-neutral-500 mt-1">
                    PDF, JPG, PNG or CAD reference up to 10MB
                  </span>
                  <input
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png,.dwg"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </label>
              ) : (
                <div className="flex items-center justify-between p-4 bg-[#F7F5F8] border border-[#54228A]/30">
                  <div className="flex items-center gap-3">
                    <FileText className="w-6 h-6 text-[#54228A]" />
                    <div>
                      <p className="text-xs font-medium text-[#241333] truncate max-w-xs sm:max-w-md">
                        {uploadedFile.name}
                      </p>
                      <span className="text-[10px] text-neutral-500 font-sans">
                        {uploadedFile.size} &bull; Attached to inquiry
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={removeFile}
                    className="p-1 text-neutral-400 hover:text-red-600 transition-colors"
                    aria-label="Remove uploaded file"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}
              {errors.file && (
                <p className="text-red-500 text-xs mt-1 font-sans">{errors.file}</p>
              )}
            </div>
          </div>

          {/* Privacy Consent Checkbox */}
          <div className="pt-4 border-t border-[#241333]/10">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="privacyConsent"
                checked={formData.privacyConsent}
                onChange={handleInputChange}
                className="mt-1 w-4 h-4 text-[#54228A] rounded border-neutral-300 focus:ring-[#54228A]"
              />
              <span className="font-sans text-xs text-[#241333]/80 leading-relaxed">
                I agree to the{" "}
                <Link
                  href="/privacy-policy"
                  target="_blank"
                  className="text-[#54228A] underline hover:text-[#3B1463]"
                >
                  Peace Jet Privacy Policy
                </Link>{" "}
                and consent to receiving project consultation correspondence, architectural proposals, and cost estimates from Peace Jet Construction &amp; Design.
              </span>
            </label>
            {errors.privacyConsent && (
              <p className="text-red-500 text-xs mt-1.5 font-sans">
                {errors.privacyConsent}
              </p>
            )}
          </div>

          {/* Submit Action */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-neutral-500 font-sans">
              <ShieldCheck className="w-4 h-4 text-[#C6A04A]" />
              <span>Direct review by senior architectural &amp; engineering directors</span>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto px-8 py-4 bg-[#54228A] text-white font-sans text-xs uppercase tracking-[0.15em] font-medium hover:bg-[#3B1463] transition-all duration-300 shadow-luxury hover:shadow-luxury-hover flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {isSubmitting ? (
                <span>Transmitting Project Brief...</span>
              ) : (
                <>
                  <span>Submit Project Inquiry</span>
                  <Send className="w-4 h-4 text-[#E0BF72]" />
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
