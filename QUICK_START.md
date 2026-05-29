# So Bella Website - Quick Start Checklist

Complete this checklist to launch your website.

## Phase 1: Local Setup (30 minutes)

- [ ] **Install Node.js** from nodejs.org
- [ ] **Clone project** to your computer
- [ ] **Install dependencies**: `npm install`
- [ ] **Create .env.local** file from .env.example
- [ ] **Test locally**: `npm run dev` → http://localhost:3000

**Status**: Website running locally ✓

---

## Phase 2: Customize Content (30-60 minutes)

### Basic Information
- [ ] Update business name in `lib/constants.ts`
- [ ] Update phone number
- [ ] Update email address
- [ ] Update address
- [ ] Update business hours
- [ ] Update WhatsApp number in `.env.local`

### Services
- [ ] Add/edit services in `lib/constants.ts`
- [ ] Update service descriptions
- [ ] Add service icons (emojis)

### Pages
- [ ] Update About section text
- [ ] Update Aftercare guidelines in `app/aftercare/page.tsx`
- [ ] Review Terms & Conditions in `app/terms/page.tsx`
- [ ] Review Privacy Policy in `app/privacy/page.tsx`

### Colors & Design
- [ ] Review luxury color palette
- [ ] Adjust if desired in `tailwind.config.ts`
- [ ] Test color changes locally

**Status**: Content customized ✓

---

## Phase 3: Images (15-30 minutes)

- [ ] Create/prepare professional photos
- [ ] Add logo to `public/images/logo.png`
- [ ] Add hero image to `public/images/hero.jpg`
- [ ] Add owner photo to `public/images/owner.jpg`
- [ ] Add gallery images (8+ images recommended)
- [ ] Update image references in components
- [ ] Test that all images display correctly

**Status**: Images ready ✓

---

## Phase 4: Database Setup (15 minutes) - Optional but Recommended

