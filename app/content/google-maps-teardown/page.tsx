import Link from "next/link";
import { ArrowLeft, MapPin } from "lucide-react";

export default function GoogleMapsTeardown() {
  return (
    <div className="h-full overflow-y-auto w-full">
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20 max-w-3xl mx-auto mt-8 px-4 sm:px-6">
        <div className="mb-10">
        <Link href="/spaces/case-studies" className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Spaces
        </Link>
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-brand/12 border border-brand/15 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(var(--brand-color),0.1)]">
            <MapPin className="w-7 h-7 text-brand" />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-2" style={{ fontFamily: "var(--font-montserrat)" }}>
              Google Maps Teardown
            </h1>
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-sm text-white/50">Navigation</span>
              <span className="text-white/20">•</span>
              <span className="text-sm text-white/50">2024</span>
            </div>
          </div>
        </div>
        <p className="text-lg text-white/70 leading-relaxed">
          How Maps evolved from navigation to a local discovery platform — and why the review ecosystem is their true moat.
        </p>
      </div>

      <div className="rounded-xl p-6 mb-10 border-l-4 border-brand/40 bg-brand/5">
        <p className="text-xs text-brand/50 uppercase tracking-widest mb-2 font-bold">Key Insight</p>
        <p className="text-lg text-brand/90 italic font-medium leading-relaxed">&ldquo;Google Maps isn&apos;t a map. It&apos;s a local intent engine with navigation as the hook.&rdquo;</p>
      </div>

      <article className="prose prose-invert prose-brand max-w-none space-y-6 text-white/70">
        <h2 className="text-xl font-bold text-white mt-8 mb-4 border-b border-white/10 pb-2" style={{ fontFamily: "var(--font-montserrat)" }}>1. The Trojan Horse Strategy</h2>
        <p>
          At its inception, Google Maps solved a purely utilitarian problem: getting from Point A to Point B. But navigation was just the wedge. By commoditizing directions (and offering them for free, undercutting Garmin and TomTom), Google secured prime real estate on millions of mobile devices.
        </p>
        <p>
          Once navigation became a daily habit, the product expanded its scope. It didn&apos;t just tell you how to get somewhere; it started telling you <strong>where</strong> you should go.
        </p>

        <h2 className="text-xl font-bold text-white mt-8 mb-4 border-b border-white/10 pb-2" style={{ fontFamily: "var(--font-montserrat)" }}>2. The Review Ecosystem Moat</h2>
        <p>
          The most defensible part of Google Maps isn&apos;t its satellite imagery or routing algorithms—it&apos;s the user-generated content (UGC). The local guide program gamified reviews, photos, and business updates. 
        </p>
        <p>
          Today, it&apos;s nearly impossible for a competitor like Apple Maps to match the sheer density of reviews, opening hours, and real-time busyness data that Google crowdsources daily. The map is just the canvas; the UGC is the product.
        </p>

        <h2 className="text-xl font-bold text-white mt-8 mb-4 border-b border-white/10 pb-2" style={{ fontFamily: "var(--font-montserrat)" }}>3. Local Intent as a Monetization Engine</h2>
        <p>
          Search intent on Google.com is broad ("how to tie a tie"). Search intent on Google Maps is highly transactional ("coffee near me"). This local, high-intent search is incredibly lucrative.
        </p>
        <p>
          By seamlessly integrating sponsored pins and local ads into the map interface, Google monetizes the offline world. It bridges the gap between digital discovery and physical foot traffic, making it an indispensable B2B2C platform for local businesses.
        </p>

        <h2 className="text-xl font-bold text-white mt-8 mb-4 border-b border-white/10 pb-2" style={{ fontFamily: "var(--font-montserrat)" }}>Takeaway for PMs</h2>
        <p>
          Utility drives adoption, but ecosystems drive retention. If you can build a tool that users rely on daily, look for ways to layer a network effect or UGC ecosystem on top of it to build a lasting moat.
        </p>
      </article>
    </div>
    </div>
  );
}
