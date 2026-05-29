# So Bella Hair & Beauty Lounge – Client Handoff Guide

Welcome! This is your complete guide to managing and updating your website. Everything is set up so you can edit content without needing a developer.

---

## 📋 Quick Start

### For running locally (testing before going live):

```bash
# 1. Clone the repository (get the link from your developer)
git clone <repository-link>

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local

# 4. Add your values to .env.local (see below)

# 5. Start the site
npm run dev

# 6. Open in browser
http://localhost:3000
```

---

## 🔐 Environment Setup (.env.local)

**Create a file named `.env.local` in the root folder with these values:**

```
NEXT_PUBLIC_SUPABASE_URL=<your-supabase-url>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-supabase-anon-key>
NEXT_PUBLIC_WHATSAPP_NUMBER=<your-whatsapp-number-with-country-code>
```

**Where to get these:**

1. **Supabase URL & Anon Key**
   - Go to [supabase.com](https://supabase.com)
   - Create a free account
   - Create a new project
   - Go to Settings → API
   - Copy the `URL` and `anon public key`

2. **WhatsApp Number**
   - Your WhatsApp number with country code (e.g., `14155552671` for +1 415 555 2671)
   - No spaces, dashes, or special characters

---

## ✏️ Editing Content

### Text & Business Info (Easiest)

**File:** `lib/constants.ts`

Everything here is simple text edits:

- **Business name, email, phone, address** → `SITE_CONFIG`
- **Hours of operation** → `SITE_CONFIG.businessHours`
- **Services** → `SERVICES` (add/remove services as needed)
- **Pricing** → `PRICING` (update service prices)
- **Hero section text** → `HERO_CONTENT`
  - Tagline, headline, CTA buttons
- **Gallery categories** → `GALLERY_SETTINGS.categories`

**Example edits:**

```javascript
// Change business hours
businessHours: {
  monday: 'Closed',
  tuesday: '10:00 AM - 8:00 PM',  // ← Edit these times
  // ...
}

// Add a new service
{
  id: 8,
  title: 'Hair Coloring',
  description: 'Professional color treatments...',
  icon: '🎨',
  details: [
    'Professional color service',
    'Custom shade matching',
    // ...
  ],
}

// Update pricing
lashes: {
  min: 120,    // ← Change these numbers
  max: 250,
  description: 'Natural to volume lash extensions',
}

// Edit hero CTA text
HERO_CONTENT: {
  tagline: '✨ Your new tagline here',
  primaryCta: 'Book Now',  // ← Your button text
  // ...
}
```

**How to save:**
- Edit the file in VS Code (or any text editor)
- Save the file
- Refresh your browser at `localhost:3000` to see changes

---

### Photos & Images

**Hero Image (large banner at top):**

1. Find your hero photo (salon photo, stylist photo, etc.)
2. Place it in `/public/images/` folder
3. Name it `hero-salon.jpg` (or similar)
4. Edit `lib/constants.ts`:
   ```javascript
   HERO_CONTENT: {
     heroImageSrc: '/images/hero-salon.jpg',  // ← Your image path
   }
   ```

**Gallery Images (portfolio of work):**

1. Collect 8+ of your best work photos
2. Place them in `/public/images/` folder
3. Name them `gallery-1.jpg`, `gallery-2.jpg`, etc.
4. Edit the gallery in `lib/constants.ts`:
   ```javascript
   GALLERY_SETTINGS: {
     defaultImages: [
       {
         id: '1',
         category: 'Hair Extensions',
         title: 'Luxurious Extensions',
         src: '/images/gallery-1.jpg',  // ← Your photo
       },
       // Add more images...
     ]
   }
   ```

**About Section Photo (your professional photo):**

1. Choose a professional photo of yourself
2. Place it in `/public/images/` and name it `about-owner.jpg`
3. Edit `app/components/AboutSection.tsx`:
   ```javascript
   // Find this line and update:
   style={{ backgroundImage: `url('/images/about-owner.jpg')` }}
   ```

---

## 🌐 Going Live on Vercel (Free Hosting)

**This is the easiest way to deploy:**

1. **Create a Vercel account** → [vercel.com](https://vercel.com)
2. **Connect your GitHub repository**
   - Vercel will automatically build and deploy when you push changes
3. **Add environment variables** in Vercel:
   - Go to Project Settings → Environment Variables
   - Add the same `.env.local` values:
     - `NEXT_PUBLIC_SUPABASE_URL`
     - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
     - `NEXT_PUBLIC_WHATSAPP_NUMBER`
4. **Deploy** → Vercel will give you a live URL (e.g., `sobella.vercel.app`)
5. **Get a custom domain**
   - Buy a domain from GoDaddy, Namecheap, etc.
   - Connect it to Vercel (instructions in Vercel dashboard)

---

## 📝 Client Reviews (Supabase Setup)

Reviews come from the website form. To manage them:

1. Go to your **Supabase project dashboard**
2. Create a table called `reviews`:
   ```
   Columns:
   - id (UUID, auto-generate)
   - name (Text)
   - rating (Number)
   - text (Text)
   - created_at (Timestamp)
   - published (Boolean, default: false)
   ```
3. When clients submit reviews:
   - Reviews appear in the Supabase `reviews` table
   - **Only "published" reviews** show on the website
   - You manually set `published = true` for reviews you approve

---

## 📧 Contact Form (Supabase Setup)

Contact form messages are saved to Supabase:

1. Create a table called `contact_submissions`:
   ```
   Columns:
   - id (UUID, auto-generate)
   - name (Text)
   - email (Text)
   - message (Text)
   - created_at (Timestamp)
   ```
2. When clients submit the contact form:
   - Messages appear in this table
   - You can respond to them manually

---

## 🚀 Making Updates & Pushing to Production

**After editing locally:**

1. **Open terminal** in your project folder
2. **Test your changes:**
   ```bash
   npm run dev
   # Check http://localhost:3000
   ```
3. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Updated business hours and gallery photos"
   git push
   ```
4. **Vercel automatically deploys** your changes to the live site

---

## 🛠️ Common Tasks

### Add a new service
1. Edit `lib/constants.ts`
2. Add a new item to the `SERVICES` array
3. Save and push to GitHub

### Change hero CTA buttons
1. Edit `lib/constants.ts` → `HERO_CONTENT`
2. Update `primaryCta` and `secondaryCta`
3. Save and push

### Update business hours
1. Edit `lib/constants.ts` → `SITE_CONFIG.businessHours`
2. Change the times for each day
3. Save and push

### Add a new gallery photo
1. Place image in `/public/images/gallery-9.jpg`
2. Edit `lib/constants.ts` → `GALLERY_SETTINGS.defaultImages`
3. Add a new object with the image details
4. Save and push

---

## ❓ Troubleshooting

### "npm: command not found"
- Install Node.js from [nodejs.org](https://nodejs.org) (choose the LTS version)

### Changes don't appear on live site
- Make sure you pushed to GitHub: `git push`
- Check Vercel dashboard to confirm deployment completed
- Wait 1-2 minutes for Vercel to rebuild

### WhatsApp button doesn't work
- Check that your number in `.env.local` is correct (e.g., `14155552671`)
- No spaces, dashes, or special characters

### Photos not showing
- Make sure image file is in `/public/images/`
- Check the filename is correct in `lib/constants.ts`
- Image should be .jpg, .png, or .webp format
- File should be under 5MB for best performance

---

## 📞 Support & Next Steps

**When you need help:**
1. Check this guide first
2. Contact your developer with specific questions
3. Keep backups of your best work photos

**Regular maintenance:**
- Update gallery photos monthly with new work
- Respond to contact form messages and client reviews
- Test the website monthly to ensure everything works

**Future improvements:**
- Add booking calendar system
- Integrate email marketing
- Add video testimonials
- Set up analytics to track visitors

---

## ✅ Handoff Checklist

Before going live, make sure:

- [ ] All business info is correct in `lib/constants.ts`
- [ ] Hero image is uploaded and shows correctly
- [ ] Gallery photos are uploaded and configured
- [ ] WhatsApp number is correct and tested
- [ ] Supabase tables are created (`reviews`, `contact_submissions`)
- [ ] Environment variables are set in Vercel
- [ ] Site is deployed and live at your domain
- [ ] You can edit `lib/constants.ts` and see changes locally
- [ ] You understand how to push changes to GitHub
- [ ] You have a backup copy of all photos

---

**You're all set! Your website is ready to grow your business. 💫**
