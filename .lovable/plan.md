
# Etapa 1 — Fundação do Colégio Santo André

Apenas a base: arquitetura, design system, navegação, header, footer e componentes. Sem conteúdo final, sem Home completa, sem páginas internas.

## 1. Design tokens (`src/styles.css`)

Substituir o tema atual por tokens institucionais:

- **Cores institucionais** (em `oklch`/HSL via `:root` e mapeadas em `@theme inline`):
  - `--institutional: #1A4F9C` → token `--color-institutional`
  - `--seg-infantil: #FFCC00`
  - `--seg-fund1: #F47B20`
  - `--seg-fund2: #2E6DB4`
  - `--seg-medio: #FFFFFF` (com borda `--institutional` aplicada no componente)
  - CTAs: `--cta-primary` (institucional) e `--cta-secondary` (dourado/amarelo institucional derivado para contraste AA)
  - Neutros: `--background`, `--foreground`, `--muted`, `--muted-foreground`, `--border`, `--surface`, `--surface-elevated`
  - Estados: `--ring` (foco visível), `--hover-overlay`, `--disabled`
- **Tipografia**: famílias `--font-display: "Playfair Display"` e `--font-sans: "Inter"`. Aplicar `font-sans` no `body` e classe utilitária `font-display` para H1–H3.
- **Radius**: `--radius-xs:4px`, `--radius-sm:8px`, `--radius-md:16px`, `--radius-lg:24px`.
- **Spacing semântico**: `--space-1..--space-96` (4, 8, 12, 16, 24, 32, 48, 64, 96).
- **Container**: classe utilitária `.container-site` → `max-width:1280px; mx-auto; px-4 sm:px-6 lg:px-8`.
- **Breakpoints**: usar os do Tailwind (`sm:640`, `md:768`, `lg:1024`, `xl:1280`, `2xl:1440`). Mobile-first em toda a base.
- **Estados globais**: `focus-visible:outline-2 outline-offset-2 outline-[--ring]` aplicado em botões/links/inputs.
- Validar contraste WCAG AA para todas as combinações texto/fundo.

## 2. Fontes

- Carregar Playfair Display e Inter via `<link>` no `head` do `src/routes/__root.tsx` (preconnect + stylesheet do Google Fonts). Não usar `@import` em CSS.

## 3. Estrutura de rotas (TanStack Start)

Criar arquivos apenas como placeholders mínimos (H1 + parágrafo "Em construção") com `head()` próprio (title, description, og básico, canonical relativo):

```
src/routes/
  __root.tsx                       (layout global: Header + Outlet + Footer + fonts + JSON-LD EducationalOrganization)
  index.tsx                        ( / )
  o-colegio.tsx                    ( /o-colegio )
  ensino.tsx                       ( /ensino — layout com Outlet + index )
  ensino.index.tsx
  ensino.educacao-infantil.tsx
  ensino.fundamental-i.tsx
  ensino.fundamental-ii.tsx
  ensino.ensino-medio.tsx
  infraestrutura.tsx
  vida-no-colegio.tsx
  familia.tsx
  agendar-visita.tsx
  matriculas.tsx
```

Cada placeholder = 1 `<section>` com H1 + breve descrição da função da página. **Sem** conteúdo final.

## 4. Layout global (`__root.tsx`)

- `<html lang="pt-BR">`.
- `head()` com viewport, charset, defaults Open Graph (`og:type: website`, `og:site_name: Colégio Santo André`), favicon e JSON-LD `EducationalOrganization` (nome, tipo, URL relativa, telefone placeholder).
- Estrutura: `<a href="#main" class="skip-link">Pular para o conteúdo</a>`, `<Header />`, `<main id="main">…<Outlet /></main>`, `<Footer />`.
- Apenas um `<main>` no app inteiro.

## 5. Header (`src/components/site/Header.tsx`)

