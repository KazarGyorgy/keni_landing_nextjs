"use client";

import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

interface CarouselNavigationProps {
    currentIndex: number;
    totalItems: number;
    onPrevious: () => void;
    onNext: () => void;
    onDotClick: (index: number) => void;
    ariaLabels: {
        previous: string;
        next: string;
        dot: (index: number) => string;
    };
}

export default function CarouselNavigation({
    currentIndex,
    totalItems,
    onPrevious,
    onNext,
    onDotClick,
    ariaLabels,
}: CarouselNavigationProps) {
    return (
        <div className="flex items-center justify-center gap-4 mt-8">
            {/* Previous Button */}
            <button
                onClick={onPrevious}
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-accent-500 hover:text-primary-900 hover:border-accent-500 transition-all duration-300"
                aria-label={ariaLabels.previous}
            >
                <HiChevronLeft className="w-6 h-6" aria-hidden="true" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
                {[...Array(totalItems)].map((_, index) => (
                    <button
                        key={index}
                        onClick={() => onDotClick(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentIndex
                                ? "bg-accent-400 w-8"
                                : "bg-white/20 hover:bg-white/40"
                            }`}
                        aria-label={ariaLabels.dot(index)}
                    />
                ))}
            </div>

            {/* Next Button */}
            <button
                onClick={onNext}
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-accent-500 hover:text-primary-900 hover:border-accent-500 transition-all duration-300"
                aria-label={ariaLabels.next}
            >
                <HiChevronRight className="w-6 h-6" aria-hidden="true" />
            </button>
        </div>
    );
}
