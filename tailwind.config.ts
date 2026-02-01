import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        fredoka: ['Fredoka', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Game-specific colors
        sky: {
          light: "hsl(197 60% 85%)",
          DEFAULT: "hsl(197 71% 73%)",
          dark: "hsl(197 80% 65%)",
        },
        road: {
          light: "hsl(220 10% 50%)",
          DEFAULT: "hsl(220 15% 35%)",
          dark: "hsl(220 20% 25%)",
        },
        grass: {
          light: "hsl(120 40% 60%)",
          DEFAULT: "hsl(120 45% 50%)",
          dark: "hsl(120 50% 40%)",
        },
        coin: {
          light: "hsl(50 100% 70%)",
          DEFAULT: "hsl(45 95% 55%)",
          dark: "hsl(40 95% 45%)",
        },
        wood: {
          light: "hsl(35 50% 55%)",
          DEFAULT: "hsl(30 45% 40%)",
          dark: "hsl(25 40% 30%)",
        },
        coral: {
          light: "hsl(4 85% 75%)",
          DEFAULT: "hsl(4 85% 65%)",
          dark: "hsl(4 85% 55%)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "2xl": "1.5rem",
        "3xl": "2rem",
        "4xl": "2.5rem",
      },
      boxShadow: {
        'game': '0 4px 20px hsl(30 30% 50% / 0.15)',
        'game-lg': '0 8px 30px hsl(30 30% 40% / 0.12)',
        'game-xl': '0 15px 40px hsl(30 30% 30% / 0.2)',
        'button': '0 4px 0 hsl(4 85% 45%)',
        'button-green': '0 4px 0 hsl(142 52% 35%)',
        'coin': '0 2px 8px hsl(45 95% 40% / 0.4)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        roadMove: {
          "0%": { backgroundPositionY: "0" },
          "100%": { backgroundPositionY: "100px" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 3s ease-in-out infinite",
        "bounce-slow": "bounce 2s infinite",
        "wiggle": "wiggle 0.5s ease-in-out infinite",
        "scale-in": "scaleIn 0.3s ease-out",
        "slide-up": "slideUp 0.4s ease-out",
        "road-move": "roadMove 0.5s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
