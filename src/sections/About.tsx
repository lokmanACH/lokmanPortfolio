import {
  MapPin,
  Mail,
  Phone,
  Github,
  Linkedin,
  Code2,
  MonitorSmartphone,
  Server,
  BrainCircuit,
} from "lucide-react";
import { profile, whatIDo } from "@/data/portfolio";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

const icons = { Code2, MonitorSmartphone, Server, BrainCircuit } as const;

const details = [
  { label: "Location", value: profile.location, href: "", Icon: MapPin },
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, Icon: Mail },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
    Icon: Phone,
  },
  { label: "GitHub", value: "View profile", href: profile.github, Icon: Github },
  { label: "LinkedIn", value: "View profile", href: profile.linkedin, Icon: Linkedin },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="About"
          title="Engineering with intent"
          description="A short introduction to how I work and what I care about as an engineer."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="glass rounded-3xl p-8">
            {profile.about.map((paragraph) => (
              <p key={paragraph} className="mb-4 text-pretty leading-relaxed text-muted-foreground last:mb-0">
                {paragraph}
              </p>
            ))}
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {details.slice(0, 3).map((item, i) => (
              <Reveal key={item.label} delay={i * 70}>
                <div className="glass card-hover flex items-center gap-4 rounded-2xl p-5">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-surface-2 text-cyan">
                    <item.Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a href={item.href} className="block truncate text-sm font-medium hover:text-cyan">
                        {item.value}
                      </a>
                    ) : (
                      <p className="truncate text-sm font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
            <div className="grid gap-4 sm:col-span-2 sm:grid-cols-2 lg:col-span-1">
              {details.slice(3).map((item, i) => (
                <Reveal key={item.label} delay={220 + i * 70}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="glass card-hover flex items-center gap-3 rounded-2xl p-5"
                  >
                    <item.Icon className="h-5 w-5 shrink-0 text-cyan" aria-hidden="true" />
                    <span className="min-w-0">
                      <span className="block font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                        {item.label}
                      </span>
                      <span className="block truncate text-sm font-medium">{item.value}</span>
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <h3 className="mt-16 text-xl font-semibold">What I Do</h3>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whatIDo.map((item, i) => {
            const Icon = icons[item.icon as keyof typeof icons] ?? Code2;
            return (
              <Reveal key={item.title} delay={i * 80}>
                <article className="glass card-hover h-full rounded-2xl p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-[image:var(--gradient-brand)] text-primary-foreground">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h4 className="mt-5 text-base font-semibold">{item.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
