import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Fő színpaletta - bizalom és prémium
        primary: {
          50: '#E8F4FC',
          100: '#C5E4F7',
          200: '#9DD0F1',
          300: '#74BCEB',
          400: '#4BA8E5',
          500: '#2293DE',
          600: '#1A75B5',
          700: '#13578C',
          800: '#0D3A63',
          900: '#0A1628', // Fő mély kék
        },
        accent: {
          50: '#FDF8E8',
          100: '#FAEEC5',
          200: '#F5DD8A',
          300: '#EFCC4F',
          400: '#E4BC2A',
          500: '#D4AF37', // Arany
          600: '#B8942E',
          700: '#8F7323',
          800: '#665219',
          900: '#3D310F',
        },
        dark: {
          50: '#E6E8EB',
          100: '#C1C6CD',
          200: '#98A1AC',
          300: '#6F7C8B',
          400: '#4F5F73',
          500: '#2F425B',
          600: '#283A52',
          700: '#1F3047',
          800: '#17263C',
          900: '#0D1829',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'scroll-bounce': 'scrollBounce 2s ease-in-out infinite',
        'fade-in-delayed': 'fadeIn 1s ease-out 1.5s forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(212, 175, 55, 0.3)' },
          '100%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.6)' },
        },
        scrollBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(10px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern': 'linear-gradient(135deg, #0A1628 0%, #1F3047 50%, #0D1829 100%)',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
        'glass-lg': '0 25px 50px -12px rgba(10, 22, 40, 0.25)',
        'gold': '0 4px 20px rgba(212, 175, 55, 0.3)',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
};

export default config;
