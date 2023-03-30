import Image from "next/image";
import { Navbar } from "@/components/Navbar/Navbar";
import { ThemeButton } from "@/components/Button/ThemeButton";
import Link from "next/link";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export const Header = forwardRef<
  React.ElementRef<"header">,
  React.ComponentPropsWithoutRef<"header">
>(({ className, ...props }, ref) => (
  <header
    ref={ref}
    className={cn("flex items-center justify-between py-6", className)}
    {...props}
  >
    <Link href={"/"}>
      <Image src={"/avatar.png"} alt={"avatar"} width={32} height={32} />
    </Link>
    <Navbar />
    <ThemeButton />
  </header>
));
Header.displayName = "Header";
