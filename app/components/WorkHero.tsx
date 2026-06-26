import Image from "next/image";
import StickerField, { type Sticker } from "./StickerField";

const stickers: Sticker[] = [
  {
    text: "Cover Art Design",
    bg: "bg-[#CFEEE0]",
    variants: [
      "left-[4%] top-[8%] -rotate-6",
      "left-[5%] top-[9%] -rotate-4",
      "left-[4%] top-[7%] -rotate-8",
    ],
  },
  {
    text: "Podcast Producer",
    bg: "bg-[#CFEEE0]",
    variants: [
      "left-[57%] top-[8%] rotate-6",
      "left-[56%] top-[9%] rotate-4",
      "left-[57%] top-[7%] rotate-8",
    ],
  },
  {
    text: "Audiograms",
    bg: "bg-[#FBF6E9]",
    variants: [
      "left-[6%] top-[74%] -rotate-3",
      "left-[7%] top-[73%] -rotate-5",
      "left-[6%] top-[75%] -rotate-2",
    ],
  },
  {
    text: "Podcasts",
    bg: "bg-[#FBD7CF]",
    variants: [
      "left-[62%] top-[74%] rotate-4",
      "left-[63%] top-[73%] rotate-2",
      "left-[62%] top-[75%] rotate-6",
    ],
  },
];

export default function WorkHero() {
  return (
    <section className="relative bg-brand-button overflow-hidden py-20 sm:py-28 min-h-[440px] sm:min-h-[500px] flex items-center">
      <StickerField stickers={stickers} pillClassName="text-xs px-4 py-2" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="origin-center inline-block animate-music-wave">
          <Image
            src="/images/wavvvve (1).png"
            alt="Audio Waves decoration"
            width={526}
            height={124}
            className="w-56 sm:w-64 h-auto object-contain"
            priority
          />
        </div>

        <h1 className="relative mt-6 font-bricolage text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-none">
          <span className="relative inline-block">
            <Image
              src="/images/black circle.png"
              alt=""
              width={224}
              height={224}
              style={{ width: "1.15em", height: "1.15em", left: "-0.4em" }}
              className="absolute -z-10 top-1/2 -translate-y-1/2 pointer-events-none"
            />
            Press
          </span>{" "}
          Play
        </h1>

        <p className="font-poppins text-base sm:text-lg text-white/90 max-w-xl mx-auto mt-6 leading-relaxed">
          Selected podcasts, audiograms, and audio productions crafted to captivate listeners from start to finish.
        </p>
      </div>
    </section>
  );
}
