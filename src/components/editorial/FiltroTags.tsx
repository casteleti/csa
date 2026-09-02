import type { Tag } from "@/content/taxonomy";

type Props = {
  tags: Tag[];
  /** tags atualmente selecionadas */
  selected: Tag[];
  onToggle: (tag: Tag) => void;
  label?: string;
};

export function FiltroTags({ tags, selected, onToggle, label = "Filtrar por tags" }: Props) {
  if (tags.length === 0) return null;
  return (
    <fieldset className="border-0 p-0 m-0">
      <legend className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
        {label}
      </legend>
      <ul className="flex flex-wrap gap-1.5">
        {tags.map((t) => {
          const ativo = selected.includes(t);
          return (
            <li key={t}>
              <button
                type="button"
                aria-pressed={ativo}
                onClick={() => onToggle(t)}
                className={
                  "text-xs rounded-xs px-2 py-1 border transition-colors " +
                  (ativo
                    ? "bg-institutional text-institutional-foreground border-institutional"
                    : "bg-surface-elevated text-foreground border-border hover:bg-accent")
                }
              >
                #{t}
              </button>
            </li>
          );
        })}
      </ul>
    </fieldset>
  );
}
