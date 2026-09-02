import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { CardEspaco } from "@/components/editorial";
import type { Espaco } from "@/content/types";
import { SEGMENTOS, SEGMENTO_LABEL, type Segmento } from "@/content/taxonomy";
import { breadcrumbSchema } from "@/lib/seo";

export const Route = createFileRoute("/infraestrutura")({
  head: () => ({
    meta: [
      { title: "Infraestrutura | Colégio Santo André" },
      {
        name: "description",
        content:
          "Conheça os ambientes do Colégio Santo André e descubra como cada espaço contribui para o aprendizado, a convivência e o desenvolvimento integral dos alunos.",
      },
      { property: "og:title", content: "Infraestrutura | Colégio Santo André" },
      {
        property: "og:description",
        content:
          "Ambientes preparados para aprender, conviver e crescer. Conheça a infraestrutura do Colégio Santo André.",
      },
      { property: "og:url", content: "/infraestrutura" },
    ],
    links: [{ rel: "canonical", href: "/infraestrutura" }],
    scripts: [
      breadcrumbSchema([
        { name: "Início", href: "/" },
        { name: "Infraestrutura", href: "/infraestrutura" },
      ]),
    ],
  }),
  component: InfraestruturaPage,
});

/* ---------------- Dados ---------------- */

