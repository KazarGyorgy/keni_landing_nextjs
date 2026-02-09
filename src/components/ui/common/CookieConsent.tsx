"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiX, HiCog } from "react-icons/hi";
import { useTranslations } from "next-intl";
import CookieCategoryCard from "./CookieCategoryCard";

interface CookiePreferences {
    necessary: boolean;
    analytics: boolean;
    marketing: boolean;
}

const defaultPreferences: CookiePreferences = {
    necessary: true,
    analytics: false,
    marketing: false,
};

export default function CookieConsent() {
    const t = useTranslations("CookieConsent");
    const [isVisible, setIsVisible] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);

    useEffect(() => {
        const consent = localStorage.getItem("cookie-consent");
        if (!consent) {
            const timer = setTimeout(() => setIsVisible(true), 1500);
            return () => clearTimeout(timer);
        } else {
            try {
                const savedPrefs = JSON.parse(consent);
                setPreferences(savedPrefs);
            } catch {
                // Ignore parse errors
            }
        }
    }, []);

    const handleAcceptAll = () => {
        const allAccepted: CookiePreferences = {
            necessary: true,
            analytics: true,
            marketing: true,
        };
        savePreferences(allAccepted);
    };

    const handleAcceptNecessary = () => {
        savePreferences(defaultPreferences);
    };

    const handleSavePreferences = () => {
        savePreferences(preferences);
    };

    const savePreferences = (prefs: CookiePreferences) => {
        localStorage.setItem("cookie-consent", JSON.stringify(prefs));
        localStorage.setItem("cookie-consent-date", new Date().toISOString());
        setPreferences(prefs);
        setIsVisible(false);
        setShowSettings(false);
    };

    const togglePreference = (key: keyof CookiePreferences) => {
        if (key === "necessary") return;
        setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <>
                    {/* Backdrop for settings modal */}
                    {showSettings && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
                            onClick={() => setShowSettings(false)}
                        />
                    )}

                    {/* Main Banner */}
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 100, opacity: 0 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
                        role="region"
                        aria-label={t("banner.aria_label")}
                    >
                        <div className="container-custom mx-auto">
                            <div className="bg-primary-900 border border-white/10 rounded-2xl shadow-xl p-6 md:p-8 border-accent-500/20">
                                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                                    {/* Text Content */}
                                    <div className="flex-1">
                                        <div className="font-display font-semibold text-white text-lg mb-2">
                                            {t("banner.title")}
                                        </div>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            {t("banner.description")}{" "}
                                            <a href="/adatvedelem" className="text-accent-400 hover:underline">
                                                {t("banner.privacy_link")}
                                            </a>
                                        </p>
                                    </div>

                                    {/* Buttons */}
                                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
                                        <button
                                            onClick={() => setShowSettings(true)}
                                            className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 font-medium text-sm hover:bg-white/10 transition-colors"
                                        >
                                            <HiCog className="w-4 h-4" />
                                            {t("buttons.settings")}
                                        </button>
                                        <button
                                            onClick={handleAcceptNecessary}
                                            className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 font-medium text-sm hover:bg-white/10 transition-colors"
                                        >
                                            {t("buttons.accept_necessary")}
                                        </button>
                                        <button
                                            onClick={handleAcceptAll}
                                            className="btn-primary text-sm py-3"
                                        >
                                            {t("buttons.accept_all")}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Settings Modal */}
                    <AnimatePresence>
                        {showSettings && (
                            <div className="fixed inset-0 z-[70] flex items-end md:items-center md:justify-center p-0 md:p-4">
                                <motion.div
                                    initial={{ opacity: 0, y: "100%" }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: "100%" }}
                                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                                    className="w-full md:w-auto md:min-w-[32rem] md:max-w-lg max-h-[85vh]"
                                    role="dialog"
                                    aria-modal="true"
                                    aria-labelledby="cookie-settings-title"
                                >
                                    <div className="bg-primary-900 border border-white/10 shadow-xl border-accent-500/20 rounded-t-2xl rounded-b-none border-b-0 md:rounded-2xl md:border-b flex flex-col max-h-[85vh]">
                                        {/* Header */}
                                        <div className="flex items-center justify-between p-6 md:p-8 pb-4 md:pb-4 flex-shrink-0">
                                            <div id="cookie-settings-title" className="font-display font-semibold text-white text-xl">
                                                {t("modal.title")}
                                            </div>
                                            <button
                                                onClick={() => setShowSettings(false)}
                                                className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white transition-colors"
                                                aria-label="Close"
                                            >
                                                <HiX className="w-5 h-5" />
                                            </button>
                                        </div>

                                        {/* Cookie Categories - Scrollable */}
                                        <div className="px-6 md:px-8 overflow-y-auto flex-1">
                                            <div className="space-y-4 pb-4">
                                                <CookieCategoryCard
                                                    title={t("categories.necessary.title")}
                                                    description={t("categories.necessary.description")}
                                                    isAlwaysActive
                                                    alwaysActiveLabel={t("categories.necessary.always_active")}
                                                    labelId="necessary-cookies-label"
                                                />

                                                <CookieCategoryCard
                                                    title={t("categories.analytics.title")}
                                                    description={t("categories.analytics.description")}
                                                    checked={preferences.analytics}
                                                    onToggle={() => togglePreference("analytics")}
                                                    labelId="analytics-cookies-label"
                                                />

                                                <CookieCategoryCard
                                                    title={t("categories.marketing.title")}
                                                    description={t("categories.marketing.description")}
                                                    checked={preferences.marketing}
                                                    onToggle={() => togglePreference("marketing")}
                                                    labelId="marketing-cookies-label"
                                                />
                                            </div>
                                        </div>

                                        {/* Actions - Fixed Footer */}
                                        <div className="p-6 md:p-8 pt-4 md:pt-4 border-t border-white/10 flex-shrink-0">
                                            <div className="flex flex-col sm:flex-row gap-3">
                                                <button
                                                    onClick={handleSavePreferences}
                                                    className="btn-primary flex-1 py-3"
                                                >
                                                    {t("buttons.save_preferences")}
                                                </button>
                                                <button
                                                    onClick={handleAcceptAll}
                                                    className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 font-medium text-sm hover:bg-white/10 transition-colors flex-1"
                                                >
                                                    {t("buttons.accept_all")}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        )}
                    </AnimatePresence>
                </>
            )}
        </AnimatePresence>
    );
}
