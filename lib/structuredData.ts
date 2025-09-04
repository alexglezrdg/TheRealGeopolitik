import { BASE_URL, SITE_NAME } from "./site";

type Author = { name: string };

export type PostInput = {
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  coverImageUrl: string;
  publishedAt: string;
  author: Author;
  youtubeUrl?: string;
};

export function newsArticleJsonLd(post: PostInput) {
  const url = `${BASE_URL}/news/${post.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: post.title,
    description: post.excerpt,
    mainEntityOfPage: url,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    image: [post.coverImageUrl],
    author: [{ "@type": "Person", name: post.author.name }],
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/og.png`,
      },
    },
  };
}

export function videoObjectJsonLd(post: PostInput) {
  if (!post.youtubeUrl) return null as any;
  const url = `${BASE_URL}/news/${post.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: post.title,
    description: post.excerpt,
    thumbnailUrl: [post.coverImageUrl],
    uploadDate: post.publishedAt,
    embedUrl: post.youtubeUrl,
    url,
  };
}

export function breadcrumbsJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}
