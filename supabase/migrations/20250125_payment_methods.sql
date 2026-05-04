-- Add lightweight payment confirmation records for Telegram ride coordination.
-- Run: supabase db push

-- Create payment confirmations table for optional USDC transaction references.
CREATE TABLE IF NOT EXISTS payment_confirmations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  trip_id UUID REFERENCES trip_rooms(id) ON DELETE CASCADE,
  payer_id TEXT NOT NULL,
  recipient_id TEXT NOT NULL,
  amount INT NOT NULL, -- in cents
  method TEXT NOT NULL, -- 'venmo', 'zelle', 'usdc'
  status TEXT DEFAULT 'pending', -- 'pending', 'confirmed', 'disputed'
  payer_confirmed BOOLEAN DEFAULT FALSE,
  recipient_confirmed BOOLEAN DEFAULT FALSE,
  tx_hash TEXT, -- for USDC payments
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  confirmed_at TIMESTAMP WITH TIME ZONE
);

-- RLS for payment_confirmations
ALTER TABLE payment_confirmations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read confirmations" 
ON payment_confirmations FOR SELECT USING (true);

CREATE POLICY "Public write confirmations" 
ON payment_confirmations FOR INSERT WITH CHECK (true);

CREATE POLICY "Public update confirmations" 
ON payment_confirmations FOR UPDATE USING (true);

-- Indexes for faster lookups
CREATE INDEX IF NOT EXISTS idx_payment_confirmations_trip 
ON payment_confirmations(trip_id);

CREATE INDEX IF NOT EXISTS idx_trip_passengers_payment 
ON trip_passengers(trip_id, payment_status);
