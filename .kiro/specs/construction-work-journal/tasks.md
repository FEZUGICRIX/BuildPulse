# Implementation Plan: Журнал работ на строительном объекте

## Overview

Реализация full-stack приложения для управления журналом работ на строительном объекте. Приложение построено как монорепозиторий с backend (NestJS + Prisma + PostgreSQL) и frontend (Next.js + Shadcn/ui + TanStack Query/Table). Разработка следует порядку: инфраструктура → API → фронтенд → документация.

## Tasks

### 1. Инфраструктура и база данных

- [x] 1.1 Создать структуру монорепозитория и Docker Compose конфигурацию
  - Создать корневую структуру проекта с папками `backend/` и `frontend/`
  - Создать `docker-compose.yml` с сервисами: postgres, backend, frontend
  - Настроить переменные окружения для подключения к БД
  - _Requirements: 10.1, 10.2_

- [x] 1.2 Инициализировать NestJS backend проект
  - Создать NestJS приложение в папке `backend/`
  - Настроить TypeScript strict mode
  - Установить зависимости: @nestjs/common, @nestjs/core, @nestjs/platform-express
  - Настроить CORS для взаимодействия с frontend
  - _Requirements: 9.1_

- [x] 1.3 Настроить Prisma ORM и создать схему базы данных
  - Установить Prisma и Prisma Client
  - Создать `prisma/schema.prisma` с моделями WorkType и WorkLog
  - Настроить подключение к PostgreSQL через DATABASE_URL
  - Создать миграцию для создания таблиц work_types и work_logs
  - _Requirements: 10.1, 10.2, 10.3, 10.4, 10.5, 10.6_

- [x] 1.4 Создать seed скрипт для предзаполнения справочника видов работ
  - Создать `prisma/seed.ts` с 6 предопределенными видами работ
  - Настроить npm script для запуска seed
  - Виды работ: "Кладка перегородок" (м³), "Монтаж опалубки" (м²), "Бетонирование" (м³), "Монтаж арматуры" (кг), "Отделочные работы" (м²), "Прочие работы" (шт)
  - _Requirements: 10.7, 8.6_

- [x] 1.5 Создать PrismaModule и PrismaService
  - Создать модуль `src/prisma/prisma.module.ts`
  - Создать сервис `src/prisma/prisma.service.ts` с lifecycle hooks
  - Экспортировать PrismaService для использования в других модулях
  - _Requirements: 9.1_

### 2. Backend API - WorkTypes Module

- [x] 2.1 Создать WorkTypesModule с контроллером и сервисом
  - Создать модуль `src/work-types/work-types.module.ts`
  - Создать контроллер `src/work-types/work-types.controller.ts`
  - Создать сервис `src/work-types/work-types.service.ts`
  - Импортировать PrismaModule
  - _Requirements: 9.6, 8.1_

- [x] 2.2 Реализовать GET /api/work-types endpoint
  - Реализовать метод контроллера для получения всех видов работ
  - Реализовать метод сервиса для запроса к БД через Prisma
  - Возвращать массив объектов WorkType с полями: id, name, unit, createdAt, updatedAt
  - _Requirements: 9.6, 8.2, 8.3_

- [ ]\* 2.3 Написать e2e тесты для WorkTypes endpoints
  - Создать `test/work-types.e2e-spec.ts`
  - Тест: GET /api/work-types возвращает массив видов работ
  - Тест: GET /api/work-types возвращает HTTP 200
  - _Requirements: 9.6_

### 3. Backend API - WorkLogs Module (DTO и валидация)

- [x] 3.1 Создать DTO для WorkLogs с валидацией
  - Создать `src/work-logs/dto/create-work-log.dto.ts` с class-validator декораторами
  - Создать `src/work-logs/dto/update-work-log.dto.ts` (extends CreateWorkLogDto)
  - Создать `src/work-logs/dto/query-work-log.dto.ts` для фильтрации и пагинации
  - Валидация: date (обязателен, не позже текущей даты), workTypeId (UUID), volume (положительное число), executorName (3-100 символов)
  - _Requirements: 9.7, 9.8, 5.1, 5.2, 5.3, 5.4, 5.5, 5.6_

- [x] 3.2 Создать WorkLogsModule с контроллером и сервисом
  - Создать модуль `src/work-logs/work-logs.module.ts`
  - Создать контроллер `src/work-logs/work-logs.controller.ts`
  - Создать сервис `src/work-logs/work-logs.service.ts`
  - Импортировать PrismaModule
  - _Requirements: 9.1_

### 4. Backend API - WorkLogs CRUD endpoints

