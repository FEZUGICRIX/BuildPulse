'use client'

import { useTheme as useNextTheme } from 'next-themes'
import { useCallback } from 'react'

export type Theme = 'light' | 'dark'

export function useTheme() {
	const { theme, setTheme } = useNextTheme()
	const toggleTheme = useCallback(() => {
		setTheme(theme === 'dark' ? 'light' : 'dark')
	}, [theme, setTheme])

	return {
		theme: (theme as Theme) || 'light',
		setTheme: setTheme as (t: Theme) => void,
		toggleTheme,
	}
}
