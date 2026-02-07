import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useTranslations } from "next-intl";

export default function CookiePolicy() {
    const t = useTranslations("Legal");

    return (
        <>
            <Header />
            <main className="min-h-screen bg-primary-900 text-white">
                <section className="section-padding pt-32">
                    <div className="container-custom mx-auto">
                        <div className="glass-card max-w-4xl mx-auto p-8 md:p-12 border-accent-500/20">
                            <h1 className="heading-lg mb-8 text-gradient-gold text-center">{t("cookies.title")}</h1>

                            <div className="prose prose-invert prose-lg max-w-none text-gray-300">
                                <p className="lead text-xl text-white mb-8">
                                    Weboldalunk sütiket (cookie-kat) használ a felhasználói élmény javítása, valamint a weboldal működésének és biztonságának biztosítása érdekében.
                                </p>

                                <h2 className="text-white text-2xl font-bold mt-12 mb-6">1. Mik azok a sütik?</h2>
                                <p>
                                    A sütik kis méretű szöveges fájlok, amelyeket a weboldal helyez el az Ön számítógépén vagy mobileszközén. Ezek segítségével a weboldal "emlékszik" az Ön műveleteire és beállításaira (pl. bejelentkezés, nyelv, betűméret) egy bizonyos ideig.
                                </p>

                                <h2 className="text-white text-2xl font-bold mt-12 mb-6">2. Milyen sütiket használunk?</h2>

                                <h3 className="text-white text-xl font-semibold mt-8 mb-4">Szükséges sütik</h3>
                                <p>
                                    Ezek a sütik elengedhetetlenek a weboldal megfelelő működéséhez. Nélkülük a weboldal bizonyos funkciói nem érhetők el. Ezeket nem lehet kikapcsolni.
                                </p>

                                <h3 className="text-white text-xl font-semibold mt-8 mb-4">Analitikai sütik</h3>
                                <p>
                                    Ezek a sütik segítenek nekünk megérteni, hogyan használják a látogatók a weboldalt (pl. mely oldalakat látogatják a leggyakrabban). Az adatokat anonim módon gyűjtjük.
                                </p>

                                <h3 className="text-white text-xl font-semibold mt-8 mb-4">Marketing sütik</h3>
                                <p>
                                    Ezeket a sütiket arra használjuk, hogy az Ön érdeklődési körének megfelelő hirdetéseket jelenítsünk meg más weboldalakon.
                                </p>

                                <h2 className="text-white text-2xl font-bold mt-12 mb-6">3. Sütik kezelése</h2>
                                <p>
                                    A weboldalra való első látogatáskor megjelenő sávban Ön dönthet arról, hogy mely sütik használatát engedélyezi. A "Szükséges" sütik kivételével bármely kategória elutasítható. Döntését később bármikor módosíthatja a böngésző beállításaiban vagy a weboldal láblécében található "Cookie beállítások" linken keresztül.
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
            <Footer />
        </>
    );
}
