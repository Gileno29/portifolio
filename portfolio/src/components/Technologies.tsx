import React from 'react';
import Image from 'next/image';

const technologies = [
  { name: 'Python', image: '/python.svg' },
  { name: 'Go', image: '/golang.svg' },
  { name: 'Docker', image: '/docker.svg' },
  { name: 'Kubernetes', image: '/kubernetes.svg' },
  {name: 'DJango', image: '/django.svg'},
  {name: 'Flask', image: '/flask.svg'},
  { name: 'GCP', image: '/gcp.svg' },
  { name: 'Next.js', image: '/next.svg' },
  { name: 'Nginx', image: '/nginx.svg' },
  { name: 'Mongo', image: '/mongo.svg' },
  { name: 'MySQL', image: '/mysql.svg' },
  { name: 'PostgreSQL', image: '/postgresql.svg' },
  { name: 'Bash Scripting', image: '/bash.svg' },
  {name: 'Databricks', image: '/databricks.svg'},
  {name: 'Gitlab', image: '/gitlab.svg'},
  {name: 'GitHub', image: '/github.svg'}
];

const Technologies = () => {
  return (
    <section id="technologies" className="container mx-auto my-12 p-8 border-2 border-accent rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-8 text-primary">Tecnologias e Ferramentas</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {technologies.map((tech) => (
          <div key={tech.name} className="flex flex-col items-center">
            <div className="w-20 h-20 relative mb-2">
              <Image src={tech.image} alt={tech.name} layout="fill" objectFit="contain" />
            </div>
            <p className="text-secondary">{tech.name}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-8 text-secondary">
      </div>
    </section>
  );
};

export default Technologies;
