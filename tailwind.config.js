/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00D094",
        secondary: "#071C16",
        success: "#28A745",
        danger: "#DC3545",
        warning: "#FFC107",
        info: "#17A2B8",
        light: "#F8F9FA",
        dark: "#000000",
        black: {
          100: "#d0d4d3",
          200: "#a1a9a7",
          300: "#717d7a",
          400: "#42524e",
          500: "#132722",
          600: "#0f1f1b",
          700: "#0b1714",
          800: "#08100e",
          900: "#040807",
        },
        teal: {
          100: "#ccf6ea",
          200: "#99ecd4",
          300: "#66e3bf",
          400: "#33d9a9",
          500: "#00d094",
          600: "#00a676",
          700: "#007d59",
          800: "#00533b",
          900: "#002a1e",
        },
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      container: {
        center: true,
      },
      spacing: {
        1: "0.25rem",
        2: "0.5rem",
        3: "0.75rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        7: "1.75rem",
        8: "2rem",
        9: "2.25rem",
        10: "2.5rem",
      },
      fontSize: {
        xs: ".75rem",
        sm: ".875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
        "7xl": "5rem",
      },
      borderRadius: {
        none: "0",
        sm: ".125rem",
        DEFAULT: ".25rem",
        md: ".375rem",
        lg: ".5rem",
        xl: ".75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        full: "9999px",
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        DEFAULT:
          "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)", // Default shadow
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.06)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.06)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
        none: "none",
      },
      textShadow: {
        sm: "0 1px 2px rgba(0, 0, 0, 0.05)",
        DEFAULT: "0 1px 2px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.06)",
        md: "0 4px 3px rgba(0, 0, 0, 0.07), 0 2px 2px rgba(0, 0, 0, 0.05)",
        lg: "0 10px 8px rgba(0, 0, 0, 0.04), 0 4px 3px rgba(0, 0, 0, 0.1)",
        xl: "0 20px 13px rgba(0, 0, 0, 0.03), 0 8px 5px rgba(0, 0, 0, 0.08)",
        "2xl": "0 25px 25px rgba(0, 0, 0, 0.15)",
        none: "none",
      },
      zIndex: {
        "-1": "-1",
        0: "0",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        10: "10",
        20: "20",
        30: "30",
        40: "40",
        50: "50",
        60: "60",
        70: "70",
        80: "80",
        90: "90",
        100: "100",
      },
      opacity: {
        0: "0",
        5: "0.05",
        10: "0.1",
        20: "0.2",
        25: "0.25",
        30: "0.3",
        40: "0.4",
        50: "0.5",
        60: "0.6",
        70: "0.7",
        75: "0.75",
        80: "0.8",
        90: "0.9",
        95: "0.95",
        100: "1",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
