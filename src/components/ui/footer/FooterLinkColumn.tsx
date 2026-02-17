"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { staggerItem } from "@/lib/animations";

interface FooterLinkColumnProps {
  heading: string;
  links: Array<{ label: string; href: string }>;
}

export default function FooterLinkColumn({
  heading,
  links,
}: FooterLinkColumnProps) {
  return (
    <motion.div variants={staggerItem} className="text-center md:text-left">
      <h4 className="font-display font-semibold text-white mb-4">{heading}</h4>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-gray-400 hover:text-accent-400 transition-colors text-sm"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
