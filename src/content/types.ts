/**
 * Colégio Santo André — Modelos de conteúdo
 *
 * Tipos compartilhados pelos componentes editoriais (cards, filtros, busca)
 * e por futuras páginas/loaders. Sem backend nesta etapa.
 */

import type { Categoria, Segmento, Tag } from "./taxonomy";

/* ---------------- Base ---------------- */

export type SEOMeta = {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
};

export type Imagem = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export type Autor = {
  nome: string;
  papel?: string;
};

/* ---------------- Post (Vida no Colégio) ---------------- */

export type Post = {
  id: string;
  slug: string;
  titulo: string;
  resumo: string;
  conteudo: string; // markdown/HTML simplificado
  imagem: Imagem;
  categoria: Categoria;
  tags: Tag[];
  data: string; // ISO 8601
  autor: Autor;
  segmento?: Segmento;
  seo: SEOMeta;
};

/* ---------------- Evento ---------------- */

export type Evento = {
  id: string;
  slug: string;
  titulo: string;
  descricao: string;
  data: string; // ISO 8601 — data de início
  dataFim?: string;
  horario: string; // ex.: "19h00"
  local: string;
  imagem: Imagem;
  categoria: Categoria; // normalmente "eventos" ou "pastoral"
  tags: Tag[];
  seo: SEOMeta;
};

/* ---------------- Projeto ---------------- */

export type Projeto = {
  id: string;
  slug: string;
  titulo: string;
  objetivo: string;
  descricao: string;
  segmentos: Segmento[];
  galeria: Imagem[];
  resultados: string[];
  tags: Tag[];
  seo: SEOMeta;
};

/* ---------------- Conquista ---------------- */

export type Conquista = {
  id: string;
  slug: string;
  titulo: string;
  alunoOuGrupo: string;
  descricao: string;
  data: string; // ISO 8601
  imagem: Imagem;
  segmento: Segmento;
  tags: Tag[];
  seo: SEOMeta;
};

/* ---------------- Pastoral ---------------- */

export type Pastoral = {
  id: string;
  slug: string;
  titulo: string;
  descricao: string;
  data: string;
  galeria: Imagem[];
  acaoRelacionada?: {
    label: string;
    href: string;
  };
  tags: Tag[];
  seo: SEOMeta;
};

/* ---------------- Espaço (Infraestrutura) ---------------- */

export type Espaco = {
  id: string;
  slug: string;
  nome: string;
  segmentos: Segmento[];
  descricaoCurta: string;
  descricaoCompleta: string;
  galeria: Imagem[];
  destaques: string[];
  seo: SEOMeta;
};

/* ---------------- Filtros / Listagem ---------------- */

export type ListagemFiltros = {
  categoria?: Categoria;
  tag?: Tag;
  q?: string; // busca textual
  page?: number;
};

export type ListagemPaginada<T> = {
  itens: T[];
  page: number;
  perPage: number;
  total: number;
};
