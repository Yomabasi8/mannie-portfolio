import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Clients from "./components/Clients";
import Testimonials from "./components/Testimonials";
import Reveal from "./components/Reveal";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Reveal>
        <Stats />
      </Reveal>
      <Reveal>
        <About />
      </Reveal>
      <Reveal>
        <Services />
      </Reveal>
      <Reveal>
        <Work />
      </Reveal>
      <Reveal>
        <Clients />
      </Reveal>
      <Reveal>
        <Testimonials />
      </Reveal>
      <Reveal>
        <CTA />
      </Reveal>
    </>
  );
}
