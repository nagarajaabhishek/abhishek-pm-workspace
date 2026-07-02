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

export const canvasProjects: CanvasProject[] = githubRepositories
  .filter((r) => r.featured)
  .map((r, i) => {
    const angles = [-Math.PI / 2, -Math.PI / 6, Math.PI / 6, Math.PI / 2, (5 * Math.PI) / 6];
    const radius = 320;
    const angle = angles[i % angles.length];
    return {
      id: r.id,
      name: r.name,
      description: r.description,
      status: r.status,
      stack: r.stack,
      link: r.github,
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
    };
  });

export const canvasStickies: CanvasSticky[] = impactMetrics.map((m, i) => ({
  id: m.id,
  value: m.value,
  label: m.label,
  color: (["brand", "purple", "green"] as const)[i % 3],
  x: -420 + i * 180,
  y: 280,
}));

export const canvasSecondaryProjects: CanvasProject[] = githubRepositories
  .filter((r) => !r.featured && (r.status === "Shipped" || r.priority === "P2"))
  .slice(0, 4)
  .map((r, i) => ({
    id: r.id,
    name: r.name,
    description: r.description,
    status: r.status,
    stack: r.stack,
    link: r.github,
    x: -200 + i * 140,
    y: -280,
  }));
