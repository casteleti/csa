import { Link } from "@tanstack/react-router";
import { Calendar } from "lucide-react";
import type { Post } from "@/content/types";
import { CATEGORIA_LABEL } from "@/content/taxonomy";
import { formatarData } from "./utils";

type Props = {
  post: Post;
  /** Href opcional — quando a rota de detalhe ainda não existe, omitir torna o card não-clicável. */
  href?: string;
};

export function CardPost({ post, href }: Props) {
  if (href) {
    return (
      <Link to={href as never} className="group block h-full">
        <CardBody post={post} />
      </Link>
    );
  }
  return (
    <div className="h-full">
      <CardBody post={post} />
    </div>
  );
}

function CardBody({ post }: { post: Post }) {
  return (
    <article className="rounded-md overflow-hidden border border-border bg-surface-elevated flex flex-col h-full transition-shadow group-hover:shadow-sm">
      <div
        className="aspect-[16/10] bg-institutional/5 grid place-items-center text-xs text-muted-foreground text-center px-4"
        role="img"
        aria-label={post.imagem.alt}
      >
        {post.imagem.src ? (
          <img
            src={post.imagem.src}
            alt={post.imagem.alt}
            loading="lazy"
            className="size-full object-cover"
          />
        ) : (
          <span>Imagem destaque (placeholder)</span>
        )}
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 text-xs">
          <span className="rounded-xs bg-institutional/10 text-institutional px-2 py-0.5 font-medium">
            {CATEGORIA_LABEL[post.categoria]}
          </span>
          <span className="text-muted-foreground inline-flex items-center gap-1">
            <Calendar className="size-3" aria-hidden />
            <time dateTime={post.data}>{formatarData(post.data)}</time>
          </span>
        </div>
        <h3 className="mt-3 font-display text-lg text-foreground group-hover:text-institutional">
          {post.titulo}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
          {post.resumo}
        </p>
        {post.tags.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Tags">
            {post.tags.slice(0, 3).map((t) => (
              <li
                key={t}
                className="text-[11px] rounded-xs bg-accent text-accent-foreground px-1.5 py-0.5"
              >
                #{t}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
