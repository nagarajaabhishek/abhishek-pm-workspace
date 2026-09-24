import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TeardownPage() {
  return (
    <div className="h-full overflow-y-auto w-full">
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20 max-w-3xl mx-auto mt-8 px-4 sm:px-6">
        <div className="mb-10">
          <Link href="/spaces/teardowns" className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Spaces
          </Link>

          <h1 className="text-3xl sm:text-4xl font-black text-white mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>
            Clash of Clans Teardown
          </h1>
          <div className="flex items-center gap-3 text-sm text-white/40 mb-10">
            <span>Product Teardown</span>
            <span>·</span>
            <span>March 2024</span>
          </div>
        </div>

        <div className="content-page text-white/70 leading-relaxed" dangerouslySetInnerHTML={{ __html: `
      <h2>Clash of Clans Product Teardown: Enhancing the Social Ecosystem for Engagement & Acquisition</h2>

      <h3>1.0 Introduction & Objective</h3>
      <p class="mb-4"><strong>Executive Summary:</strong> Conducted a comprehensive product teardown on Clash of Clans' social ecosystem to unlock significant growth potential, validated by primary user survey insights (<strong>n=18</strong>) showing <strong>88%</strong> interest in enhanced sharing features and <strong>83%</strong> friction in clan discovery.</p>
      <p class="mb-6"><strong>Primary Objective:</strong> Improve clan and player discovery plus external sharing of user-generated content (UGC) to increase engagement, strengthen clan cohesion, and drive organic acquisition.</p>

      <p><strong>Initial Success Metrics (KPIs):</strong></p>
      <ul class="list-disc ml-6 mb-6">
        <li><strong>Clan Discovery & Onboarding:</strong> clan join rate, search-to-join rate, clan density.</li>
        <li><strong>UGC Sharing & Virality:</strong> replay/base shares to external platforms, organic UA from social shares.</li>
        <li><strong>In-Game Engagement & Retention:</strong> average session duration, D7/D30 retention, social tab usage.</li>
        <li><strong>Veteran Engagement:</strong> participation in endgame content and mentorship tools.</li>
      </ul>

      <h3>1.3 Approach & Scope</h3>
      <ol class="list-decimal ml-6 mb-6">
        <li>Product identification and scoped objective definition.</li>
        <li>Foundational market and sentiment research.</li>
        <li>Visual/functional in-game UX analysis via screenshots.</li>
        <li>Persona development (4 key segments).</li>
        <li>Primary research survey (n=18).</li>
        <li>Synthesis, insight extraction, and problem validation.</li>
        <li>Problem-to-recommendation pairing.</li>
        <li>Impact/effort prioritization and phased roadmap.</li>
      </ol>

      <h3>2.0 User Analysis</h3>
      <p class="mb-4"><strong>Primary Persona:</strong> <strong>Alex, the Aspiring Leader</strong> (TH13, growth-oriented, struggles with recruitment and social tooling).</p>
      <p class="mb-4"><strong>Secondary Persona 1:</strong> <strong>Chloe, the Cautious Solo</strong> (plays for low-pressure progress, intimidated by clan culture).</p>
      <p class="mb-4"><strong>Secondary Persona 2:</strong> <strong>Marco, the Streamer</strong> (creator workflow blocked by no native sharing or creator tooling).</p>
      <p class="mb-6"><strong>Secondary Persona 3:</strong> <strong>David, the Dedicated Veteran</strong> (long-term player seeking fresh endgame and better mentorship systems).</p>

      <p><strong>What is already working well:</strong></p>
      <ul class="list-disc ml-6 mb-6">
        <li>Strong core gameplay loop and strategic depth.</li>
        <li>Powerful clan concept and community potential.</li>
        <li>Consistent content updates and high production quality.</li>
        <li>Deeply loyal global player base and healthy esports ecosystem.</li>
      </ul>

      <h3>3.0 Problems, Recommendations & Prioritization</h3>

      <h4>Problem 1: No Seamless External UGC Sharing</h4>
      <p class="mb-3">Players want to share attacks and bases externally, but current workflows require manual recording/editing.</p>
      <p><strong>Evidence:</strong></p>
      <ul class="list-disc ml-6 mb-3">
        <li><strong>88.9%</strong> wanted to share replays externally.</li>
        <li><strong>88.9%</strong> likely to use replay social-share button.</li>
        <li><strong>83.3%</strong> likely to share base layouts via built-in button.</li>
      </ul>
      <p><strong>Recommendation:</strong> Add native share for replays and bases with direct social actions, short links, GIF generation, and high-res image export.</p>
      <p class="mb-6"><strong>Projected Impact:</strong> stronger player satisfaction, creator enablement, and <strong>5-10%</strong> potential lift in organic acquisition via viral loops.</p>

      <h4>Problem 2: Ineffective & Intimidating Clan/Player Discovery</h4>
      <p class="mb-3">Current discovery relies on weak recommendations and exact-name/tag behavior, causing mismatch and drop-off.</p>
      <p><strong>Evidence:</strong></p>
      <ul class="list-disc ml-6 mb-3">
        <li>Over <strong>83%</strong> rated clan finding as difficult/neutral.</li>
        <li>Only <strong>13.3%</strong> found clans from in-game recommendations.</li>
        <li>Non-clan players cite pressure and uncertainty about fit.</li>
      </ul>
      <p><strong>Recommendation:</strong> Smart matching with richer filters (region/time zone/playstyle), personalized suggestions, LFC/LFP posts, and clearer preview mode.</p>
      <p class="mb-6"><strong>Projected Impact:</strong> <strong>15-20%</strong> potential increase in clan join rates, reduced mismatch churn, and lower recruitment friction.</p>

      <h4>Problem 3: Static, Low-Value Social Hub</h4>
      <p class="mb-3">Social tab acts as a static leaderboard, not a dynamic relationship or learning surface.</p>
      <p><strong>Evidence:</strong></p>
      <ul class="list-disc ml-6 mb-3">
        <li><strong>72.2%</strong> visit social tab rarely or never.</li>
        <li><strong>83.3%</strong> interested in watching friend replays from profile.</li>
      </ul>
      <p><strong>Recommendation:</strong> Build a dynamic friend activity feed, richer profiles, replay viewing, and lightweight social interactions.</p>
      <p class="mb-6"><strong>Projected Impact:</strong> stronger social stickiness, better learning loops, and <strong>20-30%</strong> potential lift in social feature usage.</p>

      <h3>3.4 Prioritization Matrix</h3>
      <ul class="list-disc ml-6 mb-6">
        <li><strong>High Impact / Medium Effort:</strong> Native external UGC sharing.</li>
        <li><strong>High Impact / High Effort:</strong> Discovery revamp with smart matching and personalization.</li>
        <li><strong>Medium Impact / Medium Effort:</strong> Social hub revitalization via activity feed.</li>
      </ul>

      <h3>3.5 Detailed UX Suggestions</h3>
      <ul class="list-disc ml-6 mb-6">
        <li><strong>Clan Search Page:</strong> replace empty state with trending and personalized clan modules.</li>
        <li><strong>Location Filter:</strong> add regional drill-down and university/community tags.</li>
        <li><strong>Clan Labels:</strong> add vibe sliders and custom searchable keywords.</li>
        <li><strong>Friends Screen:</strong> convert static leaderboard into activity feed with online indicators.</li>
        <li><strong>Player Search:</strong> support partial name search, suggested friends, and social identity linking (privacy-controlled).</li>
        <li><strong>Attack Log + Base Edit:</strong> provide direct external share actions, including links/GIFs/images.</li>
      </ul>

      <h3>4.0 Competitive & Strategic Insights</h3>
      <p><strong>Direct category comparisons:</strong> RAID and Lords Mobile demonstrate that strong social/guild systems correlate with retention and monetization.</p>
      <p><strong>Best-in-class inspiration:</strong> Chess.com (frictionless gameplay sharing), Roblox/Minecraft (UGC-forward growth loops).</p>
      <p class="mb-6"><strong>Strategic implication:</strong> shift from progression-only value to connection-driven value, turning UGC into a measurable growth channel.</p>

      <h3>4.1 Market Research Dataset (Primary Survey)</h3>
      <p class="mb-4">In addition to teardown analysis, I ran a dedicated <strong>Clash of Clans social experience survey</strong> and consolidated responses in a spreadsheet dataset.</p>
      <ul class="list-disc ml-6 mb-4">
        <li><strong>Data Source:</strong> Primary survey responses captured via Google Forms/Sheets. <a href="https://docs.google.com/spreadsheets/d/1QJVcblqQvahkw0IUhG2P-fA69ack2RxJ/edit?usp=sharing&ouid=105876641569624523258&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">View market research dataset</a>.</li>
        <li><strong>Scope:</strong> Player responses spanning multiple TH levels and playstyles (casual, growth-focused, and leadership-oriented).</li>
        <li><strong>Focus Areas:</strong> clan discovery friction, social tab engagement, replay/base sharing behavior, and veteran-player needs.</li>
      </ul>
      <p><strong>Key qualitative patterns from the dataset:</strong></p>
      <ul class="list-disc ml-6 mb-6">
        <li>Strong demand for <strong>better recruiting and clan-fit filters</strong> (especially for casual playstyles and regional matching).</li>
        <li>Repeated interest in <strong>city/university-based discovery</strong> for real-world affinity and stronger clan bonding.</li>
        <li>Clear demand for <strong>external sharing tools</strong> for replays and base layouts to support community growth and creator workflows.</li>
        <li>Frequent requests for <strong>richer social communication</strong> (friend messaging, better chat systems, and social modes beyond clan-only interaction).</li>
        <li>Veteran segments ask for <strong>new competitive modes</strong> and more meaningful long-term challenge loops.</li>
      </ul>

      <h3>5.0 Summary & Roadmap</h3>
      <p class="mb-3"><strong>Phase 1: Quick Wins & Viral Growth</strong> — launch native external UGC sharing for immediate value and acquisition lift.</p>
      <p class="mb-3"><strong>Phase 2: Core Social Enhancement</strong> — launch social feed + friend replay interactions to increase engagement and stickiness.</p>
      <p class="mb-6"><strong>Phase 3: Foundational Discovery Overhaul</strong> — deploy smart matching and personalization to fix social onboarding and recruitment at scale.</p>

      <h3>6.0 Appendix Highlights</h3>
      <ul class="list-disc ml-6 mb-6">
        <li><strong>Financial/Scale Context:</strong> \$10B+ lifetime revenue, 500M+ lifetime downloads, and 10M-13M MAU (early 2025 estimates).</li>
        <li><strong>Survey Scope:</strong> 18 respondents across varied TH levels and player intents.</li>
        <li><strong>Qualitative Themes:</strong> better clan search, richer social connection, easier sharing workflows, stronger veteran content.</li>
      </ul>

      <p class="text-sm text-muted-foreground"><strong>Note:</strong> This teardown is an independent product strategy exercise. Clash of Clans intellectual property belongs to Supercell.</p>
    ` }} />

        <style dangerouslySetInnerHTML={{ __html: `
          .content-page h1, .content-page h2 {
            font-size: 1.75rem;
            font-weight: 700;
            font-family: var(--font-montserrat);
            color: white;
            margin-top: 2.5rem;
            margin-bottom: 1.25rem;
          }
          .content-page h3 {
            font-size: 1.25rem;
            font-weight: 700;
            font-family: var(--font-montserrat);
            color: white;
            margin-top: 2rem;
            margin-bottom: 1rem;
          }
          .content-page h4 {
            font-size: 1.1rem;
            font-weight: 600;
            color: white;
            margin-top: 1.5rem;
            margin-bottom: 0.75rem;
          }
          .content-page p {
            margin-bottom: 1rem;
            line-height: 1.8;
          }
          .content-page ul {
            list-style-type: disc;
            margin-left: 1.5rem;
            margin-bottom: 1.5rem;
          }
          .content-page ol {
            list-style-type: decimal;
            margin-left: 1.5rem;
            margin-bottom: 1.5rem;
          }
          .content-page li {
            margin-bottom: 0.5rem;
          }
          .content-page a {
            color: #ff5722;
            text-decoration: underline;
          }
          .content-page strong {
            color: rgba(255,255,255,0.9);
          }
          .content-page table {
            width: 100%;
            border-collapse: collapse;
            margin: 1.5rem 0;
            font-size: 0.9rem;
          }
          .content-page th, .content-page td {
            border: 1px solid rgba(255,255,255,0.1);
            padding: 0.75rem;
            text-align: left;
          }
          .content-page th {
            background-color: rgba(255,255,255,0.05);
            color: white;
          }
        `}} />
      </div>
    </div>
  );
}
