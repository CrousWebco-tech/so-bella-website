'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'
import { useWhatsAppUrl } from './SiteContentProvider'

// Navigation links configuration
const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Aftercare', href: '/aftercare' },
  { label: 'Terms & Conditions', href: '/terms' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const whatsappUrl = useWhatsAppUrl("Hi! I'd love to book an appointment.")

  const toggleMenu = () => setIsOpen(!isOpen)

  // Animation variants
  const menuVariants = {
    closed: { opacity: 0, y: -20 },
    open: { opacity: 1, y: 0 },
  }

  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 },
  }

  return (
    <nav className="sticky top-0 z-50 glass bg-beauty-white/90 backdrop-blur-lg border-b border-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-luxury rounded-full flex items-center justify-center shadow-luxury">
              <span className="text-beauty-black font-serif text-lg font-bold">S</span>
            </div>
            <div className="hidden md:block">
              <h1 className="font-serif text-lg font-bold text-beauty-black group-hover:text-gold transition-luxury">
                So Bella
              </h1>
              <p className="text-xs text-gold">Luxury Beauty</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-beauty-black hover:text-gold transition-luxury rounded-md"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button & Menu Toggle */}
          <div className="flex items-center space-x-4">
            {/* Book Now Button - Desktop */}
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:inline-block px-6 py-2 bg-gradient-luxury text-beauty-black font-semibold rounded-full shadow-luxury hover:shadow-luxury-lg transition-luxury"
            >
              Book Now
            </motion.a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 text-beauty-black hover:text-gold transition-luxury"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            className="lg:hidden pb-4 space-y-2 border-t border-gold/10"
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                variants={itemVariants}
                initial="closed"
                animate="open"
                transition={{ delay: index * 0.05 }}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-beauty-black hover:text-gold hover:bg-blush/30 transition-luxury rounded-md"
              >
                {link.label}
              </motion.a>
            ))}
            
            {/* Mobile CTA */}
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              initial="closed"
              animate="open"
              transition={{ delay: navLinks.length * 0.05 }}
              onClick={() => setIsOpen(false)}
              className="block text-center w-full mt-4 px-6 py-3 bg-gradient-luxury text-beauty-black font-semibold rounded-full shadow-luxury"
            >
              Book Now
            </motion.a>
          </motion.div>
        )}
      </div>
    </nav>
  )
}
