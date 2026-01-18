"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronDown } from "react-icons/hi";
import { fadeInUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";

const faqs = [
    {
        question: "Mennyibe kerül a tanácsadás?",
        answer: "Az első konzultáció teljesen ingyenes és kötelezettségmentes. A hitel- és biztosítás közvetítés díját a pénzintézetek fizetik, így Önnek semmilyen extra költsége nem merül fel szolgáltatásaink igénybevételekor.",
    },
    {
        question: "Mennyi idő alatt intéződik egy hitelügy?",
        answer: "A folyamat általában 2-4 hét, de ez nagyban függ a szükséges dokumentumok rendelkezésre állásától és a bank aktuális leterheltségétől. Sürgős esetben gyorsított ügyintézést is tudunk biztosítani.",
    },
    {
        question: "Milyen dokumentumokra van szükség?",
        answer: "Az alapvető dokumentumok: személyi igazolvány, lakcímkártya, jövedelemigazolás (munkáltatói igazolás vagy NAV jövedelemigazolás), valamint az ingatlannal kapcsolatos iratok lakáshitel esetén. Az első konzultáción részletesen átbeszéljük, mi szükséges az Ön esetében.",
    },
    {
        question: "Hogyan garantálják, hogy a legjobb ajánlatot kapom?",
        answer: "Független tanácsadóként több mint 30 pénzintézettel állunk kapcsolatban. Minden esetben összehasonlítjuk az összes elérhető ajánlatot, és objektíven bemutatjuk azok előnyeit és hátrányait. A döntés mindig az Öné.",
    },
    {
        question: "Mi történik, ha elutasítják a hitelkérelmemet?",
        answer: "Ha egy banknál elutasítás történik, azonnal keresünk alternatív megoldást. Gyakran más banknál vagy módosított feltételekkel sikeres lehet az igénylés. Tapasztalatunk segít elkerülni a felesleges elutasításokat.",
    },
    {
        question: "Tudnak segíteni BAR listásoknak is?",
        answer: "Igen, bizonyos esetekben igen. Az első konzultáción feltérképezzük a helyzetet, és ha van reális lehetőség, megtaláljuk a megoldást. Őszintén tájékoztatjuk, ha nincs járható út.",
    },
];

function FAQItem({ question, answer, isOpen, onClick }: {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
}) {
    return (
        <motion.div
            variants={staggerItem}
            className="glass-card overflow-hidden"
        >
            <button
                onClick={onClick}
                className="w-full px-6 py-5 flex items-center justify-between text-left group"
                aria-expanded={isOpen}
            >
                <span className="font-display font-semibold text-white group-hover:text-accent-400 transition-colors pr-4">
                    {question}
                </span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center"
                >
                    <HiChevronDown className="w-5 h-5 text-accent-400" />
                </motion.div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="px-6 pb-5 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="gyik" className="section-padding">
            <div className="container-custom mx-auto">
                {/* Section Header */}
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    className="text-center mb-16"
                >
                    <span className="text-accent-400 font-medium text-sm uppercase tracking-widest mb-4 block">
                        GYIK
                    </span>
                    <h2 className="heading-lg text-white mb-6">
                        Gyakran ismételt{" "}
                        <span className="text-gradient-gold">kérdések</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Összegyűjtöttük a leggyakrabban feltett kérdéseket.
                        Ha nem találod a választ, keress minket bátran!
                    </p>
                </motion.div>

                {/* FAQ Items */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    className="max-w-3xl mx-auto space-y-4"
                >
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
