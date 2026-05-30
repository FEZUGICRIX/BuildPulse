'use client'

import { SiteHeader } from '@/widgets/site-header'
import { Toolbar, EmptyState, ErrorState } from '@/shared/components'
import {
	useWorkLogs,
	useCreateWorkLog,
	useUpdateWorkLog,
	useDeleteWorkLog,
	WorkLogDialog,
	WorkLogsTable,
	DeleteConfirmDialog,
} from '@/features/work-logs'
import { useDashboardState } from '../hooks/use-dashboard-state'

const PAGE_SIZE = 20

export function JournalDashboard() {
	const {
		filters,
		sortField,
		sortOrder,
		page,
		setPage,
		isLogDialogOpen,
		logToEdit,
		isDeleteOpen,
		logToDelete,
		handleOpenAddDialog,
		handleOpenEditDialog,
		handleOpenDeleteDialog,
		handleCloseLogDialog,
		handleCloseDeleteDialog,
		handleSortingChange,
		handleFilterChange,
	} = useDashboardState()

	const {
		data: paginatedData,
		isLoading,
		isError,
		error,
		refetch,
	} = useWorkLogs({
		filters,
		sortField,
		sortOrder,
		page,
		limit: PAGE_SIZE,
	})

	const logs = paginatedData?.data ?? []
	const total = paginatedData?.total ?? 0

	const createMutation = useCreateWorkLog()
	const updateMutation = useUpdateWorkLog()
	const deleteMutation = useDeleteWorkLog()

	const handleDialogSubmit = async (formData: {
		date: string
		workTypeId: string
		volume: number
		executorName: string
	}) => {
		if (logToEdit) {
			await updateMutation.mutateAsync({ id: logToEdit.id, data: formData })
		} else {
			await createMutation.mutateAsync(formData)
		}
		handleCloseLogDialog()
	}

	const handleDeleteConfirm = async () => {
		if (!logToDelete) return
		try {
			await deleteMutation.mutateAsync(logToDelete.id)
			handleCloseDeleteDialog()
		} catch {
			// Toast handled in mutation onError
		}
	}

	const isFiltered = !!(filters.dateFrom || filters.dateTo)

	return (
		<div className='min-h-screen bg-surface-secondary flex flex-col text-text-primary transition-colors animate-in fade-in duration-300'>
			<SiteHeader />

			<main className='flex-1 w-full max-w-7xl mx-auto px-4 py-6 md:px-6 md:py-8 space-y-6'>
				<Toolbar
					onAddClick={handleOpenAddDialog}
					filters={filters}
					onFilterChange={handleFilterChange}
				/>

				{isError ? (
					<ErrorState errorMsg={(error as Error)?.message} onRetry={refetch} />
				) : !isLoading && logs.length === 0 ? (
					<EmptyState onAddClick={handleOpenAddDialog} isFiltered={isFiltered} />
				) : (
					<WorkLogsTable
						logs={logs}
						total={total}
						isLoading={isLoading}
						page={page}
						pageSize={PAGE_SIZE}
						sorting={{ field: sortField, order: sortOrder }}
						onSortingChange={handleSortingChange}
						onPageChange={setPage}
						onEditClick={handleOpenEditDialog}
						onDeleteClick={handleOpenDeleteDialog}
					/>
				)}
			</main>

			<footer className='border-t border-border bg-surface py-5 text-center text-xs text-text-muted mt-auto transition-colors duration-200'>
				<div className='max-w-7xl mx-auto px-4 flexjustify-center '>
					<span>BuildPulse · Строительный учет и контроль видов работ</span>
				</div>
			</footer>

			<WorkLogDialog
				isOpen={isLogDialogOpen}
				onClose={handleCloseLogDialog}
				onSubmit={handleDialogSubmit}
				logToEdit={logToEdit}
				isSaving={createMutation.isPending || updateMutation.isPending}
			/>

			<DeleteConfirmDialog
				isOpen={isDeleteOpen}
				onClose={handleCloseDeleteDialog}
				onConfirm={handleDeleteConfirm}
				record={logToDelete}
				isDeleting={deleteMutation.isPending}
			/>
		</div>
	)
}
