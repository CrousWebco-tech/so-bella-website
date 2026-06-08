'use client'

import { motion } from 'framer-motion'
import { FaTiktok, FaFacebook, FaInstagram } from 'react-icons/fa'
import { useSiteContent, useWhatsAppUrl } from './SiteContentProvider'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const content = useSiteContent()
  const whatsappUrl = useWhatsAppUrl("Hi! I'd love to book an appointment.")

  const socialLinks = [
    { name: 'TikTok', url: content.social.tiktok, icon: FaTiktok },
    { name: 'Facebook', url: content.social.facebook, icon: FaFacebook },
    { name: 'Instagram', url: content.social.instagram, icon: FaInstagram },
  ]

  return (
    <footer className="bg-beauty-black text-beauty-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-luxury rounded-full flex items-center justify-center">
                <span className="text-beauty-black font-serif text-lg font-bold">S</span>
              </div>
              <h3 className="font-serif text-xl font-bold">So Bella</h3>
            </div>
            <p className="text-gold text-sm">Luxury Hair & Beauty Experience</p>
            <p className="text-beauty-white/60 text-sm leading-relaxed">
              Professional beauty services delivering luxury, elegance, and exceptional results.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'Home', href: '#home' },
                { label: 'Services', href: '#services' },
                { label: 'Gallery', href: '#gallery' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-beauty-white/70 hover:text-gold transition-luxury text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-lg">Information</h4>
            <ul className="space-y-2">
              {[
                { label: 'About Us', href: '#about' },
                { label: 'Aftercare', href: '/aftercare' },
                { label: 'Terms & Conditions', href: '/terms' },
                { label: 'Privacy Policy', href: '/privacy' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-beauty-white/70 hover:text-gold transition-luxury text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-lg">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, color: '#d4af7a' }}
                    whileTap={{ scale: 0.9 }}
                    className="text-beauty-white/70 hover:text-gold transition-luxury text-xl"
                    title={social.name}
                  >
                    <Icon />
                  </motion.a>
                )
              })}
            </div>
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="block text-center w-full mt-4 px-4 py-2 bg-gradient-luxury text-beauty-black font-semibold rounded-full shadow-luxury hover:shadow-luxury-lg transition-luxury text-sm"
            >
              Book Appointment
            </motion.a>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gold/20 pt-8">
          {/* Footer Bottom */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-beauty-white/60 text-sm">
              © {currentYear} So Bella Hair & Beauty Lounge. All rights reserved.
            </p>
            <p className="text-beauty-white/60 text-sm">
              Designed with ✨ for luxury beauty experiences
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
