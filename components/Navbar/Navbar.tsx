"use client";

import { usePathname } from "next/navigation";
import { NavbarItem, Navbar as NavbarRoot } from "@/ui/primitive/Navbar";

export function Navbar() {
  const pathname = usePathname().substring(1) || "home";

  return (
    <NavbarRoot value={pathname}>
      <NavbarItem value="home">主页</NavbarItem>
      <NavbarItem value="posts">文章</NavbarItem>
      <NavbarItem value="projects">项目</NavbarItem>
      <NavbarItem value="collections">收藏</NavbarItem>
    </NavbarRoot>
  );
}
