import { Puzzle } from "lucide-react";
import DocsPageHeader from "@/components/docs/DocsPageHeader";
import { getDocPage, teardownDocs } from "@/data/docsData";

export default function TeardownsDocPage() {
  const page = getDocPage("teardowns")!;

  return (
    <div>
      <DocsPageHeader page={page} />

      <p className="text-sm text-white/50 mb-6 leading-relaxed">
        Structured analyses of products I admire — retention loops, monetization strategies,
        and the product decisions behind the design. Each teardown ends with a key insight.
      </p>

      <div className="flex flex-col gap-5">
        {teardownDocs.map((t) => (
          <article key={t.id} className="rounded-xl p-5"
            style={{ background: "linear-gradient(145deg, hsl(0 0% 10%) 0%, hsl(0 0% 8%) 100%)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-xl bg-brand/12 border border-brand/15 flex items-center justify-center shrink-0">
                <Puzzle className="w-4 h-4 text-brand" />
              </div>
              <div>
                <h2 className="text-base font-bold text-white" style={{ fontFamily: "var(--font-montserrat)" }}>{t.title}</h2>
                <p className="text-xs text-white/35">{t.category} · {t.date}</p>
              </div>
            </div>

            <p className="text-sm text-white/50 leading-relaxed mb-4">{t.summary}</p>

            <div className="rounded-lg px-4 py-3 mb-4 border-l-2 border-brand/40"
              style={{ background: "hsl(14 100% 60% / 0.05)" }}>
              <p className="text-[11px] text-brand/30 uppercase tracking-widest mb-1 font-bold">Key Insight</p>
              <p className="text-sm text-brand/80 italic">&ldquo;{t.insight}&rdquo;</p>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {t.tags.map((tag) => (
                <span key={tag} className="text-[10px] px-1.5 py-0.5 rounded-md bg-white/5 border border-white/8 text-white/40">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
