import { Clock } from "lucide-react";
import { blogPosts } from "@/data/portfolioData";
import SpacesPageHeader from "@/components/spaces/SpacesPageHeader";
import { getSpacePage } from "@/data/spacesData";

const categoryColors: Record<string, string> = {
  Personal: "bg-purple-500/15 text-purple-300 border-purple-500/20",
  AI: "bg-brand/15 text-brand border-brand/20",
  Community: "bg-green-500/15 text-green-300 border-green-500/20",
  Insights: "bg-blue-500/15 text-blue-300 border-blue-500/20",
};

const chessExcerpt = `Chess has always been more than just a game to me. It's a mental gymnasium — a training ground where every move is a decision, every decision carries consequences, and every game teaches something new about strategy, patience, and intuition.

Experienced players develop pattern recognition. Grandmasters don't calculate millions of moves ahead — they recognize patterns from thousands of games. In our careers, we accumulate experiences and develop mental models that help us navigate complex situations.

Time pressure in chess forces you to balance thorough analysis with decisive action. The key lesson: better a good decision made quickly than a perfect decision made too late.`;

export default function BlogDocPage() {
  const page = getSpacePage("blog")!;

  return (
    <div>
      <SpacesPageHeader page={page} />

      <p className="text-sm text-white/50 mb-6 leading-relaxed">
        Thoughts on AI, product management, communities, and the craft of building.
      </p>

      <div className="flex flex-col gap-6">
        {blogPosts.map((post, i) => (
          <article key={post.id} className="rounded-xl p-5"
            style={{ background: "linear-gradient(145deg, hsl(0 0% 10%) 0%, hsl(0 0% 8%) 100%)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <div className="flex items-center gap-2 mb-3 flex-wrap">
              <span className={`text-[10px] px-2 py-0.5 rounded-md border font-medium ${categoryColors[post.category] ?? "bg-white/5 text-white/40 border-white/10"}`}>
                {post.category}
              </span>
              <span className="text-[10px] text-white/25">{post.date}</span>
              <span className="flex items-center gap-1 text-[10px] text-white/25 ml-auto">
                <Clock className="w-3 h-3" /> {post.readTime}
              </span>
            </div>

            <h2 className="text-base font-bold text-white mb-2" style={{ fontFamily: "var(--font-montserrat)" }}>
              {post.title}
            </h2>
            <p className="text-sm text-white/50 leading-relaxed mb-3">{post.excerpt}</p>

            {i === 0 && (
              <div className="mt-4 pt-4 border-t border-white/8">
                <p className="text-xs text-white/40 leading-relaxed whitespace-pre-line">{chessExcerpt}</p>
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
