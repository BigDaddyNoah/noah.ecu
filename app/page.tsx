"use client";

import { useState } from "react";
import Image from "next/image";
import { mockTuningPakete, stage1Addons, TuningPaket } from "@/lib/data";

const galleryImages = [
  "/STAGE_12.png",
  "/STAGE_19.png",
  "/STAGE_18.png",
  "/STAGE_1.png",
  "/STAGE_17.png",
  "/STAGE_13.png",
  "/STAGE_110.png",
  "/STAGE_69.png",
  "/STAGE_16.png",
  "/STAGE_15.png",
  "/STAGE_14.png",
  "/STAGE_111.png",
  "/STAGE_112.png",
  "/STAGE_113.png",
  "/STAGE_67.png",
  "/STAGE_11.png",
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<"gallery" | "prices">("prices");

  return (
    <div className="min-h-screen bg-[#fbfbfd] text-[#1d1d1f] font-sans">
      {/* Minimal Header */}
      <header className="py-4 px-6 border-b border-[#f5f5f7] bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={100}
            height={100}
            className="object-contain"
            priority
          />
          <div className="hidden md:block text-sm font-medium text-[#86868b]">
            Professionelle Software Optimierung
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Apple-style Horizontal Toggle Switch - Centered */}
        <section className="mb-16 flex justify-center">
          <div className="max-w-md w-full">
            <nav className="bg-[#f5f5f7] p-1.5 rounded-2xl flex relative shadow-[0_8px_30px_rgba(94,24,235,0.08)]">
              <button
                onClick={() => setActiveTab("prices")}
                className={`flex-1 py-3 px-6 text-sm font-bold rounded-xl transition-all duration-300 z-10 text-center ${
                  activeTab === "prices"
                    ? "text-[#5e18eb]"
                    : "text-[#86868b] hover:text-[#1d1d1f]"
                }`}
              >
                Preise
              </button>
              <button
                onClick={() => setActiveTab("gallery")}
                className={`flex-1 py-3 px-6 text-sm font-bold rounded-xl transition-all duration-300 z-10 text-center ${
                  activeTab === "gallery"
                    ? "text-[#5e18eb]"
                    : "text-[#86868b] hover:text-[#1d1d1f]"
                }`}
              >
                Galerie
              </button>

              {/* Animated Indicator */}
              <div
                className="absolute top-1.5 bottom-1.5 bg-white rounded-xl shadow-[0_0_15px_rgba(94,24,235,0.2)] transition-all duration-300 ease-out"
                style={{
                  width: "calc(50% - 3px)",
                  left: activeTab === "prices" ? "1.5px" : "calc(50% + 1.5px)",
                }}
              />
            </nav>
          </div>
        </section>

        {/* Main Content Area */}
        <main>
          {activeTab === "gallery" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start animate-fadeIn">
              {galleryImages.map((src, index) => (
                <div
                  key={index}
                  className="group overflow-hidden bg-[#f5f5f7] shadow-sm border border-[#f5f5f7]"
                >
                  <img
                    src={src}
                    alt={`Project ${index + 1}`}
                    className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-16 animate-fadeIn">
              {/* Stage 1 Section */}
              <div className="flex flex-col gap-8">
                <div className="px-4">
                  <h2 className="text-2xl font-bold text-[#1d1d1f] tracking-tight">
                    Softwareoptimierung
                  </h2>
                </div>
                {mockTuningPakete
                  .filter((paket) => paket.aktiv && paket.id === "stage-1")
                  .map((paket) => (
                    <PriceListRow key={paket.id} paket={paket} />
                  ))}
              </div>

              {/* Other Services Section */}
              <div className="flex flex-col gap-8">
                <div className="px-4">
                  <h2 className="text-2xl font-bold text-[#1d1d1f] tracking-tight">
                    Einzeloptionen ohne Leistungssteigerung
                  </h2>
                </div>
                <div className="flex flex-col gap-8">
                  {mockTuningPakete
                    .filter(
                      (paket) =>
                        paket.aktiv &&
                        paket.id !== "custom" &&
                        paket.id !== "stage-1",
                    )
                    .map((paket) => (
                      <PriceListRow key={paket.id} paket={paket} />
                    ))}
                </div>
              </div>

              {/* Custom Request Card */}
              <div className="bg-[#f5f5f7] rounded-[2.5rem] p-12 mt-4 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 border border-[#eef1f5]">
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-[#1d1d1f]">
                    Sonderwünsche?
                  </h3>
                  <p className="text-[#86868b] max-w-md text-lg">
                    Dein Vorhaben ist hier nicht aufgeführt? Wir erstellen dir
                    gerne ein individuelles Angebot.
                  </p>
                </div>
                <a
                  href="https://wa.me/436609255080"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whitespace-nowrap px-10 py-5 bg-[#1d1d1f] text-white font-bold rounded-full hover:bg-black transition-all hover:scale-105 shadow-xl shadow-black/10"
                >
                  Individuelle Anfrage
                </a>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Footer Section */}
      <footer className="bg-white border-t border-[#f5f5f7] py-16 px-6 mt-20">
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-10 text-center">
          <div className="flex flex-col items-center gap-8 w-full">
            <a
              href="https://wa.me/436609255080"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-[#5e18eb] text-white font-bold rounded-full shadow-lg shadow-[#5e18eb]/20 hover:scale-105 transition-transform"
            >
              WhatsApp Kontakt
            </a>
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-xs text-[#86868b] font-bold uppercase tracking-widest">
              <a
                href="/impressum"
                className="hover:text-[#1d1d1f] transition-colors"
              >
                Impressum
              </a>
              <span>© 2026 noah.ecu</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky WhatsApp Button (Icon only) */}
      <a
        href="https://wa.me/436609255080"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-110 md:hidden"
        aria-label="WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className="w-7 h-7"
        >
          <path
            fill="currentColor"
            d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 339.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.8 0 96.7 19.3 131.9 54.1 36.2 35.8 56.2 84.4 56.2 133.3 0 101.8-84.1 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
          />
        </svg>
      </a>
    </div>
  );
}

function PriceListRow({ paket }: { paket: TuningPaket }) {
  return (
    <div className="bg-white rounded-[2.5rem] p-6 md:p-10 shadow-[0_2px_16px_rgba(0,0,0,0.03)] border border-[#f5f5f7] hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] transition-all duration-500">
      <div className="flex flex-col gap-6">
        {/* Header: Name and Price */}
        <div className="flex flex-row justify-between items-start gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col items-start">
              <h3 className="text-xl md:text-3xl font-bold text-[#1d1d1f] leading-tight tracking-tight">
                {paket.name}
              </h3>
              {paket.isStage1 && (
                <span className="bg-[#5e18eb]/10 text-[#5e18eb] text-[10px] md:text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mt-1.5">
                  Popular
                </span>
              )}
            </div>
            {/* Time on Desktop remains below name, but on Mobile we can keep it here or below */}
            <div className="hidden md:flex items-center gap-2 text-sm font-bold text-[#86868b] uppercase tracking-widest mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              {paket.dauerMin >= 60
                ? `ca. ${Math.round(paket.dauerMin / 60)} Std.`
                : `${paket.dauerMin} Min.`}
            </div>
          </div>

          <div className="flex flex-col items-end gap-1 shrink-0">
            <div className="text-xl md:text-4xl font-bold text-[#1d1d1f] whitespace-nowrap">
              {paket.isStage1 ? "ab " : ""}
              {paket.preisEUR} EUR
            </div>
            <p className="text-[10px] md:text-xs text-[#86868b] uppercase tracking-[0.1em] md:tracking-[0.2em] font-bold">
              {paket.isStage1 ? "Startpreis" : "Fixpreis"}
            </p>
          </div>
        </div>

        {/* Content: Description and Mobile Time */}
        <div>
          <p className="text-[#86868b] text-base md:text-lg leading-relaxed max-w-2xl mb-4 md:mb-0">
            {paket.beschreibung}
          </p>

          <div className="flex md:hidden items-center gap-2 text-xs font-bold text-[#86868b] uppercase tracking-widest">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            {paket.dauerMin >= 60
              ? `ca. ${Math.round(paket.dauerMin / 60)} Std.`
              : `${paket.dauerMin} Min.`}
          </div>
        </div>
      </div>

      {paket.isStage1 && (
        <div className="mt-10 pt-10 border-t border-[#f5f5f7]">
          <p className="text-sm font-bold text-[#1d1d1f] uppercase tracking-[0.25em] mb-8 text-center md:text-left">
            Zusatzoptionen
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {stage1Addons.map((addon) => (
              <div
                key={addon.id}
                className="bg-[#f5f5f7] rounded-2xl p-5 flex justify-between items-center hover:bg-[#ececf0] transition-all group"
              >
                <span className="text-base text-[#1d1d1f] font-semibold">
                  {addon.name}
                </span>
                <span className="text-sm text-[#5e18eb] font-bold bg-white px-4 py-1.5 rounded-xl shadow-sm group-hover:shadow-md transition-all">
                  +{addon.preisEUR} EUR
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
