"use client";

interface AGBModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AGBModal({ isOpen, onClose }: AGBModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md">
      <div className="bg-[#262626] rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] mx-4 border border-gray-700 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <h2 className="text-2xl font-bold text-white">
            Haftungsausschluss / AGB – Softwareanpassungen
          </h2>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-300 text-3xl leading-none"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 text-gray-300 space-y-6">
          <section>
            <h3 className="text-lg font-bold text-white mb-2">
              Nur für Rennsport / Offroad / Export
            </h3>
            <p>
              Alle Softwareanpassungen (Stage 1, Pops & Bangs, AGR-Regulierung,
              DPF-Regulierung, OPF-Anpassung, VMAX-Regulierung, usw.) sind
              ausschließlich für Rennsport-, Offroad- oder Exportfahrzeuge
              bestimmt. Die Nutzung im öffentlichen Straßenverkehr ist nicht
              zulässig.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-white mb-2">
              Betriebserlaubnis kann erlöschen
            </h3>
            <p>
              Durch Änderungen an der Motor-, Abgas- oder Geräuschsoftware kann
              die Betriebserlaubnis des Fahrzeugs erlöschen, sofern keine
              Eintragung oder behördliche Genehmigung erfolgt.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-white mb-2">Keine Haftung</h3>
            <p>
              Die Durchführung erfolgt auf Wunsch des Kunden und auf eigenes
              Risiko. Für Folgeschäden an Motor, Getriebe, Steuergeräten,
              Abgasanlagen oder rechtliche Konsequenzen übernimmt der Anbieter
              keine Haftung.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-white mb-2">
              Keine mechanischen Arbeiten
            </h3>
            <p>
              Es werden ausschließlich Softwaredienstleistungen ausgeführt. Es
              erfolgen keine mechanischen Arbeiten, kein Ausbau/Einbau von
              Fahrzeugteilen und keine Tätigkeiten des Kfz-Technikergewerbes.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-white mb-2">
              Technischer Zustand des Fahrzeugs
            </h3>
            <p>
              Der Kunde bestätigt, dass sich das Fahrzeug vor der
              Softwareanpassung in einem technisch einwandfreien Zustand
              befindet. Für Schäden, die aufgrund vorhandener Defekte,
              Verschleiß oder unsachgemäßem Zustand entstehen, wird keine
              Verantwortung übernommen.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-white mb-2">
              Verantwortung des Kunden
            </h3>
            <p>
              Der Kunde ist selbst dafür verantwortlich, alle gesetzlichen
              Regelungen (Abgasnormen, StVO, StVZO, §57a, Versicherung etc.)
              einzuhalten.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-white mb-2">Zustimmung</h3>
            <p className="mb-2">Mit Auftragserteilung bestätigt der Kunde:</p>
            <ul className="space-y-2 list-disc list-inside text-gray-300">
              <li>
                – dass er über Risiken und rechtliche Folgen informiert wurde,
              </li>
              <li>
                – dass ihm bewusst ist, dass die Betriebserlaubnis erlischt,
              </li>
              <li>– dass die Nutzung im Straßenverkehr verboten ist,</li>
              <li>– dass jegliche Verantwortung beim Fahrzeughalter liegt.</li>
            </ul>
          </section>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-700">
          <button
            onClick={onClose}
            className="w-full bg-[#5e18eb] hover:bg-[#5e18eb]/90 text-white py-3 rounded-lg font-bold transition-colors"
          >
            Schließen
          </button>
        </div>
      </div>
    </div>
  );
}
