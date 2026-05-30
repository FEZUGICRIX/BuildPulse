import { useState } from 'react'
import { WorkLog, WorkLogFilters } from '@/features/work-logs'

export function useDashboardState() {
	const [filters, setFilters] = useState<WorkLogFilters>({ dateFrom: '', dateTo: '' })
	const [sortField, setSortField] = useState('date')
	const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc')
	const [page, setPage] = useState(1)

	const [isLogDialogOpen, setIsLogDialogOpen] = useState(false)
	const [logToEdit, setLogToEdit] = useState<WorkLog | null>(null)
	const [isDeleteOpen, setIsDeleteOpen] = useState(false)
	const [logToDelete, setLogToDelete] = useState<WorkLog | null>(null)

	const handleOpenAddDialog = () => {
		setLogToEdit(null)
		setIsLogDialogOpen(true)
	}

	const handleOpenEditDialog = (log: WorkLog) => {
		setLogToEdit(log)
		setIsLogDialogOpen(true)
	}

	const handleOpenDeleteDialog = (log: WorkLog) => {
		setLogToDelete(log)
		setIsDeleteOpen(true)
	}

	const handleCloseLogDialog = () => {
		setIsLogDialogOpen(false)
		setLogToEdit(null)
	}

	const handleCloseDeleteDialog = () => {
		setIsDeleteOpen(false)
		setLogToDelete(null)
	}

	const handleSortingChange = (field: string, order: 'asc' | 'desc') => {
		setSortField(field)
		setSortOrder(order)
		setPage(1)
	}

	const handleFilterChange = (newFilters: WorkLogFilters) => {
		setFilters(newFilters)
		setPage(1)
	}

	return {
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
	}
}
