import { LayoutDashboard, Server, Database, BrainCircuit, Wrench } from "lucide-react";
import { skills } from "@/data/portfolio";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

const icons = { LayoutDashboard, Server, Database, BrainCircuit, Wrench } as const;

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="Tools of the craft"
          description="The stack I reach for when building products end to end."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => {
            const Icon = icons[group.icon as keyof typeof icons] ?? Wrench;
            return (
              <Reveal key={group.category} delay={i * 70}>
                <article className="glass card-hover h-full rounded-2xl p-6">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-surface-2 text-cyan">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="text-base font-semibold">{group.category}</h3>
                  </div>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-lg border border-border bg-surface px-3 py-1.5 text-sm text-muted-foreground transition-colors duration-300 hover:border-primary/40 hover:text-foreground"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
