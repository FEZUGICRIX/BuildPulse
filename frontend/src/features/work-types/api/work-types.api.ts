import { apiClient } from '@/shared/api'
import { WorkType } from '../types/work-type.types'

export async function fetchWorkTypes(): Promise<WorkType[]> {
	return apiClient.get<WorkType[]>('/api/work-types')
}
