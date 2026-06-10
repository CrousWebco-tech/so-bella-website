'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

// Terms & Conditions content — So Bella Hair & Beauty Lounge
const termsItems = [
  {
    id: 1,
    title: 'Booking & Deposits',
    content: `
      • A deposit is required to secure all appointments.
      • A non-refundable deposit will be taken at the time of booking.
      • Appointments are not confirmed until the deposit has been received.
      • The deposit will be deducted from your final balance.
    `,
  },
  {
    id: 2,
    title: 'Cancellations & Rescheduling',
    content: `
      • I kindly ask for at least 24 hours' notice for any cancellations or changes.
      • Cancellations within 24 hours will result in loss of deposit.
      • No-shows will be charged 100% of the appointment cost.
      • Repeated no-shows may result in refusal of future bookings.
    `,
  },
  {
    id: 3,
    title: 'Payments',
    content: `
      • Remaining balances must be paid on the day of your appointment.
      • Accepted payment methods: Cash & Bank Transfer.
      • Late payments may result in refusal of future bookings.
    `,
  },
  {
    id: 4,
    title: 'Mobile Appointments',
    content: `
      • Mobile services are available within 5 miles of WA2 free of charge.
      • A £10 travel fee applies outside this area.
      • A suitable workspace must be provided by the client.
    `,
  },
  {
    id: 5,
    title: 'Hair Extensions Policy',
    content: `
      • A consultation is required before booking any hair extension service.
      • Hair must be paid for in advance before ordering.
      • No refunds once hair has been ordered.
      • Prices are provided after consultation (based on method, length & thickness).
      • Maintenance appointments are the client's responsibility.
      • I am not responsible for issues caused by poor aftercare.
    `,
  },
  {
    id: 6,
    title: 'Patch Testing & Allergies',
    content: `
      • Patch tests are required for certain treatments (lashes, brows, microblading).
      • These must be completed at least 24–48 hours prior to your appointment.
      • By booking, you confirm you have disclosed all allergies and medical conditions.
      • I am not liable for reactions if a patch test is declined.
    `,
  },
]

export default function TermsPage() {
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
            Important Information
          </span>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-beauty-black">
            Terms & Conditions
          </h1>
          <p className="text-lg text-beauty-black/60 max-w-2xl mx-auto">
            Please read our policies carefully before booking your service
          </p>
        </motion.div>

        {/* Accordion Items */}
        <div className="space-y-4">
          {termsItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
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

        {/* Agreement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12 p-6 md:p-8 bg-gold/10 border border-gold/30 rounded-lg"
        >
          <h3 className="font-semibold text-lg text-beauty-black mb-4">
            📋 Agreement
          </h3>
          <p className="text-beauty-black/70 leading-relaxed mb-6">
            By booking a service with So Bella Hair & Beauty Lounge, you agree to abide by all terms and conditions outlined above. These policies are in place to ensure a safe, professional, and enjoyable experience for all our clients and staff.
          </p>
          <p className="text-beauty-black/70 leading-relaxed">
            Last updated: {new Date().getFullYear()}. We reserve the right to update these terms with 30 days notice. Continued service booking after updates constitutes acceptance of new terms.
          </p>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16 space-y-4"
        >
          <p className="text-lg text-beauty-black/60">
            Questions about our policies?
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
