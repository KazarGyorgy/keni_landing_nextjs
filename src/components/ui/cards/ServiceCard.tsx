"use client";

import { IconType } from "react-icons";
import FeatureBadge from "../common/FeatureBadge";
import LearnMoreLink from "../common/LearnMoreLink";

interface ServiceCardProps {
  service: {
    id: string;
    icon: IconType;
    title: string;
    description: string;
    features: string[];
  };
  index: number;
  learnMoreLabel: string;
}

export default function ServiceCard({
  service,
  index,
  learnMoreLabel,
}: ServiceCardProps) {
  return (
    <article
      id={service.id}
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent-400 to-accent-600 p-5 2xl:p-8 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-gold h-full flex flex-col"
    >
      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="flex flex-col md:flex-row items-center md:items-stretch gap-4 2xl:gap-5 text-center md:text-left h-full">
        <div className="flex-shrink-0 w-14 h-14 md:w-12 md:h-12 2xl:w-14 2xl:h-14 rounded-xl bg-primary-900/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
          <service.icon
            className="w-8 h-8 md:w-7 md:h-7 text-accent-400"
            aria-hidden="true"
          />
        </div>

        <div className="flex-1 relative z-10 w-full flex flex-col">
          <h3 className="font-display text-2xl md:text-3xl 2xl:text-[36px] font-bold text-primary-900 mb-2 2xl:mb-3">
            {service.title}
          </h3>
          <p className="text-primary-900/80 mb-3 2xl:mb-4 leading-relaxed font-medium text-sm 2xl:text-base">
            {service.description}
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-3 2xl:mb-4">
            {service.features.map((feature, idx) => (
              <FeatureBadge key={idx} feature={feature} />
            ))}
          </div>

          <LearnMoreLink
            href="#contact"
            label={learnMoreLabel}
            className="mx-auto md:mx-0 mt-auto w-fit"
          />
        </div>
      </div>
    </article>
  );
}
