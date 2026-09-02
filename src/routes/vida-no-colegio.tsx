import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Sparkles,
  Newspaper,
  CalendarDays,
  Lightbulb,
  Trophy,
  HeartHandshake,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  CardPost,
  CardEvento,
  CardProjeto,
  CardConquista,
  Busca,
  FiltroCategoria,
  FiltroTags,
  listarPosts,
  formatarData,
} from "@/components/editorial";
import type { Post, Evento, Projeto, Conquista } from "@/content/types";
import {
  CATEGORIA_LABEL,
  TAGS_SUGERIDAS,
  type Categoria,
  type Tag,
} from "@/content/taxonomy";
import { breadcrumbSchema } from "@/lib/seo";

export const Route = createFileRoute("/vida-no-colegio")({
  head: () => ({
    meta: [
      { title: "Vida no Colégio | Colégio Santo André" },
      {
        name: "description",
        content:
          "Conheça os projetos, eventos, conquistas e experiências que fazem parte da vida escolar no Colégio Santo André.",
      },
      { property: "og:title", content: "Vida no Colégio | Colégio Santo André" },
      {
        property: "og:description",
        content:
          "Projetos, eventos, conquistas e experiências que fazem parte da jornada dos nossos alunos.",
      },
      { property: "og:url", content: "/vida-no-colegio" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/vida-no-colegio" }],
    scripts: [
      breadcrumbSchema([
        { name: "Início", href: "/" },
        { name: "Vida no Colégio", href: "/vida-no-colegio" },
      ]),
    ],
  }),
  component: VidaNoColegioPage,
});

/* ---------------- Dados de exemplo (placeholders estruturados) ---------------- */
/* Todos os conteúdos abaixo são fictícios e marcados como exemplo. */

const EXEMPLO = "[Exemplo] ";

const POSTS: Post[] = [
  {
    id: "p1",
    slug: "projeto-de-ciencias-agua",
    titulo: EXEMPLO + "Projeto de Ciências investiga o ciclo da água",
    resumo:
      "Alunos do Fundamental I observam, experimentam e registram descobertas sobre a água em um projeto interdisciplinar.",
    conteudo: "",
    imagem: { src: "", alt: "Alunos realizando experimentos sobre o ciclo da água" },
    categoria: "projetos",
    tags: ["Ciências", "Tecnologia"],
    data: "2026-06-10",
    autor: { nome: "Equipe Pedagógica" },
    segmento: "fund1",
    seo: { title: "Projeto de Ciências", description: "Investigação sobre o ciclo da água." },
  },
  {
    id: "p2",
    slug: "feira-cultural-2026",
    titulo: EXEMPLO + "Feira Cultural reúne famílias em torno das tradições",
    resumo:
      "Mostra com apresentações, exposições e oficinas conduzidas pelos próprios alunos.",
    conteudo: "",
    imagem: { src: "", alt: "Pátio do colégio durante a Feira Cultural" },
    categoria: "eventos",
    tags: ["Feira", "Mostra Cultural"],
    data: "2026-06-04",
    autor: { nome: "Equipe de Eventos" },
    seo: { title: "Feira Cultural", description: "Mostra com famílias e alunos." },
  },
  {
    id: "p3",
    slug: "olimpiada-de-matematica",
    titulo: EXEMPLO + "Alunos conquistam medalhas em Olimpíada de Matemática",
    resumo:
      "Estudantes do Fundamental II e do Ensino Médio são premiados em competição nacional.",
    conteudo: "",
    imagem: { src: "", alt: "Alunos premiados com medalhas" },
    categoria: "conquistas",
    tags: ["Olimpíada"],
    data: "2026-05-28",
    autor: { nome: "Coordenação" },
    segmento: "medio",
    seo: { title: "Olimpíada de Matemática", description: "Medalhas para os alunos." },
  },
  {
    id: "p4",
    slug: "campanha-solidaria-inverno",
    titulo: EXEMPLO + "Campanha Solidária arrecada agasalhos no inverno",
    resumo:
      "Iniciativa da Pastoral mobiliza famílias e alunos em ação de cuidado com a comunidade.",
    conteudo: "",
    imagem: { src: "", alt: "Caixas com doações organizadas pelos alunos" },
    categoria: "pastoral",
    tags: ["Solidariedade"],
    data: "2026-05-20",
    autor: { nome: "Pastoral Escolar" },
    seo: { title: "Campanha Solidária", description: "Arrecadação de agasalhos." },
  },
  {
    id: "p5",
    slug: "resultado-enem-2025",
    titulo: EXEMPLO + "Resultado ENEM 2025 confirma trajetória do Ensino Médio",
    resumo:
      "Turmas do 3º ano alcançam médias consistentes nas áreas de conhecimento.",
    conteudo: "",
    imagem: { src: "", alt: "Alunos do 3º ano em momento de estudo" },
    categoria: "noticias",
    tags: ["ENEM"],
    data: "2026-05-15",
    autor: { nome: "Coordenação do Médio" },
    segmento: "medio",
    seo: { title: "Resultado ENEM", description: "Trajetória do Ensino Médio." },
  },
  {
    id: "p6",
    slug: "semana-da-familia",
    titulo: EXEMPLO + "Semana da Família celebra vínculos e convivência",
    resumo:
      "Programação especial reúne pais, mães e responsáveis em encontros formativos e vivências.",
    conteudo: "",
    imagem: { src: "", alt: "Famílias reunidas durante a Semana da Família" },
    categoria: "eventos",
    tags: ["Mostra Cultural"],
    data: "2026-05-08",
    autor: { nome: "Equipe de Eventos" },
    seo: { title: "Semana da Família", description: "Encontros com famílias." },
  },
  {
    id: "p7",
    slug: "clube-de-leitura",
    titulo: EXEMPLO + "Clube de Leitura forma comunidade entre os alunos",
    resumo:
      "Encontros semanais aproximam alunos de diferentes turmas em torno da literatura.",
    conteudo: "",
    imagem: { src: "", alt: "Alunos lendo em roda na biblioteca" },
    categoria: "projetos",
    tags: ["Literatura"],
    data: "2026-04-30",
    autor: { nome: "Equipe Pedagógica" },
    segmento: "fund2",
    seo: { title: "Clube de Leitura", description: "Encontros literários semanais." },
  },
  {
    id: "p8",
    slug: "jogos-internos",
    titulo: EXEMPLO + "Jogos Internos reúnem segmentos em torno do esporte",
    resumo:
      "Competição interna fortalece o espírito de equipe e a convivência entre as turmas.",
    conteudo: "",
    imagem: { src: "", alt: "Alunos em quadra durante os Jogos Internos" },
    categoria: "eventos",
    tags: ["Esporte"],
    data: "2026-04-22",
    autor: { nome: "Equipe de Esportes" },
    seo: { title: "Jogos Internos", description: "Competição esportiva entre turmas." },
  },
  {
    id: "p9",
    slug: "missa-de-encerramento",
    titulo: EXEMPLO + "Celebração marca encerramento do bimestre",
    resumo:
      "Momento de oração e gratidão reúne a comunidade escolar no início de uma nova etapa.",
    conteudo: "",
    imagem: { src: "", alt: "Comunidade reunida em celebração" },
    categoria: "pastoral",
    tags: ["Solidariedade"],
    data: "2026-04-15",
    autor: { nome: "Pastoral Escolar" },
    seo: { title: "Celebração", description: "Encerramento do bimestre." },
  },
  {
    id: "p10",
    slug: "mostra-de-tecnologia",
    titulo: EXEMPLO + "Mostra de Tecnologia apresenta projetos dos alunos",
    resumo:
      "Estudantes apresentam protótipos, jogos e soluções desenvolvidos ao longo do semestre.",
    conteudo: "",
    imagem: { src: "", alt: "Alunos apresentando projetos de tecnologia" },
    categoria: "projetos",
    tags: ["Tecnologia"],
    data: "2026-04-08",
    autor: { nome: "Equipe Pedagógica" },
    segmento: "fund2",
    seo: { title: "Mostra de Tecnologia", description: "Projetos dos alunos." },
  },
  {
    id: "p11",
    slug: "viagem-pedagogica",
    titulo: EXEMPLO + "Viagem pedagógica leva turmas ao interior",
    resumo:
      "Saída de campo aprofunda estudos de história, geografia e meio ambiente.",
    conteudo: "",
    imagem: { src: "", alt: "Alunos em viagem pedagógica" },
    categoria: "noticias",
    tags: ["Viagem"],
    data: "2026-03-30",
    autor: { nome: "Coordenação" },
    segmento: "fund2",
    seo: { title: "Viagem pedagógica", description: "Saída de campo." },
  },
  {
    id: "p12",
    slug: "olimpiada-de-portugues",
    titulo: EXEMPLO + "Aluna é finalista em Olimpíada de Língua Portuguesa",
    resumo:
      "Texto produzido em sala de aula avança às etapas nacionais do concurso.",
    conteudo: "",
    imagem: { src: "", alt: "Aluna com certificado da olimpíada" },
    categoria: "conquistas",
    tags: ["Olimpíada", "Literatura"],
    data: "2026-03-22",
    autor: { nome: "Coordenação" },
    segmento: "fund2",
    seo: { title: "Olimpíada de Português", description: "Finalista nacional." },
  },
];

/* Eventos e projetos usados no bloco de destaques para variar o layout. */

const EVENTO_DESTAQUE: Evento = {
  id: "ev1",
  slug: "feira-cultural-2026",
  titulo: EXEMPLO + "Feira Cultural 2026",
  descricao:
    "Apresentações, exposições e oficinas conduzidas pelos próprios alunos em uma manhã aberta às famílias.",
  data: "2026-08-23",
  horario: "9h00",
  local: "Colégio Santo André — Pátio Central",
  imagem: { src: "", alt: "Pátio do colégio preparado para a Feira Cultural" },
  categoria: "eventos",
  tags: ["Feira", "Mostra Cultural"],
  seo: {
    title: "Feira Cultural 2026",
    description: "Mostra anual aberta às famílias.",
  },
};

const PROJETO_DESTAQUE: Projeto = {
  id: "pr1",
  slug: "projeto-de-ciencias-agua",
  titulo: EXEMPLO + "Projeto de Ciências — Ciclo da Água",
  objetivo: "Investigar fenômenos naturais a partir da observação e experimentação.",
  descricao:
    "Projeto interdisciplinar do Fundamental I que integra Ciências, Língua Portuguesa e Artes.",
  segmentos: ["fund1"],
  galeria: [{ src: "", alt: "Experimentos sobre o ciclo da água" }],
  resultados: [
    "Diário de bordo coletivo",
    "Maquetes apresentadas às famílias",
  ],
  tags: ["Ciências"],
  seo: {
    title: "Projeto de Ciências",
    description: "Investigação interdisciplinar.",
  },
};

const CONQUISTA_DESTAQUE: Conquista = {
  id: "c1",
  slug: "olimpiada-de-matematica",
  titulo: EXEMPLO + "Medalhas na Olimpíada de Matemática",
  alunoOuGrupo: "Alunos do Fundamental II e Ensino Médio",
  descricao:
    "Estudantes do colégio receberam medalhas em competição nacional após meses de preparação.",
  data: "2026-05-28",
  imagem: { src: "", alt: "Alunos premiados com medalhas" },
  segmento: "medio",
  tags: ["Olimpíada"],
  seo: {
    title: "Olimpíada de Matemática",
    description: "Medalhas para os alunos.",
  },
};

/* ---------------- Página ---------------- */

const PER_PAGE = 6;

function VidaNoColegioPage() {
  const [busca, setBusca] = useState("");
  const [categoria, setCategoria] = useState<Categoria | "todas">("todas");
  const [tagsSel, setTagsSel] = useState<Tag[]>([]);
  const [page, setPage] = useState(1);

  const filtrosKey = `${busca}|${categoria}|${tagsSel.join(",")}`;

  const resultado = useMemo(() => {
    // Listagem base por categoria/busca/paginação
    const base = listarPosts(
      POSTS,
      {
        categoria: categoria === "todas" ? undefined : categoria,
        q: busca || undefined,
        page,
      },
      PER_PAGE,
    );
    // Filtro adicional por tags (intersecção)
    if (tagsSel.length === 0) return base;
    const filtrados = POSTS.filter(
      (p) =>
        (categoria === "todas" || p.categoria === categoria) &&
        (busca
          ? p.titulo.toLowerCase().includes(busca.toLowerCase()) ||
            p.resumo.toLowerCase().includes(busca.toLowerCase())
          : true) &&
        tagsSel.every((t) => p.tags.includes(t)),
    ).sort((a, b) => (a.data < b.data ? 1 : -1));
    const start = (page - 1) * PER_PAGE;
    return {
      itens: filtrados.slice(start, start + PER_PAGE),
      page,
      perPage: PER_PAGE,
      total: filtrados.length,
    };
  }, [busca, categoria, tagsSel, page]);

  // Reset paginação ao mudar filtros
  const onChangeFiltros = (fn: () => void) => {
    fn();
    setPage(1);
  };

  const totalPages = Math.max(1, Math.ceil(resultado.total / PER_PAGE));

  const recentes = useMemo(
    () => [...POSTS].sort((a, b) => (a.data < b.data ? 1 : -1)),
    [],
  );
  const principal = recentes[0];
  const secundarios = recentes.slice(1, 4);

  return (
    <>
      <Hero />
      <Destaques principal={principal} secundarios={secundarios} />
      <Explorar
        busca={busca}
        onBusca={(v) => onChangeFiltros(() => setBusca(v))}
        categoria={categoria}
        onCategoria={(v) => onChangeFiltros(() => setCategoria(v))}
        tagsSel={tagsSel}
        onToggleTag={(t) =>
          onChangeFiltros(() =>
            setTagsSel((prev) =>
              prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t],
            ),
          )
        }
        itens={resultado.itens}
        total={resultado.total}
        page={page}
        totalPages={totalPages}
        onPage={setPage}
        filtrosKey={filtrosKey}
      />
      <Categorias />
      <CTAFinal />
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
            Vida no Colégio
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-foreground text-balance">
            A vida escolar acontece todos os dias.
          </h1>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
            Projetos, eventos, conquistas e experiências que fazem parte da
            jornada dos nossos alunos.
          </p>
        </div>

        <div
          className="rounded-md bg-institutional/5 border border-institutional/15 aspect-[4/3] grid place-items-center text-center p-6"
          role="img"
          aria-label="Espaço reservado para foto institucional da vida escolar do Colégio Santo André"
        >
          <div className="max-w-xs text-sm text-muted-foreground">
            <Sparkles
              className="size-6 mx-auto mb-3 text-institutional"
              aria-hidden
            />
            Substituir por foto institucional da vida escolar.
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 2. DESTAQUES RECENTES ---------- */
function Destaques({
  principal,
  secundarios,
}: {
  principal: Post;
  secundarios: Post[];
}) {
  return (
    <section className="container-site py-16 lg:py-24" aria-labelledby="destaques-title">
      <header className="mb-10 flex items-end justify-between gap-6 flex-wrap">
        <div>
          <div className="text-xs uppercase tracking-[0.18em] text-institutional/80 mb-2">
            Destaques recentes
          </div>
          <h2
            id="destaques-title"
            className="font-display text-3xl md:text-4xl text-foreground text-balance max-w-2xl"
          >
            O que está acontecendo agora no colégio.
          </h2>
        </div>
      </header>

      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        {/* Principal */}
        <article
          className="rounded-md overflow-hidden border border-border bg-surface-elevated flex flex-col"
          aria-label="Destaque principal"
        >
          <div
            className="aspect-[16/9] bg-institutional/5 grid place-items-center text-xs text-muted-foreground text-center px-4"
            role="img"
            aria-label={principal.imagem.alt}
          >
            Foto destaque a ser adicionada
          </div>
          <div className="p-6 md:p-8 flex flex-col flex-1">
            <div className="flex items-center gap-2 text-xs">
              <span className="rounded-xs bg-institutional text-institutional-foreground px-2 py-0.5 font-medium">
                {CATEGORIA_LABEL[principal.categoria]}
              </span>
              <time
                dateTime={principal.data}
                className="text-muted-foreground"
              >
                {formatarData(principal.data)}
              </time>
            </div>
            <h3 className="mt-4 font-display text-2xl md:text-3xl text-foreground text-balance">
              {principal.titulo}
            </h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              {principal.resumo}
            </p>
          </div>
        </article>

        {/* Secundários — mix de componentes editoriais existentes */}
        <div className="grid gap-6">
          {secundarios[0] && <CardPost post={secundarios[0]} />}
          <CardEvento evento={EVENTO_DESTAQUE} />
          <CardConquista conquista={CONQUISTA_DESTAQUE} />
        </div>
      </div>

      {/* Projeto destaque em largura completa, abaixo */}
      <div className="mt-6">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <CardProjeto projeto={PROJETO_DESTAQUE} />
          </div>
          <div className="lg:col-span-2 grid gap-6 sm:grid-cols-2">
            {secundarios.slice(1, 3).map((p) => (
              <CardPost key={p.id} post={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 3. EXPLORAR CONTEÚDOS ---------- */
function Explorar({
  busca,
  onBusca,
  categoria,
  onCategoria,
  tagsSel,
  onToggleTag,
  itens,
  total,
  page,
  totalPages,
  onPage,
  filtrosKey,
}: {
  busca: string;
  onBusca: (v: string) => void;
  categoria: Categoria | "todas";
  onCategoria: (v: Categoria | "todas") => void;
  tagsSel: Tag[];
  onToggleTag: (t: Tag) => void;
  itens: Post[];
  total: number;
  page: number;
  totalPages: number;
  onPage: (p: number) => void;
  filtrosKey: string;
}) {
  return (
    <section
      className="bg-surface border-y border-border"
      aria-labelledby="explorar-title"
    >
      <div className="container-site py-16 lg:py-24">
        <header className="mb-8">
          <div className="text-xs uppercase tracking-[0.18em] text-institutional/80 mb-2">
            Explorar conteúdos
          </div>
          <h2
            id="explorar-title"
            className="font-display text-3xl md:text-4xl text-foreground text-balance max-w-2xl"
          >
            Encontre por categoria, tema ou palavra-chave.
          </h2>
        </header>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col lg:flex-row lg:items-center gap-4 justify-between">
            <Busca
              value={busca}
              onChange={onBusca}
              placeholder="Buscar por palavra-chave…"
              label="Buscar na Vida no Colégio"
            />
            <FiltroCategoria value={categoria} onChange={onCategoria} />
          </div>

          <FiltroTags
            tags={[...TAGS_SUGERIDAS]}
            selected={tagsSel}
            onToggle={onToggleTag}
          />
        </div>

        <div
          className="mt-10"
          aria-live="polite"
          aria-atomic="true"
          key={filtrosKey}
        >
          <p className="text-sm text-muted-foreground mb-6">
            {total === 0
              ? "Nenhum conteúdo encontrado para os filtros atuais."
              : `${total} conteúdo${total > 1 ? "s" : ""} encontrado${total > 1 ? "s" : ""}.`}
          </p>

          {itens.length > 0 && (
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {itens.map((p) => (
                <li key={p.id}>
                  <CardPost post={p} />
                </li>
              ))}
            </ul>
          )}

          {totalPages > 1 && (
            <nav
              className="mt-10 flex items-center justify-center gap-2"
              aria-label="Paginação dos conteúdos"
            >
              <Button
                variant="outline"
                size="sm"
                disabled={page === 1}
                onClick={() => onPage(page - 1)}
              >
                Anterior
              </Button>
              {Array.from({ length: totalPages }).map((_, i) => {
                const n = i + 1;
                const ativo = n === page;
                return (
                  <button
                    key={n}
                    type="button"
                    aria-current={ativo ? "page" : undefined}
                    onClick={() => onPage(n)}
                    className={
                      "min-w-9 h-9 rounded-sm text-sm font-medium border transition-colors " +
                      (ativo
                        ? "bg-institutional text-institutional-foreground border-institutional"
                        : "bg-surface-elevated text-foreground border-border hover:bg-accent")
                    }
                  >
                    {n}
                  </button>
                );
              })}
              <Button
                variant="outline"
                size="sm"
                disabled={page === totalPages}
                onClick={() => onPage(page + 1)}
              >
                Próxima
              </Button>
            </nav>
          )}
        </div>
      </div>
    </section>
  );
}

/* ---------- 4. CATEGORIAS ---------- */

type CategoriaCard = {
  key: Categoria;
  icone: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
  descricao: string;
};

const CATEGORIAS_VISUAIS: CategoriaCard[] = [
  {
    key: "noticias",
    icone: Newspaper,
    descricao: "Acompanhe os comunicados e atualizações do colégio.",
  },
  {
    key: "eventos",
    icone: CalendarDays,
    descricao: "Datas, celebrações e mostras abertas à comunidade.",
  },
  {
    key: "projetos",
    icone: Lightbulb,
    descricao: "Iniciativas pedagógicas que dão sentido ao aprendizado.",
  },
  {
    key: "conquistas",
    icone: Trophy,
    descricao: "Resultados e reconhecimentos dos nossos alunos.",
  },
  {
    key: "pastoral",
    icone: HeartHandshake,
    descricao: "Vivências de fé, solidariedade e cuidado com o outro.",
  },
];

function Categorias() {
  return (
    <section
      className="container-site py-16 lg:py-24"
      aria-labelledby="categorias-title"
    >
      <header className="mb-10">
        <div className="text-xs uppercase tracking-[0.18em] text-institutional/80 mb-2">
          Categorias
        </div>
        <h2
          id="categorias-title"
          className="font-display text-3xl md:text-4xl text-foreground text-balance max-w-2xl"
        >
          Cinco formas de explorar a vida escolar.
        </h2>
      </header>

      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {CATEGORIAS_VISUAIS.map(({ key, icone: Icone, descricao }) => (
          <li key={key}>
            <article className="h-full rounded-md border border-border bg-surface-elevated p-6 flex flex-col">
              <div className="size-10 rounded-sm bg-institutional/10 text-institutional grid place-items-center">
                <Icone className="size-5" aria-hidden />
              </div>
              <h3 className="mt-4 font-display text-xl text-foreground">
                {CATEGORIA_LABEL[key]}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
                {descricao}
              </p>
              <a
                href={`#explorar-${key}`}
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById("explorar-title");
                  el?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-institutional hover:underline"
              >
                Ver {CATEGORIA_LABEL[key].toLowerCase()}
                <ArrowRight className="size-4" aria-hidden />
              </a>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ---------- 5. CTA FINAL ---------- */
function CTAFinal() {
  return (
    <section className="bg-institutional text-institutional-foreground">
      <div className="container-site py-20 lg:py-28 text-center">
        <h2 className="font-display text-3xl md:text-5xl max-w-3xl mx-auto leading-tight text-balance">
          Viva essa rotina de perto.
        </h2>
        <p className="mt-5 text-base md:text-lg opacity-90 max-w-2xl mx-auto">
          A melhor forma de conhecer a vida no Colégio Santo André é vir até
          aqui e sentir o dia a dia.
        </p>
        <div className="mt-9">
          <Button
            asChild
            size="lg"
            className="bg-white text-institutional hover:bg-white/90"
          >
            <Link to="/agendar-visita">
              Agendar Visita{" "}
              <ArrowRight className="size-4 ml-1.5" aria-hidden />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
