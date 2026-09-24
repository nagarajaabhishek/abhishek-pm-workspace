"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import { LayoutGrid, Map, FileText, GitBranch, Search, User, Globe } from "lucide-react";

const commands = [
  { label: "Go to Board", href: "/board", icon: LayoutGrid, shortcut: "B" },
  { label: "Go to Canvas", href: "/canvas", icon: Map, shortcut: "C" },
  { label: "Go to Flows", href: "/flows", icon: GitBranch, shortcut: "F" },
  { label: "Go to Spaces", href: "/spaces", icon: Globe, shortcut: "S" },
  { label: "Go to About Me", href: "/spaces/about", icon: User, shortcut: "P" },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="hidden md:flex items-center gap-2 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-400 text-xs hover:bg-white/10 transition-colors"
      >
        <Search className="w-3 h-3" />
        <span>Search</span>
        <kbd className="ml-1 text-[10px] text-slate-500">⌘K</kbd>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center pt-[20vh] bg-black/60 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-md bg-card border border-border rounded-xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Command>
              <div className="flex items-center gap-3 px-4 border-b border-white/10">
                <Search className="w-4 h-4 text-slate-400 shrink-0" />
                <Command.Input
                  placeholder="Search commands..."
                  className="flex-1 bg-transparent py-3.5 text-sm text-white placeholder:text-slate-500 outline-none"
                  autoFocus
                />
              </div>
              <Command.List className="p-2 max-h-72 overflow-y-auto">
                <Command.Empty className="py-6 text-center text-sm text-slate-500">
                  No results found.
                </Command.Empty>
                <Command.Group heading={<span className="px-2 py-1 text-xs text-slate-500 font-medium">Navigation</span>}>
                  {commands.map((cmd) => (
                    <Command.Item
                      key={cmd.href}
                      onSelect={() => {
                        router.push(cmd.href);
                        setOpen(false);
                      }}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer text-sm text-slate-300 hover:bg-white/5 aria-selected:bg-white/10 aria-selected:text-white transition-colors"
                    >
                      <cmd.icon className="w-4 h-4 text-slate-400" />
                      {cmd.label}
                      <kbd className="ml-auto text-xs text-slate-600">{cmd.shortcut}</kbd>
                    </Command.Item>
                  ))}
                </Command.Group>
              </Command.List>
            </Command>
          </div>
        </div>
      )}
    </>
  );
}
