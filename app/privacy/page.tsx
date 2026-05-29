'use client'

import { motion } from 'framer-motion'

export default function PrivacyPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-blush/10 to-beauty-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 space-y-4"
        >
          <span className="inline-block px-4 py-2 bg-blush/40 rounded-full text-sm font-semibold text-beauty-black">
            Your Privacy
          </span>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-beauty-black">
            Privacy Policy
          </h1>
        </motion.div>

        {/* Content */}
        <div className="space-y-8 text-beauty-black/70">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-beauty-white p-8 rounded-xl shadow-luxury border border-gold/10"
          >
            <h2 className="text-2xl font-semibold text-beauty-black mb-4">
              1. Information We Collect
            </h2>
            <p className="leading-relaxed mb-4">
              We collect information you provide directly to us when you:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Book an appointment</li>
              <li>Fill out contact forms</li>
              <li>Subscribe to our newsletter</li>
              <li>Communicate with us via email or phone</li>
              <li>Leave reviews or testimonials</li>
            </ul>
            <p className="leading-relaxed">
              This information may include your name, email address, phone number, address, appointment preferences, and any messages you send us.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="bg-beauty-white p-8 rounded-xl shadow-luxury border border-gold/10"
          >
            <h2 className="text-2xl font-semibold text-beauty-black mb-4">
              2. How We Use Your Information
            </h2>
            <p className="leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Process and manage your appointments</li>
              <li>Send appointment confirmations and reminders</li>
              <li>Respond to your inquiries</li>
              <li>Improve our services</li>
              <li>Send promotional emails (with your consent)</li>
              <li>Comply with legal obligations</li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-beauty-white p-8 rounded-xl shadow-luxury border border-gold/10"
          >
            <h2 className="text-2xl font-semibold text-beauty-black mb-4">
              3. Data Protection
            </h2>
            <p className="leading-relaxed">
              We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. Your information is stored securely and accessible only to authorized personnel who need it to provide our services.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="bg-beauty-white p-8 rounded-xl shadow-luxury border border-gold/10"
          >
            <h2 className="text-2xl font-semibold text-beauty-black mb-4">
              4. Third-Party Services
            </h2>
            <p className="leading-relaxed mb-4">
              We use third-party services for payment processing, email communications, and analytics. These service providers are contractually obligated to use your information only as necessary to provide services to us and are required to maintain the confidentiality of your information.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-beauty-white p-8 rounded-xl shadow-luxury border border-gold/10"
          >
            <h2 className="text-2xl font-semibold text-beauty-black mb-4">
              5. Your Rights
            </h2>
            <p className="leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Access your personal information</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
              <li>Request a copy of your data</li>
            </ul>
            <p className="leading-relaxed">
              To exercise any of these rights, please contact us at hello@sobella.com.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="bg-beauty-white p-8 rounded-xl shadow-luxury border border-gold/10"
          >
            <h2 className="text-2xl font-semibold text-beauty-black mb-4">
              6. Cookies
            </h2>
            <p className="leading-relaxed">
              Our website may use cookies to enhance your browsing experience. You can control cookie settings through your browser preferences. Most browsers allow you to refuse cookies or alert you when cookies are being sent.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-beauty-white p-8 rounded-xl shadow-luxury border border-gold/10"
          >
            <h2 className="text-2xl font-semibold text-beauty-black mb-4">
              7. Contact Us
            </h2>
            <p className="leading-relaxed mb-4">
              If you have questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="bg-blush/10 p-4 rounded-lg">
              <p className="font-semibold mb-2">So Bella Hair & Beauty Lounge</p>
              <p>Email: hello@sobella.com</p>
              <p>Phone: (555) 123-4567</p>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="bg-gold/10 p-8 rounded-xl border border-gold/30"
          >
            <p className="text-beauty-black/70">
              <strong>Last Updated:</strong> {new Date().getFullYear()}
            </p>
            <p className="text-beauty-black/70 mt-4">
              We reserve the right to update this Privacy Policy at any time. Changes will be effective immediately upon posting to the website.
            </p>
          </motion.section>
        </div>
      </div>
    </main>
  )
}
