import { ReactNode } from "react";
import ToggleSwitch from "./ToggleSwitch";

interface CookieCategoryCardProps {
  title: string;
  description: string;
  isAlwaysActive?: boolean;
  alwaysActiveLabel?: string;
  checked?: boolean;
  onToggle?: () => void;
  labelId: string;
}

export default function CookieCategoryCard({
  title,
  description,
  isAlwaysActive = false,
  alwaysActiveLabel,
  checked = false,
  onToggle,
  labelId,
}: CookieCategoryCardProps) {
  return (
    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
      <div className="flex items-center justify-between mb-2">
        <span className="font-medium text-white" id={labelId}>
          {title}
        </span>
        {isAlwaysActive ? (
          <div className="px-3 py-1 rounded-full bg-accent-500/20 text-accent-400 text-xs font-medium">
            {alwaysActiveLabel}
          </div>
        ) : (
          onToggle && (
            <ToggleSwitch
              checked={checked}
              onChange={onToggle}
              ariaLabelledBy={labelId}
            />
          )
        )}
      </div>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
}
