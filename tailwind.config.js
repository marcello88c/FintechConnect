import plugin from "tailwindcss/plugin";
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./templates/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: false,
    screens: {
      "6xl": { max: "2399px" },
      // => @media (max-width: 2399px) { ... }
      "5xl": { max: "2199px" },
      // => @media (max-width: 2199px) { ... }
      "4xl": { max: "1939px" },
      // => @media (max-width: 1939px) { ... }
      "3xl": { max: "1719px" },
      // => @media (max-width: 1719px) { ... }
      "2xl": { max: "1419px" },
      // => @media (max-width: 1419px) { ... }
      xl: { max: "1259px" },
      // => @media (max-width: 1259px) { ... }
      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }
      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }
      sm: { max: "480px" },
      // => @media (max-width: 480px) { ... }
    },
    extend: {
      colors: {
        color: {
          1: "#000000",
          2: "#FFFFFF",
          3: "#FFFFFF",
          4: "#9376ff",
          5: "#666666",
          6: "#B3B3B3",
          7: "#868686",
        },
      },

      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
      },
      spacing: {
        0.25: "0.0625rem",
        0.75: "0.1875rem",
        4.5: "1.125rem",
        5.5: "1.375rem",
        6.5: "1.75rem",
        7.5: "1.875rem",
        8.5: "2.125rem",
        9.5: "2.375rem",
        13: "3.25rem",
        15: "3.75rem",
        17: "4.25rem",
        18: "4.5rem",
        19: "4.75rem",
        21: "5.25rem",
        22: "5.5rem",
        26: "6.5rem",
        30: "7.5rem",
        34: "8.5rem",
        38: "9.5rem",
        42: "10.5rem",
        50: "12.5rem",
        54: "13.5rem",
        58: "14.5rem",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
      transitionTimingFunction: {
        DEFAULT: "linear",
      },
      opacity: {
        15: ".15",
        25: ".25",
        85: ".85",
        95: ".95",
      },
      borderWidth: {
        DEFAULT: "0.0625rem",
        0: "0",
        2: "0.125rem",
        4: "0.25rem",
        8: "0.5rem",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
      fontSize: {
        0: ["0px", "0px"],
        sm: ["0.875rem", "1.3125rem"],
        lg: ["1.125rem", "1.6875rem"],
        xl: ["1.25rem", "1.875rem"],
        "2xl": ["1.5rem", "2.25rem"],
        "3xl": ["1.75rem", "2.625rem"],
        "h0-desktop": [
          "7rem",
          {
            lineHeight: "6.3rem",
            fontWeight: "700",
            letterSpacing: "-0.05em",
          },
        ],
        "h0-tablet": [
          "5rem",
          {
            lineHeight: "5rem",
            fontWeight: "700",
            letterSpacing: "-0.04em",
          },
        ],
        "h0-mobile": [
          "3.375rem",
          {
            lineHeight: "3.375rem",
            fontWeight: "700",
            letterSpacing: "-0.06em",
          },
        ],
        "h1-desktop": [
          "5.5rem",
          {
            lineHeight: "5.5rem",
            fontWeight: "700",
            letterSpacing: "-0.04em",
          },
        ],
        "h1-tablet": [
          "4rem",
          {
            lineHeight: "4rem",
            fontWeight: "700",
            letterSpacing: "-0.04em",
          },
        ],
        "h1-mobile": [
          "3rem",
          {
            lineHeight: "2.85rem",
            fontWeight: "700",
            letterSpacing: "-0.04em",
          },
        ],
        "h2-desktop": [
          "4rem",
          {
            lineHeight: "4rem",
            fontWeight: "500",
            letterSpacing: "-0.04em",
          },
        ],
        "h2-tablet": [
          "3rem",
          {
            lineHeight: "3.3rem",
            fontWeight: "500",
            letterSpacing: "-0.04em",
          },
        ],
        h3: [
          "3.5rem",
          {
            lineHeight: "3.5rem",
            fontWeight: "500",
            letterSpacing: "-0.04em",
          },
        ],
        h4: [
          "3rem",
          {
            lineHeight: "3.3rem",
            fontWeight: "700",
            letterSpacing: "-0.04em",
          },
        ],
        h5: [
          "2.5rem",
          {
            lineHeight: "2.75rem",
            fontWeight: "500",
            letterSpacing: "-0.03em",
          },
        ],
        h6: [
          "2rem",
          {
            lineHeight: "2.6rem",
            fontWeight: "500",
            letterSpacing: "-0.02em",
          },
        ],
        h7: [
          "1.75rem",
          {
            lineHeight: "2.45rem",
            fontWeight: "500",
            letterSpacing: "-0.02em",
          },
        ],
      },
    },
  },
  plugins: [
    require("@headlessui/tailwindcss")({ prefix: "ui" }),
    plugin(function ({ addBase, addComponents, addUtilities }) {
      addBase({
        html: {
          "@apply text-[calc(0.7rem+.4vw)] 5xl:text-[calc(0.65rem+.4vw)] 4xl:text-[calc(0.6rem+.4vw)] 3xl:text-[1rem]":
            {},
        },
      });
      addComponents({
        ".section": {
          "@apply py-[12.5rem] 2xl:py-40 xl:py-30 md:py-24": {},
        },
        ".section-light": {
          "@apply section bg-color-2 text-color-1": {},
        },
        ".container": {
          "@apply max-w-[90rem] mx-auto px-16 2xl:px-10 md:px-6": {},
        },
        ".btn": {
          "@apply inline-flex items-center justify-center h-15 px-8 bg-color-2 font-bold text-base tracking-[0.15em] text-color-1 transition-colors disabled:opacity-20 disabled:pointer-events-none hover:text-color-4 md:h-12":
            {},
        },
        ".btn svg": {
          "@apply fill-inherit first:mr-2.5 last:ml-2.5": {},
        },
        ".btn-blue": {
          "@apply btn bg-color-4 text-color-2 hover:bg-color-4/90 hover:text-color-2":
            {},
        },
        ".label": {
          "@apply relative mb-8 pb-2 text-xl font-semibold uppercase text-color-4 after:absolute after:left-0 after:bottom-0 after:w-10 after:h-0.25 after:bg-color-3 xl:mb-6 xl:text-base md:mb-4 md:pb-1 md:text-sm":
            {},
        },
        ".label-dark": {
          "@apply label after:bg-color-1": {},
        },
      });
      addUtilities({
        ".tap-highlight-color": {
          "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
        },
      });
    }),
  ],
};
