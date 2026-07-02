"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutGrid, Scroll } from "lucide-react";
import { motion } from "framer-motion";

export default function ViewToggle() {
  const pathname = usePathname();
  const isClassic = pathname.startsWith("/classic");

  // On workspace pages, the toggle is rendered inside TopNav — no floating pill needed
  if (!isClassic) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-4 right-4 z-[60]"
    >
      <Link
        href="/docs"
        className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold transition-all shadow-lg"
        style={{
          background: "hsl(14 100% 60%)",
          border: "1px solid hsl(14 100% 60% / 0.4)",
          color: "#fff",
          backdropFilter: "blur(12px)",
          fontFamily: "var(--font-montserrat)",
        }}
      >
        <LayoutGrid className="w-3 h-3" /> Switch to Workspace
      </Link>
    </motion.div>
  );
}
