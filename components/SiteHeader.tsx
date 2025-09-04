import Link from 'next/link'
import { SmallCapsNav } from './editorial/Nav'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b">
      <div className="container-wide py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="md:hidden border rule rounded px-2 py-1" aria-label="Open menu">☰</button>
          </div>
          <Link href="/" className="serif text-2xl tracking-tight">The Real Geopolitik</Link>
          <div className="flex items-center gap-3">
            <input aria-label="Search" placeholder="Search" className="hidden sm:block border rule rounded px-3 py-1.5 w-48" />
            <button className="btn btn-accent hidden sm:inline-flex">Subscribe</button>
            <button className="text-sm">Log In</button>
          </div>
        </div>
        <div className="mt-3">
          <SmallCapsNav />
        </div>
      </div>
    </header>
  )
}
