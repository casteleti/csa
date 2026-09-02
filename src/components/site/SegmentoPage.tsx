import type { ComponentType, ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

export type Segmento = "infantil" | "fund1" | "fund2" | "medio";

type Pilar = {
  icon: ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
  title: string;
  desc: string;
};

type Espaco = {
  nome: string;
  frase: string;
};

type Depoimento = {
  nome: string;
  segmento: string;
  texto: string;
  iniciais: string;
};

export type SegmentoPageProps = {
  segmento: Segmento;
  eyebrow: string;
  headline: string;
  subheadline: string;
  pilaresTitle: string;
  pilaresIntro: string;
  pilares: Pilar[];
  infraTitle: string;
  infraIntro: string;
  espacos: Espaco[];
  depoimento: Depoimento;
  ctaHeadline: string;
  ctaText: string;
};

/* Cor dominante por segmento — usa tokens já definidos */
const segStyles: Record<
  Segmento,
  {
    heroBg: string;
    heroEyebrow: string;
    pilarIcon: string;
    pilarRule: string;
    chip: string;
    border: string;
  }
> = {
  infantil: {
    heroBg: "bg-seg-infantil text-seg-infantil-foreground",
    heroEyebrow: "text-seg-infantil-foreground/80",
    pilarIcon: "bg-seg-infantil/20 text-[oklch(0.45_0.13_85)]",
    pilarRule: "bg-seg-infantil",
    chip: "bg-seg-infantil/15 text-[oklch(0.4_0.13_85)]",
    border: "border-seg-infantil/40",
  },
  fund1: {
    heroBg: "bg-seg-fund1 text-seg-fund1-foreground",
    heroEyebrow: "text-seg-fund1-foreground/90",
    pilarIcon: "bg-seg-fund1/15 text-seg-fund1",
    pilarRule: "bg-seg-fund1",
    chip: "bg-seg-fund1/15 text-seg-fund1",
    border: "border-seg-fund1/40",
  },
  fund2: {
    heroBg: "bg-seg-fund2 text-seg-fund2-foreground",
    heroEyebrow: "text-seg-fund2-foreground/90",
    pilarIcon: "bg-seg-fund2/15 text-seg-fund2",
    pilarRule: "bg-seg-fund2",
    chip: "bg-seg-fund2/15 text-seg-fund2",
    border: "border-seg-fund2/40",
  },
  medio: {
    heroBg: "bg-seg-medio text-seg-medio-foreground border-y-[3px] border-institutional shadow-sm",
    heroEyebrow: "text-institutional/80",
    pilarIcon: "bg-institutional/10 text-institutional",
    pilarRule: "bg-institutional",
    chip: "bg-institutional/10 text-institutional",
    border: "border-institutional/40",
  },
};

export function SegmentoPage(props: SegmentoPageProps) {
  const s = segStyles[props.segmento];

  return (
    <>
      <Hero styles={s} {...props} />
      <Pilares styles={s} title={props.pilaresTitle} intro={props.pilaresIntro} pilares={props.pilares} />
      <Infra styles={s} segmento={props.segmento} title={props.infraTitle} intro={props.infraIntro} espacos={props.espacos} />
      <DepoimentoSection styles={s} depoimento={props.depoimento} />
      <CTAFinal styles={s} segmento={props.segmento} headline={props.ctaHeadline} text={props.ctaText} />
    </>
  );
}

/* ---------- Hero ---------- */
function Hero({
  styles,
  eyebrow,
  headline,
  subheadline,
}: { styles: typeof segStyles[Segmento] } & Pick<SegmentoPageProps, "eyebrow" | "headline" | "subheadline">) {
  return (
    <section className={styles.heroBg}>
      <div className="container-site py-16 lg:py-24 grid gap-12 lg:grid-cols-[1.15fr_1fr] items-center">
        <div>
          <div className={`mb-4 text-xs uppercase tracking-[0.18em] ${styles.heroEyebrow}`}>
            {eyebrow}
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-balance">
            {headline}
          </h1>
          <p className="mt-5 text-base sm:text-lg max-w-xl leading-relaxed opacity-95">{subheadline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="bg-institutional text-institutional-foreground hover:bg-institutional-dark"
            >
              <Link to="/agendar-visita">Agendar Visita</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/95 text-institutional border-white hover:bg-white"
            >
              <Link to="/matriculas">Conhecer Matrículas</Link>
            </Button>
          </div>
        </div>

        <div
          className="rounded-md bg-white/30 border border-white/40 aspect-[4/3] grid place-items-center text-center p-6 backdrop-blur-sm"
          role="img"
          aria-label="Espaço reservado para foto real do segmento"
        >
          <div className="max-w-xs text-sm">
            Substituir por foto real de alunos deste segmento no Colégio Santo André.
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Pilares ---------- */
function Pilares({
  styles,
  title,
  intro,
  pilares,
}: {
  styles: typeof segStyles[Segmento];
  title: string;
  intro: string;
  pilares: Pilar[];
}) {
  return (
    <section className="container-site py-16 lg:py-24">
      <div className="max-w-2xl">
        <h2 className="font-display text-3xl md:text-4xl">{title}</h2>
        <p className="mt-3 text-muted-foreground">{intro}</p>
      </div>
      <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {pilares.map((p) => (
          <li
            key={p.title}
            className="rounded-md border border-border bg-surface-elevated p-6 flex flex-col"
          >
            <div className={`grid size-11 place-items-center rounded-sm ${styles.pilarIcon}`}>
              <p.icon className="size-5" aria-hidden />
            </div>
            <h3 className="mt-5 font-display text-lg text-foreground">{p.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            <span className={`mt-5 h-0.5 w-10 rounded-full ${styles.pilarRule}`} aria-hidden />
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ---------- Infraestrutura ---------- */
function Infra({
  styles,
  segmento,
  title,
  intro,
  espacos,
}: {
  styles: typeof segStyles[Segmento];
  segmento: Segmento;
  title: string;
  intro: string;
  espacos: Espaco[];
}) {
  return (
    <section className="bg-surface border-y border-border">
      <div className="container-site py-16 lg:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl md:text-4xl">{title}</h2>
            <p className="mt-3 text-muted-foreground">{intro}</p>
          </div>
          <Button asChild variant="outline" className="hidden sm:inline-flex">
            <Link to="/infraestrutura">
              Conhecer infraestrutura <ArrowRight className="size-4 ml-1.5" aria-hidden />
            </Link>
          </Button>
        </div>

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {espacos.map((e) => (
            <li
              key={e.nome}
              className={`rounded-md overflow-hidden border ${styles.border} bg-surface-elevated`}
            >
              <div
                className="aspect-[4/3] bg-institutional/5 grid place-items-center text-xs text-muted-foreground text-center px-4"
                role="img"
                aria-label={`Foto do espaço ${e.nome} (a ser adicionada)`}
              >
                Substituir por foto real do espaço
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg text-foreground">{e.nome}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{e.frase}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-8 sm:hidden">
          <Button asChild variant="outline" className="w-full">
            <Link to="/infraestrutura">Conhecer infraestrutura</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

/* ---------- Depoimento ---------- */
function DepoimentoSection({
  styles,
  depoimento,
}: {
  styles: typeof segStyles[Segmento];
  depoimento: Depoimento;
}) {
  return (
    <section className="container-site py-16 lg:py-24">
      <figure className="max-w-3xl mx-auto rounded-md border border-border bg-surface-elevated p-8 lg:p-10">
        <Quote className="size-9 text-institutional/30" aria-hidden />
        <blockquote className="mt-3 font-display text-2xl md:text-3xl text-foreground leading-snug">
          {depoimento.texto}
        </blockquote>
        <figcaption className="mt-7 pt-6 border-t border-border flex items-center gap-4">
          <div
            aria-hidden
            className="grid size-12 place-items-center rounded-full bg-institutional text-institutional-foreground font-display"
          >
            {depoimento.iniciais}
          </div>
          <div>
            <div className="font-medium text-foreground">{depoimento.nome}</div>
            <div className={`text-xs px-2 py-0.5 rounded-xs inline-block mt-1 ${styles.chip}`}>
              {depoimento.segmento}
            </div>
          </div>
        </figcaption>
        <p className="mt-6 text-xs italic text-muted-foreground/70">
          Depoimento de exemplo — substituir por relato real de família do segmento.
        </p>
      </figure>
    </section>
  );
}

/* ---------- CTA Final ---------- */
function CTAFinal({
  styles,
  segmento,
  headline,
  text,
}: {
  styles: typeof segStyles[Segmento];
  segmento: Segmento;
  headline: string;
  text: string;
}) {
  // Ensino Médio: fundo institucional (branco da paleta + azul dominante).
  // Demais: usa a cor do segmento como faixa final.
  const bg =
    segmento === "medio"
      ? "bg-institutional text-institutional-foreground"
      : `${styles.heroBg}`;

  const primaryBtn =
    segmento === "medio"
      ? "bg-white text-institutional hover:bg-white/90"
      : "bg-institutional text-institutional-foreground hover:bg-institutional-dark";

  const secondaryBtn = "bg-white/95 text-institutional border-white hover:bg-white";

  return (
    <section className={bg}>
      <div className="container-site py-20 lg:py-24 text-center">
        <h2 className="font-display text-3xl md:text-5xl max-w-3xl mx-auto leading-tight">
          {headline}
        </h2>
        <p className="mt-5 text-base md:text-lg opacity-90 max-w-2xl mx-auto">{text}</p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg" className={primaryBtn}>
            <Link to="/agendar-visita">
              Agendar Visita <ArrowRight className="size-4 ml-1.5" aria-hidden />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className={secondaryBtn}>
            <Link to="/matriculas">Conhecer Matrículas</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

/* small helper if a route needs a non-icon element later */
export type { ReactNode };
