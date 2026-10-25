import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  variant?: "light" | "dark";
  showTagline?: boolean;
  className?: string;
  symbolOnly?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = "dark",
  showTagline = true,
  className = "",
  symbolOnly = false,
}) => {
  const isLight = variant === "light";

  return (
    <Link
      href="/"
      aria-label="Peace Jet Construction & Design Homepage"
      className={`inline-flex items-center gap-3.5 group transition-transform duration-300 hover:opacity-95 ${className}`}
    >
      {/* Official Brand Logo Icon / Image */}
      <div className="relative w-12 h-12 flex-shrink-0 rounded-lg overflow-hidden bg-white p-0.5 shadow-sm border border-[#C6A04A]/40 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
        <Image
          src="/logo.jpg"
          alt="Peace Jet Construction Logo"
          width={48}
          height={48}
          className="object-contain w-full h-full"
          priority
        />
      </div>

      {!symbolOnly && (
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5 leading-none">
            <span
              className={`font-serif tracking-[0.16em] text-lg sm:text-xl font-bold uppercase ${
                isLight ? "text-white" : "text-[#241333]"
              }`}
            >
              P.E.A.C.E Jet
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#C6A04A]" />
          </div>
          {showTagline && (
            <span
              className={`font-sans text-[9px] sm:text-[10px] tracking-[0.22em] font-medium uppercase mt-1 ${
                isLight ? "text-[#E0BF72]" : "text-[#54228A]"
              }`}
            >
              Construction &amp; Interior Design
            </span>
          )}
        </div>
      )}
    </Link>
  );
};
