/* eslint-disable */
const { toRadixVars } = require("windy-radix-palette/vars");
const radixColors = require("@radix-ui/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./ui/**/*.{ts,tsx}",
    "./hooks/**/*.tsx",
    "./.storybook/*.html",
    "./.storybook/preview.ts",
    "./content/**/*.mdx",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-noto-sans-sc)"],
        serif: ["LXGW WenKai Lite"],
        // mono: ["LXGW WenKai Lite"],
      },
      colors: {
        primary: toRadixVars("grass"),
        accent: toRadixVars("plum"),
        neutral: toRadixVars("olive"),
        neutralA: toRadixVars("oliveA"),
        ...radixColors.blackA,
      },
      keyframes: ({}) => ({
        loading: {
          "0%": {
            opacity: ".2",
          },
          "20%": {
            opacity: "1",
            transform: "translateX(1px)",
          },
          to: {
            opacity: ".2",
          },
        },
        fadein: {
          "0%": { transform: "translateY(18px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      }),
      animation: {
        fadein: "fadein .6s both",
      },
    },
  },
  plugins: [
    require("prettier-plugin-tailwindcss"),
    require("windy-radix-palette")({
      colors: {
        grass: radixColors.grass,
        grassDark: radixColors.grassDark,
        plum: radixColors.plum,
        plumDark: radixColors.plumDark,
        olive: radixColors.olive,
        oliveDark: radixColors.oliveDark,
        oliveA: radixColors.oliveA,
        oliveDarkA: radixColors.oliveDarkA,
      },
    }),
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
    require("windy-radix-typography"),
  ],
};
