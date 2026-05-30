'use client'

import { useState, useEffect } from 'react'
import { Plus, Filter, RotateCcw } from 'lucide-react'
import { WorkLogFilters } from '@/features/work-logs'
import { Button } from '@/shared/components/ui/button'
import { Input } from '@/shared/components/ui/input'

interface ToolbarProps {
	onAddClick: () => void
	filters: WorkLogFilters
	onFilterChange: (filters: WorkLogFilters) => void
}

export function Toolbar({ onAddClick, filters, onFilterChange }: ToolbarProps) {
	const [dateFrom, setDateFrom] = useState(filters.dateFrom)
	const [dateTo, setDateTo] = useState(filters.dateTo)
	const [errorMsg, setErrorMsg] = useState<string | null>(null)

	useEffect(() => {
		setDateFrom(filters.dateFrom)
		setDateTo(filters.dateTo)
		setErrorMsg(null)
	}, [filters])

	const handleApply = () => {
		setErrorMsg(null)
		if (dateFrom && dateTo && dateFrom > dateTo) {
			setErrorMsg('Стартовая дата не может быть больше конечной.')
			return
		}
		onFilterChange({ dateFrom, dateTo })
	}

	const handleReset = () => {
		setDateFrom('')
		setDateTo('')
		setErrorMsg(null)
		onFilterChange({ dateFrom: '', dateTo: '' })
	}

	return (
		<div className='bg-surface rounded-xl shadow-card border border-border p-4 transition-colors duration-200'>
			<div className='flex flex-col xl:flex-row items-start xl:items-center justify-between gap-4'>
				<Button
					variant='amber'
					onClick={onAddClick}
					className='w-full xl:w-auto h-10 text-sm font-semibold'
				>
					<Plus className='w-4 h-4 mr-1' />
					Добавить запись
				</Button>

				<div className='flex flex-col md:flex-row md:items-center gap-3 w-full xl:w-auto xl:justify-end'>
					<div className='flex items-center gap-2 flex-wrap w-full md:w-auto'>
						<div className='flex-1 md:flex-none'>
							<Input
								type='date'
								value={dateFrom}
								onChange={(e) => setDateFrom(e.target.value)}
								className='h-10 min-w-[140px]'
								title='Начальный интервал выполнения'
							/>
						</div>
						<span className='text-text-muted text-sm px-0.5 shrink-0'>—</span>
						<div className='flex-1 md:flex-none'>
							<Input
								type='date'
								value={dateTo}
								onChange={(e) => setDateTo(e.target.value)}
								className='h-10 min-w-[140px]'
								title='Конечный интервал выполнения'
							/>
						</div>
					</div>

					<div className='flex items-center gap-2 w-full md:w-auto shrink-0'>
						<Button
							variant='secondary'
							onClick={handleApply}
							className='flex-1 md:flex-none h-10 text-xs px-4'
						>
							<Filter className='w-4 h-4 mr-1.5' />
							Применить
						</Button>
						<Button
							variant='outline'
							onClick={handleReset}
							className='flex-1 md:flex-none h-10 text-xs px-4'
						>
							<RotateCcw className='w-4 h-4 mr-1.5' />
							Сбросить
						</Button>
					</div>
				</div>
			</div>

			{errorMsg && (
				<p className='text-xs text-danger font-semibold mt-2.5 flex items-center gap-1.5'>
					{errorMsg}
				</p>
			)}
		</div>
	)
}
