import { users } from "./users";

export type Post = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImageUrl: string;
  gallery: string[];
  youtubeUrl?: string;
  tags: string[];
  authorId: string;
  publishedAt: string;
};

const lorem = (p = 3) =>
  Array.from({ length: p })
    .map(
      () =>
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.`
    )
    .join("\n\n");

export const posts: Post[] = [
  {
    id: "p1",
    title: "Eurasian Energy Corridors: The New Great Game",
    slug: "eurasian-energy-corridors",
    excerpt: "Pipelines, ports, and power politics are redrawing the map.",
    content: `<p>${lorem(4)}</p>`,
    coverImageUrl:
      "https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1470167290877-7d5d3446de4c?q=80&w=1400&auto=format&fit=crop",
    ],
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tags: ["geopolitics", "energy", "asia"],
    authorId: users[0].id,
    publishedAt: new Date().toISOString(),
  },
  {
    id: "p2",
    title: "Elections and the Currency Wars",
    slug: "elections-and-currency-wars",
    excerpt: "How politics and FX pressures feed each other.",
    content: `<p>${lorem(5)}</p>`,
    coverImageUrl:
      "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=1600&auto=format&fit=crop",
    gallery: [],
    tags: ["economy", "elections", "analysis"],
    authorId: users[1].id,
    publishedAt: new Date(Date.now() - 86400000 * 3).toISOString(),
  },
  {
    id: "p3",
    title: "Maritime Chokepoints: Why They Matter",
    slug: "maritime-chokepoints",
    excerpt: "From Hormuz to Malacca, sea lanes shape strategy.",
    content: `<p>${lorem(3)}</p>`,
    coverImageUrl:
      "https://images.unsplash.com/photo-1505839673365-e3971f8d9184?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop",
    ],
    youtubeUrl: "https://youtu.be/aqz-KE-bpKQ",
    tags: ["security", "geopolitics"],
    authorId: users[0].id,
    publishedAt: new Date(Date.now() - 86400000 * 7).toISOString(),
  },
  {
    id: "p4",
    title: "Europe’s Green Transition Meets Realpolitik",
    slug: "europe-green-transition-realpolitik",
    excerpt: "Supply chains, subsidies, and strategic autonomy.",
    content: `<p>${lorem(4)}</p>`,
    coverImageUrl:
      "https://images.unsplash.com/photo-1516117172878-fd2c41f4a759?q=80&w=1600&auto=format&fit=crop",
    gallery: [],
    tags: ["europe", "energy", "analysis"],
    authorId: users[1].id,
    publishedAt: new Date(Date.now() - 86400000 * 12).toISOString(),
  },
  {
    id: "p5",
    title: "Digital Sovereignty and the New Splinternet",
    slug: "digital-sovereignty-splinternet",
    excerpt: "Standards, chips, and the battle for control.",
    content: `<p>${lorem(2)}</p>`,
    coverImageUrl:
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop",
    gallery: [],
    tags: ["security", "asia"],
    authorId: users[0].id,
    publishedAt: new Date(Date.now() - 86400000 * 20).toISOString(),
  },
  {
    id: "p6",
    title: "Food Security Under Climate Pressure",
    slug: "food-security-climate",
    excerpt: "Agriculture, trade and fragile balances.",
    content: `<p>${lorem(3)}</p>`,
    coverImageUrl:
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1457530378978-8bac673b8062?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1400&auto=format&fit=crop",
    ],
    tags: ["analysis", "economy"],
    authorId: users[2].id,
    publishedAt: new Date(Date.now() - 86400000 * 30).toISOString(),
  },
  {
    id: "p7",
    title: "The Return of Industrial Policy",
    slug: "return-industrial-policy",
    excerpt: "Tradeoffs between resilience and efficiency.",
    content: `<p>${lorem(3)}</p>`,
    coverImageUrl:
      "https://images.unsplash.com/photo-1483825366482-1265f6ea9bc9?q=80&w=1600&auto=format&fit=crop",
    gallery: [],
    tags: ["economy", "europe"],
    authorId: users[1].id,
    publishedAt: new Date(Date.now() - 86400000 * 40).toISOString(),
  },
  {
    id: "p8",
    title: "Elections in a Multipolar World",
    slug: "elections-multipolar-world",
    excerpt: "Campaigning amid strategic competition.",
    content: `<p>${lorem(2)}</p>`,
    coverImageUrl:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1600&auto=format&fit=crop",
    gallery: [],
    youtubeUrl: "https://www.youtube.com/embed/5NV6Rdv1a3I",
    tags: ["elections", "opinion"],
    authorId: users[0].id,
    publishedAt: new Date(Date.now() - 86400000 * 55).toISOString(),
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug) || null;
}