const ESPACOS: Espaco[] = [
  /* Educação Infantil */
  {
    id: "brinquedoteca",
    slug: "brinquedoteca",
    nome: "Brinquedoteca",
    segmentos: ["infantil"],
    descricaoCurta: "Aprender brincando faz parte do desenvolvimento infantil.",
    descricaoCompleta:
      "A brinquedoteca é um espaço preparado para estimular imaginação, criatividade, linguagem, interação e desenvolvimento socioemocional. Por meio do brincar, a criança explora o mundo, cria vínculos e constrói conhecimentos importantes para sua formação.",
    galeria: [
      { src: "", alt: "Brinquedoteca — vista geral (foto a ser adicionada)" },
    ],
    destaques: [],
    seo: {
      title: "Brinquedoteca — Infraestrutura",
      description: "Aprender brincando faz parte do desenvolvimento infantil.",
    },
  },
  {
    id: "parque-infantil",
    slug: "parque-infantil",
    nome: "Parque Infantil",
    segmentos: ["infantil"],
    descricaoCurta: "Movimento, descoberta e convivência em um ambiente seguro.",
    descricaoCompleta:
      "O parque favorece o desenvolvimento motor, a autonomia e as relações interpessoais. As brincadeiras ajudam a criança a explorar limites, desenvolver confiança e aprender a conviver com os colegas.",
    galeria: [
      { src: "", alt: "Parque infantil — vista panorâmica (foto a ser adicionada)" },
    ],
    destaques: [],
    seo: {
      title: "Parque Infantil — Infraestrutura",
      description: "Movimento, descoberta e convivência em um ambiente seguro.",
    },
  },
  {
    id: "espaco-acolhimento",
    slug: "espaco-de-acolhimento",
    nome: "Espaço de Acolhimento",
    segmentos: ["infantil"],
    descricaoCurta: "Segurança emocional para os primeiros passos da vida escolar.",
    descricaoCompleta:
      "Um ambiente pensado para favorecer adaptação, acolhimento e bem-estar, ajudando a criança a construir vínculos de confiança e pertencimento.",
    galeria: [
      { src: "", alt: "Espaço de acolhimento — vista interna (foto a ser adicionada)" },
    ],
    destaques: [],
    seo: {
      title: "Espaço de Acolhimento — Infraestrutura",
      description: "Segurança emocional para os primeiros passos da vida escolar.",
    },
  },

  /* Fundamental I */
  {
    id: "biblioteca-fund1",
    slug: "biblioteca-fundamental-i",
    nome: "Biblioteca",
    segmentos: ["fund1"],
    descricaoCurta: "Um espaço para descobrir o prazer da leitura.",
    descricaoCompleta:
      "A biblioteca estimula a formação de leitores, amplia repertórios culturais e incentiva a curiosidade. Aqui, os alunos desenvolvem imaginação, interpretação e gosto pelo conhecimento.",
    galeria: [
      { src: "", alt: "Biblioteca do Fundamental I (foto a ser adicionada)" },
    ],
    destaques: [],
    seo: {
      title: "Biblioteca — Infraestrutura",
      description: "Um espaço para descobrir o prazer da leitura.",
    },
  },
  {
    id: "salas-aprendizagem",
    slug: "salas-de-aprendizagem",
    nome: "Salas de Aprendizagem",
    segmentos: ["fund1"],
    descricaoCurta: "Ambientes preparados para aprender com participação ativa.",
    descricaoCompleta:
      "As salas favorecem interação, construção coletiva do conhecimento e desenvolvimento de habilidades essenciais para cada etapa da aprendizagem.",
    galeria: [
      { src: "", alt: "Sala de aprendizagem — vista interna (foto a ser adicionada)" },
    ],
    destaques: [],
    seo: {
      title: "Salas de Aprendizagem — Infraestrutura",
      description: "Ambientes preparados para aprender com participação ativa.",
    },
  },
  {
    id: "espacos-colaborativos",
    slug: "espacos-colaborativos",
    nome: "Espaços Colaborativos",
    segmentos: ["fund1"],
    descricaoCurta: "Aprender também significa compartilhar experiências.",
    descricaoCompleta:
      "Ambientes que incentivam trabalho em equipe, criatividade, diálogo e construção conjunta de soluções.",
    galeria: [
      { src: "", alt: "Espaço colaborativo (foto a ser adicionada)" },
    ],
    destaques: [],
    seo: {
      title: "Espaços Colaborativos — Infraestrutura",
      description: "Aprender também significa compartilhar experiências.",
    },
  },

  /* Fundamental II */
  {
    id: "laboratorios-fund2",
    slug: "laboratorios-fundamental-ii",
    nome: "Laboratórios",
    segmentos: ["fund2"],
    descricaoCurta: "Conhecimento que ganha forma na prática.",
    descricaoCompleta:
      "Os laboratórios aproximam teoria e realidade, permitindo que os alunos investiguem, experimentem e desenvolvam pensamento científico de forma significativa.",
    galeria: [
      { src: "", alt: "Laboratório do Fundamental II (foto a ser adicionada)" },
    ],
    destaques: [],
    seo: {
      title: "Laboratórios — Infraestrutura",
      description: "Conhecimento que ganha forma na prática.",
    },
  },
  {
    id: "biblioteca-fund2",
    slug: "biblioteca-fundamental-ii",
    nome: "Biblioteca",
    segmentos: ["fund2"],
    descricaoCurta: "Pesquisa, aprofundamento e ampliação de repertório.",
    descricaoCompleta:
      "Um ambiente que estimula autonomia intelectual e contribui para o desenvolvimento do pensamento crítico.",
    galeria: [
      { src: "", alt: "Biblioteca do Fundamental II (foto a ser adicionada)" },
    ],
    destaques: [],
    seo: {
      title: "Biblioteca — Infraestrutura",
      description: "Pesquisa, aprofundamento e ampliação de repertório.",
    },
  },
  {
    id: "espacos-projetos",
    slug: "espacos-de-projetos",
    nome: "Espaços de Projetos",
    segmentos: ["fund2"],
    descricaoCurta: "Criatividade e protagonismo em ação.",
    descricaoCompleta:
      "Locais destinados à realização de projetos, desafios e atividades que estimulam colaboração, inovação e resolução de problemas.",
    galeria: [
      { src: "", alt: "Espaço de projetos (foto a ser adicionada)" },
    ],
    destaques: [],
    seo: {
      title: "Espaços de Projetos — Infraestrutura",
      description: "Criatividade e protagonismo em ação.",
    },
  },

  /* Ensino Médio */
  {
    id: "laboratorios-especializados",
    slug: "laboratorios-especializados",
    nome: "Laboratórios Especializados",
    segmentos: ["medio"],
    descricaoCurta: "Experiências que aprofundam o conhecimento.",
    descricaoCompleta:
      "Os laboratórios oferecem recursos que permitem aos estudantes relacionar teoria, prática e investigação, ampliando a compreensão dos conteúdos acadêmicos.",
    galeria: [
      { src: "", alt: "Laboratório especializado do Ensino Médio (foto a ser adicionada)" },
    ],
    destaques: [],
    seo: {
      title: "Laboratórios Especializados — Infraestrutura",
      description: "Experiências que aprofundam o conhecimento.",
    },
  },
  {
    id: "salas-especializadas",
    slug: "salas-especializadas",
    nome: "Salas Especializadas",
    segmentos: ["medio"],
    descricaoCurta: "Ambientes preparados para aprofundamento e foco.",
    descricaoCompleta:
      "Espaços que favorecem concentração, autonomia e desenvolvimento das competências necessárias para os desafios do Ensino Médio.",
    galeria: [
      { src: "", alt: "Sala especializada — vista interna (foto a ser adicionada)" },
    ],
    destaques: [],
    seo: {
      title: "Salas Especializadas — Infraestrutura",
      description: "Ambientes preparados para aprofundamento e foco.",
    },
  },
  {
    id: "espacos-estudo",
    slug: "espacos-de-estudo",
    nome: "Espaços de Estudo",
    segmentos: ["medio"],
    descricaoCurta: "Preparação para grandes objetivos.",
    descricaoCompleta:
      "Locais destinados ao estudo individual e colaborativo, promovendo disciplina, organização e construção de hábitos que acompanharão o aluno além da escola.",
    galeria: [
      { src: "", alt: "Espaço de estudo do Ensino Médio (foto a ser adicionada)" },
    ],
    destaques: [],
    seo: {
      title: "Espaços de Estudo — Infraestrutura",
      description: "Preparação para grandes objetivos.",
    },
  },
];

