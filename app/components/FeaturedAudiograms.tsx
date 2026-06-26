"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const phoneOffsets = ["sm:mt-0", "sm:mt-14", "sm:mt-28", "sm:mt-44"];

const videos = [
  { src: "/videos/Instagram Wave Productions Teaser.mp4", objectFit: "cover", objectPosition: "center" },
  { src: "/videos/IITY Podcast Audiogram Introduction.mp4", objectFit: "contain", objectPosition: "center" },
  { src: "/videos/MDR 391 - Jamie Dykstra Audiogram.mp4", objectFit: "cover", objectPosition: "center" },
  { src: "/videos/S2 E6 Snippet.mp4", objectFit: "cover", objectPosition: "center" },
];

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5 ml-0.5">
      <polygon points="6,4 20,12 6,20" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
      <rect x="6" y="4" width="4" height="16" rx="1" />
      <rect x="14" y="4" width="4" height="16" rx="1" />
    </svg>
  );
}

function PhoneFrame({
  videoSrc,
  objectFit = "cover",
  objectPosition = "center",
  isPlaying,
  onToggle,
  videoRef,
}: {
  videoSrc: string;
  objectFit?: string;
  objectPosition?: string;
  isPlaying: boolean;
  onToggle: () => void;
  videoRef: (el: HTMLVideoElement | null) => void;
}) {
  const bgVideoRef = useRef<HTMLVideoElement | null>(null);
  const showBlurBg = objectFit === "contain";

  useEffect(() => {
    const bg = bgVideoRef.current;
    if (!bg) return;
    if (isPlaying) bg.play().catch(() => {});
    else bg.pause();
  }, [isPlaying]);

  return (
    <div className="relative w-full aspect-[693/1337]">
      <Image
        src="/images/Audiograms.png"
        alt="Phone mockup displaying an audiogram video"
        fill
        sizes="(max-width: 768px) 22vw, 220px"
        className="object-contain pointer-events-none select-none"
      />

      <div
        className="absolute left-[8.3%] right-[8.5%] top-[3.2%] bottom-[3.3%] overflow-hidden"
        style={{ borderRadius: "10%" }}
      >
        {showBlurBg && (
          <video
            ref={bgVideoRef}
            src={videoSrc}
            loop
            playsInline
            muted
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover scale-110 blur-lg"
          />
        )}
        <video
          ref={videoRef}
          src={videoSrc}
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full"
          style={{ objectFit: objectFit as "cover" | "contain", objectPosition }}
        />
        <button
          type="button"
          onClick={onToggle}
          aria-label={isPlaying ? "Pause video" : "Play video"}
          className="absolute inset-0 flex items-center justify-center bg-black/10 hover:bg-black/20 transition-colors cursor-pointer"
        >
          <span className="w-10 h-10 rounded-full bg-black/60 flex items-center justify-center">
            {isPlaying ? <PauseIcon /> : <PlayIcon />}
          </span>
        </button>
      </div>
    </div>
  );
}

export default function FeaturedAudiograms() {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const rowRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const togglePlay = (index: number) => {
    const video = videoRefs.current[index];
    if (!video) return;

    if (playingIndex === index) {
      video.pause();
      setPlayingIndex(null);
      return;
    }

    if (playingIndex !== null) {
      videoRefs.current[playingIndex]?.pause();
    }
    video.play();
    setPlayingIndex(index);
  };

  return (
    <section className="bg-brand-bg pt-20 sm:pt-28 pb-12 sm:pb-16">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative inline-flex items-center">
          <h2 className="font-bricolage text-3xl sm:text-4xl font-extrabold text-brand-black-dark tracking-tight">
            Featured Audiograms
          </h2>
          <span className="absolute -right-8 sm:-right-9 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-brand-button/20 -z-10" />
        </div>

        <p className="font-poppins text-base sm:text-lg text-brand-black-light max-w-xl mt-4 leading-relaxed">
          Explore how we bring diverse audio identities to life through{" "}
          <span className="text-brand-button">high-impact</span> visual storytelling.
        </p>

        <div ref={rowRef} className="flex flex-col items-center sm:flex-row sm:items-start gap-10 sm:gap-8 mt-16 sm:mt-20">
          {phoneOffsets.map((offset, i) => (
            <div
              key={i}
              className={`w-[65vw] max-w-[300px] sm:w-[19vw] sm:max-w-[220px] ${offset} transition-[opacity,transform] duration-1100 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
              }`}
              style={{ transitionDelay: revealed ? `${i * 220}ms` : "0ms" }}
            >
              <PhoneFrame
                videoSrc={videos[i].src}
                objectFit={videos[i].objectFit}
                objectPosition={videos[i].objectPosition}
                isPlaying={playingIndex === i}
                onToggle={() => togglePlay(i)}
                videoRef={(el) => {
                  videoRefs.current[i] = el;
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
