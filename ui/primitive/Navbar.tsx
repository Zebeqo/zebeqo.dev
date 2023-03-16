"use client";

import { forwardRef, memo, useEffect, useMemo } from "react";
import { cn } from "@/lib/utils";
import { atom, createStore, Provider, useAtomValue } from "jotai";
import Link from "next/link";
import { motion } from "framer-motion";

export const navbarStore = createStore();

const activeValueAtom = atom<string | null>(null);
activeValueAtom.debugLabel = "activeValueAtom";

const Navbar = forwardRef<
  React.ElementRef<"nav">,
  React.ComponentPropsWithoutRef<"nav"> & { value: string }
>(({ className, children, value, ...props }, ref) => {
  useEffect(() => {
    navbarStore.set(activeValueAtom, value);
  }, [value]);

  return (
    <Provider store={navbarStore}>
      <nav
        ref={ref}
        className={cn("h-fit rounded-full bg-neutral-6 p-1", className)}
        {...props}
      >
        <ul className="flex items-center space-x-2">{children}</ul>
      </nav>
    </Provider>
  );
});
Navbar.displayName = "Navbar";

const NavbarItem = memo(
  forwardRef<
    React.ElementRef<"li">,
    Omit<React.ComponentPropsWithoutRef<"li">, "value"> & { value: string }
  >(({ className, value, children, ...props }, ref) => {
    const isSelectedAtom = useMemo(
      () => atom((get) => get(activeValueAtom) === value),
      [value]
    );
    isSelectedAtom.debugLabel = `is${
      value[0].toUpperCase() + value.slice(1)
    }SelectedAtom`;

    const isSelected = useAtomValue(isSelectedAtom);

    return (
      <li
        className={cn(
          "relative z-10 px-3 py-1 text-sm font-medium text-neutral-12",
          isSelected && "z-0",
          className
        )}
        ref={ref}
        {...props}
      >
        <Link href={`/${value}`} className="relative z-10">
          {children}
        </Link>
        {isSelected && (
          <motion.div
            layoutId="thumb"
            className="absolute inset-0 z-0 rounded-full bg-neutral-1"
          />
        )}
      </li>
    );
  })
);
NavbarItem.displayName = "NavbarItem";

export { Navbar, NavbarItem };
