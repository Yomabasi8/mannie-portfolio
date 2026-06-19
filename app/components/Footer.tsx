import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work Samples", href: "#work" },
  { label: "Contact", href: "#contact" },
];

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <span className="font-bricolage text-lg font-extrabold leading-none">G</span>
  );
}

const WAVE_PERIOD = 320;
const WAVE_PERIODS = 5;
const WAVE_AMPLITUDE = 50;
const WAVE_BASELINE = 120;
const WAVE_WIDTH = WAVE_PERIOD * WAVE_PERIODS;
const WAVE_HEIGHT = WAVE_BASELINE * 2;

function buildSineWavePath() {
  let d = `M0,${WAVE_BASELINE}`;
  for (let k = 0; k < WAVE_PERIODS; k++) {
    const x0 = k * WAVE_PERIOD;
    const q = WAVE_PERIOD / 4;
    d += ` Q${x0 + q},${WAVE_BASELINE - WAVE_AMPLITUDE} ${x0 + 2 * q},${WAVE_BASELINE}`;
    d += ` Q${x0 + 3 * q},${WAVE_BASELINE + WAVE_AMPLITUDE} ${x0 + 4 * q},${WAVE_BASELINE}`;
  }
  return d;
}

const WAVE_PATH = buildSineWavePath();

function WaveBand({ slow }: { slow?: boolean }) {
  return (
    <div className={`flex w-[200%] pointer-events-none ${slow ? "animate-wave-scroll-slow" : "animate-wave-scroll"}`}>
      {[0, 1].map((i) => (
        <svg
          key={i}
          viewBox={`0 0 ${WAVE_WIDTH} ${WAVE_HEIGHT}`}
          preserveAspectRatio="none"
          className="w-1/2 h-auto shrink-0 text-brand-button"
        >
          <path
            d={WAVE_PATH}
            fill="none"
            stroke="currentColor"
            strokeWidth={WAVE_AMPLITUDE * 1.9}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ))}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative bg-brand-navy overflow-hidden pt-16 sm:pt-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-8">
        {/* Brand */}
        <div>
          <Image
            src="/images/logo 2 (1).png"
            alt="Wave Productions"
            width={249}
            height={185}
            className="w-28 h-auto"
          />

          <p className="font-poppins text-sm text-white/80 leading-relaxed mt-6 max-w-[220px]">
            Giving you the push to make waves for yourself
          </p>

          <div className="flex items-center gap-5 mt-6 text-white">
            <a href="#" aria-label="X" className="hover:text-white/70 transition-colors">
              <XIcon />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-white/70 transition-colors">
              <InstagramIcon />
            </a>
            <a href="#" aria-label="Google" className="hover:text-white/70 transition-colors">
              <GoogleIcon />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-bricolage text-lg font-bold text-white mb-4">Navigation</h3>
          <ul className="space-y-3 font-poppins text-sm text-white/80">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="hover:text-white transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bricolage text-lg font-bold text-white mb-4">Contact Us</h3>
          <p className="font-poppins text-sm text-white/80 leading-relaxed">
            Phone: +234 813 451 7303
            <br />
            Email:{" "}
            <a
              href="mailto:waveproductions.net@gmail.com"
              className="underline underline-offset-2 hover:text-white transition-colors"
            >
              waveproductions.net@gmail.com
            </a>
          </p>

          <p className="font-poppins text-xs text-white/60 mt-6">
            © {new Date().getFullYear()} Wave Productions. All rights reserved.
          </p>
        </div>
      </div>

      {/* Decorative microphone + waves */}
      <div className="relative mt-12 sm:mt-16 h-[52vw] min-h-[480px] max-h-[860px]">
        <div className="absolute left-1/2 -translate-x-1/2 top-[10vw] z-0 w-screen overflow-hidden pointer-events-none">
          <WaveBand />
        </div>

        <div className="absolute inset-x-0 bottom-0 z-10 flex justify-center">
          <div className="relative w-[26vw] min-w-[240px] max-w-[480px] aspect-[1089/1932] origin-bottom hover:animate-tilt-swing">
            <Image
              src="/images/big mic.png"
              alt="Vintage microphone"
              fill
              sizes="480px"
              className="object-contain object-bottom"
            />
          </div>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 top-[30vw] z-20 w-screen overflow-hidden pointer-events-none">
          <WaveBand slow />
        </div>
      </div>
    </footer>
  );
}
