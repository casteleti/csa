import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  Menu,
  X,
  ChevronRight,
  ChevronLeft,
  Globe,
  ExternalLink,
  Baby,
  BookOpen,
  Palette,
  GraduationCap,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

/* ============================================================
 *  Modelo de navegação
 * ============================================================ */

type NavChild = { to: string; hash?: string; label: string; desc?: string };

type NavSection = {
  to: string;
  label: string;
  /** dropdown ou mega-menu (ensino) */
  variant: "dropdown" | "mega";
  children: NavChild[];
};

const sectionOColegio: NavSection = {
  to: "/o-colegio",
  label: "O Colégio",
  variant: "dropdown",
  children: [
    { to: "/o-colegio", hash: "nossa-historia", label: "Nossa História", desc: "Tradição e propósito ao longo das gerações." },
    { to: "/o-colegio", hash: "missao-visao-valores", label: "Missão, Visão e Valores", desc: "Princípios que orientam a escola." },
    { to: "/o-colegio", hash: "proposta-educacional", label: "Proposta Educacional", desc: "Pilares que integram a formação." },
    { to: "/o-colegio", hash: "diferenciais", label: "Diferenciais", desc: "O que faz do Santo André uma experiência única." },
  ],
};

type SegMenuItem = {
  to: string;
  label: string;
  headline: string;
  icon: LucideIcon;
  /** classes Tailwind para a cor do segmento */
  className: string;
  /** cor do ícone/CTA quando o card é branco (médio) */
  accentClass?: string;
};

const ensinoColunas: SegMenuItem[] = [
  {
    to: "/ensino/educacao-infantil",
    label: "Educação Infantil",
    headline: "Descobrir o mundo com segurança.",
    icon: Baby,
    className: "bg-seg-infantil text-seg-infantil-foreground",
  },
  {
    to: "/ensino/fundamental-i",
    label: "Fundamental I",
    headline: "Aprender com autonomia e confiança.",
    icon: BookOpen,
    className: "bg-seg-fund1 text-seg-fund1-foreground",
  },
  {
    to: "/ensino/fundamental-ii",
    label: "Fundamental II",
    headline: "Mais responsabilidade e novos desafios.",
    icon: Palette,
    className: "bg-seg-fund2 text-seg-fund2-foreground",
  },
  {
    to: "/ensino/ensino-medio",
    label: "Ensino Médio",
    headline: "Projeto de vida e preparação para o futuro.",
    icon: GraduationCap,
    className: "bg-seg-medio text-seg-medio-foreground border-2 border-institutional",
    accentClass: "text-institutional",
  },
];

const sectionEnsino: NavSection = {
  to: "/ensino",
  label: "Ensino",
  variant: "mega",
  children: ensinoColunas.map((c) => ({ to: c.to, label: c.label, desc: c.headline })),
};

const sectionInfra: NavSection = {
  to: "/infraestrutura",
  label: "Infraestrutura",
  variant: "dropdown",
  children: [
    { to: "/infraestrutura", label: "Todos os Ambientes" },
    { to: "/infraestrutura", label: "Educação Infantil" },
    { to: "/infraestrutura", label: "Fundamental I" },
    { to: "/infraestrutura", label: "Fundamental II" },
    { to: "/infraestrutura", label: "Ensino Médio" },
  ],
};

const sectionVida: NavSection = {
  to: "/vida-no-colegio",
  label: "Vida no Colégio",
  variant: "dropdown",
  children: [
    { to: "/vida-no-colegio", label: "Notícias", desc: "O que acontece na escola." },
    { to: "/vida-no-colegio", label: "Eventos", desc: "Agenda da comunidade." },
    { to: "/vida-no-colegio", label: "Projetos", desc: "Iniciativas dos alunos e da equipe." },
    { to: "/vida-no-colegio", label: "Conquistas", desc: "Resultados e reconhecimentos." },
    { to: "/vida-no-colegio", label: "Pastoral", desc: "Vivências e ações pastorais." },
  ],
};

const sectionFamilia: NavSection = {
  to: "/familia",
  label: "Família",
  variant: "dropdown",
  children: [
    { to: "/familia", label: "Portal da Família" },
    { to: "/familia", label: "Aplicativos" },
    { to: "/familia", label: "Calendário" },
    { to: "/familia", label: "Documentos" },
    { to: "/familia", label: "Financeiro" },
    { to: "/familia", label: "Contato" },
  ],
};

const sections: NavSection[] = [
  sectionOColegio,
  sectionEnsino,
  sectionInfra,
  sectionVida,
  sectionFamilia,
];

