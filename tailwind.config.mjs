/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue,svelte}'],
  theme: {
    extend: {
      fontFamily: {
        // Humanities-journal feel: serif for body and display, sans for UI labels.
        sans: ['ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica Neue', 'Arial', 'sans-serif'],
        serif: ['"EB Garamond"', '"Crimson Text"', 'Garamond', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
        display: ['"EB Garamond"', '"Crimson Text"', 'Garamond', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
      },
      colors: {
        // Ivory page, deep navy ink, burgundy accent.
        paper: {
          DEFAULT: '#fbf7ef',
          warm: '#f5efdf',
        },
        ink: {
          900: '#10182a',
          700: '#1f2a44',
          500: '#4b5670',
          300: '#cfd2dc',
        },
        accent: {
          DEFAULT: '#7a1e2b',
          dark: '#561420',
          soft: '#f3e3e6',
        },
        navy: {
          DEFAULT: '#1f2a44',
          dark: '#10182a',
        },
        warn: {
          DEFAULT: '#a16207',
          soft: '#fef3c7',
        },
      },
      maxWidth: {
        prose: '70ch',
      },
    },
  },
  plugins: [],
};
