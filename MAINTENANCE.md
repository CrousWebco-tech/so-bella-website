# Maintenance & Update Guide

How to update and maintain your website after launch.

---

## Common Updates

### 1. Update Business Information

File: `lib/constants.ts`

```typescript
export const SITE_CONFIG = {
  name: 'So Bella Hair & Beauty Lounge',
  email: 'your-email@example.com',
  phone: '(555) 123-4567',
  address: 'Your Address, City, State ZIP',
  businessHours: {
    monday: 'Closed',
    tuesday: '10:00 AM - 8:00 PM',
    // ... etc
  },
}
```

**After editing:**
```bash
git add lib/constants.ts
git commit -m "Update: Business hours and contact info"
git push origin main
# Vercel auto-deploys!
```

### 2. Update Services

File: `lib/constants.ts`

```typescript
export const SERVICES = [
  {
    id: 1,
    title: 'Hair Extensions',
    description: 'Premium quality hair extensions...',
    icon: '💇‍♀️',
    details: ['Detail 1', 'Detail 2'],
  },
  // Add more services
]
```

**To add a service:**
1. Increment the `id`
2. Add all required fields
3. Commit and push

### 3. Update Reviews

Option A: Add directly in Supabase
1. Go to Supabase Dashboard
2. Click `reviews` table
3. Click "Insert" to add row
4. Set `verified: TRUE` to show

Option B: Through website form (when set up)
- Reviews need admin approval
- Verify in Supabase table
- Automatically appears when approved

### 4. Update Gallery Images

File: `app/components/GallerySection.tsx`

Or in Supabase:
1. Go to `gallery_images` table
2. Click "Insert"
3. Add image details:
   - `title`: Image title
   - `category`: Category name
   - `image_url`: Link to image
   - `display_order`: Sort order
   - `active: TRUE`

---

## Editing Different Sections

### Hero Section
File: `app/components/HeroSection.tsx`

Edit these parts:
- Headline text
- Subheadline
- Button labels
- Tagline/badge

### About Section
File: `app/components/AboutSection.tsx`

Edit:
- Owner description
- Personal story
- Stats (experience, clients, rating)

### Services Section
File: `app/components/ServicesSection.tsx`

Already uses `lib/constants.ts`, so edit there.

### Contact Section
File: `app/components/ContactSection.tsx`

Edit:
- Form fields
- Contact info display
- Email/phone

### Aftercare Page
File: `app/aftercare/page.tsx`

Edit `aftercareItems` array to update content.

### Terms & Conditions
File: `app/terms/page.tsx`

Edit `termsItems` array to update policies.

### Privacy Policy
File: `app/privacy/page.tsx`

Edit policy text as needed.

---

## Design Changes

### Colors

File: `tailwind.config.ts`

```typescript
colors: {
  'blush': '#f5e6e0',      // Light pink
  'nude': '#e8d4c4',       // Beige
  'gold': '#d4af7a',       // Accent color
  'beauty-black': '#1a1a1a', // Dark text
  'beauty-white': '#faf9f7', // Light background
}
```

Update hex codes to change colors. Colors used globally!

### Fonts

File: `app/globals.css`

```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Montserrat:wght@300;700&display=swap');
```

Change Google Font URLs to use different fonts.

### Animations

File: `tailwind.config.ts`

Edit animation timings and easing:
```typescript
keyframes: {
  fadeIn: {
    '0%': { opacity: '0' },
    '100%': { opacity: '1' },
  },
  // ... more animations
}
```

---

## Image Management

### Add Images

1. Save image to `public/images/`
   - Keep files small (<500KB)
   - Use .jpg or .webp for photos
   - Use .png for graphics

2. Update component reference:

```typescript
// In component
<img src="/images/my-image.jpg" alt="Description" />
```

### Replace Logo

File: `app/components/Navbar.tsx`

Look for logo section and update:
```typescript
<div className="w-10 h-10 bg-gradient-luxury rounded-full">
  {/* Replace this with image */}
  <img src="/images/logo.png" alt="Logo" />
</div>
```

### Replace Hero Image

File: `app/components/HeroSection.tsx`

Replace placeholder div with:
```typescript
<Image
  src="/images/hero.jpg"
  alt="Salon"
  fill
  className="object-cover"
/>
```

### Gallery Images

Add to Supabase `gallery_images` table:
- Upload images to hosting (Google Drive, Imgur, etc.)
- Get shareable link
- Add to Supabase with link

---

## Content Updates Checklist

- [ ] Business info updated (`lib/constants.ts`)
- [ ] Services reviewed and updated
- [ ] Reviews added to database
- [ ] Gallery images optimized
- [ ] Contact info verified
- [ ] Social media links working
- [ ] WhatsApp number set
- [ ] Terms & Conditions reviewed
- [ ] Privacy Policy updated
- [ ] All links working
- [ ] Mobile view tested
- [ ] Forms tested

---

## Testing After Changes

### Local Testing

