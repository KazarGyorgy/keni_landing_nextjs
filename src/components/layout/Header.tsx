"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { fadeIn } from "@/lib/animations";
import { useTranslations } from "next-intl";
import { SHOW_LANGUAGE_SWITCHER } from "@/lib/config";

import Link from "next/link";

export default function Header() {
    const t = useTranslations("Header");
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { href: "/#about", label: t("nav.about") },
        { href: "/#process", label: t("nav.process") },
        { href: "/#news", label: t("nav.news") },
        { href: "/#testimonials", label: t("nav.testimonials") },
        { href: "/#faq", label: t("nav.faq") },
        { href: "/#contact", label: t("nav.contact") },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <motion.header
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? "bg-primary-900/90 backdrop-blur-lg shadow-lg"
                    : "bg-transparent"
                    }`}
            >
                <nav className="container-custom mx-auto px-4 md:px-8">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center" aria-hidden="true">
                                <span className="text-primary-900 font-display font-bold text-xl">F</span>
                            </div>
                            <span className="font-display font-semibold text-xl text-white group-hover:text-accent-400 transition-colors">
                                {t("logo_text")}
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-8">
                            <ul className="flex items-center gap-8 list-none">
                                {navLinks.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="text-gray-300 hover:text-accent-400 transition-colors font-medium text-sm tracking-wide"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* CTA Button and Language Switcher Placeholder */}
                        <div className="hidden lg:flex items-center gap-4">
                            {SHOW_LANGUAGE_SWITCHER && (
                                <div className="text-white text-sm border border-white/20 px-2 py-1 rounded">
                                    HU | EN
                                </div>
                            )}
                            <Link href="/#contact" className="btn-primary text-sm">
                                {t("cta")}
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="lg:hidden p-2 text-white hover:text-accent-400 transition-colors"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle menu"
                            aria-expanded={isMobileMenuOpen}
                            aria-controls="mobile-menu"
                        >
                            {isMobileMenuOpen ? <HiX size={28} aria-hidden="true" /> : <HiMenuAlt3 size={28} aria-hidden="true" />}
                        </button>
                    </div>
                </nav>
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-x-0 top-20 z-40 lg:hidden"
                    >
                        <div className="mx-4 p-6 rounded-2xl bg-primary-800/95 backdrop-blur-xl border border-white/10 shadow-2xl">
                            <nav className="flex flex-col gap-4" id="mobile-menu">
                                <ul className="flex flex-col gap-4 list-none p-0 m-0">
                                    {navLinks.map((link) => (
                                        <li key={link.href}>
                                            <Link
                                                href={link.href}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className="block text-gray-200 hover:text-accent-400 transition-colors font-medium py-2 border-b border-white/5 last:border-0"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    href="/#contact"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="btn-primary text-center mt-4"
                                >
                                    {t("cta")}
                                </Link>
                            </nav>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
