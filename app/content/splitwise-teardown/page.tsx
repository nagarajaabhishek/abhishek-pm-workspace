import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function SplitwiseTeardownPage() {
  return (
    <div className="h-full overflow-y-auto w-full">
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20 max-w-3xl mx-auto mt-8 px-4 sm:px-6">
        <div className="mb-10">
          <Link href="/spaces/teardowns" className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Spaces
          </Link>

          <h1 className="text-3xl sm:text-4xl font-black text-white mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>
            Splitwise Teardown
          </h1>
          <div className="flex items-center gap-3 text-sm text-white/40 mb-10">
            <span>Product Teardown</span>
            <span>·</span>
            <span>2024</span>
          </div>
        </div>

        <div className="content-page text-white/70 leading-relaxed" dangerouslySetInnerHTML={{ __html: `
      <p class="mb-4"><strong>Initiative Type:</strong> AI-Driven Consumer Tool (Expense Management)</p>
      <p class="mb-6"><strong>Portfolio Status:</strong> Beta-ready case study for public portfolio (PDF-ready with visuals and workflow link). <a href="https://ai-splitwiser.vercel.app/" target="_blank" rel="noopener noreferrer">Try Splitwiser live app</a>.</p>
      
      <h2>Phase 1: Discovery & Opportunity Analysis – Origins and Problem Space</h2>
      
      <p><strong>Problem:</strong> Shared expense management for roommates and group settings was consistently unfair, error-prone, and a source of tension. Existing tools like Splitwise and Excel lacked the ability to handle partial participation and itemized breakdowns, forcing users to overpay or compromise, damaging trust.</p>
      
      <p><strong>Context:</strong> As a student living in shared housing, repeated frustrations over grocery, takeout, and utility bills highlighted that current tools weren't solving for the human need: transparency and trust, not just calculation.</p>
      
      <p><strong>Research:</strong> Conducted 20+ interviews with students and young professionals:</p>
      <ul class="list-disc ml-6 mb-4">
        <li>85% wanted automation and fairness, admitting to skipping tax/tip or rounding to avoid conflict.</li>
        <li>Most did not want another heavy app, but desired <strong>quick, chat-friendly solutions</strong>.</li>
        <li>Users trusted AI-calculated fairness over spreadsheets or manual math.</li>
      </ul>
      
      <p><strong>Opportunity:</strong> Build an AI-driven, chat-first tool that:</p>
      <ul class="list-disc ml-6 mb-6">
        <li>Automatically parses real-world bills (grocery, utilities, dining).</li>
        <li>Allows <strong>item-level toggling</strong> for precise fairness.</li>
        <li>Integrates with familiar channels (WhatsApp, Telegram) to avoid adoption friction.</li>
      </ul>
      
      <h2>Phase 2: Strategy & Definition – Shaping the Solution</h2>
      
      <p><strong>Vision:</strong> Make splitting group expenses instant, transparent, and conflict-free — acting as a neutral "roommate mediator" rather than another calculator.</p>
      
      <p><strong>Personas:</strong></p>
      <ol class="list-decimal ml-6 mb-4">
        <li><strong>Student Roommate</strong> – Needs fast, fair solutions, budget-driven.</li>
        <li><strong>Young Professional</strong> – Time-sensitive, expects automation and minimal manual work.</li>
        <li><strong>Travel Organizer</strong> – Manages group trips, wants one-off bill settlement without disputes.</li>
      </ol>
      
      <p><strong>Core MVP Features:</strong></p>
      <ul class="list-disc ml-6 mb-4">
        <li>GPT-powered bill parser that extracts line items, tax, and tips automatically.</li>
        <li>Per-person, per-item toggling for exact shares.</li>
        <li>Proportional tax and tip distribution.</li>
        <li>Exportable summaries for group chats (WhatsApp/Telegram) without requiring signups.</li>
      </ul>
      
      <p><strong>Competitive Positioning:</strong></p>
      <ul class="list-disc ml-6 mb-6">
        <li><strong>Vs. Splitwise:</strong> Adds true item-level fairness, faster onboarding, no persistent account.</li>
        <li><strong>Vs. Spreadsheets:</strong> Removes error and manual work; faster to settle.</li>
        <li><strong>Vs. Venmo-style notes:</strong> Offers structured, auditable clarity with no ambiguity.</li>
      </ul>
      
      <h2>Phase 3: Execution – Bringing the MVP to Life</h2>
      
      <p><strong>MVP Build:</strong> Developed a GPT-driven parser and a lightweight web-based interface capable of creating households, adding members, scanning bills, toggling participation, and generating share breakdowns.</p>
      
      <p><strong>Testing Milestones:</strong></p>
      <ul class="list-disc ml-6 mb-4">
        <li>Shared MVP with 20 early adopters (students and professionals) to gather structured feedback on accuracy, UI, and user trust.</li>
        <li>Next testing iteration will incorporate <strong>real-world bill formats</strong> (mixed grocery + takeout receipts, utilities) to refine parsing robustness and edge case handling.</li>
      </ul>
      
      <p><strong>Workflow Visual:</strong> A complete diagram illustrating how users upload receipts, toggle items, and receive a transparent split summary will be featured in the PDF (linked above).</p>
      
      <h2>Phase 4: Validation – Measuring Success</h2>
      
      <p><strong>Metrics to Track:</strong></p>
      <ul class="list-disc ml-6 mb-4">
        <li>Adoption rate across early testers.</li>
        <li>Average time to finalize and settle a bill.</li>
        <li>Reduction in disputes compared to manual or Splitwise methods.</li>
      </ul>
      
      <p><strong>Feedback Channels:</strong></p>
      <ul class="list-disc ml-6 mb-4">
        <li>In-app satisfaction surveys.</li>
        <li>Direct user interviews.</li>
        <li>Retention tracking over recurring household cycles.</li>
      </ul>
      
      <p><strong>Iteration Priorities:</strong> Focus on features that increase trust (clear summaries, transparency) and reduce effort (fast parsing, zero-manual-entry flow).</p>
      
      <h2>Phase 5: Impact & Growth – Expanding Reach</h2>
      
      <p><strong>Launch Strategy:</strong></p>
      <ul class="list-disc ml-6 mb-4">
        <li>Initial launch as a <strong>free-to-use web tool</strong> targeting university students and young professionals.</li>
      </ul>
      
      <p><strong>Marketing Initiatives:</strong></p>
      <ul class="list-disc ml-6 mb-4">
        <li>Share the beta in <strong>university WhatsApp groups</strong> to drive feedback and adoption.</li>
        <li>Place <strong>posters with QR codes</strong> in <strong>grocery stores and common spaces near university housing</strong>.</li>
        <li>Collect survey data to refine product positioning and adoption strategy.</li>
      </ul>
      
      <p><strong>Expansion Roadmap:</strong></p>
      <ul class="list-disc ml-6 mb-6">
        <li>Integrate with <strong>Telegram API</strong> to launch a Telegram bot, enabling one-click bill splitting directly in chat groups.</li>
        <li>Explore integrations with WhatsApp and Discord post-beta.</li>
        <li>Future monetization via <strong>premium features</strong> (bill history, analytics, API licensing for platforms).</li>
      </ul>
      
      <h2>Phase 6: Retrospective & Learnings – Post-Launch Goals</h2>
      
      <ul class="list-disc ml-6 mb-6">
        <li>Identify <strong>which features drive trust and adoption</strong>.</li>
        <li>Pinpoint drop-off stages in the workflow and optimize user flow.</li>
        <li>Document learnings on building and scaling AI-powered consumer tools for future iterations.</li>
      </ul>
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
