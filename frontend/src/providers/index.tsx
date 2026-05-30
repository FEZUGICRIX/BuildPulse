import { ThemeProvider } from 'next-themes'
import { QueryProvider } from './query-provider'

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<ThemeProvider attribute='class' defaultTheme='light' storageKey='buildpulse_theme' enableSystem={false} disableTransitionOnChange>
			<QueryProvider>{children}</QueryProvider>
		</ThemeProvider>
	)
}
