# E-Mail Setup mit Resend

## ✅ Lokal testen

1. **Environment Variables setzen**

   Die `.env.local` Datei wurde bereits erstellt. Trage dort deine Supabase-Credentials ein:

   ```
   NEXT_PUBLIC_SUPABASE_URL=deine-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=dein-supabase-key
   RESEND_API_KEY=re_T6e5mGwz_4XXSwTovJJHGoAv9zHFSw1U9
   ```

2. **Domain in Resend konfigurieren**

   - Gehe zu [resend.com](https://resend.com) → Domains
   - Deine Domain `tuning.wtf` sollte bestätigt sein
   - Aktualisiere in `lib/email.ts` die `FROM_EMAIL` Variable falls nötig
   - Aktuell: `noreply@tuning.wtf`

3. **Dev Server starten**

   ```bash
   npm run dev
   ```

4. **Testen**

   - Fülle das Formular aus und sende eine Buchung ab
   - Prüfe:
     - Admin erhält E-Mail an `noahspowerup@gmail.com`
     - Kunde erhält Bestätigungs-E-Mail
   - Im Admin-Panel: Status auf "Bestätigt" oder "Absagen" ändern
   - Kunde erhält Status-Update E-Mail

---

## 🚀 Auf Netlify deployen

1. **Environment Variables in Netlify hinzufügen**

   Gehe zu Netlify → Deine Site → Site settings → Environment variables:

   Füge hinzu:

   - `NEXT_PUBLIC_SUPABASE_URL` = deine Supabase URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = dein Supabase Anon Key
   - `RESEND_API_KEY` = `re_T6e5mGwz_4XXSwTovJJHGoAv9zHFSw1U9`

2. **Redeploy**

   Netlify buildet automatisch neu. Alternativ:

   - Trigger deployment → Clear cache and deploy site

---

## 📧 E-Mail Szenarien

### 1. Neue Buchung

**Trigger:** Kunde sendet Formular ab

**Empfänger:**

- ✅ Admin: Erhält alle Buchungsdetails
- ✅ Kunde: Erhält Bestätigung der Anfrage

### 2. Status-Update

**Trigger:** Admin ändert Status zu "confirmed" oder "cancelled"

**Empfänger:**

- ✅ Kunde: Erhält Benachrichtigung über Status-Änderung

---

## ⚙️ Konfiguration

### E-Mail-Adressen anpassen

In `lib/email.ts`:

- `ADMIN_EMAIL`: Ändere auf deine Admin E-Mail
- `FROM_EMAIL`: Ist bereits auf `noreply@tuning.wtf` gesetzt (muss verifizierte Domain in Resend sein)

### E-Mail-Templates anpassen

Die HTML-Templates sind in `lib/email.ts`:

- `sendBookingConfirmationToAdmin()` - Template für Admin
- `sendBookingConfirmationToCustomer()` - Template für Kunde
- `sendStatusUpdateToCustomer()` - Template für Status-Updates

---

## 🔍 Troubleshooting

### E-Mails werden nicht versendet

1. **Prüfe Resend Dashboard**

   - Gehe zu [resend.com](https://resend.com/emails)
   - Siehst du dort failed deliveries?

2. **Prüfe Console Logs**

   - Browser Console (F12) für Client-Errors
   - Terminal für Server-Logs

3. **API Key prüfen**

   - Ist der `RESEND_API_KEY` korrekt in `.env.local`?
   - Nach Änderungen: Dev Server neu starten!

4. **Domain prüfen**
   - Ist deine Domain in Resend verifiziert?
   - DNS Records korrekt gesetzt?

### E-Mails kommen im Spam an

- **SPF/DKIM/DMARC** sollten in Resend konfiguriert sein
- **Von-Adresse** sollte von verifizierter Domain sein
- **Inhalt** sollte nicht zu viele Trigger-Wörter enthalten

---

## 📝 Resend Limits

- **Free Tier:** 100 E-Mails/Tag
- **Pro Tier:** 50.000 E-Mails/Monat

Für den Anfang sollte Free Tier ausreichen!
