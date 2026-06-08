# Finish-Up Checklist (5 quick steps)

The website is LIVE at https://so-bella.netlify.app and works for visitors.
These last steps switch on the **admin panel** (her login + photo uploads).
You have to click/type these yourself in the browser — each is fast.

Your new database details:
- Supabase project: "So bella"
- Database URL: https://wuwruwyryrcsnciyavgl.supabase.co
- Admin login (for now): crouswebco@gmail.com  /  password123

---

## 1. Confirm the admin user
- Make the Safari window **full size** first (green dot, top-left) so buttons aren't cut off.
- Supabase → your "So bella" project → **Authentication → Users**.
- Click the user (crouswebco@gmail.com) → in the panel, click **"Confirm email"**.

## 2. Copy your new anon key
- Supabase → **Project Settings → API** (or "API Keys").
- Find **"anon" "public"** key → click **Copy**.

## 3. Update the website's settings (Netlify)
- Netlify → **so-bella** project → **Site configuration → Environment variables**.
- Edit these two:
  - `NEXT_PUBLIC_SUPABASE_URL` → `https://wuwruwyryrcsnciyavgl.supabase.co`
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY` → paste the anon key from step 2

## 4. Redeploy
- Netlify → **Deploys** → **Trigger deploy → Deploy site**.
- Wait ~2 min for it to go green/Published.

## 5. (Optional but nice) Point Supabase at the live site
- Supabase → **Authentication → URL Configuration → Site URL** → `https://so-bella.netlify.app`.

---

## Test it
Go to **https://so-bella.netlify.app/admin** → log in with
`crouswebco@gmail.com` / `password123`.
You should reach the dashboard. Try the **Gallery** tab → add a photo → it appears on the site.

## Before you hand the dashboard to her
- Change `password123` to something strong (Supabase → Authentication → Users → the user → reset password).
- To let HER log in with her own email: add her email to `NEXT_PUBLIC_ADMIN_EMAILS`
  in Netlify (comma-separated), and create a Supabase user for her (Add user → tick
  "Auto Confirm User" this time).
