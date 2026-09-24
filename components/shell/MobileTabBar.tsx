"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutGrid, Map, FileText, GitBranch, Globe, Star, BookOpen, Image as ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const tabs = [
  { href: "/spaces", label: "Spaces", icon: Globe },
  { href: "/featured", label: "Featured", icon: Star },
  { href: "/board", label: "Board", icon: LayoutGrid },
  { href: "/canvas", label: "Canvas", icon: Map },
  { href: "/blog", label: "Blog", icon: BookOpen },
  { href: "/gallery", label: "Gallery", icon: ImageIcon },
];

export default function MobileTabBar() {
  const pathname = usePathname();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-xl border-t border-border flex overflow-x-auto no-scrollbar">
      {tabs.map(({ href, label, icon: Icon }) => (
        <Link
          key={href}
          href={href}
          className={cn(
            "flex-1 min-w-[60px] flex flex-col items-center gap-1 py-2.5 text-[10px] transition-colors",
            pathname.startsWith(href) ? "text-brand" : "text-muted-foreground"
          )}
        >
          <Icon className="w-5 h-5" />
          {label}
        </Link>
      ))}
    </nav>
  );
}
