"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { LayoutGrid, Map, FileText, GitBranch, Globe, Star, BookOpen, Image as ImageIcon, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";
import CommandPalette from "./CommandPalette";

const navItems = [
  { href: "/spaces", label: "Spaces", icon: Globe },
  { href: "/featured", label: "Featured", icon: Star },
  { href: "/board", label: "Board", icon: LayoutGrid },
  { href: "/canvas", label: "Canvas", icon: Map },
  { href: "/flows", label: "Flows", icon: GitBranch },
  { href: "/blog", label: "Blog", icon: BookOpen },
  { href: "/gallery", label: "Gallery", icon: ImageIcon },
];

export default function TopNav() {
  const pathname = usePathname();

  return (
    <header className="h-13 border-b border-white/8 bg-background/80 backdrop-blur-xl flex items-center px-4 gap-4 sticky top-0 z-50">
      {/* Logo */}
      <Link href="/spaces" className="flex items-center gap-2.5 mr-2 shrink-0 group">
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
        <a
          href="https://loganroy.in"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium text-white/40 hover:text-white/70 border border-white/8 hover:border-white/20 transition-all"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          Classic
        </a>
        <a
          href="https://www.chess.com/member/twelfth_doctor"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium text-white border border-white/20 hover:bg-white/10 transition-all"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          <Trophy className="w-3.5 h-3.5" /> Challenge me to Chess
        </a>
        <Link
          href="/agent.md"
          target="_blank"
          className="hidden md:flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium text-white border border-white/20 hover:bg-white/10 transition-all"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          For AI Agent
        </Link>
        <Link
          href="/freelance"
          className="hidden md:flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold text-black bg-brand hover:bg-brand/90 transition-all"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          Hire Me
        </Link>
        <CommandPalette />

      </div>
    </header>
  );
}
