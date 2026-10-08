/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0a0f1d',
          850: '#0e1526',
          800: '#131c33',
          700: '#1e294b',
          600: '#2c3b66',
        },
        qa: {
          cyan: '#06b6d4',
          teal: '#14b8a6',
          emerald: '#10b981',
          blue: '#3b82f6',
          indigo: '#6366f1',
          amber: '#f59e0b',
          rose: '#f43f5e',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace'],
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -5px rgba(6, 182, 212, 0.3)',
        'glow-teal': '0 0 25px -5px rgba(20, 184, 166, 0.3)',
        'glow-card': '0 10px 30px -10px rgba(2, 6, 23, 0.5)',
      }
    },
  },
  plugins: [],
}
