import { Users, ExternalLink } from "lucide-react";
import { communities } from "@/data/portfolioData";

const communityDetails = [
  {
    id: "edam-community",
    name: "e-DAM Community",
    description: "EduTech + marketplace platform connecting student vendors and entrepreneurs at UT Arlington. Grew to 15,000+ members.",
    members: "15,000+",
    type: "EduTech · Marketplace",
    status: "active" as const,
    url: "",
  },
  {
    id: "eclub",
    name: "Entrepreneurship Club",
    description: "Student entrepreneurship organization at UTA — hosted pitch competitions, startup workshops, and networking events.",
    members: "500+",
    type: "University · Startup",
    status: "active" as const,
    url: "",
  },
  {
    id: "1mc",
    name: "1 Million Cups Arlington, TX",
    description: "Weekly gathering of entrepreneurs presenting their startups to the community for feedback and connections.",
    members: "Community",
    type: "Networking · Startup",
    status: "active" as const,
    url: "",
  },
  {
    id: "mavmarket",
    name: "MavMarket",
    description: "Campus marketplace for student side hustles. Featured in The Shorthorn newspaper. Helped 100+ student vendors launch.",
    members: "100+ vendors",
    type: "Marketplace · University",
    status: "active" as const,
    url: "https://www.theshorthorn.com/news/mavmarket-encourages-student-side-hustles/article_c79dbec8-fdf7-11ee-881d-cfb81f5b41a0.html",
  },
];

export default function CommunitiesSpace() {
  return (
    <div className="p-6 max-w-2xl">
      <div className="mb-6">
        <h2 className="text-lg font-bold text-white mb-1" style={{ fontFamily: 'var(--font-montserrat)' }}>Communities</h2>
        <p className="text-sm text-white/40">Communities I&apos;ve built and led — from campus marketplaces to startup ecosystems.</p>
      </div>

      <div className="flex flex-col gap-3">
        {communityDetails.map((c) => (
          <div key={c.id} className="rounded-xl p-4 group"
            style={{ background: "linear-gradient(145deg, hsl(0 0% 10%) 0%, hsl(0 0% 8%) 100%)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <div className="flex items-start justify-between gap-3">
              <div className="w-9 h-9 rounded-xl bg-brand/12 border border-brand/15 flex items-center justify-center shrink-0">
                <Users className="w-4 h-4 text-brand" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <h3 className="text-sm font-semibold text-white" style={{ fontFamily: 'var(--font-montserrat)' }}>{c.name}</h3>
                  <span className="text-[10px] bg-green-500/10 border border-green-500/20 text-green-400 px-1.5 py-0.5 rounded-full font-medium">
                    {c.status}
                  </span>
                </div>
                <p className="text-xs text-white/40 mb-2 leading-relaxed">{c.description}</p>
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-[11px] text-white/30">{c.type}</span>
                  <span className="text-[11px] text-brand font-medium">{c.members}</span>
                  {c.url && (
                    <a href={c.url} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1 text-[11px] text-white/30 hover:text-brand transition-colors">
                      <ExternalLink className="w-3 h-3" /> Press
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
