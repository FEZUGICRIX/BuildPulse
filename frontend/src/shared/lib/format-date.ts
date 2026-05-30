export function getTodayString(): string {
	const today = new Date()
	const yyyy = today.getFullYear()
	const mm = String(today.getMonth() + 1).padStart(2, '0')
	const dd = String(today.getDate()).padStart(2, '0')
	return `${yyyy}-${mm}-${dd}`
}

export function formatDateRu(dateStr: string): string {
	try {
		const m = dateStr.match(/^(\d{2})T.*\.(\d{2})\.(\d{4})$/)
		if (m) {
			const [, day, month, year] = m
			return new Date(`${year}-${month}-${day}`)
				.toLocaleDateString('ru-RU', {
					day: 'numeric',
					month: 'long',
					year: 'numeric',
				})
				.replace(/г\.?$/, 'г.')
		}
		const d = new Date(dateStr)
		if (!isNaN(d.getTime())) {
			return d
				.toLocaleDateString('ru-RU', {
					day: 'numeric',
					month: 'long',
					year: 'numeric',
				})
				.replace(/г\.?$/, 'г.')
		}
		return dateStr
	} catch {
		return dateStr
	}
}
