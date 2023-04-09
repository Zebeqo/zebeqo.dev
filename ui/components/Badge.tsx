import { classed } from "@/classed.config";

export const Badge = classed("span", {
  base: "inline-flex select-none items-center justify-center font-medium whitespace-nowrap text-xs px-3 rounded-md py-1.5 hover:text-white hover:bg-accent-9",
  variants: {
    color: {
      primary: "bg-primary-4 text-primary-11",
      accent: "bg-accent-4 text-accent-11",
      neutral: "bg-neutral-4 text-neutral-11",
    },
  },
  defaultVariants: {
    color: "neutral",
  },
});
