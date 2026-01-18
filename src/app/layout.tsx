import type { Metadata } from "next";
import "./globals.css";
import CookieConsent from "@/components/ui/CookieConsent";

export const metadata: Metadata = {
    title: "Pénzügyi Tanácsadás | Hitel és Biztosítás Közvetítés",
    description: "Professzionális pénzügyi tanácsadás, hitelközvetítés és biztosítási megoldások. Személyre szabott ajánlatok, átlátható feltételek, megbízható partnerség.",
    keywords: ["hitelközvetítés", "biztosítás", "pénzügyi tanácsadás", "lakáshitel", "személyi kölcsön", "CSOK"],
    authors: [{ name: "Pénzügyi Alkusz" }],
    openGraph: {
        title: "Pénzügyi Tanácsadás | Hitel és Biztosítás Közvetítés",
        description: "Professzionális pénzügyi tanácsadás és közvetítés",
        type: "website",
        locale: "hu_HU",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="hu" className="scroll-smooth">
            <body className="antialiased">
                {children}
                <CookieConsent />
            </body>
        </html>
    );
}
