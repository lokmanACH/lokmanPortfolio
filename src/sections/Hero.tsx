import { ArrowRight, Download, Github, Linkedin, Mail, Phone, Camera } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";

const socials = [
  { label: "GitHub", href: profile.github, Icon: Github },
  { label: "LinkedIn", href: profile.linkedin, Icon: Linkedin },
  { label: "Email", href: `mailto:${profile.email}`, Icon: Mail },
  { label: "Phone", href: `tel:${profile.phone.replace(/\s/g, "")}`, Icon: Phone },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pb-24 pt-36 sm:pt-44">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_50%_0%,black,transparent_70%)]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,var(--violet),transparent_65%)] opacity-25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 right-0 h-[420px] w-[520px] rounded-full bg-[radial-gradient(circle,var(--blue),transparent_65%)] opacity-20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
              </span>
              {profile.availability}
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl">
              Hi, I'm <span className="text-gradient">{profile.shortName}</span>
              <span className="block text-muted-foreground">{profile.role}</span>
            </h1>
          </Reveal>

          <Reveal delay={150}>
            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              {profile.tagline}
            </p>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-brand)] px-6 py-3 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5 glow-brand"
              >
                View My Work
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href={profile.cvUrl}
                download
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-surface-2"
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <ul className="mt-10 flex flex-wrap gap-3">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-4 py-2.5 text-sm text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:text-foreground"
                  >
                    <Icon className="h-4 w-4 transition-colors group-hover:text-cyan" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative mx-auto w-full max-w-sm">
          <div className="absolute inset-0 -z-10 rounded-[2.5rem] bg-[image:var(--gradient-brand)] opacity-30 blur-3xl" />
          <div className="relative rounded-[2.25rem] bg-[image:var(--gradient-brand)] p-[1.5px] glow-brand">
            <div className="overflow-hidden rounded-[2.15rem] bg-card">
              <div className="relative aspect-4/5 w-full">
                {profile.photo ? (
                  <img
                    src={profile.photo}
                    alt={`${profile.name}, ${profile.role}`}
                    width={800}
                    height={1000}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="grid h-full w-full place-items-center bg-[radial-gradient(circle_at_50%_25%,oklch(0.85_0.06_285),transparent_70%)]">
                    <div className="flex flex-col items-center gap-3 text-muted-foreground">
                      <span className="grid h-16 w-16 place-items-center rounded-2xl border border-border bg-surface-2">
                        <Camera className="h-7 w-7" aria-hidden="true" />
                      </span>
                      <span className="font-mono text-xs uppercase tracking-[0.3em]">
                        Your Photo
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="glass absolute -left-6 bottom-10 hidden rounded-2xl px-4 py-3 sm:block">
            <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              Focus
            </p>
            <p className="text-sm font-medium">Full-Stack · AI</p>
          </div>
          <div className="glass absolute -right-4 top-8 hidden rounded-2xl px-4 py-3 sm:block">
            <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              Based in
            </p>
            <p className="text-sm font-medium">{profile.location}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
