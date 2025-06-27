import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects.json';

export default function HomePage() {
  return (
    <main className="max-w-6xl mx-auto p-10 bg-gray-50 min-h-screen">
      <h1 className="text-6xl font-extrabold mb-16 text-center text-gray-900">
        Bienvenue sur mon portfolio
      </h1>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </section>
    </main>
  );
}
