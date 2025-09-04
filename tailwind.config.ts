import type { Config } from "tailwindcss";

export default {
  darkMode: "media",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#ffffff',
        foreground: 'var(--ink)',
        muted: 'var(--muted-ink)',
        border: 'var(--rule)',
        card: '#ffffff',
        brand: 'var(--brand-bg)',
        link: 'var(--link)',
        accent: 'var(--accent)'
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'ui-serif', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui']
      },
      fontSize: {
        base: ['18px', { lineHeight: '1.7' }],
        'display-1': ['56px', { lineHeight: '1.05', letterSpacing: '-0.01em' }],
        'display-2': ['36px', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        'display-3': ['24px', { lineHeight: '1.2' }]
      },
      container: {
        center: true,
        padding: "1rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
