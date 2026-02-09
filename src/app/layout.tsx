import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages, getTranslations } from "next-intl/server";
import { Suspense } from "react";
import ScrollToHash from "@/components/utils/ScrollToHash";
import CookieConsent from "@/components/ui/common/CookieConsent";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const viewport: Viewport = {
    themeColor: "#0A1628",
};

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
    const t = await getTranslations({ locale: await getLocale(), namespace: "Metadata" });

    return {
        title: t("title"),
        description: t("description"),
        keywords: ["hitelközvetítés", "biztosítás", "pénzügyi tanácsadás", "lakáshitel", "személyi kölcsön", "Társasház biztosítás"],
        authors: [{ name: "Pénzügyi Alkusz" }],
        openGraph: {
            title: t("og.title"),
            description: t("og.description"),
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
    adjustFontFallback: true
});

const outfit = Outfit({
    subsets: ["latin"],
    variable: "--font-outfit",
    display: "swap",
    preload: true,
    adjustFontFallback: true
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
            <body className={`antialiased font-sans ${inter.variable} ${outfit.variable} select-none`}>
                <NextIntlClientProvider messages={messages}>
                    {children}
                    <Suspense fallback={null}>
                        <ScrollToHash />
                    </Suspense>
                    <CookieConsent />
                    <SpeedInsights />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
