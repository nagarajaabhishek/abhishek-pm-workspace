"use client";

import { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { allTickets, columns, type Label, type Status, type TicketCard as TicketCardType } from "@/data/boardData";
import TicketCard from "./TicketCard";
import TicketModal from "./TicketModal";
import BoardFilters from "./BoardFilters";

export default function KanbanBoard() {
  const [activeLabels, setActiveLabels] = useState<Label[]>([]);
  const [selected, setSelected] = useState<TicketCardType | null>(null);
  const [tickets, setTickets] = useState<TicketCardType[]>(allTickets);
  const [draggingId, setDraggingId] = useState<string | null>(null);
  const [overCol, setOverCol] = useState<Status | null>(null);
  const dragTicket = useRef<TicketCardType | null>(null);
  const mouseDownPos = useRef<{ x: number; y: number } | null>(null);

  const toggleLabel = (label: Label) => {
    setActiveLabels((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]
    );
  };

  const filtered = activeLabels.length
    ? tickets.filter((t) => t.labels.some((l) => activeLabels.includes(l)))
    : tickets;

  const onDragStart = (ticket: TicketCardType) => {
    dragTicket.current = ticket;
    setDraggingId(ticket.id);
  };

  const onDragEnd = () => {
    if (dragTicket.current && overCol && dragTicket.current.status !== overCol) {
      const id = dragTicket.current.id;
      setTickets((prev) => prev.map((t) => t.id === id ? { ...t, status: overCol } : t));
    }
    setDraggingId(null);
    setOverCol(null);
    dragTicket.current = null;
  };

  const onDragOver = (e: React.DragEvent, colId: Status) => {
    e.preventDefault();
    setOverCol(colId);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="px-6 py-3 border-b border-border bg-background">
        <BoardFilters
          activeLabels={activeLabels}
          onToggleLabel={toggleLabel}
          onClear={() => setActiveLabels([])}
        />
      </div>

      {/* Desktop: draggable Kanban columns */}
      <div className="hidden md:flex flex-1 overflow-x-auto gap-4 p-6 items-start">
        {columns.map((col) => {
          const colTickets = filtered.filter((t) => t.status === col.id);
          const isOver = overCol === col.id;
          return (
            <div
              key={col.id}
              className="flex flex-col w-72 shrink-0"
              onDragOver={(e) => onDragOver(e, col.id)}
              onDragLeave={() => setOverCol((prev) => (prev === col.id ? null : prev))}
              onDrop={onDragEnd}
            >
              <div className={`flex items-center gap-2 mb-3 px-1 py-1 rounded-lg transition-colors ${isOver ? "bg-brand/5" : ""}`}>
                <span className="text-base">{col.emoji}</span>
                <span className="text-sm font-medium text-slate-300">{col.label}</span>
                <span className="ml-auto text-xs text-slate-500 bg-white/5 rounded-full px-2 py-0.5">
                  {colTickets.length}
                </span>
              </div>

              <div
                className={`flex flex-col gap-3 min-h-[200px] rounded-xl p-2 transition-all duration-150 ${
                  isOver
                    ? "bg-brand/5 border border-dashed border-brand/30"
                    : "border border-transparent"
                }`}
              >
                <AnimatePresence mode="popLayout">
                  {colTickets.map((ticket) => (
                    <motion.div
                      key={ticket.id}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: draggingId === ticket.id ? 0.35 : 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      draggable
                      onPointerDown={(e) => { mouseDownPos.current = { x: e.clientX, y: e.clientY }; }}
                      onPointerUp={(e) => {
                        const pos = mouseDownPos.current;
                        if (!pos) return;
                        const dist = Math.hypot(e.clientX - pos.x, e.clientY - pos.y);
                        if (dist < 6) setSelected(ticket);
                        mouseDownPos.current = null;
                      }}
                      onDragStart={() => onDragStart(ticket)}
                      onDragEnd={onDragEnd}
                      style={{ cursor: "grab" }}
                    >
                      <TicketCard ticket={ticket} onClick={() => {}} />
                    </motion.div>
                  ))}
                </AnimatePresence>

                {colTickets.length === 0 && (
                  <div
                    className={`border border-dashed rounded-lg flex items-center justify-center h-24 text-xs transition-colors ${
                      isOver ? "border-brand/40 text-brand/40" : "border-white/10 text-slate-600"
                    }`}
                  >
                    {isOver ? "Drop here" : "No tickets"}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile: grouped list (no drag) */}
      <div className="md:hidden flex-1 overflow-y-auto pb-20">
        {columns.map((col) => {
          const colTickets = filtered.filter((t) => t.status === col.id);
          if (colTickets.length === 0) return null;
          return (
            <div key={col.id} className="mb-6">
              <div className="flex items-center gap-2 px-4 py-2 sticky top-0 bg-background border-b border-border">
                <span>{col.emoji}</span>
                <span className="text-sm font-medium text-slate-300">{col.label}</span>
                <span className="ml-auto text-xs text-slate-500">{colTickets.length}</span>
              </div>
              <div className="px-4 pt-3 flex flex-col gap-3">
                {colTickets.map((ticket) => (
                  <TicketCard key={ticket.id} ticket={ticket} onClick={setSelected} />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <TicketModal ticket={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
