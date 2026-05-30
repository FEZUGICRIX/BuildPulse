import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'
import { PaginatedResponse } from '@/shared/types'
import { fetchWorkLogs, createWorkLog, updateWorkLog, deleteWorkLog } from './work-logs.api'
import { workLogsKeys } from './work-logs.keys'
import {
	WorkLog,
	WorkLogFilters,
	CreateWorkLogData,
	UpdateWorkLogData,
	WorkLogsQueryParams,
} from '../types/work-log.types'

interface UseWorkLogsOptions {
	filters: WorkLogFilters
	sortField: string
	sortOrder: 'asc' | 'desc'
	page: number
	limit: number
}

export function useWorkLogs({ filters, sortField, sortOrder, page, limit }: UseWorkLogsOptions) {
	const params: WorkLogsQueryParams = {
		sortField,
		sortOrder,
		page,
		limit,
	}
	if (filters.dateFrom) params.dateFrom = filters.dateFrom
	if (filters.dateTo) params.dateTo = filters.dateTo

	return useQuery({
		queryKey: workLogsKeys.list(params),
		queryFn: () => fetchWorkLogs(params),
		placeholderData: (prev) => prev,
	})
}

export function useCreateWorkLog() {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: (data: CreateWorkLogData) => createWorkLog(data),

		onMutate: async (newLog) => {
			await queryClient.cancelQueries({ queryKey: workLogsKeys.lists() })

			const previousData = queryClient.getQueriesData({
				queryKey: workLogsKeys.lists(),
			})

			queryClient.setQueriesData<PaginatedResponse<WorkLog>>(
				{ queryKey: workLogsKeys.lists() },
				(old) => {
					if (!old) return old

					const optimisticLog: WorkLog = {
						id: `temp-${Date.now()}`,
						...newLog,
						createdAt: new Date().toISOString(),
						updatedAt: new Date().toISOString(),
						workType: {
							id: newLog.workTypeId,
							name: 'Загрузка...',
							unit: '',
							createdAt: '',
							updatedAt: '',
						},
					}

					return {
						...old,
						data: [optimisticLog, ...old.data],
						total: old.total + 1,
					}
				},
			)

			return { previousData }
		},

		onError: (err, newLog, context) => {
			if (context?.previousData) {
				context.previousData.forEach(([queryKey, data]) => {
					queryClient.setQueryData(queryKey, data)
				})
			}
			toast.error('Ошибка создания записи', {
				description: err.message || 'Попробуйте еще раз',
			})
		},

		onSettled: async () => {
			await queryClient.invalidateQueries({
				queryKey: workLogsKeys.lists(),
			})
		},

		onSuccess: () => {
			toast.success('Запись успешно добавлена')
		},
	})
}

export function useUpdateWorkLog() {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: ({ id, data }: { id: string; data: UpdateWorkLogData }) => updateWorkLog(id, data),

		onMutate: async ({ id, data }) => {
			await queryClient.cancelQueries({
				queryKey: workLogsKeys.lists(),
			})

			const previousData = queryClient.getQueriesData({
				queryKey: workLogsKeys.lists(),
			})

			queryClient.setQueriesData<PaginatedResponse<WorkLog>>(
				{ queryKey: workLogsKeys.lists() },
				(old) => {
					if (!old) return old

					return {
						...old,
						data: old.data.map((log) =>
							log.id === id ? { ...log, ...data, updatedAt: new Date().toISOString() } : log,
						),
					}
				},
			)

			return { previousData }
		},

		onError: (err, variables, context) => {
			if (context?.previousData) {
				context.previousData.forEach(([queryKey, data]) => {
					queryClient.setQueryData(queryKey, data)
				})
			}
			toast.error('Ошибка обновления записи', {
				description: err.message || 'Попробуйте еще раз',
			})
		},

		onSettled: async () => {
			await queryClient.invalidateQueries({
				queryKey: workLogsKeys.lists(),
			})
		},

		onSuccess: () => {
			toast.success('Запись успешно обновлена')
		},
	})
}

export function useDeleteWorkLog() {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: (id: string) => deleteWorkLog(id),

		onMutate: async (id) => {
			await queryClient.cancelQueries({
				queryKey: workLogsKeys.lists(),
			})

			const previousData = queryClient.getQueriesData({
				queryKey: workLogsKeys.lists(),
			})

			queryClient.setQueriesData<PaginatedResponse<WorkLog>>(
				{ queryKey: workLogsKeys.lists() },
				(old) => {
					if (!old) return old

					return {
						...old,
						data: old.data.filter((log) => log.id !== id),
						total: old.total - 1,
					}
				},
			)

			return { previousData }
		},

		onError: (err, id, context) => {
			if (context?.previousData) {
				context.previousData.forEach(([queryKey, data]) => {
					queryClient.setQueryData(queryKey, data)
				})
			}
			toast.error('Ошибка удаления записи', {
				description: err.message || 'Попробуйте еще раз',
			})
		},

		onSettled: async () => {
			await queryClient.invalidateQueries({
				queryKey: workLogsKeys.lists(),
			})
		},

		onSuccess: () => {
			toast.success('Запись успешно удалена')
		},
	})
}
