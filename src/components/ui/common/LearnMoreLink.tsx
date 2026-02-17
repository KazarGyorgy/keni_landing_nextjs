"use client";

import { HiArrowRight } from "react-icons/hi";

interface LearnMoreLinkProps {
  href: string;
  label: string;
  className?: string;
}

export default function LearnMoreLink({
  href,
  label,
  className = "",
}: LearnMoreLinkProps) {
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2 text-primary-900 font-bold text-sm hover:gap-3 transition-all ${className}`}
    >
      {label}
      <HiArrowRight className="w-4 h-4" />
    </a>
  );
}
