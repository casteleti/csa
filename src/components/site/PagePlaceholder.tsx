import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export function PagePlaceholder({ eyebrow, title, description, children }: Props) {
  return (
    <section className="container-site py-16 lg:py-24">
      {eyebrow && (
        <div className="mb-3 text-xs uppercase tracking-[0.18em] text-institutional/80">
          {eyebrow}
        </div>
      )}
      <h1 className="font-display text-4xl md:text-5xl text-foreground max-w-3xl">{title}</h1>
      <p className="mt-4 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
        {description}
      </p>
      <div className="mt-8 inline-flex items-center rounded-sm border border-dashed border-border bg-surface px-4 py-2 text-sm text-muted-foreground">
        Página em construção — conteúdo será adicionado nas próximas etapas.
      </div>
      {children}
    </section>
  );
}
