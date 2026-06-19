import Image from "next/image";
import StickerField from "./StickerField";
import SlideUp from "./SlideUp";

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
      <div className="relative w-full bg-brand-button overflow-hidden min-h-[520px] sm:min-h-[620px] lg:min-h-[700px] flex items-center">
        <WobblyBorder />

        <StickerField />

        {/* Text column */}
        <div className="relative z-10 pl-10 sm:pl-16 lg:pl-24 pr-6 sm:pr-10 lg:pr-14 lg:max-w-[64%]">
          <h1 className="relative font-bricolage text-[clamp(2.5rem,4.6vw,4.75rem)] font-extrabold text-white leading-[1.2] whitespace-normal sm:whitespace-nowrap">
            The Podcaster{" "}
            <span className="font-playball text-[clamp(3rem,5.8vw,6rem)] leading-none align-middle">
              behind
            </span>
            <br />
            Wave{" "}
            <span className="relative inline-block">
              <Image
                src="/images/black circle.png"
                alt=""
                width={224}
                height={224}
                className="absolute -z-10 w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 -right-2.5 sm:-right-3 lg:-right-4 top-1/2 -translate-y-1/2 pointer-events-none"
              />
              Productions
            </span>
          </h1>
        </div>

        {/* Portrait */}
        <div className="absolute z-0 right-0 sm:right-6 lg:right-10 bottom-0 w-[62%] sm:w-[48%] lg:w-[42%] max-w-[560px] aspect-[1842/2100]">
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
