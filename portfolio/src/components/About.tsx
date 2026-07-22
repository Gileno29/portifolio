import React from 'react';

const About = () => {
  return (
    <section id="about" className="container mx-auto my-12 p-8 border-2 border-accent rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-8 text-primary">Sobre Mim</h2>
      <div className="max-w-3xl mx-auto text-center text-secondary">
        <p>
          Atualmente trabalho como software Enginner e desenvolvo automações e soluções para entrega de dados, utilizando como principal stack
          python e golang além de outras ferramentas como Databricks e Bogquery, possuo experiência em desenvolvimento de ETLs, melhora de performace de querys e
          em gerenciamento de serviçoes em ambientes Linux com servidores Ubuntu e Debian.
        </p>
      </div>
    </section>
  );
};

export default About;
