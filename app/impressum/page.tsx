import Image from "next/image";

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fb] text-[#111827]">
      <header className="py-8 px-6 border-b border-[#f5f5f7] bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <a href="/">
            <Image
              src="/logo.png"
              alt="Logo"
              width={140}
              height={140}
              className="object-contain"
              priority
            />
          </a>
          <div className="hidden md:block text-sm font-medium text-[#86868b]">
            Professionelle Software Optimierung
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-8">Impressum</h1>

        <div className="space-y-6 text-sm leading-7">
          <p className="text-gray-600">Angaben gemäß § 5 ECG</p>

          <section>
            <p className="font-semibold">Noah Leon Ferahyan</p>
            <p>Am Bach 3</p>
            <p>6850 Dornbirn</p>
            <p>Österreich</p>
          </section>

          <section>
            <p>
              <span className="text-gray-600">E-Mail:</span>{" "}
              <a
                href="mailto:offnoah@proton.me"
                className="text-[#5e18eb] hover:underline"
              >
                offnoah@proton.me
              </a>
            </p>
            <p>
              <span className="text-gray-600">Telefon:</span>{" "}
              <a
                href="tel:+436609255080"
                className="text-[#5e18eb] hover:underline"
              >
                +43 660 9255080
              </a>
            </p>
          </section>

          <section>
            <p>
              <span className="text-gray-600">Tätigkeitsbereich:</span>{" "}
              Chiptuning / Softwareoptimierung von Fahrzeugen
            </p>
            <p>
              <span className="text-gray-600">Hinweis:</span> Derzeit keine
              Eintragung im Firmenbuch.
            </p>
          </section>
        </div>
      </main>

      <footer className="bg-white border-t border-[#f5f5f7] py-16 px-6 mt-20">
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-10 text-center">
          <a
            href="https://wa.me/436609255080"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 bg-[#5e18eb] text-white font-bold rounded-full shadow-lg shadow-[#5e18eb]/20 hover:scale-105 transition-transform"
          >
            WhatsApp Kontakt
          </a>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-xs text-[#86868b] font-bold uppercase tracking-widest">
            <a href="/" className="hover:text-[#1d1d1f] transition-colors">
              Startseite
            </a>
            <span>© 2026 noah.ecu</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
