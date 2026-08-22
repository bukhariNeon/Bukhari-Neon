/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#050505',
          900: '#0a0a0b',
          850: '#0f0f11',
          800: '#141417',
          700: '#1c1c20',
          600: '#26262b',
          500: '#34343a',
          400: '#4a4a52',
        },
        neon: {
          blue: '#00e5ff',
          blueDeep: '#0090c4',
          green: '#39ff14',
          greenDeep: '#1faa0e',
          cyan: '#22d3ee',
        },
      },
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        display: ['Sora', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        neonBlue: '0 0 5px #00e5ff, 0 0 20px rgba(0,229,255,0.6), 0 0 40px rgba(0,229,255,0.35)',
        neonGreen: '0 0 5px #39ff14, 0 0 20px rgba(57,255,20,0.55), 0 0 40px rgba(57,255,20,0.3)',
        neonSoft: '0 0 30px rgba(0,229,255,0.25)',
      },
      keyframes: {
        flicker: {
          '0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%': { opacity: '1' },
          '20%, 24%, 55%': { opacity: '0.55' },
        },
        floatY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        flicker: 'flicker 4s linear infinite',
        floatY: 'floatY 6s ease-in-out infinite',
        pulseGlow: 'pulseGlow 3s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite',
        fadeUp: 'fadeUp 0.7s ease-out forwards',
      },
    },
  },
  plugins: [],
};
