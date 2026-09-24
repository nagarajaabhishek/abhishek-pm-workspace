"use client";

import { useEffect, useState } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";
import { ExternalLink } from "lucide-react";

export default function ChessGameCard({ game, username }: { game: any, username: string }) {
  const [fen, setFen] = useState("start");

  useEffect(() => {
    if (game.pgn) {
      try {
        const chess = new Chess();
        chess.loadPgn(game.pgn);
        setFen(chess.fen());
      } catch (err) {
        console.error("Error parsing PGN", err);
      }
    }
  }, [game.pgn]);

  const isWhite = game.white.username.toLowerCase() === username.toLowerCase();
  const playerStats = isWhite ? game.white : game.black;
  const opponentStats = isWhite ? game.black : game.white;
  
  const playerResult = playerStats.result; 
  
  let resultText = "Draw";
  let resultColor = "text-white/50";
  let resultBg = "bg-white/5";
  
  if (playerResult === "win") {
    resultText = "Won";
    resultColor = "text-[#7ee787]";
    resultBg = "bg-[#7ee787]/10";
  } else if (playerResult !== "win" && opponentStats.result === "win") {
    resultText = "Lost";
    resultColor = "text-[#ff7b72]";
    resultBg = "bg-[#ff7b72]/10";
  } else {
    resultText = "Draw";
    resultColor = "text-[#d2a8ff]";
    resultBg = "bg-[#d2a8ff]/10";
  }

  return (
    <a 
      href={game.url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex-shrink-0 w-64 rounded-xl overflow-hidden bg-[#161b22] border border-white/10 hover:border-white/20 transition-colors group relative shadow-2xl snap-center"
    >
      <div className="absolute top-2 right-2 z-10 px-2 py-1 rounded text-[10px] font-bold shadow-md bg-black/80 backdrop-blur-sm uppercase tracking-wider text-white">
        {game.time_class}
      </div>

      <div className="w-full aspect-square bg-[#0d1117] pointer-events-none p-1 flex items-center justify-center">
        {(() => {
          const AnyBoard = Chessboard as any;
          return <AnyBoard
            position={fen}
            boardOrientation={isWhite ? "white" : "black"} 
            customDarkSquareStyle={{ backgroundColor: "#2d333b" }}
            customLightSquareStyle={{ backgroundColor: "#adbac7" }}
            arePiecesDraggable={false}
            boardWidth={248}
          />;
        })()}
      </div>

      <div className="p-3">
        <div className="flex items-center justify-between mb-2">
          <div className={`px-2 py-0.5 rounded text-[10px] font-bold ${resultBg} ${resultColor} uppercase tracking-wider`}>
            {resultText}
          </div>
          <span className="text-[10px] font-mono text-white/40 group-hover:text-white/60 transition-colors flex items-center gap-1">
            Replay <ExternalLink className="w-3 h-3" />
          </span>
        </div>
        
        <div className="flex items-center gap-2 mb-1">
          <span className="text-sm font-semibold text-white/90 truncate">
            vs {opponentStats.username}
          </span>
          <span className="text-[10px] text-white/30 shrink-0">({opponentStats.rating})</span>
        </div>
        
        <div className="flex items-center gap-2 mt-2">
          <div className="w-2 h-2 rounded-full border border-white/20" style={{ backgroundColor: isWhite ? "#fff" : "#000" }} />
          <span className="text-xs text-white/50">{playerStats.rating} ELO</span>
        </div>
      </div>
    </a>
  );
}
