"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectFilter } from "@/components/projects/ProjectFilter";
import { ConceptNotice } from "@/components/ui/ConceptNotice";
import { Button } from "@/components/ui/Button";
import { projectsData, getProjectsByCategory } from "@/data/projectsData";
import { Sparkles, Info, Building } from "lucide-react";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProjects = getProjectsByCategory(selectedCategory);

  const counts: Record<string, number> = {
    all: projectsData.length,
    residential: projectsData.filter((p) => p.category === "residential").length,
    commercial: projectsData.filter((p) => p.category === "commercial").length,
    interior: projectsData.filter((p) => p.category === "interior").length,
    renovation: projectsData.filter((p) => p.category === "renovation").length,
  };

  return (
    <div className="bg-[#F7F5F8] min-h-screen">
      {/* Editorial Page Header */}
      <section className="relative py-24 sm:py-32 bg-[#241333] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop"
            alt="Peace Jet Concept Architecture"
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
                Architectural Concept Folio
              </span>
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl font-light tracking-tight text-white leading-tight">
              Design Visions &amp; Architectural Studies.
            </h1>
            <p className="mt-6 text-base sm:text-xl text-neutral-300 font-sans font-light leading-relaxed">
              Explore our spatial explorations across luxury residential duplexes, contemporary corporate suites, and transformative renovations in prime Lagos neighborhoods.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Explicit Concept Notice per brief instructions */}
          <div className="mb-10">
            <ConceptNotice />
          </div>

          {/* Filter Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 mb-8 border-b border-[#241333]/10">
            <ProjectFilter
              currentCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
              counts={counts}
            />

            <span className="text-xs font-sans text-[#241333]/60 uppercase tracking-wider">
              Showing {filteredProjects.length} of {projectsData.length} Architectural Studies
            </span>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                priority={idx < 3}
              />
            ))}
          </div>

          {/* Bottom Custom Build CTA Strip */}
          <div className="mt-20 p-8 sm:p-12 bg-white border border-[#241333]/10 shadow-luxury flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="max-w-2xl">
              <span className="font-sans text-xs uppercase tracking-[0.2em] font-semibold text-[#C6A04A]">
                Custom Architectural Engagements
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#241333] mt-2">
                Ready to commission an architectural study for your property?
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#241333]/70 mt-2 leading-relaxed">
                Whether you possess land in Ikoyi, Eko Atlantic, Lekki, Abuja, or are modernizing a legacy building, our team provides 3D conceptual modeling, engineering drawings, and Lagos planning submissions.
              </p>
            </div>
            <div className="flex-shrink-0 flex flex-col sm:flex-row gap-3">
              <Button href="/request-quote" variant="gold" size="md" icon>
                Request Proposal
              </Button>
              <Button href="/contact" variant="outline" size="md">
                Consult With Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
