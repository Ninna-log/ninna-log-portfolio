/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
        sans: ['Inter', '-apple-system', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50:  '#ECFEFF',
          100: '#CFFAFE',
          500: '#22D3EE',
          700: '#0891B2',
          900: '#0E7490',
          DEFAULT: '#22D3EE',
        },
        accent: {
          500: '#F0ABFC',
          700: '#D946EF',
          DEFAULT: '#F0ABFC',
        },
        neutral: {
          50:  '#F0F4F8',
          100: '#D9E2EC',
          200: '#BCCCDC',
          300: '#9FB3C8',
          400: '#829AB1',
          500: '#627D98',
          600: '#486581',
          700: '#334E68',
          800: '#243B53',
          900: '#102A43',
          950: '#020916',
        },
        bg: {
          page:    '#020916',
          surface: '#0A1628',
          elevated: '#0F2040',
        },
      },
      spacing: {
        1: '4px',
        2: '8px',
        3: '12px',
        4: '16px',
        6: '24px',
        8: '32px',
        12: '48px',
        16: '64px',
        24: '96px',
        32: '128px',
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        DEFAULT: '8px',
      },
      boxShadow: {
        sm: '0 1px 2px rgba(34, 211, 238, 0.05)',
        card: '0 4px 16px rgba(2, 9, 22, 0.6)',
        'card-hover': '0 8px 32px rgba(2, 9, 22, 0.8)',
        modal: '0 24px 48px rgba(2, 9, 22, 0.9)',
        glow: '0 0 20px rgba(34, 211, 238, 0.25)',
      },
      keyframes: {
        'typewriter': {
          from: { width: '0' },
          to: { width: '100%' },
        },
        'blink': {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        'glitch': {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        },
        'scanline': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
      animation: {
        'typewriter': 'typewriter 2s steps(40, end)',
        'blink': 'blink 1s infinite',
        'glitch': 'glitch 0.3s ease-in-out',
        'scanline': 'scanline 8s linear infinite',
      },
    },
  },
  plugins: [],
}
