"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, viewportOnce } from "@/lib/animations";
import { NextIntlClientProvider, useTranslations, useLocale } from "next-intl";
import TestimonialCard from "@/components/ui/cards/TestimonialCard";
import CarouselNavigation from "@/components/ui/navigation/CarouselNavigation";
import SectionHeader from "@/components/ui/common/SectionHeader";
import messages from "./i18n/hu.json";

export default function Testimonials() {
  const locale = useLocale();
  return (
    <NextIntlClientProvider
      locale={locale}
      messages={{ Testimonials: messages }}
    >
      <TestimonialsContent />
    </NextIntlClientProvider>
  );
}

function TestimonialsContent() {
  const t = useTranslations("Testimonials");
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = t.raw("items") as Array<{
    name: string;
    title: string;
    content: string;
  }>;

  const testimonials = items.map((item, index) => ({
    id: index + 1,
    name: item.name,
    title: item.title,
    content: item.content,
    rating: 5,
  }));

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section
      id="testimonials"
      className="section-padding relative overflow-hidden content-visibility-auto"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom mx-auto relative z-10">
        <SectionHeader
          subtitle={t("subtitle")}
          titleStart={t("title_start")}
          titleHighlight={t("title_highlight")}
          description={t("description")}
        />
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            <AnimatePresence mode="wait">
              <TestimonialCard testimonial={testimonials[currentIndex]} />
            </AnimatePresence>
            <CarouselNavigation
              currentIndex={currentIndex}
              totalItems={testimonials.length}
              onPrevious={prevTestimonial}
              onNext={nextTestimonial}
              onDotClick={setCurrentIndex}
              ariaLabels={{
                previous: t("aria.prev"),
                next: t("aria.next"),
                dot: (index) => t("aria.dot", { n: index + 1 }),
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
