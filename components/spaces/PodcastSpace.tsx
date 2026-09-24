import { ExternalLink } from "lucide-react";
import SpacesPageHeader from "./SpacesPageHeader";
import { getSpacePage } from "@/data/spacesData";

const episodes = [
  {
    id: "ep13",
    title: "Understanding Data Science: Journey of a Data Analyst, Snehith",
    youtubeId: "NAQQZYyf4l4",
    url: "https://www.youtube.com/watch?v=NAQQZYyf4l4",
    description: "e-DAM Spotlight EP 13",
    date: "2024",
  },
  {
    id: "ep12",
    title: "Start your Cloud Computing Journey Here",
    youtubeId: "Qg3ZmX4O6Vo",
    url: "https://www.youtube.com/watch?v=Qg3ZmX4O6Vo",
    description: "e-DAM Spotlight EP 12 with @CloudJourneywithSatyajit",
    date: "2024",
  },
  {
    id: "ep11",
    title: "Innovating for a Smarter Future: Usha Sai's Research Journey",
    youtubeId: "9y1_dWak7B4",
    url: "https://www.youtube.com/watch?v=9y1_dWak7B4",
    description: "e-DAM Spotlight EP 11",
    date: "2024",
  },
  {
    id: "ep10",
    title: "From Idea to Execution: Navigating the Journey to Successful Implementation",
    youtubeId: "NinNqjqA-RI",
    url: "https://www.youtube.com/watch?v=NinNqjqA-RI",
    description: "e-DAM Spotlight EP 10",
    date: "2024",
  },
  {
    id: "ep09",
    title: "Mastering Full Stack Development",
    youtubeId: "UbIpoFgKgEc",
    url: "https://www.youtube.com/watch?v=UbIpoFgKgEc",
    description: "e-DAM Spotlight EP 09",
    date: "2023",
  },
  {
    id: "ep08",
    title: "From Vardhaman College to SEARCE: The Journey of a Cloud Engineering Expert",
    youtubeId: "1j4GVPdugkk",
    url: "https://www.youtube.com/watch?v=1j4GVPdugkk",
    description: "e-DAM Spotlight EP 08",
    date: "2023",
  },
  {
    id: "ep07",
    title: "Web3 Mega City, Hyderabad - The Untold Story",
    youtubeId: "1YKWI1gmLhI",
    url: "https://www.youtube.com/watch?v=1YKWI1gmLhI",
    description: "e-DAM Spotlight EP 07 with Siv Ram Shastri",
    date: "2023",
  },
  {
    id: "ep06",
    title: "\"Passion to Purpose\": Turning Your Interests into a Career",
    youtubeId: "3gQ7QtQ1XmQ",
    url: "https://www.youtube.com/watch?v=3gQ7QtQ1XmQ",
    description: "e-DAM Spotlight EP 06",
    date: "2023",
  },
  {
    id: "ep05",
    title: "From Success to Failure: Why Most Startups Fail and How to Avoid It?",
    youtubeId: "AtpPGbNTsSQ",
    url: "https://www.youtube.com/watch?v=AtpPGbNTsSQ",
    description: "e-DAM Spotlight EP 05",
    date: "2023",
  },
  {
    id: "ep04",
    title: "How T-hub Incubated Startup \"Starbuzz\" is Making Waves in Influencer Marketing",
    youtubeId: "yJaXLgovI20",
    url: "https://www.youtube.com/watch?v=yJaXLgovI20",
    description: "e-DAM Spotlight EP 04",
    date: "2023",
  },
  {
    id: "ep03",
    title: "From Passion to Profit: Satya Pavan's Journey on CodeSprint",
    youtubeId: "wuCMXCwXAMk",
    url: "https://www.youtube.com/watch?v=wuCMXCwXAMk",
    description: "e-DAM Spotlight EP 03",
    date: "2023",
  },
  {
    id: "ep02",
    title: "Working on Your Skills Gets You Closer to Your Dreams",
    youtubeId: "9_EHDkmKp1c",
    url: "https://www.youtube.com/watch?v=9_EHDkmKp1c",
    description: "e-DAM Spotlight EP 02 with Sai Krishna",
    date: "2023",
  },
  {
    id: "satya",
    title: "The mantra of learn, unlearn & relearn with Prof. Satya Kiran",
    youtubeId: "OO1TuZ19oPQ",
    url: "https://www.youtube.com/watch?v=OO1TuZ19oPQ",
    description: "e-DAM Spotlight Special",
    date: "2023",
  },
  {
    id: "ep01",
    title: "What If I Hate My Job",
    youtubeId: "GGtnfnBFTyM",
    url: "https://www.youtube.com/watch?v=GGtnfnBFTyM",
    description: "e-DAM Spotlight EP 01 with Narasimha Mikkilineni",
    date: "2023",
  },
  {
    id: "trying",
    title: "It's About trying | Try until to succeed",
    youtubeId: "pnC7p4GcabY",
    url: "https://www.youtube.com/watch?v=pnC7p4GcabY",
    description: "e-DAM Spotlight with Abhishek, Vivek, Sneha",
    date: "2023",
  },
];

export default function PodcastSpace() {
  const page = getSpacePage("podcast")!;

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <SpacesPageHeader page={page} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {episodes.map((ep) => (
          <div key={ep.id} className="rounded-xl overflow-hidden shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-brand/20"
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
                    className="text-white/30 hover:text-[#58a6ff] transition-colors">
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
