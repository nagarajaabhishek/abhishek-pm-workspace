import { ExternalLink, Mic, Trophy, BookOpen } from "lucide-react";
import { featured } from "@/data/portfolioData";
import SpacesPageHeader from "@/components/spaces/SpacesPageHeader";
import { getSpacePage } from "@/data/spacesData";

const typeIcons = {
  podcast: Mic,
  article: BookOpen,
};

export default function MediaSpeakingDoc() {
  const page = getSpacePage("media")!;

  const speaking = featured.filter((f) => f.title.toLowerCase().includes("speaking"));
  const press = featured.filter((f) => f.type === "article" && !f.title.toLowerCase().includes("speaking"));
  const podcasts = featured.filter((f) => f.type === "podcast");

  return (
    <div>
      <SpacesPageHeader page={page} />

      <p className="text-sm text-white/50 mb-6 leading-relaxed">
        Press coverage, podcast appearances, hackathon wins, and speaking engagements.
        Available for founder events, incubators, and private team sessions.
      </p>

      {speaking.length > 0 && (
        <section className="mb-8">
          <h2 className="text-sm font-bold text-white/60 uppercase tracking-widest mb-3" style={{ fontFamily: "var(--font-montserrat)" }}>Speaking</h2>
          <div className="flex flex-col gap-3">
            {speaking.map((item) => (
              <MediaCard key={item.id} item={item} icon={Mic} />
            ))}
          </div>
        </section>
      )}

      <section className="mb-8">
        <h2 className="text-sm font-bold text-white/60 uppercase tracking-widest mb-3" style={{ fontFamily: "var(--font-montserrat)" }}>Press & Features</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {press.map((item) => (
            <MediaCard key={item.id} item={item} icon={item.title.includes("Hackathon") ? Trophy : BookOpen} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-sm font-bold text-white/60 uppercase tracking-widest mb-3" style={{ fontFamily: "var(--font-montserrat)" }}>Podcasts & Video</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {podcasts.map((item) => (
            <MediaCard key={item.id} item={item} icon={typeIcons.podcast} />
          ))}
        </div>
      </section>
    </div>
  );
}

function MediaCard({ item, icon: Icon }: { item: (typeof featured)[0]; icon: typeof Mic }) {
  return (
    <a href={item.url} target="_blank" rel="noopener noreferrer"
      className="flex items-start gap-3 p-4 rounded-xl bg-white/3 border border-white/6 hover:bg-white/6 hover:border-brand/20 transition-all group">
      <div className="w-8 h-8 rounded-lg bg-brand/15 border border-brand/20 flex items-center justify-center shrink-0">
        <Icon className="w-4 h-4 text-brand" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium text-white group-hover:text-brand transition-colors leading-tight">{item.title}</p>
        <p className="text-xs text-white/40 mt-1 line-clamp-2">{item.description}</p>
        <div className="flex items-center justify-between mt-2">
          <p className="text-[10px] text-white/25">{item.date}</p>
          <ExternalLink className="w-3 h-3 text-white/20 group-hover:text-brand transition-colors" />
        </div>
      </div>
    </a>
  );
}
