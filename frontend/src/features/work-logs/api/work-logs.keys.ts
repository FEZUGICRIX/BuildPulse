import { WorkLogsQueryParams } from '../types/work-log.types'

export const workLogsKeys = {
	all: ['work-logs'] as const,
	lists: () => [...workLogsKeys.all, 'list'] as const,
	list: (params: WorkLogsQueryParams) => [...workLogsKeys.lists(), params] as const,
	details: () => [...workLogsKeys.all, 'detail'] as const,
	detail: (id: string) => [...workLogsKeys.details(), id] as const,
}
