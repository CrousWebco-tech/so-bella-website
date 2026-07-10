'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { X, ArrowRight } from 'lucide-react'
import { getGalleryImages } from '../../lib/supabase'
import { GALLERY_SETTINGS } from '../../lib/constants'
import { useWhatsAppUrl } from './SiteContentProvider'

type GalleryImageItem = {
  id: string
  category: string
  title: string
  src: string
}

const defaultGalleryImages: GalleryImageItem[] = GALLERY_SETTINGS.defaultImages
const categories = GALLERY_SETTINGS.categories

export default function GallerySection() {
  const [galleryImages, setGalleryImages] = useState<GalleryImageItem[]>(defaultGalleryImages)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [loading, setLoading] = useState(false)
  const whatsappUrl = useWhatsAppUrl("Hi! I'd love to book an appointment.")

  useEffect(() => {
    async function fetchGallery() {
      setLoading(true)
      const response = await getGalleryImages()
      if (response.success && response.data && response.data.length > 0) {
        setGalleryImages(
          response.data.map((item: any, index: number) => ({
            id: item.id || `${index}`,
            category: item.category || 'Beauty',
            title: item.title || 'Salon Image',
            src: item.image_url || '/images/gallery-1.jpg',
          }))
        )
      } else {
        setGalleryImages(defaultGalleryImages)
      }
      setLoading(false)
    }

    fetchGallery()
  }, [])

  const filteredImages =
    selectedCategory === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  }

  return (
    <section
      id="gallery"
      className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-blush/10 to-beauty-white"
    >
      <motion.div
        className="absolute bottom-0 left-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 space-y-4"
        >
          <span className="section-label">Our Work</span>
          <h2 className="display-serif text-4xl md:text-5xl lg:text-6xl">
            Gallery of <span className="accent-italic">Beauty</span>
          </h2>
          <p className="text-lg text-beauty-black/60 max-w-2xl mx-auto">
            Explore our latest transformations and feel inspired.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.12em] transition-luxury ${
                selectedCategory === category
                  ? 'bg-charcoal text-beauty-white'
                  : 'bg-white text-beauty-black/70 border border-rose/20 hover:border-rose hover:text-rose'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {loading && (
          <div className="rounded-3xl bg-beauty-white border border-gold/10 p-12 text-center shadow-luxury mb-10">
            <p className="text-beauty-black/60">Loading gallery…</p>
          </div>
        )}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="columns-1 md:columns-2 lg:columns-4 gap-6 auto-rows-max"
        >
          {filteredImages.map((image) => (
            <motion.div
              key={image.id}
              variants={itemVariants}
              className="break-inside-avoid mb-6 cursor-pointer group"
              onClick={() => setSelectedImage(image.id)}
            >
              <div className="relative overflow-hidden rounded-xl shadow-luxury hover:shadow-luxury-lg transition-luxury h-64 md:h-72">
                {/* On-brand placeholder — shows through until the real photo is added */}
                <div className="absolute inset-0 bg-gradient-to-br from-blush via-nude to-gold/40" />
                {/* Photo layer (covers the placeholder once the file exists) */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${image.src})` }}
                />
                <div className="absolute inset-0 bg-beauty-black/25" />
                <div className="absolute top-3 left-3 px-3 py-1 bg-beauty-white/90 backdrop-blur rounded-full text-xs font-semibold text-beauty-black z-20">
                  {image.category}
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-beauty-black/45 backdrop-blur-sm flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <div className="text-center space-y-2 px-4">
                    <p className="text-beauty-white font-semibold text-lg">{image.title}</p>
                    <p className="text-beauty-white/80 text-sm">Click to view</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-beauty-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full aspect-square rounded-xl shadow-luxury-lg overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url(${galleryImages.find((img) => img.id === selectedImage)?.src})` }}>
                <div className="absolute inset-0 bg-beauty-black/35" />
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-beauty-black/90 to-transparent">
                  <h3 className="text-2xl font-semibold text-beauty-white">
                    {galleryImages.find((img) => img.id === selectedImage)?.title}
                  </h3>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 p-2 bg-beauty-white rounded-full text-beauty-black hover:bg-gold transition-luxury"
              >
                <X className="w-6 h-6" />
              </motion.button>
            </motion.div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-beauty-black/60 mb-4">
            Inspired by our work? Book your transformation today!
          </p>
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-dark"
          >
            Book Your Look
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
