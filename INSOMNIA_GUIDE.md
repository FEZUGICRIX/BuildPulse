# Insomnia API Testing Guide

## Импорт коллекции

1. Откройте Insomnia
2. Нажмите **Import/Export** → **Import Data** → **From File**
3. Выберите файл `insomnia-collection.json`
4. Коллекция "BuildPulse API" появится в вашем workspace

## Настройка окружения

После импорта нужно настроить переменные окружения:

1. Откройте **Environments** (левый верхний угол)
2. Выберите **Base Environment**
3. Обновите переменные:

```json
{
	"base_url": "http://localhost:3000",
	"work_type_id": "ЗАМЕНИТЕ_НА_РЕАЛЬНЫЙ_UUID",
	"work_log_id": "ЗАМЕНИТЕ_НА_РЕАЛЬНЫЙ_UUID"
}
```

### Как получить реальные UUID:

1. **Запустите backend:**

   ```bash
   cd backend && pnpm run start:dev
   ```

2. **Получите work_type_id:**
   - Выполните запрос `Get All Work Types`
   - Скопируйте `id` любого вида работ из ответа
   - Вставьте в переменную `work_type_id`

3. **Получите work_log_id:**
   - Сначала создайте запись через `Create Work Log (Valid)`
   - Или выполните `Get All Work Logs` и скопируйте `id` существующей записи
   - Вставьте в переменную `work_log_id`

## Структура коллекции

### 📁 Work Types (Справочник)

- **Get All Work Types** — получить все виды работ

### 📁 Work Logs (Записи журнала)

- **Get All Work Logs (No Filters)** — все записи без фильтров
- **Get Work Logs (With Date Filter)** — фильтрация по датам
- **Get Work Logs (With Sorting)** — с сортировкой
- **Get Work Logs (With Pagination)** — с пагинацией
- **Get Work Logs (All Filters Combined)** — все фильтры вместе
- **Create Work Log (Valid)** — создать запись
- **Update Work Log (Valid)** — обновить запись
- **Delete Work Log (Valid)** — удалить запись

### 📁 Work Logs Validation (Тесты валидации)

- **Create Work Log (Future Date - Invalid)** — дата в будущем → 400
- **Create Work Log (Negative Volume - Invalid)** — отрицательный объём → 400
- **Create Work Log (Short Name - Invalid)** — короткое имя → 400
- **Create Work Log (Invalid WorkType - Invalid)** — несуществующий workTypeId → 400
- **Create Work Log (Missing Fields - Invalid)** — отсутствуют обязательные поля → 400
- **Update Work Log (Not Found - 404)** — обновление несуществующей записи → 404
- **Delete Work Log (Not Found - 404)** — удаление несуществующей записи → 404

## Порядок тестирования

### 1. Базовая проверка

```
1. Get All Work Types
   ✓ Должен вернуть 200 и массив из 6 видов работ

2. Get All Work Logs (No Filters)
   ✓ Должен вернуть 200 и объект с полями: data, total, page, limit
```

### 2. CRUD операции

```
3. Create Work Log (Valid)
   ✓ Должен вернуть 201 и созданную запись с вложенным workType
   ✓ Сохраните id из ответа в переменную work_log_id

4. Get All Work Logs (No Filters)
   ✓ Должен показать новую запись в списке

5. Update Work Log (Valid)
   ✓ Должен вернуть 200 и обновленную запись

6. Get All Work Logs (No Filters)
   ✓ Должен показать обновленные данные

7. Delete Work Log (Valid)
   ✓ Должен вернуть 204 No Content

8. Get All Work Logs (No Filters)
   ✓ Запись должна исчезнуть из списка
```

### 3. Фильтрация и сортировка

