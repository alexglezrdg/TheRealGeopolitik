"use client";
import Link from "next/link";

export function ShareButtons({ url }: { url: string }) {
  return (
    <div className="flex items-center gap-2 text-sm">
      <Link
        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`}
        className="underline"
      >
        Share X
      </Link>
      <Link
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
        className="underline"
      >
        Facebook
      </Link>
      <button
        onClick={async () => {
          await navigator.clipboard.writeText(url);
          alert("Link copied");
        }}
        className="underline"
        type="button"
      >
        Copy URL
      </button>
    </div>
  );
}
