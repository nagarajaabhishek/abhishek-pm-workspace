"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import SpacesSidebar from "@/components/spaces/SpacesSidebar";

export default function SpacesLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-full min-h-[calc(100vh-3rem)] flex-col md:flex-row">
      {/* Mobile menu button */}
      <div className="md:hidden flex items-center justify-between px-4 py-3 border-b border-border">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {sidebarOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Sidebar - hidden on mobile by default, visible on md and up */}
      <div className={`${sidebarOpen ? "block" : "hidden"} md:block md:w-56 md:shrink-0`}>
        <SpacesSidebar />
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-3xl mx-auto px-4 md:px-6 py-8 pb-24 md:pb-8">
          {children}
        </div>
      </div>
    </div>
  );
}
