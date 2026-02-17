import React from "react";

interface TermSectionProps {
  title?: string;
  content: (string | { subtitle: string })[];
}

export const TermSection: React.FC<TermSectionProps> = ({ title, content }) => {
  return (
    <div className="mb-8">
      {title && (
        <h2 className="text-white text-2xl font-bold mt-12 mb-6">{title}</h2>
      )}
      {content.map((item, index) => {
        if (typeof item === "string") {
          return (
            <p key={index} className="mb-4 text-gray-300 text-justify">
              {item}
            </p>
          );
        } else if (item.subtitle) {
          return (
            <p key={index} className="text-white h3 text-xl font-semibold mt-8 mb-4">
              {item.subtitle}
            </p>
          );
        }
        return null;
      })}
    </div>
  );
};