```bash
# Start dev server
npm run dev

# Visit http://localhost:3000

# Test:
- All pages load
- All links work
- Forms submit
- Mobile view looks good
- Images display
```

### Before Publishing

1. Build locally:
   ```bash
   npm run build
   ```
   Check for errors!

2. Preview build:
   ```bash
   npm start
   ```

3. Test on multiple browsers

4. Test on mobile

### Deploy

```bash
git add .
git commit -m "Update: [describe changes]"
git push origin main
# Vercel auto-deploys!
```

---

## Performance Optimization

### Image Optimization

Vercel automatically optimizes images, but:
- Use appropriate file sizes
- Compress before uploading
- Use .webp format when possible
- Lazy load images in gallery

### Code Optimization

- Remove unused dependencies
- Use dynamic imports for heavy components
- Minimize bundle size

```bash
# Check bundle size
npm run build

# View in .next/static
```

### Database Optimization

- Remove old submissions monthly
- Archive completed bookings
- Delete inactive gallery images
- Add indexes to frequently queried fields

---

## Backup & Recovery

### Backup Website Code

Already backed up to GitHub! To verify:

```bash
# Check GitHub
git log --oneline
# Shows all commits/changes history
```

### Backup Database

Monthly backup in Supabase:
1. Go to Supabase Dashboard
2. Click "Backups"
3. Can restore previous versions if needed

### Manual Database Export

```sql
-- In Supabase SQL Editor
SELECT * FROM contact_submissions;
SELECT * FROM bookings;
SELECT * FROM reviews;
```

Copy results and save as CSV.

---

## Troubleshooting

### Site Not Updating

1. Check if code is pushed: `git log`
2. Check Vercel deployment status
3. Clear browser cache (Ctrl+Shift+Del)
4. Wait 5 minutes for deployment

### Form Not Submitting

1. Check Supabase connection
2. Verify `.env.local` has API keys
3. Check browser console for errors
4. Verify Supabase table exists

### Images Not Loading

1. Verify image path is correct
2. Check file exists in `public/images/`
3. Try absolute path
4. Check image permissions

### Mobile View Broken

1. Test in Chrome DevTools (F12)
2. Check responsive classes
3. Verify Tailwind responsive prefixes
4. Check padding/margins on mobile

---

## Monthly Maintenance Tasks

- [ ] Review form submissions
- [ ] Approve new reviews
- [ ] Check analytics
- [ ] Update content if needed
- [ ] Test all functions
- [ ] Backup database
- [ ] Check for outdated dependencies

```bash
# Check for outdated packages
npm outdated

# Update packages
npm update
```

---

## Adding New Features

### Add New Service

1. Edit `lib/constants.ts`
2. Add to SERVICES array
3. Test
4. Deploy

### Add New Page

1. Create folder: `app/newpage/`
2. Create: `app/newpage/page.tsx`
3. Add layout and content
4. Update navigation if needed
5. Deploy

### Add New Form

1. Create form component
2. Use Supabase helper to submit
3. Test locally
4. Deploy

---

## Scaling & Growth

### When Site Gets Busy

**Database:**
- Free tier allows 500MB
- Monitor usage in Supabase
- Upgrade to Pro if needed ($25/month)

**Hosting:**
- Free tier allows 10GB bandwidth
- Supabase handles scaling
- Upgrade if you exceed limits

**Performance:**
- Vercel auto-scales
- No configuration needed
- Monitor metrics

---

## Security Maintenance

### Regular Tasks

- Keep dependencies updated
- Review access logs
- Monitor database for suspicious activity
- Update privacy policies
- Review RLS policies

### Update npm Packages

```bash
# Check for vulnerabilities
npm audit

# Fix vulnerabilities
npm audit fix

# Update all packages
npm update
```

---

## Version Control Best Practices

### Always Use Branches

```bash
# Create feature branch
git checkout -b feature/my-update

# Make changes
# Test thoroughly

# Merge to main
git checkout main
git merge feature/my-update
git push origin main
```

### Commit Messages

Good commit messages:
```
git commit -m "Update: Service descriptions and pricing"
git commit -m "Add: New gallery images for spring collection"
git commit -m "Fix: Mobile menu responsive layout"
```

### Rollback Changes

```bash
# See history
git log --oneline

# Revert to previous commit
git revert <commit-id>
```

---

## Support & Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion/
- **Supabase**: https://supabase.io/docs

---

## Getting Help

### Common Issues

1. **Deployment Failed**
   - Check Vercel build logs
   - Look for TypeScript errors
   - Verify environment variables

2. **Database Issues**
   - Check Supabase status page
   - Verify API keys
   - Check RLS policies

3. **Performance Problems**
   - Optimize images
   - Check database queries
   - Use Vercel analytics

---

## Automation Scripts

### Auto-deploy Scheduled Updates

In Vercel, set up deployments via:
- GitHub scheduled workflows
- Webhooks from your CMS
- API triggers

---

**Your site is production-ready and easy to maintain!** 

For questions, refer to the official documentation or reach out to your developer.
