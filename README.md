# So Bella Hair & Beauty Lounge - Website

A modern, luxury salon website built with Next.js, React, Tailwind CSS, Framer Motion, and Supabase.

## 🌟 Features

✨ **Luxury Design**
- Elegant blush, nude, and gold color palette
- Smooth animations and glassmorphism effects
- Mobile-first responsive design
- Premium typography

🚀 **Modern Tech Stack**
- Next.js 14+ for performance
- React with TypeScript
- Tailwind CSS for styling
- Framer Motion for animations
- Supabase for backend/database
- Free hosting on Vercel

📱 **Key Sections**
- Sticky responsive navbar
- Hero section with CTAs
- About the owner
- Service cards with expandable details
- Luxury masonry gallery
- Animated testimonials carousel
- Contact form with Supabase integration
- Aftercare guidelines (accordion)
- Terms & Conditions
- Privacy Policy
- Floating WhatsApp button

💼 **Business Features**
- Booking system (Supabase ready)
- Contact form submissions
- Review management
- Gallery management
- Mobile appointment support
- Multiple service offerings

## 🎯 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn
- GitHub account (free)
- Supabase account (free)
- Vercel account (free)

### Quick Setup

1. **Clone/Download the Project**
   ```bash
   # Navigate to project directory
   cd so-bella-website
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**
   ```bash
   # Copy the example file
   cp .env.example .env.local
   
   # Edit .env.local and add your values:
   # NEXT_PUBLIC_SUPABASE_URL=your_url
   # NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
   # NEXT_PUBLIC_WHATSAPP_NUMBER=1234567890
   ```

4. **Run Development Server**
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
so-bella-website/
├── app/
│   ├── components/          # Reusable React components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── GallerySection.tsx
│   │   ├── ReviewsSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── WhatsAppButton.tsx
│   ├── aftercare/          # Aftercare page
│   ├── terms/              # Terms & Conditions page
│   ├── privacy/            # Privacy Policy page
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles
├── lib/
│   ├── supabase.ts         # Supabase client & helpers
│   └── constants.ts        # Site configuration
├── public/
│   └── images/             # Image assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
└── .env.example            # Environment variable template
```

## 🎨 Customization Guide

### Easy Text Edits

1. **Site Information** - Edit `lib/constants.ts`
   - Business name, email, phone, address
   - Business hours
   - Social media links
   - Service descriptions

2. **Services** - Edit `lib/constants.ts`
   - Add, remove, or modify services
   - Update descriptions and details
   - Change pricing information

3. **Colors** - Edit `tailwind.config.ts`
   - Luxury color palette already configured
   - Easily adjust blush, nude, gold tones
   - Matches CSS variables in `globals.css`

### Image Replacement

1. **Logo/Brand Image**
   - Replace placeholder in `Navbar.tsx`
   - Update the circular logo with your logo

2. **Hero Image**
   - Replace placeholder in `HeroSection.tsx`
   - Use your luxury salon photos

3. **Owner Photo**
   - Replace placeholder in `AboutSection.tsx`
   - Use a professional headshot

4. **Gallery Images**
   - Add images to `public/images/`
   - Update `GallerySection.tsx` with image URLs

### Content Updates

1. **Service Cards** - Update in `ServicesSection.tsx`
2. **Testimonials** - Update `ReviewsSection.tsx` with real reviews
3. **Aftercare Info** - Update `app/aftercare/page.tsx`
4. **Terms & Conditions** - Update `app/terms/page.tsx`
5. **Contact Info** - Update throughout components

## 🔧 Configuration

### WhatsApp Integration
Set your WhatsApp number in `.env.local`:
```
NEXT_PUBLIC_WHATSAPP_NUMBER=1234567890
```
The button will automatically create the correct WhatsApp link.

### Supabase Setup
See [SUPABASE_SETUP.md](SUPABASE_SETUP.md) for complete database setup.

## 📦 Deployment

### Deploy to Vercel (Free)

1. **Push to GitHub**
   - Create GitHub repository
   - Push your code

2. **Connect to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select your GitHub repository
   - Add environment variables

3. **Deploy**
   - Click "Deploy"
   - Your site is live!

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions.

## 🤝 Client Handoff

This project is ready to hand over with a simple package:
- GitHub repository link
- Vercel production URL
- `.env.example` for environment connection values
- `HANDOVER.md` for client instructions

The client can update text and service content in `lib/constants.ts` and replace photos in `app/components/HeroSection.tsx`, `app/components/AboutSection.tsx`, and `app/components/GallerySection.tsx`.

Real client reviews are collected through the review form and stored in Supabase for approval before publishing.

## 📚 Additional Guides

- [SETUP_GUIDE.md](SETUP_GUIDE.md) - Detailed setup instructions
- [DEPLOYMENT.md](DEPLOYMENT.md) - Vercel deployment guide
- [SUPABASE_SETUP.md](SUPABASE_SETUP.md) - Database configuration
- [MAINTENANCE.md](MAINTENANCE.md) - How to maintain and update

## 🛠 Development

### Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

### Tech Stack Details

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Backend**: Supabase (PostgreSQL)
- **Hosting**: Vercel (free tier)
- **UI Components**: Lucide React, React Icons

## 💰 Cost

**This entire website runs on the FREE tier of:**
- ✅ Vercel (10GB bandwidth/month)
- ✅ Supabase (2GB database)
- ✅ All libraries (open source)

**No credit card required for basic features.**

## 🔐 Security

- Environment variables for sensitive data
- Secure Supabase queries
- No exposed API keys in code
- Production-ready configuration

## 📞 Support & Maintenance

### Common Tasks

- **Update Services**: Edit `lib/constants.ts`
- **Add Gallery Images**: Place in `public/images/`
- **Change Colors**: Edit `tailwind.config.ts`
- **Update Contact Info**: Edit `lib/constants.ts`

See [MAINTENANCE.md](MAINTENANCE.md) for detailed maintenance guide.

## 📄 License

This project is free to use and modify for So Bella Hair & Beauty Lounge.

## 🎓 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Supabase Docs](https://supabase.io/docs)

---

**Built with ✨ for luxury beauty experiences**

Last Updated: {year}
