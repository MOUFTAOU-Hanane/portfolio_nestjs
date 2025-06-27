declare module '*.json' {
  const value: any;
  export default value;
}

declare module '@/data/projects.json' {
  interface Project {
    slug: string;
    title: string;
    description: string,
    image:string,
    technologies: string[],
    githubUrl: string
  }
  const projects: Project[];
  export default projects;
}
