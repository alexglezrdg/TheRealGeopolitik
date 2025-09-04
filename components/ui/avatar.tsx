import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Avatar({
  src,
  alt,
  className,
}: {
  src?: string;
  alt?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "inline-flex h-9 w-9 overflow-hidden rounded-full border bg-muted",
        className
      )}
    >
      {src ? <Image src={src} alt={alt || ""} width={36} height={36} /> : null}
    </div>
  );
}
