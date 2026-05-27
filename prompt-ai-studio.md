# BuildPulse — Google AI Studio Prompt

## Project Description

BuildPulse — **Журнал работ на строительном объекте**. Одностраничное приложение для учёта строительных работ. Единственная страница — `/`.

**Tech Stack:**
- Next.js 15 (App Router)
- TypeScript (strict mode)
- Tailwind CSS v4
- shadcn/ui (Radix UI primitives)
- lucide-react (иконки)
- TanStack Query (серверный стейт)
- TanStack Table (рендеринг таблицы)
- react-hook-form + zod (формы и валидация)
- date-fns (форматирование дат)
- sonner (тосты)

---

## 1. Дизайн-система

### 1.1 Тема (CSS Variables via Tailwind)

**Режим:** только light (B2B-приложение).

```css
@theme {
  --color-brand-navy: #0B1120;
  --color-brand-navy-light: #1E293B;
  --color-brand-amber: #F59E0B;
  --color-brand-amber-hover: #D97706;
  --color-brand-amber-light: #FEF3C7;
  --color-surface: #FFFFFF;
  --color-surface-secondary: #F8FAFC;
  --color-surface-tertiary: #F1F5F9;
  --color-border: #E2E8F0;
  --color-border-light: #F1F5F9;
  --color-text-primary: #0F172A;
  --color-text-secondary: #64748B;
  --color-text-muted: #94A3B8;
  --color-danger: #EF4444;
  --color-success: #10B981;
  --radius-sm: 0.375rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-xl: 1rem;
}
```

**Типографика:**
- Font: Inter (Google Fonts)
- Page title: `text-2xl font-bold tracking-tight`
- Section headers: `text-lg font-semibold`
- Table header: `text-xs font-semibold uppercase tracking-wider text-text-secondary`
- Table body: `text-sm`
- Captions: `text-xs text-text-muted`

**Тени (слоистая иерархия):**
- Header: `shadow-[0_1px_3px_0_rgba(0,0,0,0.06),0_1px_2px_-1px_rgba(0,0,0,0.06)]`
- Cards: `shadow-[0_1px_3px_0_rgba(0,0,0,0.04),0_1px_2px_-1px_rgba(0,0,0,0.03)]`
- Modals: `shadow-[0_20px_60px_-12px_rgba(0,0,0,0.25)]`
- Toasts: `shadow-[0_8px_30px_-8px_rgba(0,0,0,0.15)]`

### 1.2 Сетка и отступы

- Page padding: `px-6 py-8` (desktop), `px-4 py-6` (mobile)
- Max width: `max-w-7xl mx-auto`
- Gap между секциями: `space-y-6`
- Card padding: `p-6`
- Table cell padding: `px-4 py-3`

---

## 2. Полная структура страницы

```
┌─────────────────────────────────────────────────────────────────────┐
│  HEADER (h-16 bg-brand-navy)                                       │
│  [🏗️] BuildPulse            Журнал работ строительного объекта    │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  TOOLBAR (card p-4)                                                │
│  [+ Добавить запись]          📅 от [____] до [____] [Прим] [Сбр] │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  DATA TABLE (card overflow-hidden)                                 │
│                                                                     │
│  ┌──────┬────────────┬──────────┬──────────────┬──────────────┐    │
│  │ Дата │ Вид работ  │ Объём    │ Исполнитель  │  Действия    │    │
│  ├──────┼────────────┼──────────┼──────────────┼──────────────┤    │
│  │15.05 │ 🧱 Кладка  │ 12.50 м³ │ Иванов И.И.  │ [✏️] [🗑️]   │    │
│  │      │ перегородок│          │              │              │    │
│  │14.05 │ 🛠 Монтаж  │  8.00 м² │ Петров П.П.  │ [✏️] [🗑️]   │    │
│  │      │ опалубки   │          │              │              │    │
│  └──────┴────────────┴──────────┴──────────────┴──────────────┘    │
│                                                                     │
│  PAGINATION                                                        │
│  Всего: 156  [← Назад]  Стр. 1 из 8  [Далее →]                    │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│  FOOTER (border-t py-4 text-center)                                │
│  BuildPulse © 2026 · Строительный учёт · v1.0.0                   │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 3. Детальная спецификация компонентов

### 3.1 Header (`<SiteHeader />`)

```
<header className="h-16 bg-brand-navy flex items-center px-6 shadow-md">
  <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-lg bg-brand-amber flex items-center justify-center">
        <HardHat className="w-5 h-5 text-white" />  // lucide-react
      </div>
      <span className="text-white font-bold text-lg tracking-tight">BuildPulse</span>
    </div>
    <span className="text-slate-400 text-sm hidden sm:block">
      Журнал работ строительного объекта
    </span>
  </div>
