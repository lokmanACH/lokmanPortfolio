import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { profile } from "@/data/portfolio";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

const contactItems = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, Icon: Mail },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
    Icon: Phone,
  },
  { label: "Location", value: profile.location, href: "", Icon: MapPin },
  { label: "GitHub", value: "github.com", href: profile.github, Icon: Github },
  { label: "LinkedIn", value: "linkedin.com", href: profile.linkedin, Icon: Linkedin },
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[420px] bg-[radial-gradient(ellipse_at_bottom,var(--blue),transparent_65%)] opacity-15 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something great together."
          description="Whether you're a recruiter, a company or a client with an idea — I'd love to hear about it and reply quickly."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {contactItems.map((item, i) => {
              const content = (
                <>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-surface-2 text-cyan">
                    <item.Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                      {item.label}
                    </span>
                    <span className="block truncate text-sm font-medium">{item.value}</span>
                  </span>
                </>
              );
              return (
                <Reveal key={item.label} delay={i * 60}>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="glass card-hover flex items-center gap-4 rounded-2xl p-5"
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="glass flex items-center gap-4 rounded-2xl p-5">{content}</div>
                  )}
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={120}>
            <form onSubmit={handleSubmit} className="glass rounded-3xl p-7 sm:p-9">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  id="name"
                  label="Name"
                  value={form.name}
                  onChange={(v) => setForm((f) => ({ ...f, name: v }))}
                  placeholder="Jane Doe"
                />
                <Field
                  id="email"
                  label="Email"
                  type="email"
                  value={form.email}
                  onChange={(v) => setForm((f) => ({ ...f, email: v }))}
                  placeholder="jane@company.com"
                />
              </div>
              <div className="mt-5">
                <label htmlFor="message" className="mb-2 block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  placeholder="Tell me about the role or project…"
                  className="w-full resize-y rounded-2xl border border-input bg-surface px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary/60 focus:ring-2 focus:ring-ring/30"
                />
              </div>
              <button
                type="submit"
                className="group mt-6 inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-brand)] px-6 py-3 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5 glow-brand"
              >
                Send Message
                <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </button>
              <p className="mt-3 text-xs text-muted-foreground">
                This opens your email client with the message pre-filled.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-2xl border border-input bg-surface px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary/60 focus:ring-2 focus:ring-ring/30"
      />
    </div>
  );
}
