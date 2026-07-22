import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-accent text-secondary w-full py-4 px-8 mt-12">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Gileno Duarte. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