- [ ] 4.1 Реализовать GET /api/work-logs endpoint с фильтрацией, сортировкой и пагинацией
  - Реализовать метод контроллера с QueryWorkLogDto
  - Реализовать метод сервиса для запроса к БД с фильтрами (dateFrom, dateTo)
  - Поддержать сортировку по полям: date, workType, volume, executorName
  - Поддержать пагинацию (page, limit, default: 20)
  - Включить вложенный объект workType в каждую запись
  - Возвращать объект: { data: WorkLog[], total: number, page: number, limit: number }
  - _Requirements: 9.1, 9.2, 9.3, 9.4, 9.5, 1.1, 1.2, 1.3, 1.4, 2.3_

- [x] 4.2 Реализовать POST /api/work-logs endpoint
  - Реализовать метод контроллера с CreateWorkLogDto
  - Реализовать метод сервиса для создания записи в БД
  - Валидировать DTO через class-validator
  - Проверить существование workTypeId в таблице work_types
  - Возвращать HTTP 201 Created с созданной записью (включая вложенный workType)
  - _Requirements: 9.7, 9.8, 9.9, 9.17, 4.7_

- [x] 4.3 Реализовать PATCH /api/work-logs/:id endpoint
  - Реализовать метод контроллера с UpdateWorkLogDto
  - Реализовать метод сервиса для обновления записи в БД
  - Валидировать DTO через class-validator
  - Проверить существование записи (возвращать 404 если не найдена)
  - Проверить существование workTypeId в таблице work_types
  - Возвращать HTTP 200 OK с обновленной записью (включая вложенный workType)
  - _Requirements: 9.10, 9.11, 9.12, 9.15, 9.17, 6.4_

- [x] 4.4 Реализовать DELETE /api/work-logs/:id endpoint
  - Реализовать метод контроллера для удаления записи
  - Реализовать метод сервиса для удаления записи из БД
  - Проверить существование записи (возвращать 404 если не найдена)
  - Возвращать HTTP 204 No Content при успехе
  - _Requirements: 9.13, 9.14, 9.15, 7.3_

- [x] 4.5 Реализовать обработку ошибок в WorkLogs endpoints
  - Добавить обработку ValidationError (HTTP 400) с описанием ошибок для каждого поля
  - Добавить обработку NotFoundError (HTTP 404) для несуществующих записей
  - Добавить обработку ошибки "Вид работ не найден" (HTTP 400)
  - Добавить обработку внутренних ошибок сервера (HTTP 500)
  - _Requirements: 9.15, 9.16, 9.17, 9.18_

- [x] 4.6 Написать e2e тесты для WorkLogs endpoints
  - Создать `test/work-logs.e2e-spec.ts`
  - Тест: GET /api/work-logs возвращает массив записей с пагинацией
  - Тест: GET /api/work-logs с фильтрами dateFrom/dateTo
  - Тест: GET /api/work-logs с сортировкой
  - Тест: POST /api/work-logs создает новую запись
  - Тест: POST /api/work-logs возвращает 400 при невалидных данных
  - Тест: PATCH /api/work-logs/:id обновляет запись
  - Тест: PATCH /api/work-logs/:id возвращает 404 для несуществующей записи
  - Тест: DELETE /api/work-logs/:id удаляет запись
  - Тест: DELETE /api/work-logs/:id возвращает 404 для несуществующей записи
  - _Requirements: 9.1-9.18_

### 5. Checkpoint - Backend API готов

- [x] 5. Checkpoint - Убедиться, что все backend тесты проходят
  - Ensure all tests pass, ask the user if questions arise.

### 6. Frontend - Инфраструктура и настройка

- [ ] 6.1 Инициализировать Next.js frontend проект
  - Создать Next.js приложение в папке `frontend/` с App Router
  - Настроить TypeScript strict mode
  - Установить зависимости: next, react, react-dom
  - Настроить Tailwind CSS
  - _Requirements: 1.1_

- [ ] 6.2 Установить и настроить Shadcn/ui компоненты
  - Установить Shadcn/ui CLI
  - Инициализировать Shadcn/ui конфигурацию
  - Установить необходимые компоненты: Button, Dialog, Input, Select, Table, Form
  - Настроить DatePicker компонент
  - _Requirements: 4.1, 6.1, 7.1_

- [ ] 6.3 Настроить TanStack Query для управления серверным состоянием
  - Установить @tanstack/react-query
  - Создать QueryClient provider в root layout
  - Настроить devtools для разработки
  - _Requirements: 1.1_

- [ ] 6.4 Настроить TanStack Table для таблицы записей
  - Установить @tanstack/react-table
  - _Requirements: 1.2_

- [ ] 6.5 Установить react-hook-form и Zod для форм
  - Установить react-hook-form и zod
  - Установить @hookform/resolvers для интеграции Zod с react-hook-form
  - _Requirements: 4.2, 5.1_

