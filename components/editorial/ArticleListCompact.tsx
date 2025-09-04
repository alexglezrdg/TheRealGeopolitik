import Image from 'next/image'
import Link from 'next/link'
import { EditorialPost } from '@/data/editorialPosts'

export function ArticleListCompact({ items }: { items: EditorialPost[] }) {
  return (
    <ul className="divide-y" style={{ borderColor: 'var(--rule)' }}>
      {items.map((p) => (
        <li key={p.id} className="py-3 flex gap-3 items-center">
          <Image src={p.thumbUrl} alt="" width={64} height={64} className="rounded-sm object-cover" />
          <div className="min-w-0">
            <Link href={`/#${p.slug}`} className="link font-medium leading-snug line-clamp-2">{p.title}</Link>
            <div className="text-xs text-muted-ink/80">{p.authors.join(', ')}</div>
          </div>
        </li>
      ))}
    </ul>
  )
}

export function PostCard({ post }: { post: EditorialPost }) {
  return (
    <article className="group space-y-2">
      <div className="kicker">{post.kicker}</div>
      <h3 className="serif text-2xl md:text-3xl group-hover:underline decoration-[var(--accent)] underline-offset-[6px]">{post.title}</h3>
      <div className="text-sm text-muted-ink/80">{post.authors.join(', ')}</div>
    </article>
  )
}
