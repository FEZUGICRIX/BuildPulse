# Spec Plan: BuildPulse — Журнал работ на строительном объекте

## 1. Архитектура проекта (монорепо)
asdf
asfdasdf


buildpulse/
├── docker-compose.yml
├── frontend/          # Next.js App
├── backend/           # NestJS App
├── db/                # Инициализация БД (если нужно)
└── README.md
Docker Compose поднимает три сервиса: postgres, backend, frontend.

## 2. База данных (PostgreSQL + Prisma)
Модели:
- WorkType — справочник видов работ
- id (PK, uuid)
- name (string, unique) — "Кладка перегородок", "Монтаж опалубки" и т.д.
- unit (string) — "м³", "м²", "шт", "кг"
- createdAt, updatedAt
- WorkLog — запись журнала
- id (PK, uuid)
- date (date) — дата выполнения
- workTypeId (FK → WorkType)
- volume (float)
- executorName (string) — ФИО исполнителя
- createdAt, updatedAt
Seed: WorkType заполняется 5–10 предопределёнными видами работ.

## 3. Бэкенд (NestJS)
Модули:
- WorkTypeModule → WorkTypeService → WorkTypeController
- WorkLogModule → WorkLogService → WorkLogController

REST API:

| Method | Path | Body/Params | Description |
| :--- | :--- | :--- | :--- |
| GET | /api/work-types | — | Список всех видов работ |
| GET | /api/work-logs | ?dateFrom=&dateTo=&sortField=&sortOrder=&page=&limit= | Список записей с фильтрацией, сортировкой и пагинацией |
| POST | /api/work-logs | { date, workTypeId, volume, executorName } | Создать запись |
| PATCH | /api/work-logs/:id | { date, workTypeId, volume, executorName } | Обновить запись |
| DELETE | /api/work-logs/:id | — | Удалить запись |

Валидация (class-validator + Zod на выбор — можно NestJS pipes с Zod).
DTO: CreateWorkLogDto, UpdateWorkLogDto, QueryWorkLogDto.

## 4. Фронтенд (Next.js App Router)
Страницы:
- / — главная, список записей
- Модалка/диалог для создания/редактирования

Компоненты (Shadcn/ui):
- DataTable — TanStack Table с колонками: дата, вид работ, объём, исполнитель, действия (✏️ 🗑)
- Сортировка по всем колонкам (щёлчок по заголовку)
- Фильтр по диапазону дат (DatePicker или два inputtype=date)
- WorkLogForm — форма на Zod + react-hook-form
- Поля: date (DatePicker), workType (Select из WorkType), volume (number), unit (disabled, подставляется из WorkType), executorName (Input)
- Валидация всех полей
- DeleteConfirmDialog — подтверждение удаления

Стейт-менеджмент (TanStack Query):
- useWorkLogs(filters) — GET /api/work-logs
- useWorkTypes() — GET /api/work-types
- useCreateWorkLog() — POST /api/work-logs (invalidation)
- useUpdateWorkLog() — PATCH /api/work-logs/:id
- useDeleteWorkLog() — DELETE /api/work-logs/:id

## 5. Поток данных

[Browser] → TanStack Query → fetch → [Next.js] → API Route → fetch → [NestJS] → Prisma → [PostgreSQL]

Next.js выступает как прокси (Next.js API Route → NestJS), либо фронтенд стучится напрямую к NestJS (CORS). Для простоты — напрямую с CORS.

## 6. Порядок реализации (SDD — Spec-Driven Development)
1. Настройка инфраструктуры:
- docker-compose.yml (postgres:16, backend, frontend)
- Prisma schema + seed
- NestJS scaffold + PrismaModule
2. API спецификация → тесты:
- Написать e2e-тесты на NestJS (supertest) для всех эндпоинтов
- Реализовать контроллеры, сервисы, DTO
3. Фронтенд:
- Scaffold Next.js + shadcn/ui + TanStack Query
- Компонент SelectWorkType (загружает справочник)
- Компонент WorkLogForm (Zod + react-hook-form)
- Компонент DataTable (TanStack Table)
- Интеграция с TanStack Query
4. README.md — стек, инструкция, docker compose up

## 7. Детали реализации
Выбор стека и почему:
- Next.js — SSR/SSG, удобный роутинг, TypeScript из коробки
- Tailwind + Shadcn — быстрая стилизация без лишнего CSS
- TanStack Query + Table — декларативная работа с API и мощная таблица
- Zod — типизация форм и рантайм-валидация
- NestJS — модульная архитектура, DI, декораторы, встроенная валидация
- Prisma — type-safe ORM с автокомплитом и миграциями
- PostgreSQL — надёжная БД для production-инструментов
Feature toggle: Если реализовать редактирование и справочник — всё уже заложено в spec (WorkType model, PATCH endpoint, form в двух режимах).
Какой следующий шаг? Я могу сгенерировать Prisma-схему по этим моделям, составить файл docker-compose.yml или написать базовый роутинг для NestJS. Сообщите, что именно подготовить.
