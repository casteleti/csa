import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Sparkles,
  Globe,
  Receipt,
  CalendarDays,
  FileText,
  Headphones,
  Smartphone,
  MessageCircle,
  Send,
  UserPen,
  ClipboardList,
  Building2,
  FolderOpen,
  Phone,
  Mail,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { breadcrumbSchema } from "@/lib/seo";

export const Route = createFileRoute("/familia")({
  head: () => ({
    meta: [
      { title: "Família | Colégio Santo André" },
      {
        name: "description",
        content:
          "Portal de serviços para famílias do Colégio Santo André. Acesse sistemas, aplicativos e canais de atendimento.",
      },
      { property: "og:title", content: "Família | Colégio Santo André" },
      {
        property: "og:description",
        content:
          "Portal de serviços para famílias do Colégio Santo André. Acesse sistemas, aplicativos e canais de atendimento.",
      },
      { property: "og:url", content: "/familia" },
    ],
    links: [{ rel: "canonical", href: "/familia" }],
    scripts: [
      breadcrumbSchema([
        { name: "Início", href: "/" },
        { name: "Família", href: "/familia" },
      ]),
    ],
  }),
  component: FamiliaPage,
});

function FamiliaPage() {
  return (
    <>
      <Hero />
      <AcessosRapidos />
      <Aplicativos />
      <Servicos />
      <FAQ />
      <CTAContato />
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
            Família
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-foreground text-balance">
            Tudo o que sua família precisa, em um só lugar.
          </h1>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
            Acesse sistemas, aplicativos, informações e canais de atendimento
            de forma rápida e organizada.
          </p>
        </div>

        <div
          className="rounded-md bg-institutional/5 border border-institutional/15 aspect-[4/3] grid place-items-center text-center p-6"
          role="img"
          aria-label="Espaço reservado para imagem da central da família do Colégio Santo André"
        >
          <div className="max-w-xs text-sm text-muted-foreground">
            <Sparkles className="size-6 mx-auto mb-3 text-institutional" aria-hidden />
            Substituir por imagem institucional da central de serviços para famílias.
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 2. ACESSOS RÁPIDOS ---------- */
const acessos = [
  {
    icon: Globe,
    titulo: "Portal da Família",
    descricao: "Acesse notas, frequência, comunicados e informações acadêmicas.",
    cta: "Acessar Portal",
    href: "#portal-da-familia",
    externo: true,
  },
  {
    icon: Receipt,
    titulo: "Financeiro",
    descricao: "Consulte boletos, extratos e organize a vida financeira escolar.",
    cta: "Acessar Financeiro",
    href: "#financeiro",
    externo: true,
  },
  {
    icon: CalendarDays,
    titulo: "Calendário Escolar",
    descricao: "Fique por dentro de eventos, feriados e datas importantes.",
    cta: "Ver Calendário",
    href: "#calendario",
    externo: false,
  },
  {
    icon: FileText,
    titulo: "Documentos",
    descricao: "Baixe formulários, regulamentos e documentos necessários.",
    cta: "Ver Documentos",
    href: "#documentos",
    externo: false,
  },
  {
    icon: Headphones,
    titulo: "Contato",
    descricao: "Fale com a secretaria, coordenação ou setor de atendimento.",
    cta: "Entrar em Contato",
    href: "#contato",
    externo: false,
  },
] as const;

function AcessosRapidos() {
  return (
    <section className="container-site py-16 lg:py-24">
      <div className="max-w-2xl">
        <h2 className="font-display text-3xl md:text-4xl text-balance">
          Acessos rápidos
        </h2>
        <p className="mt-3 text-muted-foreground">
          Os serviços mais utilizados, sempre à mão.
        </p>
      </div>

      <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {acessos.map((a) => (
          <li
            key={a.titulo}
            className="rounded-md bg-surface-elevated border border-border p-6 lg:p-7 flex flex-col"
          >
            <div className="grid size-11 place-items-center rounded-sm bg-institutional/10 text-institutional">
              <a.icon className="size-5" aria-hidden />
            </div>
            <h3 className="mt-5 font-display text-xl text-foreground">
              {a.titulo}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
              {a.descricao}
            </p>
            <div className="mt-5 pt-5 border-t border-border">
              <Button
                asChild
                variant="outline"
                className="w-full justify-between"
              >
                {a.externo ? (
                  <a
                    href={a.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${a.cta} (abre em nova aba)`}
                  >
                    <span>{a.cta}</span>
                    <ExternalLink className="size-4" aria-hidden />
                  </a>
                ) : (
                  <Link to={a.href}>
                    <span>{a.cta}</span>
                    <ArrowRight className="size-4" aria-hidden />
                  </Link>
                )}
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ---------- 3. APLICATIVOS ---------- */
const apps = [
  {
    nome: "Aplicativo Escolar",
    descricao: "Acompanhe o dia a dia do aluno, receba comunicados e avisos em tempo real.",
    plataforma: "iOS e Android",
  },
  {
    nome: "Portal Acadêmico",
    descricao: "Consulte notas, horários, frequência e materiais de apoio.",
    plataforma: "Web",
  },
  {
    nome: "Comunicação Escolar",
    descricao: "Canal direto entre família e escola para mensagens rápidas.",
    plataforma: "iOS e Android",
  },
] as const;

function Aplicativos() {
  return (
    <section className="bg-surface border-y border-border">
      <div className="container-site py-16 lg:py-24">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl text-balance">
            Aplicativos
          </h2>
          <p className="mt-3 text-muted-foreground">
            Ferramentas que aproximam a escola da sua família.
          </p>
        </div>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {apps.map((app) => (
            <li
              key={app.nome}
              className="rounded-md bg-surface-elevated border border-border p-6 lg:p-7 flex flex-col"
            >
              <div className="grid size-11 place-items-center rounded-sm bg-institutional/10 text-institutional">
                <Smartphone className="size-5" aria-hidden />
              </div>
              <h3 className="mt-5 font-display text-lg text-foreground">
                {app.nome}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
                {app.descricao}
              </p>
              <p className="mt-3 text-xs text-muted-foreground">
                Plataforma: {app.plataforma}
              </p>
              <div className="mt-5 pt-5 border-t border-border">
                <Button
                  variant="outline"
                  className="w-full"
                  disabled
                  aria-label={`Acessar ${app.nome} (em breve)`}
                >
                  Acessar
                </Button>
              </div>
              <p className="mt-2 text-[11px] text-muted-foreground/70 italic">
                [Placeholder] — substituir por link real do aplicativo.
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- 4. SERVIÇOS DA FAMÍLIA ---------- */
const servicos = [
  {
    icon: UserPen,
    titulo: "Atualização cadastral",
    descricao: "Mantenha seus dados e os do aluno sempre atualizados.",
  },
  {
    icon: ClipboardList,
    titulo: "Solicitações",
    descricao: "Peça documentos, declarações e outros serviços à secretaria.",
  },
  {
    icon: Receipt,
    titulo: "Financeiro",
    descricao: "Acompanhe pagamentos, negociações e extratos escolares.",
  },
  {
    icon: Building2,
    titulo: "Secretaria",
    descricao: "Informações sobre matrícula, rematrícula e trâmites escolares.",
  },
  {
    icon: FolderOpen,
    titulo: "Documentação",
    descricao: "Acesse regulamentos, manuais e formulários da família.",
  },
] as const;

function Servicos() {
  return (
    <section className="container-site py-16 lg:py-24">
      <div className="max-w-2xl">
        <h2 className="font-display text-3xl md:text-4xl text-balance">
          Serviços da Família
        </h2>
        <p className="mt-3 text-muted-foreground">
          Tudo o que você precisa para cuidar da vida escolar do seu filho.
        </p>
      </div>

      <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {servicos.map((s) => (
          <li
            key={s.titulo}
            className="rounded-md bg-surface-elevated border border-border p-6 lg:p-7"
          >
            <div className="grid size-11 place-items-center rounded-sm bg-institutional/10 text-institutional">
              <s.icon className="size-5" aria-hidden />
            </div>
            <h3 className="mt-5 font-display text-xl text-foreground">
              {s.titulo}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              {s.descricao}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ---------- 5. PERGUNTAS FREQUENTES ---------- */
const faqs = [
  {
    pergunta: "Como acessar o Portal?",
    resposta:
      "Utilize seu e-mail cadastrado e senha de acesso. Caso tenha esquecido a senha, use a opção 'Recuperar senha' na tela de login.",
  },
  {
    pergunta: "Onde encontro boletos?",
    resposta:
      "No menu Financeiro do Portal da Família você encontra boletos, extratos e histórico de pagamentos.",
  },
  {
    pergunta: "Como atualizar meu cadastro?",
    resposta:
      "Acesse a área 'Atualização Cadastral' no Portal ou entre em contato com a secretaria para alterações de endereço, telefone e responsáveis.",
  },
  {
    pergunta: "Como entrar em contato com a secretaria?",
    resposta:
      "Você pode usar o canal de WhatsApp, telefone ou e-mail disponíveis na seção de Contato desta página.",
  },
] as const;

function FAQ() {
  return (
    <section className="bg-surface border-y border-border">
      <div className="container-site py-16 lg:py-24">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl text-balance">
            Perguntas frequentes
          </h2>
          <p className="mt-3 text-muted-foreground">
            Respostas rápidas para o que a família mais precisa.
          </p>
        </div>

        <div className="mt-10 max-w-3xl">
          <Accordion type="single" collapsible>
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-base">
                  {f.pergunta}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {f.resposta}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

/* ---------- 6. CTA DE CONTATO ---------- */
function CTAContato() {
  return (
    <section className="bg-institutional text-institutional-foreground">
      <div className="container-site py-20 lg:py-28 text-center">
        <h2 className="font-display text-3xl md:text-5xl max-w-3xl mx-auto leading-tight text-balance">
          Não encontrou o que precisava?
        </h2>
        <p className="mt-5 text-base md:text-lg opacity-90 max-w-2xl mx-auto">
          Nossa equipe está pronta para ajudar.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Button
            asChild
            size="lg"
            className="bg-white text-institutional hover:bg-white/90"
          >
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Falar pelo WhatsApp (abre em nova aba)"
            >
              <MessageCircle className="size-4 mr-1.5" aria-hidden />
              WhatsApp
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10 hover:text-white"
          >
            <a href="tel:+5500000000000" aria-label="Ligar para o colégio">
              <Phone className="size-4 mr-1.5" aria-hidden />
              Telefone
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10 hover:text-white"
          >
            <a
              href="mailto:contato@colegiosantoandre.com.br"
              aria-label="Enviar e-mail para o colégio"
            >
              <Mail className="size-4 mr-1.5" aria-hidden />
              E-mail
            </a>
          </Button>
        </div>
        <p className="mt-4 text-xs opacity-70 italic">
          Dados de contato de exemplo — substituir pelos canais reais do colégio.
        </p>
      </div>
    </section>
  );
}
