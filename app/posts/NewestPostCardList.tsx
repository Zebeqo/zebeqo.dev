import { allPosts } from "contentlayer/generated";
import { PostCard } from "@/components/PostCard";
import dayjs from "dayjs";
import { formatDay } from "@/lib/utils";

export function NewestPostCardList() {
  const sortedPosts = allPosts.sort((a, b) => {
    return dayjs(b.date).unix() - dayjs(a.date).unix();
  });

  return (
    <div>
      <div className="font-serif text-4xl font-bold text-primary-11">
        最新发布
      </div>
      <div className="mt-6 flex flex-col space-y-8">
        {sortedPosts.map((post) => (
          <PostCard
            key={post.slug}
            title={post.title}
            summary={post.summary}
            date={formatDay(post.date)}
            slug={post.slug}
          />
        ))}
      </div>
    </div>
  );
}
