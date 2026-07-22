import React from 'react';

const Header = () => {
  return (
    <header className="bg-accent text-primary w-full py-4 px-8 fixed top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-primary">Portfólio</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#about" className="text-secondary hover:text-primary">Sobre</a></li>
            <li><a href="#technologies" className="text-secondary hover:text-primary">Tecnologias</a></li>
            <li><a href="#projects" className="text-secondary hover:text-primary">Projetos</a></li>
            <li><a href="#contact" className="text-secondary hover:text-primary">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
