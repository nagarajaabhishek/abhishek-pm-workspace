import type { Metadata } from "next";
import { Suspense } from "react";
import SpacesContent from "./SpacesContent";

export const metadata: Metadata = { title: "Spaces — Abhishek Nagaraja" };

export default function SpacesPage() {
  return (
    <Suspense fallback={null}>
      <SpacesContent />
    </Suspense>
  );
}
