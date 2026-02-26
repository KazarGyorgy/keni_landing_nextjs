import DynamicCookieConsent from "@/components/ui/common/DynamicCookieConsent";
import ScrollToHash from "@/components/utils/ScrollToHash";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { LazyMotion, domAnimation } from "framer-motion";
import type { Viewport } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages, getTranslations } from "next-intl/server";
import { Inter, Outfit } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#0A1628",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    metadataBase: new URL("https://penzinfo.hu"),
    title: t("title"),
    description: t("description"),
    keywords: [
      "hitelközvetítés",
      "biztosítás",
      "pénzügyi tanácsadás",
      "lakáshitel",
      "személyi kölcsön",
      "Társasház biztosítás",
    ],
    authors: [{ name: "Pénzügyi Alkusz" }],
    openGraph: {
      title: t("og.title"),
      description: t("og.description"),
      url: "https://penzinfo.hu",
      siteName: "PénzINFO",
      type: "website",
      locale: "hu_HU",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth">
      <body
        className={`antialiased font-sans ${inter.variable} ${outfit.variable} select-none`}
      >
        <NextIntlClientProvider messages={messages}>
          <LazyMotion features={domAnimation}>
            {children}
            <Suspense fallback={null}>
              <ScrollToHash />
            </Suspense>
            <DynamicCookieConsent />
            <SpeedInsights />
            <Analytics />
          </LazyMotion>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
