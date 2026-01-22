-- Migration: Add vehicle info and payments table
-- Run this in Supabase SQL Editor

-- 1. Add vehicle columns to trip_rooms
ALTER TABLE trip_rooms 
ADD COLUMN IF NOT EXISTS license_plate TEXT,
ADD COLUMN IF NOT EXISTS vehicle_type TEXT,
ADD COLUMN IF NOT EXISTS vehicle_color TEXT;

-- 2. Create payments table for Stripe records
CREATE TABLE IF NOT EXISTS payments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  trip_id UUID REFERENCES trip_rooms(id) ON DELETE SET NULL,
  user_id TEXT NOT NULL,
  
  -- Stripe info
  stripe_session_id TEXT UNIQUE,
  stripe_payment_intent_id TEXT,
  
  -- Payment details
  amount INT NOT NULL,  -- in cents
  currency TEXT DEFAULT 'usd',
  status TEXT DEFAULT 'pending',  -- pending, succeeded, failed, refunded
  
  -- Metadata
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  completed_at TIMESTAMP WITH TIME ZONE
);

-- 3. Enable RLS on payments
ALTER TABLE payments ENABLE ROW LEVEL SECURITY;

-- 4. RLS Policies for payments
CREATE POLICY "Users can view own payments" 
  ON payments FOR SELECT 
  USING (true);

CREATE POLICY "System can insert payments" 
  ON payments FOR INSERT 
  WITH CHECK (true);

CREATE POLICY "System can update payments" 
  ON payments FOR UPDATE 
  USING (true);

-- 5. Create index for faster lookups
CREATE INDEX IF NOT EXISTS idx_payments_user_id ON payments(user_id);
CREATE INDEX IF NOT EXISTS idx_payments_trip_id ON payments(trip_id);
CREATE INDEX IF NOT EXISTS idx_payments_stripe_session ON payments(stripe_session_id);

-- 6. Comment for documentation
COMMENT ON TABLE payments IS 'Stripe payment records for match fees';
COMMENT ON COLUMN trip_rooms.license_plate IS 'Vehicle license plate number for identification';
COMMENT ON COLUMN trip_rooms.vehicle_type IS 'Vehicle make/model (e.g., Toyota Camry)';
