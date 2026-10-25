"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { companyConfig, hasValidWhatsApp } from "@/data/companyConfig";
import { Menu, X, Phone, MessageSquare, MapPin, Sparkles } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const showWhatsApp = hasValidWhatsApp(companyConfig);
  const rawWhatsApp = companyConfig.contact.whatsapp.replace(/\D/g, "");

  return (
    <>
      {/* Top Utility Bar */}
      <div className="bg-[#241333] text-white/80 text-[11px] font-sans border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5 text-white/90">
              <Sparkles className="w-3.5 h-3.5 text-[#C6A04A]" />
              <span className="tracking-wider uppercase font-medium text-[#E0BF72]">
                {companyConfig.femaleOwnedBadge}
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-white/70">
              <MapPin className="w-3 h-3 text-[#C6A04A]" />
              <span>Headquartered in Lagos, Nigeria — Serving Nationwide &amp; Diaspora Clients</span>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <div className="flex items-center gap-3">
              <Phone className="w-3 h-3 text-[#C6A04A]" />
              <a
                href={`tel:${companyConfig.contact.phone.replace(/\s+/g, '')}`}
                className="hover:text-[#C6A04A] transition-colors"
              >
                {companyConfig.contact.phone}
              </a>
              <span className="text-white/30">|</span>
              <a
                href={`tel:${companyConfig.contact.secondaryPhone.replace(/\s+/g, '')}`}
                className="hover:text-[#C6A04A] transition-colors"
              >
                {companyConfig.contact.secondaryPhone}
              </a>
            </div>
            {showWhatsApp && (
              <a
                href={`https://wa.me/${rawWhatsApp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#C6A04A] transition-colors bg-[#25D366]/15 px-2 py-0.5 rounded text-[#25D366]"
              >
                <MessageSquare className="w-3 h-3 text-[#25D366]" />
                <span className="font-medium">WhatsApp</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-3.5 border-b border-[#241333]/5"
            : "bg-white py-5 border-b border-[#241333]/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Logo variant="dark" />

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-xs uppercase tracking-[0.18em] font-medium transition-all duration-200 relative py-1 ${
                    isActive
                      ? "text-[#54228A] font-semibold"
                      : "text-[#241333]/80 hover:text-[#54228A]"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C6A04A]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <Button href="/request-quote" variant="primary" size="sm" icon>
              Request a Quote
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-3 lg:hidden">
            <Button href="/request-quote" variant="gold" size="sm" className="px-3 py-2 text-[10px]">
              Quote
            </Button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              className="p-2 text-[#241333] hover:text-[#54228A] focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Slide-out Panel */}
        <div
          className={`fixed top-0 right-0 bottom-0 w-full max-w-sm bg-[#241333] text-white p-6 shadow-2xl flex flex-col justify-between transform transition-transform duration-300 ease-out ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <Logo variant="light" />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-white/80 hover:text-white"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="mt-4 px-3 py-2 bg-white/5 border border-[#C6A04A]/30 text-[11px] text-[#E0BF72] flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#C6A04A]" />
              <span>{companyConfig.femaleOwnedBadge}</span>
            </div>

            <nav className="mt-8 flex flex-col gap-4">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-lg font-serif tracking-wider uppercase py-2 transition-colors flex items-center justify-between border-b border-white/5 ${
                      isActive ? "text-[#C6A04A] font-semibold" : "text-white/85 hover:text-[#C6A04A]"
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-[#C6A04A]" />}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
            <Button
              href="/request-quote"
              variant="gold"
              size="md"
              icon
              className="w-full text-center"
            >
              Request a Project Quote
            </Button>

            <div className="flex flex-col gap-2 pt-2 border-t border-white/10 text-center">
              <span className="text-[10px] text-white/50 uppercase tracking-wider font-sans">
                Direct Contact Lines
              </span>
              <a
                href={`tel:${companyConfig.contact.phone.replace(/\s+/g, '')}`}
                className="flex items-center justify-center gap-2 text-xs font-sans text-white/90 hover:text-[#C6A04A]"
              >
                <Phone className="w-3.5 h-3.5 text-[#C6A04A]" />
                <span>{companyConfig.contact.phone}</span>
              </a>
              <a
                href={`tel:${companyConfig.contact.secondaryPhone.replace(/\s+/g, '')}`}
                className="flex items-center justify-center gap-2 text-xs font-sans text-white/90 hover:text-[#C6A04A]"
              >
                <Phone className="w-3.5 h-3.5 text-[#C6A04A]" />
                <span>{companyConfig.contact.secondaryPhone}</span>
              </a>
            </div>

            {showWhatsApp && (
              <a
                href={`https://wa.me/${rawWhatsApp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-xs font-sans text-[#25D366] bg-[#25D366]/10 py-2.5 border border-[#25D366]/30"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
