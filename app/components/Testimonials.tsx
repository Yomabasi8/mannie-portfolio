import React from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Ejiro Isoken",
    location: "Canada",
    quote:
      "Emmanuel was super amazing; he listened to what I wanted, offered quick solutions, and delivered the podcast within 48 hours.",
    avatar: "/images/woman.png",
  },
  {
    name: "Raman R.",
    location: "United States",
    quote:
      "Working with Emmanuel on my podcast production was an exceptional experience! His sound quality and professionalism exceeded my expectations.",
    avatar: "/images/man.png",
  },
  {
    name: "Kevin Thompson",
    location: "United States",
    quote:
      "What I appreciate most about working with Emmanuel is that he takes care of all the technical stuff so I can focus on what I love most, which is interviewing my guests.",
    avatar: "/images/man.png",
  },
  {
    name: "Oyun Orka",
    location: "United States",
    quote:
      "Amazing as always! Emmanuel is the GOAT. Always super responsive, great turnaround time, delivers above and beyond work.",
    avatar: "/images/girl (1).png",
  },
  {
    name: "Dr. Amelia Cole",
    location: "United States",
    quote:
      "We always enjoy working with Emmanuel! His work is exceptional and he communicates well. He has been a consistent partner for our podcast.",
    avatar: "/images/man.png",
  },
  {
    name: "Linh Lee",
    location: "Australia",
    quote:
      "He's incredibly professional, hardworking, and such a kind person to work with. Communication was easy and stress-free.",
    avatar: "/images/girl (1).png",
  },
  {
    name: "Dark Academi",
    location: "United States",
    quote:
      "The sound quality and exceptional editing propel him above and beyond; we couldn't commend him enough for his hard work!",
    avatar: "/images/man.png",
  },
];

function StarIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="#F4C430" className="w-4 h-4">
      <path d="M10 1.5l2.59 5.25 5.8.84-4.2 4.09.99 5.77L10 14.77l-5.18 2.68.99-5.77-4.2-4.09 5.8-.84z" />
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-brand-bg py-20 sm:py-28">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 sm:mb-16">
          <p className="font-jetbrains text-sm tracking-widest text-brand-black-light/70 uppercase mb-3">
            Testimonials
          </p>
          <div className="relative inline-block">
            <div className="absolute -top-3 -right-6 sm:-right-8 w-16 h-16 sm:w-20 sm:h-20 -z-10">
              <Image src="/images/Ellipse 1.png" alt="" fill sizes="80px" className="object-contain" />
            </div>
            <h2 className="font-bricolage text-3xl sm:text-4xl font-extrabold text-brand-black-dark tracking-tight">
              What Our Clients are Saying
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="group relative overflow-hidden rounded-2xl bg-white p-4 sm:p-6 max-w-[260px] mx-auto sm:max-w-none sm:mx-0"
            >
              <span className="absolute left-0 top-4 bottom-4 sm:top-6 sm:bottom-6 w-1 rounded-full bg-brand-button origin-center scale-y-100 sm:scale-y-0 transition-transform duration-300 ease-out sm:group-hover:scale-y-100" />

              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden shrink-0">
                  <Image src={testimonial.avatar} alt={testimonial.name} fill sizes="56px" className="object-cover" />
                </div>
                <div>
                  <p className="font-bricolage font-bold text-sm sm:text-base text-brand-black-dark">{testimonial.name}</p>
                  <p className="font-poppins text-xs sm:text-sm text-brand-black-light/70">{testimonial.location}</p>
                </div>
              </div>

              <p className="font-poppins text-xs sm:text-sm text-brand-black-light leading-relaxed mb-3 sm:mb-4">
                {testimonial.quote}
              </p>

              <div className="flex justify-end gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
