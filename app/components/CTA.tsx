import Image from "next/image";

export default function CTA() {
  return (
    <section id="contact" className="bg-brand-bg py-16 sm:py-24">
      <div className="max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-brand-button rounded-none overflow-hidden transform-gpu px-6 sm:px-10 py-10 sm:py-14 text-center">
          <div className="absolute top-0 left-0 w-28 sm:w-36 pointer-events-none">
            <Image src="/images/micc2.png" alt="" width={232} height={232} className="w-full h-auto" />
          </div>
          <div className="absolute bottom-0 right-0 w-24 sm:w-60 pointer-events-none">
            <Image src="/images/miccc 1.png" alt="" width={670} height={670} className="w-full h-auto" />
          </div>

          <p className="font-jetbrains text-xs sm:text-sm tracking-widest text-white/80 uppercase mb-4">
            Ready to Launch?
          </p>

          <div className="relative inline-block">
            <div className="absolute left-[29px] -top-[6px] w-12 h-12 sm:-left-7 sm:-top-3 sm:w-20 sm:h-20 -z-10">
              <Image src="/images/Ellipse1 1.png" alt="" fill sizes="80px" className="object-contain" />
            </div>
            <h2 className="font-bricolage text-3xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight">
              <span className="text-brand-black-dark">Le</span>t&apos;s Make your Podcast
              <br />
              Unforgettable
            </h2>
          </div>

          <p className="font-poppins text-white/90 max-w-2xl mx-auto mt-6 mb-8 leading-relaxed">
            Join the hundreds of podcasters amplifying their voices with Wave Productions. If you&apos;re ready for a producer who treats your show like it matters, let&apos;s work together
          </p>

          <a
            href="mailto:waveproductions.net@gmail.com"
            className="bg-white text-brand-black-dark font-jetbrains text-sm font-bold px-8 py-3.5 rounded-lg border-2 border-brand-black-dark shadow-[3px_3px_0px_0px_#060606] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_#060606] active:translate-x-[3px] active:translate-y-[3px] active:shadow-[0px_0px_0px_0px_#060606] transition-all duration-150 inline-block"
          >
            Let&apos;s talk
          </a>
        </div>
      </div>
    </section>
  );
}
