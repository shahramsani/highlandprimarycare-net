/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          red: {
            DEFAULT: '#E00030',
            dark: '#B8002A',
            soft: '#FEE5EA',
          },
          blue: {
            DEFAULT: '#3080C0',
            dark: '#1F5D8F',
            soft: '#E5F0F8',
          },
        },
        ink: {
          900: '#0A0F1A',
          700: '#1F2937',
          500: '#4B5563',
          300: '#9CA3AF',
          100: '#E5E7EB',
        },
        paper: {
          DEFAULT: '#FAFAF7',
          elevated: '#FFFFFF',
          tinted: '#F3F1EC',
        },
        surface: {
          dark: '#0A0F1A',
        },
      },
      fontFamily: {
        display: ['"Fraunces Variable"', 'ui-serif', 'Georgia', 'serif'],
        body: ['"Inter Tight Variable"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        display: ['clamp(2.5rem, 5vw, 4.5rem)', { lineHeight: '1.05' }],
        h1: ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.1' }],
        h2: ['clamp(1.5rem, 3vw, 2.25rem)', { lineHeight: '1.15' }],
        h3: ['clamp(1.25rem, 2.5vw, 1.5rem)', { lineHeight: '1.2' }],
        h4: ['clamp(1.125rem, 2vw, 1.25rem)', { lineHeight: '1.3' }],
        lead: ['clamp(1.125rem, 1.5vw, 1.25rem)', { lineHeight: '1.55' }],
        body: ['1rem', { lineHeight: '1.65' }],
        meta: ['0.8125rem', { lineHeight: '1.5' }],
        eyebrow: ['0.75rem', { lineHeight: '1', letterSpacing: '0.1em' }],
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        26: '6.5rem',
        30: '7.5rem',
      },
      maxWidth: {
        container: '80rem',
        prose: '65ch',
      },
      borderRadius: {
        lg: '0.75rem',
        xl: '1rem',
      },
      boxShadow: {
        'soft-md': '0 8px 24px -12px rgba(10,15,26,0.12)',
        'soft-lg': '0 12px 32px -16px rgba(10,15,26,0.18)',
      },
      transitionTimingFunction: {
        'out-quart': 'cubic-bezier(0.165, 0.84, 0.44, 1)',
      },
    },
  },
  plugins: [],
};
