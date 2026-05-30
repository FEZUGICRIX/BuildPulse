import { HardHat } from 'lucide-react'
import { ThemeToggle } from '@/shared/components/theme-toggle'

export function SiteHeader() {
	return (
		<header className='h-16 bg-brand-navy flex items-center px-6 shadow-card shrink-0'>
			<div className='max-w-7xl mx-auto w-full flex items-center justify-between'>
				<div className='flex items-center gap-3'>
					<div className='w-8 h-8 rounded-lg bg-brand-amber flex items-center justify-center shadow-md shadow-brand-amber/25'>
						<HardHat className='w-5 h-5 text-white' />
					</div>
					<div className='flex flex-col'>
						<span className='text-white font-bold text-lg leading-none tracking-tight'>
							BuildPulse
						</span>
						<span className='text-[10px] text-brand-amber font-mono tracking-wider mt-0.5 uppercase'>
							стройтехнадзор
						</span>
					</div>
				</div>
				<div className='flex items-center gap-3 md:gap-4'>
					<span className='text-text-muted text-sm hidden sm:block font-medium'>
						Журнал работ строительного объекта
					</span>

					<div className='p-1 rounded-lg bg-brand-navy-light hover:bg-surface-tertiary text-text-secondary hover:text-text-primary transition-all border border-border flex items-center justify-center'>
						<ThemeToggle />
					</div>
				</div>
			</div>
		</header>
	)
}
