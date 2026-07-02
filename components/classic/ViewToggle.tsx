"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutGrid, Scroll } from "lucide-react";
import { motion } from "framer-motion";

export default function ViewToggle() {
  const pathname = usePathname();
  const isClassic = pathname.startsWith("/classic");

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-4 right-4 z-[60]"
    >
      <Link
        href={isClassic ? "/docs" : "/classic"}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold transition-all shadow-lg"
        style={{
          background: isClassic
            ? "hsl(14 100% 60%)"
            : "rgba(255,255,255,0.08)",
          border: isClassic
            ? "1px solid hsl(14 100% 60% / 0.4)"
            : "1px solid rgba(255,255,255,0.12)",
          color: isClassic ? "#fff" : "rgba(255,255,255,0.7)",
          backdropFilter: "blur(12px)",
          fontFamily: "var(--font-montserrat)",
        }}
      >
        {isClassic ? (
          <><LayoutGrid className="w-3 h-3" /> Switch to Workspace</>
        ) : (
          <><Scroll className="w-3 h-3" /> Classic View</>
        )}
      </Link>
    </motion.div>
  );
}
