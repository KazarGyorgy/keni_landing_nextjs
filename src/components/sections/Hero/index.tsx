"use client";

import ScrollIndicator from "@/components/ui/navigation/ScrollIndicator";
import ServiceCard from "@/components/ui/cards/ServiceCard";
import { NextIntlClientProvider, useTranslations, useLocale } from "next-intl";
import { HiCreditCard, HiHome, HiShieldCheck } from "react-icons/hi";
import { MdApartment } from "react-icons/md";
import messages from "./i18n/hu.json";

export default function Services() {
    const locale = useLocale();
    return (
        <NextIntlClientProvider locale={locale} messages={{ Hero: messages }}>
            <ServicesContent />
        </NextIntlClientProvider>
    );
}

function ServicesContent() {
    const t = useTranslations("Hero");


    const iconMap = {
        mortgage: HiHome,
        personal_loan: HiCreditCard,
        insurance: HiShieldCheck,
        condominium: MdApartment,
    } as const;


    const servicesData = t.raw("items") as Record<string, {
        title: string;
        description: string;
        features: Record<string, string>;
    }>;


    const services = Object.entries(servicesData).map(([key, data]) => ({
        id: key.replace("_", "-"),
        icon: iconMap[key as keyof typeof iconMap],
        title: data.title,
        description: data.description,
        features: Object.values(data.features),
    }));

    return (
        <section id="services" className="section-padding relative min-h-screen flex flex-col justify-center">
            <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-500/20 to-transparent" />
            </div>

            <div className="container-custom mx-auto">
                <div className="text-center mb-8">
                    <p className="md:text-3xl 2xl:text-[36px] text-gray-400 my-2">
                        {t("description")}
                    </p>
                </div>

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
                <ScrollIndicator />
            </div>
        </section>
    );
}

function HeroContent() {
    return null;
}

