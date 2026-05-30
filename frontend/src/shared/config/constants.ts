export const PAGINATION = {
	DEFAULT_PAGE_SIZE: 20,
	MAX_PAGE_SIZE: 100,
	PAGE_SIZE_OPTIONS: [10, 20, 30, 50, 100],
} as const

export const CACHE_TIMES = {
	WORK_TYPES: 5 * 60 * 1000,
	WORK_LOGS: 30 * 1000,
} as const

export const API_CONFIG = {
	TIMEOUT: 10000,
} as const