### 7. Frontend - API клиент и типы

- [ ] 7.1 Создать TypeScript типы и интерфейсы
  - Создать `lib/types.ts` с интерфейсами: WorkType, WorkLog, CreateWorkLogRequest, UpdateWorkLogRequest, QueryWorkLogsParams, WorkLogsResponse
  - Типы должны соответствовать backend DTO
  - _Requirements: 9.7, 9.5_

- [ ] 7.2 Создать API клиент для взаимодействия с backend
  - Создать `lib/api.ts` с функциями: getWorkTypes, getWorkLogs, createWorkLog, updateWorkLog, deleteWorkLog
  - Настроить базовый URL для API запросов
  - Добавить обработку HTTP ошибок с трансформацией в понятные сообщения
  - _Requirements: 9.1, 9.6, 9.7, 9.13, 11.1, 11.2, 11.3, 11.4_

- [ ] 7.3 Создать Zod схемы для валидации форм
  - Создать `lib/schemas.ts` с Zod схемой workLogSchema
  - Валидация: date (не в будущем), workTypeId (UUID), volume (положительное число), executorName (3-100 символов)
  - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5, 5.6_

- [ ] 7.4 Создать TanStack Query hooks
  - Создать `hooks/useWorkLogs.ts` с hooks: useWorkLogs, useWorkTypes, useCreateWorkLog, useUpdateWorkLog, useDeleteWorkLog
  - Настроить invalidation queries после мутаций
  - _Requirements: 1.1, 4.8, 6.5, 7.4_

### 8. Frontend - UI компоненты

- [ ] 8.1 Создать DateFilter компонент
  - Создать `components/DateFilter.tsx` с двумя DatePicker полями
  - Добавить кнопки "Применить фильтр" и "Очистить фильтр"
  - Реализовать валидацию: dateFrom <= dateTo
  - Отображать сообщение об ошибке при некорректном диапазоне
  - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6_

- [ ] 8.2 Создать WorkLogsTable компонент с TanStack Table
  - Создать `components/WorkLogsTable.tsx` с использованием TanStack Table
  - Определить колонки: дата (формат ДД.ММ.ГГГГ), вид работ, объём (с единицей измерения, 2 знака после запятой), ФИО исполнителя, действия
  - Реализовать сортировку по всем колонкам с визуальными индикаторами
  - Добавить кнопки "Редактировать" и "Удалить" для каждой строки
  - Отображать состояния: loading, error, empty ("Записей не найдено")
  - _Requirements: 1.1, 1.2, 1.5, 3.1, 3.2, 3.4_

- [ ] 8.3 Добавить пагинацию в WorkLogsTable
  - Реализовать пагинацию с кнопками "Предыдущая" и "Следующая"
  - Отображать индикатор "Страница X из Y"
  - Показывать пагинацию только если записей > 20
  - _Requirements: 1.3_

- [ ] 8.4 Создать WorkLogDialog компонент для создания/редактирования
  - Создать `components/WorkLogDialog.tsx` с режимами create/edit
  - Добавить поля: date (DatePicker), workTypeId (Select), volume (Input), executorName (Input)
  - Использовать react-hook-form + Zod для валидации
  - Загружать справочник видов работ через useWorkTypes hook
  - Отображать единицу измерения при выборе вида работ
  - Показывать индикатор загрузки при отправке
  - Отключать кнопку "Сохранить" во время отправки
  - Отображать ошибки валидации под полями
  - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 6.1, 6.2, 8.4, 8.5_

- [ ] 8.5 Добавить диалог подтверждения при закрытии формы с несохраненными изменениями
  - Отслеживать изменения в форме через react-hook-form
  - Показывать диалог "У вас есть несохраненные изменения. Вы уверены, что хотите закрыть форму?" при попытке закрытия
  - _Requirements: 12.5_

- [ ] 8.6 Создать DeleteConfirmDialog компонент
  - Создать `components/DeleteConfirmDialog.tsx`
  - Отображать сообщение: "Вы уверены, что хотите удалить эту запись? Это действие нельзя отменить."
  - Добавить кнопки "Удалить" и "Отмена"
  - _Requirements: 7.1, 7.2, 7.6_

### 9. Frontend - Главная страница и интеграция

- [ ] 9.1 Создать главную страницу app/page.tsx
  - Создать layout с заголовком "Журнал работ на строительном объекте"
  - Добавить кнопку "Добавить запись" для открытия WorkLogDialog
  - Интегрировать DateFilter компонент
  - Интегрировать WorkLogsTable компонент
  - Управлять состоянием фильтров (dateFrom, dateTo)
  - _Requirements: 1.1, 2.1, 4.1_

