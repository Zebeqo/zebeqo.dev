"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface TooltipProps
  extends React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> {
  content: string;
  delayDuration?: number;
}
const Tooltip = forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  TooltipProps
>(({ className, children, content, delayDuration, ...props }, ref) => (
  <TooltipPrimitive.Provider>
    <TooltipPrimitive.Root delayDuration={delayDuration}>
      <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
      <TooltipPrimitive.Portal className="z-50">
        <TooltipPrimitive.Content
          ref={ref}
          sideOffset={4}
          className={cn(
            "radix-side-top:animate-slide-down-fade",
            "radix-side-right:animate-slide-left-fade",
            "radix-side-bottom:animate-slide-up-fade",
            "radix-side-left:animate-slide-right-fade",
            "inline-flex items-center rounded-md px-3 py-2.5",
            "z-50 bg-neutral-9",
            className
          )}
          {...props}
        >
          <TooltipPrimitive.Arrow className="z-50 fill-current text-neutral-9" />
          <span className="block text-xs leading-none text-white">
            {content}
          </span>
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Portal>
    </TooltipPrimitive.Root>
  </TooltipPrimitive.Provider>
));
Tooltip.displayName = TooltipPrimitive.Tooltip.displayName;

export { Tooltip };
