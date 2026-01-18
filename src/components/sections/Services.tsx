"use client";

import { motion } from "framer-motion";
import { HiHome, HiCreditCard, HiShieldCheck, HiDocumentText, HiArrowRight } from "react-icons/hi";
import { fadeInUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";

const services = [
    {
        icon: HiHome,
        title: "Lakáshitel & Jelzáloghitel",
        description: "Segítünk megtalálni a legjobb lakáshitel ajánlatot, legyen szó vásárlásról, építkezésről vagy felújításról.",
        features: ["Akár 30 bank ajánlata", "Kedvező kamatok", "CSOK integráció"],
    },
    {
        icon: HiCreditCard,
        title: "Személyi Kölcsön",
        description: "Gyors és egyszerű személyi kölcsön igénylés, versenykpes kamatokkal és rugalmas futamidővel.",
        features: ["Gyors ügyintézés", "Fedezet nélkül", "Online igénylés"],
    },
    {
        icon: HiShieldCheck,
        title: "Biztosítások",
        description: "Átfogó biztosítási megoldások családod és vagyonod védelmére, a legmegbízhatóbb biztosítóktól.",
        features: ["Életbiztosítás", "Lakásbiztosítás", "CASCO & Kötelező"],
    },
    {
        icon: HiDocumentText,
        title: "CSOK & Lakástámogatás",
        description: "Teljes körű segítség a CSOK és egyéb állami lakástámogatások igénylésében.",
        features: ["Babaváró hitel", "Falusi CSOK", "Otthonfelújítási támogatás"],
    },
];

export default function Services() {
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
                        Szolgáltatásaink
                    </span>
                    <h2 className="heading-lg text-white mb-6">
                        Hogyan segíthetünk?
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Független tanácsadóként a Te érdekeidet képviseljük.
                        Több tucat pénzintézet ajánlatából választjuk ki a számodra legjobbat.
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
                                        Tudj meg többet
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
