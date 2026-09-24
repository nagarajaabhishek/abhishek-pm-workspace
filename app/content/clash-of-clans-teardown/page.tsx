import Link from "next/link";
import { ArrowLeft, Swords } from "lucide-react";

export default function ClashOfClansTeardown() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20 max-w-3xl mx-auto mt-8 px-4 sm:px-6">
      <div className="mb-10">
        <Link href="/spaces/case-studies" className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Spaces
        </Link>
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-[#ffbd2e]/10 border border-[#ffbd2e]/20 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(255,189,46,0.1)]">
            <Swords className="w-7 h-7 text-[#ffbd2e]" />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-2" style={{ fontFamily: "var(--font-montserrat)" }}>
              Clash of Clans Teardown
            </h1>
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-sm text-white/50">Mobile Gaming</span>
              <span className="text-white/20">•</span>
              <span className="text-sm text-white/50">2024</span>
            </div>
          </div>
        </div>
        <p className="text-lg text-white/70 leading-relaxed">
          Deep dive into CoC&apos;s retention loops, clan mechanics, and monetization — how Supercell engineered 10+ years of daily active use.
        </p>
      </div>

      <div className="rounded-xl p-6 mb-10 border-l-4 border-[#ffbd2e]/40 bg-[#ffbd2e]/5">
        <p className="text-xs text-[#ffbd2e]/60 uppercase tracking-widest mb-2 font-bold">Key Insight</p>
        <p className="text-lg text-[#ffbd2e]/90 italic font-medium leading-relaxed">&ldquo;The clan system is the product. Without social obligation, CoC is just a builder game.&rdquo;</p>
      </div>

      <article className="prose prose-invert prose-brand max-w-none space-y-6 text-white/70">
        <h2 className="text-xl font-bold text-white mt-8 mb-4 border-b border-white/10 pb-2" style={{ fontFamily: "var(--font-montserrat)" }}>1. The Appointment Mechanic</h2>
        <p>
          Clash of Clans masters the "appointment dynamic." By attaching real-world time to in-game actions (upgrading a Town Hall takes days), the game trains players to check in at specific intervals. 
        </p>
        <p>
          This creates a powerful loop: you initiate an upgrade, leave the game, and receive a push notification when it's done. This intermittent reinforcement forms a strong, sticky daily habit.
        </p>

        <h2 className="text-xl font-bold text-white mt-8 mb-4 border-b border-white/10 pb-2" style={{ fontFamily: "var(--font-montserrat)" }}>2. Social Obligation as Retention</h2>
        <p>
          Single-player base building gets boring. Supercell realized that to retain players for years, they needed a social layer. Enter Clans and Clan Wars.
        </p>
        <p>
          When you join a clan, you aren't just playing for yourself. If you don't attack in a Clan War, you let down 49 other real people. This shift from intrinsic motivation (building a cool base) to extrinsic social obligation is the true driver of their 10-year retention curve.
        </p>

        <h2 className="text-xl font-bold text-white mt-8 mb-4 border-b border-white/10 pb-2" style={{ fontFamily: "var(--font-montserrat)" }}>3. Pay-to-Accelerate, Not Pay-to-Win</h2>
        <p>
          Monetization in CoC is brilliant because it monetizes impatience, not skill. You can buy gems to skip timers, but in Clan Wars, matching algorithms ensure you fight opponents of similar strength.
        </p>
        <p>
          This keeps the game balanced for free-to-play users while allowing whales to spend thousands of dollars to progress faster, preserving the integrity of the core loop.
        </p>

        <h2 className="text-xl font-bold text-white mt-8 mb-4 border-b border-white/10 pb-2" style={{ fontFamily: "var(--font-montserrat)" }}>Takeaway for PMs</h2>
        <p>
          If your product suffers from long-term churn, ask yourself: How can we introduce social obligation? When users feel accountable to a community or a team, retention metrics fundamentally change.
        </p>
      </article>
    </div>
  );
}
