import type { Metadata } from "next";
import { Geist_Mono, Montserrat, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import WorkspaceShell from "@/components/shell/WorkspaceShell";

const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const montserrat = Montserrat({ variable: "--font-montserrat", subsets: ["latin"], weight: ["400","600","700","800"] });
const ibmPlexSans = IBM_Plex_Sans({ variable: "--font-ibm", subsets: ["latin"], weight: ["300","400","500","600"] });

export const metadata: Metadata = {
  title: "Abhishek Nagaraja — PM Workspace",
  description: "A PM-tool portfolio with 4 views: Board, Canvas, Docs, Flows",
  icons: { icon: "/icon.png", apple: "/icon.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body suppressHydrationWarning className={`${montserrat.variable} ${ibmPlexSans.variable} ${geistMono.variable} antialiased bg-background text-foreground bg-chess-pattern`}>
        <WorkspaceShell>{children}</WorkspaceShell>
      </body>
    </html>
  );
}