</header>
```

**Состояния:** статический (один вариант). Ничего не меняется.

---

### 3.2 Toolbar (`<Toolbar />`)

```
<div className="bg-surface rounded-xl shadow-sm border border-border p-4">
  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
    <!-- Left: Add button -->
    <Button className="bg-brand-amber hover:bg-brand-amber-hover text-white shadow-sm
                       transition-all duration-200 hover:shadow-md active:scale-[0.97]">
      <Plus className="w-4 h-4 mr-2" />
      Добавить запись
    </Button>

    <!-- Right: Date filter -->
    <div className="flex items-center gap-2 flex-wrap">
      <div className="flex items-center gap-1">
        <Calendar className="w-4 h-4 text-text-muted" />
        <Input type="date" className="w-36" />
      </div>
      <span className="text-text-muted">—</span>
      <div className="flex items-center gap-1">
        <Calendar className="w-4 h-4 text-text-muted" />
        <Input type="date" className="w-36" />
      </div>
      <Button variant="default" size="sm">Применить</Button>
      <Button variant="outline" size="sm">Сбросить</Button>
    </div>
  </div>
</div>
```

---

### 3.3 Data Table (`<WorkLogsTable />`)

#### 3.3.1 Техническая реализация

```typescript
// Используем @tanstack/react-table
import { useReactTable, getCoreRowModel, getSortedRowModel, getPaginationRowModel } from '@tanstack/react-table'

