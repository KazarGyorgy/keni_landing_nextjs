"use client";

import { motion } from "framer-motion";
import { HiHome, HiCreditCard, HiShieldCheck } from "react-icons/hi";
import { MdApartment } from "react-icons/md";
import { fadeInUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";
import { useTranslations } from "next-intl";
import ServiceCard from "@/components/ui/ServiceCard";

export default function Services() {
    const t = useTranslations("Hero");

    const services = [
        {
            id: "mortgage",
            icon: HiHome,
            title: t("items.mortgage.title"),
            description: t("items.mortgage.description"),
            features: [
                t("items.mortgage.features.bank_offers"),
                t("items.mortgage.features.unique_rates"),
                t("items.mortgage.features.home_start"),
                t("items.mortgage.features.preliminary_appraisal"),
                t("items.mortgage.features.pre_qualification")
            ],
        },
        {
            id: "personal-loan",
            icon: HiCreditCard,
            title: t("items.personal_loan.title"),
            description: t("items.personal_loan.description"),
            features: [
                t("items.personal_loan.features.multiple_offers"),
                t("items.personal_loan.features.best_rates"),
                t("items.personal_loan.features.no_collateral"),
                t("items.personal_loan.features.fast"),
                t("items.personal_loan.features.online")
            ],
        },
        {
            id: "insurance",
            icon: HiShieldCheck,
            title: t("items.insurance.title"),
            description: t("items.insurance.description"),
            features: [
                t("items.insurance.features.life"),
                t("items.insurance.features.retirement"),
                t("items.insurance.features.home"),
                t("items.insurance.features.travel"),
                t("items.insurance.features.casco"),
                t("items.insurance.features.savings"),
                t("items.insurance.features.corporate"),
                t("items.insurance.features.online")
            ],
        },
        {
            id: "condominium",
            icon: MdApartment,
            title: t("items.condominium.title"),
            description: t("items.condominium.description"),
            features: [
                t("items.condominium.features.condo_insurance"),
                t("items.condominium.features.renovation_loan"),
                t("items.condominium.features.ltp_savings"),
                t("items.condominium.features.liability_insurance")
            ],
        },
    ];

    return (
        <section id="services" className="section-padding relative min-h-screen flex flex-col justify-center">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-500/20 to-transparent" />
            </div>

            <div className="container-custom mx-auto">
                {/* Section Header */}
                <div className="text-center mb-8 animate-fade-in-up">
                    <p className="md:text-3xl 2xl:text-[36px] text-gray-400 my-2">
                        {t("description")}
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-6">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            service={service}
                            index={index}
                            learnMoreLabel={t("learn_more")}
                        />
                    ))}
                </div>
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
