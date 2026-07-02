import type { ReactNode } from "react";
import AboutMeDoc from "./pages/AboutMeDoc";
import CaseStudiesDoc from "./pages/CaseStudiesDoc";
import ResumeDoc from "./pages/ResumeDoc";
import MediaSpeakingDoc from "./pages/MediaSpeakingDoc";
import TeardownsDocPage from "./pages/TeardownsDocPage";
import BlogDocPage from "./pages/BlogDocPage";

const DOC_COMPONENTS: Record<string, () => ReactNode> = {
  about: () => <AboutMeDoc />,
  "case-studies": () => <CaseStudiesDoc />,
  resume: () => <ResumeDoc />,
  media: () => <MediaSpeakingDoc />,
  teardowns: () => <TeardownsDocPage />,
  blog: () => <BlogDocPage />,
};

export default function DocsContent({ slug }: { slug: string }) {
  const render = DOC_COMPONENTS[slug];
  if (!render) return null;
  return <>{render()}</>;
}
