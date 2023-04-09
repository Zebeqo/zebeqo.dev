// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// This file is based on https://github.com/shadcn/ui/blob/main/apps/www/components/toc.tsx
"use client";

import * as React from "react";
import { useMounted } from "@/hooks/use-mounted";

import type { TableOfContents } from "@/lib/toc";
import { cn } from "@/lib/utils";
import * as Separator from "@radix-ui/react-separator";
import { LikeHeart } from "@/ui/components/LikeHeart";
import { LikeButton } from "@/components/LikeHeart/LikeButton";
import { Suspense } from "react";
import { LikesNumber } from "@/components/LikesNumber";
import { LoadingDots } from "@/components/LoadingDots";

interface TocProps {
  toc: TableOfContents;
}

export function TocSection({ toc, slug }: TocProps & { slug: string }) {
  const itemIds = React.useMemo(
    () =>
      toc.items
        ? toc.items
            .flatMap((item) => [item.url, item.items?.map((item) => item.url)])
            .flat()
            .filter(Boolean)
            .map((id) => id?.split("#")[1])
        : [],
    [toc]
  );
  const activeHeading = useActiveItem(itemIds);
  const mounted = useMounted();

  if (!toc.items || !mounted) {
    return null;
  }

  return (
    <>
      <div className="space-y-1">
        <p className="font-medium tracking-widest">本页大纲</p>
        <Tree tree={toc} activeItem={activeHeading} />
      </div>
      <Separator.Root className="relative my-4 h-px bg-neutral-6" decorative>
        <div className="absolute -left-6 -top-[19px] scale-75">
          <Suspense fallback={<LikeHeart step={0} />}>
            <LikeButton slug={slug} />
          </Suspense>
        </div>
      </Separator.Root>
      <span className="ml-12 cursor-default text-lg font-bold text-neutral-11">
        <Suspense fallback={<LoadingDots />}>
          <LikesNumber slug={slug} />
        </Suspense>
      </span>
    </>
  );
}

function useActiveItem(itemIds: string[]) {
  const [activeId, setActiveId] = React.useState(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: `0% 0% -90% 0%` }
    );

    itemIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      itemIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [itemIds]);

  return activeId;
}

interface TreeProps {
  tree: TableOfContents;
  level?: number;
  activeItem?: string;
}

function Tree({ tree, level = 1, activeItem }: TreeProps) {
  return tree.items?.length && level < 3 ? (
    <ul className={cn("m-0 list-none", { "pl-4": level !== 1 })}>
      {tree.items.map((item, index) => {
        return (
          <li key={index} className={cn("mt-0 pt-2")}>
            <a
              href={item.url}
              className={cn(
                "inline-block text-sm no-underline",
                // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                item.url === `#${activeItem}`
                  ? "font-medium text-accent-11"
                  : "text-neutral-11 hover:text-neutral-12"
              )}
            >
              {item.title}
            </a>
            {item.items?.length ? (
              <Tree tree={item} level={level + 1} activeItem={activeItem} />
            ) : null}
          </li>
        );
      })}
    </ul>
  ) : null;
}
