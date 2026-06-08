# Start Here — Running This in VS Code

Everything is set up. Follow these steps once and you're live locally.

## 1. Open the project
In VS Code: **File → Open Folder →** select the `so-bella-website` folder.

## 2. Open the terminal
**Terminal → New Terminal** (or `` Ctrl+` ``). You'll type the commands below here.

## 3. Install dependencies (first time only)
```
npm install
```

## 4. Set up your database (first time only)
1. Go to your Supabase project → **SQL Editor → New query**.
2. Open `supabase-setup.sql` from this folder, copy everything, paste it in, and click **Run**.
   - This creates all the tables, turns on security, and makes the image bucket.
3. Create your admin login: Supabase → **Authentication → Users → Add user** →
   enter your email + a password, tick **Auto Confirm User**.
   - Your email is already set as an admin in `.env.local` (`crouswebco@gmail.com`).
   - To use a different email, change `NEXT_PUBLIC_ADMIN_EMAILS` in `.env.local`.

## 5. Run the website
```
npm run dev
```
Then open **http://localhost:3000** in your browser.
- The site updates live as you edit files.
- Admin dashboard: **http://localhost:3000/admin**

## 6. Check it works
- Click a **Book Now** button → it should open WhatsApp.
- Log in at `/admin` → **Gallery** tab → add a photo → it appears on the site.

## Useful commands
| Command | What it does |
|---|---|
| `npm run dev` | Run the site locally (use this while building) |
| `npm run build` | Make a production build (checks for errors) |
| `npm run lint` | Check code for problems |

## Editing content
- **Text, services, prices, hours:** `lib/constants.ts`
- **Colours / theme:** `tailwind.config.ts`
- **Keys & secrets:** `.env.local` (never share this file)
- The client edits business info, hero text, social links and the gallery
  herself from the `/admin` dashboard — no code needed.

## Going live (free) — when ready
Full steps are in **DEPLOY-GUIDE.md** (Netlify). Short version:
1. Push the folder to GitHub.
2. Import the repo at **app.netlify.com** (free) → Deploy with GitHub.
3. Add every `NEXT_PUBLIC_…` variable from `.env.local` in Netlify's env settings.
4. Deploy. Test `/admin` and the WhatsApp buttons on your phone.

## Security — do before handing to the client
- `.env.local` is already ignored by git — keep your keys out of GitHub.
- The Gmail password and Supabase service key now live only in `.env.local`,
  not in code.
- Before final handover, change `NEXT_PUBLIC_ADMIN_EMAILS` to the client's email.

See **DEVELOPER-SETUP-CHECKLIST.md** for the full handover list, and give the
client **SALON-OWNER-GUIDE.md**.
