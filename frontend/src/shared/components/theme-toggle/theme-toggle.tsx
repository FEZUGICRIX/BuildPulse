'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/shared/components/ui/button'

export function ThemeToggle() {
	const { theme, setTheme } = useTheme()
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) {
		return (
			<Button variant='ghost' size='icon' className='hover:bg-surface-tertiary transition-colors' aria-label='Переключить тему'>
				<Sun className='h-5 w-5 text-text-secondary' />
			</Button>
		)
	}

	return (
		<Button
			variant='ghost'
			size='icon'
			onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
			className='hover:bg-surface-tertiary transition-colors'
			aria-label={theme === 'light' ? 'Переключить на тёмную тему' : 'Переключить на светлую тему'}
		>
			{theme === 'light' ? (
				<Moon className='h-5 w-5 text-text-secondary' />
			) : (
				<Sun className='h-5 w-5 text-text-secondary' />
			)}
		</Button>
	)
}
