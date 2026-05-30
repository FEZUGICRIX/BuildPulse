import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Providers } from '@/providers'
import { Toaster } from '@/shared/components/ui/sonner'

const inter = Inter({
	subsets: ['latin', 'cyrillic'],
	variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
	subsets: ['latin', 'cyrillic'],
	variable: '--font-jetbrains-mono',
})

export const metadata = {
	title: 'BuildPulse - Журнал производства строительных работ',
	description: 'Профессиональный цифровой учет видов работ и строительного надзора на объекте',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='ru' suppressHydrationWarning className={`${inter.variable} ${jetbrainsMono.variable}`}>
			<body className='antialiased font-sans'>
				<Providers>
					{children}
					<Toaster />
				</Providers>
			</body>
		</html>
	)
}
