'use client'

import { useState } from 'react'
import { Flame, Clock, TrendingUp, Calendar } from 'lucide-react'
import { cn } from '@/lib/utils'

const tabs = [
  { id: 'hot', label: 'Hot', icon: Flame },
  { id: 'live', label: 'Live', icon: Clock, badge: true },
  { id: 'recent', label: 'Recent', icon: Calendar },
  { id: 'updated', label: 'Updated', icon: TrendingUp },
]

interface FilterTabsProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

export function FilterTabs({ activeTab, onTabChange }: FilterTabsProps) {
  return (
    <div className="flex items-center gap-2 p-1 bg-gray-100 rounded-lg w-fit">
      {tabs.map((tab) => {
        const Icon = tab.icon
        const isActive = activeTab === tab.id
        
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors",
              isActive 
                ? "bg-white text-gray-900 shadow-sm" 
                : "text-gray-600 hover:text-gray-900"
            )}
          >
            <Icon className="w-4 h-4" />
            {tab.label}
            {tab.badge && (
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            )}
          </button>
        )
      })}
    </div>
  )
}
