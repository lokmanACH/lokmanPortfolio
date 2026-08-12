import { Reveal } from "@/components/Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
        <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
        {eyebrow}
      </span>
      <h2 className="mt-5 text-balance text-3xl font-semibold sm:text-4xl md:text-5xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
