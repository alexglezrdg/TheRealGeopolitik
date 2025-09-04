"use client";
import { useState } from "react";
import Image from "next/image";
import { getYouTubeId, thumbFromId } from "@/lib/yt";
import { BLUR_DATA_URL } from "@/lib/utils";

export function YouTubeLite({ url, title }: { url?: string; title?: string }) {
  const [play, setPlay] = useState(false);
  const id = getYouTubeId(url || "");
  if (!id) return null;
  const thumb = thumbFromId(id, "hq");
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-lg border bg-black">
      {play ? (
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${id}?autoplay=1`}
          title={title || "YouTube video"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button
          onClick={() => setPlay(true)}
          className="absolute inset-0 group"
        >
          <Image
            src={thumb}
            alt={title || "YouTube thumbnail"}
            fill
            className="object-cover"
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL}
          />
          <span className="absolute inset-0 grid place-items-center">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-white/90 group-hover:bg-white text-black shadow">
              ▶
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