```
9. Get Work Logs (With Date Filter)
   ✓ Измените dateFrom/dateTo на нужные даты
   ✓ Должен вернуть только записи в указанном диапазоне

10. Get Work Logs (With Sorting)
    ✓ Попробуйте разные sortField: date, workType, volume, executorName
    ✓ Попробуйте sortOrder: asc, desc
    ✓ Записи должны быть отсортированы соответственно

11. Get Work Logs (With Pagination)
    ✓ Измените page и limit
    ✓ Должен вернуть правильное количество записей
    ✓ Поля page, limit, total должны быть корректными

12. Get Work Logs (All Filters Combined)
    ✓ Все фильтры должны работать вместе
```

### 4. Валидация (все должны вернуть 400 или 404)

```
13. Create Work Log (Future Date - Invalid)
    ✗ 400 Bad Request

14. Create Work Log (Negative Volume - Invalid)
    ✗ 400 Bad Request

15. Create Work Log (Short Name - Invalid)
    ✗ 400 Bad Request

16. Create Work Log (Invalid WorkType - Invalid)
    ✗ 400 Bad Request

17. Create Work Log (Missing Fields - Invalid)
    ✗ 400 Bad Request

18. Update Work Log (Not Found - 404)
    ✗ 404 Not Found

19. Delete Work Log (Not Found - 404)
    ✗ 404 Not Found
```

## Ожидаемые ответы

### GET /api/work-types

```json
[
  {
    "id": "uuid",
    "name": "Кладка перегородок",
    "unit": "м³",
    "createdAt": "2024-05-27T...",
    "updatedAt": "2024-05-27T..."
  },
  ...
]
```

### GET /api/work-logs

```json
{
	"data": [
		{
			"id": "uuid",
			"date": "2024-05-27T00:00:00.000Z",
			"workTypeId": "uuid",
			"volume": "15.50",
			"executorName": "Иванов Иван Иванович",
			"createdAt": "2024-05-27T...",
			"updatedAt": "2024-05-27T...",
			"workType": {
				"id": "uuid",
				"name": "Кладка перегородок",
				"unit": "м³",
				"createdAt": "2024-05-27T...",
				"updatedAt": "2024-05-27T..."
			}
		}
	],
	"total": 1,
	"page": 1,
	"limit": 20
}
```

### POST /api/work-logs (201 Created)

```json
{
	"id": "uuid",
	"date": "2024-05-27T00:00:00.000Z",
	"workTypeId": "uuid",
	"volume": "15.50",
	"executorName": "Иванов Иван Иванович",
	"createdAt": "2024-05-27T...",
	"updatedAt": "2024-05-27T...",
	"workType": {
		"id": "uuid",
		"name": "Кладка перегородок",
		"unit": "м³",
		"createdAt": "2024-05-27T...",
		"updatedAt": "2024-05-27T..."
	}
}
```

### Ошибка валидации (400 Bad Request)

```json
{
	"message": "Validation failed",
	"errors": {
		"volume": ["volume must be a positive number"],
		"executorName": ["executorName must be longer than or equal to 3 characters"]
	},
	"statusCode": 400
}
```

### Запись не найдена (404 Not Found)

```json
{
	"message": "Work log not found",
	"statusCode": 404
}
```

## Советы

1. **Используйте переменные окружения** — не хардкодьте UUID в запросах
2. **Создайте несколько записей** — для тестирования фильтрации и пагинации
3. **Проверяйте статус-коды** — они должны соответствовать спецификации
4. **Проверяйте структуру ответов** — все поля должны присутствовать
5. **Тестируйте граничные случаи** — пустые списки, максимальные значения и т.д.

## Troubleshooting

### Backend не отвечает

```bash
# Проверьте, что backend запущен
cd backend && pnpm run start:dev

# Проверьте, что БД запущена
docker compose up postgres
```

### Ошибка "Work type not found"

- Убедитесь, что вы обновили переменную `work_type_id` реальным UUID из GET /api/work-types

### Ошибка "Work log not found"

- Убедитесь, что вы обновили переменную `work_log_id` реальным UUID из GET /api/work-logs
- Или создайте новую запись через POST /api/work-logs

### CORS ошибки

- Backend должен быть настроен с CORS (уже настроено в проекте)
- Используйте Insomnia, а не браузер для тестирования API
