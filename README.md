# Peace Jet Construction & Design

**"Building Your Vision. Creating Lasting Value."**  
*Building comfort, style and luxury*

A complete, premium, multi-page business website for **Peace Jet Construction & Design** (P.E.A.C.E Jet Associates Enterprise), a female-owned luxury construction and interior architecture firm based in Lagos, Nigeria.

---

## Brand Identity & Palette

- **Royal Purple:** `#54228A`
- **Deep Purple:** `#241333`
- **Champagne Gold:** `#C6A04A` (with metallic shimmer `#E0BF72`)
- **Soft Neutral:** `#F7F5F8`
- **White:** `#FFFFFF`

---

## Verified Company Contact Information

All company contact coordinates are centralized in [`src/data/companyConfig.ts`](file:///c:/Users/USER/Documents/peacejet-construction/src/data/companyConfig.ts):

- **Primary Direct Line (Call & WhatsApp):** `08160410424` (`+234 816 041 0424`)
- **Secondary Direct Line (Call & WhatsApp):** `07039061747` (`+234 703 906 1747`)
- **Official Email:** `p.e.a.c.ejetassociatesenterprise49@gmail.com`
- **Headquarters Location:** Lagos, Lagos State, Nigeria
- **Brand Logo Asset:** [`public/logo.jpg`](file:///c:/Users/USER/Documents/peacejet-construction/public/logo.jpg) (also preserved as `public/SAVE_20260928_141217.jpg.jpeg`)

---

## Pages & Structure

1. **[Home](file:///c:/Users/USER/Documents/peacejet-construction/src/app/page.tsx) (`/`)**
   - Architectural Hero section with tagline, female-owned credentials badge, and quick CTAs
   - Company narrative & philosophy
   - Capabilities showcase (13 configurable building services)
   - Architectural folio concepts with category filters
   - Why Choose Peace Jet (6 core pillars)
   - 4-Step project methodology (Consultation, Planning, Execution, Handover)
   - Client reviews (with explicit awaiting-review notice)
   - FAQ accordion
   - Full footer with verified contact lines

2. **[About Us](file:///c:/Users/USER/Documents/peacejet-construction/src/app/about/page.tsx) (`/about`)**
   - Company origin story, female executive leadership in construction, core values, and geographic reach across Lagos, Nigeria, and international diaspora clients.

3. **[Services](file:///c:/Users/USER/Documents/peacejet-construction/src/app/services/page.tsx) (`/services`)**
   - All 13 configurable building and design divisions with features, deliverables, and fast jump navigation:
     1. Luxury residential construction
     2. Office and commercial construction
     3. Architectural design and planning
     4. Interior design and space planning
     5. Renovation and remodelling
     6. Building finishing and fittings
     7. Kitchen cabinetry and wardrobes
     8. Flooring, tiling, and wall finishes
     9. Roofing and ceiling installations
     10. Plumbing and electrical installations
     11. Doors, windows, lighting, and fixtures
     12. Painting and decorative finishes
     13. Project coordination and site supervision

4. **[Projects](file:///c:/Users/USER/Documents/peacejet-construction/src/app/projects/page.tsx) (`/projects`)**
   - Interactive category filtering (All, Residential, Commercial, Interior Design, Renovation)
   - 6 detailed illustrative concept projects with explicit transparency notices:
     - The Solarium Duplex Villa (Old Ikoyi)
     - Aura Residence (Lekki Phase 1)
     - The Obsidian Terraces (Victoria Island)
     - Apex Corporate Suite (Eko Atlantic City)
     - The Grand Haven Salon & Gourmet Kitchen (Banana Island)
     - The Heritage Restyle (Ikeja GRA)

5. **[Project Details](file:///c:/Users/USER/Documents/peacejet-construction/src/app/projects/%5Bid%5D/page.tsx) (`/projects/[id]`)**
   - Dynamic route with pre-rendered static paths (`generateStaticParams`)
   - High-resolution perspective gallery, architectural data sheets, materials palette, and commission actions.

6. **[Contact](file:///c:/Users/USER/Documents/peacejet-construction/src/app/contact/page.tsx) (`/contact`)**
   - Verified contact cards with direct call links, direct WhatsApp chat buttons for both lines, location info, and working message submission form.

7. **[Request a Quote](file:///c:/Users/USER/Documents/peacejet-construction/src/app/request-quote/page.tsx) (`/request-quote`)**
   - Comprehensive interactive onboarding form with Nigerian Naira budget bands, project stages, timeframe, optional architectural drawings upload preview, privacy consent, and live reference code generation.

8. **[Privacy Policy](file:///c:/Users/USER/Documents/peacejet-construction/src/app/privacy-policy/page.tsx) (`/privacy-policy`)**
   - Compliance with NDPA/NDPR, non-disclosure confidentiality, and architectural asset protection.

9. **SEO & Automation**
   - [`src/app/robots.ts`](file:///c:/Users/USER/Documents/peacejet-construction/src/app/robots.ts)
   - [`src/app/sitemap.ts`](file:///c:/Users/USER/Documents/peacejet-construction/src/app/sitemap.ts)
   - JSON-LD `HomeAndConstructionBusiness` Schema metadata.

---

## Technology Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS with custom brand design tokens
- **Typography:** Cormorant Garamond (luxury serif) & Plus Jakarta Sans (geometric sans)
- **Icons:** Lucide React
- **Hosting / Runtime:** Node.js v22+

---

## Local Development & Production

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build optimized production bundle
npm run build

# Start production server
npm run start
```
