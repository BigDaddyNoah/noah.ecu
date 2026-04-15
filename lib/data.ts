// Data models and mock data

export interface TuningPaket {
  id: string;
  name: string;
  beschreibung: string;
  preisEUR: number;
  dauerMin: number;
  icon?: string;
  isStage1?: boolean;
  aktiv: boolean;
}

export interface Addon {
  id: string;
  name: string;
  preisEUR: number;
}

export interface Anfrage {
  id?: string;
  vorname: string;
  nachname: string;
  email: string;
  telefon: string;
  fahrzeugMarke: string;
  fahrzeugModell: string;
  baujahr: string;
  momentaneLeistung?: string;
  gewuenschtesPaket: string; // TuningPaket ID
  bevorzugtesDatum: string;
  bevorzugteUhrzeit: string;
  kommentar?: string;
  agbAkzeptiert: boolean;
  erstelltAm?: string;
}

// Main tuning packages
export const mockTuningPakete: TuningPaket[] = [
  {
    id: "stage-1",
    name: "Stage 1",
    beschreibung:
      "Unsere Stage 1 Softwareoptimierung bietet maximale Performance bei höchster Zuverlässigkeit. Spürbare Leistungssteigerung und verbessertes Ansprechverhalten.",
    preisEUR: 350,
    dauerMin: 180,
    isStage1: true,
    aktiv: true,
  },
  {
    id: "öldruck-fix",
    name: "Öldruck Fix VAG",
    beschreibung:
      "Optimierte Software-Anpassung für Modelle, bei denen der Öldruck im unteren Drehzahlbereich ab Werk zu niedrig ist. Schont den Motor nachhaltig.",
    preisEUR: 260,
    dauerMin: 120,
    aktiv: true,
  },
  {
    id: "pop-and-bang",
    name: "Soundpaket",
    beschreibung:
      "Soundoptimierung im Schubbetrieb durch kontrollierte Knallgeräusche bei Gaswegnahme. Je nach Steuergerät auch schaltbar verfügbar.",
    preisEUR: 260,
    dauerMin: 120,
    aktiv: true,
  },
  {
    id: "vmax-aufhebung",
    name: "VMAX Aufhebung",
    beschreibung:
      "Aufhebung der elektronischen Geschwindigkeitsbegrenzung für maximale Endgeschwindigkeit.",
    preisEUR: 220,
    dauerMin: 120,
    aktiv: true,
  },
  {
    id: "zurueck-zu-original",
    name: "Rückrüstung auf Originalsoftware",
    beschreibung:
      "Du hast ein Fahrzeug mit bereits optimierter Software gekauft oder möchtest dein Auto wieder in den Serienzustand versetzen? Ich spiele die originale Hersteller-Software fachgerecht zurück – sicher, sauber und ohne Rückstände. Ideal für Verkauf, Garantie oder einfach ein gutes Gefühl.",
    preisEUR: 199,
    dauerMin: 120,
    aktiv: true,
  },
  {
    id: "custom",
    name: "Individuelle Anfrage",
    beschreibung: "Sonderwünsche und massgeschneiderte Lösungen auf Anfrage.",
    preisEUR: 0,
    dauerMin: 45,
    aktiv: true,
  },
];

// Addons for Stage 1
export const stage1Addons: Addon[] = [
  { id: "soundpaket", name: "Soundpaket", preisEUR: 150 },
  { id: "getriebe", name: "Getriebe", preisEUR: 200 },
  { id: "oeldruck-fix", name: "Öldruck Fix", preisEUR: 100 },
];

// Helper function to calculate price
export function calculateStage1Price(
  selectedAddons: Addon[]
): number {
  const basePrice = 350;
  return basePrice + selectedAddons.reduce((sum, addon) => sum + addon.preisEUR, 0);
}
