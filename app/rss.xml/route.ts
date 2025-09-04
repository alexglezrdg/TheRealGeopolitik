import { posts } from "@/data/posts";
import { BASE_URL, SITE_NAME } from "@/lib/site";

export const revalidate = 60;

export async function GET() {
  const items = posts
    .slice()
    .sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt))
    .slice(0, 20)
    .map((p) => `
      <item>
        <title><![CDATA[${p.title}]]></title>
        <link>${BASE_URL}/news/${p.slug}</link>
        <guid>${BASE_URL}/news/${p.slug}</guid>
        <pubDate>${new Date(p.publishedAt).toUTCString()}</pubDate>
        <description><![CDATA[${p.excerpt}]]></description>
      </item>`)
    .join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
      <title>${SITE_NAME}</title>
      <link>${BASE_URL}</link>
      <description>Latest from ${SITE_NAME}</description>
      ${items}
    </channel>
  </rss>`;
  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
