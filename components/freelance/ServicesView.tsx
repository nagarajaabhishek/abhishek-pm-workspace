"use client";

import { motion } from "framer-motion";
import { Briefcase, Code, Palette, Rocket, CheckCircle2, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "AI & Full-Stack Development",
    description: "End-to-end development of AI-first products. From LangGraph agent orchestrations to polished Next.js/React frontends.",
    features: ["Custom AI Agents", "RAG Systems", "Next.js/React Web Apps", "API Integration"]
  },
  {
    icon: Rocket,
    title: "Technical Product Management",
    description: "Bridging the gap between business goals and technical execution. I help founders prioritize roadmaps and ship faster.",
    features: ["MVP Scoping", "Agile Execution", "Go-to-Market Strategy", "User Research"]
  },
  {
    icon: Palette,
    title: "Brand & UI/UX Design",
    description: "Creating premium, cohesive visual identities and user interfaces that build trust and convert users.",
    features: ["Design Systems", "Figma Prototyping", "Brand Identity", "Motion Design"]
  }
];

export default function ServicesView() {
  return (
    <div className="h-full overflow-y-auto no-scrollbar p-6">
      <div className="max-w-4xl mx-auto py-10">
        <header className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-brand/10 text-brand rounded-full text-xs font-medium border border-brand/20">
            <Briefcase className="w-3.5 h-3.5" /> Available for freelance
          </div>
          <h1 className="text-4xl font-bold text-white tracking-tight mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>
            Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand/60">impactful</span>
          </h1>
          <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
            I partner with founders and startups to turn ambitious ideas into polished, shipped products.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-brand/30 transition-colors"
              >
                <div className="w-10 h-10 bg-brand/10 rounded-lg flex items-center justify-center text-brand mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: "var(--font-montserrat)" }}>{service.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed mb-6">{service.description}</p>
                <ul className="space-y-2 mt-auto">
                  {service.features.map(feature => (
                    <li key={feature} className="flex items-center gap-2 text-xs text-white/70">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand" /> {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>

        <div className="bg-gradient-to-r from-brand/20 to-transparent border border-brand/20 rounded-3xl p-8 md:p-12 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>Ready to accelerate your roadmap?</h2>
          <p className="text-white/60 mb-8 max-w-lg mx-auto">
            Whether you need a fractional PM, a full-stack developer, or an AI strategist, I'm here to help.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://calendar.app.google/JhE1yyAMJLZME4QSA" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-brand text-black font-bold rounded-xl hover:bg-brand/90 transition-all flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              Book a Discovery Call <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="mailto:work.abhishekn@gmail.com" 
              className="px-6 py-3 bg-white/5 text-white font-medium rounded-xl hover:bg-white/10 transition-all border border-white/10 w-full sm:w-auto justify-center"
            >
              Email Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
