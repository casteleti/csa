import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/ensino")({
  head: () => ({
    meta: [
      { title: "Ensino — Colégio Santo André" },
      { name: "description", content: "Segmentos de ensino: Educação Infantil, Fundamental I, Fundamental II e Ensino Médio." },
      { property: "og:title", content: "Ensino — Colégio Santo André" },
      { property: "og:url", content: "/ensino" },
    ],
  }),
  component: () => <Outlet />,
});
