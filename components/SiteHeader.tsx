import Link from "next/link";
import { tags } from "@/data/tags";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/40 sticky top-0 z-40">
      <div className="container flex h-14 items-center justify-between gap-4">
        <Link href="/" className="font-semibold tracking-tight">
          The Real Geopolitik
        </Link>
        <nav className="hidden sm:flex items-center gap-4 text-sm">
          <Link href="/">Home</Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="h-8 px-2">Tags</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 max-h-64 overflow-auto">
              {tags.map((t) => (
                <DropdownMenuItem key={t} asChild>
                  <Link href={`/tag/${t}`}>#{t}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="/search">Search</Link>
        </nav>
        <div>
          <Button className="h-8">Sign in</Button>
        </div>
      </div>
    </header>
  );
}
