import Link from 'next/link';
import Image from 'next/image'; // Importer le composant Image de Next.js

// Définition de l'interface pour un projet
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
    images?: string[]; // optionnel, captures générales
    ancienSiteImages?: string[]; // optionnel, captures ancien site
    nouveauSiteImages?: string[]; // optionnel, captures nouveau site
  };
}

export default function ProjectCard({ project }: { project: Project }) {
  if (!project) return null;

  // Choisir l'image supplémentaire
  const firstExtraImage =
    project.details.images?.[0] ||
    project.details.ancienSiteImages?.[0] ||
    project.details.nouveauSiteImages?.[0] ||
    null;

  return (
    <div className="border p-4 rounded shadow">
      <Image
        src={project.details.image}
        alt={project.title}
        className="w-full h-40 object-cover rounded"
        width={600} // Définir la largeur de l'image
        height={240} // Définir la hauteur de l'image
      />
      {firstExtraImage && (
        <Image
          src={firstExtraImage}
          alt={`${project.title} - extra`}
          className="w-full h-20 object-cover rounded mt-2"
          width={600} // Définir la largeur de l'image
          height={240} // Définir la hauteur de l'image
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
