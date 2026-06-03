-- Supabase initial schema for So Bella site
-- Run this in Supabase SQL editor or via psql with a service role key

create extension if not exists pgcrypto;

-- Site singleton to store site-wide editable JSON
create table if not exists site_content (
  key text primary key,
  content jsonb,
  updated_at timestamptz default now()
);

-- Contact submissions (contact form)
create table if not exists contact_submissions (
  id uuid default gen_random_uuid() primary key,
  name text,
  email text,
  phone text,
  service text,
  message text,
  created_at timestamptz default now()
);

-- Gallery metadata
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