// Колонки определяем через хук useMemo
const columns = [
  { accessorKey: 'date', header: 'Дата', sortingFn: 'datetime' },
  { accessorKey: 'workType', header: 'Вид работ' },
  { accessorKey: 'volume', header: 'Объём', sortingFn: 'basic' },
  { accessorKey: 'executor', header: 'Исполнитель' },
  { id: 'actions', header: 'Действия', enableSorting: false },
]
```

**Сортировка:** все колонки сортируемые, кроме "Действия". Стрелка-индикатор:
- `ArrowUpDown` (lucide) — по умолчанию, серый `text-text-muted`
- `ArrowUp` — при сортировке asc (цвет `text-brand-amber`)
- `ArrowDown` — при сортировке desc (цвет `text-brand-amber`)

**Пагинация:** 20 записей на странице, TanStack Table built-in `getPaginationRowModel`.

#### 3.3.2 Визуальное оформление

```
<div className="bg-surface rounded-xl shadow-sm border border-border overflow-hidden">
  <table className="w-full">
    <thead className="bg-surface-secondary border-b border-border">
      <tr>
        <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-text-secondary">
          <button className="flex items-center gap-1.5 hover:text-text-primary transition-colors">
            Дата
            <ArrowUpDown className="w-3.5 h-3.5" />
          </button>
        </th>
        <!-- ... остальные th ... -->
      </tr>
    </thead>
    <tbody>
      {rows.map((row, i) => (
        <tr key={row.id}
            className={`border-b border-border-light last:border-0
                        transition-colors duration-150 hover:bg-surface-tertiary
                        ${i % 2 === 0 ? 'bg-surface' : 'bg-surface-secondary/30'}`}>
          <td className="px-4 py-3 font-medium">{formatDate(row.date)}</td>
          <td className="px-4 py-3">
            <span className="mr-1.5">{emojiMap[row.workType]}</span>
            {row.workType}
          </td>
          <td className="px-4 py-3 tabular-nums">{row.volume.toFixed(2)} {row.unit}</td>
          <td className="px-4 py-3">{row.executor}</td>
          <td className="px-4 py-3">
            <div className="flex items-center gap-1">
              <button className="p-1.5 rounded-md text-text-muted hover:text-brand-amber
                                 hover:bg-brand-amber-light transition-all duration-200">
                <Pencil className="w-4 h-4" />
              </button>
              <button className="p-1.5 rounded-md text-text-muted hover:text-danger
                                 hover:bg-red-50 transition-all duration-200">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
```

#### 3.3.3 Состояния

**Loading (скелетон):**
```
<tbody>
  {[1,2,3,4,5].map(i => (
    <tr key={i} className="border-b border-border-light">
      {[1,2,3,4,5].map(j => (
        <td key={j} className="px-4 py-3">
          <div className="h-4 bg-slate-200 rounded animate-pulse w-[80%]" />
        </td>
      ))}
    </tr>
  ))}
</tbody>
```

**Empty:**
```
<div className="flex flex-col items-center justify-center py-20 px-4">
  <ClipboardList className="w-16 h-16 text-slate-300 mb-4" />
  <h3 className="text-lg font-semibold text-text-primary mb-1">Записей пока нет</h3>
  <p className="text-sm text-text-muted mb-6">Начните вести журнал, добавив первую запись</p>
  <Button>+ Добавить запись</Button>
</div>
```

**Error:**
```
<div className="flex flex-col items-center justify-center py-20 px-4">
  <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mb-4">
    <AlertTriangle className="w-8 h-8 text-danger" />
  </div>
  <h3 className="text-lg font-semibold text-text-primary mb-1">Ошибка загрузки данных</h3>
  <p className="text-sm text-text-muted mb-6">Проверьте подключение к серверу</p>
  <Button variant="outline" onClick={refetch}>
    <RotateCcw className="w-4 h-4 mr-2" />
    Повторить
  </Button>
</div>
```

### 3.4 Pagination Controls

```
<div className="flex items-center justify-between px-4 py-3 border-t border-border">
  <span className="text-sm text-text-muted">
    Всего записей: <span className="font-medium text-text-primary">{total}</span>
  </span>
  <div className="flex items-center gap-2">
    <Button variant="outline" size="sm" disabled={!canPreviousPage}>
      <ChevronLeft className="w-4 h-4 mr-1" />
      Назад
    </Button>
    <span className="text-sm text-text-muted px-2">
      Стр. <span className="font-medium text-text-primary">{page}</span> из {totalPages}
    </span>
    <Button variant="outline" size="sm" disabled={!canNextPage}>
      Далее
      <ChevronRight className="w-4 h-4 ml-1" />
    </Button>
  </div>
</div>
```

---

### 3.5 WorkLogDialog (Modal — shadcn/ui Dialog)

**Trigger:** кнопка "+ Добавить запись" в тулбаре + кнопка ✏️ в таблице (в режиме редактирования).

```
<Dialog>
  <DialogContent className="sm:max-w-lg">
    <DialogHeader>
      <DialogTitle>
        {edit ? 'Редактирование записи' : 'Добавление записи'}
      </DialogTitle>
      <DialogDescription>
        Заполните поля для {edit ? 'обновления' : 'создания'} записи в журнале работ
      </DialogDescription>
    </DialogHeader>

    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <!-- Date -->
      <div className="space-y-2">
        <Label>Дата выполнения</Label>
        <div className="relative">
          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
          <Input type="date" {...register('date')} className="pl-10" />
        </div>
        {errors.date && <p className="text-xs text-danger">{errors.date.message}</p>}
      </div>

      <!-- Work Type (Select) -->
      <div className="space-y-2">
        <Label>Вид работ</Label>
        <Select onValueChange={...}>
          <SelectTrigger>
            <SelectValue placeholder="Выберите вид работ" />
          </SelectTrigger>
          <SelectContent>
            {workTypes.map(wt => (
              <SelectItem key={wt.id} value={wt.id}>
                {wt.emoji} {wt.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.workTypeId && <p className="text-xs text-danger">{errors.workTypeId.message}</p>}
      </div>

      <!-- Volume -->
      <div className="space-y-2">
        <Label>Объём</Label>
        <div className="relative">
          <Input type="number" step="0.01" {...register('volume')} className="pr-14" />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-text-muted">
            {selectedUnit || 'ед'}
          </span>
        </div>
        {errors.volume && <p className="text-xs text-danger">{errors.volume.message}</p>}
      </div>

      <!-- Executor -->
      <div className="space-y-2">
        <Label>ФИО исполнителя</Label>
        <Input placeholder="Например: Иванов И.И." {...register('executorName')} />
        {errors.executorName && <p className="text-xs text-danger">{errors.executorName.message}</p>}
      </div>

      <!-- API Error Banner -->
      {apiError && (
        <div className="flex items-center gap-2 p-3 rounded-lg bg-red-50 border border-red-200">
          <AlertTriangle className="w-4 h-4 text-danger shrink-0" />
          <p className="text-sm text-danger">{apiError}</p>
        </div>
      )}

      <DialogFooter>
        <DialogClose asChild>
          <Button variant="outline">Отмена</Button>
        </DialogClose>
        <Button type="submit" disabled={isPending} className="bg-brand-amber hover:bg-brand-amber-hover">
          {isPending ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Сохранение...
            </>
          ) : (
            'Сохранить'
          )}
        </Button>
      </DialogFooter>
    </form>
  </DialogContent>
</Dialog>
```

**Микро-анимация модалки (Tailwind + shadcn default):**
- Overlay: `data-[state=open]:animate-in fade-in-0 backdrop-blur-sm`
- Content: `data-[state=open]:animate-in zoom-in-95 slide-in-from-bottom-4 duration-200`

---

### 3.6 DeleteConfirmDialog

```
<AlertDialog>
  <AlertDialogContent className="sm:max-w-sm">
    <AlertDialogHeader>
      <div className="mx-auto w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-2">
        <Trash2 className="w-6 h-6 text-danger" />
      </div>
      <AlertDialogTitle>Удаление записи</AlertDialogTitle>
      <AlertDialogDescription>
        Вы уверены, что хотите удалить запись о работе от <strong>{record.date}</strong>
        {' '}({record.workType}, {record.volume} {record.unit})?
        <br /><br />
        Это действие нельзя отменить.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Отмена</AlertDialogCancel>
      <AlertDialogAction className="bg-danger hover:bg-red-600 text-white">
        {isPending ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : 'Удалить'}
      </AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
```

---

### 3.7 Toasts (sonner)

```typescript
import { toast } from 'sonner'

// Success
toast.success('Запись добавлена', {
  description: 'Запись от 15.05.2026 успешно добавлена в журнал',
  icon: <CheckCircle2 className="w-5 h-5 text-success" />,
})

// Error
toast.error('Ошибка сохранения', {
  description: 'Проверьте данные и попробуйте снова',
  icon: <AlertTriangle className="w-5 h-5 text-danger" />,
})
```

**Конфигурация Toaster:**
```tsx
<Toaster
  position="top-right"
  richColors
  closeButton
  duration={4000}
  visibleToasts={3}
/>
```

---

## 4. Ключевые хуки и структура данных

### 4.1 TanStack Query hooks

```typescript
// hooks/use-work-logs.ts
export function useWorkLogs(filters: WorkLogFilters) {
  return useQuery({
    queryKey: ['work-logs', filters],
    queryFn: () => fetchWorkLogs(filters),
  })
}

export function useCreateWorkLog() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: createWorkLog,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['work-logs'] })
      toast.success('Запись добавлена')
    },
    onError: () => toast.error('Ошибка при создании записи'),
  })
}

