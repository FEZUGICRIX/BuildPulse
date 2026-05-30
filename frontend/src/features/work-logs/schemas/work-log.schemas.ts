import { z } from 'zod'

export const workLogSchema = z.object({
	date: z.string().min(1, 'Дата обязательна'),
	workTypeId: z.string().min(1, 'Выберите вид работ'),
	volume: z.coerce.number().positive('Объём должен быть больше 0'),
	executorName: z.string().min(2, 'Минимум 2 символа').max(100, 'Максимум 100 символов'),
})

export type WorkLogFormData = z.infer<typeof workLogSchema>
