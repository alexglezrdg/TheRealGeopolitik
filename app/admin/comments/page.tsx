import { comments } from "@/data/comments";
import { users } from "@/data/users";
import { posts } from "@/data/posts";

export default function AdminCommentsPage() {
  return (
    <div className="space-y-3">
      <h1 className="text-xl font-semibold">Comments</h1>
      <div className="overflow-auto">
        <table className="w-full text-sm border">
          <thead className="bg-muted/50">
            <tr>
              <th className="text-left p-2 border-b">Post</th>
              <th className="text-left p-2 border-b">User</th>
              <th className="text-left p-2 border-b">Body</th>
              <th className="text-left p-2 border-b">Approved</th>
            </tr>
          </thead>
          <tbody>
            {comments.map((c) => {
              const post = posts.find((p) => p.id === c.postId);
              const user = users.find((u) => u.id === c.userId);
              return (
                <tr key={c.id} className="border-b">
                  <td className="p-2">{post?.title}</td>
                  <td className="p-2">{user?.name}</td>
                  <td className="p-2 max-w-[400px] truncate">{c.body}</td>
                  <td className="p-2">{c.isApproved ? "Yes" : "No"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
