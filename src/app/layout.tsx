import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { companyConfig } from "@/data/companyConfig";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Peace Jet Construction & Design | Luxury Construction & Interior Architecture Lagos",
    template: "%s | Peace Jet Construction & Design",
  },
  description:
    "Premier female-owned luxury construction, architectural design, and interior architecture company based in Lagos, Nigeria. Delivering bespoke residential duplexes, corporate offices, and precision renovations across Nigeria and for international diaspora clients.",
  keywords: [
    "Peace Jet Construction",
    "Luxury Construction Lagos",
    "Female-owned construction Nigeria",
    "Architectural Design Lagos",
    "Interior Design Ikoyi Victoria Island",
    "Building Contractor Lagos Nigeria",
    "Residential Renovation Lekki",
    "Diaspora Building Project Management Nigeria",
    "Turnkey Construction Nigeria",
  ],
  authors: [{ name: "Peace Jet Construction & Design" }],
  creator: "Peace Jet Construction & Design",
  publisher: "Peace Jet Construction & Design",
  metadataBase: new URL("https://peacejetconstruction.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Peace Jet Construction & Design | Building Your Vision. Creating Lasting Value.",
    description:
      "Premier female-owned luxury construction and interior design company based in Lagos, Nigeria. Dedicated to architectural excellence, superior finishing, and transparent milestone delivery.",
    url: "https://peacejetconstruction.com",
    siteName: "Peace Jet Construction & Design",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200",
        width: 1200,
        height: 630,
        alt: "Peace Jet Construction & Design Luxury Architecture",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Peace Jet Construction & Design | Luxury Construction & Design Lagos",
    description:
      "Building Your Vision. Creating Lasting Value. Premier female-owned architectural design & luxury construction in Lagos, Nigeria.",
    images: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/android-chrome-512x512.png",
      },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data Schema for Local Business / General Contractor in Lagos
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: companyConfig.legalName,
    alternateName: companyConfig.name,
    description: companyConfig.shortDescription,
    url: "https://peacejetconstruction.com",
    telephone: companyConfig.contact.phone || "+234",
    email: companyConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: companyConfig.location.city,
      addressRegion: companyConfig.location.state,
      addressCountry: companyConfig.location.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "6.4549",
      longitude: "3.4246",
    },
    priceRange: "₦₦₦₦",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    slogan: companyConfig.tagline,
  };

  return (
    <html lang="en" className={`${cormorant.variable} ${jakarta.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#54228A" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased text-[#241333] bg-white selection:bg-[#54228A] selection:text-[#E0BF72]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
