import type { Metadata } from "next";
import GalleryView from "@/components/gallery/GalleryView";

export const metadata: Metadata = {
  title: "Gallery — Abhishek Nagaraja",
  description: "Visual timeline and life in pictures",
};

export default function GalleryPage() {
  return <GalleryView />;
}
