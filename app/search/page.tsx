"use client";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { posts } from "@/data/posts";
import { users } from "@/data/users";
import { tags } from "@/data/tags";
import { PostCard } from "@/components/PostCard";

export default function SearchPage() {
  const sp = useSearchParams();
  const router = useRouter();
  const initial = sp.get("q") || "";
  const [q, setQ] = useState(initial);
  const [debounced, setDebounced] = useState(initial);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(q), 250);
    return () => clearTimeout(t);
  }, [q, router, sp]);
  useEffect(() => {
    const params = new URLSearchParams(sp.toString());
    if (q) params.set("q", q);
    else params.delete("q");
    router.replace(`/search${params.toString() ? `?${params}` : ""}`);
  }, [q, router, sp]);

  const results = useMemo(() => {
    const query = debounced.toLowerCase();
    if (!query) return [];
    return posts.filter((p) => {
      const author = users.find((u) => u.id === p.authorId)?.name || "";
      const tagNames = p.tags
        .map((slug) => tags.find((t) => t.slug === slug)?.name || slug)
        .join(" ");
      const text = `${p.title} ${p.excerpt} ${p.content} ${author} ${tagNames}`.toLowerCase();
      return text.includes(query);
    });
  }, [debounced]);
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Search</h1>
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        className="w-full border rounded px-3 py-2"
        placeholder="Search posts, authors, tags..."
      />
      {debounced && (
        <p className="text-sm text-muted-foreground">{results.length} result(s)</p>
      )}
      {debounced && results.length === 0 ? (
        <p className="text-muted-foreground">No results</p>
      ) : null}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {results.map((p) => (
          <PostCard key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}
