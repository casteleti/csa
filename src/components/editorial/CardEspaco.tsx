import type { Espaco } from "@/content/types";
import { SEGMENTO_LABEL } from "@/content/taxonomy";

type Props = {
  espaco: Espaco;
};

export function CardEspaco({ espaco }: Props) {
  const capa = espaco.galeria[0];
  return (
    <article className="rounded-md overflow-hidden border border-border bg-surface-elevated flex flex-col h-full">
      <div
        className="aspect-[4/3] bg-institutional/5 grid place-items-center text-xs text-muted-foreground text-center px-4"
        role="img"
        aria-label={capa?.alt ?? `Imagem do espaço ${espaco.nome}`}
      >
        {capa?.src ? (
          <img
            src={capa.src}
            alt={capa.alt}
            loading="lazy"
            className="size-full object-cover"
          />
        ) : (
          <span>Foto do espaço (placeholder)</span>
        )}
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display text-lg text-foreground">{espaco.nome}</h3>
        <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
          {espaco.descricaoCurta}
        </p>
        {espaco.segmentos.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Segmentos">
            {espaco.segmentos.map((s) => (
              <li
                key={s}
                className="text-[11px] rounded-xs bg-institutional/10 text-institutional px-1.5 py-0.5"
              >
                {SEGMENTO_LABEL[s]}
              </li>
            ))}
          </ul>
        )}
        {espaco.destaques.length > 0 && (
          <ul className="mt-4 space-y-1 text-sm text-foreground/90 list-disc pl-4">
            {espaco.destaques.slice(0, 3).map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
