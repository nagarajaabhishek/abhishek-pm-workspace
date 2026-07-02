import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DocsContent from "@/components/docs/DocsContent";
import { DOC_PAGES, getDocPage } from "@/data/docsData";

export function generateStaticParams() {
  return DOC_PAGES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getDocPage(slug);
  if (!page) return { title: "Docs — Abhishek Nagaraja" };
  return { title: `${page.title} — Docs` };
}

export default async function DocsSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getDocPage(slug);
  if (!page) notFound();

  return <DocsContent slug={slug} />;
}
