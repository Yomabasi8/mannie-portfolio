import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full bg-[#F1F7FE] overflow-hidden pt-8 pb-16 sm:pb-24">
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

        {/* Heading Section with offset background ellipse */}
        <div className="relative max-w-4xl mb-6">
          <div className="absolute -top-4 left-0 sm:-top-4 sm:left-3 w-14 h-14 sm:w-24 sm:h-24 -z-10">
            <Image
              src="/images/Ellipse 1.png"
              alt=""
              fill
              sizes="(max-width: 640px) 56px, 96px"
              className="object-contain"
            />
          </div>

          <h1 className="font-bricolage text-4xl sm:text-6xl lg:text-[64px] font-extrabold text-[#060606] leading-[1.15] tracking-tight">
            Giving You the <span className="text-[#004AAD] relative inline-block">Push</span> to Make <span className="text-[#004AAD] relative inline-block">Waves</span> with Your Voice
          </h1>
        </div>

        {/* Subtitle */}
        <p className="max-w-2xl font-poppins text-base sm:text-lg text-[#363636] leading-relaxed mb-8 sm:mb-10 px-2">
          Welcome to Wave Productions, where we take your raw audio files (WAV, MP3 & M4A) and shape them into smooth, powerful episodes.
        </p>

        {/* CTA Button */}
        <div className="mb-16 sm:mb-20">
          <a
            href="#consultation"
            className="bg-[#D2E6FF] hover:bg-[#c2ddff] text-brand-black-dark font-jetbrains text-sm font-bold px-8 py-3.5 rounded-lg border-2 border-brand-black-dark shadow-[3px_3px_0px_0px_#060606] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_#060606] active:translate-x-[3px] active:translate-y-[3px] active:shadow-[0px_0px_0px_0px_#060606] transition-all duration-150 inline-block"
          >
            Book a Consultation
          </a>
        </div>

        {/* Staggered 5-Column Image Grid */}
        <div className="w-screen overflow-hidden -mx-4 sm:-mx-6 lg:-mx-8">
          <div className="flex justify-center gap-2 sm:gap-4 md:gap-5 pt-3" style={{ flexWrap: 'nowrap' }}>
            <div className="w-[22vw] max-w-[200px] self-center">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden animate-image-float" style={{ animationDelay: '0s' }}>
                <Image src="/images/hero image.png" alt="Listener enjoying podcast" fill sizes="22vw" className="object-cover" />
              </div>
            </div>
            <div className="w-[22vw] max-w-[200px] flex flex-col gap-2 sm:gap-4 md:gap-5 justify-end self-end">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shrink-0 animate-image-float" style={{ animationDelay: '0.15s' }}>
                <Image src="/images/Frame 17.png" alt="Microphone setup" fill sizes="22vw" className="object-cover" />
              </div>
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shrink-0 animate-image-float" style={{ animationDelay: '0.15s' }}>
                <Image src="/images/talking.png" alt="Recording an interview" fill sizes="22vw" className="object-cover" />
              </div>
            </div>
            <div className="w-[24vw] max-w-[220px] self-end">
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden animate-image-float" style={{ animationDelay: '0.3s' }}>
                <Image src="/images/Center image (1).png" alt="Creative portrait" fill sizes="24vw" className="object-cover" priority />
              </div>
            </div>
            <div className="w-[22vw] max-w-[200px] flex flex-col gap-2 sm:gap-4 md:gap-5 justify-end self-end">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shrink-0 animate-image-float" style={{ animationDelay: '0.45s' }}>
                <Image src="/images/hero image (2).png" alt="Two people podcasting" fill sizes="22vw" className="object-cover" />
              </div>
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shrink-0 animate-image-float" style={{ animationDelay: '0.45s' }}>
                <Image src="/images/heroo.png" alt="Studio headphones" fill sizes="22vw" className="object-cover" />
              </div>
            </div>
            <div className="w-[22vw] max-w-[200px] self-center">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden animate-image-float" style={{ animationDelay: '0.6s' }}>
                <Image src="/images/hero image (3).png" alt="Woman smiling with headphones" fill sizes="22vw" className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
