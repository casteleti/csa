import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "@/components/site/PagePlaceholder";
import { SegmentoCard } from "@/components/site/SegmentoCard";

export const Route = createFileRoute("/ensino/")({
  head: () => ({
    meta: [
      { title: "Ensino — Colégio Santo André" },
      { name: "description", content: "Conheça os quatro segmentos de ensino do Colégio Santo André." },
    ],
    links: [{ rel: "canonical", href: "/ensino" }],
  }),
  component: () => (
    <PagePlaceholder
      eyebrow="Ensino"
      title="Nossos segmentos"
      description="Um percurso pedagógico contínuo, da primeira infância ao Ensino Médio."
    >
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <SegmentoCard segmento="infantil" title="Educação Infantil" description="Aprender com afeto e ludicidade." to="/ensino/educacao-infantil" />
        <SegmentoCard segmento="fund1" title="Fundamental I" description="Curiosidade e descoberta." to="/ensino/fundamental-i" />
        <SegmentoCard segmento="fund2" title="Fundamental II" description="Autonomia e protagonismo." to="/ensino/fundamental-ii" />
        <SegmentoCard segmento="medio" title="Ensino Médio" description="Projeto de vida e excelência." to="/ensino/ensino-medio" />
      </div>
    </PagePlaceholder>
  ),
});
