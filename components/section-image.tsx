import Image from "next/image";
import { cn } from "@/lib/utils";

interface SectionImageProps {
  src: string;
  alt: string;
  aspect?: "4/3" | "3/4" | "1/1" | "16/10" | "16/9";
  className?: string;
  priority?: boolean;
  duotone?: boolean;
}

const aspectMap: Record<NonNullable<SectionImageProps["aspect"]>, string> = {
  "4/3": "aspect-[4/3]",
  "3/4": "aspect-[3/4]",
  "1/1": "aspect-square",
  "16/10": "aspect-[16/10]",
  "16/9": "aspect-video",
};

export function SectionImage({
  src,
  alt,
  aspect = "4/3",
  className,
  priority,
  duotone,
}: SectionImageProps) {
  return (
    <div
      className={cn(
        "relative image-treatment bg-cloud",
        aspectMap[aspect],
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px"
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        className={cn(
          "object-cover",
          duotone && "duotone-teal"
        )}
      />
      <div
        className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl pointer-events-none"
        aria-hidden
      />
    </div>
  );
}
