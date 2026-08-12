import { Github, ExternalLink, Star } from "lucide-react";
import { projects } from "@/data/portfolio";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

type Project = (typeof projects)[number];

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,var(--violet),transparent_65%)] opacity-15 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="A few products and tools I've designed, built and shipped end to end."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {featured.map((project, i) => (
            <Reveal key={project.name} delay={i * 90}>
              <ProjectCard project={project} large />
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((project, i) => (
            <Reveal key={project.name} delay={i * 90}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, large = false }: { project: Project; large?: boolean }) {
  return (
    <article className="glass card-hover group flex h-full flex-col overflow-hidden rounded-3xl">
      <div className={`relative overflow-hidden ${large ? "aspect-16/10" : "aspect-16/11"}`}>
        <img
          src={project.image}
          alt={`${project.name} preview`}
          loading="lazy"
          width={1280}
          height={800}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/20 to-transparent" />
        {project.featured ? (
          <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-[image:var(--gradient-brand)] px-3 py-1 text-[11px] font-medium text-primary-foreground">
            <Star className="h-3 w-3" aria-hidden="true" />
            Featured
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className={`font-semibold ${large ? "text-2xl" : "text-lg"}`}>{project.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-lg border border-border bg-surface px-2.5 py-1 text-xs text-muted-foreground"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-3 pt-2">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          ) : null}
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-brand)] px-4 py-2 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
