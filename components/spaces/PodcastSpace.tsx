import { Mic, ExternalLink, Play } from "lucide-react";

const episodes = [
  {
    id: "ep1",
    title: "AI, Startups & Building in Public",
    youtubeId: "pnC7p4GcabY",
    url: "https://www.youtube.com/watch?v=pnC7p4GcabY",
    description: "Conversations on AI product building, startup ecosystems, and lessons from the e-DAM journey.",
    date: "2024",
  },
  {
    id: "ep2",
    title: "Product Thinking & AI Era",
    youtubeId: "ldQr5iUy6mE",
    url: "https://www.youtube.com/watch?v=ldQr5iUy6mE",
    description: "Discussing how AI is reshaping product management and what PMs need to do differently.",
    date: "2024",
  },
  {
    id: "ep3",
    title: "Growth, Communities & Founders",
    youtubeId: "qiEZCZ8z2Pc",
    url: "https://www.youtube.com/watch?v=qiEZCZ8z2Pc",
    description: "Building community flywheels, founder-led growth, and the intersection of community and product.",
    date: "2024",
  },
];

export default function PodcastSpace() {
  return (
    <div className="p-6 max-w-2xl">
      <div className="mb-6">
        <h2 className="text-lg font-bold text-white mb-1" style={{ fontFamily: 'var(--font-montserrat)' }}>Podcast</h2>
        <p className="text-sm text-white/40">Conversations on AI, startups, communities, and product innovation.</p>
      </div>

      <div className="flex flex-col gap-4">
        {episodes.map((ep) => (
          <div key={ep.id} className="rounded-xl overflow-hidden"
            style={{ background: "linear-gradient(145deg, hsl(0 0% 10%) 0%, hsl(0 0% 8%) 100%)", border: "1px solid rgba(255,255,255,0.07)" }}>
            {/* YouTube embed */}
            <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${ep.youtubeId}`}
                title={ep.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-sm font-semibold text-white mb-1" style={{ fontFamily: 'var(--font-montserrat)' }}>{ep.title}</h3>
                  <p className="text-xs text-white/40 leading-relaxed">{ep.description}</p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-[10px] text-white/30">{ep.date}</span>
                  <a href={ep.url} target="_blank" rel="noopener noreferrer"
                    className="text-white/30 hover:text-brand transition-colors">
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
