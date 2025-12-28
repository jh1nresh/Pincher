#!/bin/bash
# Script to add all environment variables to Vercel Production

echo "Adding environment variables to Vercel Production..."

# Privy variables
echo "clw7229m108m7di52v0iya2qc" | npx vercel env add NEXT_PUBLIC_PRIVY_APP_ID production --force
echo "client-WY2mABYxPWCherPBzKMW4HXRTghZMjhjNTTCfrDvn3PMT" | npx vercel env add NEXT_PUBLIC_PRIVY_CLIENT_ID production --force

# Google Maps
echo "AIzaSyAT5jr_r_gNpxfMVnDB3z5KOm5e5OBUsnk" | npx vercel env add NEXT_PUBLIC_GOOGLE_MAPS_API_KEY production --force

# Supabase
echo "https://ksfucvikvbnkocjkrvev.supabase.co" | npx vercel env add NEXT_PUBLIC_SUPABASE_URL production --force
echo "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtzZnVjdmlrdmJua29jamtydmV2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY2MDQ3NTQsImV4cCI6MjA4MjE4MDc1NH0.dvnPd1IMH1ANvjySFAnq5EhR_m-qTfb4xKmR845qfSg" | npx vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY production --force

# x402
echo "https://facilitator.x402.org" | npx vercel env add NEXT_PUBLIC_FACILITATOR_URL production --force
echo "https://facilitator.x402.org" | npx vercel env add FACILITATOR_URL production --force
echo "0x872989F7fCd4048acA370161989d3904E37A3cB3" | npx vercel env add EVM_ADDRESS production --force
echo "0x872989F7fCd4048acA370161989d3904E37A3cB3" | npx vercel env add SVM_ADDRESS production --force

# Faucet (from file to avoid newline issues)
cat > /tmp/faucet_key.txt << 'EOF'
e7ada1784dac87b913ae6305c2ba4b05abb52c656230ee57d987f66dcec0c559
EOF
npx vercel env add FAUCET_PRIVATE_KEY production --force < /tmp/faucet_key.txt

echo "Done!"
