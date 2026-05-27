# AGENTS.md — BuildPulse

## Project Overview

BuildPulse — Журнал работ на строительном объекте. Монорепо с двумя приложениями:

- `frontend/` — Next.js (App Router) + Tailwind CSS + Shadcn/ui + TanStack Query/Table + Zod
- `backend/` — NestJS + Prisma + PostgreSQL

## Commands

**ВЕЗДЕ использовать pnpm, НЕ npm.**

### Backend
```bash
# development
cd backend && pnpm run start:dev

# test
cd backend && pnpm run test        # unit
cd backend && pnpm run test:e2e    # e2e (supertest)

# prisma
cd backend && pnpm exec prisma generate
cd backend && pnpm exec prisma db push
cd backend && pnpm exec prisma db seed
cd backend && pnpm exec prisma migrate dev --name <name>

# prisma (after generate, rewrite .ts to .js)
cd backend && pnpm run prisma:setup          # generate + compile
cd backend && pnpm run prisma:compile        # only compile .ts → .js
```

### Frontend
```bash
cd frontend && pnpm run dev
```

### Docker
```bash
docker compose up --build
```

### Package management
- Всегда использовать `pnpm` вместо npm
- `pnpm install` вместо `npm install`
- `pnpm add <pkg>` вместо `npm install <pkg>`
- `pnpm add -D <pkg>` вместо `npm install -D <pkg>`
- `pnpm exec` вместо `npx`

## Conventions

### Architecture
- `docker-compose.yml` поднимает 3 сервиса: `postgres`, `backend`, `frontend`
- `backend/` — NestJS с модулями: `work-types`, `work-logs`, `prisma`
- `frontend/` — Next.js App Router, единственная страница `/`
- Фронтенд стучится к NestJS напрямую (CORS) или через Next.js API Routes

### Database (PostgreSQL + Prisma)

**WorkType** — справочник видов работ
- `id` (uuid, PK)
- `name` (string, unique)
- `unit` (string) — "м³", "м²", "шт", "кг"
- `createdAt`, `updatedAt`

**WorkLog** — запись журнала
- `id` (uuid, PK)
- `date` (date)
- `workTypeId` (FK → WorkType)
- `volume` (float)
- `executorName` (string)
- `createdAt`, `updatedAt`

Seed: WorkType заполняется 5–10 предопределёнными видами работ.

### API (NestJS REST)

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/work-types` | Справочник видов работ |
| GET | `/api/work-logs?dateFrom=&dateTo=&sortField=&sortOrder=&page=&limit=` | Список записей с пагинацией |
| POST | `/api/work-logs` | Создать запись |
| PATCH | `/api/work-logs/:id` | Обновить запись |
| DELETE | `/api/work-logs/:id` | Удалить запись |

DTO: `CreateWorkLogDto`, `UpdateWorkLogDto`, `QueryWorkLogDto`. Валидация — Zod или class-validator.

### Frontend patterns
- **Стейт**: TanStack Query для серверных данных
- **Таблица**: TanStack Table (Shadcn DataTable компонент)
- **Формы**: react-hook-form + Zod (Shadcn Form)
- **UI**: Shadcn/ui компоненты (Dialog, Button, Input, Select, DatePicker, Table)
- **Сортировка**: по всем колонкам (щёлчок по заголовку)
- **Фильтрация**: по диапазону дат (DatePicker)
- **Пагинация**: 20 записей на странице, кнопки "Предыдущая/Следующая", индикатор "Страница X из Y"

### Code style
- TypeScript strict mode
- ESLint + Prettier (flat config)
- Комментарии не добавлять
- Следовать существующим паттернам в файле при редактировании

## Development Order (SDD)

1. **Инфраструктура** — docker-compose, Prisma schema + seed, NestJS scaffold
2. **API** — e2e-тесты → контроллеры → сервисы → DTO
3. **Фронтенд** — Next.js scaffold → Shadcn → TanStack Query → компоненты
4. **README.md**

## Workflow
- Сначала прочитать spec из `.kiro/specs/construction-work-journal/` и `Plan.md`
- Todo-лист вести через `todowrite`
- Перед каждым изменением читать файл, который будет правиться
- После реализации — проверять TypeScript и линтер
- **Перед любым действием** — запрашивать Context7 MCP (search + docs) для проверки best practices и актуальной документации используемых библиотек (Prisma, NestJS, Next.js, Shadcn/ui, TanStack Query/Table и т.д.)
