import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="container mx-auto my-12 p-8 border-2 border-accent rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-8 text-primary">Contato</h2>
      <div className="max-w-lg mx-auto text-center">
        <p className="text-secondary mb-4">
          Estou aberto a novas oportunidades e colaborações. Sinta-se à vontade para entrar em contato.
        </p>
        <a href="mailto:seu-email@example.com" className="text-xl text-primary hover:text-secondary">
          seu-email@example.com
        </a>
        <div className="flex justify-center space-x-6 mt-6">
          <a href="https://github.com/Gileno29" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/gileno-cordeiro-duarte-75913a164/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
