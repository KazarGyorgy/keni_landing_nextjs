"use client";

import { motion } from "framer-motion";
import { HiStar } from "react-icons/hi";

interface TestimonialCardProps {
  testimonial: {
    id: number;
    name: string;
    title: string;
    content: string;
    rating: number;
  };
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <motion.article
      key={testimonial.id}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
      className="glass-card p-8 md:p-12 h-full flex flex-col min-h-[400px]"
    >
      <div className="flex-1">
        <div className="mb-6">
          <svg
            className="w-12 h-12 text-accent-500/30"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>

        <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
          &ldquo;{testimonial.content}&rdquo;
        </p>
      </div>

      <div>
        <div className="flex gap-1 mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <HiStar
              key={i}
              className="w-5 h-5 text-accent-400"
              aria-hidden="true"
            />
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center font-display font-bold text-lg text-primary-900">
            {testimonial.name.charAt(0)}
          </div>
          <div>
            <div className="font-display font-semibold text-white">
              {testimonial.name}
            </div>
            <div className="text-gray-400 text-sm">{testimonial.title}</div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
