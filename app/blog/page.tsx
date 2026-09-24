import type { Metadata } from "next";
import BlogList from "@/components/blog/BlogList";

export const metadata: Metadata = {
  title: "Blog — Abhishek Nagaraja",
  description: "Thoughts on AI, Product Management, and Development",
};

export default function BlogPage() {
  return <BlogList />;
}
