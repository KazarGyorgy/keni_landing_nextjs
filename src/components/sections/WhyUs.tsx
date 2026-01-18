"use client";

import { motion } from "framer-motion";
import { HiCheckCircle, HiLightBulb, HiTrendingUp, HiChat } from "react-icons/hi";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";
import { useAnimatedCounter } from "@/hooks/useScrollAnimation";

const features = [
    {
        icon: HiCheckCircle,
        title: "100% Független",
        description: "Nem vagyunk egyetlen bankhoz sem kötve. Az Ön érdekeit képviseljük, nem a pénzintézetekét.",
    },
    {
        icon: HiLightBulb,
        title: "Személyre Szabott",
        description: "Minden ügyfél egyedi. Az Ön helyzetét és céljait figyelembe véve dolgozunk.",
    },
    {
        icon: HiTrendingUp,
        title: "Legjobb Feltételek",
        description: "Több tucat ajánlatot hasonlítunk össze, hogy Ön a lehető legjobb kondíciókat kapja.",
    },
    {
        icon: HiChat,
        title: "Folyamatos Támogatás",
        description: "Az ügyintézés során végig melletted állunk, és a szerződéskötés után is számíthatsz ránk.",
    },
];

const stats = [
    { value: 500, suffix: "+", label: "Elégedett ügyfél" },
    { value: 98, suffix: "%", label: "Sikeres ügyintézés" },
    { value: 10, suffix: "+", label: "Év tapasztalat" },
    { value: 30, suffix: "+", label: "Partner bank" },
];

function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
    const { ref, count } = useAnimatedCounter(value, 2000);

    return (
        <div ref={ref} className="text-center">
            <div className="font-display text-4xl md:text-5xl font-bold text-accent-400 mb-2">
                {count}{suffix}
            </div>
            <div className="text-gray-400 text-sm">{label}</div>
        </div>
    );
}

export default function WhyUs() {
    return (
        <section id="rolunk" className="section-padding relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="absolute -right-40 top-1/4 w-80 h-80 border border-accent-500/10 rounded-full"
                />
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                    className="absolute -left-20 bottom-1/4 w-60 h-60 border border-accent-500/5 rounded-full"
                />
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
                        Miért mi?
                    </span>
                    <h2 className="heading-lg text-white mb-6">
                        A különbség, ami{" "}
                        <span className="text-gradient-gold">számít</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Évek óta segítjük ügyfeleinket a legjobb pénzügyi döntések meghozatalában.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={staggerItem}
                            className="glass-card p-6 text-center group hover:bg-white/10 transition-all duration-300"
                        >
                            <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-accent-500/20 to-accent-600/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <feature.icon className="w-7 h-7 text-accent-400" />
                            </div>
                            <h3 className="font-display font-semibold text-white mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Stats Section */}
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    className="glass-card p-8 md:p-12"
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <StatCounter key={index} {...stat} />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
