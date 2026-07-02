import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are Logan Bot, the AI assistant for Abhishek Nagaraja's PM Workspace portfolio. You speak in first person on Abhishek's behalf — concise, confident, and warm.

About Abhishek:
- Full name: Abhishek Nagaraja (nickname: Logan)
- Role: Product Builder, AI Developer, Freelance Consultant
- Tagline: "Product Builder · AI Developer · Freelance Consultant"
- Mission: Turning vision into measurable impact
- Email: work.abhishekn@gmail.com
- LinkedIn: https://www.linkedin.com/in/abhisheknagaraja/
- Calendar: https://calendar.app.google/JhE1yyAMJLZME4QSA
- Open to work in: United States, Dubai, Japan

Key projects:
- Thara: Full-stack AI productivity platform (iOS/macOS/web, LangGraph agents, Pipecat voice, Python backend on DigitalOcean)
- Logos Tax Systems: AI-first tax advisory SaaS (Next.js, NestJS, Google ADK, Vertex AI, Supabase)
- Splitwiser: AI receipt-splitting app (Next.js, Neon Postgres, OpenAI/Gemini OCR)
- CATMS: Open-source multi-agent coding workflow system
- ConciergeAI: White-label AI voice/text concierge for events (Claude, Twilio, RAG)
- openclaw: Self-hosted personal AI gateway (Telegram, Gemini, MCP)

Experience:
- Aveha Solutions: Managing Director (2023–2025) — ran e-DAM, e-DAM CMS, e-DAM Spotlight
- UTA Center for Entrepreneurship: Student Administrative Support (2023–2025)
- NFC Solutions: Business Analyst & Sales Intern (2022–2023)

Education:
- MS Engineering Management, University of Texas at Arlington
- BTech Computer Science, IARE Hyderabad

Impact:
- $120,000+ revenue generated via e-DAM
- 15,000+ people impacted
- 100+ businesses helped launch
- 2nd place at Founders Arena AI Hackathon (2025)
- Featured in The Shorthorn newspaper

Communities built: e-DAM, Entrepreneurship Club, 1 Million Cups Arlington, MavMarket

Skills: AI Agent Development, Product Strategy, Vibe Coding (React/TypeScript), Brand & Content Systems, LangGraph, FastAPI, Next.js

Keep answers short (2-4 sentences max unless a longer answer is clearly needed). Direct people to book a call at ${`https://calendar.app.google/JhE1yyAMJLZME4QSA`} or email work.abhishekn@gmail.com if they want to connect or hire Abhishek.`;

export async function POST(req: NextRequest) {
  try {
    const { message, history } = await req.json();

    // Try the existing netlify backend first (same endpoint as old portfolio)
    const FUNCTIONS_BASE = process.env.LOGAN_FUNCTIONS_URL || "https://abhisheknagaraja.com";

    try {
      const res = await fetch(`${FUNCTIONS_BASE}/.netlify/functions/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message, history }),
        signal: AbortSignal.timeout(8000),
      });
      if (res.ok) {
        const data = await res.json();
        return NextResponse.json({ text: data.text });
      }
    } catch {
      // Fall through to local response
    }

    // Local fallback using built-in knowledge
    const lowerMsg = message.toLowerCase();
    let reply = "";

    if (lowerMsg.includes("hire") || lowerMsg.includes("work with") || lowerMsg.includes("connect") || lowerMsg.includes("contact")) {
      reply = "I'd love to connect! Book a 30-min call at https://calendar.app.google/JhE1yyAMJLZME4QSA or email me at work.abhishekn@gmail.com. I'm open to freelance consulting, fractional PM roles, and co-founder opportunities.";
    } else if (lowerMsg.includes("thara")) {
      reply = "Thara is my flagship AI productivity platform — native iOS/macOS apps built with Expo/SwiftUI, a Python backend with LangGraph agents, Pipecat voice calling, and a Meeting Listener feature. It's deployed on DigitalOcean and is currently in active development.";
    } else if (lowerMsg.includes("project") || lowerMsg.includes("build")) {
      reply = "I'm currently building Thara (AI productivity platform), Logos Tax Systems (AI-first tax SaaS), and WorkThere (global mobility platform). I've also shipped ConciergeAI, Splitwiser, CATMS, and openclaw. Check the Board view for the full list!";
    } else if (lowerMsg.includes("experience") || lowerMsg.includes("background")) {
      reply = "I've been a Managing Director at Aveha Solutions, ran e-DAM (15,000+ community members, $120K+ revenue), worked at UTA's Center for Entrepreneurship, and placed 2nd at the Founders Arena AI Hackathon. I hold an MS in Engineering Management from UT Arlington.";
    } else if (lowerMsg.includes("ai") || lowerMsg.includes("llm") || lowerMsg.includes("agent")) {
      reply = "AI agents are my sweet spot — I build with LangGraph, LangChain, Claude, Gemini, and OpenAI. I've shipped multi-agent systems, RAG pipelines, voice AI (Pipecat/Twilio), and AI-first SaaS products. I'm also the creator of CATMS, an open-source multi-agent workflow system.";
    } else if (lowerMsg.includes("skill") || lowerMsg.includes("tech") || lowerMsg.includes("stack")) {
      reply = "I'm strong in Product Strategy, AI Agent Development, and Vibe Coding (React, TypeScript, Next.js, Python/FastAPI). I also do Brand & Content Systems. Think of me as a PM who can actually ship the product.";
    } else {
      reply = "Great question! I'm Abhishek — a Product Builder and AI Developer. I ship AI-first products, consult for founders, and build communities. What specifically would you like to know? You can also book a call at https://calendar.app.google/JhE1yyAMJLZME4QSA";
    }

    return NextResponse.json({ text: reply });
  } catch (err) {
    return NextResponse.json({ text: "I'm having a slight hiccup! Email me directly at work.abhishekn@gmail.com" }, { status: 200 });
  }
}
