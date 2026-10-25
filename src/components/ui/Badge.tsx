import React from "react";

interface BadgeProps {
  variant?: "purple" | "gold" | "neutral" | "concept";
  size?: "sm" | "md";
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = "neutral",
  size = "md",
  children,
  className = "",
}) => {
  const sizeClasses = {
    sm: "px-2.5 py-0.5 text-[10px]",
    md: "px-3.5 py-1 text-xs",
  };

  const variantClasses = {
    purple: "bg-[#54228A]/10 text-[#54228A] border border-[#54228A]/20",
    gold: "bg-[#C6A04A]/15 text-[#9E7B2D] border border-[#C6A04A]/30",
    neutral: "bg-[#F7F5F8] text-[#241333]/80 border border-[#241333]/10",
    concept: "bg-[#241333] text-[#E0BF72] border border-[#C6A04A]/40 shadow-sm",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-sans font-medium tracking-[0.08em] uppercase rounded-none ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
