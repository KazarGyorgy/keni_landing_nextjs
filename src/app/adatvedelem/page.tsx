import React from "react";
import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi";
import { useTranslations } from "next-intl";

export default function PrivacyPolicy() {
    const t = useTranslations("Legal");

    return (
        <main className="min-h-screen bg-primary-900 text-white">
            <section className="section-padding pt-32">
                <div className="container-custom mx-auto">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-accent-400 hover:text-accent-300 transition-colors mb-8"
                    >
                        <HiArrowLeft className="w-5 h-5" />
                        {t("back_home")}
                    </Link>

                    <div className="glass-card max-w-4xl mx-auto p-8 md:p-12 border-accent-500/20">
                        <h1 className="heading-lg mb-8 text-gradient-gold text-center">{t("privacy.title")}</h1>

                        <div className="prose prose-invert prose-lg max-w-none text-gray-300">
                            <p className="lead text-xl text-white mb-8">
                                Ez a dokumentum tájékoztatást nyújt arról, hogyan kezeljük személyes adatait weboldalunk használata során.
                                Kérjük, figyelmesen olvassa el.
                            </p>

                            <h2 className="text-white text-2xl font-bold mt-12 mb-6">1. Az Adatkezelő adatai</h2>
                            <p>
                                <strong>Név:</strong> [Vállalkozás Neve]<br />
                                <strong>Székhely:</strong> [Cím]<br />
                                <strong>E-mail:</strong> [Email cím]<br />
                                <strong>Telefon:</strong> [Telefonszám]
                            </p>

                            <h2 className="text-white text-2xl font-bold mt-12 mb-6">2. A kezelt adatok köre és az adatkezelés célja</h2>
                            <h3 className="text-white text-xl font-semibold mt-8 mb-4">Kapcsolatfelvételi űrlap</h3>
                            <p>
                                A weboldalon található űrlap kitöltésével Ön üzenetet küld az Adatkezelő részére.
                                <strong>Fontos:</strong> A megadott adatokat nem tároljuk weboldalhoz kapcsolódó adatbázisban.
                                Az űrlap tartalma közvetlenül e-mail formájában érkezik meg az Adatkezelőhöz, kizárólag kapcsolatfelvétel céljából.
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mb-6">
                                <li>Név (azonosítás céljából)</li>
                                <li>E-mail cím (válaszadás céljából)</li>
                                <li>Telefonszám (telefonos egyeztetés céljából)</li>
                                <li>Üzenet szövege (az Ön által megadott egyéb információk)</li>
                            </ul>
                            <p>
                                <strong>Jogalap:</strong> Az Ön önkéntes hozzájárulása a kapcsolatfelvételhez (GDPR 6. cikk (1) bekezdés a) pont).
                            </p>

                            <h2 className="text-white text-2xl font-bold mt-12 mb-6">3. Az adatkezelés időtartama és módja</h2>
                            <p>
                                A beérkező e-maileket a kapcsolatfelvétel és az ügyintézés lezárásáig, vagy az Ön törlési kérelméig őrizzük meg levelezőrendszerünkben.
                                Amennyiben nem jön létre üzleti kapcsolat, az adatait töröljük.
                            </p>

                            <h2 className="text-white text-2xl font-bold mt-12 mb-6">4. Adattovábbítás</h2>
                            <p>
                                Személyes adatait harmadik félnek nem továbbítjuk, kivéve, ha erre jogszabály kötelez minket, vagy ha ez a szolgáltatás teljesítéséhez (pl. banki partnerek felé történő közvetítés) elengedhetetlen, és ehhez Ön kifejezetten hozzájárult.
                            </p>

                            <h2 className="text-white text-2xl font-bold mt-12 mb-6">5. Az Ön jogai</h2>
                            <p>
                                Ön bármikor jogosult:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mb-6">
                                <li>Tájékoztatást kérni személyes adatai kezeléséről</li>
                                <li>Kérni adatai helyesbítését</li>
                                <li>Kérni adatai törlését ("elfeledtetéshez való jog")</li>
                                <li>Tiltakozni személyes adatai kezelése ellen</li>
                            </ul>

                            <h2 className="text-white text-2xl font-bold mt-12 mb-6">6. Jogorvoslati lehetőségek</h2>
                            <p>
                                Panaszával a Nemzeti Adatvédelmi és Információszabadság Hatósághoz (NAIH) fordulhat:
                                <br />
                                <em>1055 Budapest, Falk Miksa utca 9-11. | ugyfelszolgalat@naih.hu</em>
                            </p>

                            <div className="mt-12 p-6 bg-white/5 rounded-xl border border-white/10">
                                <p className="text-sm text-gray-400 italic">
                                    {t("last_updated", { date: new Date().toLocaleDateString('hu-HU') })}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
