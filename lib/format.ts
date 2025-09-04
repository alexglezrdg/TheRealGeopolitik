import { BASE_URL } from "./site";

export function formatDate(date: string | Date, locale = "en-US") {
  const d = typeof date === "string" ? new Date(date) : date;
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "short",
    day: "2-digit",
  }).format(d);
}

export function excerptFromHtml(html: string, n = 160) {
  if (!html) return "";
  const text = html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  return text.length > n ? text.slice(0, n - 1) + "…" : text;
}

export function buildCanonical(pathname: string) {
  return new URL(pathname, BASE_URL).toString();
}
