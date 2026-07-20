"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { GitBranch, ExternalLink } from "lucide-react";
import type { TicketCard } from "@/data/boardData";
import { labelColors, priorityColors } from "@/data/boardData";

interface Props {
  ticket: TicketCard | null;
  onClose: () => void;
}

export default function TicketModal({ ticket, onClose }: Props) {
  if (!ticket) return null;

  return (
    <Dialog open={!!ticket} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="bg-card border-border text-foreground max-w-lg">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-1 pr-8">
            <span className="text-xs text-slate-500 font-mono">{ticket.key}</span>
            <span className={`text-xs font-semibold ${priorityColors[ticket.priority]}`}>
              {ticket.priority}
            </span>
            <span className="ml-auto text-xs text-slate-500 bg-white/5 px-2 py-0.5 rounded-full">
              {ticket.status}
            </span>
          </div>
          <DialogTitle className="text-left text-base font-semibold text-white">
            {ticket.title}
          </DialogTitle>
        </DialogHeader>

        <p className="text-sm text-slate-300 mt-2">{ticket.description}</p>

        {ticket.stack.length > 0 && (
          <div className="mt-4">
            <p className="text-xs font-medium text-slate-400 mb-2 uppercase tracking-wider">Stack</p>
            <div className="flex flex-wrap gap-1.5">
              {ticket.stack.map((s) => (
                <span key={s} className="text-xs bg-white/5 border border-white/10 text-slate-300 px-2 py-0.5 rounded">
                  {s}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="mt-4">
          <p className="text-xs font-medium text-slate-400 mb-2 uppercase tracking-wider">Labels</p>
          <div className="flex flex-wrap gap-1.5">
            {ticket.labels.map((label) => (
              <span key={label} className={`text-xs px-2 py-0.5 rounded border font-medium ${labelColors[label]}`}>
                {label}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3 mt-6 pt-4 border-t border-white/10">
          {ticket.github && (
            <a
              href={ticket.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
            >
              <GitBranch className="w-4 h-4" />
              View on GitHub
            </a>
          )}
          {ticket.url && (
            <a
              href={ticket.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Live Site
            </a>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
