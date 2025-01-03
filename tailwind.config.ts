/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "indigo-050": "#E0E8F9",
        "indigo-100": "#BED0F7",
        "indigo-200": "#98AEEB",
        "indigo-300": "#7B93DB",
        "indigo-400": "#647ACB",
        "indigo-500": "#4C63B6",
        "indigo-600": "#4055A8",
        "indigo-700": "#35469C",
        "indigo-800": "#2D3A8C",
        "indigo-900": "#19216C",
        "orange-vivid-050": "#FFE8D9",
        "orange-vivid-100": "#FFD0B5",
        "orange-vivid-200": "#FFB088",
        "orange-vivid-300": "#FF9466",
        "orange-vivid-400": "#F9703E",
        "orange-vivid-500": "#F35627",
        "orange-vivid-600": "#DE3A11",
        "orange-vivid-700": "#C52707",
        "orange-vivid-800": "#AD1D07",
        "orange-vivid-900": "#841003",
        "cool-grey-050": "#F5F7FA",
        "cool-grey-100": "#E4E7EB",
        "cool-grey-200": "#CBD2D9",
        "cool-grey-300": "#9AA5B1",
        "cool-grey-400": "#7B8794",
        "cool-grey-500": "#616E7C",
        "cool-grey-600": "#52606D",
        "cool-grey-700": "#3E4C59",
        "cool-grey-800": "#323F4B",
        "cool-grey-900": "#1F2933",
        "magenta-vivid-050": "#FDEBFF",
        "magenta-vivid-100": "#F8C4FE",
        "magenta-vivid-200": "#F48FFF",
        "magenta-vivid-300": "#F368FC",
        "magenta-vivid-400": "#ED47ED",
        "magenta-vivid-500": "#E019D0",
        "magenta-vivid-600": "#CB10B8",
        "magenta-vivid-700": "#B30BA3",
        "magenta-vivid-800": "#960888",
        "magenta-vivid-900": "#6E0560",
        "red-vivid-050": "#FFE3E3",
        "red-vivid-100": "#FFBDBD",
        "red-vivid-200": "#FF9B9B",
        "red-vivid-300": "#F86A6A",
        "red-vivid-400": "#EF4E4E",
        "red-vivid-500": "#E12D39",
        "red-vivid-600": "#CF1124",
        "red-vivid-700": "#AB091E",
        "red-vivid-800": "#8A041A",
        "red-vivid-900": "#610316",
        "yellow-vivid-050": "#FFFBEA",
        "yellow-vivid-100": "#FFF3C4",
        "yellow-vivid-200": "#FCE588",
        "yellow-vivid-300": "#FADB5F",
        "yellow-vivid-400": "#F7C948",
        "yellow-vivid-500": "#F0B429",
        "yellow-vivid-600": "#DE911D",
        "yellow-vivid-700": "#CB6E17",
        "yellow-vivid-800": "#B44D12",
        "yellow-vivid-900": "#8D2B0B",
        "green-vivid-050": "#E3F9E5",
        "green-vivid-100": "#C1F2C7",
        "green-vivid-200": "#91E697",
        "green-vivid-300": "#51CA58",
        "green-vivid-400": "#31B237",
        "green-vivid-500": "#18981D",
        "green-vivid-600": "#0F8613",
        "green-vivid-700": "#0E7817",
        "green-vivid-800": "#07600E",
        "green-vivid-900": "#014807",
        "bp-secondary-text": "#3E4C59",
        "bp-normal-bg": "#DCFCE7",
        "bp-normal-primary-text": "#166534",
        "bp-elevated-bg": "#FEF9C3",
        "bp-elevated-primary-text": "#854D0E",
        "bp-hypertension-1-bg": "#FFEDD5",
        "bp-hypertension-1-primary-text": "#9A3412",
        "bp-hypertension-2-bg": "#FEE2E2",
        "bp-hypertension-2-primary-text": "#991B1B",
        "bp-hypertension-crisis-bg": "#FECACA",
        "bp-hypertension-crisis-primary-text": "#7F1D1D",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
