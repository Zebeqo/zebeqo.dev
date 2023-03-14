import { allPosts } from "contentlayer/generated";
import { Mdx } from "@/components/Mdx";

export function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post.slug === params.slug);

  return (
    <div className="flex flex-col items-center py-16">
      {post && <Mdx code={post.body.code} />}
    </div>
  );
}
