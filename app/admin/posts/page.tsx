import Link from "next/link";
import { posts } from "@/data/posts";

export default function AdminPostsPage() {
  return (
    <div className="space-y-3">
      <h1 className="text-xl font-semibold">Posts</h1>
      <div className="overflow-auto">
        <table className="w-full text-sm border">
          <thead className="bg-muted/50">
            <tr>
              <th className="text-left p-2 border-b">Title</th>
              <th className="text-left p-2 border-b">Tags</th>
              <th className="text-left p-2 border-b">Published</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((p) => (
              <tr key={p.id} className="border-b">
                <td className="p-2">
                  <Link className="underline" href={`/news/${p.slug}`}>
                    {p.title}
                  </Link>
                </td>
                <td className="p-2">{p.tags.join(", ")}</td>
                <td className="p-2">
                  {new Date(p.publishedAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
