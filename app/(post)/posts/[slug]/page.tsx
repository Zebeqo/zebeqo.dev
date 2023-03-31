import { allPosts } from "contentlayer/generated";
import { Mdx } from "@/components/Mdx/Mdx";
import { notFound } from "next/navigation";
import { getTableOfContents } from "@/lib/toc";
import { TocSection } from "@/components/TocSection";
import { UpdateView } from "@/app/(post)/posts/[slug]/UpdateView";
import { Suspense } from "react";
import { db } from "@/lib/db";
import { z } from "zod";
import Link from "next/link";
import { Badge } from "@/ui/primitive/Badge";
import { formatDay } from "@/lib/utils";

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
  const db_data = z
    .object({
      likes: z.number(),
    })
    .parse(
      await db.post.findUnique({
        where: {
          slug: params.slug,
        },
        select: {
          likes: true,
        },
      })
    );

  return (
    <>
      <div className="prose prose-olive md:prose-lg prose-h1:font-bold">
        <h1>{post.title}</h1>
        <div className="not-prose flex h-fit flex-wrap items-start gap-2">
          {post.tags.map((tag) => {
            return (
              <Link key={tag} href={`/posts/tags/${tag}`}>
                <Badge variant={{ color: "accent" }}>{tag}</Badge>
              </Link>
            );
          })}
        </div>
        {post.last_modified_at && (
          <blockquote className="text-neutral-11">
            最后编辑于 {formatDay(post.last_modified_at)}
          </blockquote>
        )}
      </div>

      <Suspense>
        <UpdateView slug={params.slug} />
      </Suspense>
      <div className="relative flex justify-center xl:justify-start xl:space-x-24">
        <Mdx code={post.body.code} />
        <div className="hidden xl:block">
          <div className="sticky top-32 max-w-sm">
            <TocSection
              toc={toc}
              slug={params.slug}
              likeCount={db_data.likes}
            />
          </div>
        </div>
      </div>
    </>
  );
}
