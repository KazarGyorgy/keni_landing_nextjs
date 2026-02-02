"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronLeft, HiChevronRight, HiStar } from "react-icons/hi";
import { fadeInUp, viewportOnce } from "@/lib/animations";
import { useTranslations } from "next-intl";

export default function Testimonials() {
    const t = useTranslations("Testimonials");
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            id: 1,
            name: t("items.1.name"),
            title: t("items.1.title"),
            content: t("items.1.content"),
            rating: 5,
        },
        {
            id: 2,
            name: t("items.2.name"),
            title: t("items.2.title"),
            content: t("items.2.content"),
            rating: 5,
        },
        {
            id: 3,
            name: t("items.3.name"),
            title: t("items.3.title"),
            content: t("items.3.content"),
            rating: 5,
        },
        {
            id: 4,
            name: t("items.4.name"),
            title: t("items.4.title"),
            content: t("items.4.content"),
            rating: 5,
        },
    ];

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section id="velemenyek" className="section-padding relative overflow-hidden content-visibility-auto">
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-500/5 rounded-full blur-3xl" />
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

                {/* Testimonial Carousel */}
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
                                className="glass-card p-8 md:p-12"
                            >
                                {/* Quote icon */}
                                <div className="mb-6">
                                    <svg className="w-12 h-12 text-accent-500/30" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                    </svg>
                                </div>

                                {/* Content */}
                                <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
                                    &ldquo;{testimonials[currentIndex].content}&rdquo;
                                </p>

                                {/* Rating */}
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                        <HiStar key={i} className="w-5 h-5 text-accent-400" aria-hidden="true" />
                                    ))}
                                </div>

                                {/* Author */}
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center">
                                        <span className="text-primary-900 font-display font-bold text-lg">
                                            {testimonials[currentIndex].name.charAt(0)}
                                        </span>
                                    </div>
                                    <div>
                                        <div className="font-display font-semibold text-white">
                                            {testimonials[currentIndex].name}
                                        </div>
                                        <div className="text-gray-400 text-sm">
                                            {testimonials[currentIndex].title}
                                        </div>
                                    </div>
                                </div>
                            </motion.article>
                        </AnimatePresence>

                        {/* Navigation Buttons */}
                        <div className="flex items-center justify-center gap-4 mt-8">
                            <button
                                onClick={prevTestimonial}
                                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-accent-500 hover:text-primary-900 hover:border-accent-500 transition-all duration-300"
                                aria-label={t("aria.prev")}
                            >
                                <HiChevronLeft className="w-6 h-6" aria-hidden="true" />
                            </button>

                            {/* Dots */}
                            <div className="flex gap-2">
                                {testimonials.map((_, index) => (
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
                                onClick={nextTestimonial}
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
