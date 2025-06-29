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


export default function ProjectCard({ project }: { project: Project }) {
  if (!project) return null;

  const firstExtraImage =
    project.details.images?.[0] ||
    project.details.ancienSiteImages?.[0] ||
    project.details.nouveauSiteImages?.[0] ||
    null;

  return (
    <div className="border p-4 rounded shadow">
      <img
        src={project.details.image}
        alt={project.title}
        className="w-full h-40 object-cover rounded"
      />
      {firstExtraImage && (
        <img
          src={firstExtraImage}
          alt={`${project.title} - extra`}
          className="w-full h-20 object-cover rounded mt-2"
        />
      )}
      <h2 className="text-xl font-bold mt-2">{project.title}</h2>
      <p>{project.description}</p>

      <Link href={`/projects/${project.slug}`}>
        <span className="text-blue-500 hover:underline inline-block mt-2">
          Voir le projet
        </span>
      </Link>
    </div>
  );
}

