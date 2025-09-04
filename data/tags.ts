export type Tag = { slug: string; name: string };

export const tags: Tag[] = [
  { slug: "geopolitics", name: "Geopolitics" },
  { slug: "europe", name: "Europe" },
  { slug: "asia", name: "Asia" },
  { slug: "energy", name: "Energy" },
  { slug: "security", name: "Security" },
  { slug: "economy", name: "Economy" },
  { slug: "elections", name: "Elections" },
  { slug: "analysis", name: "Analysis" },
  { slug: "opinion", name: "Opinion" },
];

export const tagBySlug = (slug: string) => tags.find((t) => t.slug === slug);
