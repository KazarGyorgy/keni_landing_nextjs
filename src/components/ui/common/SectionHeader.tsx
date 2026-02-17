"use client";

import { motion } from "framer-motion";
import { fadeInUp, viewportOnce } from "@/lib/animations";

interface SectionHeaderProps {
  subtitle: string;
  titleStart: string;
  titleHighlight: string;
  description: string;
}

export default function SectionHeader({
  subtitle,
  titleStart,
  titleHighlight,
  description,
}: SectionHeaderProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="text-center mb-16"
    >
      <span className="text-accent-400 font-medium text-sm uppercase tracking-widest mb-4 block">
        {subtitle}
      </span>
      <h2 className="heading-lg text-white mb-6">
        {titleStart}{" "}
        <span className="text-gradient-gold">{titleHighlight}</span>
      </h2>
      <p className="text-gray-400 max-w-2xl mx-auto text-lg">{description}</p>
    </motion.div>
  );
}
