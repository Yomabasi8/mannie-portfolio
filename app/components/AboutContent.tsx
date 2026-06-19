import Image from "next/image";

function Highlight({ children }: { children: React.ReactNode }) {
  return <span className="text-brand-button">{children}</span>;
}

function PhotoCard({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`relative w-full max-w-[440px] aspect-[4/5] ${className}`}>
      <div className="absolute -top-6 -left-6 w-[92%] h-[92%] -rotate-3">
        <Image src="/images/blueeeeee.png" alt="" fill className="object-cover" />
      </div>
      <div className="absolute bottom-0 right-0 w-[84%] h-[90%] rotate-2 rounded-lg overflow-hidden shadow-xl">
        <Image src={src} alt={alt} fill sizes="440px" className="object-cover" />
      </div>
    </div>
  );
}

export default function AboutContent() {
  return (
    <section className="bg-brand-bg px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="font-bricolage text-[clamp(2.5rem,6vw,4.75rem)] font-extrabold text-brand-black-dark text-center leading-tight">
          Meet Emmanuel Okonko
        </h2>
        <p className="font-poppins text-base sm:text-lg text-brand-black-dark text-center max-w-2xl mx-auto mt-4 leading-relaxed">
          <span className="font-bold uppercase">Producer | Audio Editor | Manager | Podcaster</span> AND and the
          person who is gonna make your podcast sound like it belongs at the top of the charts.
        </p>

        <Image
          src="/images/arrow (1).png"
          alt=""
          width={294}
          height={266}
          className="w-16 sm:w-20 h-auto mx-auto mt-6 -ml-8 sm:-ml-12"
        />

        {/* Row 1: photo left, text right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-8 sm:mt-12">
          <PhotoCard src="/images/mannieeeeee (1).png" alt="Emmanuel wearing headphones" className="mx-auto lg:mx-0" />

          <div>
            <div className="relative inline-flex items-center">
              <h3 className="font-bricolage text-3xl sm:text-4xl font-extrabold text-brand-black-dark">
                Your Expert Producer
              </h3>
              <span className="absolute -right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-brand-button/20 -z-10" />
            </div>
            <p className="font-poppins text-base text-brand-black-light leading-relaxed mt-5">
              I didn&apos;t start as a podcast producer. I started as a podcaster recording episodes on my phone,
              chasing the thrill of telling <Highlight>stories</Highlight> and having real conversations without ever
              showing my face.
            </p>
            <p className="font-poppins text-base text-brand-black-light leading-relaxed mt-5">
              That <Highlight>passion</Highlight> for audio storytelling is what eventually pulled me into the craft
              of production and never let go.
            </p>
          </div>
        </div>

        {/* Row 2: text left, photo right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-16 sm:mt-20">
          <div className="lg:order-1">
            <div className="relative inline-block">
              <span className="absolute -left-4 -top-4 w-9 h-9 rounded-full bg-brand-button/20 -z-10" />
              <h3 className="font-bricolage text-3xl sm:text-4xl font-extrabold text-brand-black-dark">
                Your Badass Producer
              </h3>
            </div>
            <p className="font-poppins text-base text-brand-black-light leading-relaxed mt-5">
              Today, I&apos;m Emmanuel Okonko, a freelance podcast <Highlight>producer</Highlight> and manager with
              5+ years of experience, 50+ unique clients, and 400+ episodes under my belt.
            </p>
            <p className="font-poppins text-base text-brand-black-light leading-relaxed mt-5">
              My background as a podcaster first gives me a perspective most <Highlight>editors</Highlight> don&apos;t
              have: I understand what it feels like to be on the other side of the mic.
            </p>
            <p className="font-poppins text-base text-brand-black-light leading-relaxed mt-5">
              That shapes everything about how I approach your show. I&apos;m the <Highlight>Host</Highlight> of
              &ldquo;The Unserious Podcast&rdquo; and &ldquo;On Record with Mannie&rdquo;.
            </p>
          </div>

          <PhotoCard
            src="/images/mannnnieee2.png"
            alt="Emmanuel wearing glasses and a white shirt"
            className="mx-auto lg:mx-0 lg:order-2"
          />
        </div>
      </div>
    </section>
  );
}
