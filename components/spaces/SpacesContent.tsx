import type { ReactNode } from "react";
import AboutMeDoc from "./AboutMeDoc";
import CaseStudiesDoc from "./CaseStudiesDoc";
import ResumeDoc from "./ResumeDoc";
import MediaSpeakingDoc from "./MediaSpeakingDoc";
import TeardownsDocPage from "./TeardownsDocPage";
import BlogDocPage from "./BlogDocPage";
import CommunitiesSpace from "./CommunitiesSpace";
import PodcastSpace from "./PodcastSpace";
import AgentSkillsSpace from "./AgentSkillsSpace";
import AskMyAgentSpace from "./AskMyAgentSpace";

const SPACE_COMPONENTS: Record<string, () => ReactNode> = {
  about: () => <AboutMeDoc />,
  "case-studies": () => <CaseStudiesDoc />,
  resume: () => <ResumeDoc />,
  media: () => <MediaSpeakingDoc />,
  teardowns: () => <TeardownsDocPage />,
  blog: () => <BlogDocPage />,
  communities: () => <CommunitiesSpace />,
  podcast: () => <PodcastSpace />,
  skills: () => <AgentSkillsSpace />,
  chat: () => <AskMyAgentSpace />,
};

export default function SpacesContent({ slug }: { slug: string }) {
  const render = SPACE_COMPONENTS[slug];
  if (!render) return null;
  return <>{render()}</>;
}
