import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './app/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Luxury salon color palette
        'blush': '#f5e6e0',
        'blush-dark': '#e8ccc2',
        'nude': '#e8d4c4',
        'nude-dark': '#d4b5a0',
        'gold': '#d4af7a',
        'gold-light': '#e8c9a0',
        'beauty-black': '#1a1a1a',
        'beauty-white': '#faf9f7',
      },
      fontFamily: {
        // Luxury typography
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'system-ui', 'serif'],
      },
      backgroundImage: {
        'gradient-luxury': 'linear-gradient(135deg, #f5e6e0 0%, #e8d4c4 100%)',
        'gradient-dark': 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
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
