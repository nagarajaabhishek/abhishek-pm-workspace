"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutGrid, Map, FileText, GitBranch, User, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

const tabs = [
  { href: "/docs", label: "Docs", icon: FileText },
  { href: "/board", label: "Board", icon: LayoutGrid },
  { href: "/canvas", label: "Canvas", icon: Map },
  { href: "/flows", label: "Flows", icon: GitBranch },
  { href: "/spaces", label: "Spaces", icon: Globe },
  { href: "/profile", label: "Profile", icon: User },
];

export default function MobileTabBar() {
  const pathname = usePathname();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-xl border-t border-border flex">
      {tabs.map(({ href, label, icon: Icon }) => (
        <Link
          key={href}
          href={href}
          className={cn(
            "flex-1 flex flex-col items-center gap-1 py-2.5 text-[10px] transition-colors",
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
