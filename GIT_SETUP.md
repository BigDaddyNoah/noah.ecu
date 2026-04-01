# Git & GitHub Setup - Schritt für Schritt

## Schritt 1: Alle Änderungen zum Git hinzufügen

```bash
git add .
```

## Schritt 2: Commit erstellen (mit einer Nachricht)

```bash
git commit -m "Autotuning App - Komplette Implementierung mit Netlify Setup"
```

## Schritt 3: GitHub Repository erstellen

1. Gehe zu [github.com](https://github.com)
2. Melde dich an (oder erstelle einen Account)
3. Klicke auf das **+** Symbol oben rechts → "New repository"
4. Wähle einen Namen z.B.: `autotuning-app`
5. **Wichtig**: LASS **KEINE** Checkboxen aktiviert:
   - ❌ README.md erstellen
   - ❌ .gitignore hinzufügen
   - ❌ .gitignore hinzufügen
6. Klicke auf **"Create repository"**

## Schritt 4: GitHub Repository URL kopieren

Nach dem Erstellen des Repositories siehst du eine Seite mit einer URL wie:

```
https://github.com/DEIN-USERNAME/autotuning-app.git
```

**Kopiere diese URL!**

## Schritt 5: Repository mit GitHub verbinden und pushen

Führe diese Befehle in der Konsole aus:

```bash
# Branch auf main umbenennen (GitHub Standard)
git branch -M main

# GitHub Repository hinzufügen (ersetze URL mit deiner kopierten URL!)
git remote add origin https://github.com/DEIN-USERNAME/autotuning-app.git

# Code zu GitHub hochladen
git push -u origin main
```

Wenn du nach Username/Password gefragt wirst:

- **Username**: Dein GitHub Username
- **Password**: Du musst ein **Personal Access Token** verwenden!
  - Gehe zu: Settings → Developer settings → Personal access tokens → Tokens (classic)
  - Generate new token → Wähle "repo" Berechtigung
  - Kopiere den Token und nutze ihn als Password

## Schritt 6: Überprüfen

Gehe zu deinem GitHub Repository und prüfe, ob alle Dateien hochgeladen wurden:

- app/
- components/
- lib/
- netlify.toml
- package.json
- etc.

---

## 🚀 Alternative: Mit GitHub Desktop (Einfacher!)

Wenn die Konsole kompliziert ist:

1. Lade [GitHub Desktop](https://desktop.github.com/) herunter
2. Melde dich mit deinem GitHub Account an
3. File → "Add existing repository"
4. Wähle den Ordner: `d:\autotuning\autotuningv2\autotuning-app`
5. Repository → "Publish repository"
6. Fertig! ✅

---

## ⚠️ Wichtig vor dem Push:

### Dateien die NICHT hochgeladen werden sollten:

✅ Schon automatisch geschützt durch `.gitignore`:

- `node_modules/`
- `.env` (Umgebungsvariablen mit Secrets!)
- `.next/`

✅ Sollten hochgeladen werden:

- `SETUP_DATABASE.sql` ✅ (enthält nur SQL, keine Secrets)
- `NETLIFY_DEPLOY.md` ✅
- `netlify.toml` ✅
- Alle Code-Dateien ✅

---

## Troubleshooting

### Fehler: "remote origin already exists"

```bash
git remote remove origin
git remote add origin https://github.com/DEIN-USERNAME/autotuning-app.git
```

### Fehler: "Authentication failed"

- Nutze ein Personal Access Token statt deines Passwords
- Oder nutze GitHub Desktop

### Nur bestimmte Dateien commiten

```bash
# Schau welche Dateien geändert wurden
git status

# Füge einzelne Dateien hinzu
git add dateiname.ts
git commit -m "Beschreibung"
```
