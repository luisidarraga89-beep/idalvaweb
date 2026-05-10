import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        grafito: { DEFAULT: '#0A0A0B', mid: '#1C1C1E', light: '#2A2A2C' },
        carbono:  '#3A3A3C',
        marfil:  { DEFAULT: '#F5F4F0', dim: '#C8C6C0' },
        volt:    { DEFAULT: '#C8F04E', dim: '#8FA030', ghost: 'rgba(200,240,78,0.08)', border: 'rgba(200,240,78,0.20)' },
        surface:  '#0F1011',
        overlay:  '#111213',
      },
      fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'] },
      fontSize: {
        'display-xl': ['clamp(2.5rem,6vw,4.5rem)',  { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '700' }],
        'display-lg': ['clamp(2rem,4vw,3.25rem)',   { lineHeight: '1.08', letterSpacing: '-0.025em', fontWeight: '700' }],
        'display-md': ['clamp(1.5rem,3vw,2.25rem)', { lineHeight: '1.1',  letterSpacing: '-0.02em',  fontWeight: '600' }],
        'body-lg':    ['1.125rem', { lineHeight: '1.7' }],
        'body-md':    ['1rem',     { lineHeight: '1.65' }],
        'body-sm':    ['0.875rem', { lineHeight: '1.6' }],
        'label':      ['0.75rem',  { lineHeight: '1', letterSpacing: '0.08em', fontWeight: '600' }],
      },
      spacing: { section: '7rem', 'section-sm': '4rem' },
      animation: {
        'marquee':    'marquee 30s linear infinite',
        'pulse-volt': 'pulse-volt 2.5s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 0.6s ease forwards',
      },
      keyframes: {
        marquee:      { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        'pulse-volt': { '0%,100%': { opacity: '1', transform: 'scale(1)' }, '50%': { opacity: '0.75', transform: 'scale(0.95)' } },
        'fade-in-up': { '0%': { opacity: '0', transform: 'translateY(24px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
      },
      borderRadius: { xl: '12px', '2xl': '16px', '3xl': '24px' },
    },
  },
  plugins: [],
}
export default config
