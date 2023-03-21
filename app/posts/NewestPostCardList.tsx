import { allPosts } from "contentlayer/generated";
import { PostCard } from "@/components/PostCard";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import "dayjs/locale/zh-cn"; // 导入本地化语言
dayjs.locale("zh-cn"); // 使用本地化语言
dayjs.extend(localizedFormat);

export function NewestPostCardList() {
  const sortedPosts = allPosts.sort((a, b) => {
    return dayjs(b.date).unix() - dayjs(a.date).unix();
  });

  return (
    <div className="flex flex-col space-y-3">
      <div className="font-serif text-2xl font-bold text-primary-11">
        最新发布
      </div>
      <div className="flex flex-col space-y-8">
        {sortedPosts.map((post) => (
          <PostCard
            key={post.slug}
            title={post.title}
            summary={post.summary}
            date={dayjs(post.date).format("ll")}
            slug={post.slug}
          />
        ))}
      </div>
    </div>
  );
}
