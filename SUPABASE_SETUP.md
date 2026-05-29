# Supabase Setup Guide

Complete guide to set up your database on Supabase (FREE tier).

## What is Supabase?

Supabase is an open-source Firebase alternative with:
- ✅ PostgreSQL database
- ✅ Free tier (500 MB database)
- ✅ Real-time updates
- ✅ Built-in authentication
- ✅ Easy integration with Next.js

---

## Step 1: Create Supabase Account

1. Visit [supabase.com](https://supabase.com)
2. Click "Start your project"
3. Sign up with GitHub (easiest):
   - Click "Continue with GitHub"
   - Authorize Supabase
4. Complete your profile

---

## Step 2: Create New Project

1. Go to [supabase.com/dashboard](https://supabase.com/dashboard)
2. Click "New Project"
3. Enter project details:
   - **Name**: `so-bella-salon`
   - **Database Password**: Create strong password (save it!)
   - **Region**: Choose closest to your location
   - **Pricing Plan**: Select "Free" tier

4. Click "Create New Project"
5. Wait 2-3 minutes for database to initialize

---

## Step 3: Get Connection Details

Once project is created:

1. Go to **Settings** → **API**
2. Copy these values:
   - **Project URL** (labeled "URL")
   - **Anon Key** (labeled "anon public")

3. Add to `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=paste_your_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=paste_your_key_here
```

4. Also add to Vercel (see DEPLOYMENT.md)

---

## Step 4: Create Database Tables

In Supabase, go to **SQL Editor** (left sidebar).

Run each SQL script below. Copy each one and paste into the editor, then click "Run".

### Table 1: Contact Submissions

```sql
-- Contact form submissions
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  service TEXT,
  message TEXT NOT NULL,
  ip_address TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()),
  read BOOLEAN DEFAULT FALSE
);

-- Create index for faster queries
CREATE INDEX idx_contact_email ON contact_submissions(email);
CREATE INDEX idx_contact_created ON contact_submissions(created_at);

-- Enable RLS (Row Level Security) - optional but recommended
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert, only authenticated users to read
CREATE POLICY "Allow insertions" ON contact_submissions
  FOR INSERT WITH CHECK (TRUE);

CREATE POLICY "Allow authenticated users to view" ON contact_submissions
  FOR SELECT USING (auth.role() = 'authenticated');
```

### Table 2: Bookings

```sql
-- Booking requests
CREATE TABLE IF NOT EXISTS bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_name TEXT NOT NULL,
  client_email TEXT NOT NULL,
  client_phone TEXT NOT NULL,
  service_type TEXT NOT NULL,
  appointment_date DATE NOT NULL,
  appointment_time TIME NOT NULL,
  notes TEXT,
  status TEXT DEFAULT 'pending',
  deposit_paid BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW())
);

-- Create indexes
CREATE INDEX idx_booking_email ON bookings(client_email);
CREATE INDEX idx_booking_date ON bookings(appointment_date);
CREATE INDEX idx_booking_status ON bookings(status);

-- Enable RLS
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow insertions" ON bookings
  FOR INSERT WITH CHECK (TRUE);

CREATE POLICY "Allow clients to view own bookings" ON bookings
  FOR SELECT USING (auth.email() = client_email OR auth.role() = 'authenticated');
```

### Table 3: Reviews

```sql
-- Client reviews and testimonials
CREATE TABLE IF NOT EXISTS reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_name TEXT NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  review_text TEXT NOT NULL,
  service_type TEXT,
  verified BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW())
);

-- Create index
CREATE INDEX idx_review_verified ON reviews(verified);

-- Enable RLS
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow insertions" ON reviews
  FOR INSERT WITH CHECK (TRUE);

CREATE POLICY "Allow viewing verified reviews" ON reviews
  FOR SELECT USING (verified = TRUE);
```

### Table 4: Gallery Images

```sql
-- Gallery image management
CREATE TABLE IF NOT EXISTS gallery_images (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  category TEXT NOT NULL,
  image_url TEXT NOT NULL,
  display_order INTEGER DEFAULT 0,
  active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW())
);

-- Create index
CREATE INDEX idx_gallery_category ON gallery_images(category);
CREATE INDEX idx_gallery_display_order ON gallery_images(display_order);

-- Enable RLS
ALTER TABLE gallery_images ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public to view active images" ON gallery_images
  FOR SELECT USING (active = TRUE);

CREATE POLICY "Allow authenticated to manage" ON gallery_images
  FOR ALL USING (auth.role() = 'authenticated');
```

---

## Step 5: Verify Tables

1. Go to **Table Editor** in Supabase
2. You should see 4 tables:
   - `contact_submissions`
   - `bookings`
   - `reviews`
   - `gallery_images`

3. Click on each to verify structure

---

## Step 6: Add Sample Data (Optional)

In **SQL Editor**, run:

```sql
-- Sample reviews
INSERT INTO reviews (client_name, rating, review_text, service_type, verified)
VALUES 
  ('Sarah Johnson', 5, 'Amazing extensions! Look so natural.', 'Hair Extensions', TRUE),
  ('Emily Davis', 5, 'Perfect bridal styling!', 'Styling', TRUE),
  ('Jessica Martinez', 5, 'Beautiful lashes!', 'Lashes', TRUE);

-- Sample gallery images (URLs are placeholders)
INSERT INTO gallery_images (title, description, category, image_url, display_order)
VALUES 
  ('Luxurious Extensions', 'Beautiful hair extension work', 'Hair Extensions', '/images/gallery-1.jpg', 1),
  ('Red Carpet Glam', 'Professional event styling', 'Styling', '/images/gallery-2.jpg', 2),
  ('Volume Lashes', 'Premium lash extensions', 'Lashes', '/images/gallery-3.jpg', 3),
  ('Perfect Brows', 'Expert brow design', 'Brows', '/images/gallery-4.jpg', 4);
```

---

## Step 7: Manage Users (Admin Access)

To give yourself admin access to manage data:

1. Go to **Authentication** tab
2. Click **Invite** to add admin user
3. Enter your email
4. Check email for invitation link
5. Create password

---

## Using the Database

### From Your Website

Data flows automatically through the Supabase client:

```typescript
// From lib/supabase.ts - already configured!

// Submit contact form
submitContactForm({ name, email, message, ... })

// Create booking
createBooking({ client_name, appointment_date, ... })

// Get reviews
getReviews()

// Get gallery
getGalleryImages(category)
```

### Manage Data in Supabase

1. Go to **Table Editor**
2. Click on table (e.g., `reviews`)
3. Add/edit/delete rows
4. Data updates on website instantly

---

## Admin Functions

### View Submissions

1. Go to **Table Editor**
2. Click `contact_submissions`
3. See all form submissions
4. Mark as read

### Manage Bookings

1. Go to `bookings` table
2. View booking requests
3. Update status:
   - `pending` → new requests
   - `confirmed` → approved
   - `completed` → finished
   - `cancelled` → cancelled

### Approve Reviews

1. Go to `reviews` table
2. Filter by `verified = FALSE`
3. Review content
4. Update `verified` to TRUE to show on site

### Update Gallery

1. Go to `gallery_images` table
2. Add new images with correct category
3. Set `display_order` for sorting
4. Set `active = TRUE` to show

---

## Free Tier Limits

✅ **Included Free:**
- 500 MB database storage
- 2 GB bandwidth/month
- Unlimited API requests
- Real-time features
- Row Level Security

✅ **For Most Salons:**
- Contact form: ~100 submissions = <1 MB
- Reviews: ~200 reviews = <1 MB
- Bookings: ~500 bookings = <2 MB
- Gallery: Link to external images = <1 KB

**Total:** ~5-10 MB (well within free tier)

---

## Upgrade (When You Need)

If you exceed free tier:

**Pro Plan ($25/month includes):**
- 8 GB database storage
- 50 GB bandwidth/month
- Priority support

Unlikely needed for a salon website!

---

## Backup Your Data

### Weekly Backups (Automatic)

Supabase automatically backs up your data.

### Manual Export

1. Go to **SQL Editor**
2. Create dump of tables:
```sql
-- Export specific table to CSV
SELECT * FROM contact_submissions;
```

3. Download results as CSV

---

## Troubleshooting

### Tables Not Appearing

1. Refresh page (F5)
2. Check for errors in SQL Editor
3. Verify syntax of SQL scripts
4. Check RLS policies

### Can't Submit Forms

1. Verify API key is correct in `.env.local`
2. Check RLS policies allow inserts
3. Verify table schema matches code
4. Check browser console for errors

### Performance Issues

1. Add indexes to frequently queried columns
2. Archive old data
3. Optimize queries
4. Check Supabase metrics

---

## Security Best Practices

✅ **Do:**
- Keep API key private (never commit to GitHub)
- Use RLS policies (already set up)
- Validate input on server
- Use authenticated functions for admin

❌ **Don't:**
- Expose admin API key in frontend code
- Trust client-side validation
- Store sensitive data unencrypted
- Allow public to delete/edit data

---

## Advanced: Email Notifications

For sending emails when forms submitted:

1. Use Supabase Functions (like AWS Lambda)
2. Trigger on new `contact_submissions` insert
3. Send email via SendGrid, Mailgun, etc.

See [Supabase Functions Docs](https://supabase.com/docs/guides/functions)

---

## Support

- **Supabase Docs**: [supabase.com/docs](https://supabase.com/docs)
- **Community**: [discord.gg/supabase](https://discord.gg/supabase)
- **Status**: [status.supabase.com](https://status.supabase.com)

---

## Quick Reference

### Connection String
```
postgresql://postgres:[PASSWORD]@[PROJECT-ID].supabase.co:5432/postgres
```

### Environment Variables
```env
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJxx...
```

### Tables
- `contact_submissions` - Form submissions
- `bookings` - Appointment requests
- `reviews` - Client testimonials
- `gallery_images` - Gallery photos

---

**Database is ready!** Next: Deploy to Vercel (see [DEPLOYMENT.md](DEPLOYMENT.md))
