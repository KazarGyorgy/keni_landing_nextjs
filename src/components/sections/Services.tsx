"use client";

import { motion } from "framer-motion";
import { HiHome, HiCreditCard, HiShieldCheck, HiArrowRight } from "react-icons/hi";
import { MdApartment } from "react-icons/md";
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
                t("items.biztositasok.features.retirement"),
                t("items.biztositasok.features.utasbiztositas"),
                t("items.biztositasok.features.home"),
                t("items.biztositasok.features.casco"),
                t("items.biztositasok.features.megtakaritas"),
                t("items.biztositasok.features.online"),
            ],
        },
        {
            icon: MdApartment,
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
        <section id="services" className="section-padding relative content-visibility-auto min-h-screen flex flex-col justify-center">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-500/20 to-transparent" />
            </div>

            <div className="container-custom mx-auto">
                {/* Section Header */}
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    className="text-center mb-8"
                >
                    <p className="md:text-3xl 2xl:text-[36px] text-gray-400 my-2">
                        {t("description")}
                    </p>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-6"
                >
                    {services.map((service, index) => (
                        <motion.article
                            key={index}
                            variants={staggerItem}
                            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent-400 to-accent-600 p-5 2xl:p-8 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-gold"
                        >
                            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 2xl:gap-5 text-center md:text-left">
                                {/* Icon */}
                                <div className="flex-shrink-0 w-14 h-14 md:w-12 md:h-12 2xl:w-14 2xl:h-14 rounded-xl bg-primary-900/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <service.icon className="w-8 h-8 md:w-7 md:h-7 text-accent-400" aria-hidden="true" />
                                </div>

                                {/* Content */}
                                <div className="flex-1 relative z-10 w-full">
                                    <h3 className="font-display text-2xl md:text-3xl 2xl:text-[36px] font-bold text-primary-900 mb-2 2xl:mb-3">
                                        {service.title}
                                    </h3>
                                    <p className="text-primary-900/80 mb-3 2xl:mb-4 leading-relaxed font-medium text-sm 2xl:text-base">
                                        {service.description}
                                    </p>

                                    {/* Features */}
                                    <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-3 2xl:mb-4">
                                        {service.features.map((feature, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1 rounded-full bg-primary-900/10 text-primary-900 text-xs font-semibold border border-primary-900/10"
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Link */}
                                    <a
                                        href="#contact"
                                        className="inline-flex items-center gap-2 text-primary-900 font-bold text-sm hover:gap-3 transition-all mx-auto md:mx-0"
                                    >
                                        {t("learn_more")}
                                        <HiArrowRight className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </motion.article>
                    ))}
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
