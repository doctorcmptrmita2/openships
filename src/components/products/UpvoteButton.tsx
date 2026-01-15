'use client'

import { useState } from 'react'
import { ChevronUp } from 'lucide-react'

interface UpvoteButtonProps {
  productId: string
  initialCount: number
  size?: 'sm' | 'md'
}

export function UpvoteButton({ productId, initialCount, size = 'md' }: UpvoteButtonProps) {
  const [count, setCount] = useState(initialCount)
  const [isUpvoted, setIsUpvoted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleUpvote = async () => {
    setIsLoading(true)
    try {
      const res = await fetch('/api/upvote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId }),
      })
      
      if (res.ok) {
        const data = await res.json()
        setCount(data.count)
        setIsUpvoted(data.upvoted)
      }
    } catch (error) {
      console.error('Upvote error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const sizeClasses = size === 'sm' 
    ? 'px-2.5 py-1.5 text-sm gap-1'
    : 'px-4 py-2.5 text-base gap-1.5'

  const iconSize = size === 'sm' ? 'w-4 h-4' : 'w-5 h-5'

  return (
    <button
      onClick={handleUpvote}
      disabled={isLoading}
      className={`flex flex-col items-center ${sizeClasses} rounded-xl font-medium transition-all ${
        isUpvoted
          ? 'bg-[#1E3A5F] text-white'
          : 'bg-gray-50 text-gray-600 hover:bg-[#E8F4FD] hover:text-[#1E3A5F]'
      } ${isLoading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
    >
      <ChevronUp className={iconSize} />
      <span className="font-semibold">{count}</span>
    </button>
  )
}
