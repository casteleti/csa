import { Trophy } from "lucide-react";
import type { Conquista } from "@/content/types";
import { SEGMENTO_LABEL } from "@/content/taxonomy";
import { formatarData } from "./utils";

type Props = {
  conquista: Conquista;
};

export function CardConquista({ conquista }: Props) {
  return (
    <article className="rounded-md overflow-hidden border border-border bg-surface-elevated flex flex-col h-full">
      <div
        className="aspect-[4/3] bg-institutional/5 grid place-items-center text-institutional/40"
        role="img"
        aria-label={conquista.imagem.alt}
      >
        {conquista.imagem.src ? (
          <img
            src={conquista.imagem.src}
            alt={conquista.imagem.alt}
            loading="lazy"
            className="size-full object-cover"
          />
        ) : (
          <Trophy className="size-10" aria-hidden />
        )}
      </div>
      <div className="p-5 flex flex-col flex-1">
        <span className="text-xs rounded-xs bg-institutional/10 text-institutional px-2 py-0.5 font-medium self-start">
          {SEGMENTO_LABEL[conquista.segmento]}
        </span>
        <h3 className="mt-3 font-display text-lg text-foreground">{conquista.titulo}</h3>
        <p className="mt-1 text-sm text-institutional font-medium">{conquista.alunoOuGrupo}</p>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
          {conquista.descricao}
        </p>
        <time dateTime={conquista.data} className="mt-4 text-xs text-muted-foreground">
          {formatarData(conquista.data)}
        </time>
      </div>
    </article>
  );
}
