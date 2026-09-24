export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "building-ai-agents",
    title: "Building Resilient AI Agents with LangGraph",
    date: "2026-08-15",
    excerpt: "A deep dive into how I use LangGraph to orchestrate complex multi-agent workflows in my production applications.",
    content: "# Building Resilient AI Agents\n\nAI agents are moving from novelties to production-critical systems. In this post, I explore how LangGraph provides the necessary state management and routing to build agents that don't just chat, but actually execute complex workflows reliably.\n\n## The Problem with Linear Chains\n\nMost early LLM applications relied on linear chains...",
    tags: ["AI", "LangGraph", "Python"],
  },
  {
    id: "2",
    slug: "product-strategy-startups",
    title: "The 80/20 of Product Strategy for Early-Stage Startups",
    date: "2026-07-22",
    excerpt: "Why most founders overcomplicate their roadmaps, and how to focus on the 20% of features that deliver 80% of the value.",
    content: "# The 80/20 of Product Strategy\n\nWhen working with early-stage founders, the most common anti-pattern I see is the 'kitchen sink' MVP. Here is my framework for ruthless prioritization.\n\n## Identify the Core Loop\n\nWhat is the single action that delivers the core value proposition of your product?...",
    tags: ["Product Management", "Startups", "Strategy"],
  },
  {
    id: "3",
    slug: "vibe-coding-nextjs",
    title: "Vibe Coding: Rapid Prototyping with Next.js and Tailwind",
    date: "2026-06-10",
    excerpt: "My workflow for taking an idea from a whiteboard sketch to a deployed interactive prototype in under 48 hours.",
    content: "# Vibe Coding\n\n'Vibe coding' is my term for getting into a flow state where the barrier between thought and UI disappears. It requires the right stack and the right mindset.\n\n## The Stack\n\n- Next.js App Router\n- Tailwind CSS\n- shadcn/ui components\n- Vercel for instant deployments...",
    tags: ["Frontend", "Next.js", "Workflow"],
  }
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}
