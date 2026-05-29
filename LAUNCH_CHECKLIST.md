# Pre-Launch Checklist

Use this checklist to ensure everything is ready before going live.

---

## ✅ Content & Branding

- [ ] **Business Info Updated**
  - [ ] Correct business name in `SITE_CONFIG`
  - [ ] Correct email address
  - [ ] Correct phone number
  - [ ] Correct physical address
  - [ ] Correct business hours

- [ ] **Hero Section**
  - [ ] Hero tagline updated in `HERO_CONTENT`
  - [ ] Hero headline updated
  - [ ] CTA button text updated (`primaryCta`, `secondaryCta`)
  - [ ] Hero image uploaded and path correct in `.env` or constants

- [ ] **Services**
  - [ ] All services listed in `SERVICES`
  - [ ] Service descriptions are accurate
  - [ ] Service icons are appropriate
  - [ ] No outdated services in the list

- [ ] **Pricing**
  - [ ] All service prices updated in `PRICING`
  - [ ] Prices match your current rates
  - [ ] Mobile appointment fee is correct

- [ ] **Gallery**
  - [ ] 8+ portfolio images uploaded to `/public/images/`
  - [ ] Gallery images added to `GALLERY_SETTINGS.defaultImages`
  - [ ] Gallery categories are correct
  - [ ] Image file paths are accurate

- [ ] **About Section**
  - [ ] Owner photo uploaded to `/public/images/about-owner.jpg`
  - [ ] About description is current
  - [ ] Professional tone and accurate info

- [ ] **SEO & Meta Tags**
  - [ ] Page title updated in `SEO.title`
  - [ ] Meta description updated in `SEO.description`
  - [ ] Keywords updated in `SEO.keywords`

- [ ] **Social Media Links**
  - [ ] TikTok URL correct in `SOCIAL_LINKS`
  - [ ] Instagram URL correct
  - [ ] Facebook URL correct
  - [ ] All links point to your accounts

---

## 🔐 Environment Setup

