import type { DocPage } from "@/data/docsData";

export default function DocsPageHeader({ page }: { page: DocPage }) {
  return (
    <header className="mb-8 pb-6 border-b border-white/8">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-2xl">{page.emoji}</span>
        <span className="text-[10px] font-bold text-white/25 uppercase tracking-widest" style={{ fontFamily: "var(--font-montserrat)" }}>
          {page.section}
        </span>
      </div>
      <h1 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-montserrat)" }}>
        {page.title}
      </h1>
      <p className="text-sm text-white/40">{page.description}</p>
    </header>
  );
}
