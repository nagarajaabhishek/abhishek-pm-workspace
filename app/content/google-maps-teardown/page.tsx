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
            Google Maps Teardown
          </h1>
          <div className="flex items-center gap-3 text-sm text-white/40 mb-10">
            <span>Product Teardown</span>
            <span>·</span>
            <span>July 2024</span>
          </div>
        </div>

        <div className="content-page text-white/70 leading-relaxed" dangerouslySetInnerHTML={{ __html: `
      <h2>Project Overview</h2>
      
      <p class="mb-6">This project, titled <strong>"Google Maps – Restaurant Discovery & Menu Experience Teardown,"</strong> is designed to critically evaluate how Google Maps currently supports <strong>restaurant discovery</strong> compared to competitors like Yelp, DoorDash, and TikTok. The teardown places a special focus on the <strong>menu experience</strong> — analyzing how diners access, interpret, and trust restaurant menu information.</p>
      
      <p class="mb-6">The core of the study is to uncover <strong>gaps in the user journey</strong> (both for diners and restaurant owners), specifically around:</p>
      <ul class="list-disc ml-6 mb-6">
        <li><strong>Digital menu clarity and availability</strong></li>
        <li><strong>Dietary filters and ingredient transparency</strong></li>
        <li><strong>Menu translation for travelers</strong></li>
        <li><strong>Review trust and decision confidence</strong></li>
      </ul>
      
      <h2>The Problem</h2>
      
      <p class="mb-4">Through extensive manual research, survey deployment, and secondary analysis, we found that <strong>users face significant friction when validating dietary needs and menu details within Google Maps.</strong></p>
      
      <p class="mb-4"><strong>For diners:</strong></p>
      <ul class="list-disc ml-6 mb-4">
        <li>Users with allergies, diets, or language barriers often leave Google Maps to cross-check menus on other apps or websites.</li>
        <li>This <strong>multi-step, fragmented experience</strong> wastes time and erodes trust in Maps as a reliable source.</li>
      </ul>
      
      <p class="mb-4"><strong>For restaurant owners:</strong></p>
      <ul class="list-disc ml-6 mb-4">
        <li>They face the <strong>inefficiency of managing menus across multiple platforms</strong>, leading to outdated data, misinformation, and negative user perception.</li>
        <li>Outdated or unclear menus often cause <strong>poor reviews</strong> and reduce customer satisfaction.</li>
      </ul>
      
      <p class="mb-6">Thus, the project seeks to answer:</p>
      <p class="mb-6 italic text-lg">👉 <em>How can Google Maps enhance restaurant discovery and menu experiences to be more personalized, trustworthy, and efficient for both diners and restaurant owners?</em></p>
      
      <h2>My Role</h2>
      
      <p class="mb-6">My exact role in this teardown has been as a <strong>Product Teardown Specialist</strong>.</p>
      
      <p class="mb-6">I acted as the <strong>Product Lead and Research engine</strong> behind the project, responsible for gathering, synthesizing, and structuring all foundational data to guide Product Management decisions for Google Maps.</p>
      
      <h2>Key Actions & Manual Research</h2>
      
      <h3>1. User Research (Primary + Secondary)</h3>
      
      <p><strong>Primary Survey Research</strong></p>
      <ul class="list-disc ml-6 mb-4">
        <li>Drafted and deployed a <strong>restaurant dining experience survey</strong> to diners and restaurant owners.</li>
        <li><strong>Market Research Source:</strong> <a href="https://docs.google.com/spreadsheets/d/1EVVWVtENTlhPBBtyH5RhJvst5S9qylmG/edit?usp=sharing&ouid=105876641569624523258&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">View Google Sheets dataset</a>.</li>
        <li>Collected <strong>first-hand responses</strong> on pain points with Google Maps, with specific emphasis on menus, reviews, discovery, and collaboration.</li>
        <li>From this, we extracted <strong>10 original problem statements</strong> (e.g., lack of dietary filters, generic recommendations, outdated reviews) and later added <strong>2 additional menu-specific problems</strong> (digital menus unavailable, lack of translations).</li>
      </ul>
      
      <p><strong>Secondary Research</strong></p>
      <ul class="list-disc ml-6 mb-6">
        <li>Conducted competitor analysis of <strong>Yelp, TikTok, Instagram, DoorDash, OpenTable, and Tabelog</strong>.</li>
        <li>Reviewed <strong>user sentiment data</strong> from forums and app reviews to capture frustrations with Google Maps.</li>
        <li>Benchmarked competitors' differentiators — e.g., TikTok's emotional "vibe-driven" discovery, Yelp's advanced filters, and DoorDash's strong menu data structure.</li>
      </ul>
      
      <h3>2. Persona & Empathy Map Creation</h3>
      
      <ul class="list-disc ml-6 mb-6">
        <li>Developed <strong>8 personas</strong> in total (4 diner-focused, 4 restaurant owner-focused).</li>
        <li>For each, mapped:
          <ul class="list-disc ml-6 mt-2">
            <li><strong>Behaviors</strong> (how they use Google Maps or competitor apps)</li>
            <li><strong>Goals</strong> (e.g., quick discovery, allergy-safe food, attracting customers)</li>
            <li><strong>Frustrations</strong> (generic results, unclear menus, poor data syncing)</li>
            <li><strong>Motivations</strong> (saving time, avoiding risk, building brand credibility)</li>
          </ul>
        </li>
        <li>Built <strong>empathy maps</strong> to visualize "Think / Feel / Say / Do" dimensions for each persona.</li>
      </ul>
      
      <h3>3. Roadmap Planning</h3>
      
      <p>Outlined a <strong>phased roadmap</strong> that covers:</p>
      <ol class="list-decimal ml-6 mb-6">
        <li><strong>Journey Mapping</strong> – documenting end-to-end user flow for diners and owners</li>
        <li><strong>Problem Identification</strong> – clustering issues into themes (trust, personalization, visual discovery, menu clarity)</li>
        <li><strong>Prioritization</strong> – ranking opportunities by impact and feasibility</li>
        <li><strong>Final Report Assembly</strong> – structured teardown document with recommendations</li>
      </ol>
      
      <h2>Key Insights from Research</h2>
      
      <p class="mb-4">From the combination of manual research and survey synthesis, we identified <strong>five key opportunity themes</strong>:</p>
      <ol class="list-decimal ml-6 mb-6">
        <li><strong>Personalization & Relevance</strong> → Users want intent-aware recommendations (diet, vibe, time, group size).</li>
        <li><strong>Review Trust & Quality</strong> → Outdated reviews and lack of contextual tags undermine credibility.</li>
        <li><strong>Visual Discovery</strong> → Lack of photo filters (food vs ambiance vs menu) and outdated imagery.</li>
        <li><strong>Social & Collaborative Discovery</strong> → No trusted friend layer or group planning tools.</li>
        <li><strong>Menu Accessibility & Translation</strong> → Missing or unclear digital menus; no structured translation support.</li>
      </ol>
      
      <h2>Solution Concepts</h2>
      
      <h3>1. Smart Menus (Menu Clarity + Structure)</h3>
      <ul class="list-disc ml-6 mb-4">
        <li>OCR-powered capture of physical menus.</li>
        <li>Prompt restaurants and users to upload digital menus.</li>
        <li>Structured, clean formatting for readability.</li>
      </ul>
      
      <h3>2. Live Menu Translate</h3>
      <ul class="list-disc ml-6 mb-4">
        <li>Auto-translate menus into user's language.</li>
        <li>Contextual dictionary for cuisines (e.g., "paneer" remains untranslated).</li>
      </ul>
      
      <h3>3. Dietary Filters & Ingredient Visibility</h3>
      <ul class="list-disc ml-6 mb-4">
        <li>Users can filter results by dietary needs (vegan, halal, gluten-free).</li>
        <li>Ingredient-level tagging for allergy safety.</li>
      </ul>
      
      <h3>4. TrustTags & Review Signals</h3>
      <ul class="list-disc ml-6 mb-4">
        <li>Auto-structured tags for reviews (noise, seating, service, ambiance).</li>
        <li>Time-weighted reviews + sentiment trend badges.</li>
      </ul>
      
      <h3>5. Social Discovery Layer</h3>
      <ul class="list-disc ml-6 mb-6">
        <li>"Trusted Circles" to view where friends have been.</li>
        <li>Collaborative maps/lists with group voting and comments.</li>
      </ul>
      
      <h2>Prioritization of Solutions</h2>
      
      <div class="overflow-x-auto mb-6">
        <table class="min-w-full border border-border">
          <thead>
            <tr class="bg-muted/50">
              <th class="border border-border p-3 text-left">Solution</th>
              <th class="border border-border p-3 text-left">User Impact</th>
              <th class="border border-border p-3 text-left">Business Value</th>
              <th class="border border-border p-3 text-left">Effort</th>
              <th class="border border-border p-3 text-left">Priority</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-border p-3"><strong>Smart Menus (OCR + structure)</strong></td>
              <td class="border border-border p-3">🔴 Very High</td>
              <td class="border border-border p-3">🔴 Very High</td>
              <td class="border border-border p-3">🟡 Medium</td>
              <td class="border border-border p-3">⭐ Priority 1</td>
            </tr>
            <tr>
              <td class="border border-border p-3"><strong>Live Menu Translate</strong></td>
              <td class="border border-border p-3">🔴 High (critical for travelers)</td>
              <td class="border border-border p-3">🟡 Medium</td>
              <td class="border border-border p-3">🟡 Medium</td>
              <td class="border border-border p-3">⭐ Priority 2</td>
            </tr>
            <tr>
              <td class="border border-border p-3"><strong>Dietary Filters & Ingredient Tags</strong></td>
              <td class="border border-border p-3">🔴 High</td>
              <td class="border border-border p-3">🔴 High</td>
              <td class="border border-border p-3">🔴 High</td>
              <td class="border border-border p-3">⭐ Priority 2</td>
            </tr>
            <tr>
              <td class="border border-border p-3"><strong>TrustTags (Review Layer)</strong></td>
              <td class="border border-border p-3">🟡 Medium</td>
              <td class="border border-border p-3">🟡 Medium</td>
              <td class="border border-border p-3">🟡 Medium</td>
              <td class="border border-border p-3">⭐ Priority 3</td>
            </tr>
            <tr>
              <td class="border border-border p-3"><strong>Social Discovery & Lists</strong></td>
              <td class="border border-border p-3">🟡 Medium</td>
              <td class="border border-border p-3">🟡 Medium</td>
              <td class="border border-border p-3">🔴 High</td>
              <td class="border border-border p-3">⭐ Priority 4</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <h2>Expected Outcomes & Impact</h2>
      
      <p><strong>Improve User Trust & Engagement</strong></p>
      <ul class="list-disc ml-6 mb-4">
        <li>Reliable menu and dietary filters reduce drop-off to competitor apps.</li>
        <li>Users feel more confident making decisions within Maps.</li>
      </ul>
      
      <p><strong>Increase Efficiency for Owners</strong></p>
      <ul class="list-disc ml-6 mb-4">
        <li>Centralized menu management reduces manual update hours.</li>
        <li>Improves accuracy and consistency across Google's ecosystem.</li>
      </ul>
      
      <p><strong>Enhance Brand Perception</strong></p>
      <ul class="list-disc ml-6 mb-6">
        <li>Fewer negative reviews related to outdated menus.</li>
        <li>Stronger reputation for both Google Maps and partner restaurants.</li>
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
