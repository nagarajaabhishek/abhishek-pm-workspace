"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";
import { SPACE_PAGES, SPACE_SECTIONS } from "@/data/spacesData";

export default function SpacesSidebar() {
  const pathname = usePathname();
  const activeSlug = pathname.split("/").pop() ?? "about";

  return (
    <aside className="w-56 shrink-0 border-r border-border h-full flex flex-col">
      <div className="px-4 py-4 border-b border-border">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-brand/12 border border-brand/15 flex items-center justify-center">
            <BookOpen className="w-3.5 h-3.5 text-brand" />
          </div>
          <div>
            <p className="text-xs font-bold text-white" style={{ fontFamily: "var(--font-montserrat)" }}>
              Knowledge Base
            </p>
            <p className="text-[10px] text-white/30">Logan&apos;s Workspace</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto py-3 px-2">
        {SPACE_SECTIONS.map((section) => {
          const pages = SPACE_PAGES.filter((p) => p.section === section.id);
          return (
            <div key={section.id} className="mb-4">
              <p
                className="text-[10px] font-bold text-white/25 uppercase tracking-widest px-3 mb-1.5"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                {section.label}
              </p>
              {pages.map((page) => (
                <Link
                  key={page.slug}
                  href={`/spaces/${page.slug}`}
                  className={cn(
                    "flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-all mb-0.5",
                    activeSlug === page.slug
                      ? "bg-brand/12 text-brand border border-brand/15"
                      : "text-white/50 hover:text-white/80 hover:bg-white/5"
                  )}
                >
                  <span className="text-base leading-none">{page.emoji}</span>
                  <span
                    className="text-xs font-medium truncate"
                    style={{ fontFamily: activeSlug === page.slug ? "var(--font-montserrat)" : undefined }}
                  >
                    {page.title}
                  </span>
                </Link>
              ))}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
