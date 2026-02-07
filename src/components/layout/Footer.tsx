"use client";

import { motion } from "framer-motion";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { HiPhone, HiMail, HiLibrary } from "react-icons/hi";
import ProtectedPhone from "../ui/ProtectedPhone";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";
import { useTranslations } from "next-intl";

const socialLinks = [
    { icon: FaFacebookF, href: "#", label: "facebook" },
    { icon: FaLinkedinIn, href: "#", label: "linkedin" },
    { icon: FaInstagram, href: "#", label: "instagram" },
];

export default function Footer() {
    const t = useTranslations("Footer");
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        szolgaltatasok: [
            { label: t("links.mortgage"), href: "/#mortgage" },
            { label: t("links.personal_loan"), href: "/#personal-loan" },
            { label: t("links.savings"), href: "/#condominium" },
            { label: t("links.insurance"), href: "/#insurance" },
        ],
        informaciok: [
            { label: t("links.about"), href: "/#about" },
            { label: t("links.news"), href: "/#news" },
            { label: t("links.faq"), href: "/#faq" },
        ],
        jogi: [
            { label: t("links.privacy"), href: "/adatvedelem" },
            { label: t("links.terms"), href: "/aszf" },
            { label: t("links.cookies"), href: "/sutik" },
        ],
    };

    return (
        <footer className="relative bg-primary-900 border-t border-white/5" >
            {/* Decorative gradient */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-500/50 to-transparent" aria-hidden="true" />

            <div className="container-custom mx-auto section-padding pb-8">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8"
                >
                    {/* Brand Column */}
                    <motion.div variants={staggerItem} className="lg:col-span-2 text-center md:text-left">
                        <Link href="/" className="flex items-center justify-center md:justify-start gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center" aria-hidden="true">
                                <span className="text-primary-900 font-display font-bold text-xl">F</span>
                            </div>
                            <span className="font-display font-semibold text-xl text-white">
                                {t("brand_name")}
                            </span>
                        </Link>
                        <p className="text-gray-400 mb-6 max-w-sm leading-relaxed mx-auto md:mx-0">
                            {t("brand_description")}
                        </p>

                        {/* Contact Info */}
                        <address className="space-y-3 not-italic flex flex-col items-center md:items-start">
                            <div className="flex items-center gap-3 text-gray-400">
                                <HiPhone className="w-5 h-5" aria-hidden="true" />
                                <ProtectedPhone />
                            </div>
                            <a href="mailto:info@penzinfo.hu" className="flex items-center gap-3 text-gray-400 hover:text-accent-400 transition-colors">
                                <HiMail className="w-5 h-5" aria-hidden="true" />
                                <span>info@penzinfo.hu</span>
                            </a>
                            <div className="flex items-center gap-3 text-gray-400">
                                <HiLibrary className="w-5 h-5" aria-hidden="true" />
                                <span> MNB nyilvántartási szám: 57467713</span>
                            </div>

                        </address>
                    </motion.div>

                    {/* Links Columns */}
                    <motion.div variants={staggerItem} className="text-center md:text-left">
                        <h4 className="font-display font-semibold text-white mb-4">{t("headings.services")}</h4>
                        <ul className="space-y-3">
                            {footerLinks.szolgaltatasok.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-accent-400 transition-colors text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div variants={staggerItem} className="text-center md:text-left">
                        <h4 className="font-display font-semibold text-white mb-4">{t("headings.info")}</h4>
                        <ul className="space-y-3">
                            {footerLinks.informaciok.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-accent-400 transition-colors text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div variants={staggerItem} className="text-center md:text-left">
                        <h4 className="font-display font-semibold text-white mb-4">{t("headings.legal")}</h4>
                        <ul className="space-y-3">
                            {footerLinks.jogi.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-accent-400 transition-colors text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </motion.div>

                {/* Bottom Bar */}
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4"
                >
                    <p className="text-gray-500 text-sm">
                        {t("copyright", { year: currentYear })}
                    </p>
                    {/*  */}
                </motion.div>
            </div>
        </footer >
    );
}
