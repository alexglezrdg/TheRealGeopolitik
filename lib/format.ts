import { BASE_URL } from "./site";

export function formatDate(date: string | Date, locale = "en-US") {
  const d = typeof date === "string" ? new Date(date) : date;
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "short",
    day: "2-digit",
  }).format(d);
}

export function truncate(text: string, len = 140) {
  if (!text) return "";
  return text.length > len ? text.slice(0, len - 1) + "…" : text;
}

export function canonical(pathname: string) {
  return new URL(pathname, BASE_URL).toString();
}
