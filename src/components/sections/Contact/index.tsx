"use client";

import SectionHeader from "@/components/ui/common/SectionHeader";
import meImg from "@/img/me.png";
import { fadeInLeft, fadeInRight, viewportOnce } from "@/lib/animations";
import { motion } from "framer-motion";
import { NextIntlClientProvider, useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import { HiLibrary, HiMail, HiPhone } from "react-icons/hi";
import ContactForm from "./ContactForm";
import ContactSuccess from "./ContactSuccess";
import ProtectedPhone from "@/components/ui/common/ProtectedPhone";
import messages from "./i18n/hu.json";

export default function Contact() {
    const locale = useLocale();
    return (
        <NextIntlClientProvider locale={locale} messages={{ Contact: messages }}>
            <ContactContent />
        </NextIntlClientProvider>
    );
}

function ContactContent() {
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
        },
        {
            icon: HiLibrary,
            label: t("info.labels.mnb"),
            value: "57467713",
        }
    ];

    return (
        <section id="contact" className="section-padding relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-500/20 to-transparent" />
                <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 10, repeat: Infinity }}
                    className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent-500/5 rounded-full blur-3xl"
                />
            </div>

            <div className="container-custom mx-auto relative z-10">
                <SectionHeader
                    subtitle={t("subtitle")}
                    titleStart={t("title_start")}
                    titleHighlight={t("title_highlight")}
                    description={t("description")}
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
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
                        className="flex flex-col justify-center text-center lg:text-left"
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

                            <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">

                                <div className="space-y-6 flex-1 w-full">
                                    {/* Contact Person */}
                                    <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-5 group justify-center lg:justify-start">
                                        <div className="relative w-14 h-14 rounded-2xl overflow-hidden flex-shrink-0 border-2 border-accent-500/20 shadow-lg shadow-accent-500/10">
                                            <Image
                                                src={meImg}
                                                alt={t("info.contact_person.name")}
                                                fill
                                                className="object-cover"
                                                sizes="56px"
                                                placeholder="blur"
                                            />
                                        </div>
                                        <div>
                                            <div className="text-gray-400 text-sm">{t("info.contact_person.name")}</div>
                                            <div className="text-white font-medium">{t("info.contact_person.role")}</div>
                                        </div>
                                    </div>
                                    {/* Contact Info */}
                                    {contactInfo.map((info, index) => (
                                        <div
                                            key={index}
                                            className="flex flex-col lg:flex-row items-center gap-4 lg:gap-5 group justify-center lg:justify-start"
                                        >
                                            <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-gradient-to-br from-accent-500/20 to-accent-600/10 flex items-center justify-center group-hover:from-accent-500/30 group-hover:to-accent-600/20 transition-all duration-300 flex-shrink-0">
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
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
