import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ExternalLink,
} from "lucide-react";
import { profile, navLinks } from "@/data/portfolio";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface/50 py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Main Footer Content */}
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand Section */}
          <div className="col-span-1">
            <div className="mb-4">
              <p className="text-lg font-bold text-foreground">
                {profile.shortName}
              </p>
              <p className="text-sm text-muted-foreground">{profile.role}</p>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Building modern, scalable solutions across software engineering,
              data science, and AI.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="mb-4 text-sm font-semibold text-foreground">
              Navigation
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="col-span-1">
            <h3 className="mb-4 text-sm font-semibold text-foreground">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  GitHub Profile <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  LinkedIn Profile <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="mb-4 text-sm font-semibold text-foreground">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan" />
                <span className="text-sm text-muted-foreground">
                  {profile.location}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan" />
                <a
                  href={`tel:${profile.phone}`}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {profile.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan" />
                <a
                  href={`mailto:${profile.email}`}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {profile.email}
                </a>
              </li>
              <li className="pt-2">
                <p className="text-xs font-medium text-cyan">
                  {profile.availability}
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-border" />

        {/* Footer Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {currentYear} {profile.name}. All rights reserved.
          </p>

          {/* Social Links */}
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
      </div>
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
