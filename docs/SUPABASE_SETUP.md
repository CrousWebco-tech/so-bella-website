Supabase setup and deployment steps for So Bella website

1) Create Supabase project
- Go to https://app.supabase.com and create a new project.
- Note the project URL (https://<project>.supabase.co) and the anon/public API key.

2) Configure Auth email delivery
- In Supabase Dashboard → Authentication → Settings, configure an SMTP provider or enable Supabase email so magic links can be sent.

3) Create Storage bucket
- Storage → Buckets → Create bucket named `public` and enable public access (used for gallery images).

4) Run SQL migrations
- Open Supabase SQL editor and run the SQL in `supabase/migrations/001_init.sql` (this creates `site_content`, `gallery_images`, `reviews`, `bookings`, and `contact_submissions`).

5) Environment variables (Vercel / local)
- NEXT_PUBLIC_SUPABASE_URL = https://your-project.supabase.co
- NEXT_PUBLIC_SUPABASE_ANON_KEY = <anon key>
- NEXT_PUBLIC_WHATSAPP_NUMBER = +1234567890
- NEXT_PUBLIC_SITE_URL = https://your-domain.com
- NEXT_PUBLIC_SUPPORT_EMAIL = support@your-domain.com

6) Local testing
- Create a `.env.local` in the project root with the vars above.
- Install deps and run dev server:
```bash
npm install
npm run dev
```
- Visit `http://localhost:3000/admin`, enter the admin email and follow the magic link in email.

7) Production (Vercel)
- Connect the repository to Vercel.
- Add the same env vars in Vercel Project Settings → Environment Variables.
- Deploy the project.

8) Optional: Service role key
- For server-only operations you may create/use `SUPABASE_SERVICE_ROLE_KEY`. Store it as a secret in Vercel and only use it on server-side routes.
