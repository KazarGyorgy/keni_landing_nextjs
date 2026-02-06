"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { HiPhone, HiMail, HiLocationMarker } from "react-icons/hi";
import { fadeInUp, fadeInLeft, fadeInRight, viewportOnce } from "@/lib/animations";
import { useTranslations } from "next-intl";
import ContactForm from "./Contact/ContactForm";
import ContactSuccess from "./Contact/ContactSuccess";
import ProtectedPhone from "../ui/ProtectedPhone";

export default function Contact() {
    const t = useTranslations("Contact");
    const [showSuccess, setShowSuccess] = useState(false);

    const contactInfo = [
        {
            icon: HiPhone,
            label: t("info.labels.phone"),
            value: "",
            href: "",
        },
        {
            icon: HiMail,
            label: t("info.labels.email"),
            value: "info@penzinfo.hu",
            href: "mailto:info@penzinfo.hu",
        }
    ];

    return (
        <section id="contact" className="section-padding relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-500/20 to-transparent" />
                <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 10, repeat: Infinity }}
                    className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent-500/5 rounded-full blur-3xl"
                />
            </div>

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

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Contact Form */}
                    <motion.div
                        variants={fadeInLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOnce}
                    >
                        <div className="glass-card p-6 xl:p-8">
                            {showSuccess ? (
                                <ContactSuccess />
                            ) : (
                                <ContactForm onSuccess={() => setShowSuccess(true)} />
                            )}
                        </div>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        variants={fadeInRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOnce}
                        className="flex flex-col justify-center"
                    >
                        <div className="space-y-8">
                            <div>
                                <h3 className="font-display text-2xl font-weight-500 text-white mb-4">
                                    {t("info.title")}
                                </h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {t("info.description")}
                                </p>
                            </div>

                            <div className="space-y-6">
                                {contactInfo.map((info, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-5 group"
                                    >
                                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-500/20 to-accent-600/10 flex items-center justify-center group-hover:from-accent-500/30 group-hover:to-accent-600/20 transition-all duration-300">
                                            <info.icon className="w-6 h-6 text-accent-400" aria-hidden="true" />
                                        </div>
                                        <div>
                                            <div className="text-gray-400 text-sm">{info.label}</div>
                                            <div className="text-white font-medium group-hover:text-accent-400 transition-colors">
                                                {info.label === t("info.labels.phone") ? (
                                                    <ProtectedPhone />
                                                ) : (
                                                    <a href={info.href}>{info.value}</a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
