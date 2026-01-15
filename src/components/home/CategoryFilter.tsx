'use client'

import { cn } from '@/lib/utils'
import { 
  Cpu, 
  Palette, 
  TrendingUp, 
  Code, 
  Briefcase, 
  Gamepad2,
  LayoutGrid
} from 'lucide-react'

const categories = [
  { id: 'all', name: 'All', icon: LayoutGrid },
  { id: 'ai-tools', name: 'AI Tools', icon: Cpu },
  { id: 'design', name: 'Design', icon: Palette },
  { id: 'marketing', name: 'Marketing', icon: TrendingUp },
  { id: 'developer-tools', name: 'Developer Tools', icon: Code },
  { id: 'productivity', name: 'Productivity', icon: Briefcase },
  { id: 'entertainment', name: 'Entertainment', icon: Gamepad2 },
]

interface CategoryFilterProps {
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export function CategoryFilter({ activeCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
      {categories.map((category) => {
        const Icon = category.icon
        const isActive = activeCategory === category.id
        
        return (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors",
              isActive 
                ? "bg-gray-900 text-white" 
                : "bg-white text-gray-600 border border-gray-200 hover:border-gray-300 hover:bg-gray-50"
            )}
          >
            <Icon className="w-4 h-4" />
            {category.name}
          </button>
        )
      })}
    </div>
  )
}
