"use client";

import { motion } from "framer-motion";
import { HiPhone, HiClipboardCheck, HiDocumentSearch, HiCheckCircle } from "react-icons/hi";
import { fadeInUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";
import { useTranslations } from "next-intl";

export default function Process() {
    const t = useTranslations("Process");

    const steps = [
        {
            number: "01",
            icon: HiPhone,
            title: t("steps.contact.title"),
            description: t("steps.contact.description"),
            id: "contact-step",
        },
        {
            number: "02",
            icon: HiClipboardCheck,
            title: t("steps.assessment.title"),
            description: t("steps.assessment.description"),
            id: "assessment-step",
        },
        {
            number: "03",
            icon: HiDocumentSearch,
            title: t("steps.comparison.title"),
            description: t("steps.comparison.description"),
            id: "comparison-step",
        },
        {
            number: "04",
            icon: HiCheckCircle,
            title: t("steps.contract.title"),
            description: t("steps.contract.description"),
        },
    ];

    return (
        <section id="process" className="section-padding relative content-visibility-auto">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-800/20 to-transparent" aria-hidden="true" />

            <div className="container-custom mx-auto relative z-10">
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

                {/* Process Steps */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    className="relative"
                >
                    {/* Connecting Line - Desktop */}
                    <div className="hidden lg:block absolute top-[3.5rem] left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-accent-500/20 via-accent-500/40 to-accent-500/20 z-0" aria-hidden="true" />

                    <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <motion.li
                                key={index}
                                id={step.id}
                                variants={staggerItem}
                                className="relative list-none gpu-optimized"
                            >
                                <article className="glass-card p-6 md:h-full text-center group hover:bg-white/10 transition-all duration-300">
                                    {/* Step Number */}
                                    <div className="relative z-10 mb-6">
                                        <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform duration-300">
                                            <step.icon className="w-7 h-7 text-primary-900" aria-hidden="true" />
                                        </div>
                                        {/* Number badge */}
                                        <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary-800 border-2 border-accent-500 flex items-center justify-center text-accent-400 text-xs font-bold" aria-hidden="true">
                                            {step.number}
                                        </span>
                                    </div>

                                    <h3 className="font-display font-semibold text-white text-lg mb-3">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {step.description}
                                    </p>
                                </article>

                                {/* Arrow for mobile */}
                                {index < steps.length - 1 && (
                                    <div className="lg:hidden flex justify-center mt-6 mb-0" aria-hidden="true">
                                        <motion.div
                                            animate={{ y: [0, 5, 0] }}
                                            transition={{ duration: 1.5, repeat: Infinity }}
                                            className="w-8 h-8 rounded-full bg-accent-500/20 flex items-center justify-center"
                                        >
                                            <svg className="w-4 h-4 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                            </svg>
                                        </motion.div>
                                    </div>
                                )}
                            </motion.li>
                        ))}
                    </ol>
                </motion.div>
            </div>
        </section>
    );
}
