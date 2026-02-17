"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";
import { staggerItem } from "@/lib/animations";

interface ProcessCardProps {
    step: {
        number: string;
        icon: IconType;
        title: string;
        description: string;
        id?: string;
    };
    index: number;
    totalSteps: number;
}

export default function ProcessCard({ step, index, totalSteps }: ProcessCardProps) {
    const isLastStep = index >= totalSteps - 1;

    return (
        <motion.li
            key={index}
            id={step.id}
            variants={staggerItem}
            className="relative list-none gpu-optimized"
        >
            <article className="glass-card p-6 md:h-full text-center group hover:bg-white/10 transition-all duration-300">

                <div className="relative z-10 mb-6">
                    <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform duration-300">
                        <step.icon className="w-7 h-7 text-primary-900" aria-hidden="true" />
                    </div>

                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary-800 border-2 border-accent-500 flex items-center justify-center text-accent-400 text-xs font-bold" aria-hidden="true">
                        {step.number}
                    </span>
                </div>

                <h3 className="font-display font-semibold text-white text-lg mb-3">
                    {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                    {step.description}
                </p>
            </article>


            {!isLastStep && (
                <div className="lg:hidden flex justify-center mt-6 mb-0" aria-hidden="true">
                    <motion.div
                        animate={{ y: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-8 h-8 rounded-full bg-accent-500/20 flex items-center justify-center"
                    >
                        <svg className="w-4 h-4 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </motion.div>
                </div>
            )}
        </motion.li>
    );
}
