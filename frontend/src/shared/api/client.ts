import { env } from '@/shared/config/env'
import { handleApiError } from './error-handler'

export interface RequestConfig extends RequestInit {
	params?: Record<string, string | number | boolean | undefined>
}

class ApiClient {
	private baseUrl: string

	constructor(baseUrl: string) {
		this.baseUrl = baseUrl
	}

	private buildUrl(
		path: string,
		params?: Record<string, string | number | boolean | undefined>,
	): string {
		const url = new URL(path, this.baseUrl)

		if (params) {
			Object.entries(params).forEach(([key, value]) => {
				if (value !== undefined && value !== null && value !== '') {
					url.searchParams.set(key, String(value))
				}
			})
		}

		return url.toString()
	}

	async request<T>(path: string, config?: RequestConfig): Promise<T> {
		const { params, ...fetchOptions } = config || {}

		const url = this.buildUrl(path, params)

		const response = await fetch(url, {
			headers: {
				'Content-Type': 'application/json',
				...fetchOptions.headers,
			},
			...fetchOptions,
		})

		if (!response.ok) {
			await handleApiError(response)
		}

		if (response.status === 204) {
			return undefined as T
		}

		return response.json()
	}

	async get<T>(
		path: string,
		params?: Record<string, string | number | boolean | undefined>,
	): Promise<T> {
		return this.request<T>(path, { method: 'GET', params })
	}

	async post<T>(path: string, data?: unknown): Promise<T> {
		return this.request<T>(path, {
			method: 'POST',
			body: data ? JSON.stringify(data) : undefined,
		})
	}

	async patch<T>(path: string, data?: unknown): Promise<T> {
		return this.request<T>(path, {
			method: 'PATCH',
			body: data ? JSON.stringify(data) : undefined,
		})
	}

	async delete<T>(path: string): Promise<T> {
		return this.request<T>(path, { method: 'DELETE' })
	}
}

export const apiClient = new ApiClient(env.apiUrl)
