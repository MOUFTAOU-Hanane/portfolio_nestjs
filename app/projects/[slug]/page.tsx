import projects from '../../../data/projects.json';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="max-w-5xl mx-auto p-8 font-sans text-gray-900">
      <h1 className="text-5xl font-extrabold mb-8">{project.title}</h1>
      <p className="text-lg mb-12 text-gray-700">{project.description}</p>

      {/* Contexte */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4 border-b-2 border-gray-300 pb-2">
          Contexte
        </h2>
        <p className="text-base leading-relaxed">{project.details.contexte}</p>
      </section>

      {/* Fonctionnalités */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4 border-b-2 border-gray-300 pb-2">
          Fonctionnalités
        </h2>
        <ul className="list-disc list-inside space-y-2 text-base leading-relaxed">
          {project.details.fonctionnalites.map((fct, i) => (
            <li key={i}>{fct}</li>
          ))}
        </ul>
      </section>

      {/* Technologies */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4 border-b-2 border-gray-300 pb-2">
          Technologies utilisées
        </h2>
        <ul className="list-disc list-inside space-y-2 text-base leading-relaxed">
          {project.details.technologies.map((tech, i) => (
            <li key={i}>{tech}</li>
          ))}
        </ul>
      </section>

      {/* Galerie d'images */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-6 border-b-2 border-gray-300 pb-2">
          Galerie d&apos;images
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {project.details.images?.map((img, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={img}
                alt={`${project.title} image ${i + 1}`}
                className="rounded-lg object-cover"
                width={400}
                height={224}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Lien vers le projet */}
      {project.details.lien && (
        <section className="mt-12 text-center">
          <a
            href={project.details.lien}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded shadow transition-colors duration-300"
          >
            Voir le projet en ligne
          </a>
        </section>
      )}
    </main>
  );
}
