import Image from "next/image";
import { MapPin, Mail, Calendar, ExternalLink, GitBranch } from "lucide-react";
import { personalInfo, impactMetrics, skills, sectors, hobbies, communities } from "@/data/portfolioData";
import DocsPageHeader from "@/components/docs/DocsPageHeader";
import { getDocPage } from "@/data/docsData";

export default function AboutMeDoc() {
  const page = getDocPage("about")!;

  return (
    <div>
      <DocsPageHeader page={page} />

      <div className="rounded-xl p-5 mb-6 flex items-start gap-4"
        style={{ background: "linear-gradient(145deg, hsl(0 0% 10%) 0%, hsl(0 0% 8%) 100%)", border: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="w-16 h-16 rounded-xl overflow-hidden ring-2 ring-brand/30 shrink-0">
          <Image src="/profile-main.jpg" alt="Abhishek" width={64} height={64} className="object-cover w-full h-full" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-white" style={{ fontFamily: "var(--font-montserrat)" }}>{personalInfo.name}</h2>
          <p className="text-sm text-brand font-medium">{personalInfo.tagline}</p>
          <p className="text-sm text-white/50 mt-2 leading-relaxed">{personalInfo.description}</p>
          <div className="flex items-center gap-3 mt-3 flex-wrap">
            {personalInfo.openToWork?.map((loc) => (
              <span key={loc} className="flex items-center gap-1 text-[10px] bg-green-500/10 border border-green-500/20 text-green-400 px-2 py-0.5 rounded-full">
                <MapPin className="w-2.5 h-2.5" /> Open to work · {loc}
              </span>
            ))}
            {personalInfo.socialLinks.github && (
              <a href={personalInfo.socialLinks.github} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-white/40 hover:text-brand transition-colors">
                <GitBranch className="w-3.5 h-3.5" /> GitHub
              </a>
            )}
          </div>
        </div>
      </div>

      <section className="mb-8">
        <h2 className="text-sm font-bold text-white/60 uppercase tracking-widest mb-3" style={{ fontFamily: "var(--font-montserrat)" }}>Mission</h2>
        <p className="text-sm text-white/60 leading-relaxed border-l-2 border-brand/40 pl-4 italic">
          &ldquo;{personalInfo.mission}&rdquo;
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-sm font-bold text-white/60 uppercase tracking-widest mb-3" style={{ fontFamily: "var(--font-montserrat)" }}>Impact at a Glance</h2>
        <div className="grid sm:grid-cols-3 gap-3">
          {impactMetrics.map((m) => (
            <div key={m.id} className="rounded-xl p-4 text-center"
              style={{ background: "linear-gradient(145deg, hsl(0 0% 10%) 0%, hsl(0 0% 8%) 100%)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <p className="text-xl font-bold text-brand" style={{ fontFamily: "var(--font-montserrat)" }}>{m.value}</p>
              <p className="text-xs text-white/50 mt-1">{m.label}</p>
              <p className="text-[10px] text-white/30 mt-1">{m.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-sm font-bold text-white/60 uppercase tracking-widest mb-3" style={{ fontFamily: "var(--font-montserrat)" }}>What I Do</h2>
        <div className="flex flex-wrap gap-1.5">
          {personalInfo.roles.map((r) => (
            <span key={r} className="text-xs px-2.5 py-1 rounded-lg bg-white/4 border border-white/6 text-white/60">{r}</span>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-sm font-bold text-white/60 uppercase tracking-widest mb-3" style={{ fontFamily: "var(--font-montserrat)" }}>Core Skills</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {skills.map((s) => (
            <div key={s.id} className="rounded-xl p-4"
              style={{ background: "linear-gradient(145deg, hsl(0 0% 10%) 0%, hsl(0 0% 8%) 100%)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <div className="flex items-center justify-between mb-1">
                <p className="text-sm font-semibold text-white">{s.name}</p>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <span key={n} className={`w-1.5 h-1.5 rounded-full ${n <= s.level ? "bg-brand" : "bg-white/10"}`} />
                  ))}
                </div>
              </div>
              <p className="text-xs text-white/40 mb-2">{s.description}</p>
              <div className="flex flex-wrap gap-1">
                {s.tags.map((t) => (
                  <span key={t} className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 text-white/35">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-sm font-bold text-white/60 uppercase tracking-widest mb-3" style={{ fontFamily: "var(--font-montserrat)" }}>Sectors</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-white/40 mb-2">Experienced</p>
            <div className="flex flex-wrap gap-1.5">
              {sectors.experienced.map((s) => (
                <span key={s} className="text-[10px] px-2 py-0.5 rounded-md bg-brand/10 border border-brand/15 text-brand/80">{s}</span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs text-white/40 mb-2">Future Focus</p>
            <div className="flex flex-wrap gap-1.5">
              {sectors.future.map((s) => (
                <span key={s} className="text-[10px] px-2 py-0.5 rounded-md bg-purple-500/10 border border-purple-500/15 text-purple-300/80">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-sm font-bold text-white/60 uppercase tracking-widest mb-3" style={{ fontFamily: "var(--font-montserrat)" }}>Communities Built</h2>
        <div className="grid sm:grid-cols-2 gap-2">
          {communities.map((c) => (
            <div key={c.id} className="flex items-center justify-between rounded-lg px-3 py-2 bg-white/3 border border-white/6">
              <p className="text-sm text-white/70">{c.name}</p>
              <span className="text-[10px] bg-green-500/10 border border-green-500/20 text-green-400 px-1.5 py-0.5 rounded-full">
                {c.status}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-sm font-bold text-white/60 uppercase tracking-widest mb-3" style={{ fontFamily: "var(--font-montserrat)" }}>Beyond Work</h2>
        <div className="grid sm:grid-cols-2 gap-2">
          {hobbies.map((h) => (
            <div key={h.name} className="rounded-lg p-3 bg-white/3 border border-white/6">
              <p className="text-sm font-medium text-white">{h.name}</p>
              <p className="text-xs text-white/40 mt-0.5">{h.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-sm font-bold text-white/60 uppercase tracking-widest mb-3" style={{ fontFamily: "var(--font-montserrat)" }}>Built With</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          <div className="rounded-xl p-3 border border-white/7 bg-white/3 flex flex-col gap-2">
            <div className="w-8 h-8 rounded-xl overflow-hidden ring-1 ring-brand/20 shrink-0">
              <div className="w-full h-full bg-gradient-to-br from-brand/30 to-purple-500/30 flex items-center justify-center text-sm">🤖</div>
            </div>
            <div>
              <p className="text-xs font-semibold text-white" style={{ fontFamily: "var(--font-montserrat)" }}>Claude</p>
              <p className="text-[10px] text-white/40 mt-0.5">AI Collaborator</p>
              <span className="inline-block mt-1.5 text-[9px] px-1.5 py-0.5 rounded-md bg-brand/10 border border-brand/15 text-brand/80 font-medium">Anthropic</span>
            </div>
          </div>

          <div className="rounded-xl p-3 border border-white/7 bg-white/3 flex flex-col gap-2">
            <div className="w-8 h-8 rounded-xl overflow-hidden ring-1 ring-purple-500/20 shrink-0">
              <div className="w-full h-full bg-gradient-to-br from-purple-500/30 to-blue-500/30 flex items-center justify-center text-sm">🚀</div>
            </div>
            <div>
              <p className="text-xs font-semibold text-white" style={{ fontFamily: "var(--font-montserrat)" }}>Antigravity</p>
              <p className="text-[10px] text-white/40 mt-0.5">PM Accelerator</p>
              <span className="inline-block mt-1.5 text-[9px] px-1.5 py-0.5 rounded-md bg-purple-500/10 border border-purple-500/15 text-purple-300/80 font-medium">Mentor</span>
            </div>
          </div>

          {[
            { name: "Next.js 15", role: "Frontend Framework", emoji: "▲" },
            { name: "Python", role: "Backend & Agents", emoji: "🐍" },
            { name: "LangGraph", role: "Agent Orchestration", emoji: "🔗" },
            { name: "TypeScript", role: "Type-safe Development", emoji: "TS" },
            { name: "Supabase", role: "Database & Auth", emoji: "⚡" },
            { name: "React Native", role: "Mobile Development", emoji: "📱" },
          ].map((tech) => (
            <div key={tech.name} className="rounded-xl p-3 border border-white/7 bg-white/3 flex flex-col gap-2">
              <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xs font-bold text-white/60">
                {tech.emoji}
              </div>
              <div>
                <p className="text-xs font-semibold text-white" style={{ fontFamily: "var(--font-montserrat)" }}>{tech.name}</p>
                <p className="text-[10px] text-white/40 mt-0.5">{tech.role}</p>
                <span className="inline-block mt-1.5 text-[9px] px-1.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-white/35 font-medium">Stack</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-sm font-bold text-white/60 uppercase tracking-widest mb-3" style={{ fontFamily: "var(--font-montserrat)" }}>Get in Touch</h2>
        <div className="flex items-center gap-3 flex-wrap">
          <a href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-1.5 text-xs text-white/50 hover:text-brand transition-colors">
            <Mail className="w-3.5 h-3.5" /> {personalInfo.email}
          </a>
          <a href={personalInfo.calendarLink} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs bg-brand/10 border border-brand/20 text-brand px-2.5 py-1 rounded-lg hover:bg-brand/20 transition-colors">
            <Calendar className="w-3.5 h-3.5" /> Book a Call
          </a>
          <a href={personalInfo.socialLinks.linkedin} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-white/50 hover:text-brand transition-colors">
            <ExternalLink className="w-3.5 h-3.5" /> LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
}
