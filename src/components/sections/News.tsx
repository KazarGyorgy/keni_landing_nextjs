"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronLeft, HiChevronRight, HiCalendar, HiArrowRight } from "react-icons/hi";
import { fadeInUp, viewportOnce } from "@/lib/animations";
import { useTranslations } from "next-intl";

export default function News() {
    const t = useTranslations("News");
    const [currentIndex, setCurrentIndex] = useState(0);

    const items = t.raw("items") as Array<{
        date: string;
        title: string;
        summary: string;
    }>;

    const news = items.map((item, index) => ({
        id: index + 1,
        ...item,
        link: "#contact"
    }));

    const nextNews = () => {
        setCurrentIndex((prev) => (prev + 1) % news.length);
    };

    const prevNews = () => {
        setCurrentIndex((prev) => (prev - 1 + news.length) % news.length);
    };

    return (
        <section id="news" className="section-padding relative overflow-hidden content-visibility-auto">
            {/* Background decoration - Distinct from Testimonials but similar style */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-3xl" />
            </div>

            <div className="container-custom mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    className="text-center mb-16"
                >
                    <span className="text-accent-400 font-medium text-sm uppercase tracking-widest mb-4 block">
                        {t("subtitle")}
                    </span>
                    <h2 className="heading-lg text-white mb-6">
                        {t("title_start")}{" "}
                        <span className="text-gradient-gold">{t("title_highlight")}</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        {t("description")}
                    </p>
                </motion.div>

                {/* News Carousel */}
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    className="max-w-4xl mx-auto"
                >
                    <div className="relative">
                        {/* Main Card */}
                        <AnimatePresence mode="wait">
                            <motion.article
                                key={currentIndex}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.3 }}
                                className="glass-card p-8 md:p-12 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-8 opacity-10">
                                    <HiCalendar className="w-24 h-24 text-accent-500" />
                                </div>

                                <div className="relative z-10">
                                    {/* Date */}
                                    <div className="flex items-center gap-2 text-accent-400 font-medium mb-4">
                                        <HiCalendar className="w-5 h-5" />
                                        <span>{news[currentIndex].date}</span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                                        {news[currentIndex].title}
                                    </h3>

                                    {/* Summary */}
                                    <p className="text-gray-300 text-lg leading-relaxed mb-8">
                                        {news[currentIndex].summary}
                                    </p>

                                    {/* Read More */}
                                    <a
                                        href={news[currentIndex].link}
                                        className="inline-flex items-center gap-2 text-white font-semibold hover:text-accent-400 transition-colors group"
                                    >
                                        {t("read_more")}
                                        <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </motion.article>
                        </AnimatePresence>

                        {/* Navigation Buttons */}
                        <div className="flex items-center justify-center gap-4 mt-8">
                            <button
                                onClick={prevNews}
                                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-accent-500 hover:text-primary-900 hover:border-accent-500 transition-all duration-300"
                                aria-label={t("aria.prev")}
                            >
                                <HiChevronLeft className="w-6 h-6" aria-hidden="true" />
                            </button>

                            {/* Dots */}
                            <div className="flex gap-2">
                                {news.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentIndex(index)}
                                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentIndex
                                            ? "bg-accent-400 w-8"
                                            : "bg-white/20 hover:bg-white/40"
                                            }`}
                                        aria-label={t("aria.dot", { n: index + 1 })}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={nextNews}
                                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-accent-500 hover:text-primary-900 hover:border-accent-500 transition-all duration-300"
                                aria-label={t("aria.next")}
                            >
                                <HiChevronRight className="w-6 h-6" aria-hidden="true" />
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
