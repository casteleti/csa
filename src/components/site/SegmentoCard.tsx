import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

type Segmento = "infantil" | "fund1" | "fund2" | "medio";

const styles: Record<Segmento, string> = {
  infantil: "bg-seg-infantil text-seg-infantil-foreground",
  fund1: "bg-seg-fund1 text-seg-fund1-foreground",
  fund2: "bg-seg-fund2 text-seg-fund2-foreground",
  medio: "bg-seg-medio text-seg-medio-foreground border-2 border-institutional shadow-sm",
};

type Props = {
  segmento: Segmento;
  title: string;
  description: string;
  to: string;
  icon?: ReactNode;
};

export function SegmentoCard({ segmento, title, description, to, icon }: Props) {
  return (
    <Link
      to={to}
      className={`group block rounded-md p-6 lg:p-8 card-lift active:scale-[0.99] min-h-44 ${styles[segmento]}`}
    >
      {icon && <div className="mb-4">{icon}</div>}
      <h3 className="font-display text-2xl">{title}</h3>
      <p className="mt-2 text-sm opacity-90 leading-relaxed">{description}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium">
        Conhecer este segmento
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
      </span>
    </Link>
  );
}
