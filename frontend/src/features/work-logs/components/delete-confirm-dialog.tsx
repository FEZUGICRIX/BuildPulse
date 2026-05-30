'use client'

import { Trash2 } from 'lucide-react'
import { WorkLog } from '../types/work-log.types'
import { WORK_TYPE_ICONS } from '@/features/work-types'
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
} from '@/shared/components/ui/dialog'
import { Button } from '@/shared/components/ui/button'
import { formatDateRu } from '@/shared/lib'

interface DeleteConfirmDialogProps {
	isOpen: boolean
	onClose: () => void
	onConfirm: () => Promise<void>
	record: WorkLog | null
	isDeleting: boolean
}

export function DeleteConfirmDialog({
	isOpen,
	onClose,
	onConfirm,
	record,
	isDeleting,
}: DeleteConfirmDialogProps) {
	if (!record) return null

	const workTypeName = record.workType?.name || 'Неизвестная работа'
	const WorkTypeIcon = WORK_TYPE_ICONS[workTypeName]
	const workTypeUnit = record.workType?.unit || ''

	return (
		<Dialog
			open={isOpen}
			onOpenChange={(open) => {
				if (!open) onClose()
			}}
		>
			<DialogContent className='sm:max-w-sm'>
				<DialogHeader>
					<div className='mx-auto w-12 h-12 rounded-full bg-danger/10 dark:bg-danger/20 flex items-center justify-center mb-2 text-danger'>
						<Trash2 className='w-6 h-6' />
					</div>
					<DialogTitle className='text-center'>Удаление записи</DialogTitle>
					<DialogDescription className='text-center text-xs text-text-muted uppercase tracking-wider font-mono'>
						действие необратимо
					</DialogDescription>
				</DialogHeader>

				<div className='my-4 p-4 rounded-xl bg-surface-secondary border border-border'>
					<p className='text-sm text-text-primary font-medium flex items-center gap-2 mb-2'>
						{WorkTypeIcon && <WorkTypeIcon className='w-5 h-5 text-text-secondary' aria-hidden='true' />}
						<span>{workTypeName}</span>
					</p>
					<div className='grid grid-cols-2 gap-x-2 gap-y-1 text-xs text-text-secondary font-mono'>
						<div>Дата:</div>
						<div className='text-text-primary font-semibold text-right'>
							{formatDateRu(record.date)}
						</div>
						<div>Объём:</div>
						<div className='text-text-primary font-semibold text-right'>
							{Number(record.volume).toFixed(2)} {workTypeUnit}
						</div>
						<div>Исполнитель:</div>
						<div className='text-text-primary text-right truncate font-medium'>
							{record.executorName}
						</div>
					</div>
				</div>

				<div className='flex gap-3'>
					<Button variant='outline' className='flex-1' onClick={onClose} disabled={isDeleting}>
						Отмена
					</Button>
					<Button
						variant='destructive'
						className='flex-1'
						onClick={onConfirm}
						disabled={isDeleting}
					>
						{isDeleting ? 'Удаление...' : 'Удалить'}
					</Button>
				</div>
			</DialogContent>
		</Dialog>
	)
}
