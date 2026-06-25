import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full bg-[#F1F7FE] overflow-hidden pt-8 pb-16 sm:pb-20">
      {/* Wave Decorative Background elements */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        {/* Subtle grid pattern or shapes if needed */}
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
        {/* Music Wave Graphic */}
        <div className="mb-6 origin-center inline-block animate-music-wave">
          <Image
            src="/images/music wave.png"
            alt="Audio Waves decoration"
            width={180}
            height={36}
            className="object-contain"
            priority
          />
        </div>

        {/* Heading Section */}
        <div className="relative max-w-4xl mb-6">
          <h1 className="font-bricolage text-4xl sm:text-6xl lg:text-[64px] font-extrabold text-[#060606] leading-[1.15] tracking-tight">
            <span className="relative inline-block">
              <div className="absolute -top-3 -left-6 w-14 h-14 sm:w-20 sm:h-20 lg:w-24 lg:h-24 -z-10">
                <Image
                  src="/images/Ellipse 1.png"
                  alt=""
                  fill
                  sizes="(max-width: 640px) 56px, (max-width: 1024px) 80px, 96px"
                  className="object-contain"
                />
              </div>
              Po
            </span>dcast Editing Services
          </h1>
        </div>

        {/* Subtitle */}
        <p className="max-w-2xl font-poppins text-base sm:text-lg text-[#363636] leading-relaxed mb-8 sm:mb-10 px-2">
          Just do the talking, and we&apos;ll handle the rest! We handle podcast launch, editing, distribution, and audiograms.
        </p>

        {/* CTA Button */}
        <div className="mb-0">
          <a
            href="https://calendly.com/emmanuelokonkojr/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#D2E6FF] hover:bg-[#c2ddff] text-brand-black-dark font-jetbrains text-sm font-bold px-8 py-3.5 rounded-lg border-2 border-brand-black-dark shadow-[3px_3px_0px_0px_#060606] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_#060606] active:translate-x-[3px] active:translate-y-[3px] active:shadow-[0px_0px_0px_0px_#060606] transition-all duration-150 inline-block"
          >
            Book a Free Consultation
          </a>
        </div>

      </div>
    </section>
  );
}
