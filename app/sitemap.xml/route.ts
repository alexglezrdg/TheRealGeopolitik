import { posts } from "@/data/posts";
import { tags } from "@/data/tags";
import { BASE_URL } from "@/lib/site";

export const revalidate = 60;

export async function GET() {
  const urls: { loc: string; priority?: number }[] = [
    { loc: `${BASE_URL}/`, priority: 1.0 },
    { loc: `${BASE_URL}/search`, priority: 0.6 },
  ];
  for (const p of posts) {
    urls.push({ loc: `${BASE_URL}/news/${p.slug}`, priority: 0.8 });
  }
  for (const t of tags) {
    urls.push({ loc: `${BASE_URL}/tag/${t.slug}`, priority: 0.6 });
  }
  const items = urls
    .map(
      (u) => `
    <url>
      <loc>${u.loc}</loc>
      ${u.priority ? `<priority>${u.priority}</priority>` : ""}
    </url>`
    )
    .join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${items}
</urlset>`;
  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
