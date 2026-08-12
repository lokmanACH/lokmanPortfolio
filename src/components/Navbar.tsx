import { useEffect, useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { navLinks, profile } from "@/data/portfolio";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass border-b py-2 shadow-[0_10px_40px_-30px_black]" : "border-b border-transparent py-4"
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:px-8"
      >
        <a
          href="#home"
          className="flex min-w-0 items-center gap-2 text-base font-semibold tracking-tight"
        >
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-[image:var(--gradient-brand)] text-primary-foreground">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
          </span>
          <span className="truncate">{profile.name}</span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-3 rounded-full bg-[image:var(--gradient-brand)] px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5 glow-brand"
          >
            Let's Talk
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border bg-surface lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <div className="glass mt-2 border-t px-5 py-4 lg:hidden">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-2 py-3 text-base text-muted-foreground transition-colors hover:bg-surface-2 hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-3 block rounded-full bg-[image:var(--gradient-brand)] px-5 py-3 text-center text-sm font-medium text-primary-foreground"
          >
            Let's Talk
          </a>
        </div>
      ) : null}
    </header>
  );
}
