import { CalendarDaysIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export function PostCard({
  title,
  summary,
  date,
  slug,
}: {
  title: string;
  summary: string;
  date: string;
  slug: string;
}) {
  return (
    <Link
      className="group flex max-w-prose flex-col space-y-1"
      href={`/posts/${slug}`}
    >
      <div className="font-serif text-xl font-bold text-neutral-12 group-hover:text-accent-11">
        {title}
      </div>
      <div className="flex space-x-4 text-neutral-11">
        <div className="flex items-center space-x-1 text-xs">
          <CalendarDaysIcon className="h-4 w-4" />
          <div>{date}</div>
        </div>
      </div>
      <div className="text-base text-neutral-11">{summary}</div>
    </Link>
  );
}
