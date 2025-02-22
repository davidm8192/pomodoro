import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'press-start': ['"Press Start 2P"', 'cursive'],
        'pixelify': ['"Pixelify Sans"', 'sans-serif'],
      },
      letterSpacing: {
        'title': '0.25em',
      }
    },
  },
  plugins: [],
} satisfies Config;
