'use client'

import { useMemo } from 'react'
import {
	createColumnHelper,
	useReactTable,
	getCoreRowModel,
	type SortingState,
	type PaginationState,
} from '@tanstack/react-table'
import { Pencil, Trash2 } from 'lucide-react'
import { WorkLog } from '../types/work-log.types'
import { WORK_TYPE_ICONS } from '@/features/work-types'
import { formatDateRu } from '@/shared/lib'
import { DataTable } from './data-table'

interface WorkLogsTableProps {
	logs: WorkLog[]
	total: number
	isLoading: boolean
	page: number
	pageSize: number
	sorting: { field: string; order: 'asc' | 'desc' }
	onSortingChange: (field: string, order: 'asc' | 'desc') => void
	onPageChange: (page: number) => void
	onEditClick: (log: WorkLog) => void
	onDeleteClick: (log: WorkLog) => void
}

const columnHelper = createColumnHelper<WorkLog>()

export function WorkLogsTable({
	logs,
	total,
	isLoading,
	page,
	pageSize,
	sorting,
	onSortingChange,
	onPageChange,
	onEditClick,
	onDeleteClick,
}: WorkLogsTableProps) {
	const columns = useMemo(
		() => [
			columnHelper.accessor('date', {
				header: 'Дата',
				cell: (info) => formatDateRu(info.getValue()),
			}),
			columnHelper.accessor((row) => row.workType?.name ?? '', {
				id: 'workType',
				header: 'Вид работ',
				cell: (info) => {
					const name = info.getValue<string>()
					const Icon = WORK_TYPE_ICONS[name]
					return (
						<div className='flex items-center gap-2'>
							{Icon && <Icon className='w-5 h-5 text-text-secondary shrink-0' aria-hidden='true' />}
							<span className='truncate max-w-45 sm:max-w-xs md:max-w-sm' title={name}>
								{name}
							</span>
						</div>
					)
				},
			}),
			columnHelper.accessor('volume', {
				header: 'Объём',
				cell: (info) => {
					const row = info.row.original
					const volume = Number(info.getValue())
					return (
						<span className='tabular-nums font-mono'>
							{Number.isFinite(volume) ? volume.toFixed(2) : '—'}{' '}
							<span className='text-text-secondary text-xs'>{row.workType?.unit}</span>
						</span>
					)
				},
			}),
			columnHelper.accessor('executorName', {
				header: 'Исполнитель',
			}),
			columnHelper.display({
				id: 'actions',
				header: 'Действия',
				cell: (info) => (
					<div className='flex items-center gap-1'>
						<button
							type='button'
							onClick={() => onEditClick(info.row.original)}
							title='Редактировать запись'
							aria-label={`Редактировать запись от ${info.row.original.date}`}
							className='p-1.5 rounded-lg text-text-muted hover:text-brand-amber hover:bg-brand-amber-light transition-all duration-200 cursor-pointer'
						>
							<Pencil className='w-4 h-4' aria-hidden='true' />
						</button>
						<button
							type='button'
							onClick={() => onDeleteClick(info.row.original)}
							title='Удалить запись'
							aria-label={`Удалить запись от ${info.row.original.date}`}
							className='p-1.5 rounded-lg text-text-muted hover:text-danger hover:bg-red-50 dark:hover:bg-red-950/40 transition-all duration-200 cursor-pointer'
						>
							<Trash2 className='w-4 h-4' aria-hidden='true' />
						</button>
					</div>
				),
			}),
		],
		[onEditClick, onDeleteClick],
	)

	const sortingState: SortingState = useMemo(
		() => [{ id: sorting.field, desc: sorting.order === 'desc' }],
		[sorting.field, sorting.order],
	)

	const paginationState: PaginationState = useMemo(
		() => ({ pageIndex: page - 1, pageSize }),
		[page, pageSize],
	)

	const table = useReactTable({
		data: logs,
		columns,
		pageCount: Math.ceil(total / pageSize),
		state: {
			sorting: sortingState,
			pagination: paginationState,
		},
		enableSortingRemoval: false,
		manualSorting: true,
		manualPagination: true,
		autoResetPageIndex: false,
		onSortingChange: (updater) => {
			const next = typeof updater === 'function' ? updater(sortingState) : updater
			const first = next[0]
			if (first) {
				onSortingChange(first.id, first.desc ? 'desc' : 'asc')
			}
		},
		onPaginationChange: (updater) => {
			const next = typeof updater === 'function' ? updater(paginationState) : updater
			onPageChange(next.pageIndex + 1)
		},
		getCoreRowModel: getCoreRowModel(),
	})

	return (
		<DataTable
			table={table}
			totalRows={total}
			isLoading={isLoading}
			columnsCount={columns.length}
		/>
	)
}
