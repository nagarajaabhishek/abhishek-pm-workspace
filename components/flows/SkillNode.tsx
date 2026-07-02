"use client";

import { memo } from "react";
import { Handle, Position, type NodeProps } from "@xyflow/react";

export interface SkillNodeData {
  name: string;
  category: string;
  level: number;
  tags: string[];
}

function SkillNode({ data }: NodeProps & { data: SkillNodeData }) {
  return (
    <div className="w-48 rounded-xl p-3 shadow-md border border-white/10"
      style={{ background: "linear-gradient(145deg, hsl(0 0% 12%) 0%, hsl(0 0% 9%) 100%)" }}>
      <Handle type="target" position={Position.Top} className="!bg-brand/50 !w-2 !h-2 !border-0" />
      <Handle type="source" position={Position.Bottom} className="!bg-brand/50 !w-2 !h-2 !border-0" />
      <div className="flex items-center justify-between mb-1">
        <p className="text-xs font-bold text-white" style={{ fontFamily: "var(--font-montserrat)" }}>{data.name}</p>
        <div className="flex gap-0.5">
          {[1, 2, 3, 4, 5].map((n) => (
            <span key={n} className={`w-1 h-1 rounded-full ${n <= data.level ? "bg-brand" : "bg-white/10"}`} />
          ))}
        </div>
      </div>
      <p className="text-[9px] text-white/30 mb-2">{data.category}</p>
      <div className="flex flex-wrap gap-1">
        {data.tags.slice(0, 3).map((t) => (
          <span key={t} className="text-[8px] px-1 py-0.5 rounded bg-white/5 text-white/35">{t}</span>
        ))}
      </div>
    </div>
  );
}

export default memo(SkillNode);
