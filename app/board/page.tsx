import type { Metadata } from "next";
import KanbanBoard from "@/components/board/KanbanBoard";

export const metadata: Metadata = {
  title: "Board — Abhishek Nagaraja",
  description: "Browse projects as Jira-style Kanban tickets",
};

export default function BoardPage() {
  return <KanbanBoard />;
}
