"use client"
import Link from 'next/link'

export function SmallCapsNav() {
  const items = [
    { href: '#', label: 'Current Issue' },
    { href: '#', label: 'Archives' },
    { href: '#', label: 'Books' },
    { href: '#', label: 'Podcast' }
  ]
  return (
    <nav aria-label="Primary" className="flex gap-6 justify-center text-[12px] uppercase tracking-wide text-muted-ink">
      {items.map((it) => (
        <Link key={it.label} href={it.href} className="link hover:underline">
          {it.label}
        </Link>
      ))}
    </nav>
  )
}

export function NewsletterMiniForm() {
  return (
    <form className="flex gap-2" onSubmit={(e) => e.preventDefault()} aria-label="Newsletter signup">
      <input className="border rule rounded px-3 py-2 w-64" placeholder="Your email" aria-label="Email" />
      <button className="btn btn-accent" type="submit">Subscribe</button>
    </form>
  )
}
