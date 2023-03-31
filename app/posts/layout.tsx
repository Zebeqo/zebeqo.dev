import { HeadSection } from "@/components/HeadSection";
import { CategorySection } from "@/app/posts/CategorySection";
import { HottestPostSection } from "@/app/posts/HottestPostSection";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeadSection
        title="博客"
        description="一些我写的关于编程的文章 ✍️️"
        className="mt-4"
      />
      <div className="mt-10 flex flex-col space-y-12 lg:flex-row lg:justify-between lg:space-y-0">
        {children}
        <div className="max-w-lg lg:max-w-xs">
          <CategorySection />
          {/* @ts-expect-error async Server Component */}
          <HottestPostSection className="mt-12" />
        </div>
      </div>
    </>
  );
}
