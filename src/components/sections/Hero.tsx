"use client";

import { motion } from "framer-motion";
import { HiArrowRight, HiShieldCheck, HiClock, HiUserGroup } from "react-icons/hi";
import { fadeInUp, staggerContainer, staggerItem, heroText } from "@/lib/animations";
import { useTranslations } from "next-intl";
import HeroBackground from "./Hero/HeroBackground";

export default function Hero() {
    const t = useTranslations("Hero");

    const trustBadges = [
        { icon: HiShieldCheck, text: t("trust_badges.independent") },
        { icon: HiClock, text: t("trust_badges.experience") },
        { icon: HiUserGroup, text: t("trust_badges.clients") },
    ];

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <HeroBackground />

            {/* Content */}
            <div className="relative z-10 container-custom mx-auto px-4 md:px-8 pt-20 pb-16">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="max-w-4xl mx-auto text-center"
                >
                    {/* Badge */}
                    <motion.div variants={fadeInUp} className="mb-8">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-500/10 border border-accent-500/20 text-accent-400 text-sm font-medium">
                            <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse" aria-hidden="true" />
                            {t("badge")}
                        </span>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                        variants={heroText}
                        className="heading-xl text-white mb-6"
                    >
                        {t("title_start")}{" "}
                        <span className="text-gradient-gold">{t("title_highlight")}</span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        variants={fadeInUp}
                        className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
                    >
                        {t("subtitle")}
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={fadeInUp}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
                    >
                        <a href="#kapcsolat" className="btn-primary flex items-center gap-2 group">
                            {t("cta.consultation")}
                            <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                        </a>
                        <a href="#szolgaltatasok" className="btn-secondary">
                            {t("cta.services")}
                        </a>
                    </motion.div>

                    {/* Trust Badges */}
                    <motion.div
                        variants={staggerContainer}
                        className="flex flex-wrap items-center justify-center gap-6 md:gap-10"
                    >
                        {trustBadges.map((badge, index) => (
                            <motion.div
                                key={index}
                                variants={staggerItem}
                                className="flex items-center gap-3 text-gray-400"
                            >
                                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                                    <badge.icon className="w-5 h-5 text-accent-400" aria-hidden="true" />
                                </div>
                                <span className="text-sm font-medium">{badge.text}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                    aria-hidden="true"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2"
                    >
                        <motion.div
                            animate={{ opacity: [1, 0.3, 1], y: [0, 8, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="w-1.5 h-1.5 rounded-full bg-accent-400"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
