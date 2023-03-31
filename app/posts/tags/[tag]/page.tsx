import { getTagCountSorted } from "@/lib/posts";
import { allPosts } from "contentlayer/generated";
import dayjs from "dayjs";
import { PostListSection } from "@/components/PostListSection";

export function generateStaticParams() {
  return getTagCountSorted().map((tag) => ({
    tag: tag[0],
  }));
}

export default function Page({ params }: { params: { tag: string } }) {
  const decodedTag = decodeURIComponent(params.tag);

  const sortedPosts = allPosts
    .filter((post) => post.tags.includes(decodedTag))
    .sort((a, b) => {
      return dayjs(b.date).unix() - dayjs(a.date).unix();
    });

  return (
    <PostListSection
      className="lg:max-w-md xl:max-w-lg"
      label={`# ${decodedTag}`}
      postList={sortedPosts}
    />
  );
}
