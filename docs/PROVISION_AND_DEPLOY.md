Provision & deploy automation

This document explains how to provision Supabase and deploy the site automatically.

Prerequisites
- You must create a Supabase project and obtain:
  - SUPABASE_URL (https://<project>.supabase.co)
  - SUPABASE_SERVICE_ROLE_KEY (service_role key)
  - DATABASE_URL (Postgres connection URL)
- Create a Vercel personal token (`VERCEL_TOKEN`) with deploy permissions.
- Add the secrets to your GitHub repository: `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, `DATABASE_URL`, `VERCEL_TOKEN`.
- In Vercel project settings, also add public environment variables for the frontend:
  - `NEXT_PUBLIC_SUPABASE_URL`
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
  - `NEXT_PUBLIC_WHATSAPP_NUMBER`
  - `NEXT_PUBLIC_SITE_URL`
  - `NEXT_PUBLIC_SUPPORT_EMAIL`
  - Optional: `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`

Option 1 — Local quick run (one-time)
```bash
export SUPABASE_URL=https://your-project.supabase.co
export SUPABASE_SERVICE_ROLE_KEY="your_service_role_key"
export DATABASE_URL="postgres://..."
./scripts/provision_local.sh
```

Option 2 — Run via GitHub Actions (recommended for production)
1) Add the repository secrets in GitHub (Settings → Secrets → Actions): `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, `DATABASE_URL`, `VERCEL_TOKEN`.
2) Go to the Actions tab and run the `Provision Supabase & Deploy` workflow (Workflow Dispatch).

Notes
- The workflow runs `psql` with `DATABASE_URL` and executes `supabase/migrations/001_init.sql`.
- The workflow also creates a `public` storage bucket using the Supabase Storage Admin API.
- The workflow then installs the Vercel CLI and deploys the project. Ensure the repository is linked to the correct Vercel project or the CLI will prompt to link.

Security
- Keep your `SUPABASE_SERVICE_ROLE_KEY` secret. Do not commit it to the repo.
