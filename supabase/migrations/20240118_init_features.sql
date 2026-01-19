-- Create User Ratings Table
CREATE TABLE IF NOT EXISTS user_ratings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  rater_id UUID REFERENCES auth.users(id) NOT NULL,
  rated_id UUID REFERENCES auth.users(id) NOT NULL,
  trip_id UUID REFERENCES trip_rooms(id) NOT NULL,
  score INTEGER CHECK (score >= 1 AND score <= 5),
  comment TEXT,
  
  -- Prevent duplicate ratings for same trip/person pair
  UNIQUE(rater_id, rated_id, trip_id)
);

-- RLS: Ratings are public to read, but only specific users can write
ALTER TABLE user_ratings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read access for ratings" ON user_ratings
  FOR SELECT USING (true);

CREATE POLICY "Users can rate others" ON user_ratings
  FOR INSERT WITH CHECK (auth.uid() = rater_id);

-- Create Push Tokens Table
CREATE TABLE IF NOT EXISTS user_push_tokens (
  user_id UUID REFERENCES auth.users(id) PRIMARY KEY,
  token TEXT NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE user_push_tokens ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage their own token" ON user_push_tokens
  FOR ALL USING (auth.uid() = user_id);

-- VIEW for User Statistics
CREATE OR REPLACE VIEW user_stats AS
SELECT 
  rated_id as user_id,
  COUNT(*) as total_ratings,
  ROUND(AVG(score), 1) as avg_rating
FROM user_ratings
GROUP BY rated_id;
