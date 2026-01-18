"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { fadeIn } from "@/lib/animations";

const navLinks = [
    { href: "#szolgaltatasok", label: "Szolgáltatások" },
    { href: "#rolunk", label: "Rólunk" },
    { href: "#folyamat", label: "Hogyan működik" },
    { href: "#velemenyek", label: "Vélemények" },
    { href: "#gyik", label: "GYIK" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
                        <a href="#" className="flex items-center gap-3 group">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center">
                                <span className="text-primary-900 font-display font-bold text-xl">F</span>
                            </div>
                            <span className="font-display font-semibold text-xl text-white group-hover:text-accent-400 transition-colors">
                                FinanceHub
                            </span>
                        </a>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="text-gray-300 hover:text-accent-400 transition-colors font-medium text-sm tracking-wide"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div className="hidden lg:flex items-center gap-4">
                            <a href="#kapcsolat" className="btn-primary text-sm">
                                Ingyenes Konzultáció
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="lg:hidden p-2 text-white hover:text-accent-400 transition-colors"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
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
                            <nav className="flex flex-col gap-4">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        onClick={handleNavClick}
                                        className="text-gray-200 hover:text-accent-400 transition-colors font-medium py-2 border-b border-white/5 last:border-0"
                                    >
                                        {link.label}
                                    </a>
                                ))}
                                <a
                                    href="#kapcsolat"
                                    onClick={handleNavClick}
                                    className="btn-primary text-center mt-4"
                                >
                                    Ingyenes Konzultáció
                                </a>
                            </nav>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
