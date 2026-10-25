"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionItemProps {
  id: string;
  title: string;
  category?: string;
  content: string;
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionRow: React.FC<AccordionItemProps> = ({
  id,
  title,
  category,
  content,
  isOpen,
  onToggle,
}) => {
  return (
    <div className="border-b border-[#241333]/10 last:border-b-0 transition-colors">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${id}`}
        className="w-full py-5 sm:py-6 flex items-center justify-between gap-4 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#54228A]"
      >
        <div className="flex flex-col gap-1 pr-2">
          {category && (
            <span className="font-sans text-[11px] font-semibold tracking-[0.2em] uppercase text-[#C6A04A]">
              {category}
            </span>
          )}
          <span className="font-serif text-lg sm:text-xl font-medium text-[#241333] group-hover:text-[#54228A] transition-colors leading-snug">
            {title}
          </span>
        </div>
        <div
          className={`w-8 h-8 rounded-full border border-[#241333]/15 flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:border-[#54228A] ${
            isOpen ? "rotate-180 bg-[#54228A] text-white border-[#54228A]" : "text-[#241333]"
          }`}
        >
          <ChevronDown className="w-4 h-4" />
        </div>
      </button>

      <div
        id={`accordion-content-${id}`}
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0 pb-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="font-sans text-sm sm:text-base text-[#241333]/75 leading-relaxed pr-6">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

interface AccordionProps {
  items: {
    id: string;
    question: string;
    answer: string;
    category?: string;
  }[];
  allowMultiple?: boolean;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
}) => {
  const [openIds, setOpenIds] = useState<string[]>([items[0]?.id || ""]);

  const handleToggle = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className="divide-y divide-[#241333]/10">
      {items.map((item) => (
        <AccordionRow
          key={item.id}
          id={item.id}
          title={item.question}
          category={item.category}
          content={item.answer}
          isOpen={openIds.includes(item.id)}
          onToggle={() => handleToggle(item.id)}
        />
      ))}
    </div>
  );
};
