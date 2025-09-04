export function getYouTubeId(url?: string): string | null {
  if (!url) return null;
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtu.be")) return u.pathname.slice(1);
    if (u.searchParams.get("v")) return u.searchParams.get("v");
    const paths = u.pathname.split("/");
    const embedIndex = paths.findIndex(
      (p) => p === "embed" || p === "shorts" || p === "live"
    );
    if (embedIndex >= 0 && paths[embedIndex + 1]) return paths[embedIndex + 1];
  } catch {}
  return null;
}

export function thumbFromId(
  id?: string | null,
  size: "hq" | "mq" | "sd" = "hq"
) {
  if (!id) return "https://placehold.co/640x360/png?text=YouTube";
  const file =
    size === "hq"
      ? "hqdefault.jpg"
      : size === "sd"
        ? "sddefault.jpg"
        : "mqdefault.jpg";
  return `https://i.ytimg.com/vi/${id}/${file}`;
}

// Back-compat exports (can be removed if unused)
export const parseYouTubeId = getYouTubeId;
export const youtubeThumb = thumbFromId;
