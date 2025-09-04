import Link from "next/link";
import { posts } from "@/data/posts";
import { tagBySlug } from "@/data/tags";
import { PostCard } from "@/components/PostCard";
import { Pagination } from "@/components/Pagination";

export default function TagPage({
  searchParams,
  params,
}: {
  searchParams: { page?: string };
  params: { slug: string };
}) {
  const page = Number(searchParams?.page || "1");
  const perPage = 9;
  const filtered = posts
    .filter((p) => p.tags.includes(params.slug))
    .sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt));
  const start = (page - 1) * perPage;
  const subset = filtered.slice(start, start + perPage);
  const tag = tagBySlug(params.slug);
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">
        {tag?.name || params.slug} · {filtered.length}
      </h1>
      {subset.length === 0 ? (
        <p>No posts for this tag.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {subset.map((p) => (
            <PostCard key={p.id} post={p} />
          ))}
        </div>
      )}
      <Pagination
        page={page}
        total={filtered.length}
        perPage={perPage}
        basePath={`/tag/${params.slug}`}
      />
      <div>
        <Link className="underline" href="/">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
