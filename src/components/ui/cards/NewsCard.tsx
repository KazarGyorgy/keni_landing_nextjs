"use client";

import { motion } from "framer-motion";
import { HiCalendar, HiArrowRight } from "react-icons/hi";

interface NewsCardProps {
  news: {
    id: number;
    date: string;
    title: string;
    summary: string;
    link: string;
  };
  readMoreLabel: string;
}

export default function NewsCard({ news, readMoreLabel }: NewsCardProps) {
  return (
    <motion.article
      key={news.id}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
      className="glass-card p-8 md:p-12 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-8 opacity-10">
        <HiCalendar className="w-24 h-24 text-accent-500" />
      </div>

      <div className="relative z-10">
        <div className="flex items-center gap-2 text-accent-400 font-medium mb-4">
          <HiCalendar className="w-5 h-5" />
          <span>{news.date}</span>
        </div>

        <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
          {news.title}
        </h3>

        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          {news.summary}
        </p>

        <a
          href={news.link}
          className="inline-flex items-center gap-2 text-white font-semibold hover:text-accent-400 transition-colors group"
        >
          {readMoreLabel}
          <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </motion.article>
  );
}
