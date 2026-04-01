# Netlify Deployment Guide

## 1. Vorbereitung

### Lokal testen

```bash
npm run build
npm start
```

## 2. Repository auf GitHub/GitLab hochladen

1. Erstelle ein neues Repository auf GitHub oder GitLab
2. Lade deinen Code hoch:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <deine-repo-url>
git push -u origin main
```

## 3. Netlify Setup

### Option A: GitHub Integration (Empfohlen)

1. Gehe zu [Netlify](https://netlify.com) und melde dich an
2. Klicke auf "Add new site" → "Import an existing project"
3. Verbinde mit GitHub und wähle dein Repository
4. **Wichtig**: Füge die Umgebungsvariablen hinzu:
   - Gehe zu Site settings → Environment variables
   - Füge folgende Variablen hinzu:
     - `NEXT_PUBLIC_SUPABASE_URL` = deine Supabase URL
     - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = dein Supabase Anon Key
5. Klicke auf "Deploy site"

### Option B: Manueller Upload (Netlify Drop)

1. Lokal builden: `npm run build`
2. Gehe zu [app.netlify.com/drop](https://app.netlify.com/drop)
3. Ziehe den `.next` Ordner hin (aber funktioniert nicht gut für Next.js)

**Für Next.js ist Option A (GitHub Integration) zwingend erforderlich!**

## 4. Build Settings auf Netlify

Die `netlify.toml` Datei ist bereits konfiguriert:

- Build command: `npm run build`
- Netlify Next.js Plugin ist installiert

## 5. Umgebungsvariablen in Netlify

**Wichtig**: Diese Variablen müssen in Netlify gesetzt werden:

1. Gehe zu deiner Site auf Netlify
2. Site settings → Environment variables
3. Füge hinzu:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## 6. Node Version

Netlify sollte automatisch Node 18+ verwenden. Falls nicht:

- Site settings → Build & deploy → Environment
- Setze Node version auf `18.x` oder `20.x`

## 7. Deployment prüfen

Nach dem ersten Deploy:

1. Öffne deine Website URL
2. Teste die Formular-Funktionalität
3. Prüfe in Supabase, ob Buchungen gespeichert werden

## Troubleshooting

### Build schlägt fehl

- Prüfe die vollständigen Build-Logs in Netlify
- Stelle sicher, dass alle Umgebungsvariablen gesetzt sind
- Teste lokal mit `npm run build`

### API Routes funktionieren nicht

- Prüfe, ob `@netlify/plugin-nextjs` installiert ist
- Stelle sicher, dass die `netlify.toml` korrekt ist

### Supabase Verbindungsfehler

- Prüfe die Umgebungsvariablen in Netlify
- Stelle sicher, dass die RLS Policies in Supabase aktiviert sind
- Prüfe die Supabase Logs

## Nützliche Links

- [Netlify Next.js Docs](https://docs.netlify.com/integrations/frameworks/next-js/)
- [Supabase Setup](https://supabase.com/docs)
