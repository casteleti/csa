import { createFileRoute } from "@tanstack/react-router";
import { Brain, ShieldCheck, Target, Users } from "lucide-react";
import { SegmentoPage } from "@/components/site/SegmentoPage";

export const Route = createFileRoute("/ensino/fundamental-ii")({
  head: () => ({
    meta: [
      { title: "Ensino Fundamental II | Colégio Santo André" },
      {
        name: "description",
        content:
          "Mais responsabilidade, mais conhecimento e novos desafios. Pensamento crítico, convivência e preparação no Fundamental II.",
      },
      { property: "og:title", content: "Ensino Fundamental II | Colégio Santo André" },
      {
        property: "og:description",
        content:
          "Uma etapa marcada pela ampliação do repertório acadêmico, pelo fortalecimento da autonomia e pela preparação para novos desafios.",
      },
      { property: "og:url", content: "/ensino/fundamental-ii" },
    ],
    links: [{ rel: "canonical", href: "/ensino/fundamental-ii" }],
  }),
  component: () => (
    <SegmentoPage
      segmento="fund2"
      eyebrow="Ensino Fundamental II"
      headline="Mais responsabilidade, mais conhecimento e novos desafios."
      subheadline="Uma etapa marcada pela ampliação do repertório acadêmico, pelo fortalecimento da autonomia e pela preparação para novos desafios."
      pilaresTitle="O que seu filho vai viver aqui"
      pilaresIntro="Quatro dimensões orientam o Fundamental II — responsabilidade, pensamento crítico, convivência e preparação."
      pilares={[
        {
          icon: ShieldCheck,
          title: "Responsabilidade",
          desc: "Os alunos são incentivados a assumir um papel mais ativo em sua trajetória escolar.",
        },
        {
          icon: Brain,
          title: "Pensamento Crítico",
          desc: "Aprofundamento dos conhecimentos e desenvolvimento da capacidade de análise, reflexão e argumentação.",
        },
        {
          icon: Users,
          title: "Convivência",
          desc: "Fortalecimento das relações interpessoais e da capacidade de trabalhar em equipe.",
        },
        {
          icon: Target,
          title: "Preparação",
          desc: "Construção gradual das competências que serão fundamentais para o Ensino Médio e para a vida adulta.",
        },
      ]}
      infraTitle="Ambientes preparados para ampliar horizontes"
      infraIntro="Laboratórios, biblioteca e espaços de projetos favorecem experiências práticas e aprofundamento do conhecimento."
      espacos={[
        {
          nome: "Laboratórios",
          frase: "Experimentação e investigação científica como parte do aprender.",
        },
        {
          nome: "Biblioteca",
          frase: "Acervo e ambiente para leitura, pesquisa e estudo silencioso.",
        },
        {
          nome: "Espaços de projetos",
          frase: "Locais preparados para trabalhos em grupo, autoria e apresentação.",
        },
      ]}
      depoimento={{
        nome: "Família do Fundamental II",
        segmento: "Ensino Fundamental II",
        texto:
          "Nesta fase percebemos um amadurecimento importante. Nosso filho passou a organizar melhor sua rotina e a assumir mais responsabilidades.",
        iniciais: "F2",
      }}
      ctaHeadline="Uma fase decisiva na construção da autonomia e da maturidade."
      ctaText="Conheça como acompanhamos os alunos durante esse importante período de transformação."
    />
  ),
});
