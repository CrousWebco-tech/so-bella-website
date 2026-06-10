'use client'

import { motion } from 'framer-motion'
import { HERO_CONTENT } from '../../lib/constants'
import { useWhatsAppUrl } from './SiteContentProvider'

export default function AboutSection() {
  const whatsappUrl = useWhatsAppUrl("Hi! I'd love to book an appointment.")
  return (
    <section
      id="about"
      className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-beauty-white via-blush/10 to-beauty-white"
    >
      {/* Decorative elements */}
      <motion.div
        className="absolute top-10 left-5 w-32 h-32 bg-gold/5 rounded-full blur-2xl"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Owner portrait — her photo with an elegant gold frame */}
            <div
              className="relative rounded-2xl overflow-hidden shadow-luxury-lg h-96 md:h-[30rem] bg-gradient-to-br from-nude-dark/30 via-blush/20 to-cream bg-cover bg-center bg-no-repeat group"
              style={{ backgroundImage: `url(${HERO_CONTENT.ownerImageSrc})` }}
            >
              <div className="absolute inset-4 border border-gold/30 rounded-xl group-hover:border-gold/50 transition-luxury pointer-events-none" />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-beauty-black/55 via-beauty-black/15 to-transparent p-5">
                <p className="font-script text-3xl leading-none" style={{ color: '#f6d7e4' }}>So Bella</p>
                <p className="uppercase tracking-[0.25em] text-[0.6rem] text-beauty-white/85 mt-1">Your solo stylist · Warrington</p>
              </div>
            </div>

            {/* Decorative accent */}
            <motion.div
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/20 rounded-full blur-2xl"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 8, repeat: Infinity, delay: 0.2 }}
            />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Section Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block"
            >
              <span className="px-4 py-2 bg-blush/40 rounded-full text-sm font-semibold text-beauty-black">
                A Personal Touch
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-beauty-black leading-tight">
                A solo stylist with a warm, professional touch
              </h2>
              <p className="text-lg text-gold font-semibold">
                Every client receives my full attention from consultation to finish.
              </p>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4 text-beauty-black/75"
            >
              <p className="text-lg leading-relaxed">
                I create soft, luminous hair and beauty services designed to make every client feel beautiful, confident, and cared for.
              </p>
              <p className="text-lg leading-relaxed">
                As a solo stylist, I bring warmth, precision, and true personalization to each appointment. Your experience is calm, inviting, and crafted just for you.
              </p>
              <p className="text-lg leading-relaxed">
                Based in Warrington, I also offer mobile appointments across surrounding areas, bringing luxury beauty directly to your home.
              </p>
              <p className="text-lg leading-relaxed">
                From hair extensions and lashes to brows and beauty treatments, I help you walk out feeling radiant and ready for any occasion.
              </p>
            </motion.div>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6"
            >
              {[
                { label: 'Solo Stylist', value: 'Personal care from a single expert.' },
                { label: 'Luxury Service', value: 'Elevated beauty with soft, warm finishes.' },
                { label: 'Relaxed Experience', value: 'A calm appointment that feels like self-care.' },
              ].map((item) => (
                <div key={item.label} className="rounded-3xl bg-beauty-white/90 border border-gold/10 p-5 shadow-sm">
                  <p className="text-sm text-gold font-semibold mb-2">{item.label}</p>
                  <p className="text-sm text-beauty-black/70">{item.value}</p>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-3 bg-gradient-luxury text-beauty-black font-semibold rounded-full shadow-luxury hover:shadow-luxury-lg transition-luxury"
            >
              Book Your Appointment
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
