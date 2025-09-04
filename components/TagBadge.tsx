import Link from "next/link";
import { tags } from "@/data/tags";

export function TagBadge({ slug }: { slug: string }) {
  const tag = tags.find((t) => t.slug === slug);
  const label = tag?.name || slug;
  return (
    <Link
      href={`/tag/${slug}`}
      className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs hover:bg-accent focus:outline-none focus:ring-2 focus:ring-offset-2"
    >
      #{label}
    </Link>
  );
}
