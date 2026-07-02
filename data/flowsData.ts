import { companies, startups, education, skills } from "./portfolioData";

export interface CareerNode {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  type: "work" | "startup" | "education";
  x: number;
  y: number;
}

export interface SkillFlowNode {
  id: string;
  name: string;
  category: string;
  level: number;
  tags: string[];
  x: number;
  y: number;
}

export const careerNodes: CareerNode[] = [
  ...education.map((e, i) => ({
    id: e.id,
    title: e.university,
    subtitle: e.degree,
    period: e.location,
    type: "education" as const,
    x: i * 280,
    y: 0,
  })),
  ...companies.map((c, i) => ({
    id: c.id,
    title: c.name,
    subtitle: c.role,
    period: c.period,
    type: "work" as const,
    x: (i + 2) * 280,
    y: 120,
  })),
  ...startups.slice(0, 3).map((s, i) => ({
    id: s.id,
    title: s.name,
    subtitle: s.description,
    period: "Founder",
    type: "startup" as const,
    x: (i + 5) * 280,
    y: -120,
  })),
];

export const careerEdges = careerNodes.slice(0, -1).map((n, i) => ({
  id: `e-${n.id}-${careerNodes[i + 1].id}`,
  source: n.id,
  target: careerNodes[i + 1].id,
}));

export const skillFlowNodes: SkillFlowNode[] = skills.map((s, i) => {
  const col = i % 3;
  const row = Math.floor(i / 3);
  return {
    id: s.id,
    name: s.name,
    category: s.category,
    level: s.level,
    tags: s.tags,
    x: col * 260,
    y: row * 160,
  };
});

export const skillCategoryHubs = [
  { id: "hub-product", label: "Product", x: 130, y: -100 },
  { id: "hub-ai", label: "AI", x: 390, y: -100 },
  { id: "hub-soft", label: "Soft Skills", x: 650, y: -100 },
];
