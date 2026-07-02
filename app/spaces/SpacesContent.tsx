"use client";

import { useSearchParams } from "next/navigation";
import SpacesSidebar from "@/components/spaces/SpacesSidebar";
import CommunitiesSpace from "@/components/spaces/CommunitiesSpace";
import PodcastSpace from "@/components/spaces/PodcastSpace";
import BlogSpace from "@/components/spaces/BlogSpace";
import TeardownsSpace from "@/components/spaces/TeardownsSpace";

const tabs: Record<string, React.ComponentType> = {
  communities: CommunitiesSpace,
  podcast: PodcastSpace,
  blog: BlogSpace,
  teardowns: TeardownsSpace,
};

export default function SpacesContent() {
  const params = useSearchParams();
  const tab = params.get("tab") ?? "communities";
  const ActiveSpace = tabs[tab] ?? CommunitiesSpace;

  return (
    <div className="flex min-h-[calc(100vh-57px)]">
      <SpacesSidebar active={tab} />
      <main className="flex-1 overflow-y-auto">
        <ActiveSpace />
      </main>
    </div>
  );
}
