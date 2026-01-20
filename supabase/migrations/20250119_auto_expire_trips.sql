-- Auto-expire trips that are 12 hours past departure time
-- This function will be called by pg_cron or manually

-- 1. Create function to expire old trips
CREATE OR REPLACE FUNCTION expire_old_trips()
RETURNS INTEGER AS $$
DECLARE
  expired_count INTEGER;
BEGIN
  UPDATE trip_rooms
  SET status = 'expired'
  WHERE status = 'open'
    AND departure_time < NOW() - INTERVAL '12 hours';

  GET DIAGNOSTICS expired_count = ROW_COUNT;
  RETURN expired_count;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 2. Create a trigger to auto-expire on any query (lazy evaluation)
-- This ensures expired trips are marked even without cron
CREATE OR REPLACE FUNCTION check_trip_expiry()
RETURNS TRIGGER AS $$
BEGIN
  -- Mark trip as expired if departure was > 12 hours ago
  IF NEW.status = 'open' AND NEW.departure_time < NOW() - INTERVAL '12 hours' THEN
    NEW.status := 'expired';
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply trigger on SELECT (via view) or UPDATE
DROP TRIGGER IF EXISTS trip_expiry_trigger ON trip_rooms;
CREATE TRIGGER trip_expiry_trigger
  BEFORE UPDATE ON trip_rooms
  FOR EACH ROW
  EXECUTE FUNCTION check_trip_expiry();

-- 3. Create a view that auto-filters expired trips for "open" queries
CREATE OR REPLACE VIEW active_trip_rooms AS
SELECT *
FROM trip_rooms
WHERE status = 'open'
  AND departure_time >= NOW() - INTERVAL '12 hours';

-- 4. Add index for performance
CREATE INDEX IF NOT EXISTS idx_trip_rooms_status_departure
ON trip_rooms(status, departure_time);

-- Note: To enable automatic background expiration, you need pg_cron extension
-- Run this in Supabase SQL Editor (requires pg_cron extension):
--
-- SELECT cron.schedule(
--   'expire-old-trips',
--   '0 * * * *',  -- Run every hour
--   $$SELECT expire_old_trips()$$
-- );
