"use client";

import { useMounted } from "@/hooks/use-mounted";
import { LoadingDots } from "@/components/LoadingDots";
import { usePostLikes } from "@/hooks/use-like";

export function LikesNumber({ slug }: { slug: string }) {
  const { data } = usePostLikes(slug);
  const mounted = useMounted();

  if (!mounted) return <LoadingDots />;

  return <>{data?.likes}</>;
}
