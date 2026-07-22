import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Technologies from '@/components/Technologies';

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Technologies />
      <Projects />
      <Contact />
    </div>
  );
}