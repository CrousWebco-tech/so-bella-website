-- ===========================================================================
-- So Bella — Complete Supabase setup (run once)
-- ---------------------------------------------------------------------------
-- HOW TO USE:
--   1. Open your Supabase project → SQL Editor → New query
--   2. Paste this whole file and click "Run"
--   3. It is safe to run more than once (idempotent).
--
-- This creates all tables, turns on Row Level Security with sensible rules,
-- and creates the public image storage bucket used by the gallery.
-- ===========================================================================

create extension if not exists pgcrypto;

-- ---------------------------------------------------------------------------
-- TABLES
-- ---------------------------------------------------------------------------

-- Site-wide editable content (single row, key = 'site_settings')
create table if not exists site_content (
  key text primary key,
  content jsonb,
  updated_at timestamptz default now()
);

-- Contact form submissions
create table if not exists contact_submissions (
  id uuid default gen_random_uuid() primary key,
  name text,
  email text,
  phone text,
  service text,
  message text,
  created_at timestamptz default now()
);

-- Gallery image metadata
create table if not exists gallery_images (
  id uuid default gen_random_uuid() primary key,
  title text,
  description text,
  category text,
  image_url text,
  display_order int default 0,
  created_at timestamptz default now()
);

-- Reviews
create table if not exists reviews (
  id uuid default gen_random_uuid() primary key,
  client_name text,
  rating int,
  review_text text,
  service_type text,
  verified boolean default false,
  created_at timestamptz default now()
);

-- Bookings
create table if not exists bookings (
  id uuid default gen_random_uuid() primary key,
  client_name text,
  client_email text,
  client_phone text,
  service_type text,
  appointment_date date,
  appointment_time text,
  notes text,
  status text default 'pending',
  created_at timestamptz default now()
);

-- ---------------------------------------------------------------------------
-- ROW LEVEL SECURITY
-- Public visitors (anon key) can read what's meant to be public and submit
-- forms. Only a logged-in admin (authenticated) can edit site content,
-- manage the gallery, approve reviews, or view bookings/contacts.
-- ---------------------------------------------------------------------------

alter table site_content        enable row level security;
alter table contact_submissions enable row level security;
alter table gallery_images      enable row level security;
alter table reviews             enable row level security;
alter table bookings            enable row level security;

-- site_content: everyone reads, only admins write
drop policy if exists site_content_read on site_content;
create policy site_content_read on site_content
  for select using (true);
drop policy if exists site_content_write on site_content;
create policy site_content_write on site_content
  for all to authenticated using (true) with check (true);

-- gallery_images: everyone reads, only admins add/remove
drop policy if exists gallery_read on gallery_images;
create policy gallery_read on gallery_images
  for select using (true);
drop policy if exists gallery_write on gallery_images;
create policy gallery_write on gallery_images
  for all to authenticated using (true) with check (true);

-- reviews: everyone reads + can submit; only admins update/delete (approve)
drop policy if exists reviews_read on reviews;
create policy reviews_read on reviews
  for select using (true);
drop policy if exists reviews_insert on reviews;
create policy reviews_insert on reviews
  for insert with check (true);
drop policy if exists reviews_update on reviews;
create policy reviews_update on reviews
  for update to authenticated using (true) with check (true);
drop policy if exists reviews_delete on reviews;
create policy reviews_delete on reviews
  for delete to authenticated using (true);

-- contact_submissions: anyone can submit; only admins can read them
drop policy if exists contact_insert on contact_submissions;
create policy contact_insert on contact_submissions
  for insert with check (true);
drop policy if exists contact_read on contact_submissions;
create policy contact_read on contact_submissions
  for select to authenticated using (true);

-- bookings: anyone can request; only admins can read/manage
drop policy if exists bookings_insert on bookings;
create policy bookings_insert on bookings
  for insert with check (true);
drop policy if exists bookings_manage on bookings;
create policy bookings_manage on bookings
  for all to authenticated using (true) with check (true);

-- ---------------------------------------------------------------------------
-- STORAGE: public bucket for gallery images
-- ---------------------------------------------------------------------------

insert into storage.buckets (id, name, public)
values ('public', 'public', true)
on conflict (id) do update set public = true;

-- Anyone can view images; only logged-in admins can upload/replace/delete
drop policy if exists "public read images" on storage.objects;
create policy "public read images" on storage.objects
  for select using (bucket_id = 'public');

drop policy if exists "admin upload images" on storage.objects;
create policy "admin upload images" on storage.objects
  for insert to authenticated with check (bucket_id = 'public');

drop policy if exists "admin update images" on storage.objects;
create policy "admin update images" on storage.objects
  for update to authenticated using (bucket_id = 'public');

drop policy if exists "admin delete images" on storage.objects;
create policy "admin delete images" on storage.objects
  for delete to authenticated using (bucket_id = 'public');

-- ---------------------------------------------------------------------------
-- DONE. Next: create your admin login under Authentication → Users → Add user
-- (tick "Auto Confirm User"), and put that email in NEXT_PUBLIC_ADMIN_EMAILS.
-- ---------------------------------------------------------------------------
