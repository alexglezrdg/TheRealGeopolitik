import { comments } from "@/data/comments";
import { users } from "@/data/users";
import { formatDate } from "@/lib/format";

export function CommentList({ postId }: { postId: string }) {
  const list = comments.filter((c) => c.postId === postId && c.isApproved);
  if (list.length === 0)
    return <p className="text-sm text-muted-foreground">No comments yet.</p>;
  return (
    <ul className="space-y-4">
      {list.map((c) => {
        const user = users.find((u) => u.id === c.userId);
        return (
          <li key={c.id} className="border rounded p-3">
            <div className="text-xs text-muted-foreground mb-1">
              {user?.name || "Anon"} • {formatDate(c.createdAt)}
            </div>
            <p className="text-sm">{c.body}</p>
          </li>
        );
      })}
    </ul>
  );
}

// form moved to its own file
