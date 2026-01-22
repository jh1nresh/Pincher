-- Enable RLS on all tables
ALTER TABLE trip_rooms ENABLE ROW LEVEL SECURITY;
ALTER TABLE trip_passengers ENABLE ROW LEVEL SECURITY;
ALTER TABLE trip_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE payments ENABLE ROW LEVEL SECURITY;

-- TRIP ROOMS POLICIES
-- Anyone can search for open trips
CREATE POLICY "Public read open trips" 
ON trip_rooms FOR SELECT 
USING (status = 'open' OR creator_id = auth.uid()::text);

-- Only authenticated users can create trips
CREATE POLICY "Auth users create trips" 
ON trip_rooms FOR INSERT 
TO authenticated 
WITH CHECK (auth.uid()::text = creator_id);

-- Only creator can update their trip (e.g. complete it)
CREATE POLICY "Creator update trip" 
ON trip_rooms FOR UPDATE 
USING (auth.uid()::text = creator_id);


-- TRIP PASSENGERS POLICIES
-- Participants can view passengers in their trip
CREATE POLICY "View trip passengers" 
ON trip_passengers FOR SELECT 
USING (
  true -- For MVP simplicity, public read of passenger list is acceptable for Search/SyncDeck
  -- Ideally: EXISTS (SELECT 1 FROM trip_rooms WHERE id = trip_id AND (creator_id = auth.uid()::text OR status = 'open'))
);

-- Users can join trips
CREATE POLICY "Join trip" 
ON trip_passengers FOR INSERT 
TO authenticated 
WITH CHECK (auth.uid()::text = user_id);


-- TRIP MESSAGES POLICIES
-- Only participants (Creator or Passenger) can view messages
CREATE POLICY "View trip messages" 
ON trip_messages FOR SELECT 
USING (
    EXISTS (
        SELECT 1 FROM trip_passengers tp 
        WHERE tp.trip_id = trip_messages.trip_id 
        AND tp.user_id = auth.uid()::text
    )
    OR 
    EXISTS (
        SELECT 1 FROM trip_rooms tr 
        WHERE tr.id = trip_messages.trip_id 
        AND tr.creator_id = auth.uid()::text
    )
);

-- Only participants can send messages
CREATE POLICY "Insert trip messages" 
ON trip_messages FOR INSERT 
TO authenticated 
WITH CHECK (
    EXISTS (
        SELECT 1 FROM trip_passengers tp 
        WHERE tp.trip_id = trip_messages.trip_id 
        AND tp.user_id = auth.uid()::text
    )
    OR 
    EXISTS (
        SELECT 1 FROM trip_rooms tr 
        WHERE tr.id = trip_messages.trip_id 
        AND tr.creator_id = auth.uid()::text
    )
);
