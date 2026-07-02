"use client";

import { memo } from "react";
import { Handle, Position, type NodeProps } from "@xyflow/react";

export interface StickyNodeData {
  value: string;
  label: string;
  color: "brand" | "purple" | "green";
}

const colorMap = {
  brand: { bg: "hsl(14 100% 60% / 0.12)", border: "hsl(14 100% 60% / 0.3)", text: "hsl(14 100% 60%)" },
  purple: { bg: "hsl(280 35% 70% / 0.12)", border: "hsl(280 35% 70% / 0.3)", text: "hsl(280 35% 70%)" },
  green: { bg: "hsl(142 70% 45% / 0.12)", border: "hsl(142 70% 45% / 0.3)", text: "hsl(142 70% 45%)" },
};

function StickyNode({ data }: NodeProps & { data: StickyNodeData }) {
  const c = colorMap[data.color];
  return (
    <div className="w-36 rounded-lg p-3 shadow-md rotate-[-2deg]"
      style={{ background: c.bg, border: `1px solid ${c.border}` }}>
      <Handle type="target" position={Position.Top} className="!opacity-0 !w-1 !h-1" />
      <p className="text-lg font-bold" style={{ color: c.text, fontFamily: "var(--font-montserrat)" }}>{data.value}</p>
      <p className="text-[10px] text-white/50 mt-0.5 leading-tight">{data.label}</p>
    </div>
  );
}

export default memo(StickyNode);
