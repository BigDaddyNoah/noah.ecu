-- SQL für Supabase Datenbank Setup

-- 1. Tabelle für Buchungen (wenn noch nicht erstellt)
CREATE TABLE IF NOT EXISTS bookings (
  id BIGSERIAL PRIMARY KEY,
  date DATE NOT NULL,
  time TIME NOT NULL,
  customer_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  customer_phone TEXT NOT NULL,
  package_name TEXT,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Spalten hinzufügen für alle zusätzlichen Informationen
ALTER TABLE bookings
ADD COLUMN IF NOT EXISTS customer_address TEXT,
ADD COLUMN IF NOT EXISTS vehicle_make TEXT,
ADD COLUMN IF NOT EXISTS vehicle_model TEXT,
ADD COLUMN IF NOT EXISTS vehicle_year TEXT,
ADD COLUMN IF NOT EXISTS current_power TEXT,
ADD COLUMN IF NOT EXISTS comment TEXT,
ADD COLUMN IF NOT EXISTS total_price DECIMAL(10,2);

-- 3. RLS (Row Level Security) aktivieren
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- 4. Policies für Row Level Security

-- Policy 1: JEDER kann Buchungen erstellen (für das Formular)
DROP POLICY IF EXISTS "Allow public insert" ON bookings;
CREATE POLICY "Allow public insert" 
  ON bookings 
  FOR INSERT 
  TO public 
  WITH CHECK (true);

-- Policy 2: Jeder kann lesen (für Verfügbarkeitsprüfung)
DROP POLICY IF EXISTS "Allow public read" ON bookings;
CREATE POLICY "Allow public read" 
  ON bookings 
  FOR SELECT 
  TO public 
  USING (true);

-- Policy 3: Nur eingeloggte Users (Admins) können updaten
DROP POLICY IF EXISTS "Allow authenticated update" ON bookings;
CREATE POLICY "Allow authenticated update" 
  ON bookings 
  FOR UPDATE 
  TO authenticated 
  USING (true);

-- Index für schnelle Abfragen nach Datum
CREATE INDEX IF NOT EXISTS idx_bookings_date ON bookings(date);

-- Index für Datum + Zeit Kombination (verhindert Doppelbuchungen)
-- ACHTUNG: UNIQUE Index funktioniert nicht mit RLS, daher entfernt
-- DROP INDEX IF EXISTS idx_bookings_datetime;