export function useUpdateWorkLog() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: updateWorkLog,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['work-logs'] })
      toast.success('Запись обновлена')
    },
    onError: () => toast.error('Ошибка при обновлении записи'),
  })
}

export function useDeleteWorkLog() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: deleteWorkLog,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['work-logs'] })
      toast.success('Запись удалена')
    },
    onError: () => toast.error('Ошибка при удалении записи'),
  })
}
```

### 4.2 Типы данных (Zod schemas)

```typescript
// lib/schemas.ts
import { z } from 'zod'

export const createWorkLogSchema = z.object({
  date: z.string().min(1, 'Дата обязательна').refine(val => {
    return new Date(val) <= new Date()
  }, 'Дата не может быть будущей'),
  workTypeId: z.string().min(1, 'Выберите вид работ'),
  volume: z.coerce.number().positive('Объём должен быть больше 0'),
  executorName: z.string().min(2, 'Введите ФИО исполнителя').max(100),
})

export type CreateWorkLogData = z.infer<typeof createWorkLogSchema>

export const workLogSchema = createWorkLogSchema.extend({
  id: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
})

export type WorkLog = z.infer<typeof workLogSchema>
```

---

## 5. Макет компонентов (файловая структура)

```
src/
├── app/
│   ├── globals.css              # Tailwind directives + theme vars
│   ├── layout.tsx               # Root layout: Inter font, Toaster, QueryClient
│   ├── page.tsx                 # Main page: assembles all components
│   └── providers.tsx            # QueryClientProvider + ThemeProvider
├── components/
│   ├── ui/                      # shadcn/ui components (generated)
│   │   ├── button.tsx
│   │   ├── dialog.tsx
│   │   ├── alert-dialog.tsx
│   │   ├── select.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   └── table.tsx
│   ├── site-header.tsx
│   ├── toolbar.tsx
│   ├── work-logs-table.tsx
│   ├── work-log-dialog.tsx
│   ├── delete-confirm-dialog.tsx
│   ├── empty-state.tsx
│   ├── error-state.tsx
│   └── loading-skeleton.tsx
├── hooks/
│   ├── use-work-logs.ts
│   └── use-work-types.ts
├── lib/
│   ├── schemas.ts
│   ├── api.ts                   # fetch functions
│   └── constants.ts             # emojiMap, workTypes, seed data
└── types/
    └── index.ts
