import React from "react";
import { Info } from "lucide-react";

interface ConceptNoticeProps {
  compact?: boolean;
  className?: string;
}

export const ConceptNotice: React.FC<ConceptNoticeProps> = ({
  compact = false,
  className = "",
}) => {
  if (compact) {
    return (
      <div
        className={`inline-flex items-center gap-2 px-3 py-1.5 bg-[#241333]/90 text-white/90 text-xs backdrop-blur-md border border-[#C6A04A]/40 ${className}`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#C6A04A] animate-pulse" />
        <span className="font-sans font-medium tracking-wide">
          Illustrative Concept Study
        </span>
      </div>
    );
  }

  return (
    <div
      className={`p-4 sm:p-5 bg-[#F7F5F8] border-l-4 border-[#C6A04A] shadow-sm flex items-start gap-3.5 ${className}`}
    >
      <div className="p-1.5 bg-[#54228A]/10 text-[#54228A] flex-shrink-0 mt-0.5">
        <Info className="w-4 h-4 text-[#54228A]" />
      </div>
      <div>
        <h4 className="font-serif text-sm font-semibold text-[#241333] tracking-wide uppercase">
          Architectural Concept Folio Note
        </h4>
        <p className="font-sans text-xs sm:text-sm text-[#241333]/75 mt-1 leading-relaxed">
          The projects depicted in this section represent curated architectural visualization studies and concept designs illustrating Peace Jet’s technical standards, aesthetic direction, and engineering capabilities. In line with our transparency policy, verified photographs of commissioned builds are published following completed client handover authorizations.
        </p>
      </div>
    </div>
  );
};
