'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

// Services data configuration - easy to edit
const servicesData = [
  {
    id: 1,
    title: 'Hair Extensions',
    description: 'Premium quality hair extensions with expert application. Seamless, natural-looking results that last.',
    icon: '💇‍♀️',
    details: [
      'Premium quality hair sourcing',
      'Expert application techniques',
      'Natural-looking results',
      'Long-lasting durability',
      'Custom styling included',
    ],
  },
  {
    id: 2,
    title: 'Beauty Treatments',
    description: 'Comprehensive beauty services including facials, skin treatments, and rejuvenation.',
    icon: '✨',
    details: [
      'Professional facials',
      'Skin treatments',
      'Anti-aging therapies',
      'Hydration treatments',
      'Customized skincare',
    ],
  },
  {
    id: 3,
    title: 'Lashes',
    description: 'Beautiful, natural-looking eyelash extensions that enhance your eyes.',
    icon: '👁️',
    details: [
      'Premium lash materials',
      'Natural application',
      'Volume options',
      'Customized length',
      'Professional care',
    ],
  },
  {
    id: 4,
    title: 'Brows',
    description: 'Expert eyebrow shaping, tinting, and lamination services.',
    icon: '💫',
    details: [
      'Professional shaping',
      'Tinting services',
      'Brow lamination',
      'Custom design',
      'Long-lasting results',
    ],
  },
  {
    id: 5,
    title: 'Microblading',
    description: 'Semi-permanent eyebrow tattoo for perfectly shaped, natural-looking brows.',
    icon: '🎯',
    details: [
      'Semi-permanent solution',
      'Natural hairlike strokes',
      'Custom color matching',
      'Expert technician',
      'Maintenance included',
    ],
  },
  {
    id: 6,
    title: 'Styling',
    description: 'Professional hair styling for any occasion. From casual to red-carpet glam.',
    icon: '💄',
    details: [
      'Expert styling',
      'Blow-outs',
      'Updo designs',
      'Special occasion styling',
      'Bridal packages',
    ],
  },
  {
    id: 7,
    title: 'Mobile Appointments',
    description: 'We come to you! Professional services at your location for ultimate convenience.',
    icon: '🚗',
    details: [
      'In-home service',
      'Full equipment setup',
      'Same quality service',
      'Flexible scheduling',
      'Travel fee applicable',
    ],
  },
]

export default function ServicesSection() {
  const [expandedService, setExpandedService] = useState<number | null>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section
      id="services"
      className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-beauty-white to-blush/10"
    >
      {/* Decorative shapes */}
      <motion.div
        className="absolute top-0 right-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl"
        animate={{ y: [0, 50, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <span className="inline-block px-4 py-2 bg-blush/40 rounded-full text-sm font-semibold text-beauty-black">
            Our Services
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-beauty-black">
            Luxury Services For Every Need
          </h2>
          <p className="text-lg text-beauty-black/60 max-w-2xl mx-auto">
            Comprehensive beauty and hair services designed to make you feel absolutely beautiful
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {servicesData.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="group cursor-pointer"
              onClick={() =>
                setExpandedService(
                  expandedService === service.id ? null : service.id
                )
              }
            >
              <div className="relative h-full bg-beauty-white rounded-xl overflow-hidden shadow-luxury hover:shadow-luxury-lg transition-luxury border border-gold/10 hover:border-gold/40 hover:scale-105">
                {/* Gradient accent top */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-gold/0 via-gold to-gold/0" />

                {/* Content */}
                <div className="p-6 space-y-4 h-full flex flex-col">
                  {/* Icon */}
                  <div className="text-4xl">{service.icon}</div>

                  {/* Title */}
                  <h3 className="font-semibold text-lg text-beauty-black group-hover:text-gold transition-luxury">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-beauty-black/60 text-sm flex-1 leading-relaxed">
                    {service.description}
                  </p>

                  {/* CTA and expand button */}
                  <div className="space-y-3 pt-4 border-t border-gold/10">
                    <button className="w-full px-4 py-2 bg-gradient-luxury text-beauty-black font-semibold text-sm rounded-full hover:shadow-luxury transition-luxury">
                      Book Now
                    </button>

                    {/* Expandable Details */}
                    <motion.button
                      className="w-full px-4 py-2 border border-gold/20 text-beauty-black text-sm rounded-full hover:bg-blush/20 transition-luxury flex items-center justify-between"
                      onClick={(e) => {
                        e.stopPropagation()
                        setExpandedService(
                          expandedService === service.id ? null : service.id
                        )
                      }}
                    >
                      <span>Details</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          expandedService === service.id ? 'rotate-180' : ''
                        }`}
                      />
                    </motion.button>
                  </div>
                </div>

                {/* Expanded Details */}
                {expandedService === service.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="border-t border-gold/10 px-6 py-4 bg-blush/5"
                  >
                    <ul className="space-y-2">
                      {service.details.map((detail, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="text-gold mt-1">✓</span>
                          <span className="text-sm text-beauty-black/70">
                            {detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-beauty-black/60 mb-4">
            Don't see exactly what you need? Contact us for custom packages!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border-2 border-gold text-gold font-semibold rounded-full hover:bg-gold hover:text-beauty-black transition-luxury"
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
