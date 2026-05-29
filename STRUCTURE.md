# Project Structure & Developer Reference

## 📁 Folder Layout

```
so-bella-website/
├── app/
│   ├── components/
│   │   ├── HeroSection.tsx          ← Hero banner with CTAs
│   │   ├── AboutSection.tsx         ← About the stylist
│   │   ├── ServicesSection.tsx      ← Service cards
│   │   ├── GallerySection.tsx       ← Masonry portfolio
│   │   ├── ReviewsSection.tsx       ← Client testimonials & review form
│   │   ├── ContactSection.tsx       ← Contact form wired to Supabase
│   │   ├── FAQSection.tsx           ← FAQ accordion
│   │   ├── Navbar.tsx               ← Sticky navigation
│   │   └── Footer.tsx               ← Footer with links
│   ├── layout.tsx                   ← Root layout & metadata
│   ├── page.tsx                     ← Home page
│   ├── (info)/
│   │   ├── privacy/page.tsx         ← Privacy policy
│   │   ├── terms/page.tsx           ← Terms & conditions
│   │   └── aftercare/page.tsx       ← Aftercare guide
│   └── globals.css                  ← Tailwind & global styles
├── lib/
│   ├── constants.ts                 ← ALL EDITABLE CONTENT HERE
│   ├── supabase.ts                  ← Supabase client & helpers
│   └── tailwind.config.js           ← Color palette & design tokens
├── public/
│   ├── images/                      ← All images go here
│   │   ├── gallery-1.jpg
│   │   ├── gallery-2.jpg
│   │   └── hero-salon.jpg
│   └── favicon.ico
├── .env.example                     ← Copy to .env.local for local setup
├── .env.local                       ← DO NOT COMMIT (Git will ignore)
├── .gitignore                       ← Files to exclude from Git
├── .eslintrc.json                   ← Linting rules
├── next.config.js                   ← Next.js configuration
├── package.json                     ← Dependencies & scripts
├── tailwind.config.js               ← Tailwind theme customization
├── tsconfig.json                    ← TypeScript configuration
├── CLIENT_HANDOFF.md                ← **Give this to the client**
├── HANDOVER.md                      ← Developer handoff notes
└── README.md                        ← Project overview
```

---

## 🎨 Key Files for Edits

### `lib/constants.ts`
**Contains all editable content:**
- `SITE_CONFIG` – business name, email, phone, address, hours
- `HERO_CONTENT` – hero section text, CTA buttons, image
- `GALLERY_SETTINGS` – gallery categories and image list
- `SERVICES` – service offerings and descriptions
- `PRICING` – service pricing
- `SOCIAL_LINKS` – social media URLs
- `SEO` – meta tags for search engines
- `FAQ_ITEMS` – frequently asked questions
- `SAMPLE_REVIEWS` – demo testimonial data

### `app/components/HeroSection.tsx`
- Uses `HERO_CONTENT` from constants
- Displays hero image from `HERO_CONTENT.heroImageSrc`
- Shows hero headline, tagline, and CTA buttons

### `app/components/GallerySection.tsx`
- Uses `GALLERY_SETTINGS.defaultImages` from constants
- Fetches gallery images from Supabase (with fallback to constants)
- Shows masonry layout with category filter

### `app/components/AboutSection.tsx`
- Hardcoded owner description (update text directly or move to constants)
- Owner photo at `/public/images/about-owner.jpg`

### `public/images/`
- All website images go here
- Supported formats: JPG, PNG, WebP
- Keep images under 500KB for performance
- Use descriptive filenames: `gallery-1.jpg`, `hero-salon.jpg`

---

## 🔄 Data Flow

### Contact Form
1. User fills form in `ContactSection.tsx`
2. Form submits to `lib/supabase.ts` → `submitContactForm()`
3. Data stored in Supabase `contact_submissions` table
4. Client checks Supabase dashboard to see messages

### Reviews
1. User submits review in `ReviewsSection.tsx`
2. Review stored in Supabase `reviews` table (unpublished by default)
3. Client approves reviews by setting `published = true` in Supabase
4. Only published reviews show on website

### Gallery
1. App checks if Supabase has gallery images via `getGalleryImages()`
2. If Supabase returns images, display them
3. If Supabase is down or empty, fall back to `GALLERY_SETTINGS.defaultImages`
4. Images loaded from `/public/images/`

---

## 🛠️ Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm start

# Run linting
npm run lint

# Format code
npm run format
```

---

## 🌈 Color Palette (Tailwind)

Colors defined in `tailwind.config.js`:

```javascript
colors: {
  'blush': '#f5e6e0',        // soft pink
  'nude': '#e8d4c4',         // light tan
  'gold': '#d4af7a',         // accent gold
  'beauty-black': '#1a1a1a', // dark text
  'beauty-white': '#faf9f7', // off-white
}
```

Use in components:
```jsx
<div className="bg-blush text-beauty-black border-gold">
  Luxury styling
</div>
```

---

## 📦 Dependencies

Key packages used:

- **Next.js 14** – React framework
- **React 18** – UI library
- **TypeScript** – Type safety
- **Tailwind CSS** – Styling
- **Framer Motion** – Animations
- **Lucide React** – Icons
- **Supabase** – Backend/database
- **ESLint** – Code quality

---

## 🔐 Environment Variables

**Required:**
- `NEXT_PUBLIC_SUPABASE_URL` – Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` – Supabase public key
- `NEXT_PUBLIC_WHATSAPP_NUMBER` – WhatsApp number with country code

**Optional:**
- `NEXT_PUBLIC_GOOGLE_MAPS_EMBED_ID` – Google Maps embed

**Never commit** `.env.local` to Git. Use `.env.example` as a template.

---

## 🚀 Deployment (Vercel)

1. Push code to GitHub
2. Create Vercel account and connect GitHub repo
3. Add environment variables in Vercel dashboard
4. Vercel automatically deploys on every push
5. Connect custom domain in Vercel settings

---

## 📝 Supabase Setup

**Create tables:**

### `reviews`
```
id (UUID, auto-generate)
name (Text)
rating (Number, 1-5)
text (Text)
created_at (Timestamp, now())
published (Boolean, default: false)
```

### `contact_submissions`
```
id (UUID, auto-generate)
name (Text)
email (Text)
message (Text)
created_at (Timestamp, now())
```

### `gallery_images` (optional, for dynamic gallery)
```
id (UUID, auto-generate)
title (Text)
category (Text)
image_url (Text, URL to image)
created_at (Timestamp, now())
```

---

## 🎯 Best Practices

1. **Always work in a branch** when adding features
2. **Test locally** before pushing to production
3. **Keep images optimized** (under 500KB each)
4. **Document changes** in commit messages
5. **Never hardcode sensitive data** (use `.env.local`)
6. **Regular backups** of images and content
7. **Monitor Supabase** for message/review submissions

---

## 💡 Tips for Maintenance

- Update gallery monthly with new work
- Test contact form and WhatsApp link regularly
- Monitor Supabase dashboard for incoming submissions
- Keep Node.js and dependencies updated
- Use semantic commits: "feat:", "fix:", "docs:", etc.

---

## 🔗 Useful Links

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Supabase Docs](https://supabase.io/docs)
- [Framer Motion](https://www.framer.com/motion)
- [Vercel Docs](https://vercel.com/docs)

---

This structure keeps content editable, code clean, and deployment straightforward.
