"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { blogPosts } from "@/data/blogData";
import { BookOpen, Calendar, ArrowRight } from "lucide-react";

export default function BlogList() {
  return (
    <div className="h-full overflow-y-auto no-scrollbar p-6">
      <div className="max-w-4xl mx-auto">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="w-5 h-5 text-brand" />
            <h1 className="text-2xl font-bold text-white tracking-tight" style={{ fontFamily: "var(--font-montserrat)" }}>Writings & Thoughts</h1>
          </div>
          <p className="text-sm text-white/50">Essays on product management, AI agents, and startup strategy.</p>
        </header>

        <div className="grid gap-6">
          {blogPosts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link href={`/blog/${post.slug}`} className="block bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-brand/50 transition-all group">
                <div className="flex items-center gap-2 text-xs text-white/40 mb-3">
                  <Calendar className="w-3 h-3" />
                  <time>{post.date}</time>
                </div>
                <h2 className="text-xl font-bold text-white mb-2 group-hover:text-brand transition-colors" style={{ fontFamily: "var(--font-montserrat)" }}>{post.title}</h2>
                <p className="text-sm text-white/60 mb-4 leading-relaxed">{post.excerpt}</p>
                <div className="flex justify-between items-center mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 bg-white/5 rounded-md text-[10px] text-white/50 border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="text-brand flex items-center gap-1 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0">
                    Read Post <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
