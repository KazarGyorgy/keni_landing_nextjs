"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronDown } from "react-icons/hi";
import { fadeInUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";
import { useTranslations } from "next-intl";

function FAQItem({ question, answer, isOpen, onClick }: {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
}) {
    return (
        <motion.div
            variants={staggerItem}
            className="glass-card overflow-hidden"
        >
            <button
                onClick={onClick}
                className="w-full px-6 py-5 flex items-center justify-between text-left group"
                aria-expanded={isOpen}
            >
                <span className="font-display font-semibold text-white group-hover:text-accent-400 transition-colors pr-4">
                    {question}
                </span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center"
                >
                    <HiChevronDown className="w-5 h-5 text-accent-400" />
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
                        <div className="px-6 pb-5 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default function FAQ() {
    const t = useTranslations("FAQ");
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: t("items.cost.q"),
            answer: t("items.cost.a"),
        },
        {
            question: t("items.time.q"),
            answer: t("items.time.a"),
        },
        {
            question: t("items.docs.q"),
            answer: t("items.docs.a"),
        },
        {
            question: t("items.guarantee.q"),
            answer: t("items.guarantee.a"),
        },
        {
            question: t("items.rejected.q"),
            answer: t("items.rejected.a"),
        },
        {
            question: t("items.bar.q"),
            answer: t("items.bar.a"),
        },
    ];

    return (
        <section id="gyik" className="section-padding">
            <div className="container-custom mx-auto">
                {/* Section Header */}
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    className="text-center mb-16"
                >
                    <span className="text-accent-400 font-medium text-sm uppercase tracking-widest mb-4 block">
                        {t("subtitle")}
                    </span>
                    <h2 className="heading-lg text-white mb-6">
                        {t("title_start")}{" "}
                        <span className="text-gradient-gold">{t("title_highlight")}</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        {t("description")}
                    </p>
                </motion.div>

                {/* FAQ Items */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    className="max-w-3xl mx-auto space-y-4"
                >
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
