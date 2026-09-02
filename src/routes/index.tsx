import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  GraduationCap,
  HandHeart,
  Sun,
  CalendarHeart,
  School,
  MessageCircle,
  Quote,
  BookOpenText,
  Sprout,
  Users,
  Compass,
  Sparkles,
  BookMarked,
  Trophy,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { SegmentoCard } from "@/components/site/SegmentoCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Colégio Santo André | Educação com acolhimento, valores e excelência" },
      {
        name: "description",
        content:
          "Conheça o Colégio Santo André: formação acadêmica, acolhimento, valores e estrutura para cada etapa da vida escolar. Agende uma visita.",
      },
      {
        property: "og:title",
        content: "Colégio Santo André | Educação com acolhimento, valores e excelência",
      },
      {
        property: "og:description",
        content:
          "Conheça o Colégio Santo André: formação acadêmica, acolhimento, valores e estrutura para cada etapa da vida escolar. Agende uma visita.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <Segmentos />
      <Diferenciais />
      <Depoimentos />
      <Infraestrutura />
      <VidaNoColegio />
      <Matriculas />
      <CTAFinal />
    </>
  );
}

/* ---------- 1. HERO ---------- */
function Hero() {
  return (
    <section className="bg-surface border-b border-border">
      <div className="container-site py-16 lg:py-24 grid gap-12 lg:grid-cols-[1.15fr_1fr] items-center">
        <div className="animate-fade-up">
          <div className="mb-4 text-xs uppercase tracking-[0.18em] text-institutional/80">
            Educação Infantil ao Ensino Médio
          </div>
          <h1 className="h-display-1 text-foreground">
            Formação que acolhe, educa e prepara para o futuro.
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-xl leading-relaxed">
            No Colégio Santo André, cada etapa da vida escolar é acompanhada
            com cuidado, excelência acadêmica e valores que ajudam seu filho
            a crescer com segurança.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="bg-institutional text-institutional-foreground hover:bg-institutional-dark"
            >
              <Link to="/agendar-visita">Quero conhecer o Colégio</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/matriculas">Conhecer Matrículas</Link>
            </Button>
          </div>
        </div>

        <div
          className="rounded-md bg-institutional/5 border border-institutional/15 aspect-[4/3] grid place-items-center text-center p-6 animate-fade-in"
          role="img"
          aria-label="Espaço reservado para foto de alunos do Colégio Santo André"
        >
          <div className="max-w-xs text-sm text-muted-foreground">
            <Sparkles className="size-6 mx-auto mb-3 text-institutional" aria-hidden />
            Substituir por foto real de crianças e jovens em ambiente escolar
            do Colégio Santo André.
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 2. SEGMENTOS ---------- */
function Segmentos() {
  return (
    <section className="container-site py-16 lg:py-24">
      <div className="max-w-2xl">
        <h2 className="h-display-2">
          Uma jornada completa para cada fase do seu filho.
        </h2>
        <p className="mt-3 text-muted-foreground">
          Do primeiro acolhimento à preparação para o futuro, cada segmento
          tem uma proposta pensada para o momento de vida do aluno.
        </p>
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 stagger-children">
        <SegmentoCard
          segmento="infantil"
          title="Educação Infantil"
          description="Um começo seguro, acolhedor e cheio de descobertas."
          to="/ensino/educacao-infantil"
          icon={<Sprout className="size-7" aria-hidden />}
        />
        <SegmentoCard
          segmento="fund1"
          title="Ensino Fundamental I"
          description="Aprender com autonomia, rotina e encantamento pelo conhecimento."
          to="/ensino/fundamental-i"
          icon={<BookOpenText className="size-7" aria-hidden />}
        />
        <SegmentoCard
          segmento="fund2"
          title="Ensino Fundamental II"
          description="Mais responsabilidade, aprofundamento e preparo para novos desafios."
          to="/ensino/fundamental-ii"
          icon={<Compass className="size-7" aria-hidden />}
        />
        <SegmentoCard
          segmento="medio"
          title="Ensino Médio"
          description="Projeto de vida, maturidade e preparação para o próximo passo."
          to="/ensino/ensino-medio"
          icon={<GraduationCap className="size-7" aria-hidden />}
        />
      </div>
    </section>
  );
}

/* ---------- 3. DIFERENCIAIS ---------- */
const diferenciais = [
  {
    icon: BookMarked,
    title: "Formação acadêmica consistente",
    desc: "Uma proposta pedagógica estruturada para desenvolver conhecimento, autonomia e responsabilidade em cada etapa.",
  },
  {
    icon: HandHeart,
    title: "Acolhimento e acompanhamento próximo",
    desc: "O aluno é visto em sua integralidade, com atenção ao desenvolvimento emocional, social e acadêmico.",
  },
  {
    icon: Sun,
    title: "Valores e formação humana",
    desc: "Uma educação confessional que valoriza respeito, convivência, solidariedade e propósito.",
  },
  {
    icon: Users,
    title: "Vida escolar ativa",
    desc: "Projetos, eventos e experiências que ampliam o aprendizado para além da sala de aula.",
  },
  {
    icon: School,
    title: "Estrutura preparada para cada fase",
    desc: "Ambientes pensados para favorecer segurança, aprendizagem, convivência e desenvolvimento.",
  },
];

function Diferenciais() {
  return (
    <section className="bg-surface-warm border-y border-border">
      <div className="container-site py-16 lg:py-24">
        <div className="max-w-2xl">
          <h2 className="h-display-2">
            Por que escolher o Colégio Santo André?
          </h2>
          <p className="mt-3 text-muted-foreground">
            Uma formação que une tradição, excelência acadêmica, cuidado
            humano e vida escolar significativa.
          </p>
        </div>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 stagger-children">
          {diferenciais.map((d) => (
            <li
              key={d.title}
              className="rounded-md bg-surface-elevated border border-border p-6 lg:p-7 card-lift"
            >
              <div className="grid size-14 place-items-center rounded-full bg-institutional/10 text-institutional">
                <d.icon className="size-6" strokeWidth={1.6} aria-hidden />
              </div>
              <h3 className="mt-5 font-display text-xl text-foreground">{d.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- 4. DEPOIMENTOS ---------- */
const depoimentos = [
  {
    nome: "Mariana S.",
    segmento: "Educação Infantil",
    texto:
      "Desde os primeiros dias, sentimos segurança no acolhimento. Nossa filha foi recebida com cuidado, carinho e muita atenção.",
    iniciais: "MS",
  },
  {
    nome: "André L.",
    segmento: "Ensino Fundamental I",
    texto:
      "Percebemos evolução na leitura, na autonomia e na rotina de estudos. A escola acompanha de perto cada etapa.",
    iniciais: "AL",
  },
  {
    nome: "Carla M.",
    segmento: "Ensino Médio",
    texto:
      "O Santo André ajudou nosso filho a amadurecer, pensar no futuro e se preparar com mais confiança para os próximos desafios.",
    iniciais: "CM",
  },
];

function Depoimentos() {
  return (
    <section className="container-site py-16 lg:py-24">
      <div className="max-w-2xl">
        <h2 className="font-display text-3xl md:text-4xl">
          Famílias que confiam no Santo André.
        </h2>
        <p className="mt-3 text-muted-foreground">
          A experiência de quem acompanha de perto a formação dos filhos.
        </p>
        <p className="mt-2 text-xs text-muted-foreground/70 italic">
          Depoimentos de exemplo — substituir por relatos reais de famílias.
        </p>
      </div>
      <ul className="mt-10 grid gap-5 md:grid-cols-3 stagger-children">
        {depoimentos.map((d) => (
          <li
            key={d.nome}
            className="rounded-md border border-border bg-surface-elevated p-6 lg:p-7 flex flex-col card-lift"
          >
            <Quote className="size-7 text-institutional/40" aria-hidden />
            <p className="mt-3 text-foreground leading-relaxed">{d.texto}</p>
            <div className="mt-6 pt-5 border-t border-border flex items-center gap-3">
              <div
                aria-hidden
                className="grid size-11 place-items-center rounded-full bg-institutional text-institutional-foreground font-display text-sm"
              >
                {d.iniciais}
              </div>
              <div>
                <div className="font-medium text-foreground">{d.nome}</div>
                <div className="text-xs text-muted-foreground">{d.segmento}</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ---------- 5. INFRAESTRUTURA ---------- */
const infra = {
  infantil: [
    {
      nome: "Espaço de acolhimento",
      frase: "Projetado para favorecer segurança, adaptação e descobertas.",
    },
    {
      nome: "Pátio sensorial",
      frase: "Ambiente lúdico que estimula o brincar e o desenvolvimento motor.",
    },
    {
      nome: "Sala multiuso infantil",
      frase: "Espaço para arte, música e atividades em grupo.",
    },
  ],
  fundamental: [
    {
      nome: "Ambientes de aprendizagem",
      frase: "Espaços que estimulam concentração, convivência e autonomia.",
    },
    {
      nome: "Biblioteca",
      frase: "Acervo selecionado para apoiar leitura, pesquisa e estudo.",
    },
    {
      nome: "Quadra poliesportiva",
      frase: "Estrutura para esporte, recreação e formação integral.",
    },
  ],
  medio: [
    {
      nome: "Laboratórios e salas especializadas",
      frase: "Recursos para aprofundar conhecimentos e preparar novos caminhos.",
    },
    {
      nome: "Sala de estudos",
      frase: "Ambiente reservado para concentração, pesquisa e revisão.",
    },
    {
      nome: "Espaços de projeto de vida",
      frase: "Apoio à construção de escolhas conscientes para o futuro.",
    },
  ],
} as const;

type InfraKey = keyof typeof infra;

function Infraestrutura() {
  const [tab, setTab] = useState<InfraKey>("infantil");

  return (
    <section className="bg-surface border-y border-border">
      <div className="container-site py-16 lg:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl md:text-4xl">
              Ambientes pensados para aprender, conviver e crescer.
            </h2>
            <p className="mt-3 text-muted-foreground">
              A infraestrutura do Colégio Santo André acompanha as necessidades
              de cada fase escolar.
            </p>
          </div>
          <Button asChild variant="outline" className="hidden sm:inline-flex">
            <Link to="/infraestrutura">
              Conhecer infraestrutura <ArrowRight className="size-4 ml-1.5" aria-hidden />
            </Link>
          </Button>
        </div>

        <Tabs value={tab} onValueChange={(v) => setTab(v as InfraKey)}>
          <TabsList className="bg-surface-elevated border border-border">
            <TabsTrigger value="infantil">Infantil</TabsTrigger>
            <TabsTrigger value="fundamental">Fundamental</TabsTrigger>
            <TabsTrigger value="medio">Médio</TabsTrigger>
          </TabsList>

          {(Object.keys(infra) as InfraKey[]).map((k) => (
            <TabsContent key={k} value={k} className="mt-8">
              <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {infra[k].map((item) => (
                  <li
                    key={item.nome}
                    className="rounded-md overflow-hidden border border-border bg-surface-elevated"
                  >
                    <div
                      className="aspect-[4/3] bg-institutional/5 grid place-items-center text-xs text-muted-foreground text-center px-4"
                      role="img"
                      aria-label={`Foto do espaço ${item.nome} (a ser adicionada)`}
                    >
                      Substituir por foto real do espaço
                    </div>
                    <div className="p-5">
                      <h3 className="font-display text-lg text-foreground">{item.nome}</h3>
                      <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                        {item.frase}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-8 sm:hidden">
          <Button asChild variant="outline" className="w-full">
            <Link to="/infraestrutura">Conhecer infraestrutura</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

/* ---------- 6. VIDA NO COLÉGIO ---------- */
const posts = [
  {
    categoria: "Eventos",
    titulo: "Festa da Família reúne comunidade escolar",
    data: "12 jun 2026",
    resumo:
      "Tarde de integração com apresentações dos alunos, oficinas e momentos de convivência entre famílias e equipe.",
    icon: CalendarHeart,
  },
  {
    categoria: "Projetos",
    titulo: "Projeto de leitura amplia repertório dos alunos",
    data: "03 jun 2026",
    resumo:
      "Iniciativa do Fundamental I incentiva o hábito da leitura e o compartilhamento de descobertas em sala.",
    icon: BookOpenText,
  },
  {
    categoria: "Conquistas",
    titulo: "Alunos do Ensino Médio se destacam em olimpíada",
    data: "21 mai 2026",
    resumo:
      "Resultado reflete o trabalho contínuo de aprofundamento acadêmico e preparação para desafios externos.",
    icon: Trophy,
  },
] as const;

function VidaNoColegio() {
  return (
    <section className="container-site py-16 lg:py-24">
      <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl">
            A vida escolar acontece todos os dias.
          </h2>
          <p className="mt-3 text-muted-foreground">
            Notícias, projetos, eventos e conquistas que mostram o cotidiano
            do Colégio Santo André.
          </p>
        </div>
        <Button asChild variant="outline" className="hidden sm:inline-flex">
          <Link to="/vida-no-colegio">
            Ver tudo <ArrowRight className="size-4 ml-1.5" aria-hidden />
          </Link>
        </Button>
      </div>

      <ul className="grid gap-5 md:grid-cols-3">
        {posts.map((p) => (
          <li
            key={p.titulo}
            className="rounded-md overflow-hidden border border-border bg-surface-elevated flex flex-col"
          >
            <div
              className="aspect-[16/10] bg-institutional/5 grid place-items-center text-institutional/40"
              role="img"
              aria-label={`Imagem ilustrativa do post: ${p.titulo}`}
            >
              <p.icon className="size-10" aria-hidden />
            </div>
            <div className="p-5 flex flex-col flex-1">
              <div className="flex items-center gap-2 text-xs">
                <span className="rounded-xs bg-institutional/10 text-institutional px-2 py-0.5 font-medium">
                  {p.categoria}
                </span>
                <span className="text-muted-foreground">{p.data}</span>
              </div>
              <h3 className="mt-3 font-display text-lg text-foreground">{p.titulo}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
                {p.resumo}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-8 sm:hidden">
        <Button asChild variant="outline" className="w-full">
          <Link to="/vida-no-colegio">Ver tudo</Link>
        </Button>
      </div>
    </section>
  );
}

/* ---------- 7. MATRÍCULAS ---------- */
function Matriculas() {
  // TODO: substituir pelo número real de WhatsApp do colégio
  const whatsappHref = "https://wa.me/5500000000000";

  return (
    <section className="bg-surface border-y border-border">
      <div className="container-site py-16 lg:py-24 grid gap-10 lg:grid-cols-[1.1fr_1fr] items-center">
        <div>
          <h2 className="font-display text-3xl md:text-4xl">
            Matrículas abertas para novas famílias.
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl">
            Conheça o processo, tire suas dúvidas e dê o primeiro passo para
            viver a experiência Santo André.
          </p>
          <p className="mt-5 text-foreground/90 max-w-xl">
            A matrícula não é concluída online. Nossa equipe entra em contato
            para orientar a família em cada etapa.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="bg-institutional text-institutional-foreground hover:bg-institutional-dark"
            >
              <Link to="/matriculas">Quero saber sobre matrículas</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-4 mr-1.5" aria-hidden />
                Vamos conversar no WhatsApp
              </a>
            </Button>
          </div>
        </div>

        <ol className="rounded-md border border-border bg-surface-elevated p-6 lg:p-8 space-y-5">
          {[
            { t: "Conversa inicial", d: "Entendemos o momento da família e o segmento de interesse." },
            { t: "Visita ao colégio", d: "Você conhece a estrutura, a equipe e a proposta pedagógica." },
            { t: "Orientações de matrícula", d: "Apresentação de documentos, valores e calendário." },
            { t: "Boas-vindas", d: "Recebemos a família para iniciar a jornada com tranquilidade." },
          ].map((step, i) => (
            <li key={step.t} className="flex gap-4">
              <span
                aria-hidden
                className="grid size-9 shrink-0 place-items-center rounded-full bg-institutional text-institutional-foreground font-display text-sm"
              >
                {i + 1}
              </span>
              <div>
                <div className="font-medium text-foreground">{step.t}</div>
                <p className="text-sm text-muted-foreground">{step.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------- 8. CTA FINAL ---------- */
function CTAFinal() {
  return (
    <section className="bg-institutional text-institutional-foreground">
      <div className="container-site py-20 lg:py-28 text-center">

        <h2 className="font-display text-3xl md:text-5xl max-w-3xl mx-auto leading-tight">
          O próximo passo do seu filho pode começar com uma visita.
        </h2>
        <p className="mt-5 text-base md:text-lg opacity-90 max-w-2xl mx-auto">
          Venha conhecer de perto os ambientes, a equipe e a proposta
          pedagógica do Colégio Santo André.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Button
            asChild
            size="lg"
            className="bg-white text-institutional hover:bg-white/90"
          >
            <Link to="/agendar-visita">
              Quero conhecer o Colégio <ArrowRight className="size-4 ml-1.5" aria-hidden />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="bg-transparent border-white/40 text-white hover:bg-white/10 hover:text-white"
          >
            <Link to="/familia">Fale com nossa equipe</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
