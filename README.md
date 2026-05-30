# BuildPulse

Construction work journal with type-safe full-stack architecture.

## Stack & Rationale

### Frontend

| Choice                      | Why                                                                                                                                                                                                                                    |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Next.js 16** (App Router) | File-based routing with layouts, React Server Components for reduced client bundle size, built-in optimization (code splitting, image optimization). Industry standard with strong ecosystem and TypeScript support.                   |
| **TanStack Query v5**       | Declarative server-state management with automatic caching, background refetching, and request deduplication. Eliminates boilerplate for loading states and error handling. De facto standard for async data in React.                 |
| **TanStack Table v8**       | Headless table library — provides sorting, filtering, and pagination logic without imposing UI constraints. Full control over markup and styling while avoiding reimplementation of complex table state management.                    |
| **react-hook-form + Zod**   | Uncontrolled forms minimize re-renders. Zod provides runtime validation with automatic TypeScript type inference, eliminating schema duplication. Integrates seamlessly via `@hookform/resolvers`.                                     |
| **Shadcn/ui v4**            | Copy-paste component collection built on Base UI primitives. Components live in your codebase, not as dependencies. ARIA-compliant, fully customizable with Tailwind. Base UI provides headless primitives, Shadcn adds styling layer. |
| **Tailwind CSS**            | Utility-first approach eliminates unused CSS through purging. Consistent design system via configuration. Faster iteration compared to writing custom CSS or maintaining a separate stylesheet.                                        |

### Backend

| Choice            | Why                                                                                                                                                                                                                                                                 |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **NestJS**        | Modular architecture with dependency injection enforces separation of concerns. Decorator-based routing and validation reduce boilerplate. Familiar to developers from Angular/Spring/ASP.NET backgrounds. Scales better than Express for non-trivial applications. |
| **Prisma ORM**    | Type-safe database client — queries are autocompleted and compile-checked against schema. Declarative migrations version database changes alongside code. Eliminates SQL injection risks and ORM mapping complexity.                                                |
| **PostgreSQL 16** | ACID compliance ensures data integrity. Robust relational model for foreign keys and constraints. Excellent performance for complex queries. Wide industry adoption and tooling support.                                                                            |

### Infrastructure

| Choice             | Why                                                                                                                                                                        |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Docker Compose** | Single-command startup for entire stack. Containerized dependencies eliminate "works on my machine" issues. Consistent environment across development and production.      |
| **pnpm**           | Content-addressable storage reduces disk usage. Strict dependency resolution prevents phantom dependencies. Faster installs compared to npm/yarn. Native monorepo support. |

## Quick Start

```bash
git clone <repository-url>
cd BuildPulse

docker compose up --build
docker compose up -d
```

The application will be available at:

- Frontend: http://localhost:3000
- Backend API: http://localhost:4000
- Database: localhost:5432

## Development Setup

### Prerequisites

- Node.js 20+
- pnpm 9+
- Docker & Docker Compose

### Local Development

```bash
pnpm install

docker compose up -d postgres

cd backend
pnpm exec prisma migrate dev
pnpm exec prisma db seed
pnpm run start:dev

cd ../frontend
pnpm run dev
```

## Project Structure

```
backend/
├── src/
│   ├── core/           # Shared infrastructure
│   │   ├── config/     # Environment configuration
│   │   ├── filters/    # Global exception filters
│   │   └── prisma/     # Prisma service
│   └── modules/        # Feature modules
│       ├── work-types/ # Work type reference data
│       └── work-logs/  # Work log CRUD operations
└── prisma/
    ├── schema.prisma   # Database schema
    ├── migrations/     # Version-controlled migrations
    └── seed.ts         # Initial data

frontend/
└── src/
    ├── app/            # Next.js routes
    ├── components/     # Reusable UI components
    ├── hooks/          # Custom React hooks
    └── lib/            # API client and utilities
```

## API Endpoints

| Method | Endpoint             | Description                                    |
| ------ | -------------------- | ---------------------------------------------- |
| GET    | `/api/work-types`    | List all work types                            |
| GET    | `/api/work-logs`     | Paginated work logs with filtering and sorting |
| POST   | `/api/work-logs`     | Create work log entry                          |
| PATCH  | `/api/work-logs/:id` | Update work log entry                          |
| DELETE | `/api/work-logs/:id` | Delete work log entry                          |

Query parameters for `/api/work-logs`:

- `dateFrom`, `dateTo` — date range filter
- `sortField`, `sortOrder` — column sorting
- `page`, `limit` — pagination

## Database Schema

**WorkType** — reference data for work categories

- `id` (UUID), `name` (unique), `unit`, `createdAt`, `updatedAt`

**WorkLog** — journal entries

- `id` (UUID), `date`, `workTypeId` (FK), `volume`, `executorName`, `createdAt`, `updatedAt`

## Commands

### Backend

```bash
pnpm start:dev              # Development server
pnpm test                   # Unit tests
pnpm test:e2e               # E2E tests
pnpm prisma migrate dev    # Create and apply migration
pnpm prisma db seed        # Seed database
pnpm prisma studio         # Database GUI
```

### Frontend

```bash
pnpm dev                    # Development server
pnpm build                  # Production build
pnpm lint                   # Type check
```
