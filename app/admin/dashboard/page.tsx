'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { SITE_CONFIG, HERO_CONTENT, SOCIAL_LINKS, GALLERY_SETTINGS } from '../../../lib/constants'
import { supabase } from '../../../lib/supabase'
import { isAdminEmail } from '../../../lib/admin'
import { getSiteContent, upsertSiteContent, SiteContent } from '../../../lib/siteContent'
import SoBellaLogo from '../../components/SoBellaLogo'

export default function AdminDashboard() {
  const router = useRouter()
  const [authorized, setAuthorized] = useState(false)
  const [activeTab, setActiveTab] = useState<'business' | 'hero' | 'services' | 'social' | 'gallery'>('business')
  const [saved, setSaved] = useState(false)
  const [loading, setLoading] = useState(true)
  const [galleryImages, setGalleryImages] = useState<Array<{ id: string; title: string; category: string; image_url: string }>>([])
  const [galleryCategory, setGalleryCategory] = useState('Hair Extensions')
  const [galleryTitle, setGalleryTitle] = useState('')
  const [galleryUploading, setGalleryUploading] = useState(false)

  const refreshGallery = async () => {
    const { getGalleryImages } = await import('../../../lib/supabase')
    const res = await getGalleryImages()
    if (res.success && res.data) setGalleryImages(res.data as typeof galleryImages)
  }

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

      // Enforce the admin allowlist even if a session exists.
      if (!isAdminEmail(session.user?.email)) {
        await supabase.auth.signOut()
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
          whatsapp: content.whatsapp || prev.whatsapp,
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

      // Load existing gallery images so the owner can see/delete them.
      const { getGalleryImages } = await import('../../../lib/supabase')
      const gres = await getGalleryImages()
      if (mounted && gres.success && gres.data) {
        setGalleryImages(gres.data as Array<{ id: string; title: string; category: string; image_url: string }>)
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
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || SITE_CONFIG.phone,
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
    instagram: SOCIAL_LINKS.instagram,
    facebook: SOCIAL_LINKS.facebook,
    tiktok: SOCIAL_LINKS.tiktok,
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
      whatsapp: formData.whatsapp,
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
      <div className="bg-gradient-to-r from-blush via-cream to-blush border-b border-gold/20 px-4 sm:px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <SoBellaLogo size="sm" showTagline={false} />
          <span className="hidden sm:inline text-beauty-black/30">|</span>
          <span className="hidden sm:inline font-serif text-lg text-beauty-black/70">Dashboard</span>
        </div>
        <button
          onClick={handleLogout}
          className="px-4 py-2 text-sm font-semibold text-beauty-black bg-beauty-white/70 border border-gold/30 rounded-full hover:bg-beauty-white transition-all"
        >
          Logout
        </button>
      </div>

      {/* Tabs */}
      <div className="border-b border-gold/10 px-4 sm:px-6">
        <div className="flex gap-4 sm:gap-8 overflow-x-auto no-scrollbar">
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
              className={`py-4 px-2 border-b-2 font-semibold transition-all whitespace-nowrap text-sm sm:text-base ${
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
      <div className="max-w-2xl mx-auto p-4 sm:p-6">
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
                <label className="block text-sm font-semibold text-beauty-black mb-1">WhatsApp Number (for Book Now buttons)</label>
                <input
                  type="tel"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  placeholder="+44 7503 130010"
                  className="w-full px-4 py-2 border border-gold/20 rounded-lg focus:outline-none focus:border-gold"
                />
                <p className="text-xs text-beauty-black/50 mt-1">Include country code. This is where all &quot;Book Now&quot; buttons send clients.</p>
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
            <p className="text-beauty-black/60 text-sm">Your services and prices appear in the Services section of your website.</p>
            <div className="bg-blush/20 p-4 rounded-lg border border-gold/10">
              <p className="text-sm text-beauty-black/70">
                To add, remove, or change the price of a service, just message your developer and
                it&apos;ll be updated for you. Self-service editing for this section is planned for a
                future update.
              </p>
            </div>
          </div>
        )}

        {/* Gallery */}
        {activeTab === 'gallery' && (
          <div className="space-y-6">
            <h2 className="font-serif text-2xl font-bold text-beauty-black">Gallery</h2>
            <p className="text-beauty-black/60 text-sm">Add a photo and it appears on your website straight away. Pick a category, then choose a photo from your phone or computer.</p>

            <div className="space-y-4 bg-blush/15 border border-gold/10 rounded-2xl p-4">
              <div>
                <label className="block text-sm font-semibold text-beauty-black mb-1">Category</label>
                <select
                  value={galleryCategory}
                  onChange={(e) => setGalleryCategory(e.target.value)}
                  className="w-full px-4 py-2 border border-gold/20 rounded-lg focus:outline-none focus:border-gold text-sm bg-white"
                >
                  {GALLERY_SETTINGS.categories.filter((c) => c !== 'All').map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-beauty-black mb-1">Title (optional)</label>
                <input
                  type="text"
                  value={galleryTitle}
                  onChange={(e) => setGalleryTitle(e.target.value)}
                  placeholder="e.g. Balayage blonde"
                  className="w-full px-4 py-2 border border-gold/20 rounded-lg focus:outline-none focus:border-gold text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-beauty-black mb-1">Choose photo</label>
                <input
                  type="file"
                  accept="image/*"
                  id="galleryUpload"
                  disabled={galleryUploading}
                  onChange={async (e) => {
                    const file = e.target.files?.[0]
                    if (!file) return
                    setGalleryUploading(true)
                    try {
                      const { uploadImage, addGalleryImage } = await import('../../../lib/supabase')
                      const up = await uploadImage(file)
                      if (!up.success || !up.url) {
                        alert('Upload failed; please try again.')
                        return
                      }
                      const add = await addGalleryImage({
                        title: galleryTitle || galleryCategory,
                        category: galleryCategory,
                        image_url: up.url,
                        display_order: galleryImages.length,
                      })
                      if (!add.success) {
                        alert('Photo uploaded but could not be saved to the gallery.')
                        return
                      }
                      setGalleryTitle('')
                      await refreshGallery()
                      alert('Added to your gallery!')
                    } finally {
                      setGalleryUploading(false)
                      e.target.value = ''
                    }
                  }}
                  className="text-sm"
                />
                {galleryUploading && <p className="text-sm text-gold mt-2">Uploading…</p>}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-beauty-black mb-3">Your photos ({galleryImages.length})</h3>
              {galleryImages.length === 0 ? (
                <p className="text-beauty-black/50 text-sm">No photos yet. Add your first one above.</p>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {galleryImages.map((img) => (
                    <div key={img.id} className="relative group rounded-xl overflow-hidden border border-gold/10">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={img.image_url} alt={img.title} className="w-full h-32 object-cover" />
                      <div className="absolute inset-x-0 bottom-0 bg-beauty-black/60 text-beauty-white text-xs px-2 py-1 truncate">{img.title}</div>
                      <button
                        onClick={async () => {
                          if (!confirm('Remove this photo?')) return
                          const { deleteGalleryImage } = await import('../../../lib/supabase')
                          const res = await deleteGalleryImage(img.id)
                          if (res.success) await refreshGallery()
                          else alert('Could not delete; please try again.')
                        }}
                        className="absolute top-1 right-1 bg-beauty-white/90 text-red-600 rounded-full w-6 h-6 text-sm font-bold shadow flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                        aria-label="Delete photo"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}
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
