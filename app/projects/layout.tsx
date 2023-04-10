import { HeadSection } from "@/components/HeadSection";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeadSection
        title="項目"
        description="我在做的一些 web 项目 ️🔨"
        className="animate-page-in-1 mt-4"
      />
      {children}
    </>
  );
}
