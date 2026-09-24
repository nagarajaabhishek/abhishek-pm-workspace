"use client";

import { motion } from "framer-motion";
import { githubRepositories } from "@/data/portfolioData";
import { Star, ExternalLink, GitBranch } from "lucide-react";

export default function FeaturedView() {
  const featuredItems = githubRepositories.filter(item => item.featured);

  return (
    <div className="h-full overflow-y-auto no-scrollbar p-6">
      <div className="max-w-4xl mx-auto">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-2">
            <Star className="w-5 h-5 text-brand" />
            <h1 className="text-2xl font-bold text-white tracking-tight" style={{ fontFamily: "var(--font-montserrat)" }}>Featured Work</h1>
          </div>
          <p className="text-sm text-white/50">A curated selection of my most impactful projects and products.</p>
        </header>

        <div className="grid gap-6">
          {featuredItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-brand/50 transition-colors group"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-xl font-bold text-white mb-1" style={{ fontFamily: "var(--font-montserrat)" }}>{item.name}</h2>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-brand font-medium">{item.status}</span>
                    <span className="text-white/30">•</span>
                    <span className="text-white/60">{item.priority}</span>
                  </div>
                </div>
                {item.github && (
                  <a href={item.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-lg hover:bg-white/10 text-white/60 hover:text-white transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
              <p className="text-sm text-white/70 leading-relaxed mb-6">{item.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {item.stack.map(tech => (
                  <span key={tech} className="px-2 py-1 bg-white/5 rounded-md text-[10px] text-white/50 border border-white/5">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
          {featuredItems.length === 0 && (
            <div className="text-center py-20 text-white/40 text-sm">No featured items found. Check back later!</div>
          )}
        </div>
      </div>
    </div>
  );
}
