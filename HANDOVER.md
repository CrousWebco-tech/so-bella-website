# Client Handoff Guide

This document explains how to hand off the So Bella Hair & Beauty Lounge website to the client, what is included, and how the client can continue editing content and deploying updates.

## ✅ What is included

- Complete Next.js website built with React, TypeScript, Tailwind CSS, and Framer Motion
- Editable site settings in `lib/constants.ts`
- Gallery and image placeholders in `app/components/GallerySection.tsx`
- Contact form wired for Supabase submissions
- Deployment support for Vercel
- Local development setup and environment templates

## 🧩 Editable content locations

### Site text and business data
- `lib/constants.ts`
  - `SITE_CONFIG` (business name, email, phone, address, hours)
  - `SOCIAL_LINKS`
  - `SERVICES`
  - `PRICING`
  - `SEO`
  - `SAMPLE_REVIEWS`

### Images and branding
- `app/components/HeroSection.tsx`
  - Replace the hero image placeholder with your salon photo
- `app/components/AboutSection.tsx`
  - Replace the owner photo placeholder with your professional photo
- `app/components/GallerySection.tsx`
  - Update `galleryImages` and replace `/images/gallery-*.jpg` in `public/images/`
- `public/images/`
  - Add real photos and reference them from the gallery component

### Contact and WhatsApp
- `.env.local`
  - `NEXT_PUBLIC_SUPABASE_URL`
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
  - `NEXT_PUBLIC_WHATSAPP_NUMBER`
  - Optional: `NEXT_PUBLIC_GOOGLE_MAPS_EMBED_ID`

## 🚀 Local setup for the client

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy the environment template:
   ```bash
   cp .env.example .env.local
   ```
4. Open `.env.local` and add the real values:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `NEXT_PUBLIC_WHATSAPP_NUMBER`
   - Optional: `NEXT_PUBLIC_GOOGLE_MAPS_EMBED_ID`
5. Start the development server:
   ```bash
   npm run dev
   ```
6. Open the site at `http://localhost:3000`

## 🧠 Client-friendly edit checklist

- Text, services, pricing, business hours, and SEO are editable in `lib/constants.ts`
- Hero and gallery text and image references can be updated in `lib/constants.ts`
- Images are replaced in:
  - `app/components/AboutSection.tsx`
  - `app/components/GallerySection.tsx`
- Client reviews are collected through the review submission form and published after admin approval in Supabase
- Contact form messages are stored in Supabase

## 🌐 Recommended handoff process

1. Create a GitHub repository and push the code.
2. Add the client as a collaborator to the GitHub repository.
3. Deploy the project to Vercel:
   - Connect the GitHub repository to Vercel
   - Add the same environment variables in the Vercel dashboard
   - Deploy the site
4. Share the production URL with the client.
5. Provide the client with this handoff guide and the `README.md`.

## 📦 Optional handoff package

Provide the client with:
- GitHub repository URL
- Vercel deployment URL
- `.env.example` file (never commit `.env.local`)
- Supabase project URL and anon key (public anon key only)
- This `HANDOVER.md`

## 🔧 If the client wants to edit images

1. Replace placeholder markup in the component files:
   - `app/components/HeroSection.tsx`
   - `app/components/AboutSection.tsx`
2. Add actual images to `public/images/`
3. Update gallery image entries in `app/components/GallerySection.tsx`

## 📌 Notes for a smooth transfer

- Keep `.env.local` private; do not commit it to GitHub.
- If the client will manage Supabase, share only the public values and keep the database password secure.
- For non-technical clients, offer to handle environment setup and Vercel deployment once.
- If you want, I can also update the app to use real image imports instead of placeholders for a cleaner handoff.
