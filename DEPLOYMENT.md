# Deployment Guide - Vercel

Deploy your So Bella website to Vercel in 5 minutes using the free tier.

## Why Vercel?

✅ **Free Hosting**
- 10GB bandwidth/month (plenty for most sites)
- Unlimited deployments
- Free SSL certificate
- Custom domains

✅ **Optimized for Next.js**
- Automatic optimization
- Fast builds
- Zero-config deployment

✅ **Easy Updates**
- Auto-deploy on GitHub push
- Easy rollbacks
- Preview deployments

---

## Prerequisites

✅ GitHub account (free at github.com)
✅ Code pushed to GitHub (see SETUP_GUIDE.md)
✅ Vercel account (free at vercel.com)

---

## Step-by-Step Deployment

### Step 1: Create Vercel Account

1. Visit [vercel.com](https://vercel.com)
2. Click "Sign Up"
3. Choose "Sign up with GitHub"
4. Authorize Vercel to access GitHub
5. Complete your profile

### Step 2: Create New Project

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Select your `so-bella-website` repository
4. Click "Import"

### Step 3: Configure Project

**Project Settings:**
- Framework: Should auto-detect as "Next.js" ✓
- Root Directory: Leave as `.` (root)
- Build Command: Leave default
- Output Directory: Leave default

Click "Next" to continue.

### Step 4: Add Environment Variables

This is crucial! Add your configuration:

**Click "Environment Variables"** and add:

```
NEXT_PUBLIC_SUPABASE_URL = your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY = your_supabase_anon_key
NEXT_PUBLIC_WHATSAPP_NUMBER = 1234567890
NEXT_PUBLIC_SITE_NAME = So Bella Hair & Beauty Lounge
NEXT_PUBLIC_SITE_URL = https://yourdeployment.vercel.app
NEXT_PUBLIC_SUPPORT_EMAIL = hello@sobella.com
```

**Where to find these values:**
- Supabase URL & Key: From your Supabase project settings
- WhatsApp Number: Your business WhatsApp (country code + number, no spaces)
- Site URL: Will be shown after first deploy, or your custom domain

Click "Next" to continue.

### GitHub Actions / Provisioning Secrets

This project includes an automated provisioning workflow for Supabase and Vercel.

In GitHub, go to your repository:
- Settings → Secrets and variables → Actions → New repository secret

Add these secrets exactly as shown:

```
SUPABASE_URL
SUPABASE_SERVICE_ROLE_KEY
DATABASE_URL
VERCEL_TOKEN
```

- `SUPABASE_URL`: Your Supabase project URL
- `SUPABASE_SERVICE_ROLE_KEY`: Supabase service role key
- `DATABASE_URL`: Postgres connection URL for your Supabase database
- `VERCEL_TOKEN`: Vercel personal token with deploy permissions

These secrets are used only by the GitHub workflow and are separate from the Vercel public environment variables.

### Step 5: Deploy

Click **"Deploy"** and wait 1-2 minutes.

**Success!** Your site is now live at:
```
https://so-bella-website.vercel.app
```

---

## Custom Domain Setup

### Option 1: Use Vercel DNS (Easiest)

1. Go to your project settings
2. Click "Domains"
3. Enter your domain (e.g., `sobella.com`)
4. Click "Add"
5. Follow Vercel's DNS instructions for your domain registrar

### Option 2: Use Domain Registrar DNS

If using Namecheap, GoDaddy, etc.:

1. Get your Vercel deployment URL
2. Go to your domain registrar
3. Add `CNAME` record pointing to Vercel
4. Follow your registrar's instructions

---

## Auto-Deploy Setup

Your site automatically deploys when you:

1. Push code to GitHub main branch
2. The build runs automatically
3. Site updates in minutes

**To Deploy Updates:**

```bash
# Make changes locally
git add .
git commit -m "Update: [description of changes]"
git push origin main

# Vercel automatically deploys!
```

---

## Environment Variables Reference

Keep these updated in Vercel:

### Supabase (Database)
```
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJxx...
```

### WhatsApp
```
NEXT_PUBLIC_WHATSAPP_NUMBER=14155552671
```

### Site Config
```
NEXT_PUBLIC_SITE_NAME=So Bella Hair & Beauty Lounge
NEXT_PUBLIC_SITE_URL=https://sobella.com
NEXT_PUBLIC_SUPPORT_EMAIL=hello@sobella.com
```

### Update in Vercel

1. Go to Project Settings
2. Click "Environment Variables"
3. Edit existing variables
4. Redeploy to apply changes

---

## Monitoring & Logs

### View Deployment Status

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Select your project
3. Click "Deployments" tab
4. See all deployments and status

### View Logs

**Build Logs:**
- Click on a deployment
- Scroll through build output
- Check for any errors

**Runtime Logs:**
- Click "Functions" or "Analytics"
- View real-time logs

---

## Rollback to Previous Version

If something goes wrong:

1. Go to "Deployments" tab
2. Find previous working deployment
3. Click three dots (...)
4. Select "Promote to Production"

Your site instantly rolls back!

---

## Performance Optimization

Vercel automatically optimizes:
- ✅ Image optimization
- ✅ Code splitting
- ✅ CDN distribution
- ✅ Compression
- ✅ Caching

No configuration needed!

---

## SSL Certificate

✅ **Automatic HTTPS**
- Free SSL certificate
- Auto-renewed
- All traffic encrypted

No action required!

---

## Domain Management

### Update DNS Records

If Vercel's auto DNS isn't working:

1. In Vercel, get the nameservers
2. Go to your domain registrar
3. Update nameservers to Vercel's
4. Wait 24-48 hours for propagation

### Check DNS Status

```bash
# Check if domain points to Vercel
nslookup sobella.com
```

---

## Troubleshooting

### Build Fails

1. Check build logs in Vercel
2. Look for error messages
3. Fix issues locally
4. Push to GitHub to redeploy

### Environment Variables Not Working

1. Verify variables are added in Vercel
2. Restart deployment (click "Redeploy")
3. Use correct variable names (case-sensitive)
4. Variables starting with `NEXT_PUBLIC_` are public

### Site Shows 404

1. Make sure main deployment succeeded
2. Clear browser cache
3. Verify domain DNS is configured
4. Wait for DNS propagation (up to 48 hours)

### Site is Slow

1. Check Vercel analytics
2. Optimize images
3. Check database queries
4. Contact Vercel support if needed

---

## Monitoring & Analytics

### View Analytics

1. Go to Vercel Dashboard
2. Select your project
3. Click "Analytics" tab
4. View:
   - Page views
   - Response times
   - Error rates
   - Web vitals

### Set Up Alerts

1. Go to Project Settings
2. Click "Monitoring"
3. Configure alerts for errors or slowness

---

## Cost & Limits

### Free Tier Includes

- ✅ 10GB bandwidth/month
- ✅ Unlimited deployments
- ✅ Unlimited team members
- ✅ Free SSL/HTTPS
- ✅ Global CDN
- ✅ Auto scaling

### Pro Tier (Optional, $20/month)

- 100GB bandwidth
- Advanced analytics
- Real-time logs
- Priority support

**Most sites fit comfortably in the free tier!**

---

## Update Checklist

Before deployment, verify:

- [ ] All code committed to GitHub
- [ ] Environment variables set in Vercel
- [ ] Content updated (`lib/constants.ts`)
- [ ] No sensitive data in code
- [ ] Tested locally (`npm run dev`)
- [ ] Built locally (`npm run build`)

---

## Support

### Getting Help

- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Vercel Support**: [vercel.com/support](https://vercel.com/support)
- **Status Page**: [status.vercel.com](https://status.vercel.com)

---

## Common Deployment Workflow

```bash
# 1. Make changes locally
# Edit files, test with: npm run dev

# 2. Commit changes
git add .
git commit -m "Update: description"

# 3. Push to GitHub
git push origin main

# 4. Vercel automatically deploys!
# Check status at: vercel.com/dashboard

# 5. Visit your live site
# https://yourdomain.com
```

---

**Your site is now live and automatically updating!** 🚀

Next: Set up Supabase database (see [SUPABASE_SETUP.md](SUPABASE_SETUP.md))
