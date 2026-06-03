So Bella preview package

This package is designed for an internal preview or client preview before the final photo and branding swap.

What is included in the preview package

- The full website code in its current build-ready state.
- A working admin preview flow using Supabase email magic-link sign-in.
- A gallery upload section in the admin for future image management.
- Placeholder images, sample content, and luxury styling that show the final design.
- Documentation for preview setup, deployment, and final handoff.

Files to share with the client or internal reviewer

- `docs/PREVIEW_PACKAGE.md` — this preview package summary
- `docs/FINAL_HANDOFF.md` — final handoff instructions for after preview approval
- `docs/PROVISION_AND_DEPLOY.md` — provisioning and deployment instructions
- `GO_SEND_NOW.md` — ready-to-send client email template
- `.env.example` — required environment variable template

Preview package details

1) Preview scope
- The site layout is complete and live-ready.
- All page templates, content sections, and admin fields are ready to use.
- The preview is intentionally using placeholder images and example text for easy swap-out later.
- The client can preview the experience without touching code.

2) What the client should review
- Homepage layout and visual feel
- Navigation and page structure (`Aftercare`, `Privacy`, `Terms`)
- Admin sign-in flow and dashboard appearance
- Gallery section and image upload flow
- Contact form submission flow

3) What is not final yet
- Client branding photos and hero imagery
- Final logo and brand assets
- Final copy edits and minor polish details
- Service price/content updates if changes are requested

How to run a preview locally

1) Install dependencies
```bash
npm install
```

2) Copy environment file
```bash
cp .env.example .env.local
```

3) Add preview values in `.env.local`
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `NEXT_PUBLIC_WHATSAPP_NUMBER`
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_SUPPORT_EMAIL`

4) Run the preview app
```bash
npm run dev
```

5) Open the preview site
- Visit `http://localhost:3000`
- Visit `http://localhost:3000/admin` to preview the admin login flow

6) To show the client on a phone
- Run locally and use a tool such as localtunnel, ngrok, or Vercel preview deployment.

Recommended preview workflow

1) Deploy a staging preview using Vercel or local tunnel.
2) Share the preview URL with the client.
3) Ask the client to review:
   - visual design
   - pages and navigation
   - admin sign-in and dashboard
4) Collect feedback and finalize assets.

Next step after preview approval

- Swap in the final photos and brand assets
- Finalize copy, prices, and service details
- Configure production Supabase and SMTP if not already done
- Deploy the final live site
- Send the client the handoff email from `GO_SEND_NOW.md`

Contact and support

If you want, I can also create a short client-facing preview checklist or a mini walkthrough script for showing this preview to her on the phone. Feel free to ask and I will make it now.
