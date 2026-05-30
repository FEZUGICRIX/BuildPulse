import { useQuery } from '@tanstack/react-query'
import { CACHE_TIMES } from '@/shared/config'
import { fetchWorkTypes } from './work-types.api'
import { workTypesKeys } from './work-types.keys'

export function useWorkTypes() {
	return useQuery({
		queryKey: workTypesKeys.list(),
		queryFn: fetchWorkTypes,
		staleTime: CACHE_TIMES.WORK_TYPES,
		gcTime: 10 * 60 * 1000,
	})
}
