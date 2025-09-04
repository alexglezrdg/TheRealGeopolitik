import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, posts } from "@/data/posts";
import { users } from "@/data/users";
import { tagBySlug } from "@/data/tags";
import { RichTextRenderer } from "@/components/RichTextRenderer";
import { YouTubeLite } from "@/components/YouTubeLite";
import { PostMeta } from "@/components/PostMeta";
import { TagBadge } from "@/components/TagBadge";
import { newsArticleJsonLd, videoObjectJsonLd, breadcrumbsJsonLd } from "@/lib/structuredData";
import { buildCanonical, excerptFromHtml } from "@/lib/format";
import { SITE_NAME, DEFAULT_OG, TW_HANDLE } from "@/lib/site";
import { BLUR_DATA_URL } from "@/lib/utils";
import { CommentList } from "@/components/CommentList";
import { CommentForm } from "@/components/CommentForm";
import { ShareButtons } from "@/components/ShareButtons";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  const title = `${post.title} | ${SITE_NAME}`;
  const description = post.excerpt || excerptFromHtml(post.content, 160);
  const url = buildCanonical(`/news/${post.slug}`);
  const image = post.coverImageUrl || DEFAULT_OG;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, images: [{ url: image }] },
    twitter: { title, description, images: [image], creator: TW_HANDLE, card: "summary_large_image" },
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
  const jsonLd = newsArticleJsonLd({
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
    content: post.content,
    coverImageUrl: post.coverImageUrl,
    publishedAt: post.publishedAt,
    author,
    youtubeUrl: post.youtubeUrl,
  });
  const videoLd = post.youtubeUrl ? videoObjectJsonLd({
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
    content: post.content,
    coverImageUrl: post.coverImageUrl,
    publishedAt: post.publishedAt,
    author,
    youtubeUrl: post.youtubeUrl,
  }) : null;
  const primaryTag = post.tags[0];
  const primaryTagName = primaryTag ? tagBySlug(primaryTag)?.name || primaryTag : "News";
  const crumbs = breadcrumbsJsonLd([
    { name: "Home", url: buildCanonical("/") },
    primaryTag
      ? { name: primaryTagName, url: buildCanonical(`/tag/${primaryTag}`) }
      : { name: "News", url: buildCanonical("/news") },
    { name: post.title, url: buildCanonical(`/news/${post.slug}`) },
  ]);
  return (
    <article className="space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {videoLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(videoLd) }}
        />
      ) : null}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }}
      />
      <div className="space-y-2">
        <div className="text-xs uppercase tracking-wide text-muted-foreground">
          {primaryTagName}
        </div>
        <h1 className="text-3xl md:text-4xl font-serif leading-tight">
          {post.title}
        </h1>
        <div className="flex items-center justify-between">
          <PostMeta authorId={post.authorId} date={post.publishedAt} />
          <ShareButtons url={buildCanonical(`/news/${post.slug}`)} />
        </div>
      </div>
      <Image
        src={post.coverImageUrl}
        alt={post.title}
        width={1200}
        height={630}
        className="w-full h-auto rounded-xl border"
        placeholder="blur"
        blurDataURL={BLUR_DATA_URL}
      />
      <div className="flex flex-wrap gap-2">
        {post.tags.map((slug) => (
          <TagBadge key={slug} slug={slug} />
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
        <CommentList postId={post.id} />
        <CommentForm />
      </section>
    </article>
  );
}
