import React from 'react';

const ProjectCard = ({ title, description, tech, link }: { title: string, description: string, tech: string[], link:string }) => (
  <div className="bg-accent rounded-lg shadow-lg p-6">
    <h3 className="text-2xl font-bold mb-2 text-primary">{title}</h3>
    <p className="text-secondary mb-4">{description}</p>
    <div className="mb-4">
      {tech.map(t => (
        <span key={t} className="inline-block bg-background rounded-full px-3 py-1 text-sm font-semibold text-primary mr-2 mb-2 border border-primary">
          {t}
        </span>
      ))}
    </div>
    <a href={link} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary">
      Ver no GitHub
    </a>
  </div>
);

const Projects = () => {
  const projectData = [
    {
      title: 'Agenda',
      description: 'Este é um projeto full-stack que combina Django para o back-end e um front end simples. A aplicação visa fornecer uma plataforma para novos projetos.',
      tech: ['Django', 'Docker', 'SQLitle', 'NGIX'],
      link: 'https://github.com/Gileno29/agenda'
    },
    {
      title: 'AI Document Q&A API',
      description: 'A production-ready REST API that lets you upload documents and ask questions about them in natural language. Built with Go (API gateway) and Python (embedding + retrieval), using a full RAG pipeline under the hood.',
      tech: ['Python', 'Golang', 'Docker', 'Ollama'],
      link: 'https://github.com/Gileno29/AI-document'
    },
    {
      title: 'Order Manager',
      description: 'Esse projeto tem como objetivo desenvolver um sistema simples que permite gerenciar pedidos de forma genérica, além de disponibilizar uma API para identificar a vogal em uma string seguindo parâmetros específicos.',
      tech: ['python', 'Django', 'Github Actions', 'PostgreSQL','Javascript','Bootstrap'],
      link: 'https://github.com/Gileno29/orderManager'
    },

    {
      title: 'File Loader',
      description: 'Projeto Desenvolvido para carrgamento de uma base de dados em um banco Relacional através de um Endpoint',
      tech: ['Go', 'PostgreSQL', 'Docker'],
      link: 'https://github.com/Gileno29/file_loader_golang'
    },
    {
      title: 'API Registro de Clientes',
      description: 'API para cadastro de dados de clintes que inclui validação de autenticidade de CPFs/CNPJs',
      tech: ['Go', 'Docker', 'Open API', 'Postgres', 'GIN Flamework'],
      link: 'https://github.com/Gileno29/clientes-API'
    },
    {
      title: 'Microsserviço de Autenticação',
      description: 'Serviço de autenticação e autorização centralizado para um ecossistema de microsserviços.',
      tech: ['Go', 'gRPC', 'OAuth 2.0', 'Kubernetes'],
      link: 'https://github.com/seu-usuario/projeto-3'
    }

  ];

  return (
    <section id="projects" className="container mx-auto my-12 p-8 border-2 border-accent rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-8 text-primary">Alguns Projetos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map(p => <ProjectCard key={p.title} {...p} />)}
      </div>
    </section>
  );
};

export default Projects;
