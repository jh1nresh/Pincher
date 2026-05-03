-- Base tables required before feature migrations.

CREATE TABLE IF NOT EXISTS trip_rooms (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  creator_id TEXT NOT NULL,
  origin TEXT NOT NULL,
  destination TEXT NOT NULL,
  departure_time TIMESTAMP WITH TIME ZONE NOT NULL,
  min_passengers INT DEFAULT 4,
  max_passengers INT DEFAULT 4,
  estimated_cost INT,
  actual_cost INT,
  payer_id TEXT,
  payment_method_info JSONB,
  origin_hotzone_id TEXT,
  origin_address TEXT,
  destination_hotzone_id TEXT,
  destination_address TEXT,
  status TEXT DEFAULT 'open',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS trip_passengers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  trip_id UUID REFERENCES trip_rooms(id) ON DELETE CASCADE,
  user_id TEXT NOT NULL,
  user_name TEXT,
  contact_info TEXT,
  payment_status TEXT DEFAULT 'unpaid',
  is_driver BOOLEAN DEFAULT FALSE,
  joined_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS trip_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  trip_id UUID REFERENCES trip_rooms(id) ON DELETE CASCADE,
  user_id TEXT NOT NULL,
  user_name TEXT NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS point_transactions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id TEXT NOT NULL,
  trip_id UUID REFERENCES trip_rooms(id),
  amount INT NOT NULL,
  reason TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS user_profiles (
  user_id TEXT PRIMARY KEY,
  display_name TEXT,
  venmo_handle TEXT,
  points INT DEFAULT 0
);