- [ ] Create Supabase account (free at supabase.com)
- [ ] Create new project
- [ ] Copy Project URL and Anon Key
- [ ] Add to `.env.local`:
  - `NEXT_PUBLIC_SUPABASE_URL=...`
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY=...`
- [ ] Run SQL scripts in SUPABASE_SETUP.md
- [ ] Verify tables created successfully
- [ ] Add sample reviews (optional)

**Status**: Database ready ✓

---

## Phase 5: GitHub Setup (10 minutes)

- [ ] Create GitHub account (github.com)
- [ ] Create new repository: `so-bella-website`
- [ ] Push code:
  ```bash
  git init
  git add .
  git commit -m "Initial commit: So Bella website"
  git remote add origin https://github.com/YOUR-USERNAME/so-bella-website.git
  git push -u origin main
  ```
- [ ] Verify code on GitHub

**Status**: Code backed up ✓

---

## Phase 6: Deploy to Vercel (10 minutes)

- [ ] Create Vercel account (vercel.com, sign in with GitHub)
- [ ] Click "New Project"
- [ ] Select your GitHub repository
- [ ] Auto-detect Next.js framework
- [ ] Add environment variables in Vercel:
  - `NEXT_PUBLIC_SUPABASE_URL`
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
  - `NEXT_PUBLIC_WHATSAPP_NUMBER`
  - `NEXT_PUBLIC_SITE_NAME`
  - `NEXT_PUBLIC_SITE_URL`
  - `NEXT_PUBLIC_SUPPORT_EMAIL`
- [ ] Click "Deploy"
- [ ] Wait for deployment (1-2 minutes)
- [ ] Test live site

**Status**: Website live! ✓

---

## Phase 7: Domain Setup (5-15 minutes) - Optional

- [ ] Purchase domain (namecheap.com, godaddy.com, etc.)
- [ ] In Vercel project settings, click "Domains"
- [ ] Add your domain
- [ ] Follow DNS configuration instructions
- [ ] Wait for DNS propagation (24-48 hours)
- [ ] Test domain in browser

**Status**: Custom domain active ✓

---

## Phase 8: Testing & Launch (15-30 minutes)

### Desktop Testing
- [ ] Homepage loads
- [ ] All sections visible and formatted
- [ ] All links work
- [ ] Hero image displays
- [ ] Gallery images load
- [ ] Services display correctly
- [ ] Contact form works
- [ ] WhatsApp button works
- [ ] Footer links work

### Mobile Testing
- [ ] Use Chrome DevTools (F12) mobile view
- [ ] Navbar is responsive
- [ ] Text is readable
- [ ] Images are optimized
- [ ] Buttons are clickable
- [ ] Forms are usable
- [ ] No layout issues

### Link Testing
- [ ] Navigation links work
- [ ] Social media links work
- [ ] Contact form submits
- [ ] WhatsApp integration works
- [ ] Email links work

**Status**: All testing passed ✓

---

## Phase 9: Post-Launch (Ongoing)

### First Week
- [ ] Monitor analytics
- [ ] Test contact form submissions
- [ ] Verify emails are received
- [ ] Check database for submissions
- [ ] Fix any issues
- [ ] Share with friends/family for feedback

### Weekly Tasks
- [ ] Check contact submissions
- [ ] Respond to inquiries
- [ ] Monitor site performance
- [ ] Check for any errors

### Monthly Tasks
- [ ] Update content as needed
- [ ] Add new reviews/testimonials
- [ ] Add new gallery images
- [ ] Backup database (Supabase handles this)
- [ ] Check analytics
- [ ] Update social media links

**Status**: Site maintained ✓

---

## Troubleshooting

### Common Issues

**Site won't start locally**
```bash
# Try:
rm -rf node_modules package-lock.json
npm install
npm run dev
```

**Build fails on Vercel**
- Check build logs in Vercel dashboard
- Look for TypeScript errors
- Verify environment variables
- Test locally with `npm run build`

**Contact form not working**
- Verify Supabase tables exist
- Check API keys in Vercel
- Check browser console for errors
- Verify RLS policies allow inserts

**Images not loading**
- Check image path is correct
- Verify image exists in `public/images/`
- Check image file size (<500KB)
- Try different image format

**Domain not working**
- Verify DNS records in registrar
- Wait for DNS propagation (up to 48 hours)
- Check Vercel domain settings
- Ping domain to test connectivity

---

## Getting Help

### Documentation
- [SETUP_GUIDE.md](SETUP_GUIDE.md) - Detailed setup
- [DEPLOYMENT.md](DEPLOYMENT.md) - Deployment help
- [SUPABASE_SETUP.md](SUPABASE_SETUP.md) - Database setup
- [MAINTENANCE.md](MAINTENANCE.md) - Ongoing maintenance

### Resources
- Next.js: https://nextjs.org/docs
- Tailwind: https://tailwindcss.com
- Vercel: https://vercel.com/docs
- Supabase: https://supabase.io/docs

---

## Launch Timeline

**Total time: 2-4 hours** depending on customization

- Phase 1: 30 min
- Phase 2: 45 min
- Phase 3: 20 min
- Phase 4: 15 min (optional)
- Phase 5: 10 min
- Phase 6: 10 min
- Phase 7: 15 min (optional)
- Phase 8: 20 min
- Phase 9: Ongoing

---

## Success Criteria

✓ Website is live at your domain
✓ All pages load correctly
✓ Mobile view works
✓ Forms submit successfully
✓ Images display properly
✓ All links functional
✓ Contact info is correct
✓ Social media links work
✓ WhatsApp button works
✓ Site is production-ready

---

## Celebration! 🎉

Your luxury salon website is live!

**Next steps:**
1. Share with clients
2. Update social media
3. Add to Google Business
4. Monitor analytics
5. Gather feedback
6. Keep content fresh

---

**Questions?** Refer to the documentation guides or contact your developer.

**Ready to launch?** Start with Phase 1! 🚀
