'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';

interface VideoPlayerProps {
  videoSrc: string;
  posterSrc?: string;
  playLabel: string;
}

export default function VideoPlayer({ videoSrc, posterSrc, playLabel }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setIsPlaying(true);
    requestAnimationFrame(() => {
      videoRef.current?.play();
    });
  };

  if (!isPlaying) {
    return (
      <button
        type="button"
        onClick={handlePlay}
        className="absolute inset-0 w-full h-full group cursor-pointer"
        aria-label={playLabel}
      >
        {posterSrc ? (
          <Image
            src={posterSrc}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
        ) : (
          <div className="absolute inset-0 bg-neutral-dark" />
        )}
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full bg-white/95 text-accent-600 shadow-lg group-hover:scale-105 transition-transform">
            <svg className="h-8 w-8 ml-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </div>
      </button>
    );
  }

  return (
    <video
      ref={videoRef}
      src={videoSrc}
      controls
      className="w-full h-full object-cover"
      playsInline
      preload="metadata"
    />
  );
}
