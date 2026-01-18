-- Pincher MVP Final Schema (Consolidated)
-- Includes: Matching, Hotzones, P2P Splitting, Chat, Points

-- 1. Trip Rooms (行程房間)
CREATE TABLE IF NOT EXISTS trip_rooms (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  creator_id TEXT NOT NULL,
  origin TEXT NOT NULL,
  destination TEXT NOT NULL,
  departure_time TIMESTAMP WITH TIME ZONE NOT NULL,
  min_passengers INT DEFAULT 4,
  max_passengers INT DEFAULT 4,
  
  -- Price & Splitting
  estimated_cost INT,  
  actual_cost INT,     -- 實際 Uber/Lyft 金額
  payer_id TEXT,       -- 誰負責叫車
  payment_method_info JSONB, -- { type: 'venmo', handle: '@sarah' }
  
  -- Hotzones (定位)
  origin_hotzone_id TEXT,
  origin_address TEXT,
  destination_hotzone_id TEXT,
  destination_address TEXT,

  status TEXT DEFAULT 'open',  -- open, full, splitting, completed
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Trip Passengers (乘客)
CREATE TABLE IF NOT EXISTS trip_passengers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  trip_id UUID REFERENCES trip_rooms(id) ON DELETE CASCADE,
  user_id TEXT NOT NULL,
  user_name TEXT,
  contact_info TEXT, 
  payment_status TEXT DEFAULT 'unpaid', -- unpaid, paid
  is_driver BOOLEAN DEFAULT FALSE,
  joined_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Chat Messages (聊天室)
CREATE TABLE IF NOT EXISTS trip_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  trip_id UUID REFERENCES trip_rooms(id) ON DELETE CASCADE,
  user_id TEXT NOT NULL,
  user_name TEXT NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. Point Transactions (積分系統)
CREATE TABLE IF NOT EXISTS point_transactions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id TEXT NOT NULL,
  trip_id UUID REFERENCES trip_rooms(id),
  amount INT NOT NULL, -- +100 or -50
  reason TEXT NOT NULL, -- 'payer_bonus', 'trip_reward'
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 5. User Profiles (用戶資料 - Optional)
CREATE TABLE IF NOT EXISTS user_profiles (
  user_id TEXT PRIMARY KEY,
  display_name TEXT,
  venmo_handle TEXT,
  points INT DEFAULT 0
);

-- Security Policies (RLS)
ALTER TABLE trip_rooms ENABLE ROW LEVEL SECURITY;
ALTER TABLE trip_passengers ENABLE ROW LEVEL SECURITY;
ALTER TABLE trip_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE point_transactions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read all" ON trip_rooms FOR SELECT USING (true);
CREATE POLICY "Public write all" ON trip_rooms FOR INSERT WITH CHECK (true);
CREATE POLICY "Public update all" ON trip_rooms FOR UPDATE USING (true);

CREATE POLICY "Public read passengers" ON trip_passengers FOR SELECT USING (true);
CREATE POLICY "Public write passengers" ON trip_passengers FOR INSERT WITH CHECK (true);
CREATE POLICY "Public update passengers" ON trip_passengers FOR UPDATE USING (true);

CREATE POLICY "Public read messages" ON trip_messages FOR SELECT USING (true);
CREATE POLICY "Public write messages" ON trip_messages FOR INSERT WITH CHECK (true);

CREATE POLICY "Public read points" ON point_transactions FOR SELECT USING (true);
CREATE POLICY "Public write points" ON point_transactions FOR INSERT WITH CHECK (true);
