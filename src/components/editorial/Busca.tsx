import { Search } from "lucide-react";
import { useId } from "react";
import { Input } from "@/components/ui/input";

type Props = {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  label?: string;
};

export function Busca({
  value,
  onChange,
  placeholder = "Buscar por palavra-chave…",
  label = "Buscar conteúdo",
}: Props) {
  const id = useId();
  return (
    <div className="relative w-full max-w-md">
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <Search
        className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none"
        aria-hidden
      />
      <Input
        id={id}
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="pl-9 h-11"
        autoComplete="off"
      />
    </div>
  );
}
