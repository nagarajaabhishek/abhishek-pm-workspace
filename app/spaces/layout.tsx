"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import SpacesSidebar from "@/components/spaces/SpacesSidebar";

export default function SpacesLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-full min-h-[calc(100vh-3rem)]">
      {/* Mobile menu button - only visible on mobile */}
      <div className="md:hidden absolute top-0 left-0 right-0 flex items-center px-4 py-3 border-b border-border bg-background z-50">
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

      {/* Backdrop overlay - only visible on mobile when sidebar is open */}
      {sidebarOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setSidebarOpen(false)}
          aria-label="Close menu"
        />
      )}

      {/* Sidebar - hidden on mobile by default, visible on md and up */}
      <div className={`${sidebarOpen ? "block" : "hidden"} md:block md:w-56 md:shrink-0 md:relative fixed top-14 w-56 h-[calc(100vh-3.5rem)] md:h-auto md:top-auto md:w-56 md:inset-auto z-40 md:z-auto`}>
        <SpacesSidebar />
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-y-auto w-full md:w-auto pt-4 md:pt-0">
        <div className="max-w-3xl mx-auto px-4 md:px-6 py-8 pb-24 md:pb-8">
          {children}
        </div>
      </div>
    </div>
  );
}
