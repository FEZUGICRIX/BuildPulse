'use client'

import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
} from '@/shared/components/ui/dialog'
import { Button } from '@/shared/components/ui/button'
import { Input } from '@/shared/components/ui/input'
import { Label } from '@/shared/components/ui/label'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/shared/components/ui/select'
import { WorkLog } from '../types/work-log.types'
import { WorkType, useWorkTypes } from '@/features/work-types'
import { workLogSchema, WorkLogFormData } from '../schemas/work-log.schemas'
import { getTodayString } from '@/shared/lib'

interface WorkLogDialogProps {
	isOpen: boolean
	onClose: () => void
	onSubmit: (data: WorkLogFormData) => Promise<void>
	logToEdit: WorkLog | null
	isSaving: boolean
}

export function WorkLogDialog({
	isOpen,
	onClose,
	onSubmit,
	logToEdit,
	isSaving,
}: WorkLogDialogProps) {
	const { data: workTypes = [] } = useWorkTypes()

	const {
		register,
		handleSubmit,
		reset,
		setValue,
		watch,
		formState: { errors },
	} = useForm<WorkLogFormData>({
		resolver: zodResolver(workLogSchema),
		defaultValues: { date: '', workTypeId: '', volume: undefined, executorName: '' },
	})

	const selectedWorkTypeId = watch('workTypeId')
	const selectedWorkType = workTypes.find((wt: WorkType) => wt.id === selectedWorkTypeId)
	const selectedUnit = selectedWorkType?.unit || 'ед'

	useEffect(() => {
		if (isOpen) {
			if (logToEdit) {
				reset({
					date: logToEdit.date.split('T')[0],
					workTypeId: logToEdit.workTypeId,
					volume: logToEdit.volume,
					executorName: logToEdit.executorName,
				})
			} else {
				reset({ date: getTodayString(), workTypeId: '', volume: undefined, executorName: '' })
			}
		}
	}, [isOpen, logToEdit, reset])

	const onFormSubmit = async (data: WorkLogFormData) => {
		await onSubmit(data)
	}

	return (
		<Dialog
			open={isOpen}
			onOpenChange={(open) => {
				if (!open) onClose()
			}}
		>
			<DialogContent className='sm:max-w-md'>
				<DialogHeader>
					<DialogTitle>{logToEdit ? 'Редактирование записи' : 'Добавление записи'}</DialogTitle>
					<DialogDescription>
						Заполните поля для {logToEdit ? 'обновления' : 'создания'} записи в журнале работ
					</DialogDescription>
				</DialogHeader>

				<form onSubmit={handleSubmit(onFormSubmit)} className='space-y-4'>
					<div className='space-y-2'>
						<Label htmlFor='date'>Дата выполнения</Label>
						<Input
							id='date'
							type='date'
							max={getTodayString()}
							{...register('date')}
							aria-invalid={!!errors.date}
						/>
						{errors.date && (
							<p className='text-xs text-danger font-medium'>{errors.date.message}</p>
						)}
					</div>

					<div className='space-y-2'>
						<Label htmlFor='workTypeId'>Вид работ</Label>
						<Select
							value={selectedWorkTypeId}
							onValueChange={(val) => val && setValue('workTypeId', val, { shouldValidate: true })}
						>
							<SelectTrigger id='workTypeId' className='w-full'>
								<SelectValue placeholder='Выберите вид работ'>
									{(value: string | null) => {
										if (!value) return 'Выберите вид работ'
										const wt = workTypes.find((w: WorkType) => w.id === value)
										return wt ? `${wt.name} (${wt.unit})` : value
									}}
								</SelectValue>
							</SelectTrigger>
							<SelectContent collisionAvoidance={{ side: 'none' }}>
								{workTypes.map((wt: WorkType) => (
									<SelectItem key={wt.id} value={wt.id}>
										{wt.name} ({wt.unit})
									</SelectItem>
								))}
							</SelectContent>
						</Select>
						{errors.workTypeId && (
							<p className='text-xs text-danger font-medium'>{errors.workTypeId.message}</p>
						)}
					</div>

					<div className='space-y-2'>
						<Label htmlFor='volume'>Объём ({selectedUnit})</Label>
						<Input
							id='volume'
							type='number'
							step='0.01'
							placeholder='0.00'
							{...register('volume')}
							aria-invalid={!!errors.volume}
						/>
						{errors.volume && (
							<p className='text-xs text-danger font-medium'>{errors.volume.message}</p>
						)}
					</div>

					<div className='space-y-2'>
						<Label htmlFor='executorName'>ФИО исполнителя</Label>
						<Input
							id='executorName'
							placeholder='Иванов И.И.'
							{...register('executorName')}
							aria-invalid={!!errors.executorName}
						/>
						{errors.executorName && (
							<p className='text-xs text-danger font-medium'>{errors.executorName.message}</p>
						)}
					</div>

					<div className='flex justify-end gap-3 pt-2'>
						<Button type='button' variant='outline' onClick={onClose} disabled={isSaving}>
							Отмена
						</Button>
						<Button type='submit' disabled={isSaving}>
							{isSaving ? 'Сохранение...' : 'Сохранить'}
						</Button>
					</div>
				</form>
			</DialogContent>
		</Dialog>
	)
}
