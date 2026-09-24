import type { Metadata } from "next";
import { getBlogPostBySlug } from "@/data/blogData";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog Post — Abhishek Nagaraja",
};

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = getBlogPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="h-full overflow-y-auto no-scrollbar p-6">
      <div className="max-w-2xl mx-auto py-10">
        <Link href="/blog" className="inline-flex items-center gap-2 text-xs text-white/50 hover:text-brand mb-8 transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Blog
        </Link>
        <header className="mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map(tag => (
              <span key={tag} className="px-2 py-0.5 bg-brand/10 text-brand rounded-full text-[10px] font-medium border border-brand/20">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl font-bold text-white tracking-tight mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>{post.title}</h1>
          <div className="flex items-center gap-2 text-xs text-white/40">
            <Calendar className="w-3.5 h-3.5" />
            <time>{post.date}</time>
          </div>
        </header>

        <div className="prose prose-invert prose-p:text-white/70 prose-headings:text-white max-w-none">
          {/* Extremely basic markdown rendering for the dummy data */}
          {post.content.split('\\n\\n').map((paragraph, i) => {
            if (paragraph.startsWith('# ')) {
              return <h1 key={i} className="text-2xl font-bold mb-4 mt-8">{paragraph.replace('# ', '')}</h1>;
            }
            if (paragraph.startsWith('## ')) {
              return <h2 key={i} className="text-xl font-bold mb-4 mt-6">{paragraph.replace('## ', '')}</h2>;
            }
            if (paragraph.startsWith('- ')) {
              return <li key={i} className="ml-4 mb-2">{paragraph.replace('- ', '')}</li>;
            }
            return <p key={i} className="mb-4 leading-relaxed">{paragraph}</p>;
          })}
        </div>
      </div>
    </div>
  );
}