```

---

## 6. Анимации (полный список)

| Элемент | Анимация | CSS / Tailwind |
|---------|----------|----------------|
| Page mount | Fade-in 0.3s | `animate-in fade-in duration-300` |
| Buttons hover | Scale 1.02 + shadow grow | `hover:scale-[1.02] hover:shadow-md` |
| Buttons click | Scale 0.97 | `active:scale-[0.97]` |
| Table rows hover | Background shift | `hover:bg-surface-tertiary duration-150` |
| Sort arrows | Flip 180° | `transition-transform duration-200` + `rotate-180` |
| Modal open | Scale-up + fade | `data-[state=open]:animate-in zoom-in-95` |
| Modal overlay | Fade + blur | `data-[state=open]:animate-in fade-in-0 backdrop-blur-sm` |
| Toast enter | Slide from right | sonner built-in |
| Toast dismiss | Fade out | sonner built-in |
| Skeleton | Pulse | `animate-pulse` |
| Delete btn | Shake on hover | `hover:animate-shake` (custom keyframe) |

Custom keyframes (в `globals.css`):
```css
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-2px); }
  75% { transform: translateX(2px); }
}
```

---

## 7. Seed Data (мок-данные для прототипа)

### Work Types
```typescript
export const WORK_TYPES = [
  { id: '1', name: 'Кладка перегородок', unit: 'м³', emoji: '🧱' },
  { id: '2', name: 'Монтаж опалубки', unit: 'м²', emoji: '🛠' },
  { id: '3', name: 'Бетонирование', unit: 'м³', emoji: '🏗' },
  { id: '4', name: 'Монтаж арматуры', unit: 'кг', emoji: '🔩' },
  { id: '5', name: 'Отделочные работы', unit: 'м²', emoji: '🎨' },
  { id: '6', name: 'Прочие работы', unit: 'шт', emoji: '📦' },
] as const
```

### Work Logs (10 записей)
```typescript
export const SEED_LOGS: WorkLog[] = [
  { id: '1', date: '2026-05-15', workTypeId: '1', volume: 12.50, executorName: 'Иванов И.И.', createdAt: '', updatedAt: '' },
  { id: '2', date: '2026-05-15', workTypeId: '3', volume: 8.00, executorName: 'Петров П.П.', createdAt: '', updatedAt: '' },
  { id: '3', date: '2026-05-14', workTypeId: '2', volume: 45.00, executorName: 'Сидоров А.В.', createdAt: '', updatedAt: '' },
  { id: '4', date: '2026-05-14', workTypeId: '4', volume: 120.00, executorName: 'Козлов Д.С.', createdAt: '', updatedAt: '' },
  { id: '5', date: '2026-05-13', workTypeId: '5', volume: 67.50, executorName: 'Иванов И.И.', createdAt: '', updatedAt: '' },
  { id: '6', date: '2026-05-13', workTypeId: '1', volume: 9.75, executorName: 'Михайлов Е.В.', createdAt: '', updatedAt: '' },
  { id: '7', date: '2026-05-12', workTypeId: '6', volume: 3.00, executorName: 'Петров П.П.', createdAt: '', updatedAt: '' },
  { id: '8', date: '2026-05-12', workTypeId: '3', volume: 14.25, executorName: 'Сидоров А.В.', createdAt: '', updatedAt: '' },
  { id: '9', date: '2026-05-11', workTypeId: '2', volume: 32.00, executorName: 'Козлов Д.С.', createdAt: '', updatedAt: '' },
  { id: '10', date: '2026-05-11', workTypeId: '5', volume: 88.00, executorName: 'Иванов И.И.', createdAt: '', updatedAt: '' },
]
```

В прототипе `api.ts` использует эти данные через `new Promise(resolve => setTimeout(...))` с задержкой 300-500ms.

---

## 8. Важные требования

1. **Каждая строка таблицы**: дата (dd.MM.yyyy), вид работ (с эмодзи), объём (2 знака + единица), исполнитель, действия
2. **Фильтр по дате**: range (dateFrom — dateTo), кнопка "Применить" запускает, "Сбросить" очищает
3. **Модалка создания/редактирования**: одна форма, меняется заголовок и подстановка данных
4. **Все состояния UI**: loading (skeleton), empty (иллюстрация + CTA), error (alert + retry)
5. **Адаптивность**: mobile-first, таблица горизонтально скроллится, модалки fullscreen на мобилке
6. **Сортировка**: по дате и объёму через TanStack Table (asc/desc), индикация стрелками
7. **Акцентная кнопка**: янтарная, выделяется на фоне
8. **Ховеры и переходы**: везде `transition-all duration-200`
9. **Тени**: иерархия header > cards > modals > toasts
10. **Backdrop**: `bg-black/40 backdrop-blur-sm`

---

## 9. Референс по визуальному стилю

Смесь эстетик:
- **Linear.app / Height.app** — минимализм, воздух, микро-анимации, чистый интерфейс
- **Bricks.ai / Procore** — строительная премиальность: тёмно-синий + янтарь, industrial chic
- **Notion / Plane.so** — таблицы без лишних линий, чистые строки, понятная сортировка

Главное правило: **качество на уровне production-сервиса**, не демка. Каждый пиксель продуман.
