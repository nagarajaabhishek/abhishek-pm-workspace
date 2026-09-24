import { ExternalLink } from "lucide-react";
import SpacesPageHeader from "@/components/spaces/SpacesPageHeader";
import { caseStudies, getSpacePage } from "@/data/spacesData";

export default function CaseStudiesDoc() {
  const page = getSpacePage("case-studies")!;

  return (
    <div>
      <SpacesPageHeader page={page} />

      <p className="text-sm text-white/50 mb-6 leading-relaxed">
        Deep dives into products and initiatives I&apos;ve built — from 0→1 startups to shipped AI products.
        Each case study covers problem, approach, execution, and measurable impact.
      </p>

      <div className="flex flex-col gap-4">
        {caseStudies.map((cs) => (
          <article key={cs.id} className="rounded-xl p-5 group"
            style={{ background: "linear-gradient(145deg, hsl(0 0% 10%) 0%, hsl(0 0% 8%) 100%)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <div className="flex items-start justify-between gap-3 mb-3">
              <div>
                <h2 className="text-base font-bold text-white group-hover:text-brand transition-colors" style={{ fontFamily: "var(--font-montserrat)" }}>
                  {cs.title}
                </h2>
                <p className="text-xs text-brand/80 mt-0.5">{cs.role} · {cs.period}</p>
              </div>
              <a href={cs.link} target="_blank" rel="noopener noreferrer"
                className="shrink-0 p-1.5 rounded-lg hover:bg-white/5 transition-colors">
                <ExternalLink className="w-4 h-4 text-white/25 group-hover:text-brand transition-colors" />
              </a>
            </div>

            <p className="text-sm text-white/50 leading-relaxed mb-4">{cs.summary}</p>

            <div className="flex flex-wrap gap-2 mb-3">
              {cs.metrics.map((m) => (
                <span key={m} className="text-[10px] px-2 py-0.5 rounded-md bg-brand/10 border border-brand/15 text-brand/90 font-medium">
                  {m}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-1.5">
              {cs.tags.map((tag) => (
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
