"use client";

import { motion } from "framer-motion";
import { HiHome, HiCreditCard, HiShieldCheck, HiDocumentText, HiArrowRight } from "react-icons/hi";
import { fadeInUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";
import { useTranslations } from "next-intl";

export default function Services() {
    const t = useTranslations("Services");

    const services = [
        {
            icon: HiHome,
            title: t("items.lakashitel.title"),
            description: t("items.lakashitel.description"),
            features: [
                t("items.lakashitel.features.bank_offers"),
                t("items.lakashitel.features.rates"),
                t("items.lakashitel.features.csok")
            ],
        },
        {
            icon: HiCreditCard,
            title: t("items.szemelyi_kolcson.title"),
            description: t("items.szemelyi_kolcson.description"),
            features: [
                t("items.szemelyi_kolcson.features.fast"),
                t("items.szemelyi_kolcson.features.no_collateral"),
                t("items.szemelyi_kolcson.features.online")
            ],
        },
        {
            icon: HiShieldCheck,
            title: t("items.biztositasok.title"),
            description: t("items.biztositasok.description"),
            features: [
                t("items.biztositasok.features.life"),
                t("items.biztositasok.features.home"),
                t("items.biztositasok.features.casco")
            ],
        },
        {
            icon: HiDocumentText,
            title: t("items.csok.title"),
            description: t("items.csok.description"),
            features: [
                t("items.csok.features.baby"),
                t("items.csok.features.village"),
                t("items.csok.features.renovation")
            ],
        },
    ];

    return (
        <section id="szolgaltatasok" className="section-padding relative">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-500/20 to-transparent" />
            </div>

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
                        {t("title")}
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        {t("description")}
                    </p>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={staggerItem}
                            className="group glass-card-hover p-8"
                        >
                            <div className="flex items-start gap-5">
                                {/* Icon */}
                                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-accent-500/20 to-accent-600/10 flex items-center justify-center group-hover:from-accent-500/30 group-hover:to-accent-600/20 transition-all duration-300">
                                    <service.icon className="w-7 h-7 text-accent-400" />
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <h3 className="font-display text-xl font-semibold text-white mb-3 group-hover:text-accent-400 transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-400 mb-4 leading-relaxed">
                                        {service.description}
                                    </p>

                                    {/* Features */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {service.features.map((feature, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1 rounded-full bg-white/5 text-gray-300 text-xs font-medium"
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Link */}
                                    <a
                                        href="#kapcsolat"
                                        className="inline-flex items-center gap-2 text-accent-400 font-medium text-sm hover:gap-3 transition-all"
                                    >
                                        {t("learn_more")}
                                        <HiArrowRight className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
