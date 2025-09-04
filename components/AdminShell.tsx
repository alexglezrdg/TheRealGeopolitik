import Link from "next/link";

export function AdminShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid md:grid-cols-[240px_1fr] gap-0 min-h-[70vh]">
      <aside className="border-r p-4 space-y-2">
        <div className="font-semibold">Admin</div>
        <nav className="grid gap-1 text-sm">
          <Link href="/admin">Dashboard</Link>
          <Link href="/admin/posts">Posts</Link>
          <Link href="/admin/comments">Comments</Link>
          <Link href="/admin/users">Users</Link>
        </nav>
      </aside>
      <section className="p-4">
        <div className="border-b pb-3 mb-3 flex items-center justify-between">
          <div className="font-medium">The Real Geopolitik Admin</div>
          <div className="text-sm text-muted-foreground">Mock UI only</div>
        </div>
        {children}
      </section>
    </div>
  );
}
