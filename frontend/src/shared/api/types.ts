export interface ApiError {
	message: string
	statusCode?: number
	errors?: Record<string, string[]>
}

export interface ApiResponse<T> {
	data: T
	message?: string
}

export class ApiException extends Error {
	constructor(
		message: string,
		public statusCode?: number,
		public errors?: Record<string, string[]>,
	) {
		super(message)
		this.name = 'ApiException'
	}
}
