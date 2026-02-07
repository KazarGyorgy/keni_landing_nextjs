import React from "react";
import { HiArrowLeft } from "react-icons/hi";
import { useTranslations } from "next-intl";

export default function TermsAndConditions() {
    const t = useTranslations("Legal");

    return (
        <main className="min-h-screen bg-primary-900 text-white">
            <section className="section-padding pt-32">
                <div className="container-custom mx-auto">
                    <a
                        href="/"
                        className="inline-flex items-center gap-2 text-accent-400 hover:text-accent-300 transition-colors mb-8"
                    >
                        <HiArrowLeft className="w-5 h-5" />
                        {t("back_home")}
                    </a>

                    <div className="glass-card max-w-4xl mx-auto p-8 md:p-12 border-accent-500/20">
                        <h1 className="heading-lg mb-8 text-gradient-gold text-center">{t("terms.title")}</h1>

                        <div className="prose prose-invert prose-lg max-w-none text-gray-300">
                            <p className="lead text-xl text-white mb-8">
                                Jelen Általános Szerződési Feltételek (a továbbiakban: ÁSZF) tartalmazzák a weboldal használatának feltételeit.
                            </p>

                            <h2 className="text-white text-2xl font-bold mt-12 mb-6">1. Általános rendelkezések</h2>
                            <p>
                                A weboldal üzemeltetője fenntartja a jogot, hogy a weboldal tartalmát bármikor módosítsa, vagy a szolgáltatást megszüntesse. A felhasználó a weboldal használatával elfogadja jelen feltételeket.
                            </p>

                            <h2 className="text-white text-2xl font-bold mt-12 mb-6">2. A szolgáltatás leírása</h2>
                            <p>
                                A weboldal célja pénzügyi közvetítői szolgáltatások bemutatása és kapcsolatfelvételi lehetőség biztosítása. Az oldalon található információk tájékoztató jellegűek, és nem minősülnek hivatalos ajánlattételnek.
                            </p>

                            <h2 className="text-white text-2xl font-bold mt-12 mb-6">3. Felelősség kizárása</h2>
                            <p>
                                A weboldal célja az általános tájékoztatás. Az Üzemeltető mindent megtesz a weboldal zavartalan működéséért, azonban nem vállal felelősséget az esetleges technikai hibákból, leállásokból, vagy információhiányból eredő kellemetlenségekért. A weboldalon található információk nem minősülnek közvetlen ajánlattételnek vagy pénzügyi tanácsadásnak; a konkrét döntések előtt minden esetben egyeztetés szükséges. Az Üzemeltető kizárja felelősségét a látogatók által a honlap tartalma alapján konkrét egyeztetés és megbízás nélkül hozott üzleti vagy pénzügyi döntésekből eredő esetleges károkért.
                            </p>

                            <h2 className="text-white text-2xl font-bold mt-12 mb-6">4. Szerzői jogok</h2>
                            <p>
                                A weboldalon található minden tartalom (szöveg, kép, grafika, logó) szerzői jogi védelem alatt áll. Azok felhasználása, másolása vagy terjesztése kizárólag az üzemeltető írásos hozzájárulásával engedélyezett.
                            </p>

                            <h2 className="text-white text-2xl font-bold mt-12 mb-6">5. Irányadó jog</h2>
                            <p>
                                Jelen feltételekre a magyar jogszabályok az irányadók. Esetleges jogviták esetén a felek alávetik magukat a hatáskörrel és illetékességgel rendelkező magyar bíróságok döntésének.
                            </p>

                            <div className="mt-12 p-6 bg-white/5 rounded-xl border border-white/10">
                                <p className="text-sm text-gray-400 italic">
                                    {t("effective_date", { date: new Date().toLocaleDateString('hu-HU') })}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
