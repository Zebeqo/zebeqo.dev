import Image from "next/image";
import { Navbar } from "@/components/Navbar/Navbar";
import { ThemeButton } from "@/components/Button/ThemeButton";
import Link from "next/link";

export function Header() {
  return (
    <header className="flex items-center justify-between py-6">
      <Link href={"/"}>
        <Image
          src={"/avatar.png"}
          alt={"avatar"}
          width={32}
          height={32}
          className="hidden sm:block"
        />
      </Link>
      <Navbar />
      <ThemeButton />
    </header>
  );
}
