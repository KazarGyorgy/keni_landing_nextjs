import { useTranslations } from "next-intl";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { privacyData } from "./privacy-data";
import { FaFilePdf, FaDownload } from "react-icons/fa6";
import { TermSection } from "@/components/legal/TermSection";

export default function PrivacyPolicy() {
  const t = useTranslations("Legal");

  return (
    <>
      <Header />
      <main className="min-h-screen bg-primary-900 text-white">
        <section className="section-padding pt-32">
          <div className="container-custom mx-auto">
            <div className="glass-card max-w-4xl mx-auto p-8 md:p-12 border-accent-500/20">
              <h1 className="heading-lg mb-8 text-gradient-gold text-center">
                {t("privacy.title")}
              </h1>

              <div className="prose prose-invert prose-lg max-w-none text-gray-300">
                {privacyData.intro.length > 0 && (
                  <>
                    <p className="lead text-xl text-white mb-8 flex flex-row sm:flex-row sm:items-center justify-end gap-4">
                      <a
                        href="/documents/Adatkezelesi_Tajekoztato_2026.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                        className="inline-flex items-center gap-3 px-5 py-2.5 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-lg transition-all border border-red-500/20 hover:border-red-500/30 group w-fit no-underline"
                      >
                        <FaFilePdf className="w-5 h-5 text-red-500" />
                        <FaDownload className="w-4 h-4 text-red-400/70 group-hover:translate-y-0.5 transition-transform" />
                      </a>
                    </p>
                    {privacyData.intro.slice(1).map((para, idx) => (
                      <p
                        key={`intro-${idx}`}
                        className="text-gray-300 mb-4 text-justify"
                      >
                        {para}
                      </p>
                    ))}
                  </>
                )}

                {/* Numbered Sections */}
                {privacyData.sections.length > 0 ? (
                  privacyData.sections.map((section, idx) => (
                    <TermSection
                      key={idx}
                      title={section.title}
                      content={section.content}
                    />
                  ))
                ) : (
                  <p className="text-red-400">
                    Nem sikerült betölteni az Adatkezelési Tájékoztató
                    szakaszait. Kérjük próbálja meg később.
                  </p>
                )}

                <div className="mt-12 p-6 bg-white/5 rounded-xl border border-white/10">
                  <p className="text-sm text-gray-400 italic">
                    {t("last_updated", {
                      date:
                        privacyData.lastUpdated ||
                        new Date().toLocaleDateString("hu-HU"),
                    })}
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
