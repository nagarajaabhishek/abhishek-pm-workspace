"use client";

import { memo } from "react";
import { Handle, Position, type NodeProps } from "@xyflow/react";

export interface CareerNodeData {
  title: string;
  subtitle: string;
  period: string;
  type: "work" | "startup" | "education";
}

const typeStyles = {
  work: { border: "border-brand/30", dot: "bg-brand" },
  startup: { border: "border-purple-500/30", dot: "bg-purple-400" },
  education: { border: "border-blue-500/30", dot: "bg-blue-400" },
};

function CareerNode({ data }: NodeProps & { data: CareerNodeData }) {
  const s = typeStyles[data.type];
  return (
    <div className={`w-56 rounded-xl p-3 shadow-md border ${s.border}`}
      style={{ background: "linear-gradient(145deg, hsl(0 0% 12%) 0%, hsl(0 0% 9%) 100%)" }}>
      <Handle type="target" position={Position.Left} className="!bg-white/30 !w-2 !h-2 !border-0" />
      <Handle type="source" position={Position.Right} className="!bg-white/30 !w-2 !h-2 !border-0" />
      <div className="flex items-center gap-2 mb-1.5">
        <span className={`w-2 h-2 rounded-full ${s.dot}`} />
        <span className="text-[9px] text-white/30 uppercase tracking-widest">{data.type}</span>
      </div>
      <p className="text-xs font-bold text-white leading-tight" style={{ fontFamily: "var(--font-montserrat)" }}>{data.title}</p>
      <p className="text-[10px] text-white/50 mt-1 leading-snug line-clamp-2">{data.subtitle}</p>
      <p className="text-[9px] text-white/25 mt-1.5">{data.period}</p>
    </div>
  );
}

export default memo(CareerNode);
