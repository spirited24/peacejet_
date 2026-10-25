import React from "react";
import { companyConfig, hasValidWhatsApp } from "@/data/companyConfig";
import { MessageCircle } from "lucide-react";

export const WhatsAppButton: React.FC = () => {
  // Only display if a valid WhatsApp number is configured in the company configuration
  if (!hasValidWhatsApp(companyConfig)) {
    return null;
  }

  const rawPhone = companyConfig.contact.whatsapp.replace(/\D/g, "");
  const defaultText = encodeURIComponent(
    `Hello Peace Jet Construction & Design! I would like to inquire about your architectural & construction services in Lagos.`
  );
  const whatsappUrl = `https://wa.me/${rawPhone}?text=${defaultText}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Peace Jet Construction on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 bg-[#25D366] text-white rounded-full shadow-2xl hover:bg-[#1EBE5D] transition-all duration-300 hover:scale-105 group border-2 border-white"
    >
      <div className="relative">
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full animate-ping" />
      </div>
      <span className="font-sans text-xs font-semibold tracking-wider uppercase hidden sm:inline-block">
        Chat on WhatsApp
      </span>
    </a>
  );
};