- **Utility nav** (desktop, fina, fundo institucional ou neutro escuro): "Portal da Família", "Trabalhe Conosco", seletor de idioma PT | EN (visual apenas; sem i18n agora).
- **Global nav** (5 itens): O Colégio, Ensino (com dropdown/mega menu dos 4 segmentos), Infraestrutura, Vida no Colégio, Família.
- Logo à esquerda (placeholder textual "Colégio Santo André" em `font-display`).
- CTA **Agendar Visita** (primary) sempre visível à direita.
- **Tablet (md)**: utility nav some, global nav permanece compacta, CTA visível.
- **Mobile (<md)**: hamburguer (Sheet/Drawer shadcn), CTA Agendar Visita visível no header. Menu mobile inclui utility nav no rodapé do drawer.
- Foco visível, navegação por teclado, `aria-expanded`, `aria-controls`, `role="navigation"` com `aria-label`.

## 6. Footer (`src/components/site/Footer.tsx`)

- 4 blocos: **Institucional** (O Colégio, História, Proposta), **Ensino** (4 segmentos), **Família** (Portal, Calendário, Comunicados), **Contato** (endereço, telefone, WhatsApp, e-mail, redes sociais).
- Linha inferior: logo, "© {ano} Colégio Santo André — Todos os direitos reservados", links rápidos (Política de Privacidade, Termos).
- Estrutura semântica `<footer>` + `<nav aria-label="…">` por bloco. Pronta para expansão.

## 7. Biblioteca de componentes base

Em `src/components/ui-site/`, montar wrappers sobre os primitivos shadcn já existentes, aplicando variantes/tokens do colégio:

- **Botões** (`button.tsx` — variantes adicionais via CVA): `primary`, `secondary`, `ghost`, `text`. Tamanhos sm/md/lg, ícone à esquerda/direita, `min-h-11` em mobile.
- **Cards**:
  - `CardSegmento` (cor de fundo por segmento + título Playfair + CTA)
  - `CardPost` (imagem topo, categoria, título, data)
  - `CardDepoimento` (citação, autor, papel)
  - `CardInfraestrutura` (imagem, título, descrição curta)
- **Formulários**: `Input`, `Select`, `Textarea`, `Checkbox`, `Radio` — usar shadcn + `Label` associado + mensagens de erro acessíveis (`aria-describedby`).
- **Navegação**: `DesktopNav`, `MobileNav` (Sheet), `Dropdown` e `MegaMenu` (sobre `NavigationMenu` shadcn).
- **Conteúdo**: `Badge`, `Tag`, `Accordion`, `Breadcrumb`, `Modal` (Dialog), `Tabs`, `Pagination` — reutilizar shadcn, aplicar tokens.

Cada componente recebe estados globais (hover/focus/active/disabled) via tokens.

## 8. Acessibilidade

- Skip link, landmarks (`header`, `nav`, `main`, `footer`).
- Foco visível com `--ring` em todos os interativos.
- Labels associados em inputs; `aria-label` em botões de ícone (hamburguer, fechar, redes sociais).
- Hierarquia de headings respeitada nos placeholders.
- Contraste validado para textos sobre cores institucionais e de segmento.

## 9. SEO técnico

- `head()` por rota com title (`Página — Colégio Santo André`), description, `og:title`, `og:description`, `og:url` relativo, `canonical` relativo (apenas em folhas).
- `public/robots.txt` permitindo tudo, sem `Sitemap:` ainda (sem URL definitiva).
- `public/sitemap.xml` com as rotas criadas usando `BASE_URL = ""` + TODO.
- JSON-LD `EducationalOrganization` no root.
- Componente `Breadcrumb` pronto (não populado nesta etapa).

## 10. Responsividade

Mobile-first em todo CSS. Verificação visual nos breakpoints 375, 768, 1024, 1280, 1440. Containers, grid 12 colunas (utilitários Tailwind), gutter 24px (`gap-6`).

## Fora desta etapa

- Conteúdo real das páginas, Home completa, blog, imagens definitivas, animações, integrações, backend/Lovable Cloud, formulários funcionais.

## Entregáveis

Estrutura de rotas, layout global, Header, Footer, design system, design tokens, biblioteca de componentes base, responsividade configurada, base SEO e acessibilidade preparadas. Parar e aguardar o próximo prompt.
