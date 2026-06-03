import { createClient } from '@supabase/supabase-js'

// Initialize Supabase client with environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

// Validate environment variables
if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase environment variables not set. Some features may not work.')
}

// Only create Supabase client when values look valid (must be http(s) url)
const isValidUrl = (url: string) => /^https?:\/\//i.test(url)

export const supabase =
  supabaseUrl && supabaseAnonKey && isValidUrl(supabaseUrl)
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null

// Type definitions for database tables
export type ContactSubmission = {
  id: string
  name: string
  email: string
  phone: string
  service: string
  message: string
  created_at: string
  ip_address?: string
}

export type Booking = {
  id: string
  client_name: string
  client_email: string
  client_phone: string
  service_type: string
  appointment_date: string
  appointment_time: string
  notes?: string
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled'
  created_at: string
}

export type Review = {
  id: string
  client_name: string
  rating: number
  review_text: string
  service_type: string
  verified: boolean
  created_at: string
}

export type GalleryImage = {
  id: string
  title: string
  description: string
  category: string
  image_url: string
  display_order: number
  created_at: string
}

// Helper functions for common database operations

/**
 * Submit a contact form to Supabase
 */
export async function submitContactForm(data: Omit<ContactSubmission, 'id' | 'created_at'>) {
  try {
    if (!supabase) {
      throw new Error('Supabase is not configured.')
    }

    const { data: result, error } = await supabase
      .from('contact_submissions')
      .insert([
        {
          ...data,
          created_at: new Date().toISOString(),
        },
      ])
      .select()

    if (error) throw error
    return { success: true, data: result }
  } catch (error) {
    console.error('Error submitting contact form:', error)
    return { success: false, error }
  }
}

/**
 * Create a booking in Supabase
 */
export async function createBooking(data: Omit<Booking, 'id' | 'created_at' | 'status'>) {
  try {
    if (!supabase) {
      throw new Error('Supabase is not configured.')
    }

    const { data: result, error } = await supabase
      .from('bookings')
      .insert([
        {
          ...data,
          status: 'pending',
          created_at: new Date().toISOString(),
        },
      ])
      .select()

    if (error) throw error
    return { success: true, data: result }
  } catch (error) {
    console.error('Error creating booking:', error)
    return { success: false, error }
  }
}

/**
 * Get reviews from Supabase
 */
export async function getReviews(limit = 10) {
  try {
    if (!supabase) {
      throw new Error('Supabase is not configured.')
    }

    const { data, error } = await supabase
      .from('reviews')
      .select('*')
      .eq('verified', true)
      .order('created_at', { ascending: false })
      .limit(limit)

    if (error) throw error
    return { success: true, data }
  } catch (error) {
    console.error('Error fetching reviews:', error)
    return { success: false, error, data: [] }
  }
}

/**
 * Get gallery images from Supabase
 */
export async function getGalleryImages(category?: string) {
  try {
    if (!supabase) {
      throw new Error('Supabase is not configured.')
    }

    let query = supabase.from('gallery_images').select('*')

    if (category && category !== 'All') {
      query = query.eq('category', category)
    }

    const { data, error } = await query.order('display_order', { ascending: true })

    if (error) throw error
    return { success: true, data }
  } catch (error) {
    console.error('Error fetching gallery images:', error)
    return { success: false, error, data: [] }
  }
}

/**
 * Add a review to Supabase (requires verification)
 */
export async function addReview(data: Omit<Review, 'id' | 'created_at' | 'verified'>) {
  try {
    if (!supabase) {
      throw new Error('Supabase is not configured.')
    }

    const { data: result, error } = await supabase
      .from('reviews')
      .insert([
        {
          ...data,
          verified: false, // Admin must approve
          created_at: new Date().toISOString(),
        },
      ])
      .select()

    if (error) throw error
    return { success: true, data: result }
  } catch (error) {
    console.error('Error adding review:', error)
    return { success: false, error }
  }
}

/**
 * Upload an image to Supabase storage and return public URL
 */
export async function uploadImage(file: File, folder = 'gallery') {
  try {
    if (!supabase) throw new Error('Supabase not configured')

    const filePath = `${folder}/${Date.now()}_${file.name}`

    const { data, error } = await supabase.storage
      .from('public')
      .upload(filePath, file, { cacheControl: '3600', upsert: false })

    if (error) throw error

    const { data: urlData } = supabase.storage.from('public').getPublicUrl(data.path)

    return { success: true, url: urlData.publicUrl }
  } catch (err) {
    console.error('uploadImage error', err)
    return { success: false, error: err }
  }
}
