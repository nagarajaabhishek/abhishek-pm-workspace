export interface GalleryImage {
  id: string;
  url: string;
  title: string;
  description: string;
  aspectRatio: "square" | "video" | "portrait" | "landscape";
}

export const galleryData: GalleryImage[] = [
  {
    id: "1",
    url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    title: "Team Collaboration",
    description: "Leading a product strategy workshop with founders.",
    aspectRatio: "landscape",
  },
  {
    id: "2",
    url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    title: "Coding Session",
    description: "Deep work session building AI agents.",
    aspectRatio: "square",
  },
  {
    id: "3",
    url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
    title: "Hackathon Win",
    description: "2nd place at the Founders Arena AI Hackathon.",
    aspectRatio: "landscape",
  },
  {
    id: "4",
    url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
    title: "Speaking Event",
    description: "Presenting on the future of AI in product management.",
    aspectRatio: "portrait",
  },
  {
    id: "5",
    url: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
    title: "Product Launch",
    description: "Go-to-market strategy for a new SaaS platform.",
    aspectRatio: "landscape",
  },
  {
    id: "6",
    url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    title: "System Architecture",
    description: "Whiteboarding a complex multi-agent system.",
    aspectRatio: "square",
  }
];