- [ ] **Supabase Project Created**
  - [ ] Free account created at [supabase.com](https://supabase.com)
  - [ ] New project created
  - [ ] Project URL copied

- [ ] **Environment Variables Set**
  - [ ] `.env.local` file created with:
    - [ ] `NEXT_PUBLIC_SUPABASE_URL` (from Supabase)
    - [ ] `NEXT_PUBLIC_SUPABASE_ANON_KEY` (from Supabase)
    - [ ] `NEXT_PUBLIC_WHATSAPP_NUMBER` (your number with country code)
  - [ ] Variables tested locally (site runs without errors)

- [ ] **Supabase Tables Created**
  - [ ] `reviews` table created with columns:
    - [ ] id (UUID)
    - [ ] name (Text)
    - [ ] rating (Number)
    - [ ] text (Text)
    - [ ] created_at (Timestamp)
    - [ ] published (Boolean)
  - [ ] `contact_submissions` table created with columns:
    - [ ] id (UUID)
    - [ ] name (Text)
    - [ ] email (Text)
    - [ ] message (Text)
    - [ ] created_at (Timestamp)
  - [ ] (Optional) `gallery_images` table for dynamic gallery

---

## 🧪 Local Testing

- [ ] **Site Runs Locally**
  - [ ] `npm install` completes without errors
  - [ ] `npm run dev` starts successfully
  - [ ] Site opens at `http://localhost:3000`

- [ ] **All Pages Load**
  - [ ] Homepage displays correctly
  - [ ] Hero section shows your content
  - [ ] Gallery images display
  - [ ] About section shows
  - [ ] Services section displays all services
  - [ ] Contact form is visible and functional
  - [ ] Footer has correct info and links

- [ ] **Forms Work**
  - [ ] Contact form submits (check browser console for errors)
  - [ ] Review submission form works
  - [ ] WhatsApp button links correctly to your number
  - [ ] No JavaScript errors in browser console

- [ ] **Responsive Design**
  - [ ] Site looks good on desktop
  - [ ] Site looks good on tablet
  - [ ] Site looks good on mobile (iPhone, Android)
  - [ ] All buttons are clickable on mobile
  - [ ] Text is readable on all devices

- [ ] **Images Load**
  - [ ] Hero image displays
  - [ ] Gallery images display
  - [ ] About owner photo displays
  - [ ] No broken image placeholders

---

## 🚀 GitHub & Deployment Setup

- [ ] **GitHub Repository**
  - [ ] Repository created and code pushed
  - [ ] README.md is accurate
  - [ ] `.gitignore` includes `.env.local`
  - [ ] No secrets committed to repository

- [ ] **Vercel Account & Deployment**
  - [ ] Vercel account created at [vercel.com](https://vercel.com)
  - [ ] GitHub repository connected to Vercel
  - [ ] Environment variables added in Vercel dashboard:
    - [ ] `NEXT_PUBLIC_SUPABASE_URL`
    - [ ] `NEXT_PUBLIC_SUPABASE_ANON_KEY`
    - [ ] `NEXT_PUBLIC_WHATSAPP_NUMBER`
  - [ ] First deployment successful
  - [ ] Site is live at Vercel URL (e.g., `sobella.vercel.app`)

- [ ] **Custom Domain (Optional)**
  - [ ] Domain purchased (GoDaddy, Namecheap, etc.)
  - [ ] Domain connected to Vercel
  - [ ] DNS records updated
  - [ ] SSL certificate active (should be automatic)
  - [ ] Site accessible at custom domain

---

## 🔗 Testing Live Features

- [ ] **Contact Form**
  - [ ] Submit test message on live site
  - [ ] Message appears in Supabase `contact_submissions` table
  - [ ] You receive the message (if email notifications enabled)

- [ ] **Review Submission**
  - [ ] Submit test review on live site
  - [ ] Review appears in Supabase `reviews` table
  - [ ] Review is unpublished by default
  - [ ] You can set `published = true` to show it

- [ ] **WhatsApp Integration**
  - [ ] Click WhatsApp button on live site
  - [ ] Opens WhatsApp with your number
  - [ ] Can send test message

- [ ] **Links & Navigation**
  - [ ] All navigation links work
  - [ ] Social media links go to correct accounts
  - [ ] "Book Appointment" button works
  - [ ] Footer links are functional

---

## 📊 Monitoring & Maintenance

- [ ] **Set Up Monitoring**
  - [ ] Bookmark Supabase dashboard (for reviews & messages)
  - [ ] Enable Vercel notifications for deployment failures
  - [ ] Save GitHub repository link for future edits

- [ ] **Documentation Saved**
  - [ ] Copy of `CLIENT_HANDOFF.md` saved for reference
  - [ ] Copy of environment variables stored securely
  - [ ] Backup of all photos saved locally
  - [ ] Developer contact info saved

- [ ] **Regular Maintenance Plan**
  - [ ] Plan monthly gallery updates
  - [ ] Set schedule to check messages
  - [ ] Schedule to review and approve reviews
  - [ ] Plan to test forms monthly

---

## 🎉 Final Sign-Off

- [ ] **Everything Works**
  - [ ] Site is live and accessible
  - [ ] All content is accurate and up-to-date
  - [ ] Forms are working
  - [ ] Images are displaying
  - [ ] Mobile version looks good

- [ ] **You Can Edit**
  - [ ] You can edit `lib/constants.ts` locally
  - [ ] You can push changes to GitHub
  - [ ] Vercel automatically deploys your changes
  - [ ] You know how to add new gallery photos

- [ ] **Launch Ready**
  - [ ] Share live URL with clients
  - [ ] Post link on social media
  - [ ] Add to business cards/email signature
  - [ ] Monitor for first client submissions

---

## ⚠️ Important Reminders

- **Keep `.env.local` private** – Never push this file to GitHub
- **Back up your photos** – Keep copies of all images locally
- **Monitor Supabase** – Check for incoming messages and reviews regularly
- **Test after updates** – Always test locally before pushing changes
- **Update regularly** – Add new gallery photos monthly
- **Respond to clients** – Answer contact form messages promptly

---

## 🆘 Troubleshooting Common Issues

**Site doesn't load?**
- Check that environment variables are set correctly in `.env.local`
- Restart `npm run dev`
- Check browser console for errors

**Forms don't work?**
- Verify Supabase URL and anon key are correct
- Check that Supabase tables exist
- Look for errors in browser console

**Images not showing?**
- Make sure image files are in `/public/images/`
- Check filename matches in `lib/constants.ts`
- Verify image file format (JPG, PNG, WebP)
- Check image file size (should be under 500KB)

**Changes not appearing on live site?**
- Make sure you pushed to GitHub (`git push`)
- Check Vercel dashboard to see if deployment succeeded
- Wait 1-2 minutes for Vercel to rebuild
- Hard refresh browser (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)

---

**You're ready to launch! 🚀**

If anything doesn't work, refer back to `CLIENT_HANDOFF.md` for detailed instructions.
