import type { Projeto } from "@/content/types";
import { SEGMENTO_LABEL } from "@/content/taxonomy";

type Props = {
  projeto: Projeto;
};

export function CardProjeto({ projeto }: Props) {
  const capa = projeto.galeria[0];
  return (
    <article className="rounded-md overflow-hidden border border-border bg-surface-elevated flex flex-col h-full">
      <div
        className="aspect-[16/10] bg-institutional/5 grid place-items-center text-xs text-muted-foreground text-center px-4"
        role="img"
        aria-label={capa?.alt ?? `Imagem do projeto ${projeto.titulo}`}
      >
        {capa?.src ? (
          <img
            src={capa.src}
            alt={capa.alt}
            loading="lazy"
            className="size-full object-cover"
          />
        ) : (
          <span>Galeria do projeto (placeholder)</span>
        )}
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display text-lg text-foreground">{projeto.titulo}</h3>
        <p className="mt-2 text-sm text-institutional font-medium">{projeto.objetivo}</p>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
          {projeto.descricao}
        </p>
        {projeto.segmentos.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Segmentos envolvidos">
            {projeto.segmentos.map((s) => (
              <li
                key={s}
                className="text-[11px] rounded-xs bg-institutional/10 text-institutional px-1.5 py-0.5"
              >
                {SEGMENTO_LABEL[s]}
              </li>
            ))}
          </ul>
        )}
        {projeto.resultados.length > 0 && (
          <div className="mt-4 pt-4 border-t border-border">
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
              Resultados
            </p>
            <ul className="space-y-1 text-sm text-foreground/90 list-disc pl-4">
              {projeto.resultados.slice(0, 3).map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </article>
  );
}
