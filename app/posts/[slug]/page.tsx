import { allPosts } from "contentlayer/generated";
import { Mdx } from "@/components/Mdx";
import { notFound } from "next/navigation";
import { getTableOfContents } from "@/lib/toc";
import { DashboardTableOfContents } from "@/components/Toc";

export function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  const toc = await getTableOfContents(post.body.raw);

  return (
    <main className="relative flex justify-center xl:justify-start xl:space-x-20 2xl:space-x-40">
      <Mdx code={post.body.code} />
      <div className="hidden text-sm xl:block 2xl:text-base">
        <div className="sticky top-32 max-w-sm">
          <DashboardTableOfContents toc={toc} />
        </div>
      </div>
    </main>
  );
}
