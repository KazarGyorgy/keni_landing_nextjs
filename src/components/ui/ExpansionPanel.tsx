"use client";

import { motion, AnimatePresence } from "framer-motion";
import { HiChevronDown } from "react-icons/hi";
import { staggerItem } from "@/lib/animations";
import { ReactNode } from "react";

interface ExpansionPanelProps {
    title: string | ReactNode;
    content: string | ReactNode;
    isOpen: boolean;
    onClick: () => void;
}

export default function ExpansionPanel({
    title,
    content,
    isOpen,
    onClick,
}: ExpansionPanelProps) {
    return (
        <motion.article
            variants={staggerItem}
            className="glass-card overflow-hidden"
        >
            <button
                onClick={onClick}
                className="w-full px-6 py-5 flex items-center justify-between text-left group"
                aria-expanded={isOpen}
            >
                <span className="font-display font-semibold text-xl text-accent-400 transition-colors pr-4">
                    {title}
                </span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center"
                >
                    <HiChevronDown className="w-5 h-5 text-accent-400" aria-hidden="true" />
                </motion.div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="px-6 pb-5 text-lg text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                            {content}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.article>
    );
}
