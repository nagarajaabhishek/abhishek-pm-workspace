"use client";

import { memo } from "react";
import { Handle, Position, type NodeProps } from "@xyflow/react";
import { personalInfo } from "@/data/portfolioData";

function HubNode({ data }: NodeProps & { data: { label: string; subtitle: string } }) {
  return (
    <div className="w-44 rounded-2xl p-4 text-center shadow-xl"
      style={{ background: "linear-gradient(145deg, hsl(14 100% 60% / 0.15) 0%, hsl(280 35% 70% / 0.10) 100%)", border: "2px solid hsl(14 100% 60% / 0.3)" }}>
      <Handle type="source" position={Position.Bottom} className="!bg-brand !w-2 !h-2 !border-0" />
      <Handle type="source" position={Position.Top} className="!bg-brand !w-2 !h-2 !border-0" />
      <Handle type="source" position={Position.Left} className="!bg-brand !w-2 !h-2 !border-0" />
      <Handle type="source" position={Position.Right} className="!bg-brand !w-2 !h-2 !border-0" />
      <p className="text-sm font-bold text-white" style={{ fontFamily: "var(--font-montserrat)" }}>{data.label}</p>
      <p className="text-[10px] text-brand/80 mt-1 leading-tight">{data.subtitle}</p>
      <p className="text-[9px] text-white/30 mt-2">{personalInfo.mission}</p>
    </div>
  );
}

export default memo(HubNode);
