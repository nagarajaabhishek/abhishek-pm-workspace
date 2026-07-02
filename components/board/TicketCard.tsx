"use client";

import { motion } from "framer-motion";
import { ExternalLink, GitBranch, ArrowUpRight } from "lucide-react";
import type { TicketCard as TicketCardType } from "@/data/boardData";
import { labelColors, priorityColors } from "@/data/boardData";

interface Props {
  ticket: TicketCardType;
  onClick: (ticket: TicketCardType) => void;
}

const priorityDot: Record<string, string> = {
  P1: "bg-red-500",
  P2: "bg-orange-400",
  P3: "bg-yellow-400",
  P4: "bg-slate-500",
};

export default function TicketCard({ ticket, onClick }: Props) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      whileHover={{ y: -2, scale: 1.005 }}
      onClick={() => onClick(ticket)}
      className="group relative rounded-xl p-4 cursor-pointer transition-all duration-200 overflow-hidden"
      style={{
        background: "linear-gradient(145deg, hsl(0 0% 10%) 0%, hsl(0 0% 8%) 100%)",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      {/* Hover glow border */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" style={{ boxShadow: "inset 0 0 0 1px hsl(14 100% 60% / 0.25)" }} />

      {/* Top row */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <span className="text-[10px] text-white/25 font-mono tracking-wider">{ticket.key}</span>
        <div className="flex items-center gap-1.5">
          <span className={`w-1.5 h-1.5 rounded-full ${priorityDot[ticket.priority]}`} />
          <span className={`text-[10px] font-bold ${priorityColors[ticket.priority]}`}>{ticket.priority}</span>
        </div>
      </div>

      <h3 className="text-sm font-semibold text-white mb-1.5 group-hover:text-brand transition-colors leading-snug" style={{ fontFamily: 'var(--font-montserrat)' }}>
        {ticket.title}
      </h3>

      <p className="text-[11px] text-white/40 mb-3 line-clamp-2 leading-relaxed">{ticket.description}</p>

      <div className="flex flex-wrap gap-1 mb-3">
        {ticket.labels.map((label) => (
          <span key={label} className={`text-[10px] px-1.5 py-0.5 rounded-md border font-medium ${labelColors[label]}`}>
            {label}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-2 pt-2 border-t border-white/5">
        <div className="flex flex-wrap gap-1.5 flex-1">
          {ticket.stack.slice(0, 2).map((s) => (
            <span key={s} className="text-[10px] text-white/30 bg-white/5 px-1.5 py-0.5 rounded">{s}</span>
          ))}
          {ticket.stack.length > 2 && (
            <span className="text-[10px] text-white/20">+{ticket.stack.length - 2}</span>
          )}
        </div>
        <div className="flex items-center gap-1.5 ml-auto">
          {ticket.github && (
            <a href={ticket.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}
              className="text-white/25 hover:text-brand transition-colors">
              <GitBranch className="w-3.5 h-3.5" />
            </a>
          )}
          {ticket.url && (
            <a href={ticket.url} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}
              className="text-white/25 hover:text-brand transition-colors">
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
          <ArrowUpRight className="w-3.5 h-3.5 text-white/15 group-hover:text-brand/50 transition-colors" />
        </div>
      </div>
    </motion.div>
  );
}
