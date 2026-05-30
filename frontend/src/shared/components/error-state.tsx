import { AlertTriangle, RotateCcw } from 'lucide-react'
import { Button } from '@/shared/components/ui/button'

interface ErrorStateProps {
	errorMsg?: string
	onRetry: () => void
}

export function ErrorState({ errorMsg, onRetry }: ErrorStateProps) {
	return (
		<div className='flex flex-col items-center justify-center py-16 px-4 text-center bg-surface rounded-xl border border-danger/20 shadow-sm transition-colors duration-200'>
			<div className='w-16 h-16 rounded-full bg-danger/10 dark:bg-danger/20 flex items-center justify-center mb-4 text-danger'>
				<AlertTriangle className='w-8 h-8' />
			</div>
			<h3 className='text-lg font-semibold text-text-primary mb-1'>Ошибка загрузки данных</h3>
			<p className='text-sm text-text-secondary max-w-sm mb-6 leading-relaxed'>
				{errorMsg || 'Проверьте подключение к серверу.'}
			</p>
			<Button variant='outline' onClick={onRetry}>
				<RotateCcw className='w-4 h-4 mr-1.5' />
				Повторить запрос
			</Button>
		</div>
	)
}
