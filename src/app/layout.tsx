import type { Metadata, Viewport } from "next";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages, getTranslations } from "next-intl/server";
import CookieConsent from "@/components/ui/CookieConsent";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const viewport: Viewport = {
    themeColor: "#0A1628",
};

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
    const t = await getTranslations({ locale: await getLocale(), namespace: "Metadata" });

    return {
        title: t("title"),
        description: t("description"),
        keywords: ["hitelközvetítés", "biztosítás", "pénzügyi tanácsadás", "lakáshitel", "személyi kölcsön", "CSOK"],
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

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const locale = await getLocale();
    const messages = await getMessages();

    return (
        <html lang={locale} className="scroll-smooth">
            <body className="antialiased">
                <NextIntlClientProvider messages={messages}>
                    {children}
                    <CookieConsent />
                    <SpeedInsights />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
