import Image from "next/image";
import StickerField, { type Sticker } from "./StickerField";

const stickers: Sticker[] = [
  {
    text: "Happy Clients",
    bg: "bg-[#FBD7CF]",
    variants: [
      "left-[4%] top-[7%] -rotate-6",
      "left-[5%] top-[8%] -rotate-4",
      "left-[4%] top-[6%] -rotate-8",
    ],
  },
  {
    text: "Podcasters",
    bg: "bg-[#CFEEE0]",
    variants: [
      "left-[57%] top-[7%] rotate-5",
      "left-[56%] top-[8%] rotate-3",
      "left-[57%] top-[6%] rotate-7",
    ],
  },
  {
    text: "5-Star Reviews",
    bg: "bg-[#FBF6E9]",
    variants: [
      "left-[4%] top-[85%] -rotate-3",
      "left-[5%] top-[86%] -rotate-5",
      "left-[4%] top-[84%] -rotate-2",
    ],
  },
  {
    text: "Global Reach",
    bg: "bg-[#CFEEE0]",
    variants: [
      "left-[62%] top-[85%] rotate-4",
      "left-[63%] top-[86%] rotate-2",
      "left-[62%] top-[84%] rotate-6",
    ],
  },
];

export default function ClientsHero() {
  return (
    <section className="relative bg-brand-button overflow-hidden py-20 sm:py-28 min-h-[380px] sm:min-h-[440px] flex items-center">
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
            <div className="absolute -z-10 top-1/2 -translate-y-1/2 -left-2 w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 pointer-events-none">
              <Image src="/images/black circle.png" alt="" fill className="object-contain" />
            </div>
            O
          </span>
          ur Clients
        </h1>

        <p className="font-poppins text-base sm:text-lg text-white/90 max-w-xl mx-auto mt-6 leading-relaxed">
          We&apos;re grateful to have worked with amazing clients who trust us to bring their stories to life through engaging podcast experiences
        </p>
      </div>
    </section>
  );
}
