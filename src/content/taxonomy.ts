/**
 * Colégio Santo André — Taxonomia oficial
 *
 * Centro editorial: /vida-no-colegio
 *
 * As categorias são fechadas e não devem ser ampliadas sem decisão editorial.
 * As tags são abertas — esta lista é a base inicial sugerida.
 */

export const CATEGORIAS = [
  "noticias",
  "eventos",
  "projetos",
  "conquistas",
  "pastoral",
] as const;

export type Categoria = (typeof CATEGORIAS)[number];

export const CATEGORIA_LABEL: Record<Categoria, string> = {
  noticias: "Notícias",
  eventos: "Eventos",
  projetos: "Projetos",
  conquistas: "Conquistas",
  pastoral: "Pastoral",
};

/** Segmentos (reaproveita os tokens do design system). */
export const SEGMENTOS = ["infantil", "fund1", "fund2", "medio"] as const;
export type Segmento = (typeof SEGMENTOS)[number];

export const SEGMENTO_LABEL: Record<Segmento, string> = {
  infantil: "Educação Infantil",
  fund1: "Fundamental I",
  fund2: "Fundamental II",
  medio: "Ensino Médio",
};

/** Tags sugeridas — abertas, podem ser ampliadas conforme o uso editorial. */
export const TAGS_SUGERIDAS = [
  "Viagem",
  "Olimpíada",
  "Feira",
  "Mostra Cultural",
  "ENEM",
  "Solidariedade",
  "Tecnologia",
  "Ciências",
  "Literatura",
  "Esporte",
] as const;

export type Tag = string;
