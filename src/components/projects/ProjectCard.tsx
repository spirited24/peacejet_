import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ProjectItem } from "@/types";
import { ArrowUpRight, MapPin } from "lucide-react";
import { ConceptNotice } from "@/components/ui/ConceptNotice";

interface ProjectCardProps {
  project: ProjectItem;
  priority?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  priority = false,
}) => {
  return (
    <article className="group relative flex flex-col bg-white border border-[#241333]/10 overflow-hidden shadow-sm hover:shadow-luxury-hover transition-all duration-500">
      {/* Image Container with Editorial Aspect Ratio */}
      <div className="relative aspect-[16/11] sm:aspect-[16/10] overflow-hidden bg-neutral-900">
        <Image
          src={project.heroImage}
          alt={`${project.title} - ${project.categoryLabel}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={priority}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 z-10">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-[#241333] font-sans text-[11px] font-semibold tracking-wider uppercase">
            {project.categoryLabel}
          </span>
          {project.isConcept && <ConceptNotice compact />}
        </div>

        {/* Bottom Image Info */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white z-10">
          <div className="flex items-center gap-1.5 text-xs font-sans text-white/90">
            <MapPin className="w-3.5 h-3.5 text-[#C6A04A]" />
            <span>{project.location}</span>
          </div>
          <span className="text-[11px] font-sans text-white/70 uppercase tracking-widest">
            {project.year}
          </span>
        </div>
      </div>

      {/* Content Details */}
      <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between bg-white">
        <div>
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#241333] group-hover:text-[#54228A] transition-colors leading-tight">
              <Link href={`/projects/${project.slug}`} className="focus:outline-none">
                <span className="absolute inset-0 z-0" />
                {project.title}
              </Link>
            </h3>
            <div className="w-9 h-9 rounded-full border border-[#241333]/20 flex items-center justify-center flex-shrink-0 text-[#241333] group-hover:bg-[#54228A] group-hover:border-[#54228A] group-hover:text-white transition-all duration-300">
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>

          <p className="font-sans text-xs sm:text-sm text-[#241333]/70 mt-2 line-clamp-2 leading-relaxed">
            {project.tagline}
          </p>

          {/* Quick Specifications Strip */}
          <div className="mt-5 pt-4 border-t border-[#241333]/10 grid grid-cols-2 gap-2 text-xs font-sans">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#241333]/50 block">
                Scale
              </span>
              <span className="font-medium text-[#241333] truncate block">
                {project.specs.plotOrFloorArea}
              </span>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#241333]/50 block">
                Timeline
              </span>
              <span className="font-medium text-[#241333] truncate block">
                {project.specs.timeline}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between pt-3 border-t border-dashed border-[#241333]/10 text-xs font-sans">
          <span className="text-[#54228A] font-semibold uppercase tracking-wider group-hover:underline">
            View Architectural Study
          </span>
          <span className="text-[#C6A04A] font-serif italic text-[11px]">
            {project.status}
          </span>
        </div>
      </div>
    </article>
  );
};
