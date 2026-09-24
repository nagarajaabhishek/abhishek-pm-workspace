import { ExternalLink } from "lucide-react";
import ChessGameCard from "./ChessGameCard";

async function getLatestChessGames() {
  const username = "twelfth_doctor";
  try {
    const archivesRes = await fetch(`https://api.chess.com/pub/player/${username}/games/archives`, {
      next: { revalidate: 3600 },
    });
    
    if (!archivesRes.ok) return null;
    const archivesData = await archivesRes.json();
    
    const archives = archivesData.archives;
    if (!archives || archives.length === 0) return null;
    
    const latestArchiveUrl = archives[archives.length - 1];
    const gamesRes = await fetch(latestArchiveUrl, {
      next: { revalidate: 3600 },
    });
    
    if (!gamesRes.ok) return null;
    const gamesData = await gamesRes.json();
    
    const games = gamesData.games || [];
    
    const latestGames = games.slice(-5).reverse();
    return latestGames;

  } catch (err) {
    console.error("Error fetching chess.com games:", err);
    return null;
  }
}

export default async function ChessTracker() {
  const games = await getLatestChessGames();

  if (!games || games.length === 0) {
    return null;
  }

  const username = "twelfth_doctor";

  return (
    <div className="mt-6 rounded-xl border border-white/10 bg-[#0d1117] shadow-2xl flex flex-col w-full overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-white/10 shrink-0">
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 text-white/70" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C10.3431 2 9 3.34315 9 5C9 6.20816 9.71358 7.2497 10.75 7.74786C10.2817 8.35876 10 9.14175 10 10C10 11.933 11.567 13.5 13.5 13.5C13.8055 13.5 14.1017 13.4608 14.3853 13.3872C14.7731 15.0135 15 16.7118 15 18H9C9 16.7118 9.22687 15.0135 9.61474 13.3872C9.89832 13.4608 10.1945 13.5 10.5 13.5C12.433 13.5 14 11.933 14 10C14 9.14175 13.7183 8.35876 13.25 7.74786C14.2864 7.2497 15 6.20816 15 5C15 3.34315 13.6569 2 12 2ZM8 20V22H16V20H8Z" />
          </svg>
          <span className="text-sm font-semibold text-white">Latest Chess.com Games</span>
        </div>
        <a 
          href={`https://www.chess.com/member/${username}`}
          target="_blank" 
          rel="noopener noreferrer"
          className="text-xs text-white/50 hover:text-[#58a6ff] transition-colors flex items-center gap-1"
        >
          @{username} <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      <div className="p-4 w-full overflow-x-auto snap-x snap-mandatory custom-scrollbar">
        <div className="flex gap-4 pb-2" style={{ width: 'max-content' }}>
          {games.map((game: any, idx: number) => (
            <ChessGameCard key={game.url || idx} game={game} username={username} />
          ))}
        </div>
      </div>
    </div>
  );
}
