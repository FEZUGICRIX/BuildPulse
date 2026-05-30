import { Blocks, Drill, Building2, Wrench, Paintbrush, Package, type LucideIcon } from 'lucide-react'

export const WORK_TYPE_ICONS: Record<string, LucideIcon> = {
	'Кладка перегородок': Blocks,
	'Монтаж опалубки': Drill,
	Бетонирование: Building2,
	'Монтаж арматуры': Wrench,
	'Отделочные работы': Paintbrush,
	'Прочие работы': Package,
}
