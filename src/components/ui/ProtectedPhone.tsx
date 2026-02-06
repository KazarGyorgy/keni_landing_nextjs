"use client";

import { useState, useEffect } from "react";

interface ProtectedPhoneProps {
    className?: string;
}

export default function ProtectedPhone({ className = "" }: ProtectedPhoneProps) {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    // A szám darabolva, hogy a forráskódban ne legyen egyben kereshető
    // +36 20 852 2767
    const p1 = "36";
    const p2 = "20";
    const p3 = "852";
    const p4 = "2767";

    const fullNumber = `+${p1} ${p2} ${p3} ${p4}`;
    const telLink = `tel:+${p1}${p2}${p3}${p4}`;

    // Ha még nem töltődött be a kliens oldal (SSR), akkor egy trükkös struktúrát renderelünk
    // Amit a legtöbb bot nem tud jól értelmezni, de vizuálisan hasonlít
    if (!isClient) {
        return (
            <span className={className}>
                {/* Láthatatlan karakterekkel vagy span-ekkel tördelve */}
                <span>+36</span> <span className="hidden">no-bot</span>
                <span>20</span> <span className="hidden">xp</span>
                <span>852</span> <span>2767</span>
            </span>
        );
    }

    return (
        <a href={telLink} className={`${className} hover:text-accent-400 transition-colors`}>
            {fullNumber}
        </a>
    );
}
