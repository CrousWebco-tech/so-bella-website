import { supabase } from './supabase'

export type SiteContent = {
  businessName?: string
  email?: string
  phone?: string
  address?: string
  businessHours?: Record<string, string>
  hero?: {
    tagline?: string
    headline?: string
    primaryCta?: string
    secondaryCta?: string
  }
  social?: {
    instagram?: string
    facebook?: string
    tiktok?: string
  }
}

const SINGLETON_KEY = 'site_settings'

export async function getSiteContent(): Promise<{ success: boolean; data?: SiteContent }>{
  try {
    if (!supabase) throw new Error('Supabase not configured')

    const { data, error } = await supabase
      .from('site_content')
      .select('content')
      .eq('key', SINGLETON_KEY)
      .single()

    if (error && error.code !== 'PGRST116') throw error

    return { success: true, data: data?.content }
  } catch (err) {
    console.warn('getSiteContent error', err)
    return { success: false }
  }
}

export async function upsertSiteContent(content: SiteContent){
  try {
    if (!supabase) throw new Error('Supabase not configured')

    const payload = { key: SINGLETON_KEY, content }

    const { data, error } = await supabase
      .from('site_content')
      .upsert(payload, { onConflict: 'key' })
      .select()

    if (error) throw error
    return { success: true, data }
  } catch (err) {
    console.error('upsertSiteContent error', err)
    return { success: false, error: err }
  }
}
