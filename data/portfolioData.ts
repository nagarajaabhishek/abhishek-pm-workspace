// Source of truth — extracted from abhishek-impact-folio portfolioData.ts

export const personalInfo = {
  name: "Abhishek Nagaraja",
  nickname: "Logan",
  tagline: "Product Builder · AI Developer · Freelance Consultant",
  description:
    "I help startups and founders ship faster — building AI products, websites, automations, and brand strategy systems that drive real results.",
  mission: "Turning vision into measurable impact",
  email: "work.abhishekn@gmail.com",
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/abhisheknagaraja/",
    github: "https://github.com/nagarajaabhishek",
    chess: "https://www.chess.com/member/twelfth_doctor",
    instagram: "https://www.instagram.com/abhishek.nagaraja",
  },
  calendarLink: "https://calendar.app.google/JhE1yyAMJLZME4QSA",
  openToWork: ["United States", "Ireland", "Japan"],
  fuel: "Guinness & Buchanan's Whiskey",
  roles: [
    "Freelance Consultant",
    "AI Agent Developer",
    "Technical Product Manager",
    "Brand Strategist",
    "Growth Product Manager",
    "Scrum Master",
    "Program Manager",
    "Product Owner",
    "Tech Entrepreneur",
    "Tech Founder",
    "Community Builder",
    "Vibe Coder",
  ],
};

export const education = [
  {
    id: "ms-uta",
    degree: "Master of Science in Engineering Management",
    university: "University of Texas at Arlington",
    location: "Arlington, TX",
    logo: "/logos/uta-logo.png",
  },
  {
    id: "btech-iare",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    university: "IARE - Institute of Aeronautical Engineering",
    location: "Hyderabad, India",
    logo: "/logos/iare-logo.png",
  },
];

export const companies = [
  {
    id: "nfc-solutions",
    name: "NFC Solutions",
    role: "Business Analyst Intern & Sales and Marketing Intern",
    period: "April 2022 – January 2023",
    type: "work" as const,
  },
  {
    id: "uta-ced",
    name: "Center For Entrepreneurship and Technology Development, UTArlington",
    role: "Student Administrative Support",
    period: "October 2023 – October 2025",
    type: "work" as const,
  },
  {
    id: "aveha",
    name: "Aveha Solutions Private Limited",
    role: "Managing Director",
    period: "January 2023 – January 2025",
    description: "Ran e-DAM, e-DAM Spotlight, and e-DAM CMS",
    type: "work" as const,
  },
];

export const startups = [
  { id: "edam", name: "e-DAM", description: "EduTech + community marketplace platform" },
  { id: "edam-cms", name: "e-DAM CMS", description: "Content management system for e-DAM" },

  { id: "logos", name: "Logos Tax Systems", description: "AI-first tax advisory platform for SMB owners" },
  { id: "conciergeai", name: "ConciergeAI", description: "White-label AI voice & text concierge for large-scale events" },
];

export const communities = [
  { id: "edam-community", name: "e-DAM Community", status: "active" as const },
  { id: "eclub", name: "Entrepreneurship Club", status: "active" as const },
  { id: "1mc", name: "1 Million Cups Arlington, TX", status: "active" as const },
  { id: "mavmarket", name: "MavMarket", status: "active" as const },
];

