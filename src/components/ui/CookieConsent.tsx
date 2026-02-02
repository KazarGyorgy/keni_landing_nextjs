"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiX, HiCog } from "react-icons/hi";

interface CookiePreferences {
    necessary: boolean;
    analytics: boolean;
    marketing: boolean;
}

const defaultPreferences: CookiePreferences = {
    necessary: true, // Mindig true, nem kikapcsolható
    analytics: false,
    marketing: false,
};

export default function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);

    useEffect(() => {
        // Ellenőrizzük, hogy a felhasználó már elfogadta-e a cookie-kat
        const consent = localStorage.getItem("cookie-consent");
        if (!consent) {
            // Kis késleltetés a jobb UX-ért
            const timer = setTimeout(() => setIsVisible(true), 1500);
            return () => clearTimeout(timer);
        } else {
            // Betöltjük a mentett preferenciákat
            try {
                const savedPrefs = JSON.parse(consent);
                setPreferences(savedPrefs);
            } catch {
                // Ha nem sikerül parse-olni, alapértéket használunk
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
        if (key === "necessary") return; // Szükséges cookie-k nem kikapcsolhatók
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
                        aria-label="Cookie beleegyezés"
                    >
                        <div className="container-custom mx-auto">
                            <div className="bg-primary-900 border border-white/10 rounded-2xl shadow-xl p-6 md:p-8 border-accent-500/20">
                                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                                    {/* Text Content */}
                                    <div className="flex-1">
                                        <h3 className="font-display font-semibold text-white text-lg mb-2">
                                            🍪 Cookie beállítások
                                        </h3>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            Weboldalunk cookie-kat használ a felhasználói élmény javítása és a weboldal
                                            működésének biztosítása érdekében. A &ldquo;Beállítások&rdquo; gombra kattintva
                                            testreszabhatod, hogy mely cookie-kat engedélyezed.{" "}
                                            <a href="#" className="text-accent-400 hover:underline">
                                                Adatvédelmi tájékoztató
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
                                            Beállítások
                                        </button>
                                        <button
                                            onClick={handleAcceptNecessary}
                                            className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 font-medium text-sm hover:bg-white/10 transition-colors"
                                        >
                                            Csak szükségesek
                                        </button>
                                        <button
                                            onClick={handleAcceptAll}
                                            className="btn-primary text-sm py-3"
                                        >
                                            Összes elfogadása
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Settings Modal */}
                    <AnimatePresence>
                        {showSettings && (
                            <motion.div
                                initial={{ opacity: 0, y: "100%" }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: "100%" }}
                                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                                className="fixed inset-x-0 bottom-0 top-auto z-[70] md:top-1/2 md:bottom-auto md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-lg md:inset-x-auto"
                                role="dialog"
                                aria-modal="true"
                                aria-labelledby="cookie-settings-title"
                            >
                                <div className="bg-primary-900 border border-white/10 shadow-xl border-accent-500/20 max-h-[85vh] overflow-y-auto safe-area-pb rounded-t-2xl rounded-b-none border-b-0 md:rounded-2xl md:border-b md:p-8 p-6 pb-8">
                                    {/* Header */}
                                    <div className="flex items-center justify-between mb-6">
                                        <h3 id="cookie-settings-title" className="font-display font-semibold text-white text-xl">
                                            Cookie beállítások
                                        </h3>
                                        <button
                                            onClick={() => setShowSettings(false)}
                                            className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white transition-colors"
                                        >
                                            <HiX className="w-5 h-5" />
                                        </button>
                                    </div>

                                    {/* Cookie Categories */}
                                    <div className="space-y-4 mb-8">
                                        {/* Necessary */}
                                        <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="font-medium text-white">Szükséges cookie-k</span>
                                                <div className="px-3 py-1 rounded-full bg-accent-500/20 text-accent-400 text-xs font-medium">
                                                    Mindig aktív
                                                </div>
                                            </div>
                                            <p className="text-gray-400 text-sm">
                                                Ezek a cookie-k elengedhetetlenek a weboldal működéséhez. Nélkülük az oldal
                                                alapvető funkciói nem működnének megfelelően.
                                            </p>
                                        </div>

                                        {/* Analytics */}
                                        <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="font-medium text-white" id="analytics-cookies-label">Analitikai cookie-k</span>
                                                <button
                                                    onClick={() => togglePreference("analytics")}
                                                    className={`relative w-12 h-6 rounded-full transition-colors ${preferences.analytics ? "bg-accent-500" : "bg-white/20"
                                                        }`}
                                                    role="switch"
                                                    aria-checked={preferences.analytics}
                                                    aria-labelledby="analytics-cookies-label"
                                                >
                                                    <span
                                                        className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${preferences.analytics ? "left-7" : "left-1"
                                                            }`}
                                                    />
                                                </button>
                                            </div>
                                            <p className="text-gray-400 text-sm">
                                                Segítenek megérteni, hogyan használják a látogatók a weboldalt.
                                                Az adatok anonim módon kerülnek összegyűjtésre.
                                            </p>
                                        </div>

                                        {/* Marketing */}
                                        <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="font-medium text-white" id="marketing-cookies-label">Marketing cookie-k</span>
                                                <button
                                                    onClick={() => togglePreference("marketing")}
                                                    className={`relative w-12 h-6 rounded-full transition-colors ${preferences.marketing ? "bg-accent-500" : "bg-white/20"
                                                        }`}
                                                    role="switch"
                                                    aria-checked={preferences.marketing}
                                                    aria-labelledby="marketing-cookies-label"
                                                >
                                                    <span
                                                        className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${preferences.marketing ? "left-7" : "left-1"
                                                            }`}
                                                    />
                                                </button>
                                            </div>
                                            <p className="text-gray-400 text-sm">
                                                Személyre szabott hirdetések megjelenítéséhez használjuk.
                                                Ezek segítenek releváns tartalmak megjelenítésében.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Actions */}
                                    <div className="flex flex-col sm:flex-row gap-3">
                                        <button
                                            onClick={handleSavePreferences}
                                            className="btn-primary flex-1 py-3"
                                        >
                                            Beállítások mentése
                                        </button>
                                        <button
                                            onClick={handleAcceptAll}
                                            className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 font-medium text-sm hover:bg-white/10 transition-colors flex-1"
                                        >
                                            Összes elfogadása
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </>
            )}
        </AnimatePresence>
    );
}
