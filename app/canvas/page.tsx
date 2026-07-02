import type { Metadata } from "next";
import ImpactCanvas from "@/components/canvas/ImpactCanvas";

export const metadata: Metadata = { title: "Canvas — Abhishek Nagaraja" };

export default function CanvasPage() {
  return (
    <div className="h-full w-full">
      <ImpactCanvas />
    </div>
  );
}
