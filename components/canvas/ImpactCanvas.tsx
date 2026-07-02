"use client";

import { useCallback, useMemo } from "react";
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  type Node,
  type Edge,
  type NodeTypes,
  BackgroundVariant,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import ProjectNode from "./ProjectNode";
import StickyNode from "./StickyNode";
import HubNode from "./HubNode";
import { canvasHub, canvasProjects, canvasStickies, canvasSecondaryProjects } from "@/data/canvasData";

const nodeTypes: NodeTypes = {
  project: ProjectNode,
  sticky: StickyNode,
  hub: HubNode,
};

function buildInitialGraph(): { nodes: Node[]; edges: Edge[] } {
  const nodes: Node[] = [
    {
      id: canvasHub.id,
      type: "hub",
      position: { x: canvasHub.x, y: canvasHub.y },
      data: { label: canvasHub.label, subtitle: canvasHub.subtitle },
    },
    ...canvasProjects.map((p) => ({
      id: p.id,
      type: "project" as const,
      position: { x: p.x, y: p.y },
      data: { name: p.name, description: p.description, status: p.status, stack: p.stack, link: p.link },
    })),
    ...canvasSecondaryProjects.map((p) => ({
      id: p.id,
      type: "project" as const,
      position: { x: p.x, y: p.y },
      data: { name: p.name, description: p.description, status: p.status, stack: p.stack, link: p.link },
    })),
    ...canvasStickies.map((s) => ({
      id: s.id,
      type: "sticky" as const,
      position: { x: s.x, y: s.y },
      data: { value: s.value, label: s.label, color: s.color },
    })),
  ];

  const edges: Edge[] = [
    ...canvasProjects.map((p) => ({
      id: `hub-${p.id}`,
      source: canvasHub.id,
      target: p.id,
      style: { stroke: "hsl(14 100% 60% / 0.25)", strokeWidth: 1.5 },
    })),
    ...canvasSecondaryProjects.map((p) => ({
      id: `hub-${p.id}`,
      source: canvasHub.id,
      target: p.id,
      style: { stroke: "rgba(255,255,255,0.08)", strokeWidth: 1 },
    })),
  ];

  return { nodes, edges };
}

export default function ImpactCanvas() {
  const { nodes: initialNodes, edges: initialEdges } = useMemo(buildInitialGraph, []);
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div className="w-full h-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.3 }}
        minZoom={0.2}
        maxZoom={2}
        proOptions={{ hideAttribution: true }}
        className="bg-background"
      >
        <Background variant={BackgroundVariant.Dots} gap={20} size={1} color="rgba(255,255,255,0.06)" />
        <Controls className="!bg-card !border-border !shadow-lg [&>button]:!bg-card [&>button]:!border-border [&>button]:!text-white/60 [&>button:hover]:!bg-white/10" />
        <MiniMap
          className="!bg-card !border-border"
          nodeColor={() => "hsl(14 100% 60% / 0.5)"}
          maskColor="rgba(0,0,0,0.6)"
        />
      </ReactFlow>
    </div>
  );
}
