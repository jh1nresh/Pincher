-- PKU campus pilot foundation.
-- Apply only after the production Supabase project and phone-auth flow are reviewed.
-- All client mutations should go through server-side RPC/API checks.

CREATE TABLE IF NOT EXISTS campus_memberships (
  user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  campus TEXT NOT NULL DEFAULT 'pku_health_science_center',
  verification_status TEXT NOT NULL DEFAULT 'pending'
    CHECK (verification_status IN ('pending', 'verified', 'rejected')),
  verification_method TEXT,
  verified_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS pku_ride_groups (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  creator_id UUID NOT NULL REFERENCES auth.users(id),
  route_key TEXT NOT NULL DEFAULT 'medical_dorms_to_pku_hospital',
  origin_label TEXT NOT NULL DEFAULT '北大医学部宿舍',
  destination_label TEXT NOT NULL DEFAULT '北大医院',
  pickup_point TEXT NOT NULL,
  departure_at TIMESTAMPTZ NOT NULL,
  seat_count INTEGER NOT NULL DEFAULT 4 CHECK (seat_count BETWEEN 2 AND 6),
  status TEXT NOT NULL DEFAULT 'open'
    CHECK (status IN ('open', 'full', 'departed', 'completed', 'cancelled')),
  actual_fare_cents INTEGER CHECK (actual_fare_cents IS NULL OR actual_fare_cents >= 0),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS pku_ride_participants (
  ride_id UUID NOT NULL REFERENCES pku_ride_groups(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role TEXT NOT NULL DEFAULT 'rider' CHECK (role IN ('organizer', 'rider')),
  settlement_status TEXT NOT NULL DEFAULT 'unrecorded'
    CHECK (settlement_status IN ('unrecorded', 'confirmed', 'disputed')),
  joined_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  PRIMARY KEY (ride_id, user_id)
);

CREATE TABLE IF NOT EXISTS pku_ride_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  ride_id UUID NOT NULL REFERENCES pku_ride_groups(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  body TEXT NOT NULL CHECK (char_length(body) BETWEEN 1 AND 1000),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS pku_safety_reports (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  ride_id UUID REFERENCES pku_ride_groups(id) ON DELETE SET NULL,
  reporter_id UUID NOT NULL REFERENCES auth.users(id),
  category TEXT NOT NULL CHECK (category IN ('no_show', 'unsafe_driving', 'harassment', 'other')),
  detail TEXT CHECK (detail IS NULL OR char_length(detail) <= 2000),
  status TEXT NOT NULL DEFAULT 'open' CHECK (status IN ('open', 'reviewing', 'closed')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE campus_memberships ENABLE ROW LEVEL SECURITY;
ALTER TABLE pku_ride_groups ENABLE ROW LEVEL SECURITY;
ALTER TABLE pku_ride_participants ENABLE ROW LEVEL SECURITY;
ALTER TABLE pku_ride_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE pku_safety_reports ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.is_verified_pku_member(target_user_id UUID)
RETURNS BOOLEAN
LANGUAGE SQL
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM campus_memberships
    WHERE user_id = target_user_id
      AND campus = 'pku_health_science_center'
      AND verification_status = 'verified'
  );
$$;

CREATE OR REPLACE FUNCTION public.is_pku_ride_member(target_ride_id UUID, target_user_id UUID)
RETURNS BOOLEAN
LANGUAGE SQL
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT public.is_verified_pku_member(target_user_id) AND (
    EXISTS (
    SELECT 1 FROM pku_ride_participants
    WHERE ride_id = target_ride_id AND user_id = target_user_id
    ) OR EXISTS (
    SELECT 1 FROM pku_ride_groups
    WHERE id = target_ride_id AND creator_id = target_user_id
    )
  );
$$;

REVOKE ALL ON FUNCTION public.is_verified_pku_member(UUID) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.is_verified_pku_member(UUID) TO authenticated;
REVOKE ALL ON FUNCTION public.is_pku_ride_member(UUID, UUID) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.is_pku_ride_member(UUID, UUID) TO authenticated;

-- No public read/write policies: phone numbers and participant identities are private.
CREATE POLICY "Members can view own membership"
  ON campus_memberships FOR SELECT TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Authenticated users view open rides"
  ON pku_ride_groups FOR SELECT TO authenticated
  USING (
    public.is_verified_pku_member(auth.uid())
    AND (
      status = 'open'
      OR creator_id = auth.uid()
      OR EXISTS (
      SELECT 1 FROM pku_ride_participants p
      WHERE p.ride_id = pku_ride_groups.id AND p.user_id = auth.uid()
      )
    )
  );

CREATE POLICY "Creators manage their rides"
  ON pku_ride_groups FOR UPDATE TO authenticated
  USING (public.is_verified_pku_member(auth.uid()) AND creator_id = auth.uid())
  WITH CHECK (public.is_verified_pku_member(auth.uid()) AND creator_id = auth.uid());

CREATE POLICY "Participants view their ride membership"
  ON pku_ride_participants FOR SELECT TO authenticated
  USING (
    user_id = auth.uid()
    OR public.is_pku_ride_member(ride_id, auth.uid())
  );

CREATE POLICY "Ride members view messages"
  ON pku_ride_messages FOR SELECT TO authenticated
  USING (
    public.is_pku_ride_member(ride_id, auth.uid())
  );

CREATE POLICY "Users create own safety reports"
  ON pku_safety_reports FOR INSERT TO authenticated
  WITH CHECK (reporter_id = auth.uid());

CREATE INDEX IF NOT EXISTS idx_pku_ride_groups_route_time
  ON pku_ride_groups(route_key, departure_at, status);

CREATE INDEX IF NOT EXISTS idx_pku_ride_participants_user
  ON pku_ride_participants(user_id, joined_at DESC);
