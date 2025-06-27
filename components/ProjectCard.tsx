import Link from 'next/link';

// Définition de l'interface Project dans le même fichier
interface Project {
  slug: string;
  title: string;
  description: string;
  content: string;
  details: {
    contexte: string;
    fonctionnalites: string[];
    technologies: string[];
    lien?: string;
    image: string; // image principale
    images?: string[];             // optionnel, captures générales
    ancienSiteImages?: string[];   // optionnel, captures ancien site
    nouveauSiteImages?: string[];  // optionnel, captures nouveau site
  };
}


interface ProjectCardProps {
  project: Project;
}


export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
      <img
        src={project.details.image}
        alt={project.title}
        className="w-full h-48 object-cover"
        loading="lazy"
        decoding="async"
      />
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">{project.title}</h2>
        <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>
        <a
          href={`/projects/${project.slug}`}
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition-colors duration-300"
        >
          Voir le projet
        </a>
      </div>
    </article>
  );
}
