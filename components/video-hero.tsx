"use client";

import * as React from "react";
import Image from "next/image";

interface VideoHeroProps {
  videoSrc: string;
  posterSrc: string;
  posterAlt: string;
  children: React.ReactNode;
}

export function VideoHero({
  videoSrc,
  posterSrc,
  posterAlt,
  children,
}: VideoHeroProps) {
  const [showVideo, setShowVideo] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const small = window.innerWidth < 768;
    setShowVideo(!reduce && !small);
  }, []);

  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-20" aria-hidden>
        <Image
          src={posterSrc}
          alt={posterAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      {showVideo && (
        <video
          data-hero
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster={posterSrc}
          className="absolute inset-0 -z-10 w-full h-full object-cover"
          aria-hidden
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}
      <div
        className="absolute inset-0 -z-10 gradient-hero-overlay"
        aria-hidden
      />
      <div className="container relative min-h-[88vh] md:min-h-[92vh] flex items-center pt-28 pb-20">
        <div className="max-w-3xl text-white">{children}</div>
      </div>
    </section>
  );
}
