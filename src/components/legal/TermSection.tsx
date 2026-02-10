import React from 'react';

interface TermSectionProps {
    title?: string;
    content: string[];
}

export const TermSection: React.FC<TermSectionProps> = ({ title, content }) => {
    return (
        <div className="mb-8">
            {title && (
                <h2 className="text-white text-2xl font-bold mt-12 mb-6">
                    {title}
                </h2>
            )}
            {content.map((paragraph, index) => (
                <p key={index} className="mb-4 text-gray-300">
                    {paragraph}
                </p>
            ))}
        </div>
    );
};
