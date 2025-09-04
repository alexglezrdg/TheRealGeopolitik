import Image from "next/image";
import Link from "next/link";
import { posts } from "@/data/posts";
import { tags } from "@/data/tags";
import { PostCard } from "@/components/PostCard";
import { BLUR_DATA_URL } from "@/lib/utils";
import { SectionHeading } from "@/components/SectionHeading";

export default function HomePage() {
  const [featured, ...latest] = posts;
  return (
    <div className="space-y-8">
      {featured && (
        <section className="grid md:grid-cols-2 gap-4">
          <Link href={`/news/${featured.slug}`} className="block">
            <Image
              src={featured.coverImageUrl}
              alt={featured.title}
              width={1200}
              height={630}
              className="w-full h-64 md:h-full object-cover rounded-lg border"
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
            />
          </Link>
          <div className="space-y-3 self-center">
            <h1 className="text-2xl md:text-3xl font-semibold">
              {featured.title}
            </h1>
            <p className="text-muted-foreground">{featured.excerpt}</p>
            <Link
              href={`/news/${featured.slug}`}
              className="inline-flex border rounded px-3 py-1 text-sm w-fit"
            >
              Read
            </Link>
          </div>
        </section>
      )}
      <section className="space-y-3">
        <SectionHeading kicker="Latest" title="Fresh analysis" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {latest.map((p) => (
            <PostCard key={p.id} post={p} />
          ))}
        </div>
      </section>
      <section className="space-y-3">
        <SectionHeading kicker="Highlights" title="Trending" />
        <div className="flex flex-wrap gap-2 text-sm">
          {posts.slice(0, 5).map((p) => (
            <Link
              key={p.id}
              className="border rounded px-2 py-1"
              href={`/news/${p.slug}`}
            >
              {p.title}
            </Link>
          ))}
        </div>
      </section>
      <section className="space-y-3">
        <SectionHeading kicker="Browse" title="Tags" />
        <div className="flex flex-wrap gap-2">
      {tags.map((t) => (
            <Link
        key={t.slug}
              className="inline-flex items-center rounded-full border px-3 py-1 text-sm"
        href={`/tag/${t.slug}`}
            >
        #{t.name}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
