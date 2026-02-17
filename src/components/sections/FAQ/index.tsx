"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer, viewportOnce } from "@/lib/animations";
import { NextIntlClientProvider, useTranslations, useLocale } from "next-intl";
import SectionHeader from "@/components/ui/common/SectionHeader";
import ExpansionPanel from "@/components/ui/common/ExpansionPanel";
import messages from "./i18n/hu.json";

export default function FAQ() {
  const locale = useLocale();
  return (
    <NextIntlClientProvider locale={locale} messages={{ FAQ: messages }}>
      <FAQContent />
    </NextIntlClientProvider>
  );
}

function FAQContent() {
  const t = useTranslations("FAQ");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items = t.raw("items") as Array<{ q: string; a: string }>;

  const faqs = items.map((item) => ({
    question: item.q,
    answer: item.a,
  }));

  return (
    <section id="faq" className="section-padding">
      <div className="container-custom mx-auto">
        <SectionHeader
          subtitle={t("subtitle")}
          titleStart={t("title_start")}
          titleHighlight={t("title_highlight")}
          description={t("description")}
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-3xl mx-auto space-y-4"
        >
          {faqs.map((faq, index) => (
            <ExpansionPanel
              key={index}
              title={faq.question}
              content={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
