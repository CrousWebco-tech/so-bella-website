import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import GallerySection from './components/GallerySection'
import ReviewsSection from './components/ReviewsSection'
import ContactSection from './components/ContactSection'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Gallery Section */}
      <GallerySection />

      {/* Reviews Section */}
      <ReviewsSection />

      {/* Contact Section */}
      <ContactSection />
    </div>
  )
}
