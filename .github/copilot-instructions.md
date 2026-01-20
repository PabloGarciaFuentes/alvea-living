# Alvea Living - AI Coding Agent Instructions

## Project Overview
Custom furniture configurator platform enabling users to design furniture (dimensions, materials, colors), add to cart, and request quotes. Built as a **npm workspaces monorepo** with Next.js 16 (App Router), React 19, TypeScript, and Zustand for state management.

**Current state**: Core configurator functional with Zustand cart persistence. Using CSS Modules for styling (not Tailwind). Backend integration pending.

---

## Monorepo Architecture

```
muebles-a-medida/
├─ apps/web/              # Next.js frontend
├─ packages/domain/       # Shared business logic (furniture models, validation)
└─ package.json          # Root workspace config
```

### Critical Package Linkage
- Domain package imported via `@muebles/domain` alias (defined in [`packages/domain/package.json`](packages/domain/package.json))
- Run commands from **root**: `npm run dev`, `npm run build`, `npm run lint` (delegates to `apps/web`)
- Changes to `packages/domain/*` require **no build step** - TypeScript directly consumes source files

**Why monorepo?** Share domain types/logic across future backend. Prevents frontend/backend type drift.

---

## Next.js 16 Patterns

### 1. Async Params (⚠️ Breaking Change)
Dynamic routes receive `params` as a **Promise** - must await before access:
```tsx
type PageProps = { params: Promise<{ id: string }> };
export default async function Page({ params }: PageProps) {
  const { id } = await params; // ✅ Required in Next.js 16
}
```
See [`apps/web/app/configurador/[id]/page.tsx`](apps/web/app/configurador/[id]/page.tsx#L6-L12)

### 2. Server/Client Component Split
- **Server Components** (default): Data fetching, domain logic imports
  - Example: [`apps/web/app/configurador/[id]/page.tsx`](apps/web/app/configurador/[id]/page.tsx) calls `getMuebleById()` from domain
- **Client Components** (`"use client"`): Interactivity, Zustand hooks
  - Example: [`apps/web/app/configurador/[id]/ConfiguradorForm.tsx`](apps/web/app/configurador/[id]/ConfiguradorForm.tsx) uses `useCartStore()`

### 3. Path Aliases
- `@/*` → `apps/web/*` (web app files)
- `@muebles/domain` → `packages/domain/*` (shared domain package)

Configured in [`apps/web/tsconfig.json`](apps/web/tsconfig.json) extending [`tsconfig.base.json`](tsconfig.base.json)

---

## State Management: Zustand with Persistence

Cart state lives in [`apps/web/stores/cartStore.ts`](apps/web/stores/cartStore.ts):
- Uses `zustand/middleware` for localStorage persistence (`alvea-cart-storage` key)
- Generates unique IDs via `crypto.randomUUID()`
- Actions: `addItem()`, `removeItem()`, `clearCart()`

**Usage pattern**:
```tsx
"use client";
const addItem = useCartStore((state) => state.addItem);
const items = useCartStore((state) => state.items);
```

⚠️ **Only use in Client Components** - Zustand requires browser environment for localStorage.

---

## Domain-Driven Design

Business logic isolated in `packages/domain/`:
- **Types**: `MuebleBase`, `LimitesMedidas`, `CartItem`
- **Data**: `MUEBLES` array (mock catalog - replace with API later)
- **Helpers**: `getMuebleById()` for catalog access

**Pattern**: When adding furniture features:
1. Define types in `packages/domain/muebles.ts`
2. Update `MUEBLES` mock data
3. Implement UI in `apps/web/` consuming domain types

Example: New furniture property → Add to `MuebleBase` type, populate in `MUEBLES`, ConfiguradorForm picks it up automatically.

---

## Styling: CSS Modules

Using **CSS Modules** (`.module.css`), not Tailwind utilities:
- Per-component stylesheets: `ConfiguradorForm.module.css`, `Header.module.css`
- Import as `styles` object: `<div className={styles.cartItem}>`
- Global styles in [`apps/web/app/globals.css`](apps/web/app/globals.css)

**Why CSS Modules?** Scoped styles without utility class lookup. No Tailwind setup currently active.

---

## Development Workflow

**Commands** (run from root):
```bash
npm run dev    # Start Next.js dev server (http://localhost:3000)
npm run build  # Production build
npm run lint   # ESLint via Next.js config
```

**TypeScript**: Strict mode, ES2017 target, React 19 JSX transform.

**Route structure**:
- `/` → Landing page
- `/muebles` → Furniture catalog
- `/configurador/[id]` → Configurator for specific furniture type
- `/carrito` → Cart/quote request page

---

## Integration Points & TODOs

**Placeholders** awaiting backend:
- [`apps/web/services/api.ts`](apps/web/services/api.ts) - Empty; will replace `MUEBLES` mock with API calls
- Quote submission in [`CarritoContent.tsx`](apps/web/app/carrito/CarritoContent.tsx#L30-L33) - currently logs to console

**Expected backend integration**:
1. Server Components fetch catalog from `services/api.ts`
2. Client-side cart interactions remain in Zustand
3. Quote submission sends cart data to backend email service

---

## Common Tasks

### Add New Furniture Type
1. Add entry to `MUEBLES` in [`packages/domain/muebles.ts`](packages/domain/muebles.ts)
2. Define `limitesMedidas`, `maderasDisponibles`, `coloresDisponibles`
3. Route auto-created via `[id]` dynamic segment

### Add Form Validation
Update `medidasValidas` in [`ConfiguradorForm.tsx`](apps/web/app/configurador/[id]/ConfiguradorForm.tsx#L24-L30). For complex rules, create validation helpers in `packages/domain/`.

### Modify Global Styles
Edit [`apps/web/app/globals.css`](apps/web/app/globals.css) or component-specific `.module.css` files.
