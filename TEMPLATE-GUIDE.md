# Template Guide — Reuse This for Any Business

This project is built so you can spin up a new client website fast. Almost everything a client cares about lives in **a few files**. Change those and you have a new site.

## The 4 things you change for every new site

### 1. `lib/constants.ts` — all the words & content
This is the master content file. Edit:
- `SITE_CONFIG` — business name, tagline, email, phone, address, hours
- `HERO_CONTENT` — the big headline + highlights at the top
- `SERVICES` — the service cards (title, description, icon, details)
- `GALLERY_SETTINGS.categories` — gallery filter categories
- `SOCIAL_LINKS` — Instagram / Facebook / TikTok
- `PRICING`, `FAQ_ITEMS`, `SEO`, `SAMPLE_REVIEWS` — optional extras

Change the text here and the whole site updates.

### 2. `tailwind.config.ts` — the colours / theme
The palette is defined here (`blush`, `nude`, `gold`, `cream`, `beauty-black`, `beauty-white`, and the `gradient-luxury`). Swap these hex values to re-skin the site for a different brand. Keep the **same names** so you don't have to touch any components.

Examples:
- Spa / beauty → warm beige + gold (current)
- Barber → charcoal + amber
- Nails → pink + rose-gold

### 3. `.env.local` — the keys (per project)
Each new client needs their own:
```
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
NEXT_PUBLIC_WHATSAPP_NUMBER=...
NEXT_PUBLIC_ADMIN_EMAILS=client@email.com
```
Create a fresh Supabase project per client (free tier) so their data is separate.

### 4. Images in `public/images/`
Replace `gallery-1.jpg` … `gallery-8.jpg` and any logo. Or leave them — the client adds real photos from the admin panel.

## What you usually DON'T need to touch
- `app/components/*` — the sections all read from `constants.ts` and the live Supabase content, so they adapt automatically.
- `lib/siteContent.ts`, `SiteContentProvider.tsx` — the live-edit plumbing.
- `lib/supabase.ts` — database helpers.
- `app/admin/*` — the dashboard works for any business as-is.

## Fast start for a new client
1. Copy the whole folder, rename it.
2. New Supabase project → run the table/bucket setup → paste keys into `.env.local`.
3. Edit `lib/constants.ts` (content) and `tailwind.config.ts` (colours).
4. Drop in starter images.
5. Set `NEXT_PUBLIC_ADMIN_EMAILS` to the client's email; create their Supabase user.
6. Run `npm run dev`, check it, then deploy to Vercel.
7. Hand over `SALON-OWNER-GUIDE.md` (rename to suit the business).

## Make it even more reusable later (optional)
- Move services/gallery categories into the admin dashboard so non-developers can edit them too (the gallery already works this way).
- Turn the `public/images` + `constants.ts` block into a single `content/` folder per client.
- Add a `theme.ts` with named presets you can switch between.

## Security reminders before reusing
- **Never copy `.env.local` or any real keys/passwords into the template.** Strip them.
- `configure-supabase-smtp.js` had a hardcoded Gmail app password — remove it from the template entirely and use env vars.
- Always reset `NEXT_PUBLIC_ADMIN_EMAILS` to the new client (not your own) at handover.
