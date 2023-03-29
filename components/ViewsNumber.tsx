"use client";

import { usePostViews } from "@/hooks/use-view";
import { useMounted } from "@/hooks/use-mounted";
import { LoadingDots } from "@/components/LoadingDots";

export function ViewsNumber({ slug }: { slug: string }) {
  const { data } = usePostViews(slug);
  const mounted = useMounted();

  if (!mounted) return <LoadingDots />;

  return <>{data?.views}</>;
}
