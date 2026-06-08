# Make It Live (Free, Permanent) — Deploy Guide (Netlify)

Right now the site only runs while your laptop is on. Deploying puts it online
24/7 on **Netlify** (free), so it stays up even with your laptop off. ~15 minutes.

You need two free accounts: **GitHub** (stores the code) and **Netlify** (hosts it).
A `netlify.toml` config file is already in your project, so Netlify will know how
to build it automatically.

## Step 1 — Put the code on GitHub
1. Create a free account at github.com if you don't have one.
2. In VS Code, open the **Source Control** panel (the branch icon on the left).
3. Click **Publish to GitHub** → choose **private** repository.
   - If it asks to sign in to GitHub, do it.
   - This uploads your project. (Your `.env.local` secrets are NOT uploaded — they're protected by `.gitignore`.)

## Step 2 — Connect Netlify
1. Go to app.netlify.com and log in.
2. Click **Add new site → Import an existing project**.
3. Choose **Deploy with GitHub** and authorise it if asked.
4. Pick your `so-bella-website` repository.

## Step 3 — Build settings (should auto-fill)
Netlify reads `netlify.toml`, so these should already be set:
- **Build command:** `npm run build`
- **Publish directory:** `.next`
- The **Next.js plugin** is included automatically.

Leave them as-is.

## Step 4 — Add your settings (important)
Before deploying, open **Environment variables** (under "Add environment variables"
or later in Site settings → Environment variables) and add each line from your
`.env.local` file. Copy the name and value for each:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `NEXT_PUBLIC_WHATSAPP_NUMBER`
- `NEXT_PUBLIC_SITE_NAME`
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_SUPPORT_EMAIL`
- `NEXT_PUBLIC_ADMIN_EMAILS`

(You don't need the SMTP / service-role ones for the website to run — those are only
for the one-off email script.)

## Step 5 — Deploy
Click **Deploy site**. Wait ~2–3 minutes. Netlify gives you a link like
`https://so-bella-website.netlify.app`. **That's your permanent live link.**

> Tip: you can rename it under **Site settings → Change site name** to something
> tidier, e.g. `https://sobella.netlify.app`.

## Step 6 — Point Supabase at the live site
1. Supabase → **Authentication → URL Configuration**.
2. Set **Site URL** to your new Netlify link.
3. Save.

## Step 7 — Test on your phone
- Open the Netlify link → check the site loads and WhatsApp buttons work.
- Open `your-link/admin` → log in → add a gallery photo.

## Later: re-deploys are automatic
Every time you push changes to GitHub, Netlify rebuilds and updates the live site
on its own. Nothing else to do.

## (Optional) Use your own domain later
In Netlify → **Domain management → Add a domain**, add a domain you've bought
(e.g. from Namecheap/GoDaddy). Netlify shows you what to set. The `.netlify.app`
link keeps working regardless.

---

Once you have the live link and her login set up, send her the message in
**WHATSAPP-MESSAGE.txt**.
