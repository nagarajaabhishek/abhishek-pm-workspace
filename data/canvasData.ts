import { personalInfo, githubRepositories, impactMetrics } from "./portfolioData";

export interface CanvasProject {
  id: string;
  name: string;
  description: string;
  status: string;
  stack: string[];
  link?: string;
  x: number;
  y: number;
}

export interface CanvasSticky {
  id: string;
  value: string;
  label: string;
  color: "brand" | "purple" | "green";
  x: number;
  y: number;
}

export const canvasHub = {
  id: "hub",
  label: personalInfo.name,
  subtitle: personalInfo.tagline,
  x: 0,
  y: 0,
};

const projectPositions: Record<string, { x: number; y: number }> = {
  "splitwiser": { x: -380, y: -120 },
  catms: { x: -380, y: 160 },
  thara: { x: -80, y: -240 },
  "product-pal": { x: 180, y: -240 },
  workthere: { x: 420, y: -220 },
  "logos-tax": { x: 420, y: 160 },
};

export const canvasProjects: CanvasProject[] = githubRepositories
  .filter((r) => r.id in projectPositions)
  .map((r) => ({
    id: r.id,
    name: r.name,
    description: r.description,
    status: r.status,
    stack: r.stack,
    link: r.github,
    x: projectPositions[r.id].x,
    y: projectPositions[r.id].y,
  }));

export const canvasStickies: CanvasSticky[] = impactMetrics.map((m, i) => {
  const stickyPositions = [
    { x: -250, y: 380 },
    { x: -50, y: 380 },
    { x: 150, y: 380 },
  ];
  return {
    id: m.id,
    value: m.value,
    label: m.label,
    color: (["brand", "purple", "green"] as const)[i % 3],
    x: stickyPositions[i % 3].x,
    y: stickyPositions[i % 3].y,
  };
});

export const canvasSecondaryProjects: CanvasProject[] = [];
