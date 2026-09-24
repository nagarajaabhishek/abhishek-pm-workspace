const fs = require('fs');

const data = fs.readFileSync('/Users/abhisheknagaraja/Documents/Tardis/abhishek-pm-workspace/scratch/contentPages.ts', 'utf8');

// Extract Clash of Clans
const cocMatch = data.match(/slug:\s*'clash-of-clans-teardown'[\s\S]*?content:\s*`([\s\S]*?)`,\n\s*},/);
const cocContent = cocMatch[1];

// Extract Google Maps
const gmMatch = data.match(/slug:\s*'google-maps-teardown'[\s\S]*?content:\s*`([\s\S]*?)`,\n\s*},/);
const gmContent = gmMatch[1];

const template = (title, content, date) => `import Link from "next/link";
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
            ${title}
          </h1>
          <div className="flex items-center gap-3 text-sm text-white/40 mb-10">
            <span>Product Teardown</span>
            <span>·</span>
            <span>${date}</span>
          </div>
        </div>

        <div className="content-page text-white/70 leading-relaxed" dangerouslySetInnerHTML={{ __html: \`${content.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\` }} />

        <style dangerouslySetInnerHTML={{ __html: \`
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
        \`}} />
      </div>
    </div>
  );
}
`;

fs.writeFileSync('/Users/abhisheknagaraja/Documents/Tardis/abhishek-pm-workspace/app/content/clash-of-clans-teardown/page.tsx', template("Clash of Clans Teardown", cocContent, "March 2024"));
fs.writeFileSync('/Users/abhisheknagaraja/Documents/Tardis/abhishek-pm-workspace/app/content/google-maps-teardown/page.tsx', template("Google Maps Teardown", gmContent, "July 2024"));

console.log("Files updated successfully!");
