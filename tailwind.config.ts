import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#0a0a0b',
          800: '#111114',
          700: '#1b1b21',
          600: '#24242c',
          500: '#30303a'
        },
        accent: {
          500: '#b11226',
          400: '#c22a3c',
          300: '#d24856'
        },
        highlight: {
          400: '#c06a3e'
        }
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        sans: ['"Inter"', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        glow: '0 0 24px rgba(177, 18, 38, 0.25)'
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)'
      }
    }
  },
  plugins: []
} satisfies Config;
