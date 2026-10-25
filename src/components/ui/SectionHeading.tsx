import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  isDark?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = "left",
  isDark = false,
  className = "",
}) => {
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <div className={`flex flex-col max-w-3xl ${alignmentClasses[align]} ${className}`}>
      {eyebrow && (
        <div className="flex items-center gap-2.5 mb-3.5">
          <span className="w-8 h-[1.5px] bg-[#C6A04A]" />
          <span className="font-sans text-xs tracking-[0.25em] uppercase font-semibold text-[#C6A04A]">
            {eyebrow}
          </span>
          {align === "center" && <span className="w-8 h-[1.5px] bg-[#C6A04A]" />}
        </div>
      )}
      <h2
        className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.15] ${
          isDark ? "text-white" : "text-[#241333]"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed font-sans font-normal ${
            isDark ? "text-neutral-300" : "text-[#241333]/75"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
