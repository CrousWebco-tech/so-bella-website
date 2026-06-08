# Developer Setup Checklist (So Bella)

Everything to collect from the client and do before handing over. Work top to bottom.

## A. Info to collect from the client

- [ ] **Business name** (exact spelling/capitalisation)
- [ ] **Contact email** (the one she wants shown publicly + receiving enquiries)
- [ ] **Phone number** (for display)
- [ ] **WhatsApp number** with country code (this powers all "Book Now" buttons)
- [ ] **Full address** (or "mobile / by appointment" if no salon)
- [ ] **Opening hours** for each day (or "Closed")
- [ ] **Services list** — name, short description, price, duration
- [ ] **Social links** — Instagram, Facebook, TikTok (full URLs)
- [ ] **Logo** (if she has one) + brand colours if any
- [ ] **Gallery photos** — starter set (she can add more herself later)
- [ ] **Her login email** — the email she'll use to access /admin
- [ ] **About / bio text** — a few sentences about her and the business

## B. Configure the project (.env.local)

- [ ] `NEXT_PUBLIC_SUPABASE_URL` — from Supabase project settings
- [ ] `NEXT_PUBLIC_SUPABASE_ANON_KEY` — from Supabase project settings
- [ ] `NEXT_PUBLIC_WHATSAPP_NUMBER` — client's WhatsApp, digits + country code
- [ ] `NEXT_PUBLIC_ADMIN_EMAILS` — **set this to the CLIENT's login email** (comma-separate if more than one admin). Right now it's `crouswebco@gmail.com` — change it before handover, or she won't be able to log in and you'll still have access to her dashboard.

## C. Create her admin login (Supabase)

Supabase email signups often need email confirmation, which is fiddly on a phone. Easiest path:

1. Supabase dashboard → **Authentication → Users → Add user**.
2. Enter her email + a temporary password. Tick "Auto Confirm User".
3. Send her the email + temporary password. Tell her to change it later if she wants.
4. Confirm her email is in `NEXT_PUBLIC_ADMIN_EMAILS`.

## D. Supabase database (one-time)

Make sure these tables exist: `site_content`, `contact_submissions`, `bookings`, `reviews`, `gallery_images`, and a public **storage bucket** named `public`. (SQL is in the project setup files.)

## E. SECURITY — do these before sharing anything

- [ ] **Remove the hardcoded Gmail app password.** `configure-supabase-smtp.js` line ~11 contains a real Gmail app password (`fiht ofag wkxp bifw`). Delete it / move it to an env var. **Never commit this or include it in a template.** Revoke that app password in the Google account and generate a fresh one if it's been shared anywhere.
- [ ] **Don't commit `.env.local`** — confirm it's in `.gitignore`.
- [ ] Double-check the public contact email is correct: currently `contact.sobella@gmail.com`. Confirm with her.
- [ ] Confirm `NEXT_PUBLIC_ADMIN_EMAILS` no longer contains your own email once handed over (unless you intend to keep access).

## F. Deploy (free)

- [ ] Push to GitHub.
- [ ] Import the repo into **Vercel** (free tier). Add all the env vars from section B in Vercel's project settings.
- [ ] Deploy. Test on a phone: home page, WhatsApp buttons, /admin login, add a gallery photo.

## G. Hand over

- [ ] Send her **SALON-OWNER-GUIDE.md** (or paste it into a message).
- [ ] Send her the /admin link + login.
- [ ] Show her once how to add a gallery photo.
