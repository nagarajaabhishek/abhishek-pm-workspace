import type { Metadata } from "next";
import FeaturedView from "@/components/featured/FeaturedView";

export const metadata: Metadata = {
  title: "Featured — Abhishek Nagaraja",
  description: "Highlighted projects and case studies",
};

export default function FeaturedPage() {
  return <FeaturedView />;
}
