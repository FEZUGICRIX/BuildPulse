import { WorkType } from '@/features/work-types'

export interface WorkLog {
	id: string
	date: string
	workTypeId: string
	volume: number
	executorName: string
	createdAt: string
	updatedAt: string
	workType: WorkType
}

export interface WorkLogFilters {
	dateFrom: string
	dateTo: string
}

export interface CreateWorkLogData {
	date: string
	workTypeId: string
	volume: number
	executorName: string
}

export interface UpdateWorkLogData extends CreateWorkLogData {}

export interface WorkLogsQueryParams extends Record<string, string | number | boolean | undefined> {
	dateFrom?: string
	dateTo?: string
	sortField?: string
	sortOrder?: 'asc' | 'desc'
	page?: number
	limit?: number
}
