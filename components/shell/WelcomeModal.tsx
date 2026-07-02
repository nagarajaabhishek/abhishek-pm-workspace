"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ChevronRight, Link2 } from "lucide-react";

const ROLES = [
  { id: "recruiter", label: "Recruiter", emoji: "🎯" },
  { id: "founder", label: "Founder / CEO", emoji: "🚀" },
  { id: "pm", label: "Product Manager", emoji: "📋" },
  { id: "engineer", label: "Engineer", emoji: "⚙️" },
  { id: "designer", label: "Designer", emoji: "✏️" },
  { id: "other", label: "Just exploring", emoji: "👀" },
];

const INTENTS = [
  { id: "hire", label: "Hire or collaborate", emoji: "🤝" },
  { id: "learn", label: "See how Logan works", emoji: "📖" },
  { id: "project", label: "Discuss a project", emoji: "💬" },
  { id: "curious", label: "Just curious", emoji: "✨" },
];

interface Profile {
  email: string;
  role: string;
  intent: string;
}

const NETLIFY_FUNCTIONS_URL = process.env.NEXT_PUBLIC_FUNCTIONS_URL ?? "";

const STORAGE_KEY = "pm-workspace-welcomed";

export default function WelcomeModal() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0); // 0=role, 1=intent, 2=name
  const [profile, setProfile] = useState<Profile>({ email: "", role: "", intent: "" });
  const [submitting, setSubmitting] = useState(false);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    if (typeof window !== "undefined" && !localStorage.getItem(STORAGE_KEY)) {
      setOpen(true);
    }
  }, []);

  const advance = (patch: Partial<Profile>) => {
    const next = { ...profile, ...patch };
    setProfile(next);
    setDirection(1);
    if (step < 2) {
      setStep((s) => s + 1);
    } else {
      finish(next);
    }
  };

  const back = () => {
    setDirection(-1);
    setStep((s) => s - 1);
  };

  const finish = async (p: Profile) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
    if (p.email) {
      setSubmitting(true);
      try {
        await fetch(`${NETLIFY_FUNCTIONS_URL}/.netlify/functions/send-lead`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: p.email.split("@")[0],
            email: p.email,
            professional: p.role,
            message: `Intent: ${p.intent}`,
            source: "PM Workspace Onboarding",
          }),
        });
      } catch {
        // fail silently — visitor still enters the workspace
      } finally {
        setSubmitting(false);
      }
    }
    setOpen(false);
  };

  const skip = () => finish(profile);

  const variants = {
    enter: (d: number) => ({ x: d * 40, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d * -40, opacity: 0 }),
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/65 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative w-full max-w-sm mx-4 rounded-2xl overflow-hidden shadow-2xl"
            initial={{ scale: 0.93, opacity: 0, y: 16 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.93, opacity: 0, y: 16 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            style={{
              background: "linear-gradient(145deg, hsl(0 0% 10%) 0%, hsl(0 0% 7%) 100%)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {/* Glow accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-brand to-transparent" />

            {/* Progress bar */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-white/5">
              <motion.div
                className="h-full bg-brand"
                animate={{ width: `${((step + 1) / 3) * 100}%` }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
              />
            </div>

            <div className="p-7 pt-8">
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-xl overflow-hidden ring-1 ring-brand/30 shrink-0">
                  <Image src="/icon.png" alt="Logan" width={36} height={36} className="object-cover" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white" style={{ fontFamily: "var(--font-montserrat)" }}>
                    Logan&apos;s Workspace
                  </p>
                  <p className="text-[10px] text-white/35 mt-0.5">Step {step + 1} of 3</p>
                </div>
                <button
                  onClick={skip}
                  className="ml-auto text-[11px] text-white/25 hover:text-white/50 transition-colors"
                >
                  Skip
                </button>
              </div>

              {/* Animated step content */}
              <div className="overflow-hidden">
                <AnimatePresence mode="wait" custom={direction}>
                  {step === 0 && (
                    <motion.div
                      key="step-role"
                      custom={direction}
                      variants={variants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.22, ease: "easeInOut" }}
                    >
                      <h2 className="text-base font-bold text-white mb-1" style={{ fontFamily: "var(--font-montserrat)" }}>
                        What best describes you?
                      </h2>
                      <p className="text-[11px] text-white/35 mb-4">Helps me personalise your experience</p>
                      <div className="grid grid-cols-2 gap-2">
                        {ROLES.map((r) => (
                          <button
                            key={r.id}
                            onClick={() => advance({ role: r.id })}
                            className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-left transition-all group hover:border-brand/30 hover:bg-brand/5"
                            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
                          >
                            <span className="text-lg leading-none">{r.emoji}</span>
                            <span className="text-xs text-white/70 group-hover:text-white transition-colors font-medium leading-tight">
                              {r.label}
                            </span>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {step === 1 && (
                    <motion.div
                      key="step-intent"
                      custom={direction}
                      variants={variants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.22, ease: "easeInOut" }}
                    >
                      <h2 className="text-base font-bold text-white mb-1" style={{ fontFamily: "var(--font-montserrat)" }}>
                        What brings you here?
                      </h2>
                      <p className="text-[11px] text-white/35 mb-4">What are you hoping to explore?</p>
                      <div className="flex flex-col gap-2">
                        {INTENTS.map((intent) => (
                          <button
                            key={intent.id}
                            onClick={() => advance({ intent: intent.id })}
                            className="flex items-center gap-3 px-3.5 py-3 rounded-xl text-left transition-all group hover:border-brand/30 hover:bg-brand/5"
                            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
                          >
                            <span className="text-base leading-none">{intent.emoji}</span>
                            <span className="text-xs text-white/70 group-hover:text-white transition-colors font-medium">
                              {intent.label}
                            </span>
                            <ChevronRight className="w-3.5 h-3.5 text-white/20 group-hover:text-brand ml-auto transition-colors" />
                          </button>
                        ))}
                      </div>
                      <button onClick={back} className="mt-3 text-[11px] text-white/25 hover:text-white/50 transition-colors">
                        ← Back
                      </button>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      key="step-email"
                      custom={direction}
                      variants={variants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.22, ease: "easeInOut" }}
                    >
                      <h2 className="text-base font-bold text-white mb-1" style={{ fontFamily: "var(--font-montserrat)" }}>
                        Stay in touch?
                      </h2>
                      <p className="text-[11px] text-white/35 mb-4">Logan will send a personal intro — no spam, ever.</p>

                      <input
                        type="email"
                        placeholder="your@email.com"
                        value={profile.email}
                        onChange={(e) => setProfile((p) => ({ ...p, email: e.target.value }))}
                        onKeyDown={(e) => e.key === "Enter" && advance({})}
                        autoFocus
                        className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder:text-white/25 outline-none transition-all mb-3"
                        style={{
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.10)",
                        }}
                        onFocus={(e) => (e.target.style.borderColor = "hsl(14 100% 60% / 0.4)")}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.10)")}
                      />

                      <button
                        onClick={() => advance({})}
                        disabled={submitting}
                        className="w-full py-2.5 rounded-xl bg-brand hover:opacity-90 disabled:opacity-60 text-white text-sm font-semibold transition-opacity flex items-center justify-center gap-2 mb-3"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        {submitting ? "Sending…" : "Send intro email"} <ArrowRight className="w-4 h-4" />
                      </button>

                      {/* Divider */}
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex-1 h-px bg-white/8" />
                        <span className="text-[10px] text-white/25">or</span>
                        <div className="flex-1 h-px bg-white/8" />
                      </div>

                      {/* LinkedIn CTA */}
                      <a
                        href="https://www.linkedin.com/in/abhisheknagaraja"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2.5 rounded-xl flex items-center justify-center gap-2 text-sm font-semibold text-white/60 hover:text-white transition-colors mb-3"
                        style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                        onClick={() => finish(profile)}
                      >
                        <Link2 className="w-4 h-4" /> Connect on LinkedIn
                      </a>

                      <div className="flex items-center justify-between">
                        <button onClick={back} className="text-[11px] text-white/25 hover:text-white/50 transition-colors">
                          ← Back
                        </button>
                        <button onClick={() => finish(profile)} className="text-[11px] text-white/25 hover:text-white/50 transition-colors">
                          Skip, just explore →
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
