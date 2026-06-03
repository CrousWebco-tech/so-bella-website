'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

// Aftercare content configuration
const aftercareItems = [
  {
    id: 1,
    title: 'General Aftercare',
    content: `
      Hair extensions require proper care to maintain their beauty and longevity. Here are essential general aftercare guidelines:

      • Treat your extensions as you would treat your natural hair
      • Sleep on a silk pillowcase to reduce friction and tangling
      • Avoid applying products directly to the bonds or wefts
      • Be gentle when brushing - use a wide-tooth comb
      • Schedule regular maintenance appointments every 4-6 weeks
      • Avoid sleeping with wet hair
      • Don&apos;t wear tight hairstyles that pull on the roots
      • Keep the extensions away from extreme heat sources
      • Maintain regular conditioning treatments
      • Use only high-quality, sulfate-free products
    `,
  },
  {
    id: 2,
    title: 'Washing, Drying & Styling',
    content: `
      Proper washing and drying technique is crucial for extension longevity:

      WASHING:
      • Wait 48 hours after installation before first wash
      • Use lukewarm water, not hot water
      • Wash from roots to ends in a downward motion
      • Use sulfate-free shampoo and conditioner
      • Apply conditioner mainly to the ends, avoid roots
      • Rinse thoroughly with cool water
      • Gently squeeze out excess water - don't wring

      DRYING:
      • Gently blot with a microfiber towel
      • Air dry when possible
      • If using a blow dryer, use medium heat on low speed
      • Dry from roots to ends
      • Never blow dry soaking wet hair

      STYLING:
      • Use heat protectant spray before styling
      • Limit heat styling to 2-3 times per week
      • Use low to medium heat settings
      • Avoid curling iron at the very ends
      • Get regular trims every 6 weeks
      • Use volumizing products sparingly
    `,
  },
  {
    id: 3,
    title: 'Maintenance Advice',
    content: `
      Regular maintenance keeps your extensions looking fresh and beautiful:

      DAILY CARE:
      • Brush gently each morning and night
      • Keep hair moisturized with leave-in conditioner
      • Avoid chlorine and saltwater when possible
      • If exposed, rinse immediately with fresh water
      • Protect during outdoor activities
      • Use a heat protectant spray daily

      WEEKLY MAINTENANCE:
      • Deep condition treatment once per week
      • Gentle scalp massage to promote circulation
      • Check for any loose bonds or wefts
      • Use dry shampoo between washes if needed
      • Avoid wearing hair in tight styles daily

      MONTHLY ROUTINE:
      • Book maintenance appointment (tightening, adjustments)
      • Professional deep conditioning treatment
      • Check for any damage or wear
      • Trim any split ends
      • Refresh color if needed

      LONG-TERM CARE:
      • Maintain 4-6 week maintenance schedule
      • Plan for seasonal adjustments
      • Consider breaks between installations
      • Use professional products only
      • Communicate with your stylist about any concerns

      PRODUCTS TO USE:
      ✓ Sulfate-free shampoo and conditioner
      ✓ Leave-in conditioning spray
      ✓ Hair oil for shine and moisture
      ✓ Heat protectant spray
      ✓ Dry shampoo (sparingly)

      PRODUCTS TO AVOID:
      ✗ Silicone-based products
      ✗ Alcohol-based products
      ✗ Heavy oils at the roots
      ✗ Harsh chemical treatments
      ✗ Chlorine and salt water
    `,
  },
]

export default function AftercareSection() {
  const [expandedItem, setExpandedItem] = useState<number | null>(null)

  return (
    <main className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-blush/10 to-beauty-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 space-y-4"
        >
          <span className="inline-block px-4 py-2 bg-blush/40 rounded-full text-sm font-semibold text-beauty-black">
            Maintenance Guide
          </span>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-beauty-black">
            Aftercare Instructions
          </h1>
          <p className="text-lg text-beauty-black/60 max-w-2xl mx-auto">
            Proper care ensures your beautiful extensions last as long as possible. Follow these guidelines to keep your hair looking gorgeous!
          </p>
        </motion.div>

        {/* Accordion Items */}
        <div className="space-y-4">
          {aftercareItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-beauty-white rounded-xl shadow-luxury border border-gold/10 overflow-hidden"
            >
              <button
                onClick={() =>
                  setExpandedItem(expandedItem === item.id ? null : item.id)
                }
                className="w-full px-6 py-4 md:py-6 flex items-center justify-between hover:bg-blush/5 transition-colors"
              >
                <h3 className="font-semibold text-lg md:text-xl text-beauty-black text-left">
                  {item.title}
                </h3>
                <ChevronDown
                  className={`w-6 h-6 text-gold transition-transform flex-shrink-0 ${
                    expandedItem === item.id ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {expandedItem === item.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="px-6 py-6 md:py-8 border-t border-gold/10 bg-blush/5"
                >
                  <div className="prose prose-sm max-w-none text-beauty-black/70 whitespace-pre-line leading-relaxed">
                    {item.content}
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Important Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12 p-6 md:p-8 bg-gold/10 border-l-4 border-gold rounded-lg"
        >
          <h3 className="font-semibold text-lg text-beauty-black mb-2">
            ⭐ Pro Tips for Extension Longevity
          </h3>
          <ul className="space-y-2 text-beauty-black/70">
              <li>• The better you care for your extensions, the longer they&apos;ll last</li>
            <li>• Most extensions can last 3-6 months with proper maintenance</li>
            <li>• Schedule your maintenance appointment before bonds loosen</li>
            <li>• Quality products make a significant difference</li>
            <li>• Don&apos;t skip deep conditioning treatments</li>
            <li>• Contact us immediately if you notice any issues</li>
          </ul>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16 space-y-4"
        >
          <p className="text-lg text-beauty-black/60">
            Questions about aftercare? We&apos;re here to help!
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-gradient-luxury text-beauty-black font-semibold rounded-full shadow-luxury hover:shadow-luxury-lg transition-luxury"
          >
            Contact Us
          </motion.a>
        </motion.div>
      </div>
    </main>
  )
}
