import SpacesSidebar from "@/components/spaces/SpacesSidebar";

export default function SpacesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full min-h-[calc(100vh-3rem)]">
      <SpacesSidebar />
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-3xl mx-auto px-6 py-8 pb-24 md:pb-8">
          {children}
        </div>
      </div>
    </div>
  );
}
