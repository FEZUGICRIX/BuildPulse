export interface PaginatedResponse<T> {
	data: T[]
	total: number
	page: number
	limit: number
}

export interface SortingState {
	field: string
	order: 'asc' | 'desc'
}

export interface PaginationState {
	page: number
	pageSize: number
}

export type QueryParams = Record<string, string | number | boolean | undefined>
