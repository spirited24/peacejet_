"use client";

import React from "react";

interface ProjectFilterProps {
  currentCategory: string;
  onSelectCategory: (category: string) => void;
  counts: Record<string, number>;
}

const CATEGORIES = [
  { id: "all", label: "All Works" },
  { id: "residential", label: "Residential" },
  { id: "commercial", label: "Commercial" },
  { id: "interior", label: "Interior Design" },
  { id: "renovation", label: "Renovation" },
];

export const ProjectFilter: React.FC<ProjectFilterProps> = ({
  currentCategory,
  onSelectCategory,
  counts,
}) => {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
      {CATEGORIES.map((cat) => {
        const isActive = currentCategory === cat.id;
        const count = counts[cat.id] ?? (cat.id === "all" ? counts.all : 0);

        return (
          <button
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className={`px-4 sm:px-5 py-2.5 text-xs uppercase tracking-[0.15em] font-sans font-medium whitespace-nowrap transition-all duration-300 flex items-center gap-2 ${
              isActive
                ? "bg-[#54228A] text-white shadow-sm"
                : "bg-white text-[#241333]/70 hover:text-[#241333] hover:bg-[#F7F5F8] border border-[#241333]/10"
            }`}
          >
            <span>{cat.label}</span>
            {count !== undefined && (
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isActive ? "bg-white/20 text-white" : "bg-neutral-100 text-[#241333]/60"
                }`}
              >
                {count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};
