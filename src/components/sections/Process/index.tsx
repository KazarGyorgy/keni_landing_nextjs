"use client";

import { motion } from "framer-motion";
import { HiPhone, HiClipboardCheck, HiDocumentSearch, HiCheckCircle } from "react-icons/hi";
import { staggerContainer, viewportOnce } from "@/lib/animations";
import { NextIntlClientProvider, useTranslations, useLocale } from "next-intl";
import ProcessCard from "@/components/ui/cards/ProcessCard";
import SectionHeader from "@/components/ui/common/SectionHeader";
import messages from "./i18n/hu.json";

export default function Process() {
    const locale = useLocale();
    return (
        <NextIntlClientProvider locale={locale} messages={{ Process: messages }}>
            <ProcessContent />
        </NextIntlClientProvider>
    );
}

function ProcessContent() {
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
                <SectionHeader
                    subtitle={t("subtitle")}
                    titleStart={t("title_start")}
                    titleHighlight={t("title_highlight")}
                    description={t("description")}
                />

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
                            <ProcessCard
                                key={index}
                                step={step}
                                index={index}
                                totalSteps={steps.length}
                            />
                        ))}
                    </ol>
                </motion.div>
            </div>
        </section>
    );
}
