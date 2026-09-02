/**
 * Utilidades dos componentes editoriais.
 */

import type { Post, ListagemFiltros, ListagemPaginada } from "@/content/types";

export function formatarData(iso: string): string {
  try {
    return new Intl.DateTimeFormat("pt-BR", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}

/**
 * Filtragem/busca/paginação de posts em memória.
 * Útil enquanto não há backend; assinatura compatível com listagens futuras.
 */
export function listarPosts(
  fonte: Post[],
  filtros: ListagemFiltros = {},
  perPage = 9,
): ListagemPaginada<Post> {
  const { categoria, tag, q, page = 1 } = filtros;
  const termo = q?.trim().toLowerCase();

  const filtrados = fonte
    .filter((p) => (categoria ? p.categoria === categoria : true))
    .filter((p) => (tag ? p.tags.includes(tag) : true))
    .filter((p) =>
      termo
        ? p.titulo.toLowerCase().includes(termo) ||
          p.resumo.toLowerCase().includes(termo) ||
          p.tags.some((t) => t.toLowerCase().includes(termo))
        : true,
    )
    .sort((a, b) => (a.data < b.data ? 1 : -1));

  const total = filtrados.length;
  const start = (page - 1) * perPage;
  const itens = filtrados.slice(start, start + perPage);

  return { itens, page, perPage, total };
}
