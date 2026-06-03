'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { SITE_CONFIG, HERO_CONTENT } from '../../../lib/constants'
import { supabase } from '../../../lib/supabase'
import { getSiteContent, upsertSiteContent, SiteContent } from '../../../lib/siteContent'

export default function AdminDashboard() {
  const router = useRouter()
  const [authorized, setAuthorized] = useState(false)
  const [activeTab, setActiveTab] = useState<'business' | 'hero' | 'services' | 'social' | 'gallery'>('business')
  const [saved, setSaved] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true

    const init = async () => {
      if (!supabase) {
        router.push('/admin')
        return
      }

      const { data: { session } } = await supabase.auth.getSession()
      if (!session) {
        router.push('/admin')
        return
      }

      if (mounted) setAuthorized(true)

      // load site content from Supabase
      const res = await getSiteContent()
      if (res.success && res.data) {
        const content = res.data
        setFormData(prev => ({
          ...prev,
          businessName: content.businessName || prev.businessName,
          email: content.email || prev.email,
          phone: content.phone || prev.phone,
          address: content.address || prev.address,
          mondayHours: content.businessHours?.monday || prev.mondayHours,
          tuesdayHours: content.businessHours?.tuesday || prev.tuesdayHours,
          wednesdayHours: content.businessHours?.wednesday || prev.wednesdayHours,
          thursdayHours: content.businessHours?.thursday || prev.thursdayHours,
          fridayHours: content.businessHours?.friday || prev.fridayHours,
          saturdayHours: content.businessHours?.saturday || prev.saturdayHours,
          sundayHours: content.businessHours?.sunday || prev.sundayHours,
          heroTagline: content.hero?.tagline || prev.heroTagline,
          heroHeadline: content.hero?.headline || prev.heroHeadline,
          heroPrimaryCta: content.hero?.primaryCta || prev.heroPrimaryCta,
          heroSecondaryCta: content.hero?.secondaryCta || prev.heroSecondaryCta,
          instagram: content.social?.instagram || prev.instagram,
          facebook: content.social?.facebook || prev.facebook,
          tiktok: content.social?.tiktok || prev.tiktok,
        }))
      }

      setLoading(false)
    }

    init()

    return () => { mounted = false }
  }, [router])

  const handleLogout = async () => {
    if (supabase) await supabase.auth.signOut()
    router.push('/admin')
  }

  const [formData, setFormData] = useState({
    businessName: SITE_CONFIG.name,
    email: SITE_CONFIG.email,
    phone: SITE_CONFIG.phone,
    address: SITE_CONFIG.address,
    mondayHours: SITE_CONFIG.businessHours.monday,
    tuesdayHours: SITE_CONFIG.businessHours.tuesday,
    wednesdayHours: SITE_CONFIG.businessHours.wednesday,
    thursdayHours: SITE_CONFIG.businessHours.thursday,
    fridayHours: SITE_CONFIG.businessHours.friday,
    saturdayHours: SITE_CONFIG.businessHours.saturday,
    sundayHours: SITE_CONFIG.businessHours.sunday,
    heroTagline: HERO_CONTENT.tagline,
    heroHeadline: HERO_CONTENT.headline,
    heroPrimaryCta: HERO_CONTENT.primaryCta,
    heroSecondaryCta: HERO_CONTENT.secondaryCta,
    instagram: 'https://www.instagram.com/so.bella.hair.beauty.lounge',
    facebook: 'https://www.facebook.com/share/1F5JiMmEbE/',
    tiktok: 'https://www.tiktok.com/@so.bella.hair.bea',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    setSaved(false)
  }

  const handleSave = async () => {
    setSaved(false)
    const payload: SiteContent = {
      businessName: formData.businessName,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      businessHours: {
        monday: formData.mondayHours,
        tuesday: formData.tuesdayHours,
        wednesday: formData.wednesdayHours,
        thursday: formData.thursdayHours,
        friday: formData.fridayHours,
        saturday: formData.saturdayHours,
        sunday: formData.sundayHours,
      },
      hero: {
        tagline: formData.heroTagline,
        headline: formData.heroHeadline,
        primaryCta: formData.heroPrimaryCta,
        secondaryCta: formData.heroSecondaryCta,
      },
      social: {
        instagram: formData.instagram,
        facebook: formData.facebook,
        tiktok: formData.tiktok,
      },
    }

    const res = await upsertSiteContent(payload)
    if (res.success) {
      setSaved(true)
      setTimeout(() => setSaved(false), 3000)
    } else {
      alert('Error saving content; check console for details')
    }
  }

  if (!authorized || loading) {
    return null
  }

  return (
    <div className="min-h-screen bg-beauty-white">
      {/* Header */}
      <div className="bg-gradient-luxury border-b border-gold/20 px-6 py-4 flex justify-between items-center">
        <h1 className="font-serif text-2xl font-bold text-beauty-black">Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="px-4 py-2 text-sm font-semibold text-beauty-black border border-gold/20 rounded-lg hover:bg-blush/20 transition-all"
        >
          Logout
        </button>
      </div>

      {/* Tabs */}
      <div className="border-b border-gold/10 px-6">
        <div className="flex gap-8">
          {[
            { key: 'business', label: '🏢 Business Info' },
            { key: 'hero', label: '✨ Hero Section' },
            { key: 'services', label: '💇 Services' },
            { key: 'gallery', label: '🖼️ Gallery' },
            { key: 'social', label: '🔗 Social Links' },
          ].map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as any)}
              className={`py-4 px-2 border-b-2 font-semibold transition-all ${
                activeTab === tab.key
                  ? 'border-gold text-beauty-black'
                  : 'border-transparent text-beauty-black/60 hover:text-beauty-black'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto p-6">
        {/* Business Info */}
        {activeTab === 'business' && (
          <div className="space-y-6">
            <h2 className="font-serif text-2xl font-bold text-beauty-black">Business Information</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-beauty-black mb-1">Business Name</label>
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gold/20 rounded-lg focus:outline-none focus:border-gold"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-beauty-black mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gold/20 rounded-lg focus:outline-none focus:border-gold"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-beauty-black mb-1">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gold/20 rounded-lg focus:outline-none focus:border-gold"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-beauty-black mb-1">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gold/20 rounded-lg focus:outline-none focus:border-gold"
                />
              </div>

              <div className="border-t border-gold/10 pt-4">
                <h3 className="font-semibold text-beauty-black mb-4">Business Hours</h3>
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day, i) => (
                  <div key={day} className="mb-3">
                    <label className="block text-sm text-beauty-black/70 mb-1">{day}</label>
                    <input
                      type="text"
                      name={`${day.toLowerCase()}Hours`}
                      value={formData[`${day.toLowerCase()}Hours` as keyof typeof formData]}
                      onChange={handleChange}
                      placeholder="e.g., 10:00 AM - 8:00 PM"
                      className="w-full px-4 py-2 border border-gold/20 rounded-lg focus:outline-none focus:border-gold text-sm"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Hero Section */}
        {activeTab === 'hero' && (
          <div className="space-y-6">
            <h2 className="font-serif text-2xl font-bold text-beauty-black">Hero Section</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-beauty-black mb-1">Tagline</label>
                <input
                  type="text"
                  name="heroTagline"
                  value={formData.heroTagline}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gold/20 rounded-lg focus:outline-none focus:border-gold"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-beauty-black mb-1">Main Headline</label>
                <textarea
                  name="heroHeadline"
                  value={formData.heroHeadline}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-2 border border-gold/20 rounded-lg focus:outline-none focus:border-gold"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-beauty-black mb-1">Primary Button Text</label>
                <input
                  type="text"
                  name="heroPrimaryCta"
                  value={formData.heroPrimaryCta}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gold/20 rounded-lg focus:outline-none focus:border-gold"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-beauty-black mb-1">Secondary Button Text</label>
                <input
                  type="text"
                  name="heroSecondaryCta"
                  value={formData.heroSecondaryCta}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gold/20 rounded-lg focus:outline-none focus:border-gold"
                />
              </div>
            </div>
          </div>
        )}

        {/* Services */}
        {activeTab === 'services' && (
          <div className="space-y-6">
            <h2 className="font-serif text-2xl font-bold text-beauty-black">Services & Pricing</h2>
            <p className="text-beauty-black/60 text-sm">Services are managed in Square Catalog. Connect Square to enable full service editing from the dashboard.</p>
            <div className="bg-blush/20 p-4 rounded-lg border border-gold/10">
              <p className="text-sm text-beauty-black/70">
                For now, services are stored in `lib/constants.ts`. We&apos;ll add Square integration for full CMS functionality.
              </p>
            </div>
          </div>
        )}

        {/* Gallery */}
        {activeTab === 'gallery' && (
          <div className="space-y-6">
            <h2 className="font-serif text-2xl font-bold text-beauty-black">Gallery</h2>

            <div className="space-y-4">
              <p className="text-beauty-black/60 text-sm">Upload images to the gallery. Images are stored in Supabase storage.</p>

              <div>
                <input
                  type="file"
                  accept="image/*"
                  id="galleryUpload"
                  onChange={async (e) => {
                    const file = e.target.files?.[0]
                    if (!file) return
                    // dynamically import helper to avoid SSR issues
                    const mod = await import('../../../lib/supabase')
                    const sup = mod.supabase
                    if (!sup) {
                      alert('Supabase not configured')
                      return
                    }

                    const { uploadImage } = await import('../../../lib/supabase')
                    const res = await uploadImage(file)
                    if (res.success) {
                      alert('Uploaded! URL: ' + res.url)
                    } else {
                      alert('Upload failed; check console')
                    }
                  }}
                  className=""
                />
              </div>
            </div>
          </div>
        )}

        {/* Social Links */}
        {activeTab === 'social' && (
          <div className="space-y-6">
            <h2 className="font-serif text-2xl font-bold text-beauty-black">Social Media Links</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-beauty-black mb-1">Instagram</label>
                <input
                  type="url"
                  name="instagram"
                  value={formData.instagram}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gold/20 rounded-lg focus:outline-none focus:border-gold text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-beauty-black mb-1">Facebook</label>
                <input
                  type="url"
                  name="facebook"
                  value={formData.facebook}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gold/20 rounded-lg focus:outline-none focus:border-gold text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-beauty-black mb-1">TikTok</label>
                <input
                  type="url"
                  name="tiktok"
                  value={formData.tiktok}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gold/20 rounded-lg focus:outline-none focus:border-gold text-sm"
                />
              </div>
            </div>
          </div>
        )}

        {/* Save Button */}
        <div className="mt-8 flex gap-4">
          <button
            onClick={handleSave}
            className="px-6 py-2 bg-gradient-luxury text-beauty-black font-semibold rounded-lg hover:shadow-luxury transition-all"
          >
            💾 Save Changes
          </button>

          {saved && (
            <div className="flex items-center gap-2 text-green-600 bg-green-50 px-4 py-2 rounded-lg">
              ✅ Saved successfully!
            </div>
          )}
        </div>

        <div className="mt-8 p-4 bg-blush/10 rounded-lg border border-gold/10">
          <p className="text-xs text-beauty-black/60">
            💡 Changes are saved to Supabase and will reflect on the live site.
          </p>
        </div>
      </div>
    </div>
  )
}
