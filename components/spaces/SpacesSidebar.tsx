"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Users, Mic, BookOpen, Puzzle } from "lucide-react";
import { cn } from "@/lib/utils";

export const SPACES = [
  { id: "communities", label: "Communities", icon: Users, emoji: "🏘️" },
  { id: "podcast", label: "Podcast", icon: Mic, emoji: "🎙️" },
  { id: "blog", label: "Blog", icon: BookOpen, emoji: "✍️" },
  { id: "teardowns", label: "Teardowns", icon: Puzzle, emoji: "🔍" },
];

export default function SpacesSidebar({ active }: { active: string }) {
  const router = useRouter();

  return (
    <aside className="w-52 shrink-0 border-r border-border h-full flex flex-col py-4 px-2">
      <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest px-3 mb-2"
        style={{ fontFamily: 'var(--font-montserrat)' }}>Spaces</p>
      {SPACES.map((s) => (
        <button
          key={s.id}
          onClick={() => router.push(`/spaces?tab=${s.id}`)}
          className={cn(
            "flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-all text-left w-full mb-0.5",
            active === s.id
              ? "bg-brand/12 text-brand border border-brand/15"
              : "text-white/50 hover:text-white/80 hover:bg-white/5"
          )}
        >
          <span className="text-base leading-none">{s.emoji}</span>
          <span className="text-xs font-medium" style={{ fontFamily: active === s.id ? 'var(--font-montserrat)' : undefined }}>
            {s.label}
          </span>
        </button>
      ))}
    </aside>
  );
}
