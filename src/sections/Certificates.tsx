import { useMemo, useState } from "react";
import { Award, ExternalLink } from "lucide-react";
import { certificates } from "@/data/portfolio";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export function Certificates() {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(certificates.map((c) => c.category)))],
    [],
  );
  const [active, setActive] = useState("All");
  const [showAllSkills, setShowAllSkills] = useState(false);
  const visible = certificates.filter(
    (c) => active === "All" || c.category === active,
  );

  return (
    <section id="certificates" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Certificates"
          title="Certifications & credentials"
          description="Verified programs that back up the work with formal training."
        />

        <Reveal className="mt-10 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                aria-pressed={active === cat}
                className={`rounded-full border px-4 py-2 text-sm transition-all duration-300 ${
                  active === cat
                    ? "border-transparent bg-[image:var(--gradient-brand)] text-primary-foreground"
                    : "border-border bg-surface text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setShowAllSkills((value) => !value)}
            className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-foreground transition hover:bg-surface-2"
          >
            {showAllSkills ? "Collapse skills" : "Expand all skills"}
          </button>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((cert, i) => {
            const displaySkills = showAllSkills
              ? cert.skills
              : cert.skills.slice(0, 3);
            const canExpand = cert.skills.length > 3;

            return (
              <Reveal key={cert.credentialId} delay={i * 70}>
                <article className="glass card-hover flex h-full flex-col rounded-2xl p-6">
                  {cert.image ? (
                    <a
                      href={cert.image}
                      target="_blank"
                      rel="noreferrer"
                      className="mb-5 block overflow-hidden rounded-xl border border-border bg-surface"
                    >
                      <img
                        src={cert.image}
                        alt={`${cert.title} certificate from ${cert.organization}`}
                        loading="lazy"
                        className="aspect-4/3 w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                      />
                    </a>
                  ) : null}
                  <div className="flex items-start justify-between gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-surface-2 text-cyan">
                      <Award className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">
                      {cert.date}
                    </span>
                  </div>

                  <h3 className="mt-5 text-base font-semibold leading-snug">
                    {cert.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {cert.organization}
                  </p>
                  <p className="mt-3 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                    ID: {cert.credentialId}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {displaySkills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-lg border border-border bg-surface px-2.5 py-1 text-xs text-muted-foreground"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                  {canExpand ? (
                    <button
                      type="button"
                      onClick={() => setShowAllSkills((value) => !value)}
                      className="mt-4 self-start text-sm font-medium text-cyan transition hover:opacity-80"
                    >
                      {showAllSkills ? "Show less" : "Show all skills"}
                    </button>
                  ) : null}
                  {cert.url ? (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex items-center gap-2 self-start text-sm font-medium text-cyan transition-transform duration-300 hover:translate-x-0.5"
                    >
                      View Certificate
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  ) : null}
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
