import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "@/components/site/PagePlaceholder";

export const Route = createFileRoute("/agendar-visita")({
  head: () => ({
    meta: [
      { title: "Agendar Visita — Colégio Santo André" },
      { name: "description", content: "Venha conhecer o Colégio Santo André. Agende uma visita guiada." },
      { property: "og:title", content: "Agendar Visita — Colégio Santo André" },
      { property: "og:url", content: "/agendar-visita" },
    ],
    links: [{ rel: "canonical", href: "/agendar-visita" }],
  }),
  component: () => (
    <PagePlaceholder
      eyebrow="Visite-nos"
      title="Agendar Visita"
      description="Conheça nossa estrutura, equipe e proposta pedagógica em uma visita guiada."
    />
  ),
});
