"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  personalInfo, companies, startups, communities, impactMetrics,
  skills, featured, blogPosts, productTeardowns, githubRepositories,
  portfolioWebsites, education, testimonials,
} from "@/data/portfolioData";
import { ExternalLink, Mail, Calendar, Link2, GitBranch, ArrowRight, Star, MapPin } from "lucide-react";

const ROLES = ["Product Builder", "AI Developer", "Freelance Consultant", "Technical PM", "Vibe Coder"];

function RotatingRole() {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setInterval(() => {
      setVisible(false);
      setTimeout(() => { setIdx((i) => (i + 1) % ROLES.length); setVisible(true); }, 400);
    }, 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <span
      className="inline-block font-bold transition-all duration-400"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(-8px)",
        background: "linear-gradient(90deg, hsl(14 100% 60%), hsl(280 35% 70%))",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      {ROLES[idx]}
    </span>
  );
}

function Section({ id, title, children }: { id?: string; title?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="py-12 border-b border-white/6">
      {title && (
        <h2 className="text-xs font-bold text-white/30 uppercase tracking-widest mb-6" style={{ fontFamily: "var(--font-montserrat)" }}>
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 border border-white/8 text-white/40">
      {children}
    </span>
  );
}

export default function ClassicView() {
  const allProjects = [
    ...githubRepositories.slice(0, 6).map((p) => ({ ...p, url: p.github ?? "#" })),
    ...portfolioWebsites.slice(0, 3),
  ];

  return (
    <div className="min-h-screen bg-background text-white">
      <div className="max-w-2xl mx-auto px-5 pb-24">

        {/* Hero */}
        <section className="pt-16 pb-12 border-b border-white/6">
          <div className="flex items-start gap-5 mb-8">
            <div className="w-20 h-20 rounded-2xl overflow-hidden ring-2 ring-brand/30 shadow-xl shadow-brand/10 shrink-0">
              <Image src="/profile-main.jpg" alt="Abhishek" width={80} height={80} className="object-cover w-full h-full" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white mb-1" style={{ fontFamily: "var(--font-montserrat)" }}>
                Abhishek Nagaraja
              </h1>
              <div className="text-lg mb-2">
                <RotatingRole />
              </div>
              <p className="text-xs text-white/40 flex items-center gap-1.5">
                <MapPin className="w-3 h-3" /> Arlington, TX · Open to US, Dubai, Japan
              </p>
            </div>
          </div>

          <p className="text-sm text-white/60 leading-relaxed mb-6">
            {personalInfo.description}
          </p>

          <div className="flex flex-wrap gap-2">
            <a href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-brand text-white hover:opacity-90 transition-opacity"
              style={{ fontFamily: "var(--font-montserrat)" }}>
              <Mail className="w-3.5 h-3.5" /> Email me
            </a>
            <a href={personalInfo.calendarLink} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white/6 border border-white/10 text-white/70 hover:text-white transition-colors">
              <Calendar className="w-3.5 h-3.5" /> Book a call
            </a>
            <a href="https://linkedin.com/in/nagarajaabhishek" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white/6 border border-white/10 text-white/70 hover:text-white transition-colors">
              <Link2 className="w-3.5 h-3.5" /> LinkedIn
            </a>
            <a href="https://github.com/nagarajaabhishek" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white/6 border border-white/10 text-white/70 hover:text-white transition-colors">
              <GitBranch className="w-3.5 h-3.5" /> GitHub
            </a>
          </div>
        </section>

        {/* Impact */}
        <Section id="impact" title="Impact at a Glance">
          <div className="grid grid-cols-3 gap-3">
            {impactMetrics.map((m) => (
              <div key={m.value} className="rounded-xl p-4 text-center"
                style={{ background: "linear-gradient(145deg, hsl(0 0% 10%), hsl(0 0% 8%))", border: "1px solid rgba(255,255,255,0.07)" }}>
                <p className="text-xl font-bold text-brand mb-1" style={{ fontFamily: "var(--font-montserrat)" }}>{m.value}</p>
                <p className="text-[10px] text-white/40 leading-tight">{m.label}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Experience */}
        <Section id="experience" title="Experience">
          <div className="flex flex-col gap-4">
            {companies.map((c) => (
              <motion.div key={c.id} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3 }}
                className="flex gap-4 p-4 rounded-xl group hover:bg-white/3 transition-colors border border-transparent hover:border-white/6">
                <div className="w-1 rounded-full bg-brand/40 shrink-0 self-stretch" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-white" style={{ fontFamily: "var(--font-montserrat)" }}>{c.role}</p>
                  <p className="text-xs text-brand/80 mb-1">{c.name}</p>
                  <p className="text-[11px] text-white/35 mb-2">{c.period}</p>
                  <p className="text-xs text-white/50 leading-relaxed">{c.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Education */}
        <Section id="education" title="Education">
          <div className="flex flex-col gap-3">
            {education.map((e) => (
              <div key={e.id} className="flex gap-4 p-4 rounded-xl"
                style={{ background: "linear-gradient(145deg, hsl(0 0% 10%), hsl(0 0% 8%))", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="w-1 rounded-full bg-purple-400/40 shrink-0 self-stretch" />
                <div>
                  <p className="text-sm font-semibold text-white" style={{ fontFamily: "var(--font-montserrat)" }}>{e.degree}</p>
                  <p className="text-xs text-purple-300/80 mb-1">{e.university}</p>
                  <p className="text-[11px] text-white/35">{e.location}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Projects */}
        <Section id="projects" title="Projects & Builds">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {allProjects.map((p) => (
              <motion.a key={p.id} href={p.url} target="_blank" rel="noopener noreferrer"
                initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3 }}
                className="block p-4 rounded-xl group hover:border-brand/20 transition-all"
                style={{ background: "linear-gradient(145deg, hsl(0 0% 10%), hsl(0 0% 8%))", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-sm font-semibold text-white group-hover:text-brand transition-colors leading-tight" style={{ fontFamily: "var(--font-montserrat)" }}>
                    {p.name}
                  </h3>
                  <ExternalLink className="w-3.5 h-3.5 text-white/20 group-hover:text-brand transition-colors shrink-0 mt-0.5" />
                </div>
                <p className="text-[11px] text-white/40 leading-relaxed mb-3 line-clamp-2">{p.description}</p>
                <div className="flex flex-wrap gap-1">
                  {("stack" in p ? p.stack : p.labels)?.slice(0, 3).map((t: string) => <Tag key={t}>{t}</Tag>)}
                </div>
              </motion.a>
            ))}
          </div>
        </Section>

        {/* Skills */}
        <Section id="skills" title="Skills">
          <div className="flex flex-col gap-2">
            {skills.slice(0, 8).map((s) => (
              <div key={s.name} className="flex items-center gap-3">
                <div className="w-32 shrink-0">
                  <p className="text-xs text-white/60 truncate">{s.name}</p>
                  <p className="text-[10px] text-white/25">{s.category}</p>
                </div>
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="w-2 h-2 rounded-full"
                      style={{ background: i < s.level ? "hsl(14 100% 60%)" : "rgba(255,255,255,0.08)" }} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Startups */}
        <Section id="startups" title="Startups Founded">
          <div className="flex flex-col gap-3">
            {startups.map((s) => (
              <div key={s.id} className="p-4 rounded-xl"
                style={{ background: "linear-gradient(145deg, hsl(0 0% 10%), hsl(0 0% 8%))", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="flex items-start justify-between gap-2 mb-1">
                  <p className="text-sm font-semibold text-white" style={{ fontFamily: "var(--font-montserrat)" }}>{s.name}</p>
                  {"status" in s && <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-brand/10 border border-brand/15 text-brand/80">{(s as {status: string}).status}</span>}
                </div>
                <p className="text-xs text-white/40 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Communities */}
        <Section id="communities" title="Communities Built">
          <div className="flex flex-col gap-3">
            {communities.map((c) => (
              <div key={c.id} className="flex items-center gap-3 p-3 rounded-xl"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="w-8 h-8 rounded-lg bg-brand/10 border border-brand/15 flex items-center justify-center shrink-0">
                  <span className="text-sm">🏘️</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-white">{c.name}</p>
                  {"role" in c && <p className="text-[10px] text-white/35">{(c as {role:string}).role}</p>}
                </div>
                {"members" in c && <span className="text-[10px] text-brand font-medium shrink-0">{(c as {members:string}).members}</span>}
              </div>
            ))}
          </div>
        </Section>

        {/* Featured & Media */}
        <Section id="media" title="Featured & Media">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {featured.map((f) => (
              <a key={f.id} href={f.url} target="_blank" rel="noopener noreferrer"
                className="block p-3 rounded-xl group hover:border-brand/20 transition-all"
                style={{ background: "linear-gradient(145deg, hsl(0 0% 10%), hsl(0 0% 8%))", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="flex items-start gap-2.5">
                  <div className="w-6 h-6 rounded-lg bg-brand/12 border border-brand/15 flex items-center justify-center shrink-0">
                    <ExternalLink className="w-3 h-3 text-brand" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-white group-hover:text-brand transition-colors leading-snug">{f.title}</p>
                    <p className="text-[10px] text-white/30 mt-0.5">{f.date}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </Section>

        {/* Testimonials */}
        {testimonials && testimonials.length > 0 && (
          <Section id="testimonials" title="Kind Words">
            <div className="flex flex-col gap-4">
              {testimonials.slice(0, 3).map((t) => (
                <div key={t.id} className="p-4 rounded-xl border-l-2 border-brand/30"
                  style={{ background: "hsl(14 100% 60% / 0.04)", border: "1px solid rgba(255,255,255,0.06)", borderLeft: "2px solid hsl(14 100% 60% / 0.3)" }}>
                  <p className="text-sm text-white/60 italic leading-relaxed mb-3">&ldquo;{t.quote}&rdquo;</p>
                  <div>
                    <p className="text-xs font-semibold text-white">{t.author}</p>
                    <p className="text-[10px] text-white/35">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* Footer CTA */}
        <section className="pt-12 pb-6 text-center">
          <p className="text-white/30 text-xs mb-4">Want to see how I think and work?</p>
          <Link href="/docs"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand text-white text-sm font-semibold hover:opacity-90 transition-opacity"
            style={{ fontFamily: "var(--font-montserrat)" }}>
            Explore the Workspace <ArrowRight className="w-4 h-4" />
          </Link>
          <p className="text-white/20 text-[10px] mt-6">
            Built by Abhishek Nagaraja · {new Date().getFullYear()}
          </p>
        </section>

      </div>
    </div>
  );
}
