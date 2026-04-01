# ✅ Code ist auf GitHub! Jetzt auf Netlify deployen

## Nächste Schritte:

### 1. Gehe zu Netlify

Öffne: [netlify.com](https://netlify.com)

### 2. Login/Signup

- Melde dich an (kostenlos)
- Oder erstelle einen Account

### 3. Neues Projekt erstellen

1. Klicke auf **"Add new site"**
2. Wähle **"Import an existing project"**
3. Verbinde mit **GitHub**
4. Erlaube Netlify Zugriff auf dein Repository

### 4. Repository wählen

- Wähle: **MarcSchrefel/autotunning**

### 5. ⚠️ WICHTIG: Build Einstellungen prüfen

Netlify sollte automatisch erkennen:

- **Build command**: `npm run build`
- **Publish directory**: (wird automatisch vom Plugin gesetzt)

Wenn nicht automatisch, setze manuell:

```
Build command: npm run build
```

**NICHT** `publish = ".next"` setzen! Das Plugin macht das automatisch.

### 6. Umgebungsvariablen hinzufügen

**Bevor du auf "Deploy site" klickst:**

1. Klicke auf **"Show advanced"**
2. Klicke auf **"New variable"** für jede Variable:

**Variable 1:**

- Key: `NEXT_PUBLIC_SUPABASE_URL`
- Value: (deine Supabase URL aus dem Dashboard)

**Variable 2:**

- Key: `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- Value: (dein Supabase Anon Key aus dem Dashboard)

### 7. Deploy starten

Klicke auf **"Deploy site"**

### 8. Warten

- Der Build dauert ca. 2-3 Minuten
- Du siehst die Logs in Echtzeit

### 9. Fertig! 🎉

- Netlify gibt dir eine URL: `https://deine-app.netlify.app`
- Die App ist jetzt live!

---

## Nach dem Deployment testen:

1. **Hauptseite**: Öffne die URL
2. **Formular testen**: Fülle das Terminanfrage-Formular aus
3. **Supabase prüfen**: Gehe zu Supabase Dashboard → Table Editor → `bookings`
   - Die Buchung sollte dort erscheinen
4. **Admin-Login**: Klicke auf "Admin" in der Navigation
   - Login mit deinem Supabase Account
   - Prüfe, ob die Buchung im Admin-Dashboard erscheint

---

## Falls etwas nicht funktioniert:

### Build schlägt fehl

- Prüfe die Build-Logs in Netlify
- Stelle sicher, dass alle Umgebungsvariablen gesetzt sind

### Formular funktioniert nicht

- Prüfe in Netlify: Site settings → Environment variables
- Stelle sicher, dass beide Supabase-Keys gesetzt sind

### Keine Buchungen in Supabase

- Prüfe Supabase RLS Policies
- Führe `SETUP_DATABASE.sql` in Supabase aus (falls noch nicht geschehen)

---

## Nützliche Links:

- Dein Repository: https://github.com/MarcSchrefel/autotunning
- Supabase Dashboard: https://supabase.com/dashboard
- Netlify Dashboard: https://app.netlify.com
