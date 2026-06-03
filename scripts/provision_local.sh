#!/usr/bin/env bash
set -euo pipefail

# Local provisioning script for So Bella website
# Requires: psql (Postgres client), curl
# Usage: SUPABASE_URL=https://your.supabase.co \ 
#        SUPABASE_SERVICE_ROLE_KEY=... \ 
#        DATABASE_URL=postgres://... \ 
#        ./scripts/provision_local.sh

: ${SUPABASE_URL:?Need SUPABASE_URL}
: ${SUPABASE_SERVICE_ROLE_KEY:?Need SUPABASE_SERVICE_ROLE_KEY}
: ${DATABASE_URL:?Need DATABASE_URL}

echo "Running SQL migrations against DATABASE_URL..."
psql "$DATABASE_URL" -f supabase/migrations/001_init.sql

echo "Creating 'public' storage bucket (if not exists)..."
curl -sS -X POST "$SUPABASE_URL/storage/v1/buckets" \
  -H "Authorization: Bearer $SUPABASE_SERVICE_ROLE_KEY" \
  -H "Content-Type: application/json" \
  -d '{"id":"public","name":"public","public":true}' || true

echo "Done. You should now configure SMTP in Supabase Auth and set env vars in Vercel."
