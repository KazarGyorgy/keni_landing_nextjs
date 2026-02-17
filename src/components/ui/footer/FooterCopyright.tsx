"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

interface FooterCopyrightProps {
  copyrightText: string;
}

export default function FooterCopyright({
  copyrightText,
}: FooterCopyrightProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4"
    >
      <p className="text-gray-500 text-sm">{copyrightText}</p>
    </motion.div>
  );
}
