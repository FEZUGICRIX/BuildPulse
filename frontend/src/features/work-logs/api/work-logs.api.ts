import { apiClient } from '@/shared/api'
import { PaginatedResponse } from '@/shared/types'
import {
	WorkLog,
	CreateWorkLogData,
	UpdateWorkLogData,
	WorkLogsQueryParams,
} from '../types/work-log.types'

export async function fetchWorkLogs(
	params: WorkLogsQueryParams,
): Promise<PaginatedResponse<WorkLog>> {
	return apiClient.get<PaginatedResponse<WorkLog>>('/api/work-logs', params)
}

export async function createWorkLog(data: CreateWorkLogData): Promise<WorkLog> {
	return apiClient.post<WorkLog>('/api/work-logs', data)
}

export async function updateWorkLog(id: string, data: UpdateWorkLogData): Promise<WorkLog> {
	return apiClient.patch<WorkLog>(`/api/work-logs/${id}`, data)
}

export async function deleteWorkLog(id: string): Promise<void> {
	return apiClient.delete<void>(`/api/work-logs/${id}`)
}
