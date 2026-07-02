"use client";

import { X } from "lucide-react";
import type { Label, Status } from "@/data/boardData";
import { allLabels, labelColors } from "@/data/boardData";

interface Props {
  activeLabels: Label[];
  onToggleLabel: (label: Label) => void;
  onClear: () => void;
}

export default function BoardFilters({ activeLabels, onToggleLabel, onClear }: Props) {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-xs text-muted-foreground">Filter:</span>
      {allLabels.map((label) => (
        <button
          key={label}
          onClick={() => onToggleLabel(label)}
          className={`text-xs px-2 py-1 rounded border font-medium transition-all ${
            activeLabels.includes(label)
              ? labelColors[label] + " ring-1 ring-current"
              : "bg-muted border-border text-muted-foreground hover:text-foreground"
          }`}
        >
          {label}
        </button>
      ))}
      {activeLabels.length > 0 && (
        <button
          onClick={onClear}
          className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors ml-1"
        >
          <X className="w-3 h-3" /> Clear
        </button>
      )}
    </div>
  );
}
