export interface CompanyConfig {
  name: string;
  legalName: string;
  tagline: string;
  secondaryTagline: string;
  shortDescription: string;
  logoUrl: string;
  location: {
    city: string;
    state: string;
    country: string;
    addressLine?: string;
  };
  contact: {
    // Verified primary phone
    phone: string;
    // Verified secondary phone
    secondaryPhone: string;
    // Verified WhatsApp number with international country code
    whatsapp: string;
    // Verified secondary WhatsApp
    whatsappSecondary: string;
    // Verified official contact email
    email: string;
    // Inquiry recipient email
    inquiryEmail: string;
    // Business operating hours
    operatingHours: string;
  };
  socialLinks: {
    instagram?: string;
    linkedin?: string;
    facebook?: string;
    twitter?: string;
  };
  brand: {
    royalPurple: string;
    deepPurple: string;
    champagneGold: string;
    softNeutral: string;
    white: string;
  };
  femaleOwnedBadge: string;
  establishmentYear: number;
}

export const companyConfig: CompanyConfig = {
  name: "Peace Jet Construction & Design",
  legalName: "P.E.A.C.E Jet Associates Enterprise / Construction & Design",
  tagline: "Building Your Vision. Creating Lasting Value.",
  secondaryTagline: "Building comfort, style and luxury",
  shortDescription:
    "A premier female-owned construction and interior design company based in Lagos, Nigeria. Delivering luxury residential estates, sophisticated corporate environments, bespoke interior architecture, and comprehensive building renovations.",
  logoUrl: "/logo.jpg",
  location: {
    city: "Lagos",
    state: "Lagos State",
    country: "Nigeria",
    addressLine: "Lagos, Nigeria",
  },
  contact: {
    phone: "+234 816 041 0424",
    secondaryPhone: "+234 703 906 1747",
    whatsapp: "+2348160410424",
    whatsappSecondary: "+2347039061747",
    email: "p.e.a.c.ejetassociatesenterprise49@gmail.com",
    inquiryEmail: "p.e.a.c.ejetassociatesenterprise49@gmail.com",
    operatingHours: "Monday – Friday: 8:00 AM – 6:00 PM (WAT) | Saturday: By Appointment",
  },
  socialLinks: {
    instagram: "https://www.instagram.com/p.e.a.c.ejetinteriors01_?cplk=cjJpZnNxZ2xsMXE1",
    linkedin: "https://linkedin.com/company/peacejet-construction",
  },
  brand: {
    royalPurple: "#54228A",
    deepPurple: "#241333",
    champagneGold: "#C6A04A",
    softNeutral: "#F7F5F8",
    white: "#FFFFFF",
  },
  femaleOwnedBadge: "Proudly Female-Owned & Architectural Excellence",
  establishmentYear: 2024,
};

// Helper to determine if WhatsApp chat trigger should be rendered
export const hasValidWhatsApp = (config: CompanyConfig = companyConfig): boolean => {
  return Boolean(config.contact.whatsapp && config.contact.whatsapp.replace(/\D/g, '').length >= 10);
};
