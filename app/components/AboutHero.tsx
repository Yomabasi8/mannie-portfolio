import Image from "next/image";
import StickerField, { type Sticker } from "./StickerField";
import SlideUp from "./SlideUp";

const stickers: Sticker[] = [
  {
    text: "Podcaster",
    bg: "bg-[#FBD7CF]",
    variants: [
      "left-[58%] sm:left-[14%] top-[27%] sm:top-[20%] -rotate-3 z-20",
      "left-[58%] sm:left-[15%] top-[27%] sm:top-[23%] -rotate-5 z-20",
      "left-[58%] sm:left-[13%] top-[27%] sm:top-[17%] -rotate-2 z-20",
    ],
  },
  {
    text: "Podcast Assistant",
    bg: "bg-[#FBD7CF]",
    variants: [
      "left-[10%] sm:left-[18%] top-[38%] sm:top-[75%] -rotate-3 z-20",
      "left-[10%] sm:left-[19%] top-[38%] sm:top-[78%] -rotate-5 z-20",
      "left-[10%] sm:left-[17%] top-[38%] sm:top-[72%] -rotate-2 z-20",
    ],
  },
  {
    text: "Audio Editor",
    bg: "bg-[#CFEEE0]",
    variants: [
      "left-[7%] sm:left-[32%] top-[52%] sm:top-[20%] rotate-3 z-20",
      "left-[7%] sm:left-[33%] top-[52%] sm:top-[23%] rotate-5 z-20",
      "left-[7%] sm:left-[31%] top-[52%] sm:top-[17%] rotate-2 z-20",
    ],
  },
  {
    text: "Podcast Producer",
    bg: "bg-[#CFEEE0]",
    variants: [
      "left-[7%] sm:left-[36%] top-[67%] sm:top-[62%] rotate-3 z-20",
      "left-[7%] sm:left-[37%] top-[67%] sm:top-[65%] rotate-5 z-20",
      "left-[7%] sm:left-[35%] top-[67%] sm:top-[59%] rotate-2 z-20",
    ],
  },
  {
    text: "Podcaster Manager",
    bg: "bg-[#FBD7CF]",
    variants: [
      "left-[7%] sm:left-[7%] top-[110%] sm:top-[62%] -rotate-4 z-20",
      "left-[7%] sm:left-[8%] top-[110%] sm:top-[65%] -rotate-6 z-20",
      "left-[7%] sm:left-[6%] top-[110%] sm:top-[59%] -rotate-3 z-20",
    ],
  },
];

function wobblyEdge(x1: number, y1: number, x2: number, y2: number, bumps: number, amp: number) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.sqrt(dx * dx + dy * dy);
  const ux = dx / len;
  const uy = dy / len;
  const nx = -uy;
  const ny = ux;
  const seg = len / bumps;
  let d = "";
  for (let i = 0; i < bumps; i++) {
    const sign = i % 2 === 0 ? 1 : -1;
    const midX = x1 + ux * seg * (i + 0.5) + nx * amp * sign;
    const midY = y1 + uy * seg * (i + 0.5) + ny * amp * sign;
    const endX = x1 + ux * seg * (i + 1);
    const endY = y1 + uy * seg * (i + 1);
    d += ` Q${midX.toFixed(1)},${midY.toFixed(1)} ${endX.toFixed(1)},${endY.toFixed(1)}`;
  }
  return d;
}

function buildWobblyRectPath() {
  const W = 1000;
  const H = 600;
  const m = 16;
  const amp = 7;
  const x1 = m;
  const y1 = m;
  const x2 = W - m;
  const y2 = H - m;
  let d = `M${x1},${y1}`;
  d += wobblyEdge(x1, y1, x2, y1, 11, amp);
  d += wobblyEdge(x2, y1, x2, y2, 7, amp);
  d += wobblyEdge(x2, y2, x1, y2, 11, amp);
  d += wobblyEdge(x1, y2, x1, y1, 7, amp);
  d += " Z";
  return d;
}

const WOBBLY_RECT_PATH = buildWobblyRectPath();

function WobblyBorder() {
  return (
    <svg
      viewBox="0 0 1000 600"
      preserveAspectRatio="none"
      className="absolute inset-0 w-full h-full pointer-events-none"
    >
      <path
        d={WOBBLY_RECT_PATH}
        fill="none"
        stroke="white"
        strokeWidth={5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function AboutHero() {
  return (
    <section className="pt-4 pb-8">
      <div className="relative w-full bg-brand-button overflow-hidden min-h-[500px] sm:min-h-[620px] lg:min-h-[700px] flex items-start sm:items-center">
        <WobblyBorder />

        <StickerField stickers={stickers} />

        {/* Text column */}
        <div className="relative z-10 pt-10 sm:pt-0 pl-6 sm:pl-16 lg:pl-24 pr-6 sm:pr-10 lg:pr-14 lg:max-w-[64%]">
          <h1 className="relative font-bricolage text-[clamp(2rem,4.6vw,4.75rem)] font-extrabold text-white leading-[1.2] whitespace-normal sm:whitespace-nowrap">
            The Podcaster{" "}
            <span className="font-playball text-[clamp(3rem,5.8vw,6rem)] leading-none align-middle">
              behind
            </span>
            <br />
            Wave Productions
          </h1>
        </div>

        {/* Portrait */}
        <div className="absolute z-0 right-0 sm:right-6 lg:right-10 bottom-0 w-[78%] sm:w-[52%] lg:w-[46%] max-w-[560px] aspect-[1842/2100]">
          <SlideUp className="relative w-full h-full">
            <Image
              src="/images/Manny.png"
              alt="Emmanuel, the podcaster behind Wave Productions"
              fill
              sizes="(max-width: 1024px) 62vw, 42vw"
              className="object-contain object-bottom"
              priority
            />
          </SlideUp>
        </div>
      </div>
    </section>
  );
}
