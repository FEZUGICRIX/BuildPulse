export const workTypesKeys = {
	all: ['work-types'] as const,
	list: () => [...workTypesKeys.all, 'list'] as const,
}
