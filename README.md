# 🪑 Muebles a Medida – Plataforma Web

Plataforma web para la **configuración y solicitud de presupuesto de muebles a medida**, orientada a empresas de carpintería o fabricación artesanal.

El objetivo principal es permitir a los clientes configurar muebles personalizados (medidas, madera, color), añadirlos a un carrito y **solicitar un presupuesto sin pago online**, que será gestionado posteriormente por la empresa vía email.

---

## 🧠 Visión y objetivos

- Disponer de una **landing page clara y orientada a conversión**
- Ofrecer un **configurador de muebles flexible y escalable**
- Recoger solicitudes de presupuesto de forma estructurada
- Sentar las bases para futuras funcionalidades:
  - Autenticación de usuarios
  - Panel de administración
  - Gestión de pedidos
  - Pasarela de pago

---

## 🏗️ Arquitectura general

El proyecto está organizado como un **monorepo** utilizando **npm workspaces**, lo que permite compartir lógica y tipos entre aplicaciones.

```
muebles-a-medida/
├─ apps/
│  └─ web/              # Frontend (Next.js)
├─ packages/
│  └─ domain/           # Dominio compartido (muebles, reglas de negocio)
├─ package.json         # Configuración raíz del monorepo
├─ tsconfig.base.json   # Configuración base de TypeScript
└─ README.md
```

### ¿Por qué un monorepo?

- Compartir modelos y lógica de dominio
- Evitar duplicidades frontend/backend
- Facilitar la escalabilidad del proyecto
- Mejor coordinación en equipos pequeños

---

## 🖥️ Frontend – `apps/web`

- **Framework:** Next.js (App Router)
- **Lenguaje:** TypeScript
- **Arquitectura:** Server Components + Client Components
- **Estado:** React Hooks (Zustand previsto)
- **Estilos:** CSS / PostCSS

### Rutas principales

- `/` → Landing page
- `/muebles` → Listado de muebles disponibles
- `/configurador/[id]` → Configurador de mueble
- `/carrito` → Resumen de solicitud (pendiente)

---

## 🧩 Dominio compartido – `packages/domain`

Contiene la **lógica de negocio reutilizable**:

- Definición de tipos de muebles
- Límites de medidas
- Tipos de madera y colores
- Funciones de búsqueda y validación

Ejemplo de uso desde el frontend:

```ts
import { getMuebleById } from "@muebles/domain";
```

Este paquete está pensado para ser utilizado también por el backend en el futuro.

---

## 🚀 Puesta en marcha

### Requisitos

- Node.js >= 18
- npm >= 9

### Instalación

Desde la raíz del proyecto:

```bash
npm install
```

### Desarrollo

```bash
npm run dev
```

La aplicación estará disponible en:

```
http://localhost:3000
```

---

## 🧪 Estado actual del proyecto

- ✔️ Monorepo configurado
- ✔️ Landing page básica
- ✔️ Listado de muebles (mock)
- ✔️ Configurador funcional con validación
- ⏳ Carrito persistente
- ⏳ Envío de presupuesto por email
- ⏳ Backend API

---

## 🗺️ Roadmap técnico (alto nivel)

- [ ] Store global de carrito (Zustand)
- [ ] Página de carrito
- [ ] Backend para envío de emails
- [ ] Templates HTML de presupuesto
- [ ] Panel de administración
- [ ] Persistencia en base de datos

---

## 👥 Equipo y contribución

Proyecto en desarrollo.

Las convenciones de commits y la estrategia de ramas se documentarán próximamente.

---

## 📄 Licencia

Proyecto privado / propietario.

