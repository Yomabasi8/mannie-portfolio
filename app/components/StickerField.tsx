"use client";

import { useEffect, useState } from "react";

const stickers: { text: string; bg: string; variants: string[] }[] = [
  {
    text: "Podcasts",
    bg: "bg-[#FBD7CF]",
    variants: ["left-[10%] top-[18%] -rotate-9", "left-[7%] top-[14%] rotate-6", "left-[13%] top-[22%] rotate-2"],
  },
  {
    text: "Sound Engineer",
    bg: "bg-[#CFEEE0]",
    variants: ["left-[30%] top-[14%] rotate-4", "left-[33%] top-[19%] -rotate-5", "left-[27%] top-[10%] rotate-8"],
  },
  {
    text: "Manager",
    bg: "bg-[#CFEEE0]",
    variants: ["left-[6%] top-[70%] -rotate-6", "left-[9%] top-[75%] rotate-5", "left-[4%] top-[65%] -rotate-2"],
  },
  {
    text: "Audiograms",
    bg: "bg-[#FBF6E9]",
    variants: ["left-[34%] top-[74%] rotate-5", "left-[31%] top-[80%] -rotate-4", "left-[37%] top-[69%] rotate-9"],
  },
  {
    text: "Audio Editor",
    bg: "bg-[#FBF6E9]",
    variants: ["left-[18%] top-[86%] -rotate-4", "left-[15%] top-[90%] rotate-6", "left-[21%] top-[82%] -rotate-8"],
  },
];

export default function StickerField() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {stickers.map((sticker, i) => {
        const variant = sticker.variants[(tick + i) % sticker.variants.length];
        return (
          <span
            key={sticker.text}
            className={`absolute font-jetbrains text-xs sm:text-sm font-bold text-brand-black-dark px-4 py-2 rounded-full shadow-[2px_2px_0px_0px_#060606] whitespace-nowrap transition-all duration-1000 ease-in-out ${sticker.bg} ${variant}`}
          >
            {sticker.text}
          </span>
        );
      })}
    </>
  );
}