export const githubRepositories = [
  {
    id: "thara",
    name: "Thara",
    description:
      "Full-stack AI productivity platform — native iOS/macOS app (Expo + SwiftUI), Python backend with LangGraph agents, Pipecat/Twilio voice calling, and a Meeting Listener feature. Deployed on DigitalOcean.",
    status: "Building" as const,
    labels: ["AI", "Mobile", "Backend"],
    priority: "P1" as const,
    stack: ["Python", "LangGraph", "Expo", "SwiftUI", "DigitalOcean"],
    github: "https://github.com/nagarajaabhishek/Thara",
    featured: true,
  },
  {
    id: "logos-tax",
    name: "Logos Tax Systems",
    description:
      "AI-first tax advisory platform for SMB owners — conversation-first UX with built-in Logos AI advisor, Stripe billing, CPA portal, and admin dashboard. Built on Next.js, NestJS, Google ADK, Vertex AI, Supabase, and GCP Cloud Run.",
    status: "Building" as const,
    labels: ["AI", "Web", "FinTech"],
    priority: "P1" as const,
    stack: ["Next.js", "NestJS", "Google ADK", "Vertex AI", "Supabase"],
    github: "https://logostaxsystems.com",
    featured: true,
  },
  {
    id: "splitwiser",
    name: "Splitwiser",
    description:
      "Household expense-splitting app with AI receipt OCR (OpenAI/Gemini fallback), HEIC image conversion, line-item assignment, ledger tracking, and settle-up — built with Next.js + Prisma + Neon Postgres on Vercel.",
    status: "Shipped" as const,
    labels: ["AI", "Web"],
    priority: "P2" as const,
    stack: ["Next.js", "Prisma", "Neon", "TypeScript"],
    github: "https://github.com/nagarajaabhishek/Splitwiser",
  },
  {
    id: "catms",
    name: "CATMS",
    description:
      "Open-source Coding Agents Team Management System — drop-in workflow templates (CLAUDE.md, CURSOR.md), Obsidian memory structure, Linear integration, OpenSpec design-first framework, and setup.sh for multi-agent AI teams.",
    status: "Shipped" as const,
    labels: ["Open Source", "AI"],
    priority: "P2" as const,
    stack: ["Shell", "Markdown", "Linear"],
    github: "https://github.com/nagarajaabhishek/CATMS",
  },

  {
    id: "product-pal",
    name: "product-pal",
    description:
      "Guided product teardown AI agent — sequential workflow from problem framing to final deck, with approval gates, append-only docs, and export-ready deliverables.",
    status: "Shipped" as const,
    labels: ["AI", "Open Source"],
    priority: "P3" as const,
    stack: ["Python"],
    github: "https://github.com/nagarajaabhishek/product-pal",
  },
  {
    id: "workthere",
    name: "WorkThere",
    description:
      "Global Mobility & Talent SaaS — job board with WorkThere Match Score, smart profile builder, visa/PR logistics, net income calculator, and country comparison tool.",
    status: "Concept" as const,
    labels: ["Web"],
    priority: "P2" as const,
    stack: ["Next.js", "Prisma", "Supabase"],
    github: "https://github.com/workabhisehk/workthere",
  },
  {
    id: "chess-analyzer",
    name: "chess-analyzer",
    description:
      "ChessLens — free local chess game analyzer using Stockfish. No paywall, no ads, no cloud. Parses Chess.com PGNs and runs deep engine analysis locally.",
    status: "Shipped" as const,
    labels: ["Open Source"],
    priority: "P3" as const,
    stack: ["Python", "Stockfish"],
    github: "https://github.com/nagarajaabhishek/chess-analyzer",
  },


];

export const portfolioWebsites = [

  {
    id: "excursionsbycc",
    name: "Excursions by CC",
    description: "Travel and excursion booking platform",
    status: "Shipped" as const,
    labels: ["Web", "Freelance"],
    priority: "P3" as const,
    url: "https://excursionsbycc.netlify.app",
  },
  {
    id: "medna",
    name: "Medna Construction",
    description: "Construction company website showcasing services and projects",
    status: "Freelance" as const,
    labels: ["Web", "Freelance"],
    priority: "P3" as const,
    url: "https://www.mednaconstruction.com/",
  },

];

export const impactMetrics = [
  {
    id: "revenue",
    value: "$120,000+",
    label: "Revenue Generated",
    description: "200+ Student Vendors of UT Arlington and Arlington City via e-DAM.",
    category: "Community",
  },
  {
    id: "people",
    value: "15,000+",
    label: "People Impacted",
    description: "via e-DAM community and MavMarket.",
    category: "Community",
  },
  {
    id: "businesses",
    value: "100+",
    label: "Businesses Helped Launch",
    description: "Student and local entrepreneurs supported to market via e-DAM and MavMarket.",
    category: "Community",
  },
];

export const skills = [
  {
    id: "vibe-coder",
    name: "Vibe Coder",
    description: "Building with lovable and cursor to ship fast",
    tags: ["React", "TypeScript", "AI-Assisted"],
    level: 5,
    category: "Engineering",
  },
  {
    id: "ai-agent-dev",
    name: "AI Agent Development",
    description: "Architecting intelligent systems that scale",
    tags: ["LLMs", "RAG", "Function Calling"],
    level: 5,
    category: "AI",
  },
  {
    id: "product-strategy",
    name: "Product Strategy",
    description: "0→1 product development and growth",
    tags: ["User Research", "Data-Driven", "Execution"],
    level: 5,
    category: "Product",
  },
  {
    id: "brand-content",
    name: "Brand & Content Systems",
    description: "Founder-led growth and positioning that compounds",
    tags: ["Market Positioning", "Thought Leadership", "Content Strategy", "Community Flywheel"],
    level: 4,
    category: "Product",
  },
  {
    id: "leadership",
    name: "Leadership",
    description: "Driving team success and alignment",
    tags: ["Team Building", "Mentoring", "Conflict Resolution"],
    level: 5,
    category: "Soft Skills",
  },
  {
    id: "communication",
    name: "Communication",
    description: "Articulating complex ideas clearly",
    tags: ["Stakeholder Management", "Public Speaking", "Technical Writing"],
    level: 5,
    category: "Soft Skills",
  },
];

