import Image from "next/image";
import Link from "next/link";
import { Post } from "@/data/posts";
import { BLUR_DATA_URL } from "@/lib/utils";
import { PostMeta } from "./PostMeta";
import { TagBadge } from "./TagBadge";

export function PostCard({ post }: { post: Post }) {
  return (
    <article className="border rounded-lg overflow-hidden bg-card">
      <Link href={`/news/${post.slug}`} className="block">
        <Image
          src={post.coverImageUrl}
          alt={post.title}
          width={800}
          height={450}
          className="w-full h-48 object-cover"
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
        />
      </Link>
      <div className="p-4 space-y-2">
        <div className="flex flex-wrap gap-1">
          {post.tags.slice(0, 3).map((slug) => (
            <div key={slug}>
              <TagBadge slug={slug} />
            </div>
          ))}
        </div>
        <h3 className="font-semibold leading-tight text-lg">
          <Link href={`/news/${post.slug}`}>{post.title}</Link>
        </h3>
        <p className="text-sm text-muted-foreground">{post.excerpt}</p>
        <PostMeta authorId={post.authorId} date={post.publishedAt} />
      </div>
    </article>
  );
}
