-- Pincher Supabase Tables
-- Run this in your Supabase SQL Editor: https://supabase.com/dashboard/project/YOUR_PROJECT/sql

-- 1. Price Queries Table (Records all Uber/Lyft price checks)
CREATE TABLE IF NOT EXISTS price_queries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  provider TEXT NOT NULL,
  pickup TEXT NOT NULL,
  dropoff TEXT NOT NULL,
  price DECIMAL(10,2),
  eta INTEGER,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Rides Table (Records all completed/pending rides)
CREATE TABLE IF NOT EXISTS rides (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  pickup_location TEXT,
  dropoff_location TEXT,
  selected_provider TEXT,
  original_price DECIMAL(10,2),
  optimized_price DECIMAL(10,2),
  savings DECIMAL(10,2),
  carpool_matched BOOLEAN DEFAULT FALSE,
  wallet_address TEXT,
  tx_hash TEXT,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Enable Row Level Security (Optional but recommended)
ALTER TABLE price_queries ENABLE ROW LEVEL SECURITY;
ALTER TABLE rides ENABLE ROW LEVEL SECURITY;

-- 4. Create policies for public access (for demo purposes)
CREATE POLICY "Allow all inserts on price_queries" ON price_queries FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow all selects on price_queries" ON price_queries FOR SELECT USING (true);
CREATE POLICY "Allow all inserts on rides" ON rides FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow all selects on rides" ON rides FOR SELECT USING (true);
