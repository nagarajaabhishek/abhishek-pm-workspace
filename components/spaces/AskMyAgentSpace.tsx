"use client";

import { useEffect, useRef } from "react";
import { useChat } from "@ai-sdk/react";
import { Send, Terminal } from "lucide-react";
import SpacesPageHeader from "./SpacesPageHeader";
import { getSpacePage } from "@/data/spacesData";

export default function AskMyAgentSpace() {
  const page = getSpacePage("chat")!;
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: "/api/chat",
    initialMessages: [
      {
        id: "system-init",
        role: "assistant",
        content: "System initialized. Loaded Abhishek's master_context.yaml into context window. Ready for queries.",
      }
    ]
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 h-[calc(100vh-12rem)] flex flex-col">
      <SpacesPageHeader page={page} />
      
      <div className="flex-1 flex flex-col border border-white/10 rounded-xl bg-[#0d1117] overflow-hidden shadow-2xl relative">
        {/* Terminal Header */}
        <div className="h-10 bg-[#161b22] border-b border-white/10 flex items-center px-4 gap-2 shrink-0">
          <Terminal className="w-4 h-4 text-white/50" />
          <span className="text-xs font-mono text-white/50">logan_agent_v2.sh</span>
          <div className="ml-auto flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 font-mono text-sm space-y-6">
          {messages.map((m) => (
            <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] ${m.role === 'user' ? 'bg-[#238636] text-white' : 'text-white/80'} rounded-lg px-4 py-3 whitespace-pre-wrap leading-relaxed`}>
                {m.role === 'assistant' && m.id !== 'system-init' && (
                  <span className="text-[#58a6ff] block mb-1.5 font-bold">~/agent ❯</span>
                )}
                {m.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="text-white/50 animate-pulse flex items-center gap-2">
                <span className="text-[#58a6ff]">~/agent ❯</span> thinking...
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-[#161b22] border-t border-white/10 shrink-0">
          <form onSubmit={handleSubmit} className="flex relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7ee787] font-mono">❯</span>
            <input
              className="w-full bg-[#0d1117] border border-white/10 rounded-lg pl-10 pr-12 py-3 text-white font-mono text-sm focus:outline-none focus:ring-1 focus:ring-[#58a6ff] transition-all"
              value={input}
              placeholder="Ask about Abhishek's experience, stack, or projects..."
              onChange={handleInputChange}
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
