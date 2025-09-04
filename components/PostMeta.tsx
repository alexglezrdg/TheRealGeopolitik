import Link from "next/link";
import { formatDate } from "@/lib/format";
import { users } from "@/data/users";

export function PostMeta({
  authorId,
  date,
}: {
  authorId: string;
  date: string;
}) {
  const author = users.find((u) => u.id === authorId);
  return (
    <div className="text-xs text-muted-foreground">
      By {author?.name || "Unknown"} • {formatDate(date)}
    </div>
  );
}

export function TagBadge({ tag }: { tag: string }) {
  return (
    <Link
      href={`/tag/${tag}`}
      className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs"
    >
      #{tag}
    </Link>
  );
}
