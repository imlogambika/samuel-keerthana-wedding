/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        royal: {
          950: '#070C1B', // Deepest Midnight Royal Blue
          900: '#0C1733', // Deep Royal Blue
          800: '#15254C', // Rich Royal Blue
          700: '#1F3466',
          600: '#2A4685',
        },
        gold: {
          50: '#FDFBF0',
          100: '#FAF3D3',
          200: '#F4E5A4',
          300: '#EBD170',
          400: '#E3BE43',
          500: '#D4AF37', // Pure Classic Gold
          600: '#B8902A', // Warm Antique Gold
          700: '#946E1D',
          800: '#755419',
          900: '#5C4014',
        },
        ivory: {
          50: '#FFFFFF',
          100: '#FDFBF7', // Soft Creamy Ivory
          200: '#FAF6ED',
          300: '#F3ECDA',
          400: '#E7DCBE',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        script: ['"Great Vibes"', '"Alex Brush"', 'cursive']
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #BF953F 0%, #FCF6BA 25%, #B38728 50%, #FBF5B7 75%, #AA771C 100%)',
        'gold-subtle': 'linear-gradient(135deg, #D4AF37 0%, #F3ECDA 50%, #B8902A 100%)',
        'royal-card': 'linear-gradient(180deg, rgba(15, 23, 42, 0.85) 0%, rgba(7, 12, 27, 0.95) 100%)',
        'royal-radial': 'radial-gradient(circle at 50% 30%, #15254C 0%, #0C1733 60%, #070C1B 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        glow: {
          '0%': { opacity: '0.4', filter: 'drop-shadow(0 0 8px rgba(212, 175, 55, 0.3))' },
          '100%': { opacity: '0.9', filter: 'drop-shadow(0 0 20px rgba(212, 175, 55, 0.7))' },
        }
      }
    },
  },
  plugins: [],
}
