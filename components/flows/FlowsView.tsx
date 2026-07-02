"use client";

import { useState, useMemo } from "react";
import {
  ReactFlow,
  Background,
  Controls,
  useNodesState,
  useEdgesState,
  type Node,
  type Edge,
  type NodeTypes,
  BackgroundVariant,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { cn } from "@/lib/utils";
import CareerNode from "./CareerNode";
import SkillNode from "./SkillNode";
import { careerNodes, careerEdges, skillFlowNodes } from "@/data/flowsData";

const nodeTypes: NodeTypes = {
  career: CareerNode,
  skill: SkillNode,
};

const tabs = [
  { id: "career" as const, label: "Career Timeline", emoji: "📈" },
  { id: "skills" as const, label: "Skills Tree", emoji: "🌳" },
];

function buildCareerFlow(): { nodes: Node[]; edges: Edge[] } {
  return {
    nodes: careerNodes.map((n) => ({
      id: n.id,
      type: "career" as const,
      position: { x: n.x, y: n.y },
      data: { title: n.title, subtitle: n.subtitle, period: n.period, type: n.type },
    })),
    edges: careerEdges.map((e) => ({
      ...e,
      style: { stroke: "rgba(255,255,255,0.15)", strokeWidth: 2 },
      type: "smoothstep",
    })),
  };
}

function buildSkillsFlow(): { nodes: Node[]; edges: Edge[] } {
  const nodes: Node[] = skillFlowNodes.map((n) => ({
    id: n.id,
    type: "skill" as const,
    position: { x: n.x, y: n.y },
    data: { name: n.name, category: n.category, level: n.level, tags: n.tags },
  }));

  // Group by category and connect within each group
  const byCategory: Record<string, string[]> = {};
  skillFlowNodes.forEach((n) => {
    if (!byCategory[n.category]) byCategory[n.category] = [];
    byCategory[n.category].push(n.id);
  });

  const edges: Edge[] = [];
  Object.values(byCategory).forEach((ids) => {
    ids.slice(0, -1).forEach((id, i) => {
      edges.push({
        id: `skill-${id}-${ids[i + 1]}`,
        source: id,
        target: ids[i + 1],
        style: { stroke: "rgba(255,255,255,0.08)", strokeWidth: 1.5 },
        type: "smoothstep",
      });
    });
  });

  return { nodes, edges };
}

function FlowTab({ tab }: { tab: "career" | "skills" }) {
  const { nodes: init, edges: initE } = useMemo(
    () => (tab === "career" ? buildCareerFlow() : buildSkillsFlow()),
    [tab]
  );
  const [nodes, , onNodesChange] = useNodesState(init);
  const [edges, , onEdgesChange] = useEdgesState(initE);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      nodeTypes={nodeTypes}
      fitView
      fitViewOptions={{ padding: 0.25 }}
      minZoom={0.3}
      maxZoom={2}
      proOptions={{ hideAttribution: true }}
      className="bg-background"
    >
      <Background variant={BackgroundVariant.Lines} gap={24} size={1} color="rgba(255,255,255,0.04)" />
      <Controls className="!bg-card !border-border !shadow-lg [&>button]:!bg-card [&>button]:!border-border [&>button]:!text-white/60 [&>button:hover]:!bg-white/10" />
    </ReactFlow>
  );
}

export default function FlowsView() {
  const [activeTab, setActiveTab] = useState<"career" | "skills">("career");

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border shrink-0">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all",
              activeTab === tab.id
                ? "bg-brand/12 text-brand border border-brand/15"
                : "text-white/50 hover:text-white/80 hover:bg-white/5"
            )}
          >
            <span>{tab.emoji}</span>
            {tab.label}
          </button>
        ))}
      </div>

      <div className="flex-1 min-h-0">
        <FlowTab key={activeTab} tab={activeTab} />
      </div>
    </div>
  );
}
