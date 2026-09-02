import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "@/components/site/PagePlaceholder";

export const Route = createFileRoute("/matriculas")({
  head: () => ({
    meta: [
      { title: "Matrículas — Colégio Santo André" },
      { name: "description", content: "Fale conosco para iniciar o processo de matrícula." },
      { property: "og:title", content: "Matrículas — Colégio Santo André" },
      { property: "og:url", content: "/matriculas" },
    ],
    links: [{ rel: "canonical", href: "/matriculas" }],
  }),
  component: () => (
    <PagePlaceholder
      eyebrow="Ingresso"
      title="Matrículas"
      description="Inicie uma conversa com nossa equipe — a matrícula é finalizada presencialmente."
    />
  ),
});
