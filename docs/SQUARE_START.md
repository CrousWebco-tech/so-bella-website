Square integration starter notes for So Bella

Goal: optional integration so the client can manage services, pricing, and appointments from Square and surface them on the website.

1) Create a Square Developer account
- https://developer.squareup.com — create an application to obtain an App ID and Secret.

2) OAuth app flow
- We'll implement OAuth so the client can connect their Square account to the site.
- Server routes required:
  - `/api/square/oauth/start` -> redirect to Square OAuth
  - `/api/square/oauth/callback` -> exchange code for tokens and store refresh token

3) Webhooks
- Subscribe to relevant webhooks (appointments, orders) and implement `/api/square/webhook` to receive updates.

4) Data model
- Mirror Square Catalog items to Supabase `services` table OR fetch on-demand from Square Catalog API.

5) Next steps for implementation
- I can scaffold the API routes and a basic admin UI to import and sync services if you want — say "scaffold Square" and I'll add the files.
