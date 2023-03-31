import { Badge } from "@/ui/primitive/Badge";
import Link from "next/link";
import { getTagCountSorted } from "@/lib/posts";

export function CategorySection() {
  return (
    <section>
      <div className="font-serif text-3xl font-bold text-primary-11">分类</div>
      <div className="mt-6 flex h-fit flex-wrap items-start gap-2">
        {getTagCountSorted()
          .slice(0, 6)
          .map((tag) => {
            return (
              <Link key={tag[0]} href={`/posts/tags/${tag[0]}`}>
                <Badge variant={{ color: "accent" }}>{tag[0]}</Badge>
              </Link>
            );
          })}
      </div>
    </section>
  );
}
