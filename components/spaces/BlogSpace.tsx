import { Clock, ArrowUpRight } from "lucide-react";
import { blogPosts } from "@/data/portfolioData";

const categoryColors: Record<string, string> = {
  Personal: "bg-purple-500/15 text-purple-300 border-purple-500/20",
  AI: "bg-brand/15 text-brand border-brand/20",
  Community: "bg-green-500/15 text-green-300 border-green-500/20",
  Insights: "bg-blue-500/15 text-blue-300 border-blue-500/20",
};

export default function BlogSpace() {
  return (
    <div className="p-6 max-w-2xl">
      <div className="mb-6">
        <h2 className="text-lg font-bold text-white mb-1" style={{ fontFamily: 'var(--font-montserrat)' }}>Blog</h2>
        <p className="text-sm text-white/40">Thoughts on AI, product, communities, and the craft of building.</p>
      </div>

      <div className="flex flex-col gap-3">
        {blogPosts.map((post) => (
          <div key={post.id} className="rounded-xl p-4 group cursor-pointer hover:border-brand/20 transition-all"
            style={{ background: "linear-gradient(145deg, hsl(0 0% 10%) 0%, hsl(0 0% 8%) 100%)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className={`text-[10px] px-2 py-0.5 rounded-md border font-medium ${categoryColors[post.category] ?? "bg-white/5 text-white/40 border-white/10"}`}>
                    {post.category}
                  </span>
                  <span className="text-[10px] text-white/25">{post.date}</span>
                </div>
                <h3 className="text-sm font-semibold text-white mb-1 group-hover:text-brand transition-colors leading-snug"
                  style={{ fontFamily: 'var(--font-montserrat)' }}>
                  {post.title}
                </h3>
                <p className="text-xs text-white/40 leading-relaxed">{post.excerpt}</p>
              </div>
              <div className="shrink-0 flex flex-col items-end gap-2">
                <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-brand transition-colors" />
                <div className="flex items-center gap-1 text-[10px] text-white/25">
                  <Clock className="w-3 h-3" /> {post.readTime}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
