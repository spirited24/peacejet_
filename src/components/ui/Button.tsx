import React from "react";
import Link from "next/link";
import { ArrowRight, Loader2 } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "gold" | "outline" | "white" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  icon?: boolean;
  loading?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  href,
  icon = false,
  loading = false,
  children,
  className = "",
  disabled,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-sans font-medium tracking-[0.08em] uppercase transition-all duration-300 rounded-none relative overflow-hidden group select-none";

  const sizeStyles = {
    sm: "text-xs px-4 py-2.5 gap-2",
    md: "text-xs sm:text-sm px-6 py-3.5 gap-2.5",
    lg: "text-sm sm:text-base px-8 py-4 gap-3",
  };

  const variantStyles = {
    primary:
      "bg-[#54228A] text-white hover:bg-[#3B1463] border border-[#54228A] shadow-luxury hover:shadow-luxury-hover hover:border-[#C6A04A]",
    gold:
      "bg-[#C6A04A] text-[#241333] font-semibold hover:bg-[#E0BF72] border border-[#C6A04A] shadow-sm hover:shadow-gold-glow",
    outline:
      "bg-transparent text-[#241333] border border-[#241333]/30 hover:border-[#54228A] hover:text-[#54228A] hover:bg-[#54228A]/5",
    white:
      "bg-white text-[#241333] hover:bg-[#F7F5F8] border border-white hover:border-[#C6A04A] shadow-luxury",
    ghost:
      "bg-transparent text-[#54228A] hover:text-[#3B1463] hover:bg-[#54228A]/5 p-0 uppercase underline-offset-8 hover:underline",
  };

  const content = (
    <>
      {loading ? (
        <Loader2 className="w-4 h-4 animate-spin mr-2" />
      ) : null}
      <span className="relative z-10">{children}</span>
      {icon && !loading && (
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 relative z-10 text-current" />
      )}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${
        disabled || loading ? "opacity-60 cursor-not-allowed pointer-events-none" : ""
      } ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {content}
    </button>
  );
};
