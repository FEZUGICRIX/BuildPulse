import { ClipboardList, Plus } from 'lucide-react'
import { Button } from '@/shared/components/ui/button'

interface EmptyStateProps {
	onAddClick: () => void
	isFiltered?: boolean
}

export function EmptyState({ onAddClick, isFiltered = false }: EmptyStateProps) {
	return (
		<div className='flex flex-col items-center justify-center py-20 px-4 text-center bg-surface rounded-xl border border-border shadow-sm transition-colors duration-200'>
			<div className='w-16 h-16 rounded-full bg-surface-secondary border border-border flex items-center justify-center mb-4 text-text-muted'>
				<ClipboardList className='w-10 h-10' />
			</div>
			<h3 className='text-lg font-semibold text-text-primary mb-1'>
				{isFiltered ? 'Записи не найдены' : 'Записей пока нет'}
			</h3>
			<p className='text-sm text-text-secondary max-w-sm mb-6 leading-relaxed'>
				{isFiltered
					? 'Попробуйте изменить или сбросить диапазон дат в фильтрах.'
					: 'Начните вести цифровой журнал работ объекта, добавив первую рабочую запись.'}
			</p>
			<Button variant='amber' onClick={onAddClick}>
				<Plus className='w-4 h-4 mr-1.5' />
				Добавить запись
			</Button>
		</div>
	)
}
