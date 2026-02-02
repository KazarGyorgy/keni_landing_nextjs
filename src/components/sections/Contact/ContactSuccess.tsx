"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function ContactSuccess() {
    const t = useTranslations("Contact");

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12"
        >
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
            </div>
            <h3 className="font-display text-2xl font-bold text-white mb-4">
                {t("success.title")}
            </h3>
            <p className="text-gray-400 mb-6">
                {t("success.message")}
            </p>
            <button
                onClick={() => {
                    window.location.reload();
                }}
                className="btn-secondary"
            >
                {t("success.new_message")}
            </button>
        </motion.div>
    );
}