export const sectors = {
  experienced: [
    "EduTech", "Community Building", "E-Commerce", "Legal Tech",
    "IT Service", "FinTech", "Commercial Real Estate", "Restaurant Tech", "Alcohol Beverage",
  ],
  future: [
    "Travel and Hospitality", "CleanTech", "Healthcare", "FinTech",
    "Residential Real Estate", "Food and Beverage", "Culture", "Commercial Hotels", "Investing",
  ],
};

export const productTeardowns = [
  { id: "coc", title: "Clash of Clans", category: "Mobile Gaming", date: "2024" },
  { id: "gmaps", title: "Google Maps", category: "Navigation", date: "2024" },
  { id: "splitwise", title: "Splitwise", category: "Expense Sharing", date: "2024" },
];

export const featured = [
  {
    id: "voyage-dallas",
    type: "article" as const,
    title: "Voyage Dallas Interview: Abhishek of Logos Tax Systems",
    description: "Featured interview discussing my product journey, building Logos Tax Systems, and key insights.",
    date: "2024",
    url: "https://voyagedallas.com/interview/inspiring-conversations-with-abhishek-of-logos-tax-systems/",
  },
  {
    id: "youtube-1",
    type: "podcast" as const,
    title: "YouTube Video",
    description: "Watch my insights and discussions",
    date: "2024",
    url: "https://www.youtube.com/watch?v=ldQr5iUy6mE",
  },
  {
    id: "youtube-2",
    type: "podcast" as const,
    title: "YouTube Video",
    description: "Watch my insights and discussions",
    date: "2024",
    url: "https://www.youtube.com/watch?v=qiEZCZ8z2Pc",
  },
  {
    id: "shorthorn",
    type: "article" as const,
    title: "MavMarket in The Shorthorn",
    description:
      "MavMarket encourages student side hustles — Featured as student ambassador and president of the Entrepreneurship Club",
    date: "Apr 2024",
    url: "https://www.theshorthorn.com/news/mavmarket-encourages-student-side-hustles/article_c79dbec8-fdf7-11ee-881d-cfb81f5b41a0.html",
  },
  {
    id: "gyandhan-ama",
    type: "article" as const,
    title: "Study & Work Opportunities AMA",
    description: "Instagram Live AMA on studying, internships, and work opportunities in the USA",
    date: "Feb 2025",
    url: "https://discussions.gyandhan.com/t/study-internships-and-work-opportunities-in-the-us/15287",
  },
  {
    id: "hackathon",
    type: "article" as const,
    title: "🏆 2nd Place — Founders Arena AI Hackathon",
    description:
      "Built and pitched an AI product at the Founders Arena WealthTech Accelerator hackathon, placing 2nd among competing teams.",
    date: "2025",
    url: "https://www.thefoundersarena.com",
  },
  {
    id: "speaking",
    type: "article" as const,
    title: "Speaking: Brand Strategy in the AI Era",
    description:
      "How founders stay distinct while automation accelerates — available for founder events, incubators, and private team sessions.",
    date: "2025",
    url: "mailto:work.abhishekn@gmail.com?subject=Speaking Inquiry",
  },
];

export const blogPosts = [
  {
    id: "chess-decision-making",
    title: "Chess Intuition and the Art of Decision-Making: Lessons for Life's Board",
    slug: "chess-decision-making",
    excerpt: "Exploring how chess strategy and intuition translate to better decision-making in life and business",
    category: "Personal",
    date: "Dec 2024",
    readTime: "6 min read",
  },
  {
    id: "ai-product-management",
    title: "The Future of AI Product Management",
    slug: "ai-product-management",
    excerpt: "How AI is fundamentally changing the way we build and ship products in 2024",
    category: "AI",
    date: "Dec 2024",
    readTime: "5 min read",
  },
  {
    id: "building-communities",
    title: "Building Communities That Scale",
    slug: "building-communities",
    excerpt: "Lessons from growing technical communities from 0 to 15,000+ members",
    category: "Community",
    date: "Nov 2024",
    readTime: "7 min read",
  },
  {
    id: "sector-ai",
    title: "Sector-Specific AI Applications",
    slug: "sector-ai",
    excerpt: "Deep dive into vertical-specific AI solutions and their unique challenges",
    category: "Insights",
    date: "Nov 2024",
    readTime: "6 min read",
  },
];

export const testimonials = [
  {
    id: "t1",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "John Doe",
    role: "CEO, Tech Company",
    avatar: "JD",
    linkedinUrl: "https://www.linkedin.com/posts/example-1",
  },
  {
    id: "t2",
    quote: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "Jane Smith",
    role: "Product Director",
    avatar: "JS",
    linkedinUrl: "https://www.linkedin.com/posts/example-2",
  },
];

export const hobbies = [
  { name: "Chess", description: "Strategic gameplay and continuous learning", link: "https://www.chess.com/member/twelfth_doctor" },
  { name: "Poker", description: "Probability, psychology, and skill" },
  { name: "Blackjack", description: "Card counting and strategic decision-making" },
  { name: "8 Ball", description: "Pool strategy and precision" },
];
