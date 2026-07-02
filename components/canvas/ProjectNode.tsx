"use client";

import { memo } from "react";
import { Handle, Position, type NodeProps } from "@xyflow/react";
import { ExternalLink } from "lucide-react";

export interface ProjectNodeData {
  name: string;
  description: string;
  status: string;
  stack: string[];
  link?: string;
}

function ProjectNode({ data }: NodeProps & { data: ProjectNodeData }) {
  return (
    <div className="w-52 rounded-xl p-3 shadow-lg"
      style={{ background: "linear-gradient(145deg, hsl(0 0% 12%) 0%, hsl(0 0% 9%) 100%)", border: "1px solid rgba(255,255,255,0.1)" }}>
      <Handle type="target" position={Position.Top} className="!bg-brand !w-2 !h-2 !border-0" />
      <div className="flex items-start justify-between gap-2 mb-2">
        <p className="text-xs font-bold text-white leading-tight" style={{ fontFamily: "var(--font-montserrat)" }}>{data.name}</p>
        {data.link && (
          <a href={data.link} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
            <ExternalLink className="w-3 h-3 text-white/25 hover:text-brand" />
          </a>
        )}
      </div>
      <p className="text-[10px] text-white/40 leading-relaxed line-clamp-2 mb-2">{data.description}</p>
      <div className="flex items-center justify-between">
        <span className={`text-[9px] px-1.5 py-0.5 rounded-md font-medium ${
          data.status === "Shipped" ? "bg-green-500/15 text-green-400" : "bg-brand/15 text-brand"
        }`}>{data.status}</span>
        <div className="flex gap-0.5">
          {data.stack.slice(0, 2).map((t) => (
            <span key={t} className="text-[8px] px-1 py-0.5 rounded bg-white/5 text-white/30">{t}</span>
          ))}
        </div>
      </div>
      <Handle type="source" position={Position.Bottom} className="!bg-brand !w-2 !h-2 !border-0" />
    </div>
  );
}

export default memo(ProjectNode);
