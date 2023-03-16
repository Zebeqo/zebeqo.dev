import Image from "next/image";
import { Navbar } from "@/components/Navbar/Navbar";
import { ThemeButton } from "@/components/Button/ThemeButton";

export function Header() {
  return (
    <header className="flex items-center justify-center py-6 sm:justify-between">
      <Image
        src={"/images/avatar.png"}
        alt={"avatar"}
        width={32}
        height={32}
        className="hidden sm:block"
      />
      <Navbar />
      <ThemeButton className="hidden sm:block" />
    </header>
  );
}
