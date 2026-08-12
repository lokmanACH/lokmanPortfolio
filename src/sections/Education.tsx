import { GraduationCap } from "lucide-react";
import { education } from "@/data/portfolio";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Education"
          title="Education & Graduation"
          description="Academic background in computer science, data and intelligent systems."
        />

        <ol className="relative mx-auto mt-14 max-w-3xl border-l border-border pl-8 sm:pl-12">
          {education.map((item, i) => (
            <Reveal as="li" key={`${item.degree}-${item.start}`} delay={i * 90} className="relative pb-10 last:pb-0">
              <span className="absolute -left-[3.05rem] top-1 grid h-9 w-9 place-items-center rounded-xl border border-border bg-card text-cyan sm:-left-[4.05rem]">
                <GraduationCap className="h-4 w-4" aria-hidden="true" />
              </span>
              <div className="glass card-hover rounded-2xl p-6">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-lg font-semibold">{item.degree}</h3>
                  <span className="rounded-full border border-cyan/30 bg-cyan/10 px-2.5 py-0.5 text-[11px] font-medium text-cyan">
                    {item.status}
                  </span>
                </div>
                <p className="mt-1 text-gradient text-sm font-medium">{item.field}</p>
                <p className="mt-3 flex flex-wrap gap-x-3 text-sm text-muted-foreground">
                  <span>{item.school}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono text-xs">
                    {item.start} — {item.end}
                  </span>
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
                {item.image ? (
                  <a
                    href={item.image}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 block overflow-hidden rounded-xl border border-border bg-surface"
                  >
                    <img
                      src={item.image}
                      alt={`${item.degree} diploma — ${item.school}`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                    />
                  </a>
                ) : null}

              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
