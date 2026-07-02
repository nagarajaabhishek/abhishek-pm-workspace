import { githubRepositories, portfolioWebsites } from "./portfolioData";

export type Priority = "P1" | "P2" | "P3" | "P4";
export type Status = "Concept" | "Building" | "Shipped" | "Archive";
export type Label = "AI" | "Mobile" | "Web" | "Freelance" | "Open Source" | "Backend" | "Python" | "React Native" | "FinTech";

export interface TicketCard {
  id: string;
  key: string;
  title: string;
  description: string;
  status: Status;
  labels: Label[];
  priority: Priority;
  stack: string[];
  github?: string;
  url?: string;
}

function toTickets(
  items: Array<{ id: string; name: string; description: string; status: Status; labels: string[]; priority: Priority; stack?: string[]; github?: string; url?: string }>,
  prefix: string
): TicketCard[] {
  return items.map((item, i) => ({
    id: item.id,
    key: `${prefix}-${String(i + 1).padStart(3, "0")}`,
    title: item.name,
    description: item.description,
    status: item.status,
    labels: item.labels as Label[],
    priority: item.priority,
    stack: item.stack ?? [],
    github: item.github,
    url: item.url,
  }));
}

export const allTickets: TicketCard[] = [
  ...toTickets(githubRepositories as any, "APN"),
  ...toTickets(portfolioWebsites as any, "APN"),
];

export const columns: { id: Status; label: string; emoji: string }[] = [
  { id: "Concept", label: "Concept", emoji: "💡" },
  { id: "Building", label: "Building", emoji: "🔨" },
  { id: "Shipped", label: "Shipped", emoji: "✅" },
  { id: "Archive", label: "Archive", emoji: "🗂️" },
];

export const allLabels: Label[] = ["AI", "Mobile", "Web", "Freelance", "Open Source", "Backend", "Python", "React Native", "FinTech"];

export const priorityColors: Record<Priority, string> = {
  P1: "text-red-400",
  P2: "text-orange-400",
  P3: "text-yellow-400",
  P4: "text-slate-400",
};

export const labelColors: Record<Label, string> = {
  AI: "bg-violet-500/20 text-violet-300 border-violet-500/30",
  Mobile: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  Web: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
  Freelance: "bg-green-500/20 text-green-300 border-green-500/30",
  "Open Source": "bg-orange-500/20 text-orange-300 border-orange-500/30",
  Backend: "bg-rose-500/20 text-rose-300 border-rose-500/30",
  Python: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
  "React Native": "bg-sky-500/20 text-sky-300 border-sky-500/30",
  FinTech: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
};