/* ---------------- Página ---------------- */

type Filtro = Segmento | "todos";

function InfraestruturaPage() {
  const [filtro, setFiltro] = useState<Filtro>("todos");
  const [aberto, setAberto] = useState<Espaco | null>(null);

  const visiveis =
    filtro === "todos"
      ? ESPACOS
      : ESPACOS.filter((e) => e.segmentos.includes(filtro));

  return (
    <>
      <Hero />
      <Introducao />
      <Grid
        filtro={filtro}
        onFiltro={setFiltro}
        espacos={visiveis}
        onOpen={setAberto}
      />
      <Diferencial />
      <Destaque />
      <CTAFinal />
      <DetalheModal espaco={aberto} onClose={() => setAberto(null)} />
    </>
  );
}

/* ---------- 1. HERO ---------- */
function Hero() {
  return (
    <section className="bg-surface border-b border-border">
      <div className="container-site py-16 lg:py-24 grid gap-12 lg:grid-cols-[1.15fr_1fr] items-center">
        <div>
          <div className="mb-4 text-xs uppercase tracking-[0.18em] text-institutional/80">
            Infraestrutura
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-foreground text-balance">
            Ambientes preparados para aprender, conviver e crescer.
          </h1>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
            Cada espaço do Colégio Santo André foi pensado para apoiar
            diferentes etapas da formação dos alunos, criando experiências
            que estimulam conhecimento, autonomia, convivência e
            desenvolvimento integral.
          </p>
        </div>

        <div
          className="rounded-md bg-institutional/5 border border-institutional/15 aspect-[4/3] grid place-items-center text-center p-6"
          role="img"
          aria-label="Espaço reservado para foto institucional dos ambientes do Colégio Santo André"
        >
          <div className="max-w-xs text-sm text-muted-foreground">
            <Sparkles className="size-6 mx-auto mb-3 text-institutional" aria-hidden />
            Substituir por foto institucional dos espaços do Colégio Santo André.
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- INTRODUÇÃO ---------- */
function Introducao() {
  return (
    <section className="container-site pt-16 lg:pt-24">
      <div className="max-w-3xl space-y-4 text-muted-foreground leading-relaxed">
        <p>
          Muito mais do que estruturas físicas, os ambientes escolares
          influenciam a forma como os alunos aprendem, interagem e
          constroem suas experiências ao longo da vida escolar.
        </p>
        <p>
          Por isso, cada espaço do Colégio Santo André é planejado para
          favorecer descobertas, desenvolvimento, colaboração e bem-estar,
          respeitando as necessidades de cada etapa da formação.
        </p>
      </div>
    </section>
  );
}

/* ---------- FILTRO + GRID ---------- */
function Grid({
  filtro,
  onFiltro,
  espacos,
  onOpen,
}: {
  filtro: Filtro;
  onFiltro: (f: Filtro) => void;
  espacos: Espaco[];
  onOpen: (e: Espaco) => void;
}) {
  const options: Array<{ key: Filtro; label: string }> = [
    { key: "todos", label: "Todos" },
    ...SEGMENTOS.map((s) => ({ key: s as Filtro, label: SEGMENTO_LABEL[s] })),
  ];

  return (
    <section className="container-site py-16 lg:py-24">
      <div
        role="radiogroup"
        aria-label="Filtrar espaços por segmento"
        className="flex flex-wrap gap-2 mb-10"
      >
        {options.map((opt) => {
          const ativo = filtro === opt.key;
          return (
            <button
              key={opt.key}
              type="button"
              role="radio"
              aria-checked={ativo}
              onClick={() => onFiltro(opt.key)}
              className={
                "px-3 py-1.5 rounded-sm text-sm font-medium border transition-colors min-h-9 " +
                (ativo
                  ? "bg-institutional text-institutional-foreground border-institutional"
                  : "bg-surface-elevated text-foreground border-border hover:bg-accent")
              }
            >
              {opt.label}
            </button>
          );
        })}
      </div>

      {espacos.length === 0 ? (
        <p className="text-muted-foreground">
          Nenhum espaço encontrado para este segmento.
        </p>
      ) : (
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {espacos.map((e) => (
            <li key={e.id}>
              <button
                type="button"
                onClick={() => onOpen(e)}
                className="block w-full text-left h-full rounded-md focus-visible:outline-none"
                aria-label={`Ver detalhes de ${e.nome}`}
              >
                <CardEspaco espaco={e} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

/* ---------- BLOCO DIFERENCIAL ---------- */
function Diferencial() {
  return (
    <section className="container-site pb-16 lg:pb-24">
      <div className="rounded-md border border-institutional/20 bg-institutional/5 p-8 lg:p-12 max-w-4xl mx-auto">
        <h2 className="font-display text-2xl md:text-3xl text-foreground text-balance">
          Cada ambiente tem um propósito.
        </h2>
        <div className="mt-5 space-y-3 text-muted-foreground leading-relaxed">
          <p>Uma biblioteca não existe apenas para guardar livros.</p>
          <p>Um laboratório não existe apenas para realizar experimentos.</p>
          <p>Um parque não existe apenas para brincar.</p>
          <p className="text-foreground">
            Cada espaço possui um papel importante na construção das
            experiências que ajudam nossos alunos a aprender, conviver,
            crescer e desenvolver seu potencial.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- DESTAQUE INSTITUCIONAL ---------- */
function Destaque() {
  return (
    <section className="bg-surface border-y border-border">
      <div className="container-site py-16 lg:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl text-balance">
            Uma infraestrutura a serviço da aprendizagem.
          </h2>
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Acreditamos que os espaços escolares devem apoiar o
              desenvolvimento integral dos alunos.
            </p>
            <p>
              Por isso, cada ambiente do Colégio Santo André é pensado
              para favorecer experiências significativas, fortalecer
              vínculos, estimular a curiosidade e contribuir para uma
              formação acadêmica e humana consistente.
            </p>
            <p>
              Mais do que ambientes físicos, são espaços onde histórias
              são construídas, amizades são fortalecidas e conhecimentos
              ganham significado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- CTA FINAL ---------- */
function CTAFinal() {
  return (
    <section className="bg-institutional text-institutional-foreground">
      <div className="container-site py-20 lg:py-28 text-center">
        <h2 className="font-display text-3xl md:text-5xl max-w-3xl mx-auto leading-tight text-balance">
          A melhor forma de conhecer nossos espaços é vivenciá-los.
        </h2>
        <p className="mt-5 text-base md:text-lg opacity-90 max-w-2xl mx-auto">
          Agende uma visita e descubra como cada ambiente contribui para
          a experiência educativa oferecida pelo Colégio Santo André.
        </p>
        <div className="mt-9">
          <Button
            asChild
            size="lg"
            className="bg-white text-institutional hover:bg-white/90"
          >
            <Link to="/agendar-visita">
              Agendar Visita <ArrowRight className="size-4 ml-1.5" aria-hidden />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

/* ---------- DETALHE — Dialog acessível (Radix) ---------- */
function DetalheModal({
  espaco,
  onClose,
}: {
  espaco: Espaco | null;
  onClose: () => void;
}) {
  return (
    <Dialog open={!!espaco} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-w-2xl p-0 overflow-hidden">
        {espaco && (
          <>
            <div
              className="aspect-[16/9] bg-institutional/5 grid place-items-center text-xs text-muted-foreground text-center px-6"
              role="img"
              aria-label={espaco.galeria[0]?.alt ?? `Imagem de ${espaco.nome}`}
            >
              Substituir por foto real do espaço
            </div>

            <DialogHeader className="px-6 pt-6">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                {espaco.segmentos.map((s) => (
                  <span
                    key={s}
                    className="text-[11px] rounded-xs bg-institutional/10 text-institutional px-2 py-0.5 font-medium"
                  >
                    {SEGMENTO_LABEL[s]}
                  </span>
                ))}
              </div>
              <DialogTitle className="font-display text-2xl text-left">
                {espaco.nome}
              </DialogTitle>
              <DialogDescription className="text-left">
                {espaco.descricaoCurta}
              </DialogDescription>
            </DialogHeader>

            <div className="px-6 pb-6 pt-4">
              <p className="text-sm text-foreground/90 leading-relaxed">
                {espaco.descricaoCompleta}
              </p>

              {espaco.destaques.length > 0 && (
                <>
                  <h3 className="mt-6 text-xs uppercase tracking-wider text-muted-foreground">
                    Destaques
                  </h3>
                  <ul className="mt-2 space-y-1.5 text-sm text-foreground/90 list-disc pl-5">
                    {espaco.destaques.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </>
              )}

              {espaco.galeria.length > 1 && (
                <>
                  <h3 className="mt-6 text-xs uppercase tracking-wider text-muted-foreground">
                    Galeria
                  </h3>
                  <ul className="mt-2 grid grid-cols-2 gap-2">
                    {espaco.galeria.map((g, i) => (
                      <li
                        key={i}
                        className="aspect-[4/3] rounded-sm bg-institutional/5 border border-border grid place-items-center text-[11px] text-muted-foreground text-center p-2"
                        role="img"
                        aria-label={g.alt}
                      >
                        Foto a ser adicionada
                      </li>
                    ))}
                  </ul>
                </>
              )}

              <div className="mt-7 flex flex-wrap gap-3">
                <Button
                  asChild
                  className="bg-institutional text-institutional-foreground hover:bg-institutional-dark"
                >
                  <Link to="/agendar-visita">Agendar Visita</Link>
                </Button>
                <Button variant="outline" onClick={onClose}>
                  <X className="size-4 mr-1.5" aria-hidden />
                  Fechar
                </Button>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
