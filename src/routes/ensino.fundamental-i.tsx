import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, Compass, ListChecks, Search } from "lucide-react";
import { SegmentoPage } from "@/components/site/SegmentoPage";

export const Route = createFileRoute("/ensino/fundamental-i")({
  head: () => ({
    meta: [
      { title: "Ensino Fundamental I | Colégio Santo André" },
      {
        name: "description",
        content:
          "Aprender, ganhar autonomia e construir confiança todos os dias. Alfabetização, autonomia, organização e curiosidade no Fundamental I.",
      },
      { property: "og:title", content: "Ensino Fundamental I | Colégio Santo André" },
      {
        property: "og:description",
        content:
          "Uma fase em que a alfabetização, a organização dos estudos e a descoberta do conhecimento caminham lado a lado com o desenvolvimento humano.",
      },
      { property: "og:url", content: "/ensino/fundamental-i" },
    ],
    links: [{ rel: "canonical", href: "/ensino/fundamental-i" }],
  }),
  component: () => (
    <SegmentoPage
      segmento="fund1"
      eyebrow="Ensino Fundamental I"
      headline="Aprender, ganhar autonomia e construir confiança todos os dias."
      subheadline="Uma fase em que a alfabetização, a organização dos estudos e a descoberta do conhecimento caminham lado a lado com o desenvolvimento humano."
      pilaresTitle="O que seu filho vai viver aqui"
      pilaresIntro="Quatro dimensões estruturam a jornada do Fundamental I — alfabetização, autonomia, organização e curiosidade."
      pilares={[
        {
          icon: BookOpen,
          title: "Alfabetização",
          desc: "Construção sólida da leitura, escrita e interpretação, respeitando o ritmo de cada aluno.",
        },
        {
          icon: Compass,
          title: "Autonomia",
          desc: "Desenvolvimento gradual da capacidade de organizar tarefas, assumir responsabilidades e participar ativamente da própria aprendizagem.",
        },
        {
          icon: ListChecks,
          title: "Organização",
          desc: "Construção de hábitos de estudo que favorecem disciplina, responsabilidade e segurança acadêmica.",
        },
        {
          icon: Search,
          title: "Curiosidade",
          desc: "Estímulo constante à investigação, à criatividade e ao prazer de aprender.",
        },
      ]}
      infraTitle="Espaços que estimulam aprender e conviver"
      infraIntro="Biblioteca, salas de aprendizagem e ambientes colaborativos favorecem experiências significativas de estudo e convivência."
      espacos={[
        {
          nome: "Biblioteca",
          frase: "Acervo selecionado para fortalecer o gosto pela leitura e pela pesquisa.",
        },
        {
          nome: "Salas de aprendizagem",
          frase: "Ambientes preparados para a rotina de estudo e a participação ativa.",
        },
        {
          nome: "Espaços colaborativos",
          frase: "Locais para projetos em grupo, conversa e construção coletiva.",
        },
      ]}
      depoimento={{
        nome: "Família do Fundamental I",
        segmento: "Ensino Fundamental I",
        texto:
          "Percebemos uma evolução muito grande na autonomia e no interesse pelos estudos. Nosso filho passou a participar mais ativamente do próprio aprendizado.",
        iniciais: "F1",
      }}
      ctaHeadline="Aprender vai muito além de dominar conteúdos."
      ctaText="Conheça uma proposta que incentiva autonomia, curiosidade e desenvolvimento integral."
    />
  ),
});
