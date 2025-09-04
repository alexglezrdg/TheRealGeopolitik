"use client";
import { useMemo, useState } from "react";
import { posts } from "@/data/posts";
import { PostCard } from "@/components/PostCard";

export default function SearchPage() {
  const [q, setQ] = useState("");
  const results = useMemo(() => {
    const query = q.toLowerCase();
    if (!query) return [];
    return posts.filter(
      (p) =>
        p.title.toLowerCase().includes(query) ||
        p.excerpt.toLowerCase().includes(query) ||
        p.content.toLowerCase().includes(query)
    );
  }, [q]);
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Search</h1>
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        className="w-full border rounded px-3 py-2"
        placeholder="Search posts..."
      />
      {q && (
        <p className="text-sm text-muted-foreground">
          {results.length} result(s)
        </p>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {results.map((p) => (
          <PostCard key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}
