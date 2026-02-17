"use client";

import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { HiLibrary, HiMail, HiPhone } from "react-icons/hi";
import ProtectedPhone from "../ui/common/ProtectedPhone";
import FooterLinkColumn from "../ui/footer/FooterLinkColumn";
import FooterCopyright from "../ui/footer/FooterCopyright";

const socialLinks = [
  { icon: FaFacebookF, href: "#", label: "facebook" },
  { icon: FaLinkedinIn, href: "#", label: "linkedin" },
  { icon: FaInstagram, href: "#", label: "instagram" },
];

export default function Footer() {
  const t = useTranslations("Footer");
  const currentYear = new Date().getFullYear();

  const linkGroups = t.raw("link_groups") as {
    services: Array<{ label: string; href: string }>;
    info: Array<{ label: string; href: string }>;
    legal: Array<{ label: string; href: string }>;
  };

  return (
    <footer className="relative bg-primary-900 border-t border-white/5">
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-500/50 to-transparent"
        aria-hidden="true"
      />

      <div className="container-custom mx-auto section-padding pb-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8"
        >
          <motion.div
            variants={staggerItem}
            className="lg:col-span-2 text-center md:text-left"
          >
            <Link
              href="/"
              className="flex items-center justify-center md:justify-start gap-3 mb-6"
            >
              <div
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center"
                aria-hidden="true"
              >
                <span className="text-primary-900 font-display font-bold text-xl">
                  F
                </span>
              </div>
              <span className="font-display font-semibold text-xl text-white">
                {t("brand_name")}
              </span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm leading-relaxed mx-auto md:mx-0">
              {t("brand_description")}
            </p>

            <address className="space-y-3 not-italic flex flex-col items-center md:items-start">
              <div className="flex items-center gap-3 text-gray-400">
                <HiPhone className="w-5 h-5" aria-hidden="true" />
                <ProtectedPhone />
              </div>
              <a
                href="mailto:info@penzinfo.hu"
                className="flex items-center gap-3 text-gray-400 hover:text-accent-400 transition-colors"
              >
                <HiMail className="w-5 h-5" aria-hidden="true" />
                <span>info@penzinfo.hu</span>
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <HiLibrary className="w-5 h-5" aria-hidden="true" />
                <span> MNB nyilvántartási szám: 57467713</span>
              </div>
            </address>
          </motion.div>

          <FooterLinkColumn
            heading={t("headings.services")}
            links={linkGroups.services}
          />

          <FooterLinkColumn
            heading={t("headings.info")}
            links={linkGroups.info}
          />

          <FooterLinkColumn
            heading={t("headings.legal")}
            links={linkGroups.legal}
          />
        </motion.div>

        <FooterCopyright
          copyrightText={t("copyright", { year: currentYear })}
        />
      </div>
    </footer>
  );
}
