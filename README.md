# Auto Tuning Werkstatt - One-Page Webapp

Eine minimalistisch gestaltete One-Page Webapp für eine Auto Tuning Werkstatt mit Terminanfrage-Funktionalität.

## Features

- **Hero Section**: Titel mit Call-to-Action Button
- **TuningPakete**: Übersicht aller verfügbaren Tuning-Pakete als Karten
- **Terminanfrage Formular**: Vollständiges Formular zur Terminbuchung
- **FAQ Sektion**: Akkordeon mit häufig gestellten Fragen
- **Mobile-First Design**: Optimiert für alle Bildschirmgrößen

## Technologie-Stack

- **Next.js 16** - React Framework
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS 4** - Utility-first CSS Framework

## Datenstruktur

### TuningPakete (lib/data.ts)

- `id`: Eindeutige ID
- `name`: Name des Pakets
- `kategorie`: Kategorie (z.B. "Chiptuning")
- `beschreibung`: Kurzbeschreibung
- `preisCHF`: Preis in CHF
- `dauerStd`: Dauer in Stunden
- `hinweise`: Optionale Hinweise
- `aktiv`: Aktivierungsstatus

### Anfragen (API)

Die Anfragen werden über die API-Route `/api/anfrage` verarbeitet und enthalten:

- Persönliche Daten (Vorname, Nachname, E-Mail, Telefon)
- Fahrzeugdaten (Marke, Modell, Baujahr, Kennzeichen)
- Paket- und Terminwünsche
- Kommentar und AGB-Akzeptierung

## Installation & Entwicklung

```bash
# Abhängigkeiten installieren
npm install

# Entwicklungsserver starten
npm run dev
```

Die Anwendung ist dann unter `http://localhost:3000` erreichbar.

## Konfiguration

### Mock-Daten anpassen

Die Pakete können in `lib/data.ts` bearbeitet werden:

```typescript
export const mockTuningPakete: TuningPaket[] = [
  {
    id: "1",
    name: "Stage 1 Chiptuning",
    // ...
  },
];
```

### API erweitern

Die API-Route in `app/api/anfrage/route.ts` kann erweitert werden für:

- Datenbankintegration (z.B. MongoDB, PostgreSQL)
- E-Mail-Benachrichtigung an Admin
- Benachrichtigungen an Kunden

## Design-Philosophie

- **Minimalistisch**: Viel Weißraum, klare Typografie
- **Mobile-First**: Optimiert für Smartphones
- **Accessible**: Semantisches HTML, klare Labels
- **Performance**: Optimiert für schnelle Ladezeiten

## SEO

- Titel: "Auto Tuning Termin buchen in Zürich"
- Beschreibung: "Einfache Termin Anfrage für Chiptuning und weitere Pakete, Preise in CHF, keine Vorauszahlung."
- Sprache: Deutsch
- Währung: CHF
- Zeitzone: Europe/Zurich

## Nächste Schritte

1. **Datenbankintegration**: MongoDB, PostgreSQL oder ähnliches
2. **E-Mail-Service**: SMTP oder Service wie SendGrid
3. **Admin-Dashboard**: Verwaltung der Anfragen
4. **Produktions-Deployment**: Vercel, Netlify oder Eigenhosting
