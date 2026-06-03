So Bella website final handoff

This guide gives you two ways to finish setup and hand the site over.

Option 1 — Automated (GitHub Actions)

1) Add these repository secrets in GitHub: `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, `DATABASE_URL`, `VERCEL_TOKEN`.
2) Open the repository Actions tab.
3) Run the `Provision Supabase & Deploy` workflow.
4) Once complete, verify the site is live and the `/admin` page works.

Option 2 — Manual local provisioning

1) Create a `.env.local` file with your Supabase vars:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
NEXT_PUBLIC_WHATSAPP_NUMBER=+1234567890
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_SUPPORT_EMAIL=support@your-domain.com
```

2) Set service and database values for provisioning locally:

```bash
export SUPABASE_URL=https://your-project.supabase.co
export SUPABASE_SERVICE_ROLE_KEY="your_service_role_key"
export DATABASE_URL="postgres://..."
./scripts/provision_local.sh
```

3) Configure SMTP in Supabase Authentication settings so magic-link emails can send.
4) Deploy to Vercel and set the same public env vars there.

Preview readiness

- The current site is ready for a preview with placeholder images and text.
- Final branding photos, logos, and client-specific images can be swapped after approval.
- The preview will show the final layout, admin flow, and editable sections.

What to verify after setup

- `/admin` sign-in works using `contact@sobellahairandbeauty.com`
- Site content edits save and show on the live site
- Gallery uploads work
- Contact submissions are stored in Supabase

Client handoff email

Use `GO_SEND_NOW.md` as the email body.

Optional preview package

- If you want a quick preview before finalizing photos, use `docs/PREVIEW_PACKAGE.md`.
- This preview package explains what is ready now and what can be swapped later.

If you want, I can also help you add a short client-facing video or checklist so she never has to see code.
