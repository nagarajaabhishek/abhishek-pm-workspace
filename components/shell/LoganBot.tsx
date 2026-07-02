"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Send, X, MessageCircle, Sparkles } from "lucide-react";

type Role = "user" | "model";
interface Message { role: Role; content: string; }

const STARTERS = [
  "What projects is Abhishek building?",
  "Tell me about his AI experience",
  "How can I work with him?",
];

export default function LoganBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [streamText, setStreamText] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, streamText]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || loading) return;
    const userMsg: Message = { role: "user", content: text.trim() };
    const next = [...messages, userMsg];
    setMessages(next);
    setInput("");
    setLoading(true);
    setStreamText("");

    try {
      const history = next.slice(0, -1).map((m) => ({ role: m.role, parts: [{ text: m.content }] }));
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text.trim(), history }),
      });
      const data = await res.json();
      const reply = data.text || "I'm having a slight hiccup — try again or email work.abhishekn@gmail.com";

      // Simulate streaming word-by-word
      const words = reply.split(" ");
      let built = "";
      for (const word of words) {
        built += word + " ";
        setStreamText(built);
        await new Promise((r) => setTimeout(r, 35));
      }
      setMessages((prev) => [...prev, { role: "model", content: built.trim() }]);
      setStreamText("");
    } catch {
      setMessages((prev) => [...prev, { role: "model", content: "I'm having a slight hiccup — try again or email work.abhishekn@gmail.com" }]);
      setStreamText("");
    } finally {
      setLoading(false);
    }
  };

  const isEmpty = messages.length === 0 && !loading;

  return (
    <>
      {/* FAB */}
      <motion.button
        onClick={() => setOpen(true)}
        className="fixed bottom-20 right-4 md:bottom-6 md:right-6 z-40 w-12 h-12 rounded-2xl bg-brand shadow-lg shadow-brand/30 flex items-center justify-center hover:opacity-90 active:scale-95 transition-all"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{ display: open ? "none" : "flex" }}
      >
        <MessageCircle className="w-5 h-5 text-white" />
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            className="fixed bottom-20 right-4 md:bottom-6 md:right-6 z-50 w-[340px] max-w-[calc(100vw-2rem)] rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            style={{
              height: "480px",
              background: "linear-gradient(145deg, hsl(0 0% 10%) 0%, hsl(0 0% 7%) 100%)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {/* Top glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-brand to-transparent" />

            {/* Header */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-white/6 shrink-0">
              <div className="w-8 h-8 rounded-xl overflow-hidden ring-1 ring-brand/30">
                <Image src="/icon.png" alt="Logan" width={32} height={32} className="object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-white truncate" style={{ fontFamily: 'var(--font-montserrat)' }}>Logan Bot</p>
                <p className="text-[10px] text-white/40 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" /> Online
                </p>
              </div>
              <button onClick={() => setOpen(false)} className="text-white/30 hover:text-white transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-none">
              {isEmpty && (
                <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
                  <div className="w-12 h-12 rounded-2xl bg-brand/15 border border-brand/20 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-brand" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white mb-1" style={{ fontFamily: 'var(--font-montserrat)' }}>Ask me anything</p>
                    <p className="text-xs text-white/40">I&apos;m Logan Bot — Abhishek&apos;s AI assistant</p>
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    {STARTERS.map((s) => (
                      <button
                        key={s}
                        onClick={() => sendMessage(s)}
                        className="text-xs text-left px-3 py-2 rounded-lg bg-white/4 border border-white/6 text-white/60 hover:text-white hover:bg-white/8 hover:border-brand/20 transition-all"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] text-xs leading-relaxed rounded-xl px-3 py-2 ${
                      m.role === "user"
                        ? "bg-brand text-white rounded-br-sm"
                        : "bg-white/6 text-white/80 border border-white/6 rounded-bl-sm"
                    }`}
                  >
                    {m.content}
                  </div>
                </div>
              ))}

              {/* Streaming bubble */}
              {streamText && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] text-xs leading-relaxed rounded-xl rounded-bl-sm px-3 py-2 bg-white/6 text-white/80 border border-white/6">
                    {streamText}<span className="inline-block w-1 h-3 bg-brand/70 ml-0.5 animate-pulse rounded-sm" />
                  </div>
                </div>
              )}

              {loading && !streamText && (
                <div className="flex justify-start">
                  <div className="px-3 py-2 rounded-xl rounded-bl-sm bg-white/6 border border-white/6 flex gap-1">
                    {[0, 1, 2].map((i) => (
                      <span key={i} className="w-1.5 h-1.5 rounded-full bg-white/30 animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <form
              onSubmit={(e) => { e.preventDefault(); sendMessage(input); }}
              className="flex items-center gap-2 px-3 py-3 border-t border-white/6 shrink-0"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Abhishek..."
                className="flex-1 bg-white/5 border border-white/8 rounded-xl px-3 py-2 text-xs text-white placeholder:text-white/25 outline-none focus:border-brand/40 transition-colors"
              />
              <button
                type="submit"
                disabled={!input.trim() || loading}
                className="w-8 h-8 rounded-xl bg-brand flex items-center justify-center text-white disabled:opacity-40 hover:opacity-90 transition-opacity shrink-0"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
