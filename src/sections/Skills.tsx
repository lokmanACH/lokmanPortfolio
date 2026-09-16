import {
  Activity,
  BarChart3,
  BrainCircuit,
  Braces,
  Cloud,
  Code2,
  Container,
  Database,
  FileCode2,
  Github,
  GitBranch,
  LayoutDashboard,
  Network,
  Server,
  ServerCog,
  Terminal,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { skills } from "@/data/portfolio";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

const icons = {
  LayoutDashboard,
  Server,
  Database,
  BrainCircuit,
  Wrench,
} as const;

const technologyIcons: Record<string, LucideIcon> = {
  React: Code2,
  JavaScript: Braces,
  TypeScript: FileCode2,
  HTML: Code2,
  CSS: Code2,
  "Tailwind CSS": Code2,
  "Node.js": Server,
  Express: Server,
  "REST APIs": Network,
  FastAPI: ServerCog,
  PHP: FileCode2,
  Java: Braces,
  "Spring boot": ServerCog,
  MongoDB: Database,
  PostgreSQL: Database,
  MySQL: Database,
  ORACLE: Database,
  MariaDB: Database,
  Python: Terminal,
  "Machine Learning": BrainCircuit,
  "Deep Learning": BrainCircuit,
  "Data Science": BarChart3,
  Git: GitBranch,
  GitHub: Github,
  AWS: Cloud,
  Docker: Container,
  Nginx: Server,
  Prometheus: Activity,
  Grafana: BarChart3,
  Linux: Terminal,
  "Power BI": BarChart3,
};

const technologyColors: Record<string, string> = {
  React: "text-cyan-400",
  JavaScript: "text-yellow-400",
  TypeScript: "text-blue-400",
  HTML: "text-orange-500",
  CSS: "text-blue-500",
  "Tailwind CSS": "text-sky-400",
  "Node.js": "text-green-500",
  Express: "text-slate-300",
  "REST APIs": "text-violet-400",
  FastAPI: "text-teal-400",
  PHP: "text-indigo-400",
  Java: "text-red-400",
  "Spring boot": "text-green-400",
  MongoDB: "text-green-500",
  PostgreSQL: "text-sky-400",
  MySQL: "text-blue-400",
  ORACLE: "text-red-500",
  MariaDB: "text-teal-400",
  Python: "text-yellow-400",
  "Machine Learning": "text-pink-400",
  "Deep Learning": "text-fuchsia-400",
  "Data Science": "text-cyan-400",
  Git: "text-orange-500",
  GitHub: "text-slate-200",
  AWS: "text-orange-400",
  Docker: "text-sky-400",
  Nginx: "text-green-500",
  Prometheus: "text-orange-400",
  Grafana: "text-orange-500",
  Linux: "text-slate-200",
  "Power BI": "text-yellow-400",
};

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
                    <h3 className="text-base font-semibold">
                      {group.category}
                    </h3>
                  </div>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li key={item}>
                        <span className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface px-3 py-1.5 text-sm text-muted-foreground transition-colors duration-300 hover:border-primary/40 hover:text-foreground">
                          {(() => {
                            const TechnologyIcon =
                              technologyIcons[item] ?? Code2;
                            const technologyColor =
                              technologyColors[item] ?? "text-cyan";
                            return (
                              <TechnologyIcon
                                className={`h-3.5 w-3.5 ${technologyColor}`}
                                aria-hidden="true"
                              />
                            );
                          })()}
                          {item}
                        </span>
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
