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
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-noto-sans-sc)"],
        serif: ["LXGW WenKai Lite"],
        mono: ["LXGW WenKai Lite"],
      },
      colors: {
        primary: toRadixVars("grass"),
        accent: toRadixVars("plum"),
        neutral: toRadixVars("olive"),
        ...radixColors.blackA,
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
      },
    }),
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
    require("windy-radix-typography"),
  ],
};