- [ ] 9.2 Реализовать обработку ошибок на фронтенде
  - Отображать сообщение "Ошибка загрузки данных. Пожалуйста, проверьте соединение и обновите страницу" при ошибке загрузки
  - Отображать сообщение "Ошибка подключения к серверу. Пожалуйста, проверьте интернет-соединение и попробуйте снова" при недоступности сервера
  - Отображать сообщение "Запись не найдена" при HTTP 404
  - Отображать сообщение "Ошибка сервера. Пожалуйста, попробуйте позже" при HTTP 500
  - Отображать ошибки валидации с описанием проблемы при HTTP 400
  - _Requirements: 1.6, 4.9, 6.6, 7.5, 11.1, 11.2, 11.3, 11.4_

- [ ] 9.3 Реализовать управление состоянием формы
  - Отслеживать изменения в каждом поле формы
  - Отключать кнопку "Сохранить" и показывать индикатор загрузки при отправке
  - Включать кнопку после завершения запроса
  - Закрывать форму без сохранения при нажатии "Отмена"
  - _Requirements: 12.1, 12.2, 12.3, 12.4_

- [ ] 9.4 Добавить toast уведомления для успешных операций
  - Показывать "Запись успешно добавлена" после создания
  - Показывать "Запись успешно обновлена" после редактирования
  - Показывать "Запись успешно удалена" после удаления
  - _Requirements: 4.8_

### 10. Checkpoint - Frontend готов

- [ ] 10. Checkpoint - Убедиться, что приложение работает корректно
  - Ensure all tests pass, ask the user if questions arise.

### 11. Документация и финализация

- [ ] 11.1 Создать README.md с инструкциями по запуску
  - Описать структуру проекта
  - Добавить инструкции по установке зависимостей
  - Добавить команды для запуска через Docker Compose
  - Добавить команды для локальной разработки (backend, frontend)
  - Добавить инструкции по работе с Prisma (миграции, seed)
  - Описать API endpoints
  - Добавить информацию о технологическом стеке

- [ ] 11.2 Настроить ESLint и Prettier
  - Настроить ESLint для backend и frontend
  - Настроить Prettier с flat config
  - Добавить npm scripts для линтинга
  - Проверить код на соответствие стандартам

- [ ] 11.3 Финальная проверка и тестирование
  - Запустить приложение через Docker Compose
  - Проверить все CRUD операции
  - Проверить фильтрацию, сортировку и пагинацию
  - Проверить валидацию на клиенте и сервере
  - Проверить обработку ошибок
  - Убедиться, что все требования выполнены

## Notes

- Задачи, отмеченные `*`, являются опциональными и могут быть пропущены для быстрого MVP
- Каждая задача ссылается на конкретные требования для отслеживаемости
- Разработка следует порядку: инфраструктура → API → фронтенд → документация (SDD)
- Backend использует NestJS + Prisma + PostgreSQL с class-validator для валидации
- Frontend использует Next.js (App Router) + Shadcn/ui + TanStack Query/Table + Zod
- Все компоненты используют TypeScript strict mode
- Checkpoint задачи обеспечивают инкрементальную валидацию
- E2e тесты используют supertest для тестирования API endpoints
- Монорепозиторий с раздельными папками `backend/` и `frontend/`
- Docker Compose поднимает 3 сервиса: postgres, backend, frontend

## Task Dependency Graph

```json
{
	"waves": [
		{ "id": 0, "tasks": ["1.1"] },
		{ "id": 1, "tasks": ["1.2", "1.3"] },
		{ "id": 2, "tasks": ["1.4", "1.5"] },
		{ "id": 3, "tasks": ["2.1", "3.1", "3.2"] },
		{ "id": 4, "tasks": ["2.2", "2.3"] },
		{ "id": 5, "tasks": ["4.1", "4.2", "4.3", "4.4"] },
		{ "id": 6, "tasks": ["4.5", "4.6"] },
		{ "id": 7, "tasks": ["6.1"] },
		{ "id": 8, "tasks": ["6.2", "6.3", "6.4", "6.5"] },
		{ "id": 9, "tasks": ["7.1", "7.2", "7.3"] },
		{ "id": 10, "tasks": ["7.4"] },
		{ "id": 11, "tasks": ["8.1", "8.2"] },
		{ "id": 12, "tasks": ["8.3", "8.4", "8.6"] },
		{ "id": 13, "tasks": ["8.5"] },
		{ "id": 14, "tasks": ["9.1"] },
		{ "id": 15, "tasks": ["9.2", "9.3", "9.4"] },
		{ "id": 16, "tasks": ["11.1", "11.2"] },
		{ "id": 17, "tasks": ["11.3"] }
	]
}
```
