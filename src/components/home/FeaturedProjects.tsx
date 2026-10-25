"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectFilter } from "@/components/projects/ProjectFilter";
import { ConceptNotice } from "@/components/ui/ConceptNotice";
import { projectsData, getProjectsByCategory } from "@/data/projectsData";

export const FeaturedProjects: React.FC = () => {
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
    <section className="py-20 sm:py-28 bg-[#F7F5F8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8">
          <SectionHeading
            eyebrow="Architectural Folio"
            title="Curated Concepts &amp; Design Visions"
            subtitle="Explore our architectural and spatial studies spanning prime residential enclaves and commercial districts in Lagos."
          />
          <div className="flex-shrink-0">
            <Button href="/projects" variant="primary" size="md" icon>
              View Full Folio
            </Button>
          </div>
        </div>

        {/* Clear Concept Disclaimer Notice per Brief Instructions */}
        <div className="my-6">
          <ConceptNotice />
        </div>

        {/* Filter Controls */}
        <div className="mt-8 mb-10">
          <ProjectFilter
            currentCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            counts={counts}
          />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              priority={idx < 2}
            />
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 p-8 bg-white border border-[#241333]/10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h4 className="font-serif text-xl font-medium text-[#241333]">
              Have a bespoke plot or renovation in Lagos or nationwide?
            </h4>
            <p className="font-sans text-xs sm:text-sm text-[#241333]/70 mt-1">
              Our architects will produce tailored 3D schematic models, BOQ feasibility, and structural plans for your review.
            </p>
          </div>
          <Button href="/request-quote" variant="gold" size="md" icon>
            Request Proposal &amp; Feasibility
          </Button>
        </div>
      </div>
    </section>
  );
};
