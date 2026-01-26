-- Add payment method support for Venmo/Zelle primary, USDC optional
-- Run: supabase db push

-- 1. Add zelle_handle to user_profiles
ALTER TABLE user_profiles 
ADD COLUMN IF NOT EXISTS zelle_handle TEXT;

-- 2. Add payment_method to trip_passengers
ALTER TABLE trip_passengers 
ADD COLUMN IF NOT EXISTS payment_method TEXT DEFAULT 'venmo';
-- Options: 'venmo', 'zelle', 'usdc'

-- 3. Update payment_status to support new states
-- Existing: 'unpaid', 'paid'
-- New states: 'pending_p2p', 'pending_escrow', 'paid', 'refunded'

-- 4. Add payer tracking to trip_rooms
ALTER TABLE trip_rooms
ADD COLUMN IF NOT EXISTS payer_venmo TEXT,
ADD COLUMN IF NOT EXISTS payer_zelle TEXT,
ADD COLUMN IF NOT EXISTS payment_deadline TIMESTAMP WITH TIME ZONE;

-- 5. Create payment confirmations table (for tracking P2P payments)
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

-- 6. RLS for payment_confirmations
ALTER TABLE payment_confirmations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read confirmations" 
ON payment_confirmations FOR SELECT USING (true);

CREATE POLICY "Public write confirmations" 
ON payment_confirmations FOR INSERT WITH CHECK (true);

CREATE POLICY "Public update confirmations" 
ON payment_confirmations FOR UPDATE USING (true);

-- 7. Index for faster lookups
CREATE INDEX IF NOT EXISTS idx_payment_confirmations_trip 
ON payment_confirmations(trip_id);

CREATE INDEX IF NOT EXISTS idx_trip_passengers_payment 
ON trip_passengers(trip_id, payment_status);
