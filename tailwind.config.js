/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cyber-blue': '#00f5ff',
        'cyber-purple': '#8a2be2',
        'cyber-pink': '#ff1493',
        'cyber-green': '#39ff14',
        'neon-yellow': '#ffff00',
        'dark-bg': '#0a0a0a',
        'dark-card': '#1a1a1a',
      },
      fontFamily: {
        'cyber': ['Orbitron', 'monospace'],
        'tech': ['Rajdhani', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glitch': 'glitch 0.3s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { 
            textShadow: '0 0 5px #00f5ff, 0 0 10px #00f5ff, 0 0 15px #00f5ff',
            boxShadow: '0 0 5px #00f5ff'
          },
          '100%': { 
            textShadow: '0 0 10px #00f5ff, 0 0 20px #00f5ff, 0 0 30px #00f5ff',
            boxShadow: '0 0 10px #00f5ff, 0 0 20px #00f5ff'
          }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' }
        }
      },
      backgroundImage: {
        'gradient-cyber': 'linear-gradient(45deg, #0a0a0a, #1a1a2e, #16213e)',
        'gradient-neon': 'linear-gradient(90deg, #00f5ff, #8a2be2, #ff1493)',
      }
    },
  },
  plugins: [],
}
