import type { Post } from "contentlayer/generated";
import { PostCard } from "@/components/PostCard";
import { formatDay } from "@/lib/utils";

export function PostListSection({
  label,
  postList,
  className,
}: {
  label: string;
  postList: Post[];
  className?: string;
}) {
  return (
    <section className="flex-grow">
      <div className="font-serif text-3xl font-bold text-primary-11">
        {label}
      </div>
      <div className="mt-6 flex flex-col space-y-8">
        {postList.map((post) => (
          <PostCard
            key={post.slug}
            title={post.title}
            summary={post.summary}
            date={formatDay(post.date)}
            slug={post.slug}
            className={className}
          />
        ))}
      </div>
    </section>
  );
}
