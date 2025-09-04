import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getPostBySlug, posts } from "@/data/posts";
import { users } from "@/data/users";
import { RichTextRenderer } from "@/components/RichTextRenderer";
import { YouTubeLite } from "@/components/YouTubeLite";
import { PostMeta, TagBadge } from "@/components/PostMeta";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/structuredData";
import { canonical } from "@/lib/format";
import { SITE_NAME, DEFAULT_OG_IMAGE } from "@/lib/site";
import { BLUR_DATA_URL } from "@/lib/utils";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  const title = `${post.title} | ${SITE_NAME}`;
  const description =
    post.excerpt || post.content.replace(/<[^>]+>/g, "").slice(0, 150);
  const url = canonical(`/news/${post.slug}`);
  const image = post.coverImageUrl || DEFAULT_OG_IMAGE;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, images: [{ url: image }] },
    twitter: { title, description, images: [image] },
  };
}

export default function ArticlePage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) return notFound();
  const author = users.find((u) => u.id === post.authorId) || {
    name: "Unknown",
  };
  const related = posts
    .filter(
      (p) => p.id !== post.id && p.tags.some((t) => post.tags.includes(t))
    )
    .slice(0, 3);
  const jsonLd = articleJsonLd({
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
    content: post.content,
    coverImageUrl: post.coverImageUrl,
    publishedAt: post.publishedAt,
    author,
  });
  const crumbs = breadcrumbJsonLd([
    { name: "Home", url: canonical("/") },
    { name: "News", url: canonical("/news") },
    { name: post.title, url: canonical(`/news/${post.slug}`) },
  ]);
  return (
    <article className="space-y-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }}
      />
      <h1 className="text-2xl md:text-3xl font-semibold leading-tight">
        {post.title}
      </h1>
      <PostMeta authorId={post.authorId} date={post.publishedAt} />
      <Image
        src={post.coverImageUrl}
        alt={post.title}
        width={1200}
        height={630}
        className="w-full h-auto rounded-lg border"
        placeholder="blur"
        blurDataURL={BLUR_DATA_URL}
      />
      <div className="flex flex-wrap gap-2">
        {post.tags.map((t) => (
          <TagBadge key={t} tag={t} />
        ))}
      </div>
      {post.youtubeUrl ? (
        <YouTubeLite url={post.youtubeUrl} title={post.title} />
      ) : null}
      <RichTextRenderer html={post.content} />
      {post.gallery.length ? (
        <div className="grid sm:grid-cols-2 gap-3">
          {post.gallery.map((src, i) => (
            <Image
              key={src + i}
              src={src}
              alt={post.title + " image " + (i + 1)}
              width={1200}
              height={800}
              className="w-full h-auto object-cover rounded border"
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
            />
          ))}
        </div>
      ) : null}
      {related.length ? (
        <section className="space-y-2">
          <h2 className="font-semibold">Related</h2>
          <ul className="list-disc pl-5">
            {related.map((r) => (
              <li key={r.id}>
                <a className="underline" href={`/news/${r.slug}`}>
                  {r.title}
                </a>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
      <section className="space-y-3">
        <h2 className="font-semibold">Comments</h2>
        {/* Mock comments UI wired in home file to keep dependencies minimal */}
      </section>
    </article>
  );
}
