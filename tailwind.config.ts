import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './app/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Warm, soft luxury salon palette
        'blush': '#fbe5ef',
        'blush-dark': '#f4c9de',
        'nude': '#f6dbe8',
        'nude-dark': '#e3aec9',
        'cream': '#fdf3f8',
        'gold': '#e79cc0',
        'gold-light': '#f3c4da',
        'beauty-black': '#322931',
        'beauty-white': '#fdfafc',
        // Editorial accents (Elegance direction)
        'rose': '#ec9dc1',
        'rose-light': '#f4c6db',
        'rose-soft': '#fbe7f1',
        'charcoal': '#251e24',
        'charcoal-light': '#39303a',
        'petal': '#fdf1f7',
      },
      fontFamily: {
        // Luxury typography
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'system-ui', 'serif'],
      },
      backgroundImage: {
        'gradient-luxury': 'linear-gradient(135deg, #fbe5ef 0%, #f6dbe8 55%, #f3c4da 100%)',
        'gradient-warm': 'linear-gradient(135deg, #fdf3f8 0%, #fbe5ef 100%)',
        'gradient-dark': 'linear-gradient(135deg, #322931 0%, #453a44 100%)',
        // Editorial soft-pink hero wash
        'gradient-petal': 'linear-gradient(160deg, #fdf1f7 0%, #fdfafc 45%, #fbe5ef 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
      spacing: {
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
