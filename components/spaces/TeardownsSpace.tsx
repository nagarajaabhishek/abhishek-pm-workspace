import { Puzzle, ArrowUpRight } from "lucide-react";
import { productTeardowns } from "@/data/portfolioData";

const teardownDetails = [
  {
    id: "coc",
    title: "Clash of Clans",
    category: "Mobile Gaming",
    date: "2024",
    summary: "Deep dive into CoC's retention loops, clan mechanics, and monetization — how Supercell engineered 10+ years of daily active use.",
    tags: ["Retention", "Monetization", "Social Loop", "Mobile"],
    insight: "The clan system is the product. Without social obligation, CoC is just a builder game.",
  },
  {
    id: "gmaps",
    title: "Google Maps",
    category: "Navigation",
    date: "2024",
    summary: "How Maps evolved from navigation to a local discovery platform — and why the review ecosystem is their true moat.",
    tags: ["Platform", "Network Effects", "Discovery", "B2B2C"],
    insight: "Google Maps isn't a map. It's a local intent engine with navigation as the hook.",
  },
  {
    id: "splitwise",
    title: "Splitwise",
    category: "Expense Sharing",
    date: "2024",
    summary: "Analyzing Splitwise's viral group dynamics, trust-based monetization, and why they resisted feature bloat for a decade.",
    tags: ["Viral Growth", "Trust", "Freemium", "Social Finance"],
    insight: "Splitwise's power is in the awkward conversation it replaces — not the math.",
  },
];

export default function TeardownsSpace() {
  return (
    <div className="p-6 max-w-2xl">
      <div className="mb-6">
        <h2 className="text-lg font-bold text-white mb-1" style={{ fontFamily: 'var(--font-montserrat)' }}>Product Teardowns</h2>
        <p className="text-sm text-white/40">Structured analyses of products I admire — retention loops, monetization, and the decisions behind the design.</p>
      </div>

      <div className="flex flex-col gap-4">
        {teardownDetails.map((t) => (
          <div key={t.id} className="rounded-xl p-4 group"
            style={{ background: "linear-gradient(145deg, hsl(0 0% 10%) 0%, hsl(0 0% 8%) 100%)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-brand/12 border border-brand/15 flex items-center justify-center shrink-0">
                  <Puzzle className="w-4 h-4 text-brand" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white" style={{ fontFamily: 'var(--font-montserrat)' }}>{t.title}</h3>
                  <p className="text-[11px] text-white/35">{t.category} · {t.date}</p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-brand transition-colors shrink-0" />
            </div>

            <p className="text-xs text-white/40 mb-3 leading-relaxed">{t.summary}</p>

            {/* Key insight callout */}
            <div className="rounded-lg px-3 py-2 mb-3 border-l-2 border-brand/40"
              style={{ background: "hsl(14 100% 60% / 0.05)" }}>
              <p className="text-[11px] text-brand/80 italic">&ldquo;{t.insight}&rdquo;</p>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {t.tags.map((tag) => (
                <span key={tag} className="text-[10px] px-1.5 py-0.5 rounded-md bg-white/5 border border-white/8 text-white/40">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
