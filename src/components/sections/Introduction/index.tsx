"use client";

import { motion } from "framer-motion";
import { HiArrowRight, HiShieldCheck, HiClock, HiUserGroup } from "react-icons/hi";
import { NextIntlClientProvider, useTranslations, useLocale } from "next-intl";
import HeroBackground from "../Hero/HeroBackground";
import { fadeInUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";
import messages from "./i18n/hu.json";

export default function Introduction() {
    const locale = useLocale();
    return (
        <NextIntlClientProvider locale={locale} messages={{ Introduction: messages }}>
            <IntroductionContent />
        </NextIntlClientProvider>
    );
}

function IntroductionContent() {
    const t = useTranslations("Introduction");

    const trustBadges = [
        { icon: HiShieldCheck, text: t("trust_badges.independent") },
        { icon: HiClock, text: t("trust_badges.experience") },
        { icon: HiUserGroup, text: t("trust_badges.clients") },
    ];

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <HeroBackground />


            <div className="relative z-10 container-custom mx-auto px-4 md:px-8 pt-20 pb-16">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    className="max-w-4xl mx-auto text-center"
                >

                    <motion.div variants={fadeInUp} className="mb-8 flex flex-row flex-wrap justify-center gap-x-8 gap-y-3">
                        {["loan", "independent", "insurance", "update", "savings"].map((key) => (
                            <span key={key} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-500/10 border border-accent-500/20 text-accent-400 text-sm font-medium">
                                <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse" aria-hidden="true" />
                                {t(`badges.${key}`)}
                            </span>
                        ))}
                    </motion.div>


                    <motion.h1 variants={fadeInUp} className="heading-xl text-white mb-6">
                        {t("title_start")}{" "}
                        <span className="text-gradient-gold">{t("title_highlight")}</span>
                    </motion.h1>


                    <motion.p
                        variants={fadeInUp}
                        className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
                    >
                        {t("subtitle")}
                    </motion.p>


                    <motion.div
                        variants={fadeInUp}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
                    >
                        <a href="#contact" className="btn-primary flex items-center gap-2 group">
                            {t("cta.consultation")}
                            <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                        </a>
                        <a href="#hero" className="btn-secondary">
                            {t("cta.services")}
                        </a>
                    </motion.div>


                    <motion.ul
                        variants={fadeInUp}
                        className="flex flex-wrap items-center justify-center gap-6 md:gap-10"
                    >
                        {trustBadges.map((badge, index) => (
                            <li
                                key={index}
                                className="flex items-center gap-3 text-gray-400"
                            >
                                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                                    <badge.icon className="w-5 h-5 text-accent-400" aria-hidden="true" />
                                </div>
                                <span className="text-sm font-medium">{badge.text}</span>
                            </li>
                        ))}
                    </motion.ul>
                </motion.div>

            </div>
        </section>
    );
}
