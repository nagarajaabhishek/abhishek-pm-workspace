"use client";

import { usePathname } from "next/navigation";
import TopNav from "./TopNav";
import MobileTabBar from "./MobileTabBar";
import WelcomeModal from "./WelcomeModal";
import LoganBot from "./LoganBot";
import ViewToggle from "@/components/classic/ViewToggle";

export default function WorkspaceShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isClassic = pathname.startsWith("/classic");

  if (isClassic) {
    return (
      <>
        <ViewToggle />
        <main className="min-h-screen">{children}</main>
      </>
    );
  }

  return (
    <>
      <WelcomeModal />
      <TopNav />
      <ViewToggle />
      <main className="h-[calc(100vh-3rem)] overflow-hidden">{children}</main>
      <MobileTabBar />
      <LoganBot />
    </>
  );
}
