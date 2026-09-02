/**
 * Helpers de SEO para conteúdo editorial e institucional.
 *
 * Geram objetos prontos para o array `scripts` retornado em `head()` de
 * uma rota TanStack (`type: "application/ld+json"`, `children: JSON.stringify(...)`).
 *
 * URLs em formato relativo — crawlers resolvem contra o host atual.
 */

import type { Post, Evento } from "@/content/types";

type LdScript = {
  type: "application/ld+json";
  children: string;
};

/* ---------------- Article (Post) ---------------- */

export function articleSchema(post: Post, url: string): LdScript {
  return {
    type: "application/ld+json",
    children: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.titulo,
      description: post.resumo,
      datePublished: post.data,
      author: { "@type": "Person", name: post.autor.nome },
      image: post.imagem.src || undefined,
      mainEntityOfPage: url,
      publisher: {
        "@type": "EducationalOrganization",
        name: "Colégio Santo André",
      },
    }),
  };
}

/* ---------------- Event ---------------- */

export function eventSchema(ev: Evento, url: string): LdScript {
  return {
    type: "application/ld+json",
    children: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Event",
      name: ev.titulo,
      description: ev.descricao,
      startDate: ev.data,
      endDate: ev.dataFim ?? ev.data,
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: {
        "@type": "Place",
        name: ev.local,
        address: ev.local,
      },
      image: ev.imagem.src || undefined,
      url,
      organizer: {
        "@type": "EducationalOrganization",
        name: "Colégio Santo André",
      },
    }),
  };
}

/* ---------------- BreadcrumbList ---------------- */

export type Crumb = { name: string; href: string };

export function breadcrumbSchema(crumbs: Crumb[]): LdScript {
  return {
    type: "application/ld+json",
    children: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: crumbs.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: c.name,
        item: c.href,
      })),
    }),
  };
}

/* ---------------- Open Graph helper ---------------- */

export type OgInput = {
  title: string;
  description: string;
  url: string;
  image?: string;
  type?: "website" | "article";
};

export function ogMeta(input: OgInput) {
  const meta: { property: string; content: string }[] = [
    { property: "og:title", content: input.title },
    { property: "og:description", content: input.description },
    { property: "og:url", content: input.url },
    { property: "og:type", content: input.type ?? "website" },
  ];
  if (input.image) meta.push({ property: "og:image", content: input.image });
  return meta;
}
