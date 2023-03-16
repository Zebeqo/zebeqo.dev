"use client";

import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

import { useTheme } from "next-themes";
import { forwardRef, useEffect, useState } from "react";
import { LoadingSpinner } from "@/ui/icon/24/LoadingSpinner";
import { Button } from "@/ui/primitive/Button";
import { Tooltip } from "@/ui/primitive/Tooltip";
import { cn } from "@/lib/utils";
import type { SetOptional } from "type-fest";

export const ThemeButton = forwardRef<
  HTMLButtonElement,
  SetOptional<React.ComponentPropsWithoutRef<typeof Button>, "variant">
>(({ variant = { type: "ghost", iconOnly: true }, ...props }, ref) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button ref={ref} variant={variant} aria-label="Loading Theme" {...props}>
        <LoadingSpinner className="h-6 w-6" />
      </Button>
    );
  }

  return (
    <Tooltip content={theme === "dark" ? "明亮模式" : "黑暗模式"}>
      <Button
        variant={variant}
        aria-label="Toggle Dark Mode"
        onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark");
        }}
        {...props}
      >
        {theme === "dark" ? (
          <SunIcon className="h-6 w-6" />
        ) : (
          <MoonIcon className="h-6 w-6" />
        )}
      </Button>
    </Tooltip>
  );
});
ThemeButton.displayName = "ThemeButton";
