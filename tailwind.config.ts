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
        'blush': '#f7e6dd',
        'blush-dark': '#eecdbf',
        'nude': '#ecdbca',
        'nude-dark': '#dab79d',
        'cream': '#fbf3ec',
        'gold': '#cba06a',
        'gold-light': '#e7c79b',
        'beauty-black': '#2a221e',
        'beauty-white': '#fbf6f1',
        // Editorial accents (Elegance direction)
        'rose': '#cf8a98',
        'rose-light': '#e8b9c1',
        'rose-soft': '#f4dde1',
        'charcoal': '#1c1714',
        'charcoal-light': '#2e2823',
        'petal': '#fdf1ef',
      },
      fontFamily: {
        // Luxury typography
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'system-ui', 'serif'],
      },
      backgroundImage: {
        'gradient-luxury': 'linear-gradient(135deg, #f7e6dd 0%, #ecdbca 55%, #e7c79b 100%)',
        'gradient-warm': 'linear-gradient(135deg, #fbf3ec 0%, #f7e6dd 100%)',
        'gradient-dark': 'linear-gradient(135deg, #2a221e 0%, #3a322c 100%)',
        // Editorial soft-pink hero wash
        'gradient-petal': 'linear-gradient(160deg, #fdf1ef 0%, #fbf6f1 45%, #f7e6dd 100%)',
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
