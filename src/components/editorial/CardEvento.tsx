import { Calendar, Clock, MapPin } from "lucide-react";
import type { Evento } from "@/content/types";
import { formatarData } from "./utils";

type Props = {
  evento: Evento;
};

export function CardEvento({ evento }: Props) {
  return (
    <article className="rounded-md overflow-hidden border border-border bg-surface-elevated flex flex-col h-full">
      <div
        className="aspect-[16/10] bg-institutional/5 grid place-items-center text-xs text-muted-foreground text-center px-4"
        role="img"
        aria-label={evento.imagem.alt}
      >
        {evento.imagem.src ? (
          <img
            src={evento.imagem.src}
            alt={evento.imagem.alt}
            loading="lazy"
            className="size-full object-cover"
          />
        ) : (
          <span>Imagem do evento (placeholder)</span>
        )}
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display text-lg text-foreground">{evento.titulo}</h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
          {evento.descricao}
        </p>
        <ul className="mt-4 space-y-1.5 text-sm text-foreground/90">
          <li className="inline-flex items-center gap-2">
            <Calendar className="size-4 text-institutional" aria-hidden />
            <time dateTime={evento.data}>{formatarData(evento.data)}</time>
          </li>
          <li className="inline-flex items-center gap-2">
            <Clock className="size-4 text-institutional" aria-hidden />
            <span>{evento.horario}</span>
          </li>
          <li className="inline-flex items-center gap-2">
            <MapPin className="size-4 text-institutional" aria-hidden />
            <span>{evento.local}</span>
          </li>
        </ul>
      </div>
    </article>
  );
}
