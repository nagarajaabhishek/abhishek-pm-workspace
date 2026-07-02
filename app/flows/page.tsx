import type { Metadata } from "next";
import FlowsView from "@/components/flows/FlowsView";

export const metadata: Metadata = { title: "Flows — Abhishek Nagaraja" };

export default function FlowsPage() {
  return (
    <div className="h-full w-full">
      <FlowsView />
    </div>
  );
}
