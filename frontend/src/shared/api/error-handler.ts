import { ApiException } from './types'

export async function handleApiError(response: Response): Promise<never> {
	let errorMessage = `HTTP ${response.status}: ${response.statusText}`
	let errors: Record<string, string[]> | undefined

	try {
		const body = await response.json()
		if (body?.message) {
			errorMessage = body.message
		}
		if (body?.errors) {
			errors = body.errors
		}
	} catch {
		// Ignore JSON parse errors
	}

	throw new ApiException(errorMessage, response.status, errors)
}

export function isApiException(error: unknown): error is ApiException {
	return error instanceof ApiException
}

export function getErrorMessage(error: unknown): string {
	if (isApiException(error)) {
		return error.message
	}
	if (error instanceof Error) {
		return error.message
	}
	return 'Произошла неизвестная ошибка'
}
