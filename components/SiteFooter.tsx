import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t mt-12">
      <div className="container py-8 text-sm flex flex-col sm:flex-row gap-4 items-center justify-between">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} The Real Geopolitik
        </p>
        <nav className="flex gap-4">
          <Link href="/">Home</Link>
          <Link href="/search">Search</Link>
          <Link href="/admin">Admin</Link>
        </nav>
      </div>
    </footer>
  );
}
