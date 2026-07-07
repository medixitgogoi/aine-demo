import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface PrimaryCtaProps {
  href?: string;
  text: string;
}

const PrimaryCta: React.FC<PrimaryCtaProps> = ({ href, text }) => {
  const baseClasses =
    "group w-max inline-flex items-center justify-center px-6 py-3 border border-white/80 cursor-pointer rounded-md bg-cta hover:bg-hover-cta text-black font-semibold tracking-wide shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-500 hover:scale-105";

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {text}
        <ArrowRight
          size={18}
          className="ml-2 transition-all duration-500 group-hover:translate-x-1"
        />
      </Link>
    );
  }

  return (
    <button type="button" className={baseClasses}>
      {text}
      <ArrowRight
        size={18}
        className="ml-2 transition-all duration-500 group-hover:translate-x-1"
      />
    </button>
  );
};

export default PrimaryCta;