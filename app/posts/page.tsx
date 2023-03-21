import { HeadSection } from "@/components/HeadSection";
import { NewestPostCardList } from "@/app/posts/NewestPostCardList";

export default function Page() {
  return (
    <>
      <HeadSection
        title="博客"
        description="一些我写的关于编程的文章 ✍️️"
        className="mt-4"
      />
      <div className="mt-10 flex justify-between">
        <NewestPostCardList />
      </div>
    </>
  );
}
