import type { Metadata } from 'next'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export const metadata: Metadata = {
  title: 'So Bella Hair & Beauty Lounge - Luxury Beauty Salon',
  description: 'Experience luxury hair extensions, beauty treatments, and professional styling at So Bella Hair & Beauty Lounge. Book your appointment today.',
  keywords: 'hair extensions, beauty salon, lashes, brows, microblading, luxury beauty, hair treatment',
  openGraph: {
    title: 'So Bella Hair & Beauty Lounge',
    description: 'Luxury Hair & Beauty Experience - Professional Beauty Services',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'So Bella Hair & Beauty Lounge',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'So Bella Hair & Beauty Lounge',
    description: 'Luxury Hair & Beauty Experience',
    images: ['/images/og-image.jpg'],
  },
  viewport: 'width=device-width, initial-scale=1.0, maximum-scale=5.0',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* SEO Meta Tags */}
        <meta charSet="utf-8" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="So Bella Hair & Beauty Lounge" />
        
        {/* Google Verification (add your verification code in .env) */}
        {process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION && (
          <meta 
            name="google-site-verification" 
            content={process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION} 
          />
        )}
      </head>
      <body className="bg-beauty-white text-beauty-black">
        {/* Navigation */}
        <Navbar />
        
        {/* Main Content */}
        <main className="relative overflow-hidden">
          {children}
        </main>

        {/* Floating WhatsApp Button */}
        <WhatsAppButton />

        {/* Footer */}
        <Footer />
      </body>
    </html>
  )
}
