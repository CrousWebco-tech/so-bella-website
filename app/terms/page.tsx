'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

// Terms & Conditions content
const termsItems = [
  {
    id: 1,
    title: 'Booking & Deposits',
    content: `
      BOOKING POLICY:
      • Appointments must be booked 24 hours in advance
      • Bookings are confirmed upon receipt of payment
      • A non-refundable deposit of 50% is required to secure your booking
      • The remaining balance is due on the day of service
      • All services are by appointment only

      DEPOSIT INFORMATION:
      • Deposits are non-refundable but can be transferred to another appointment
      • Deposits are valid for 90 days from booking date
      • If you reschedule, the deposit remains valid for the new date
      • Deposits do not transfer to other clients
      • Payment plans may be available for larger services

      BOOKING MODIFICATIONS:
      • Changes must be made at least 48 hours in advance
      • Changes after 48 hours may incur additional fees
      • No show without cancellation will forfeit your deposit
      • We will attempt to contact you 24 hours before appointment as a reminder
    `,
  },
  {
    id: 2,
    title: 'Cancellations',
    content: `
      CANCELLATION POLICY:
      • Cancellations must be made at least 48 hours in advance
      • Cancellations made with less than 48 hours notice forfeit deposit
      • Full refund available if cancelled with 48+ hours notice
      • Cancellations must be submitted in writing via email or phone

      RESCHEDULING:
      • Rescheduling is permitted with 48 hours notice
      • Your deposit transfers to the new appointment date
      • Rescheduling after 48 hours may incur a fee
      • Limited availability may affect rescheduling options

      NO-SHOW POLICY:
      • Missing an appointment without prior cancellation results in loss of deposit
      • You will be charged the full service amount if deposit only was paid
      • Two no-shows may result in account suspension
      • We may require full prepayment for future bookings
    `,
  },
  {
    id: 3,
    title: 'Payments',
    content: `
      PAYMENT METHODS:
      • Cash
      • Credit/Debit Cards (Visa, Mastercard, American Express)
      • Bank transfers
      • Digital payment apps (accepted options listed in contact section)

      PAYMENT TERMS:
      • 50% deposit due at time of booking
      • Balance due on day of appointment
      • Prices are in USD and subject to change with 30 days notice
      • Taxes and fees are included in quoted prices
      • Additional services will be charged separately

      FAILED PAYMENTS:
      • Failed payment attempts may result in cancellation
      • You will be notified immediately of payment issues
      • A retry fee may apply for failed transactions
      • Future bookings may require prepayment

      REFUND POLICY:
      • Refunds available only for cancellations made 48+ hours in advance
      • Refunds processed within 5-7 business days
      • Non-refundable deposits cannot be refunded, only transferred
      • Service refunds available only for dissatisfaction issues (see Service Guarantee)
    `,
  },
  {
    id: 4,
    title: 'Mobile Appointments',
    content: `
      MOBILE SERVICE TERMS:
      • Additional travel fee of $25-50 applies based on location
      • Minimum service time of 2 hours required
      • You must provide a clean, comfortable workspace
      • Adequate lighting and mirrors must be available
      • Power outlet within 10 feet of service area required

      MOBILE BOOKING REQUIREMENTS:
      • Mobile appointments require 72 hours advance booking
      • Appointment time is strictly observed (±15 minute window)
      • Multiple clients may be served during mobile visits (time permitting)
      • Cancellation of mobile appointments: 72 hours minimum notice

      CLIENT RESPONSIBILITIES (MOBILE):
      • Ensure workspace is ready before stylist arrival
      • Provide water and comfortable seating
      • Have all necessary materials on hand (towels, etc.)
      • Clear schedule for full appointment duration
      • Reschedule if conditions become unsuitable

      SERVICE RESTRICTIONS:
      • No overnight treatments at client location
      • Some services not available for mobile appointments
      • Mobility issues don't affect quality or price of service
      • Emergency supplies may incur additional costs
    `,
  },
  {
    id: 5,
    title: 'Hair Extensions Policy',
    content: `
      EXTENSION QUALITY:
      • Only premium quality human hair is used
      • Extensions are hand-tied using proven application methods
      • Each installation is customized to your hair type and goals
      • Quality is guaranteed for the duration of service

      INSTALLATION:
      • Consultation required before installation
      • Application takes 2-4 hours depending on volume
      • Maintenance appointments every 4-6 weeks recommended
      • Touch-ups included in service package

      EXTENSION AFTERCARE:
      • Client must follow provided aftercare instructions
      • Extensions require daily care and maintenance
      • Products must be sulfate-free (provided list)
      • Non-compliance with care may void service guarantee

      EXTENSION DURATION:
      • Extensions typically last 3-6 months with proper care
      • Duration depends on your natural hair growth and care
      • Regular maintenance appointments extend lifespan
      • Extensions cannot be reused after removal

      REMOVAL & REAPPLICATION:
      • Professional removal required (included in new appointment)
      • Extensions cannot be removed at home
      • Hair must rest 2-4 weeks before reapplication
      • New extensions required for each installation
    `,
  },
  {
    id: 6,
    title: 'Patch Testing & Allergies',
    content: `
      PATCH TEST REQUIREMENT:
      • All new clients must undergo patch testing
      • Patch test must be completed 48 hours before service
      • Testing fee: included in first service package
      • Results determine which products can be used

      ALLERGY MANAGEMENT:
      • Disclose all known allergies before booking
      • Bring documentation of allergies if available
      • We use hypoallergenic alternatives when possible
      • Some services may not be suitable for sensitive clients

      REACTION PROCEDURES:
      • If allergic reaction occurs, service will be stopped immediately
      • Affected area will be treated with calming solutions
      • Medical attention may be recommended
      • You will not be charged for incomplete service
      • Liability is limited to service refund only

      SKIN CONDITIONS:
      • Disclose any skin conditions or sensitivities
      • Certain conditions may require medical clearance
      • Service may be postponed if contraindicated
      • Eczema, psoriasis, or open wounds may prevent service
    `,
  },
  {
    id: 7,
    title: 'Service Guarantee',
    content: `
      SATISFACTION GUARANTEE:
      • We stand behind the quality of all our services
      • If unsatisfied, notify us within 48 hours of service
      • We will make corrections at no additional cost
      • One correction period included per service

      CORRECTION TERMS:
      • Corrections must be requested within 48 hours
      • Original service date required for correction booking
      • Corrections scheduled within 2 weeks of original service
      • Multiple corrections may incur additional fees

      WHAT'S COVERED:
      ✓ Color correction (within 2 shades)
      ✓ Extension adjustments
      ✓ Lash/brow corrections
      ✓ Styling adjustments
      ✓ Length/style modifications

      WHAT'S NOT COVERED:
      ✗ Client-requested changes beyond original agreement
      ✗ Damage from improper aftercare
      ✗ Damage from external factors
      ✗ Changes of mind regarding style
      ✗ Services exceeding original scope

      GUARANTEE LIMITATIONS:
      • Guarantee void if aftercare instructions not followed
      • Damage from product misuse not covered
      • Extensions damaged by heat/chemicals not covered
      • Color changes due to external factors not covered
    `,
  },
  {
    id: 8,
    title: 'Refund Policy',
    content: `
      REFUND ELIGIBILITY:
      • Refunds available for legitimate service failures only
      • Must request refund within 48 hours of service
      • Refund requires written documentation of issue
      • Service guarantee must be invoked first (correction attempt)

      REFUND PROCESSING:
      • Refunds processed within 5-7 business days
      • Original payment method will be credited
      • Partial refunds may apply for partial service completion
      • Refund amount = service cost only (travel fees not refunded)

      NON-REFUNDABLE ITEMS:
      ✗ Deposits (can be transferred)
      ✗ Travel fees
      ✗ Consultation fees
      ✗ Supplies/products sold separately
      ✗ Services requested and completed

      REFUND EXCEPTIONS:
      • Medical emergencies may warrant full refund
      • Facility hazards may warrant full refund
      • Stylist illness after 24 hours notice - full refund
      • Service cancellation by salon - full refund

      DISPUTE RESOLUTION:
      • Disputes will be resolved within 14 days
      • Documentation required for all disputes
      • Decision is final pending review
      • Mediation available for unresolved disputes
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
