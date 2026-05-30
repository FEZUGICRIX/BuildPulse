# BuildPulse

> Construction work journal with type-safe full-stack architecture

## Stack

**Frontend:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Shadcn/ui v4 (Base UI)
**State Management:** TanStack Query v5 · React Hook Form · Zod
**Backend:** NestJS · Prisma ORM · PostgreSQL 16
**Infrastructure:** Docker · pnpm

## Architecture

```
BuildPulse/
├── backend/          NestJS REST API with Prisma ORM
│   ├── src/
│   │   ├── core/     Shared infrastructure (config, filters, prisma)
│   │   └── modules/  Feature modules (work-types, work-logs)
│   └── prisma/       Schema, migrations, seed
└── frontend/         Next.js 16 App Router SPA
    └── src/
        ├── app/      Routes and layouts
        ├── components/ Reusable UI components
        ├── hooks/    Custom React hooks
        └── lib/      Utilities and API client
```

### Domain Model

**WorkType** (Reference Data)

- `id` UUID · `name` String (unique) · `unit` String · timestamps

**WorkLog** (Journal Entry)

- `id` UUID · `date` Date · `workTypeId` UUID (FK) · `volume` Float · `executorName` String · timestamps

### API Contract

| Endpoint             | Method | Query Params                                                    | Description         |
| -------------------- | ------ | --------------------------------------------------------------- | ------------------- |
| `/api/work-types`    | GET    | —                                                               | List all work types |
| `/api/work-logs`     | GET    | `dateFrom`, `dateTo`, `sortField`, `sortOrder`, `page`, `limit` | Paginated work logs |
| `/api/work-logs`     | POST   | —                                                               | Create work log     |
| `/api/work-logs/:id` | PATCH  | —                                                               | Update work log     |
| `/api/work-logs/:id` | DELETE | —                                                               | Delete work log     |

**Validation:** DTOs with class-validator decorators, runtime validation via Zod schemas

## Development

### Prerequisites

- Node.js 20+
- pnpm 9+
- Docker & Docker Compose

### Quick Start

```bash
pnpm install
docker compose up -d postgres
cd backend && pnpm exec prisma migrate dev && pnpm exec prisma db seed
pnpm run dev
```

### Backend Commands

```bash
pnpm run start:dev                        # Development server with hot reload
pnpm run build                            # Production build
pnpm run test                             # Unit tests (Jest)
pnpm run test:e2e                         # E2E tests (Supertest)
pnpm exec prisma migrate dev --name <name> # Create and apply migration
pnpm exec prisma db seed                  # Seed database
pnpm exec prisma studio                   # Database GUI
```

### Frontend Commands

```bash
pnpm run dev          # Development server (localhost:3000)
pnpm run build        # Production build
pnpm run start        # Production server
pnpm run lint         # ESLint check
```

### Docker

```bash
docker compose up --build    # Full stack (postgres + backend + frontend)
docker compose down -v       # Stop and remove volumes
```

## Code Standards

**TypeScript:** Strict mode enabled, no implicit any
**Linting:** ESLint flat config with TypeScript rules
**Formatting:** Prettier with 2-space indentation
**Testing:** Jest (unit) + Supertest (E2E)
**Git:** Conventional Commits, feature branches

### Key Principles

- Type safety across the entire stack
- Separation of concerns (modules, layers, components)
- Declarative data fetching with TanStack Query
- Server-side validation with DTOs
- Client-side validation with Zod schemas
- Optimistic UI updates for better UX
- Proper error boundaries and error handling

## Frontend Patterns

**Data Fetching:** TanStack Query with custom hooks (`useWorkLogs`, `useWorkTypes`)
**Forms:** React Hook Form + Zod resolver for type-safe validation
**Tables:** TanStack Table with server-side sorting, filtering, pagination
**UI Components:** Shadcn/ui v4 primitives built on Base UI (Dialog, Form, Table, DatePicker)
**Styling:** Tailwind utility classes with CSS variables for theming

## Backend Patterns

**Module Structure:** Controller → Service → Repository (Prisma)
**Validation:** class-validator decorators on DTOs
**Error Handling:** Global exception filters (HTTP, Prisma)
**Database:** Prisma migrations for schema versioning
**Configuration:** Environment variables with validation
