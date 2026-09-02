import { createFileRoute } from "@tanstack/react-router";
import { HeartHandshake, Sparkles, Sprout, Users } from "lucide-react";
import { SegmentoPage } from "@/components/site/SegmentoPage";

export const Route = createFileRoute("/ensino/educacao-infantil")({
  head: () => ({
    meta: [
      { title: "Educação Infantil | Colégio Santo André" },
      {
        name: "description",
        content:
          "Um começo seguro para descobrir o mundo com confiança. Acolhimento, descobertas, desenvolvimento e convivência nos primeiros anos da vida escolar.",
      },
      { property: "og:title", content: "Educação Infantil | Colégio Santo André" },
      {
        property: "og:description",
        content:
          "Os primeiros anos da vida escolar marcados por descobertas, vínculos e experiências que desenvolvem autonomia, curiosidade e segurança emocional.",
      },
      { property: "og:url", content: "/ensino/educacao-infantil" },
    ],
    links: [{ rel: "canonical", href: "/ensino/educacao-infantil" }],
  }),
  component: () => (
    <SegmentoPage
      segmento="infantil"
      eyebrow="Educação Infantil"
      headline="Um começo seguro para descobrir o mundo com confiança."
      subheadline="Os primeiros anos da vida escolar são marcados por descobertas, vínculos e experiências que ajudam a criança a desenvolver autonomia, curiosidade e segurança emocional para aprender."
      pilaresTitle="O que seu filho vai viver aqui"
      pilaresIntro="Quatro dimensões orientam o cotidiano da Educação Infantil — acolhimento, descobertas, desenvolvimento e convivência."
      pilares={[
        {
          icon: HeartHandshake,
          title: "Acolhimento",
          desc: "Cada criança é recebida com atenção, respeito e carinho, em um ambiente preparado para favorecer adaptação, segurança e bem-estar.",
        },
        {
          icon: Sparkles,
          title: "Descobertas",
          desc: "Aprender acontece por meio da experimentação, da brincadeira, da imaginação e da curiosidade natural da infância.",
        },
        {
          icon: Sprout,
          title: "Desenvolvimento",
          desc: "As experiências vividas diariamente contribuem para o crescimento cognitivo, emocional, social e motor da criança.",
        },
        {
          icon: Users,
          title: "Convivência",
          desc: "As relações construídas nessa fase ajudam a desenvolver respeito, cooperação, empatia e autonomia.",
        },
      ]}
      infraTitle="Espaços que favorecem o desenvolvimento infantil"
      infraIntro="Nossos ambientes são planejados para estimular descobertas, movimento, criatividade e convivência, respeitando as necessidades próprias da infância."
      espacos={[
        {
          nome: "Brinquedoteca",
          frase: "Espaço lúdico para o brincar simbólico, a imaginação e a interação.",
        },
        {
          nome: "Parque",
          frase: "Área externa segura para movimento, exploração e contato com a natureza.",
        },
        {
          nome: "Espaço de acolhimento",
          frase: "Ambiente preparado para a adaptação, o descanso e os primeiros vínculos.",
        },
      ]}
      depoimento={{
        nome: "Família da Educação Infantil",
        segmento: "Educação Infantil",
        texto:
          "A acolhida fez toda a diferença para nossa família. Desde os primeiros dias percebemos que nossa filha estava segura, feliz e sendo acompanhada com muito cuidado.",
        iniciais: "EI",
      }}
      ctaHeadline="Os primeiros passos da vida escolar merecem um ambiente acolhedor e inspirador."
      ctaText="Venha conhecer os espaços, a equipe e a proposta que acompanha o desenvolvimento das crianças desde os primeiros anos."
    />
  ),
});
