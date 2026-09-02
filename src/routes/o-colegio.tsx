import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Compass,
  Eye,
  HeartHandshake,
  Sparkles,
  GraduationCap,
  BookOpen,
  ShieldCheck,
  Users,
  Building2,
  Calendar,
  Leaf,
  Scale,
  Sun,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/o-colegio")({
  head: () => ({
    meta: [
      { title: "O Colégio | Colégio Santo André" },
      {
        name: "description",
        content:
          "Conheça a história, a missão, os valores, a proposta educacional e os diferenciais do Colégio Santo André — mais de um século formando pessoas para a vida.",
      },
      { property: "og:title", content: "O Colégio | Colégio Santo André" },
      {
        property: "og:description",
        content:
          "História, missão, visão, valores, proposta educacional e diferenciais do Colégio Santo André.",
      },
      { property: "og:url", content: "/o-colegio" },
    ],
    links: [{ rel: "canonical", href: "/o-colegio" }],
  }),
  component: OColegio,
});

function OColegio() {
  return (
    <>
      <Hero />
      <Historia />
      <CTABlock
        headline="A melhor maneira de conhecer nossa história é viver um pouco dela."
        texto="Venha visitar o Colégio Santo André, conhecer nossos espaços, conversar com nossa equipe e descobrir como podemos acompanhar o desenvolvimento do seu filho."
      />
      <MVV />
      <Valores />
      <CTABlock
        headline="Valores que orientam a formação e acompanham a vida inteira."
        texto="Conheça de perto como esses princípios fazem parte da experiência educativa do Colégio Santo André."
      />
      <Proposta />
      <SistemaEnsino />
      <CTABlock
        headline="Educar é preparar para o presente e para o futuro."
        texto="Conheça a proposta educacional que orienta cada etapa da formação dos nossos alunos."
      />
      <Diferenciais />
      <CTAFinal />
    </>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section className="bg-surface border-b border-border">
      <div className="container-site py-16 lg:py-24 grid gap-12 lg:grid-cols-[1.15fr_1fr] items-center">
        <div className="animate-fade-up">
          <div className="mb-4 text-xs uppercase tracking-[0.18em] text-institutional/80">
            O Colégio
          </div>
          <h1 className="h-display-1 text-foreground">
            Mais de um século formando pessoas para a vida.
          </h1>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
            Desde 1914, o Colégio Santo André faz parte da história de
            Jaboticabal, unindo excelência acadêmica, formação humana e
            valores que acompanham os alunos dentro e fora da escola.
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
              <Link to="/ensino">Conhecer nossa proposta</Link>
            </Button>
          </div>
        </div>

        <div
          className="rounded-md bg-institutional/5 border border-institutional/15 aspect-[4/3] grid place-items-center text-center p-6 animate-fade-in"
          role="img"
          aria-label="Espaço reservado para foto institucional do Colégio Santo André"
        >
          <div className="max-w-xs text-sm text-muted-foreground">
            <Sparkles className="size-6 mx-auto mb-3 text-institutional" aria-hidden />
            Substituir por foto institucional real — fachada, comunidade
            ou momento marcante do Colégio Santo André.
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- NOSSA HISTÓRIA ---------- */
const historiaParagrafos = [
  "A história do Colégio Santo André nasceu de uma missão que atravessou séculos, fronteiras e gerações.",
  "Suas origens remontam ao século XIII, quando surgiu, na Bélgica, a Congregação de Santo André, inspirada pelo acolhimento, pelo serviço e pelo compromisso com a formação humana. Desde então, a educação tornou-se uma das principais formas de concretizar esse propósito: ajudar pessoas a desenvolver seus talentos, construir conhecimento e contribuir positivamente para o mundo.",
  "Em 1914, essa missão chegou a Jaboticabal pelas mãos de cinco religiosas que trouxeram consigo muito mais do que um projeto educacional. Trouxeram a convicção de que educar é transformar vidas e de que cada aluno merece ser acompanhado com atenção, respeito e cuidado.",
  "Os primeiros passos foram simples, mas carregados de significado. Em uma cidade em crescimento, começou a ser construída uma obra educacional que acompanharia a história de inúmeras famílias e se tornaria parte da própria trajetória da comunidade jaboticabalense.",
  "Ao longo das décadas, milhares de alunos passaram pelo Colégio Santo André. Aqui fizeram amigos, descobriram vocações, superaram desafios, celebraram conquistas e deram os primeiros passos na construção de seus projetos de vida. Cada geração deixou sua marca e ajudou a construir a identidade de uma escola que soube preservar seus valores sem deixar de evoluir com o tempo.",
  "Essa combinação entre tradição e renovação continua sendo uma das características mais marcantes do Santo André. A escola cresceu, modernizou seus espaços, atualizou suas práticas pedagógicas e acompanhou as transformações da sociedade, mantendo viva a essência que inspirou sua fundação: formar pessoas por meio de uma educação sólida, humana e significativa.",
  "Mais do que transmitir conteúdos, acreditamos que a educação deve preparar os alunos para compreender o mundo, conviver com respeito, fazer escolhas responsáveis e desenvolver plenamente suas capacidades. Por isso, cada etapa da jornada escolar é pensada para promover não apenas o aprendizado acadêmico, mas também o crescimento humano, social e ético.",
];

const historiaPessoas = [
  "De educadores que dedicaram seu talento e sua vocação à formação de novas gerações.",
  "De famílias que confiaram seus filhos aos nossos cuidados.",
  "De alunos que transformaram aprendizado em conquistas, sonhos em projetos e desafios em oportunidades de crescimento.",
];

function Historia() {
  return (
    <section id="nossa-historia" className="container-site py-16 lg:py-24 scroll-mt-24">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] items-start">
        <div
          className="rounded-md bg-institutional/5 border border-institutional/15 aspect-[4/5] grid place-items-center text-center p-6 order-2 lg:order-1 lg:sticky lg:top-24"
          role="img"
          aria-label="Espaço reservado para foto histórica do Colégio Santo André"
        >
          <div className="max-w-xs text-sm text-muted-foreground">
            Substituir por foto histórica ou imagem editorial do colégio.
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="text-xs uppercase tracking-[0.18em] text-institutional/80 mb-3">
            Nossa história
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-balance">
            Uma história construída pelo cuidado, pela educação e pelo
            compromisso com as pessoas.
          </h2>

          <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed max-w-2xl">
            {historiaParagrafos.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <p className="mt-8 font-display text-xl text-foreground">
            Nossa história é feita de pessoas.
          </p>
          <ul className="mt-4 space-y-3 max-w-2xl">
            {historiaPessoas.map((p) => (
              <li
                key={p}
                className="relative pl-5 text-muted-foreground leading-relaxed before:absolute before:left-0 before:top-2.5 before:size-1.5 before:rounded-full before:bg-institutional"
              >
                {p}
              </li>
            ))}
          </ul>

          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed max-w-2xl">
            <p>
              Mais de um século depois, continuamos olhando para o futuro
              com a mesma convicção que guiou nossos primeiros passos:
              educar vai muito além de ensinar conteúdos. Significa formar
              pessoas preparadas para aprender ao longo da vida, construir
              seu próprio caminho e deixar uma contribuição positiva para
              a sociedade.
            </p>
            <p className="text-foreground font-medium">
              É essa missão que continua inspirando o Colégio Santo André
              todos os dias.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- MISSÃO, VISÃO E VALORES ---------- */
const mvv = [
  {
    icon: Compass,
    title: "Nossa Missão",
    desc: "Promover uma educação de excelência comprometida com a formação integral dos alunos, desenvolvendo competências acadêmicas, humanas, sociais e espirituais que os preparem para atuar com responsabilidade, ética e solidariedade na sociedade.",
  },
  {
    icon: Eye,
    title: "Nossa Visão",
    desc: "Ser referência em educação transformadora, formando pessoas capazes de reinventar a si mesmas, contribuir positivamente para a sociedade e responder aos desafios do seu tempo com conhecimento, sensibilidade e propósito.",
  },
] as const;

function MVV() {
  return (
    <section id="missao-visao-valores" className="bg-surface border-y border-border scroll-mt-24">
      <div className="container-site py-16 lg:py-24">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.18em] text-institutional/80 mb-3">
            Missão, Visão e Valores
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-balance">
            Educar é formar pessoas capazes de transformar o mundo.
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Nossa missão vai além da aprendizagem acadêmica. Buscamos
            desenvolver pessoas conscientes, responsáveis, solidárias e
            preparadas para construir um futuro melhor.
          </p>
        </div>

        <ul className="mt-10 grid gap-6 md:grid-cols-2 stagger-children">
          {mvv.map((c) => (
            <li
              key={c.title}
              className="rounded-md border border-border bg-surface-elevated p-6 lg:p-8 flex flex-col card-lift"
            >
              <div className="grid size-12 place-items-center rounded-md bg-institutional/10 text-institutional">
                <c.icon className="size-5" aria-hidden />
              </div>
              <h3 className="mt-5 font-display text-xl text-foreground">{c.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const valores = [
  {
    icon: HeartHandshake,
    title: "Dignidade Humana",
    desc: "Reconhecemos o valor único de cada pessoa e promovemos relações baseadas no respeito e na acolhida.",
  },
  {
    icon: Users,
    title: "Solidariedade",
    desc: "Educamos para o cuidado com o próximo e para o compromisso com a construção de uma sociedade mais justa.",
  },
  {
    icon: ShieldCheck,
    title: "Ética",
    desc: "Incentivamos atitudes responsáveis, honestas e coerentes com os valores que defendemos.",
  },
  {
    icon: Sun,
    title: "Esperança",
    desc: "Acreditamos no potencial de transformação presente em cada aluno e em cada geração.",
  },
  {
    icon: Scale,
    title: "Justiça",
    desc: "Promovemos o senso de responsabilidade social e o compromisso com o bem comum.",
  },
  {
    icon: Leaf,
    title: "Cuidado com a Casa Comum",
    desc: "Desenvolvemos a consciência ambiental e o respeito pela criação como parte da formação humana.",
  },
] as const;

function Valores() {
  return (
    <section className="bg-surface-warm border-y border-border">
      <div className="container-site py-16 lg:py-24">
        <div className="max-w-2xl">
          <h2 className="h-display-2">
            Os valores que orientam nossa caminhada
          </h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Acreditamos que a educação acontece todos os dias, por meio das
            relações, das escolhas e dos exemplos que compartilhamos dentro
            da comunidade escolar.
          </p>
        </div>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 stagger-children">
          {valores.map((v) => (
            <li
              key={v.title}
              className="rounded-md border border-border bg-surface-elevated p-6 flex flex-col card-lift"
            >
              <div className="grid size-12 place-items-center rounded-md bg-institutional/10 text-institutional">
                <v.icon className="size-5" aria-hidden />
              </div>
              <h3 className="mt-5 font-display text-lg text-foreground">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- PROPOSTA EDUCACIONAL ---------- */
const pilares = [
  {
    icon: GraduationCap,
    title: "Excelência Acadêmica",
    desc: "Promovemos uma aprendizagem sólida e significativa, estimulando a curiosidade, o pensamento crítico, a autonomia intelectual e o desenvolvimento das competências necessárias para cada etapa da vida escolar.",
  },
  {
    icon: HeartHandshake,
    title: "Formação Humana",
    desc: "Acreditamos que o conhecimento encontra seu verdadeiro sentido quando está acompanhado de valores, respeito, empatia e responsabilidade.",
  },
  {
    icon: Sparkles,
    title: "Desenvolvimento Integral",
    desc: "Consideramos cada aluno em sua totalidade, favorecendo o crescimento intelectual, emocional, social, cultural e espiritual.",
  },
  {
    icon: BookOpen,
    title: "Projeto de Vida",
    desc: "Buscamos preparar nossos estudantes para construir caminhos próprios, fazer escolhas conscientes e enfrentar os desafios do futuro com confiança e propósito.",
  },
] as const;

function Proposta() {
  return (
    <section id="proposta-educacional" className="bg-surface border-y border-border scroll-mt-24">
      <div className="container-site py-16 lg:py-24">
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-[0.18em] text-institutional/80 mb-3">
            Proposta Educacional
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-balance">
            Mais do que ensinar conteúdos. Formar pessoas para a vida.
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Nossa proposta educacional integra excelência acadêmica,
            desenvolvimento humano, valores cristãos e preparação para os
            desafios do futuro.
          </p>

          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Acreditamos que a educação deve preparar o aluno para muito
              mais do que provas e avaliações.
            </p>
            <p>
              Ela deve desenvolver a capacidade de aprender continuamente,
              conviver com respeito, tomar decisões responsáveis e atuar
              de forma positiva na sociedade.
            </p>
            <p>
              Por isso, nossa proposta educacional busca promover uma
              formação completa, equilibrando conhecimento, valores,
              habilidades e experiências que contribuem para o crescimento
              integral dos estudantes.
            </p>
          </div>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 stagger-children">
          {pilares.map((p) => (
            <li
              key={p.title}
              className="rounded-md border border-border bg-surface-elevated p-6 flex flex-col card-lift"
            >
              <div className="grid size-12 place-items-center rounded-md bg-institutional/10 text-institutional">
                <p.icon className="size-5" aria-hidden />
              </div>
              <h3 className="mt-5 font-display text-lg text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              <span className="mt-5 h-0.5 w-10 rounded-full bg-institutional" aria-hidden />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function SistemaEnsino() {
  return (
    <section className="container-site py-16 lg:py-24">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] items-center">
        <div>
          <div className="text-xs uppercase tracking-[0.18em] text-institutional/80 mb-3">
            Sistema de Ensino
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-balance">
            Tecnologia, inovação e acompanhamento pedagógico.
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed max-w-xl">
            Aliamos tradição educacional e inovação por meio de recursos
            pedagógicos atualizados, tecnologias educacionais e uma
            proposta de ensino que estimula protagonismo, investigação e
            construção do conhecimento.
          </p>
        </div>
        <div
          className="rounded-md bg-institutional/5 border border-institutional/15 aspect-[4/3] grid place-items-center text-center p-6"
          role="img"
          aria-label="Espaço reservado para imagem editorial do sistema de ensino"
        >
          <div className="max-w-xs text-sm text-muted-foreground">
            Substituir por imagem editorial — sala de aula, tecnologia ou
            momento pedagógico real do colégio.
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- DIFERENCIAIS ---------- */
const diferenciais = [
  {
    icon: Building2,
    title: "Tradição que continua atual",
    desc: "Mais de um século de história educando gerações sem perder a capacidade de evoluir, inovar e responder aos desafios do presente.",
  },
  {
    icon: HeartHandshake,
    title: "Formação baseada em valores",
    desc: "Acreditamos que o desenvolvimento acadêmico deve caminhar junto com a construção do caráter, da responsabilidade e da solidariedade.",
  },
  {
    icon: Users,
    title: "Acompanhamento próximo",
    desc: "Valorizamos o olhar atento para cada aluno, respeitando sua individualidade e acompanhando sua trajetória de forma próxima e significativa.",
  },
  {
    icon: Calendar,
    title: "Comunidade Escolar",
    desc: "Famílias, educadores, alunos e ex-alunos participam ativamente da construção da experiência educativa e fortalecem os vínculos que caracterizam o Santo André.",
  },
  {
    icon: BookOpen,
    title: "Aprendizagem com significado",
    desc: "Buscamos conectar o conhecimento à realidade, tornando o aprendizado mais relevante, aplicável e transformador.",
  },
  {
    icon: GraduationCap,
    title: "Preparação para a vida",
    desc: "Mais do que preparar para vestibulares e desafios acadêmicos, queremos formar pessoas capazes de fazer escolhas conscientes, construir relações saudáveis e contribuir positivamente para a sociedade.",
  },
] as const;

function Diferenciais() {
  return (
    <section id="diferenciais" className="bg-surface border-y border-border scroll-mt-24">
      <div className="container-site py-16 lg:py-24">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.18em] text-institutional/80 mb-3">
            Diferenciais
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-balance">
            O que torna a experiência Santo André única?
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Uma combinação de tradição, excelência acadêmica, formação
            humana e acompanhamento próximo que faz parte da história de
            milhares de famílias.
          </p>
        </div>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {diferenciais.map((d) => (
            <li
              key={d.title}
              className="rounded-md bg-surface-elevated border border-border p-6 lg:p-7"
            >
              <div className="grid size-11 place-items-center rounded-sm bg-institutional/10 text-institutional">
                <d.icon className="size-5" aria-hidden />
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

/* ---------- CTA BLOCK (intermediário) ---------- */
function CTABlock({ headline, texto }: { headline: string; texto: string }) {
  return (
    <section className="container-site py-12 lg:py-16">
      <div className="rounded-md border border-institutional/20 bg-institutional/5 p-8 lg:p-10 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h3 className="font-display text-xl md:text-2xl text-foreground text-balance">
            {headline}
          </h3>
          <p className="mt-2 text-sm md:text-base text-muted-foreground leading-relaxed">
            {texto}
          </p>
        </div>
        <Button
          asChild
          size="lg"
          className="bg-institutional text-institutional-foreground hover:bg-institutional-dark shrink-0"
        >
          <Link to="/agendar-visita">
            Agendar Visita <ArrowRight className="size-4 ml-1.5" aria-hidden />
          </Link>
        </Button>
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
          Escolher uma escola é escolher um projeto de formação.
        </h2>
        <p className="mt-5 text-base md:text-lg opacity-90 max-w-2xl mx-auto">
          Conheça de perto os diferenciais que fazem parte da experiência
          educativa do Colégio Santo André.
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
