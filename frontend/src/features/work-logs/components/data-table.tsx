'use client'

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/shared/components/ui/table'
import { Button } from '@/shared/components/ui/button'
import { ChevronLeft, ChevronRight, ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react'
import { type Table as TanTable, flexRender } from '@tanstack/react-table'

const SKELETON_WIDTHS = ['70%', '85%', '50%', '75%', '60px']

interface DataTableProps<TData> {
	table: TanTable<TData>
	totalRows: number
	isLoading?: boolean
	columnsCount: number
}

export function DataTable<TData>({
	table,
	totalRows,
	isLoading,
	columnsCount,
}: DataTableProps<TData>) {
	return (
		<div className='bg-surface rounded-xl shadow-card border border-border overflow-hidden'>
			<div className='overflow-x-auto w-full'>
				<Table>
					<TableHeader className='bg-surface-secondary'>
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow key={headerGroup.id}>
								{headerGroup.headers.map((header) => (
									<TableHead
										key={header.id}
										className='px-4 py-3.5 text-xs font-semibold uppercase tracking-wider text-text-secondary'
									>
										{header.isPlaceholder ? null : header.column.getCanSort() ? (
											<button
												type='button'
												onClick={header.column.getToggleSortingHandler()}
												className='flex items-center gap-1.5 hover:text-text-primary transition-colors font-semibold'
											>
												{flexRender(header.column.columnDef.header, header.getContext())}
												{{
													asc: <ArrowUp className='w-3.5 h-3.5 text-brand-amber' />,
													desc: <ArrowDown className='w-3.5 h-3.5 text-brand-amber' />,
												}[header.column.getIsSorted() as string] ?? (
													<ArrowUpDown className='w-3.5 h-3.5 text-text-muted' />
												)}
											</button>
										) : (
											flexRender(header.column.columnDef.header, header.getContext())
										)}
									</TableHead>
								))}
							</TableRow>
						))}
					</TableHeader>
					<TableBody>
						{isLoading ? (
							Array.from({ length: 6 }).map((_, i) => (
								<TableRow key={i}>
									{Array.from({ length: columnsCount }).map((_, j) => (
										<TableCell key={j} className='px-4 py-3'>
											<div
												className='h-4 bg-surface-tertiary rounded animate-pulse'
												style={{ width: SKELETON_WIDTHS[j % SKELETON_WIDTHS.length] }}
											/>
										</TableCell>
									))}
								</TableRow>
							))
						) : table.getRowModel().rows.length ? (
							table.getRowModel().rows.map((row) => (
								<TableRow
									key={row.id}
									className='border-b border-border-light last:border-0 hover:bg-surface-tertiary transition-colors duration-150'
								>
									{row.getVisibleCells().map((cell) => (
										<TableCell key={cell.id} className='px-4 py-3 text-sm'>
											{flexRender(cell.column.columnDef.cell, cell.getContext())}
										</TableCell>
									))}
								</TableRow>
							))
						) : (
							<TableRow>
								<TableCell colSpan={columnsCount} className='h-24 text-center text-text-muted'>
									Нет записей
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>

			{!isLoading && totalRows > 0 && (
				<div className='flex flex-col sm:flex-row items-center justify-between px-4 py-3.5 border-t border-border gap-3 bg-surface-secondary/50'>
					<span className='text-xs sm:text-sm text-text-secondary font-medium'>
						Всего записей: <span className='text-text-primary font-bold'>{totalRows}</span>
					</span>
					<div className='flex items-center gap-3'>
						<Button
							variant='outline'
							size='sm'
							disabled={!table.getCanPreviousPage()}
							onClick={() => table.previousPage()}
						>
							<ChevronLeft className='w-3.5 h-3.5' />
							Назад
						</Button>
						<span className='text-xs text-text-secondary select-none font-mono'>
							Стр.{' '}
							<span className='text-text-primary font-bold'>
								{table.getState().pagination.pageIndex + 1}
							</span>{' '}
							из {table.getPageCount()}
						</span>
						<Button
							variant='outline'
							size='sm'
							disabled={!table.getCanNextPage()}
							onClick={() => table.nextPage()}
						>
							Далее
							<ChevronRight className='w-3.5 h-3.5' />
						</Button>
					</div>
				</div>
			)}
		</div>
	)
}
