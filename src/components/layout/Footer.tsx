"use client";

import { motion } from "framer-motion";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { HiPhone, HiMail, HiLocationMarker } from "react-icons/hi";
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
            { label: t("links.lakashitel"), href: "#" },
            { label: t("links.szemelyi_kolcson"), href: "#" },
            { label: t("links.csok"), href: "#" },
            { label: t("links.biztositasok"), href: "#" },
        ],
        informaciok: [
            { label: t("links.rolunk"), href: "#rolunk" },
            { label: t("links.gyakori_kerdesek"), href: "#gyik" },
        ],
        jogi: [
            { label: t("links.adatvedelem"), href: "/adatvedelem" },
            { label: t("links.aszf"), href: "/aszf" },
            { label: t("links.cookie_szabalyzat"), href: "/sutik" },
        ],
    };

    return (
        <footer className="relative bg-primary-900 border-t border-white/5">
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
                    <motion.div variants={staggerItem} className="lg:col-span-2">
                        <a href="#" className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center" aria-hidden="true">
                                <span className="text-primary-900 font-display font-bold text-xl">F</span>
                            </div>
                            <span className="font-display font-semibold text-xl text-white">
                                FinanceHub
                            </span>
                        </a>
                        <p className="text-gray-400 mb-6 max-w-sm leading-relaxed">
                            {t("brand_description")}
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3">
                            <a href="tel:+36301234567" className="flex items-center gap-3 text-gray-400 hover:text-accent-400 transition-colors">
                                <HiPhone className="w-5 h-5" aria-hidden="true" />
                                <span>+36 30 123 4567</span>
                            </a>
                            <a href="mailto:info@financehub.hu" className="flex items-center gap-3 text-gray-400 hover:text-accent-400 transition-colors">
                                <HiMail className="w-5 h-5" aria-hidden="true" />
                                <span>info@financehub.hu</span>
                            </a>
                            <div className="flex items-center gap-3 text-gray-400">
                                <HiLocationMarker className="w-5 h-5" aria-hidden="true" />
                                <span>{t("contact.address")}</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Links Columns */}
                    <motion.div variants={staggerItem}>
                        <h4 className="font-display font-semibold text-white mb-4">{t("headings.szolgaltatasok")}</h4>
                        <ul className="space-y-3">
                            {footerLinks.szolgaltatasok.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-accent-400 transition-colors text-sm"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div variants={staggerItem}>
                        <h4 className="font-display font-semibold text-white mb-4">{t("headings.informaciok")}</h4>
                        <ul className="space-y-3">
                            {footerLinks.informaciok.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-accent-400 transition-colors text-sm"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div variants={staggerItem}>
                        <h4 className="font-display font-semibold text-white mb-4">{t("headings.jogi")}</h4>
                        <ul className="space-y-3">
                            {footerLinks.jogi.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-accent-400 transition-colors text-sm"
                                    >
                                        {link.label}
                                    </a>
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

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        {socialLinks.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                aria-label={t(`social.${social.label}`)}
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-accent-500 hover:text-primary-900 transition-all duration-300"
                            >
                                <social.icon className="w-4 h-4" aria-hidden="true" />
                            </a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}
