import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:px-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
        <div className="min-w-0">
          <p className="text-lg font-semibold">{profile.name}</p>
          <p className="text-sm text-muted-foreground">{profile.role}</p>
        </div>
        <div className="flex items-center gap-3">
          <FooterIcon href={profile.github} label="GitHub">
            <Github className="h-4 w-4" />
          </FooterIcon>
          <FooterIcon href={profile.linkedin} label="LinkedIn">
            <Linkedin className="h-4 w-4" />
          </FooterIcon>
          <FooterIcon href={`mailto:${profile.email}`} label="Email">
            <Mail className="h-4 w-4" />
          </FooterIcon>
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-7xl px-5 text-sm text-muted-foreground sm:px-8">
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </p>
    </footer>
  );
}

function FooterIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-surface text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:text-foreground"
    >
      {children}
    </a>
  );
}
