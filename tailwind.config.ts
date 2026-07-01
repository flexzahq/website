import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5A9D98",
        secondary: "#EAF5F4",
        ink: "#1E1E1E",
        muted: "#6B7472",
      },
      fontFamily: {
        sans: ["Anek Gujarati", "Anek Latin", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 20px 60px rgba(30, 30, 30, 0.08)",
        glow: "0 20px 70px rgba(90, 157, 152, 0.28)",
      },
    },
  },
  plugins: [],
} satisfies Config;
