import Link from "next/link";

export function Pagination({
  page,
  total,
  perPage,
  basePath,
}: {
  page: number;
  total: number;
  perPage: number;
  basePath: string;
}) {
  const pages = Math.max(1, Math.ceil(total / perPage));
  if (pages <= 1) return null;
  const mk = (p: number) => `${basePath}?page=${p}`;
  return (
    <nav className="flex items-center gap-2" aria-label="Pagination">
      <Link
        className="px-3 py-1 border rounded disabled:opacity-50"
        href={mk(Math.max(1, page - 1))}
        aria-disabled={page === 1}
      >
        Prev
      </Link>
      {Array.from({ length: pages }).map((_, i) => {
        const p = i + 1;
        const active = p === page;
        return (
          <Link
            key={p}
            href={mk(p)}
            className={`px-3 py-1 border rounded ${active ? "bg-black text-white" : ""}`}
          >
            {p}
          </Link>
        );
      })}
      <Link
        className="px-3 py-1 border rounded disabled:opacity-50"
        href={mk(Math.min(pages, page + 1))}
        aria-disabled={page === pages}
      >
        Next
      </Link>
    </nav>
  );
}
