'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { getSiteContent } from '../../lib/siteContent'
import { SITE_CONFIG, HERO_CONTENT, SOCIAL_LINKS } from '../../lib/constants'

// Resolved, ready-to-use site content with constants as the fallback.
export type ResolvedContent = {
  businessName: string
  email: string
  phone: string
  address: string
  whatsapp: string
  businessHours: Record<string, string>
  hero: {
    tagline: string
    headline: string
    primaryCta: string
    secondaryCta: string
  }
  social: {
    instagram: string
    facebook: string
    tiktok: string
  }
}

const ENV_WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || ''

const DEFAULT_CONTENT: ResolvedContent = {
  businessName: SITE_CONFIG.name,
  email: SITE_CONFIG.email,
  phone: SITE_CONFIG.phone,
  address: SITE_CONFIG.address,
  whatsapp: ENV_WHATSAPP || SITE_CONFIG.phone,
  businessHours: { ...SITE_CONFIG.businessHours },
  hero: {
    tagline: HERO_CONTENT.tagline,
    headline: HERO_CONTENT.headline,
    primaryCta: HERO_CONTENT.primaryCta,
    secondaryCta: HERO_CONTENT.secondaryCta,
  },
  social: {
    instagram: SOCIAL_LINKS.instagram,
    facebook: SOCIAL_LINKS.facebook,
    tiktok: SOCIAL_LINKS.tiktok,
  },
}

// Build a wa.me link from any phone-ish string (strips spaces, +, leading zeros).
export function buildWhatsAppUrl(number: string, message?: string): string {
  const normalized = (number || '').replace(/[^0-9]/g, '').replace(/^0+/, '')
  const base = `https://wa.me/${normalized}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}

const SiteContentContext = createContext<ResolvedContent>(DEFAULT_CONTENT)

export function useSiteContent() {
  return useContext(SiteContentContext)
}

// Convenience hook: the WhatsApp booking link, ready to drop into href.
export function useWhatsAppUrl(message?: string) {
  const content = useContext(SiteContentContext)
  return buildWhatsAppUrl(content.whatsapp, message)
}

export default function SiteContentProvider({ children }: { children: React.ReactNode }) {
  const [content, setContent] = useState<ResolvedContent>(DEFAULT_CONTENT)

  useEffect(() => {
    let mounted = true
    ;(async () => {
      const res = await getSiteContent()
      if (!mounted || !res.success || !res.data) return
      const d = res.data
      setContent((prev) => ({
        businessName: d.businessName || prev.businessName,
        email: d.email || prev.email,
        phone: d.phone || prev.phone,
        address: d.address || prev.address,
        whatsapp: d.whatsapp || d.phone || prev.whatsapp,
        businessHours: { ...prev.businessHours, ...(d.businessHours || {}) },
        hero: {
          tagline: d.hero?.tagline || prev.hero.tagline,
          headline: d.hero?.headline || prev.hero.headline,
          primaryCta: d.hero?.primaryCta || prev.hero.primaryCta,
          secondaryCta: d.hero?.secondaryCta || prev.hero.secondaryCta,
        },
        social: {
          instagram: d.social?.instagram || prev.social.instagram,
          facebook: d.social?.facebook || prev.social.facebook,
          tiktok: d.social?.tiktok || prev.social.tiktok,
        },
      }))
    })()
    return () => {
      mounted = false
    }
  }, [])

  return (
    <SiteContentContext.Provider value={content}>
      {children}
    </SiteContentContext.Provider>
  )
}
