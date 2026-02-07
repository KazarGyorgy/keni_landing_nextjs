"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function ScrollToHash() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        // Kis késleltetés, hogy a content-visibility: auto miatt
        // a DOM felépüljön és a magasságok helyesek legyenek
        const handleScroll = () => {
            const hash = window.location.hash;
            if (hash) {
                const id = hash.replace("#", "");
                const element = document.getElementById(id);
                if (element) {
                    // Sima görgetés az elemhez
                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                }
            }
        };

        // Azonnali próba
        handleScroll();

        // Késleltetett próbák a biztonság kedvéért (300ms és 800ms)
        const timeout1 = setTimeout(handleScroll, 300);
        const timeout2 = setTimeout(handleScroll, 800);

        return () => {
            clearTimeout(timeout1);
            clearTimeout(timeout2);
        };
    }, [pathname, searchParams]);

    return null;
}
