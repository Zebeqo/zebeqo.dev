"use client";

import { useMutatePostView } from "@/hooks/use-view";
import { useEffect } from "react";

export function UpdateView({ slug }: { slug: string }) {
  const updatePostView = useMutatePostView();
  useEffect(() => {
    updatePostView.mutate({ slug });
  }, [slug]);
  return <></>;
}