/* ============================================================
 *  Header
 * ============================================================ */

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <UtilityNav />

      <div className="container-site flex h-16 lg:h-20 items-center justify-between gap-4">
        <Link to="/" className="flex items-center shrink-0" aria-label="Colégio Santo André — Início">
          <img
            src="/images/logo-csa-horizontal.webp"
            alt="Colégio Santo André"
            className="h-11 sm:h-12 lg:h-14 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <NavigationMenu className="hidden lg:flex" aria-label="Navegação principal">
          <NavigationMenuList>
            {sections.map((sec) => (
              <NavigationMenuItem key={sec.label}>
                <NavigationMenuTrigger className="bg-transparent">
                  {sec.label}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  {sec.variant === "mega" ? <MegaEnsino /> : <DropdownPanel section={sec} />}
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-2">
          <Button
            asChild
            className="bg-institutional text-institutional-foreground hover:bg-institutional-dark hidden sm:inline-flex"
          >
            <Link to="/agendar-visita">Agendar Visita</Link>
          </Button>

          <MobileNav />
        </div>
      </div>
    </header>
  );
}

/* ---------------- Utility nav (desktop) ---------------- */

function UtilityNav() {
  return (
    <div className="hidden md:block bg-institutional text-institutional-foreground text-xs">
      <div className="container-site flex h-9 items-center justify-end gap-6">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline underline-offset-4 inline-flex items-center gap-1"
        >
          Portal da Família
          <ExternalLink className="size-3 opacity-70" aria-hidden />
          <span className="sr-only"> (abre em nova janela)</span>
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline underline-offset-4 inline-flex items-center gap-1"
        >
          Trabalhe Conosco
          <ExternalLink className="size-3 opacity-70" aria-hidden />
          <span className="sr-only"> (abre em nova janela)</span>
        </a>
        <div className="inline-flex items-center gap-1" role="group" aria-label="Idioma">
          <Globe className="size-3.5" aria-hidden />
          <button type="button" className="hover:underline underline-offset-4" aria-label="Português" aria-current="true">
            PT
          </button>
          <span aria-hidden className="opacity-50">|</span>
          <button type="button" className="hover:underline underline-offset-4 opacity-70" aria-label="English">
            EN
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Dropdown padrão ---------------- */

function DropdownPanel({ section }: { section: NavSection }) {
  return (
    <div className="w-[360px] p-3">
      <Link
        to={section.to as never}
        className="block rounded-sm px-3 py-2 mb-2 text-xs uppercase tracking-wider text-institutional hover:bg-accent"
      >
        Ir para {section.label} →
      </Link>
      <ul className="grid gap-1">
        {section.children.map((c, i) => (
          <li key={`${c.label}-${i}`}>
            <NavigationMenuLink asChild>
              <Link
                to={c.to as never}
                hash={c.hash}
                className="block rounded-sm p-3 hover:bg-accent focus-visible:bg-accent"
              >
                <div className="font-medium text-foreground">{c.label}</div>
                {c.desc && <p className="text-sm text-muted-foreground mt-0.5">{c.desc}</p>}
              </Link>
            </NavigationMenuLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------------- Mega menu — Ensino ---------------- */

function MegaEnsino() {
  return (
    <div className="w-[min(96vw,1040px)] p-4">
      <div className="flex items-center justify-between mb-4 px-1">
        <div>
          <div className="text-xs uppercase tracking-[0.16em] text-institutional/80">Ensino</div>
          <p className="text-sm text-muted-foreground mt-0.5">
            Uma proposta pensada para cada etapa da vida escolar.
          </p>
        </div>
        <NavigationMenuLink asChild>
          <Link
            to="/ensino"
            className="text-sm font-medium text-institutional hover:underline underline-offset-4 inline-flex items-center gap-1"
          >
            Visão geral <ArrowRight className="size-4" aria-hidden />
          </Link>
        </NavigationMenuLink>
      </div>

      <ul className="grid gap-3 grid-cols-2 lg:grid-cols-4">
        {ensinoColunas.map((c) => (
          <li key={c.to}>
            <NavigationMenuLink asChild>
              <Link
                to={c.to as never}
                className={`group block rounded-md p-4 h-full transition-transform hover:-translate-y-0.5 ${c.className}`}
              >
                <c.icon className={`size-7 ${c.accentClass ?? ""}`} aria-hidden />
                <div className="mt-4 font-display text-lg leading-snug">{c.label}</div>
                <p className={`mt-1 text-sm leading-snug ${c.accentClass ?? "opacity-90"}`}>
                  {c.headline}
                </p>
                <span
                  className={`mt-4 inline-flex items-center gap-1 text-sm font-medium ${c.accentClass ?? ""}`}
                >
                  Conhecer
                  <ArrowRight
                    className="size-4 transition-transform group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </span>
              </Link>
            </NavigationMenuLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ============================================================
 *  Mobile — drawer multinível
 * ============================================================ */

function MobileNav() {
  const [open, setOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const close = () => {
    setOpen(false);
    // reset depois do fechamento para evitar flicker
    setTimeout(() => setActiveIdx(null), 150);
  };

  const activeSection = activeIdx !== null ? sections[activeIdx] : null;

  return (
    <Sheet
      open={open}
      onOpenChange={(o) => {
        setOpen(o);
        if (!o) setTimeout(() => setActiveIdx(null), 150);
      }}
    >
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden min-h-11 min-w-11"
          aria-label="Abrir menu"
        >
          <Menu className="size-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:w-96 p-0 flex flex-col">
        <SheetTitle className="sr-only">
          {activeSection ? activeSection.label : "Menu de navegação"}
        </SheetTitle>

        {/* Top bar */}
        <div className="flex items-center justify-between px-2 h-16 border-b">
          {activeSection ? (
            <button
              type="button"
              onClick={() => setActiveIdx(null)}
              className="inline-flex items-center gap-1 px-3 py-2 rounded-sm text-sm font-medium hover:bg-accent min-h-11"
              aria-label="Voltar para o menu principal"
            >
              <ChevronLeft className="size-4" aria-hidden />
              {activeSection.label}
            </button>
          ) : (
            <span className="px-3 font-display text-institutional">Menu</span>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={close}
            aria-label="Fechar menu"
            className="min-h-11 min-w-11"
          >
            <X className="size-5" />
          </Button>
        </div>

        {/* Painéis */}
        <div className="flex-1 overflow-y-auto">
          {activeSection ? (
            <SubPanel section={activeSection} onClose={close} />
          ) : (
            <RootPanel onPick={setActiveIdx} onClose={close} />
          )}
        </div>

        {/* CTA persistente */}
        <div className="border-t p-3">
          <Button
            asChild
            className="w-full bg-institutional text-institutional-foreground hover:bg-institutional-dark"
          >
            <Link to="/agendar-visita" onClick={close}>
              Agendar Visita
            </Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}

function RootPanel({
  onPick,
  onClose,
}: {
  onPick: (i: number) => void;
  onClose: () => void;
}) {
  return (
    <nav aria-label="Navegação móvel — nível 1" className="p-2">
      <ul className="flex flex-col">
        {sections.map((sec, i) => (
          <li key={sec.label}>
            <button
              type="button"
              onClick={() => onPick(i)}
              aria-haspopup="menu"
              className="w-full flex items-center justify-between px-3 py-3 rounded-sm text-base font-medium hover:bg-accent min-h-12 text-left"
            >
              {sec.label}
              <ChevronRight className="size-4 opacity-60" aria-hidden />
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-4 px-3 pt-4 border-t text-sm text-muted-foreground space-y-2">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClose}
          className="inline-flex items-center gap-1 py-1.5"
        >
          Portal da Família <ExternalLink className="size-3.5 opacity-70" aria-hidden />
        </a>
        <br />
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClose}
          className="inline-flex items-center gap-1 py-1.5"
        >
          Trabalhe Conosco <ExternalLink className="size-3.5 opacity-70" aria-hidden />
        </a>
        <div className="inline-flex items-center gap-2 pt-2" role="group" aria-label="Idioma">
          <Globe className="size-4" aria-hidden />
          <button type="button" className="font-medium" aria-current="true">PT</button>
          <span aria-hidden className="opacity-50">|</span>
          <button type="button" className="opacity-70">EN</button>
        </div>
      </div>
    </nav>
  );
}

function SubPanel({
  section,
  onClose,
}: {
  section: NavSection;
  onClose: () => void;
}) {
  /* Caso especial: Ensino usa os cards coloridos do mega menu */
  if (section.variant === "mega") {
    return (
      <nav aria-label={`Navegação móvel — ${section.label}`} className="p-3">
        <ul className="grid gap-3">
          {ensinoColunas.map((c) => (
            <li key={c.to}>
              <Link
                to={c.to as never}
                onClick={onClose}
                className={`block rounded-md p-4 ${c.className}`}
              >
                <div className="flex items-center gap-3">
                  <c.icon className={`size-6 shrink-0 ${c.accentClass ?? ""}`} aria-hidden />
                  <div className="min-w-0">
                    <div className="font-display text-base leading-tight">{c.label}</div>
                    <p className={`mt-0.5 text-sm leading-snug ${c.accentClass ?? "opacity-90"}`}>
                      {c.headline}
                    </p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  }

  return (
    <nav aria-label={`Navegação móvel — ${section.label}`} className="p-2">
      <Link
        to={section.to as never}
        onClick={onClose}
        className="block px-3 py-3 rounded-sm text-sm font-medium text-institutional hover:bg-accent"
      >
        Ir para {section.label}
      </Link>
      <ul className="flex flex-col mt-1">
        {section.children.map((c, i) => (
          <li key={`${c.label}-${i}`}>
            <Link
              to={c.to as never}
              hash={c.hash}
              onClick={onClose}
              className="block px-3 py-3 rounded-sm text-base hover:bg-accent min-h-12"
            >
              <div className="font-medium text-foreground">{c.label}</div>
              {c.desc && (
                <p className="text-sm text-muted-foreground mt-0.5">{c.desc}</p>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
