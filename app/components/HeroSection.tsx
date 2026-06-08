'use client'

import { motion } from 'framer-motion'
import { HERO_CONTENT } from '../../lib/constants'
import { useSiteContent, useWhatsAppUrl } from './SiteContentProvider'

export default function HeroSection() {
  const content = useSiteContent()
  const whatsappUrl = useWhatsAppUrl("Hi! I'd love to book an appointment.")
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blush/40 via-beauty-white to-gold/10 -z-10" />

      {/* Decorative shapes */}
      <motion.div
        className="absolute top-20 right-10 w-72 h-72 bg-gold/20 rounded-full blur-3xl"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-96 h-96 bg-blush/30 rounded-full blur-3xl"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center py-12 lg:py-0 lg:min-h-0">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-center lg:text-left"
          >
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-block"
            >
              <span className="px-4 py-2 bg-blush/70 rounded-full text-sm font-semibold text-beauty-black">
                {content.hero.tagline}
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-beauty-black leading-tight"
            >
              {content.hero.headline}
              <span className="gradient-text"> {HERO_CONTENT.headlineAccent}</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-xl text-beauty-black/75 leading-relaxed max-w-md mx-auto lg:mx-0"
            >
              {HERO_CONTENT.subheadline}
            </motion.p>

            {/* CTA Details */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="grid gap-3 sm:grid-cols-3 text-sm text-beauty-black/70 max-w-md mx-auto lg:mx-0"
            >
              {HERO_CONTENT.highlights.map((item) => (
                <div key={item.title} className="rounded-3xl bg-beauty-white/80 border border-gold/10 px-4 py-3 shadow-sm">
                  <p className="font-semibold text-beauty-black">{item.title}</p>
                  <p>{item.description}</p>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 md:py-4 bg-gradient-luxury text-beauty-black font-semibold rounded-full shadow-luxury hover:shadow-luxury-lg transition-luxury text-lg text-center"
              >
                {content.hero.primaryCta}
              </motion.a>
              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 md:py-4 border-2 border-gold text-gold font-semibold rounded-full hover:bg-gold hover:text-beauty-black transition-luxury text-lg text-center"
              >
                {content.hero.secondaryCta}
              </motion.a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start text-sm text-beauty-black/60 pt-4"
            >
              <span>⭐ 5-Star Luxury Care</span>
              <span className="hidden sm:inline">•</span>
              <span>🎯 Personalized appointments</span>
              <span className="hidden sm:inline">•</span>
              <span>💎 Warm, professional service</span>
            </motion.div>
          </motion.div>

          {/* Right Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-96 md:h-full lg:h-96 xl:h-screen lg:max-h-screen"
          >
            {/* Hero Image Placeholder */}
            <div
            className="relative w-full h-full rounded-2xl overflow-hidden shadow-luxury-lg group"
            style={
              HERO_CONTENT.heroImageSrc
                ? { backgroundImage: `url(${HERO_CONTENT.heroImageSrc})` }
                : undefined
            }
          >
            {HERO_CONTENT.heroImageSrc ? (
              <div className="absolute inset-0 bg-beauty-black/25" />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-gradient-to-br from-nude-dark/30 via-blush/25 to-cream">
                {/* Soft layered rings for an elegant, intentional look */}
                <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full border border-gold/20" />
                <div className="absolute -bottom-20 -left-12 w-80 h-80 rounded-full border border-gold/10" />
                <div className="relative text-center px-8">
                  <p className="font-serif italic text-gold/80 text-lg mb-1">welcome to</p>
                  <p className="font-serif text-5xl md:text-6xl font-bold text-beauty-black leading-none">So Bella</p>
                  <div className="mx-auto my-4 h-px w-20 bg-gradient-to-r from-transparent via-gold to-transparent" />
                  <p className="uppercase tracking-[0.3em] text-xs text-beauty-black/50">Hair &amp; Beauty Lounge</p>
                  <p className="mt-3 text-sm text-beauty-black/45">Warrington · By appointment</p>
                </div>
              </div>
            )}

            {/* Decorative border */}
            <div className="absolute inset-0 border-2 border-white/20 rounded-2xl group-hover:border-gold/40 transition-luxury" />

            {/* Floating card overlay */}
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute bottom-8 left-8 right-8 bg-beauty-white/95 backdrop-blur rounded-xl p-5 shadow-luxury"
            >
              <p className="font-serif text-beauty-black text-center text-lg">
                One stylist. Undivided attention. Beautifully you.
              </p>
            </motion.div>
          </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center space-y-2">
          <p className="text-sm text-beauty-black/60">Scroll to discover your glow</p>
          <div className="w-6 h-10 border-2 border-gold rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-2 bg-gold rounded-full"
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
