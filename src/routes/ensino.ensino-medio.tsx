import { createFileRoute } from "@tanstack/react-router";
import { Compass, GraduationCap, Rocket, Trophy } from "lucide-react";
import { SegmentoPage } from "@/components/site/SegmentoPage";

export const Route = createFileRoute("/ensino/ensino-medio")({
  head: () => ({
    meta: [
      { title: "Ensino Médio | Colégio Santo André" },
      {
        name: "description",
        content:
          "Preparação para o futuro com propósito, maturidade e direção. Projeto de vida, ENEM e vestibulares, autonomia e maturidade no Ensino Médio.",
      },
      { property: "og:title", content: "Ensino Médio | Colégio Santo André" },
      {
        property: "og:description",
        content:
          "Mais do que preparar para vestibulares e ENEM, ajudamos os alunos a construir projetos de vida e desenvolver confiança para os desafios que virão.",
      },
      { property: "og:url", content: "/ensino/ensino-medio" },
    ],
    links: [{ rel: "canonical", href: "/ensino/ensino-medio" }],
  }),
  component: () => (
    <SegmentoPage
      segmento="medio"
      eyebrow="Ensino Médio"
      headline="Preparação para o futuro com propósito, maturidade e direção."
      subheadline="Mais do que preparar para vestibulares e ENEM, ajudamos os alunos a construir projetos de vida e desenvolver confiança para os desafios que virão."
      pilaresTitle="O que seu filho vai viver aqui"
      pilaresIntro="Quatro dimensões orientam o Ensino Médio — projeto de vida, ENEM e vestibulares, autonomia e maturidade."
      pilares={[
        {
          icon: Compass,
          title: "Projeto de Vida",
          desc: "Reflexão sobre escolhas, objetivos, vocação e caminhos para o futuro.",
        },
        {
          icon: Trophy,
          title: "ENEM e Vestibulares",
          desc: "Preparação acadêmica consistente para os processos seletivos mais importantes.",
        },
        {
          icon: GraduationCap,
          title: "Autonomia",
          desc: "Desenvolvimento da capacidade de tomar decisões e assumir responsabilidades com consciência.",
        },
        {
          icon: Rocket,
          title: "Maturidade",
          desc: "Fortalecimento das competências necessárias para a vida universitária, profissional e pessoal.",
        },
      ]}
      infraTitle="Ambientes voltados para aprofundamento e preparação"
      infraIntro="Laboratórios, salas especializadas e espaços de estudo favorecem concentração, investigação e desenvolvimento acadêmico."
      espacos={[
        {
          nome: "Laboratórios",
          frase: "Investigação científica e prática experimental ao longo das três séries.",
        },
        {
          nome: "Salas especializadas",
          frase: "Espaços preparados para áreas específicas e aprofundamento por interesse.",
        },
        {
          nome: "Espaços de estudo",
          frase: "Ambientes de concentração, revisão e preparação para avaliações externas.",
        },
      ]}
      depoimento={{
        nome: "Família do Ensino Médio",
        segmento: "Ensino Médio",
        texto:
          "Mais do que resultados acadêmicos, percebemos um crescimento enorme na confiança e na maturidade do nosso filho.",
        iniciais: "EM",
      }}
      ctaHeadline="Preparar para a universidade é importante. Preparar para a vida é essencial."
      ctaText="Conheça como o Santo André ajuda os alunos a transformar conhecimento em oportunidades e sonhos em projetos concretos."
    />
  ),
});
