"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, viewportOnce } from "@/lib/animations";
import { NextIntlClientProvider, useTranslations, useLocale } from "next-intl";
import CarouselNavigation from "@/components/ui/navigation/CarouselNavigation";
import NewsCard from "@/components/ui/cards/NewsCard";
import SectionHeader from "@/components/ui/common/SectionHeader";
import messages from "./i18n/hu.json";

export default function News() {
  const locale = useLocale();
  return (
    <NextIntlClientProvider locale={locale} messages={{ News: messages }}>
      <NewsContent />
    </NextIntlClientProvider>
  );
}

function NewsContent() {
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
    link: "#contact",
  }));

  const nextNews = () => {
    setCurrentIndex((prev) => (prev + 1) % news.length);
  };

  const prevNews = () => {
    setCurrentIndex((prev) => (prev - 1 + news.length) % news.length);
  };

  return (
    <section
      id="news"
      className="section-padding relative overflow-hidden content-visibility-auto"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-3xl" />
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
              <NewsCard
                news={news[currentIndex]}
                readMoreLabel={t("read_more")}
              />
            </AnimatePresence>

            <CarouselNavigation
              currentIndex={currentIndex}
              totalItems={news.length}
              onPrevious={prevNews}
              onNext={nextNews}
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
