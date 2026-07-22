import React from 'react';
import Image from 'next/image';
import avatar from '../../public/1771500613682.jpeg';

const Hero = () => {
  return (
    <section id="hero" className="flex flex-col items-center justify-center h-screen text-center">
     <div  className='avatar mb-4'> <Image src={avatar} alt='avatar' width={200} height={200} priority className="rounded-full object-cover border-4 border-primary"/></div>
      <h1 className="text-5xl font-bold text-primary">Gileno C. Duarte<span className="blinking-cursor">_</span></h1>
      <p className="mt-4 text-xl text-secondary">Software Engineer</p>
      <a href="#projects" className="mt-8 px-6 py-3 border-2 border-primary text-primary rounded-md hover:bg-primary hover:text-background transition-colors duration-300">
        Veja meus projetos
      </a>
    </section>
  );
};

export default Hero;
