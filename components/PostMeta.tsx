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
