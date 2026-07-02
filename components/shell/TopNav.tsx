"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { LayoutGrid, Map, FileText, GitBranch, User, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import CommandPalette from "./CommandPalette";

const navItems = [
  { href: "/docs", label: "Docs", icon: FileText },
  { href: "/board", label: "Board", icon: LayoutGrid },
  { href: "/canvas", label: "Canvas", icon: Map },
  { href: "/flows", label: "Flows", icon: GitBranch },
  { href: "/spaces", label: "Spaces", icon: Globe },
  { href: "/profile", label: "Profile", icon: User },
];

export default function TopNav() {
  const pathname = usePathname();

  return (
    <header className="h-13 border-b border-white/8 bg-background/80 backdrop-blur-xl flex items-center px-4 gap-4 sticky top-0 z-50">
      {/* Logo */}
      <Link href="/docs" className="flex items-center gap-2.5 mr-2 shrink-0 group">
        <div className="w-7 h-7 rounded-lg overflow-hidden ring-1 ring-white/10 group-hover:ring-brand/50 transition-all">
          <Image src="/icon.png" alt="Logan's Workspace" width={28} height={28} className="object-cover" />
        </div>
        <span className="text-sm font-semibold text-white hidden sm:block tracking-tight" style={{ fontFamily: 'var(--font-montserrat)' }}>
          Logan&apos;s Workspace
        </span>
      </Link>

      {/* Divider */}
      <div className="hidden md:block w-px h-5 bg-white/10" />

      {/* Nav tabs */}
      <nav className="hidden md:flex items-center gap-0.5">
        {navItems.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={cn(
              "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-150",
              pathname.startsWith(href)
                ? "bg-brand/15 text-brand border border-brand/20"
                : "text-white/50 hover:text-white/90 hover:bg-white/6"
            )}
          >
            <Icon className="w-3.5 h-3.5" />
            {label}
          </Link>
        ))}
      </nav>

      <div className="ml-auto flex items-center gap-2">
        <CommandPalette />
        <Link
          href="/profile"
          className="w-7 h-7 rounded-full overflow-hidden ring-2 ring-white/10 hover:ring-brand/50 transition-all"
        >
          <Image src="/profile-main.jpg" alt="Abhishek" width={28} height={28} className="object-cover w-full h-full" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }} />
          <div className="w-full h-full bg-brand flex items-center justify-center text-white text-xs font-bold" style={{ fontFamily: 'var(--font-montserrat)' }}>A</div>
        </Link>
      </div>
    </header>
  );
}
