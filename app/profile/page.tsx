import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Link2, GitBranch, Mail, Calendar, MapPin, ExternalLink } from "lucide-react";
import { personalInfo, education, companies, startups, communities, impactMetrics, skills, featured } from "@/data/portfolioData";
import ProfileTOC from "@/components/profile/ProfileTOC";

export const metadata: Metadata = { title: "Profile — Abhishek Nagaraja" };

export default function ProfilePage() {
  return (
    <div className="h-full overflow-y-auto pb-24 md:pb-6">
      <div className="max-w-5xl mx-auto px-4 py-8 flex gap-8">

        {/* Main content */}
        <div className="flex-1 min-w-0 max-w-3xl">

          {/* Hero card */}
          <div id="hero" className="relative rounded-2xl overflow-hidden mb-6 p-6 scroll-mt-20"
            style={{ background: "linear-gradient(145deg, hsl(0 0% 10%) 0%, hsl(0 0% 8%) 100%)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <div className="absolute top-0 left-0 right-0 h-24 opacity-30"
              style={{ background: "linear-gradient(135deg, hsl(14 100% 60% / 0.15), hsl(280 35% 70% / 0.10))" }} />
            <div className="relative flex items-start gap-5">
              <div className="w-20 h-20 rounded-2xl overflow-hidden ring-2 ring-brand/30 shadow-xl shadow-brand/10 shrink-0">
                <Image src="/profile-main.jpg" alt="Abhishek" width={80} height={80}
                  className="object-cover w-full h-full" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-3 flex-wrap">
                  <div>
                    <h1 className="text-xl font-bold text-white" style={{ fontFamily: 'var(--font-montserrat)' }}>
                      {personalInfo.name}
                    </h1>
                    <p className="text-sm text-brand font-medium mt-0.5">{personalInfo.tagline}</p>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    {personalInfo.openToWork?.map((loc) => (
                      <span key={loc} className="flex items-center gap-1 text-[10px] bg-green-500/10 border border-green-500/20 text-green-400 px-2 py-0.5 rounded-full font-medium">
                        <MapPin className="w-2.5 h-2.5" /> {loc}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-white/50 mt-2 leading-relaxed">{personalInfo.description}</p>

                <div className="flex items-center gap-3 mt-4 flex-wrap">
                  <a href={personalInfo.socialLinks.linkedin} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-white/40 hover:text-brand transition-colors">
                    <Link2 className="w-3.5 h-3.5" /> LinkedIn
                  </a>
                  {personalInfo.socialLinks.github && (
                    <a href={personalInfo.socialLinks.github} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-white/40 hover:text-brand transition-colors">
                      <GitBranch className="w-3.5 h-3.5" /> GitHub
                    </a>
                  )}
                  <a href={`mailto:${personalInfo.email}`}
                    className="flex items-center gap-1.5 text-xs text-white/40 hover:text-brand transition-colors">
                    <Mail className="w-3.5 h-3.5" /> {personalInfo.email}
                  </a>
                  <a href={personalInfo.calendarLink} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs bg-brand/10 border border-brand/20 text-brand px-2.5 py-1 rounded-lg hover:bg-brand/20 transition-colors font-medium">
                    <Calendar className="w-3.5 h-3.5" /> Book a Call
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Impact metrics */}
          <div id="impact" className="grid grid-cols-3 gap-3 mb-6 scroll-mt-20">
            {impactMetrics.map((m) => (
              <div key={m.id} className="rounded-xl p-4 text-center"
                style={{ background: "linear-gradient(145deg, hsl(0 0% 10%) 0%, hsl(0 0% 8%) 100%)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <p className="text-lg font-bold text-brand" style={{ fontFamily: 'var(--font-montserrat)' }}>{m.value}</p>
                <p className="text-[10px] text-white/40 mt-0.5 leading-tight">{m.label}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div id="what-i-do" className="scroll-mt-20">
              <Section title="What I Do">
                <div className="flex flex-wrap gap-1.5">
                  {personalInfo.roles.slice(0, 10).map((r) => (
                    <span key={r} className="text-xs px-2.5 py-1 rounded-lg bg-white/4 border border-white/6 text-white/60">
                      {r}
                    </span>
                  ))}
                </div>
              </Section>
            </div>

            <div id="skills" className="scroll-mt-20">
              <Section title="Core Skills">
                <div className="flex flex-col gap-2">
                  {skills.slice(0, 5).map((s) => (
                    <div key={s.id} className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-medium text-white">{s.name}</p>
                        <p className="text-[10px] text-white/35">{s.category}</p>
                      </div>
                      <div className="flex gap-0.5">
                        {[1,2,3,4,5].map((n) => (
                          <span key={n} className={`w-1.5 h-1.5 rounded-full ${n <= s.level ? "bg-brand" : "bg-white/10"}`} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Section>
            </div>

            <div id="experience" className="scroll-mt-20">
              <Section title="Work Experience">
                <div className="flex flex-col gap-3">
                  {companies.map((c) => (
                    <div key={c.id} className="border-l-2 border-brand/30 pl-3">
                      <p className="text-xs font-semibold text-white" style={{ fontFamily: 'var(--font-montserrat)' }}>{c.role}</p>
                      <p className="text-[11px] text-brand/80">{c.name}</p>
                      <p className="text-[10px] text-white/35 mt-0.5">{c.period}</p>
                    </div>
                  ))}
                </div>
              </Section>
            </div>

            <div id="education" className="scroll-mt-20">
              <Section title="Education">
                <div className="flex flex-col gap-3">
                  {education.map((e) => (
                    <div key={e.id} className="border-l-2 border-brand-purple/30 pl-3">
                      <p className="text-xs font-semibold text-white" style={{ fontFamily: 'var(--font-montserrat)' }}>{e.degree}</p>
                      <p className="text-[11px] text-white/50">{e.university}</p>
                      <p className="text-[10px] text-white/30 mt-0.5">{e.location}</p>
                    </div>
                  ))}
                </div>
              </Section>
            </div>

            <div id="startups" className="scroll-mt-20">
              <Section title="Startups Founded">
                <div className="flex flex-col gap-2">
                  {startups.map((s) => (
                    <div key={s.id} className="flex items-start gap-2">
                      <span className="text-brand text-xs mt-0.5">▸</span>
                      <div>
                        <p className="text-xs font-medium text-white">{s.name}</p>
                        <p className="text-[10px] text-white/35">{s.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Section>
            </div>

            <div id="communities" className="scroll-mt-20">
              <Section title="Communities Built">
                <div className="flex flex-col gap-2">
                  {communities.map((c) => (
                    <div key={c.id} className="flex items-center justify-between">
                      <p className="text-xs text-white/70">{c.name}</p>
                      <span className="text-[10px] bg-green-500/10 border border-green-500/20 text-green-400 px-1.5 py-0.5 rounded-full">
                        {c.status}
                      </span>
                    </div>
                  ))}
                </div>
              </Section>
            </div>
          </div>

          <div id="featured" className="mt-4 scroll-mt-20">
            <Section title="Featured & Media">
              <div className="grid sm:grid-cols-2 gap-2">
                {featured.map((f) => (
                  <a key={f.id} href={f.url} target="_blank" rel="noopener noreferrer"
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-white/3 border border-white/6 hover:bg-white/6 hover:border-brand/20 transition-all group">
                    <div className="w-6 h-6 rounded-lg bg-brand/15 border border-brand/20 flex items-center justify-center shrink-0 mt-0.5">
                      <ExternalLink className="w-3 h-3 text-brand" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-medium text-white group-hover:text-brand transition-colors leading-tight">{f.title}</p>
                      <p className="text-[10px] text-white/35 mt-0.5 line-clamp-2">{f.description}</p>
                      <p className="text-[10px] text-white/20 mt-1">{f.date}</p>
                    </div>
                  </a>
                ))}
              </div>
            </Section>
          </div>

          <div id="team" className="mt-4 scroll-mt-20">
            <Section title="Team">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="rounded-xl p-3 border border-white/7 bg-white/3 flex flex-col gap-2">
                  <div className="w-8 h-8 rounded-xl overflow-hidden ring-1 ring-brand/20 shrink-0">
                    <div className="w-full h-full bg-gradient-to-br from-brand/30 to-purple-500/30 flex items-center justify-center text-sm">🤖</div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white" style={{ fontFamily: 'var(--font-montserrat)' }}>Claude</p>
                    <p className="text-[10px] text-white/40 mt-0.5">AI Collaborator</p>
                    <span className="inline-block mt-1.5 text-[9px] px-1.5 py-0.5 rounded-md bg-brand/10 border border-brand/15 text-brand/80 font-medium">Anthropic</span>
                  </div>
                </div>

                <div className="rounded-xl p-3 border border-white/7 bg-white/3 flex flex-col gap-2">
                  <div className="w-8 h-8 rounded-xl overflow-hidden ring-1 ring-purple-500/20 shrink-0">
                    <div className="w-full h-full bg-gradient-to-br from-purple-500/30 to-blue-500/30 flex items-center justify-center text-sm">🚀</div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white" style={{ fontFamily: 'var(--font-montserrat)' }}>Antigravity</p>
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
                      <p className="text-xs font-semibold text-white" style={{ fontFamily: 'var(--font-montserrat)' }}>{tech.name}</p>
                      <p className="text-[10px] text-white/40 mt-0.5">{tech.role}</p>
                      <span className="inline-block mt-1.5 text-[9px] px-1.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-white/35 font-medium">Stack</span>
                    </div>
                  </div>
                ))}
              </div>
            </Section>
          </div>

        </div>

        {/* TOC sidebar */}
        <ProfileTOC />

      </div>
    </div>
  );
}

function Section({ title, children, className = "" }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-xl p-4 ${className}`}
      style={{ background: "linear-gradient(145deg, hsl(0 0% 10%) 0%, hsl(0 0% 8%) 100%)", border: "1px solid rgba(255,255,255,0.07)" }}>
      <h3 className="text-xs font-bold text-white/50 uppercase tracking-widest mb-3" style={{ fontFamily: 'var(--font-montserrat)' }}>
        {title}
      </h3>
      {children}
    </div>
  );
}
