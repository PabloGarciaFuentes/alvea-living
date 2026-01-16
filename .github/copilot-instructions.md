# Alvea Living Frontend - AI Coding Agent Instructions

## Project Overview
This is a Next.js 16 (App Router) furniture configurator for custom-made furniture. Users browse furniture types, configure dimensions/materials, and request quotes. Built with TypeScript, React 19, and Tailwind CSS 4.

**Current state**: Early development (Sprint 1) - core configurator functionality with mock data. Backend integration and state management are placeholders.

## Architecture & Key Patterns

### Directory Structure
- `app/` - Next.js App Router pages and layouts
  - Route structure: `/` (home) → `/muebles` (catalog) → `/configurador/[id]` (configurator)
- `domain/` - Business logic and type definitions (furniture models, validation rules)
- `services/` - API integration layer (currently empty - will handle backend calls)
- `stores/` - Client state management (currently empty - planned for cart/session state)
- `components/` - Reusable React components (currently minimal)

### Critical Patterns

**1. Server/Client Component Split**
- Pages in `app/` are Server Components by default
- Use `"use client"` directive for interactivity (see [ConfiguradorForm.tsx](app/configurador/[id]/ConfiguradorForm.tsx))
- Server Components fetch data and pass props to Client Components

**2. Next.js 16 Async Params** (⚠️ Breaking change from Next.js 15)
```tsx
// Dynamic routes receive params as Promise - MUST await
type PageProps = { params: Promise<{ id: string }> };
export default async function Page({ params }: PageProps) {
  const { id } = await params; // ✅ Always unwrap the promise
  // ...
}
```
See [app/configurador/[id]/page.tsx](app/configurador/[id]/page.tsx#L7-L11) for reference.

**3. Domain-Driven Data Models**
Business logic lives in `domain/`, not in components:
- Types: `MuebleBase`, `LimitesMedidas` define furniture structure
- Mock catalog: `MUEBLES` array in [domain/muebles.ts](domain/muebles.ts)
- Helper functions: `getMuebleById()` for data access
- When adding new furniture properties, update domain types first

**4. Inline Styling Convention**
Currently using inline `style={{}}` props (not className with Tailwind). This is temporary for rapid prototyping - expect migration to Tailwind utility classes in future sprints.

**5. Path Aliases**
`@/*` resolves to project root. Use `@/domain/muebles` instead of `../../domain/muebles`.

## Development Workflow

**Start dev server**: `npm run dev` (runs on http://localhost:3000)
**Build**: `npm run build`
**Lint**: `npm run lint` (ESLint with Next.js config)

**TypeScript config**: Strict mode enabled, targeting ES2017. React 19's new JSX transform is active.

## Integration Points & Future Work

**Placeholder files** awaiting implementation:
- `services/api.ts` - Backend API client (furniture catalog, quote submissions)
- `stores/cartStore.ts` - Shopping cart state (likely Zustand or Context)
- `components/ui/` - Shared UI components (buttons, inputs, cards)

**Expected workflow** when backend is ready:
1. Replace `MUEBLES` mock data with API calls in `services/api.ts`
2. Server Components will call API directly, Client Components via state management
3. Cart functionality will move from `console.log` to `cartStore.ts`

## Key Decision Context

**Why inline styles?** Bootstrap UI quickly without Tailwind class lookup overhead - plan to refactor once design system stabilizes.

**Why domain folder?** Separate business rules from UI concerns - furniture validation logic should be framework-agnostic.

**Why empty stores/services?** Deferred until backend contract is defined - avoid premature abstractions.

## Common Tasks

**Adding a new furniture type**:
1. Add entry to `MUEBLES` array in [domain/muebles.ts](domain/muebles.ts)
2. Ensure `limitesMedidas`, `maderasDisponibles`, `coloresDisponibles` are defined
3. New route created automatically via [app/configurador/[id]/page.tsx](app/configurador/[id]/page.tsx)

**Adding form validation**:
- Update logic in [ConfiguradorForm.tsx](app/configurador/[id]/ConfiguradorForm.tsx#L17-L23) `medidasValidas` calculation
- Consider moving complex validation to `domain/` layer

**Styling changes**:
- Modify inline styles directly for now
- For global styles: edit [app/globals.css](app/globals.css)
- Tailwind utilities available but not actively used yet
