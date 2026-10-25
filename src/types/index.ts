export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  category: 'construction' | 'interior' | 'technical' | 'management';
  features: string[];
  deliverables: string[];
  imageUrl: string;
  enabled: boolean; // Configurable so unconfirmed services can be toggled
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: 'residential' | 'commercial' | 'interior' | 'renovation' | 'architectural';
  categoryLabel: string;
  location: string;
  year: string;
  scope: string;
  status: 'Concept Study' | 'Architectural Visualization' | 'Under Development' | 'Completed';
  isConcept: boolean; // Explicit label per instruction: Never claim concept images are completed projects
  featured: boolean;
  heroImage: string;
  gallery: {
    url: string;
    caption: string;
  }[];
  overview: string;
  architecturalHighlights: string[];
  materialPalette: string[];
  specs: {
    plotOrFloorArea: string;
    levelsOrRooms: string;
    timeline: string;
    serviceProvided: string;
  };
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  role: string;
  location: string;
  projectType: string;
  quote: string;
  rating: number;
  isConceptReview: boolean; // Marked clearly as awaiting genuine reviews
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface QuoteFormData {
  fullName: string;
  email: string;
  phone: string;
  countryCode: string;
  preferredContact: 'phone' | 'whatsapp' | 'email';
  requiredService: string;
  projectLocation: string;
  propertyType: string;
  projectStage: string;
  budgetRangeNaira: string;
  timeframe: string;
  projectDescription: string;
  referenceFileUrl?: string;
  privacyConsent: boolean;
}
