"use client";

import { motion } from "framer-motion";
import { HiCheckCircle, HiLightBulb, HiTrendingUp, HiChat } from "react-icons/hi";
import { fadeInUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";
import { useAnimatedCounter } from "@/hooks/useScrollAnimation";
import { NextIntlClientProvider, useTranslations, useLocale } from "next-intl";
import SectionHeader from "@/components/ui/common/SectionHeader";
import messages from "./i18n/hu.json";

function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
    const { ref, count } = useAnimatedCounter(value, 2000);

    return (
        <div ref={ref} className="text-center">
            <div className="font-display text-4xl md:text-5xl font-bold text-accent-400 mb-2">
                {count}{suffix}
            </div>
            <div className="text-gray-400 text-sm">{label}</div>
        </div>
    );
}

export default function WhyUs() {
    const locale = useLocale();
    return (
        <NextIntlClientProvider locale={locale} messages={{ WhyUs: messages }}>
            <WhyUsContent />
        </NextIntlClientProvider>
    );
}

function WhyUsContent() {
    const t = useTranslations("WhyUs");

    const features = [
        {
            icon: HiCheckCircle,
            title: t("features.independent.title"),
            description: t("features.independent.description"),
        },
        {
            icon: HiLightBulb,
            title: t("features.personalized.title"),
            description: t("features.personalized.description"),
        },
        {
            icon: HiTrendingUp,
            title: t("features.best_terms.title"),
            description: t("features.best_terms.description"),
        },
        {
            icon: HiChat,
            title: t("features.support.title"),
            description: t("features.support.description"),
        },
    ];

    const stats = [
        { value: 2500, suffix: "+", label: t("stats.clients") },
        { value: 98, suffix: "%", label: t("stats.success") },
        { value: 25, suffix: "+", label: t("stats.experience") },
        { value: 30, suffix: "+", label: t("stats.partners") },
    ];

    return (
        <section id="about" className="section-padding relative overflow-hidden">

            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="absolute -right-40 top-1/4 w-80 h-80 border border-accent-500/10 rounded-full"
                />
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                    className="absolute -left-20 bottom-1/4 w-60 h-60 border border-accent-500/5 rounded-full"
                />
            </div>

            <div className="container-custom mx-auto relative z-10">

                <SectionHeader
                    subtitle={t("subtitle")}
                    titleStart={t("title_start")}
                    titleHighlight={t("title_highlight")}
                    description={t("description")}
                />


                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
                >
                    {features.map((feature, index) => (
                        <motion.article
                            key={index}
                            variants={staggerItem}
                            className="glass-card p-6 text-center group hover:bg-white/10 transition-all duration-300"
                        >
                            <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-accent-500/20 to-accent-600/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <feature.icon className="w-7 h-7 text-accent-400" aria-hidden="true" />
                            </div>
                            <h3 className="font-display font-semibold text-white mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.article>
                    ))}
                </motion.div>


                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    className="glass-card p-8 md:p-12"
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <StatCounter key={index} {...stat} />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
