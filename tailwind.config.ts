import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        'pulse-border': {
          '0%, 100%': { borderColor: 'rgba(239, 68, 68, 0.7)' },
          '50%': { borderColor: 'rgba(239, 68, 68, 0.3)' },
        },
        'glow': {
          '0%': {
            boxShadow: '0 0 5px rgb(239 68 68 / 0.5), 0 0 10px rgb(239 68 68 / 0.5)'
          },
          '100%': {
            boxShadow: '0 0 20px rgb(239 68 68 / 0.7), 0 0 30px rgb(239 68 68 / 0.7)'
          }
        }
      },
      animation: {
        'pulse-border': 'pulse-border 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 0.5s ease-in-out forwards',
      },
    },
  },
  plugins: [],
} satisfies Config;
