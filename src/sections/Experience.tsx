import { Briefcase, MapPin, CheckCircle2 } from "lucide-react";
import { experience } from "@/data/portfolio";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've built things"
          description="Roles, responsibilities and the technologies behind the work."
        />

        <ol className="relative mx-auto mt-14 max-w-4xl border-l border-border pl-8 sm:pl-12">
          {experience.map((job, i) => (
            <Reveal as="li" key={`${job.title}-${job.start}`} delay={i * 90} className="relative pb-10 last:pb-0">
              <span className="absolute -left-[3.05rem] top-1 grid h-9 w-9 place-items-center rounded-xl border border-border bg-card text-cyan sm:-left-[4.05rem]">
                <Briefcase className="h-4 w-4" aria-hidden="true" />
              </span>
              <article className="glass card-hover rounded-2xl p-6 sm:p-7">
                <div className="grid gap-2 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start">
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold">{job.title}</h3>
                    <p className="text-gradient text-sm font-medium">{job.company}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 sm:justify-end">
                    <span className="rounded-full border border-border bg-surface px-2.5 py-1 font-mono text-[11px] text-muted-foreground">
                      {job.start} — {job.end}
                    </span>
                    <span className="rounded-full border border-border bg-surface px-2.5 py-1 text-[11px] text-muted-foreground">
                      {job.type}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full border border-border bg-surface px-2.5 py-1 text-[11px] text-muted-foreground">
                      <MapPin className="h-3 w-3" aria-hidden="true" />
                      {job.location}
                    </span>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{job.description}</p>

                <ul className="mt-4 space-y-2">
                  {job.responsibilities.map((r) => (
                    <li key={r} className="flex gap-2.5 text-sm text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan" aria-hidden="true" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {job.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-lg border border-primary/25 bg-primary/10 px-2.5 py-1 text-xs text-foreground/90"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
