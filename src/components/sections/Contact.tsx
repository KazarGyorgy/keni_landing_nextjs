"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { HiPhone, HiMail, HiLocationMarker, HiArrowRight } from "react-icons/hi";
import { fadeInUp, fadeInLeft, fadeInRight, viewportOnce } from "@/lib/animations";

const contactInfo = [
    {
        icon: HiPhone,
        label: "Telefon",
        value: "+36 30 123 4567",
        href: "tel:+36301234567",
    },
    {
        icon: HiMail,
        label: "E-mail",
        value: "info@financehub.hu",
        href: "mailto:info@financehub.hu",
    },
    {
        icon: HiLocationMarker,
        label: "Iroda",
        value: "1051 Budapest, Példa utca 1.",
        href: "#",
    },
];

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    };

    return (
        <section id="kapcsolat" className="section-padding relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-500/20 to-transparent" />
                <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 10, repeat: Infinity }}
                    className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent-500/5 rounded-full blur-3xl"
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
                        Kapcsolat
                    </span>
                    <h2 className="heading-lg text-white mb-6">
                        Beszéljünk a{" "}
                        <span className="text-gradient-gold">lehetőségekről</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Vedd fel velünk a kapcsolatot, és ingyenes konzultáció keretében
                        segítünk megtalálni a számodra legjobb megoldást!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Contact Form */}
                    <motion.div
                        variants={fadeInLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOnce}
                    >
                        <div className="glass-card p-8 md:p-10">
                            {isSubmitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-12"
                                >
                                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                                        <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="font-display text-2xl font-bold text-white mb-4">
                                        Köszönjük megkeresését!
                                    </h3>
                                    <p className="text-gray-400 mb-6">
                                        Hamarosan felvesszük Önnel a kapcsolatot.
                                    </p>
                                    <button
                                        onClick={() => setIsSubmitted(false)}
                                        className="btn-secondary"
                                    >
                                        Új üzenet küldése
                                    </button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                                Név *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-colors"
                                                placeholder="Az Ön neve"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                                                Telefon *
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                required
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-colors"
                                                placeholder="+36 30 123 4567"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                            E-mail
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-colors"
                                            placeholder="pelda@email.com"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                                            Téma *
                                        </label>
                                        <select
                                            id="subject"
                                            name="subject"
                                            required
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-colors"
                                        >
                                            <option value="" className="bg-primary-900">Válasszon témát...</option>
                                            <option value="lakas" className="bg-primary-900">Lakáshitel</option>
                                            <option value="szemelyi" className="bg-primary-900">Személyi kölcsön</option>
                                            <option value="csok" className="bg-primary-900">CSOK / Lakástámogatás</option>
                                            <option value="biztositas" className="bg-primary-900">Biztosítás</option>
                                            <option value="egyeb" className="bg-primary-900">Egyéb kérdés</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                            Üzenet
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={4}
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-colors resize-none"
                                            placeholder="Írja le röviden, miben segíthetünk..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                                </svg>
                                                Küldés...
                                            </>
                                        ) : (
                                            <>
                                                Üzenet Küldése
                                                <HiArrowRight className="w-5 h-5" />
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        variants={fadeInRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOnce}
                        className="flex flex-col justify-center"
                    >
                        <div className="space-y-8">
                            <div>
                                <h3 className="font-display text-2xl font-bold text-white mb-4">
                                    Lépj kapcsolatba velünk
                                </h3>
                                <p className="text-gray-400 leading-relaxed">
                                    Hívj fel, vagy küldj üzenetet, és ingyenes konzultáció keretében
                                    megbeszéljük az igényeidet. Nincs rejtett költség, nincs kötelezettség.
                                </p>
                            </div>

                            <div className="space-y-6">
                                {contactInfo.map((info, index) => (
                                    <a
                                        key={index}
                                        href={info.href}
                                        className="flex items-center gap-5 group"
                                    >
                                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-500/20 to-accent-600/10 flex items-center justify-center group-hover:from-accent-500/30 group-hover:to-accent-600/20 transition-all duration-300">
                                            <info.icon className="w-6 h-6 text-accent-400" />
                                        </div>
                                        <div>
                                            <div className="text-gray-400 text-sm">{info.label}</div>
                                            <div className="text-white font-medium group-hover:text-accent-400 transition-colors">
                                                {info.value}
                                            </div>
                                        </div>
                                    </a>
                                ))}
                            </div>

                            {/* Opening hours */}
                            <div className="glass-card p-6">
                                <h4 className="font-display font-semibold text-white mb-4">
                                    Nyitvatartás
                                </h4>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-gray-400">Hétfő - Péntek</span>
                                        <span className="text-white">9:00 - 18:00</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-400">Szombat</span>
                                        <span className="text-white">9:00 - 13:00</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-400">Vasárnap</span>
                                        <span className="text-accent-400">Zárva</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
