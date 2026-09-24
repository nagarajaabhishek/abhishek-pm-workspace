import { Download, ExternalLink } from "lucide-react";
import { personalInfo, education, companies, startups, skills } from "@/data/portfolioData";
import SpacesPageHeader from "@/components/spaces/SpacesPageHeader";
import { getSpacePage } from "@/data/spacesData";

export default function ResumeDoc() {
  const page = getSpacePage("resume")!;

  return (
    <div>
      <SpacesPageHeader page={page} />

      <div className="rounded-xl p-5 mb-6"
        style={{ background: "linear-gradient(145deg, hsl(0 0% 10%) 0%, hsl(0 0% 8%) 100%)", border: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-xl font-bold text-white" style={{ fontFamily: "var(--font-montserrat)" }}>{personalInfo.name}</h2>
            <p className="text-sm text-brand mt-0.5">{personalInfo.tagline}</p>
            <p className="text-xs text-white/40 mt-2">{personalInfo.email}</p>
          </div>
          <div className="flex gap-2">
            <a href="https://abhisheknagaraja.com" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/60 hover:bg-white/8 transition-colors">
              <ExternalLink className="w-3.5 h-3.5" /> Portfolio
            </a>
            <a href={`mailto:${personalInfo.email}?subject=Resume Request`}
              className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-brand/10 border border-brand/20 text-brand hover:bg-brand/20 transition-colors font-medium">
              <Download className="w-3.5 h-3.5" /> Request PDF
            </a>
          </div>
        </div>
      </div>

      <section className="mb-8">
        <h2 className="text-sm font-bold text-white/60 uppercase tracking-widest mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>Summary</h2>
        <p className="text-sm text-white/60 leading-relaxed">{personalInfo.description}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-sm font-bold text-white/60 uppercase tracking-widest mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>Experience</h2>
        <div className="flex flex-col gap-4">
          {companies.map((c) => (
            <div key={c.id} className="border-l-2 border-brand/30 pl-4">
              <p className="text-sm font-semibold text-white" style={{ fontFamily: "var(--font-montserrat)" }}>{c.role}</p>
              <p className="text-xs text-brand/80">{c.name}</p>
              <p className="text-[11px] text-white/35 mt-0.5">{c.period}</p>
              {"description" in c && c.description && (
                <p className="text-xs text-white/45 mt-1">{c.description}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-sm font-bold text-white/60 uppercase tracking-widest mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>Startups Founded</h2>
        <div className="flex flex-col gap-3">
          {startups.map((s) => (
            <div key={s.id} className="flex items-start gap-2">
              <span className="text-brand text-xs mt-1">▸</span>
              <div>
                <p className="text-sm font-medium text-white">{s.name}</p>
                <p className="text-xs text-white/40">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-sm font-bold text-white/60 uppercase tracking-widest mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>Education</h2>
        <div className="flex flex-col gap-4">
          {education.map((e) => (
            <div key={e.id} className="border-l-2 border-brand-purple/30 pl-4">
              <p className="text-sm font-semibold text-white" style={{ fontFamily: "var(--font-montserrat)" }}>{e.degree}</p>
              <p className="text-xs text-white/50">{e.university}</p>
              <p className="text-[11px] text-white/30 mt-0.5">{e.location}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-sm font-bold text-white/60 uppercase tracking-widest mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>Skills</h2>
        <div className="grid sm:grid-cols-2 gap-2">
          {skills.map((s) => (
            <div key={s.id} className="flex items-center justify-between rounded-lg px-3 py-2 bg-white/3 border border-white/6">
              <div>
                <p className="text-xs font-medium text-white">{s.name}</p>
                <p className="text-[10px] text-white/35">{s.category}</p>
              </div>
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((n) => (
                  <span key={n} className={`w-1.5 h-1.5 rounded-full ${n <= s.level ? "bg-brand" : "bg-white/10"}`} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
