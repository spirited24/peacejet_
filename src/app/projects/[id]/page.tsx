import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { projectsData, getProjectBySlug } from "@/data/projectsData";
import { ConceptNotice } from "@/components/ui/ConceptNotice";
import { Button } from "@/components/ui/Button";
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Layers,
  Ruler,
  Clock,
  Sparkles,
  CheckCircle2,
  Share2,
} from "lucide-react";

interface Props {
  params: { id: string };
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProjectBySlug(params.id);
  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Architectural Concept Study`,
    description: `${project.tagline}. An illustrative architectural study by Peace Jet Construction & Design in ${project.location}.`,
    openGraph: {
      title: `${project.title} - Peace Jet Architectural Concept`,
      description: project.tagline,
      images: [{ url: project.heroImage }],
    },
  };
}

export default function ProjectDetailsPage({ params }: Props) {
  const project = getProjectBySlug(params.id);

  if (!project) {
    notFound();
  }

  return (
    <article className="bg-[#F7F5F8] min-h-screen">
      {/* Top Breadcrumb & Action Bar */}
      <div className="bg-white border-b border-[#241333]/10 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs uppercase font-sans font-medium tracking-wider text-[#241333]/70 hover:text-[#54228A] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Architectural Folio</span>
          </Link>

          <div className="flex items-center gap-3">
            {project.isConcept && <ConceptNotice compact />}
          </div>
        </div>
      </div>

      {/* Hero Presentation */}
      <header className="relative bg-[#241333] text-white py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            priority
            className="object-cover opacity-35 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#241333] via-[#241333]/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3.5 py-1 bg-white/10 backdrop-blur-md text-[#E0BF72] font-sans text-xs font-semibold tracking-widest uppercase border border-[#C6A04A]/30">
                {project.categoryLabel}
              </span>
              <div className="flex items-center gap-1.5 text-xs text-white/80 font-sans">
                <MapPin className="w-3.5 h-3.5 text-[#C6A04A]" />
                <span>{project.location}</span>
              </div>
              <span className="text-white/40">&bull;</span>
              <div className="flex items-center gap-1.5 text-xs text-white/80 font-sans">
                <Calendar className="w-3.5 h-3.5 text-[#C6A04A]" />
                <span>{project.year}</span>
              </div>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-white leading-tight">
              {project.title}
            </h1>

            <p className="mt-4 text-base sm:text-xl text-neutral-200 font-sans font-light leading-relaxed max-w-2xl">
              {project.tagline}
            </p>
          </div>
        </div>
      </header>

      {/* Main Spec & Detail Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Explicit Concept Notice per brief instructions */}
        <div className="mb-12">
          <ConceptNotice />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content & Gallery */}
          <div className="lg:col-span-8 space-y-12">
            {/* Overview Section */}
            <div className="bg-white p-8 sm:p-10 border border-[#241333]/10 shadow-sm">
              <h2 className="font-serif text-2xl font-medium text-[#241333] mb-4">
                Architectural Concept Overview
              </h2>
              <p className="font-sans text-sm sm:text-base text-[#241333]/80 leading-relaxed">
                {project.overview}
              </p>

              {/* Architectural Highlights */}
              <div className="mt-8 pt-8 border-t border-[#241333]/10">
                <h3 className="font-serif text-lg font-medium text-[#241333] mb-4 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#C6A04A]" />
                  <span>Key Architectural Innovations</span>
                </h3>
                <ul className="space-y-3">
                  {project.architecturalHighlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 font-sans text-xs sm:text-sm text-[#241333]/80 leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#54228A] flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Material Palette */}
              <div className="mt-8 pt-8 border-t border-[#241333]/10">
                <h3 className="font-serif text-lg font-medium text-[#241333] mb-4 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#C6A04A]" />
                  <span>Curated Material &amp; Finish Palette</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.materialPalette.map((mat, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-[#F7F5F8] border border-[#241333]/5 text-xs font-sans text-[#241333] flex items-center gap-2"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#C6A04A]" />
                      <span>{mat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Gallery Images */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-serif text-2xl font-medium text-[#241333]">
                  Architectural Perspectives &amp; Interior Studies
                </h2>
                <span className="text-xs font-sans text-[#241333]/60 uppercase tracking-wider">
                  {project.gallery.length} Plates
                </span>
              </div>

              <div className="space-y-8">
                {project.gallery.map((image, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-[#241333]/10 overflow-hidden shadow-sm group"
                  >
                    <div className="relative aspect-[16/10] bg-neutral-900">
                      <Image
                        src={image.url}
                        alt={`${project.title} - Perspective ${idx + 1}`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 800px"
                        className="object-cover transition-transform duration-700 group-hover:scale-102"
                      />
                    </div>
                    <div className="p-4 bg-white border-t border-[#241333]/10 flex items-center justify-between text-xs font-sans text-[#241333]/70">
                      <span>{image.caption}</span>
                      <span className="font-mono text-[#54228A] font-semibold text-[11px]">
                        PLATE 0{idx + 1}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Specifications & Inquire Card */}
          <aside className="lg:col-span-4 space-y-8">
            {/* Project Specs Card */}
            <div className="bg-white p-6 sm:p-8 border border-[#241333]/10 shadow-sm sticky top-28">
              <span className="font-sans text-xs uppercase tracking-[0.2em] font-semibold text-[#C6A04A] block mb-2">
                Concept Specifications
              </span>
              <h3 className="font-serif text-xl font-medium text-[#241333] pb-4 border-b border-[#241333]/10">
                Technical Data Sheet
              </h3>

              <div className="mt-5 space-y-4 font-sans text-xs">
                <div>
                  <span className="text-neutral-500 uppercase tracking-wider text-[10px] block">
                    Project Classification
                  </span>
                  <span className="font-medium text-[#241333] text-sm block mt-0.5">
                    {project.categoryLabel}
                  </span>
                </div>

                <div>
                  <span className="text-neutral-500 uppercase tracking-wider text-[10px] block">
                    Location &amp; Setting
                  </span>
                  <span className="font-medium text-[#241333] text-sm block mt-0.5">
                    {project.location}
                  </span>
                </div>

                <div>
                  <span className="text-neutral-500 uppercase tracking-wider text-[10px] block">
                    Scope of Work
                  </span>
                  <span className="font-medium text-[#241333] text-sm block mt-0.5">
                    {project.scope}
                  </span>
                </div>

                <div>
                  <span className="text-neutral-500 uppercase tracking-wider text-[10px] block">
                    Spatial Area
                  </span>
                  <span className="font-medium text-[#241333] text-sm block mt-0.5">
                    {project.specs.plotOrFloorArea}
                  </span>
                </div>

                <div>
                  <span className="text-neutral-500 uppercase tracking-wider text-[10px] block">
                    Levels &amp; Accommodations
                  </span>
                  <span className="font-medium text-[#241333] text-sm block mt-0.5">
                    {project.specs.levelsOrRooms}
                  </span>
                </div>

                <div>
                  <span className="text-neutral-500 uppercase tracking-wider text-[10px] block">
                    Estimated Construction Timeline
                  </span>
                  <span className="font-medium text-[#241333] text-sm block mt-0.5">
                    {project.specs.timeline}
                  </span>
                </div>

                <div>
                  <span className="text-neutral-500 uppercase tracking-wider text-[10px] block">
                    Current Study Status
                  </span>
                  <span className="inline-block mt-1 px-2.5 py-1 bg-[#54228A]/10 text-[#54228A] font-semibold text-[11px]">
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Inquiry Action */}
              <div className="mt-8 pt-6 border-t border-[#241333]/10 flex flex-col gap-3">
                <Button href="/request-quote" variant="gold" size="md" icon className="w-full text-center">
                  Commission Similar Project
                </Button>
                <Button href="/contact" variant="outline" size="sm" className="w-full text-center">
                  Consult With Our Architects
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
