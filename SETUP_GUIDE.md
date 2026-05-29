# Setup Guide - So Bella Website

This guide will walk you through setting up the website from scratch.

## Step 1: Local Development Setup

### 1.1 Install Node.js

1. Visit [nodejs.org](https://nodejs.org)
2. Download the LTS version (18 or higher)
3. Install it following the prompts
4. Verify installation:
   ```bash
   node --version
   npm --version
   ```

### 1.2 Set Up Project Locally

1. **Open Terminal/Command Prompt**

2. **Navigate to Project Directory**
   ```bash
   cd /path/to/so-bella-website
   ```

3. **Install Dependencies**
   ```bash
   npm install
   ```
   This installs all required packages (Next.js, React, Tailwind CSS, etc.)

4. **Create Environment File**
   ```bash
   cp .env.example .env.local
   ```

### 1.3 Configure Environment Variables

Edit `.env.local` (in your project root):

```env
# Supabase Configuration (leave blank for now, we'll set up later)
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=

# WhatsApp Business Number (add country code, no spaces)
# Example: 14155552671
NEXT_PUBLIC_WHATSAPP_NUMBER=1234567890

# Site Configuration
NEXT_PUBLIC_SITE_NAME=So Bella Hair & Beauty Lounge
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_SUPPORT_EMAIL=hello@sobella.com
```

### 1.4 Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

You should see the website running locally!

---

## Step 2: Customizing Your Site

### 2.1 Update Business Information

Open `lib/constants.ts` and update:

```typescript
export const SITE_CONFIG = {
  name: 'Your Business Name',
  email: 'your-email@example.com',
  phone: '(555) 123-4567',
  address: 'Your Address, City, State ZIP',
  // ... etc
}
```

### 2.2 Update Services

In `lib/constants.ts`, edit the `SERVICES` array:

```typescript
export const SERVICES = [
  {
    id: 1,
    title: 'Your Service',
    description: 'Service description',
    icon: '✨', // Use any emoji
    details: [
      'Detail 1',
      'Detail 2',
      // ... more details
    ],
  },
  // ... add more services
]
```

### 2.3 Update Colors

If you want different colors, edit `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      'blush': '#your-color',
      'gold': '#your-color',
      // ... other colors
    }
  }
}
```

### 2.4 Replace Images

1. **Add images to** `public/images/`
2. **Update references in components:**
   - Navbar logo: `Navbar.tsx`
   - Hero image: `HeroSection.tsx`
   - Owner photo: `AboutSection.tsx`
   - Gallery images: `GallerySection.tsx`

### 2.5 Update Text Content

Search and replace these placeholders:
- "So Bella Hair & Beauty Lounge" → Your salon name
- Phone number → Your phone
- Email → Your email
- WhatsApp number → Your WhatsApp

---

## Step 3: Setting Up Supabase (Database)

See [SUPABASE_SETUP.md](SUPABASE_SETUP.md) for complete database setup.

### Quick Summary:
1. Create free Supabase account
2. Create new project
3. Copy URL and API key to `.env.local`
4. Run SQL setup scripts to create tables

---

## Step 4: Setting Up GitHub

### 4.1 Create GitHub Repository

1. Go to [github.com](https://github.com)
2. Click "New Repository"
3. Name it `so-bella-website`
4. Add description (optional)
5. Click "Create Repository"

### 4.2 Push Code to GitHub

```bash
# Initialize git in project (if not already)
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: So Bella website"

# Add GitHub remote
git remote add origin https://github.com/YOUR-USERNAME/so-bella-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

Now your code is backed up on GitHub!

---

## Step 5: Deploy to Vercel

See [DEPLOYMENT.md](DEPLOYMENT.md) for complete deployment guide.

### Quick Steps:
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click "New Project"
4. Select your GitHub repository
5. Add environment variables
6. Click "Deploy"

Your site is live!

---

## Step 6: Set Up Custom Domain

1. **Buy a Domain**
   - Recommended: [Namecheap](https://namecheap.com), [GoDaddy](https://godaddy.com)
   - Example: `sobella.com`

2. **Connect to Vercel**
   - Go to Vercel Project Settings
   - Click "Domains"
   - Add your domain
   - Follow DNS configuration instructions

3. **Update Environment Variables**
   - Update `.env.local` with your domain
   - Redeploy

---

## Troubleshooting

### Port Already in Use
```bash
# If port 3000 is in use, try:
npm run dev -- -p 3001
```

### Dependencies Not Installing
```bash
# Clear npm cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
```bash
# Verify TypeScript
npm run build

# Check for TypeScript errors
npx tsc --noEmit
```

### Environment Variables Not Working
- Make sure `.env.local` is in project root
- Restart dev server after changes
- Verify file is not in `.gitignore`

---

## Next Steps

1. ✅ Local setup complete
2. ✅ Customized content
3. ✅ Set up database (optional)
4. ✅ GitHub repository
5. ✅ Deployed on Vercel
6. 📞 Test all features
7. 📧 Set up email notifications
8. 🎨 Add more customizations

---

## Resources

- [Next.js Getting Started](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Supabase Docs](https://supabase.io/docs)

---

**Need help?** Check [MAINTENANCE.md](MAINTENANCE.md) for common tasks.
