'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
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
      <div className="absolute inset-0 bg-gradient-petal -z-10" />

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
            {/* Section label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="section-label">Warrington · Est. with love</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="display-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5rem]"
            >
              {content.hero.headline}
              <span className="accent-italic"> {HERO_CONTENT.headlineAccent}</span>
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
                <div key={item.title} className="rounded-2xl bg-white/70 border border-rose/15 px-4 py-3.5 backdrop-blur-sm">
                  <p className="font-serif text-base text-beauty-black mb-0.5">{item.title}</p>
                  <p className="text-beauty-black/60">{item.description}</p>
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
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-dark"
              >
                {content.hero.primaryCta}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                {content.hero.secondaryCta}
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 }}
              className="flex flex-wrap gap-x-5 gap-y-2 justify-center lg:justify-start text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-beauty-black/45 pt-5"
            >
              <span>5-Star Luxury Care</span>
              <span className="text-rose/60">·</span>
              <span>Personalised Appointments</span>
              <span className="text-rose/60">·</span>
              <span>Warm, Professional Service</span>
            </motion.div>
          </motion.div>

          {/* Right Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-96 md:h-full lg:h-96 xl:h-[36rem] lg:max-h-screen lg:rotate-2"
          >
            {/* Soft pink panel behind the photo */}
            <div className="absolute -inset-3 rounded-[2rem] bg-rose-soft/60 -z-10 lg:-rotate-3" />

            {/* Floating logo chip */}
            <div className="absolute -top-5 -right-3 z-20 bg-beauty-white rounded-xl px-5 py-3 shadow-luxury -rotate-3 hidden sm:block">
              <p className="font-script text-2xl text-rose leading-none">So Bella</p>
              <p className="text-[0.55rem] uppercase tracking-[0.25em] text-beauty-black/50 text-center mt-1">Hair &amp; Beauty</p>
            </div>

            {/* Hero Image Placeholder */}
            <div
            className="relative w-full h-full rounded-2xl overflow-hidden shadow-luxury-lg group"
            style={
              content.heroImageUrl
                ? { backgroundImage: `url(${content.heroImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }
                : undefined
            }
          >
            {content.heroImageUrl ? (
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
