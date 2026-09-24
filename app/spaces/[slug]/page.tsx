import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SpacesContent from "@/components/spaces/SpacesContent";
import { SPACE_PAGES, getSpacePage } from "@/data/spacesData";

export function generateStaticParams() {
  return SPACE_PAGES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getSpacePage(slug);
  if (!page) return { title: "Spaces — Abhishek Nagaraja" };
  return { title: `${page.title} — Spaces` };
}

export default async function SpacesSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getSpacePage(slug);
  if (!page) notFound();

  return <SpacesContent slug={slug} />;
}
