export interface SpacePage {
  slug: string;
  title: string;
  emoji: string;
  description: string;
  section: "profile" | "work" | "content";
}

export const SPACE_PAGES: SpacePage[] = [
  {
    slug: "about",
    title: "About Me",
    emoji: "👤",
    description: "Background, mission, and what I do",
    section: "profile",
  },
  {
    slug: "case-studies",
    title: "Case Studies",
    emoji: "📊",
    description: "Product and initiative deep dives",
    section: "work",
  },
  {
    slug: "resume",
    title: "Resume",
    emoji: "📋",
    description: "Experience, education, and skills",
    section: "profile",
  },
  {
    slug: "media",
    title: "Media & Speaking",
    emoji: "🎤",
    description: "Press, podcasts, and speaking engagements",
    section: "content",
  },
  {
    slug: "teardowns",
    title: "Product Teardowns",
    emoji: "🔍",
    description: "Structured analyses of products I admire",
    section: "content",
  },
  {
    slug: "blog",
    title: "Blog",
    emoji: "✍️",
    description: "Thoughts on AI, product, and communities",
    section: "content",
  },
  {
    slug: "communities",
    title: "Communities",
    emoji: "🌐",
    description: "Groups and ecosystems I'm a part of",
    section: "content",
  },
  {
    slug: "podcast",
    title: "Podcast",
    emoji: "🎙️",
    description: "My podcast appearances and conversations",
    section: "content",
  },
  {
    slug: "skills",
    title: "Agent Skills",
    emoji: "🧠",
    description: "My technical capabilities, written as agent instructions",
    section: "content",
  },
  {
    slug: "chat",
    title: "Ask My Agent",
    emoji: "🤖",
    description: "Chat with an AI that knows my entire workspace",
    section: "content",
  },
];

export const SPACE_SECTIONS = [
  { id: "profile" as const, label: "Profile" },
  { id: "work" as const, label: "Work" },
  { id: "content" as const, label: "Content" },
];

export function getSpacePage(slug: string): SpacePage | undefined {
  return SPACE_PAGES.find((p) => p.slug === slug);
}

export const caseStudies = [
  {
    id: "edam",
    title: "e-DAM",
    role: "Founder & CEO",
    period: "2022 – 2025",
    summary:
      "Built an EduTech + community marketplace platform that generated $120K+ in revenue and impacted 15,000+ people across UT Arlington and Arlington City.",
    metrics: ["$120K+ revenue", "15,000+ people impacted", "200+ student vendors"],
    tags: ["EduTech", "Marketplace", "Community", "0→1"],
    link: "https://nabhishek.notion.site/",
  },
  {
    id: "mavmarket",
    title: "MavMarket",
    role: "Main Organizer & Team Lead",
    period: "2023 – 2025",
    summary:
      "Founded and ran a recurring on-campus marketplace for student entrepreneurs — scaling from 60 to 130 vendors and drawing 3,000 attendees at peak.",
    metrics: ["$120K total revenue", "130 vendors", "3,000 peak attendance"],
    tags: ["Events", "Entrepreneurship", "Community", "GTM"],
    link: "https://www.theshorthorn.com/news/mavmarket-encourages-student-side-hustles/article_c79dbec8-fdf7-11ee-881d-cfb81f5b41a0.html",
  },
  {
    id: "thara",
    title: "Thara",
    role: "Founder & Builder",
    period: "2025 – Present",
    summary:
      "Full-stack AI productivity platform with native iOS/macOS app, LangGraph agents, Pipecat/Twilio voice calling, and Meeting Listener — deployed on DigitalOcean.",
    metrics: ["iOS + macOS native", "Voice AI", "LangGraph agents"],
    tags: ["AI", "Mobile", "Voice", "Full-stack"],
    link: "https://github.com/nagarajaabhishek/Thara",
  },
  {
    id: "logos",
    title: "Logos Tax Systems",
    role: "Product Builder",
    period: "2025 – Present",
    summary:
      "AI-first tax advisory platform for SMB owners — conversation-first UX with built-in Logos AI advisor, Stripe billing, CPA portal, and admin dashboard.",
    metrics: ["AI advisor", "CPA portal", "Stripe billing"],
    tags: ["FinTech", "AI", "B2B", "SaaS"],
    link: "https://logostaxsystems.com",
  },
  {
    id: "splitwiser",
    title: "Splitwiser",
    role: "Solo Builder",
    period: "2025",
    summary:
      "Household expense-splitting app with AI receipt OCR, HEIC conversion, line-item assignment, ledger tracking, and settle-up — Next.js + Prisma + Neon on Vercel.",
    metrics: ["AI receipt OCR", "Shipped", "Open source"],
    tags: ["AI", "Consumer", "FinTech", "Next.js"],
    link: "https://github.com/nagarajaabhishek/Splitwiser",
  },
  {
    id: "conciergeai",
    title: "ConciergeAI",
    role: "Hackathon Builder",
    period: "2025",
    summary:
      "White-label AI voice & text concierge for large-scale events — 2nd place at Founders Arena WealthTech Accelerator hackathon. Powered by Claude, Twilio, WhatsApp, and RAG.",
    metrics: ["🏆 2nd place", "Multilingual", "Voice + text"],
    tags: ["AI", "Events", "Voice", "Hackathon"],
    link: "https://www.thefoundersarena.com",
  },
];

export const teardownDocs = [
  {
    id: "clash-of-clans",
    title: "Clash of Clans",
    category: "Mobile Gaming",
    date: "2024",
    summary:
      "Deep dive into CoC's retention loops, clan mechanics, and monetization — how Supercell engineered 10+ years of daily active use.",
    tags: ["Retention", "Monetization", "Social Loop", "Mobile"],
    insight: "The clan system is the product. Without social obligation, CoC is just a builder game.",
  },
  {
    id: "google-maps",
    title: "Google Maps",
    category: "Navigation",
    date: "2024",
    summary:
      "How Maps evolved from navigation to a local discovery platform — and why the review ecosystem is their true moat.",
    tags: ["Platform", "Network Effects", "Discovery", "B2B2C"],
    insight: "Google Maps isn't a map. It's a local intent engine with navigation as the hook.",
  },
  {
    id: "splitwise",
    title: "Splitwise",
    category: "Expense Sharing",
    date: "2024",
    summary:
      "Analyzing Splitwise's viral group dynamics, trust-based monetization, and why they resisted feature bloat for a decade.",
    tags: ["Viral Growth", "Trust", "Freemium", "Social Finance"],
    insight: "Splitwise's power is in the awkward conversation it replaces — not the math.",
  },
];
