"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const sections = [
  { id: "hero", label: "Overview" },
  { id: "impact", label: "Impact" },
  { id: "what-i-do", label: "What I Do" },
  { id: "skills", label: "Core Skills" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "startups", label: "Startups" },
  { id: "communities", label: "Communities" },
  { id: "featured", label: "Media & Speaking" },
  { id: "team", label: "Team" },
];

export default function ProfileTOC() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <aside className="hidden xl:flex flex-col w-44 shrink-0 sticky top-20 self-start pt-8 pl-2">
      <p className="text-[10px] font-bold text-white/25 uppercase tracking-widest mb-3 px-2"
        style={{ fontFamily: "var(--font-montserrat)" }}>
        On this page
      </p>
      <nav className="flex flex-col gap-0.5">
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className={cn(
              "flex items-center gap-2 px-2 py-1.5 rounded-lg text-xs transition-all",
              active === s.id
                ? "text-brand font-medium"
                : "text-white/30 hover:text-white/60"
            )}
          >
            {active === s.id && (
              <span className="w-1 h-1 rounded-full bg-brand shrink-0" />
            )}
            {active !== s.id && (
              <span className="w-1 h-1 rounded-full bg-transparent shrink-0" />
            )}
            {s.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}
