import { CATEGORIAS, CATEGORIA_LABEL, type Categoria } from "@/content/taxonomy";

type Props = {
  value: Categoria | "todas";
  onChange: (v: Categoria | "todas") => void;
  /** rótulo acessível do grupo de filtros */
  label?: string;
};

export function FiltroCategoria({ value, onChange, label = "Filtrar por categoria" }: Props) {
  const options: Array<{ key: Categoria | "todas"; label: string }> = [
    { key: "todas", label: "Todas" },
    ...CATEGORIAS.map((c) => ({ key: c, label: CATEGORIA_LABEL[c] })),
  ];

  return (
    <div
      role="radiogroup"
      aria-label={label}
      className="flex flex-wrap gap-2"
    >
      {options.map((opt) => {
        const ativo = value === opt.key;
        return (
          <button
            key={opt.key}
            type="button"
            role="radio"
            aria-checked={ativo}
            onClick={() => onChange(opt.key)}
            className={
              "px-3 py-1.5 rounded-sm text-sm font-medium border transition-colors min-h-9 " +
              (ativo
                ? "bg-institutional text-institutional-foreground border-institutional"
                : "bg-surface-elevated text-foreground border-border hover:bg-accent")
            }
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
