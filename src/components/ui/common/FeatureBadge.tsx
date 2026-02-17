"use client";

interface FeatureBadgeProps {
  feature: string;
}

export default function FeatureBadge({ feature }: FeatureBadgeProps) {
  return (
    <span className="px-3 py-1 rounded-full bg-primary-900/10 text-primary-900 text-xs font-semibold border border-primary-900/10">
      {feature}
    </span>
  );
}
