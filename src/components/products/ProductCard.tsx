'use client'

import Link from 'next/link'
import { BadgeCheck, ExternalLink, MessageCircle } from 'lucide-react'
import { UpvoteButton } from './UpvoteButton'

interface ProductCardProps {
  product: {
    id: string
    name: string
    slug: string
    tagline: string
    logo?: string | null
    website: string
    isVerified?: boolean
    category?: { name: string } | null
    _count?: { upvotes: number; comments: number }
  }
  rank?: number
  isTrending?: boolean
}

export function ProductCard({ product, rank }: ProductCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-lg hover:border-[#4DD4E8]/30 transition-all group">
      <div className="flex items-center gap-4">
        {/* Rank */}
        {rank && (
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1E3A5F] to-[#2d5a8f] flex items-center justify-center text-white font-bold text-sm">
            {rank}
          </div>
        )}

        {/* Logo */}
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#E8F4FD] to-[#D4EDFC] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform overflow-hidden">
          {product.logo ? (
            <img src={product.logo} alt={product.name} className="w-full h-full object-cover" />
          ) : (
            <span className="text-xl font-bold text-[#1E3A5F]">{product.name.charAt(0)}</span>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <Link href={`/products/${product.slug}`} className="font-semibold text-[#1E3A5F] hover:text-[#4DD4E8] transition-colors">
              {product.name}
            </Link>
            {product.isVerified && <BadgeCheck className="w-4 h-4 text-[#4DD4E8]" />}
            <a href={product.website} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#4DD4E8]">
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
          <p className="text-sm text-gray-500 line-clamp-1 mb-2">{product.tagline}</p>
          <div className="flex items-center gap-3">
            <span className="text-xs bg-[#E8F4FD] text-[#1E3A5F] px-2.5 py-1 rounded-lg font-medium">
              {product.category?.name || 'General'}
            </span>
            <span className="text-xs text-gray-400 flex items-center gap-1">
              <MessageCircle className="w-3 h-3" />
              {product._count?.comments || 0}
            </span>
          </div>
        </div>

        {/* Upvote */}
        <UpvoteButton productId={product.id} initialCount={product._count?.upvotes || 0} />
      </div>
    </div>
  )
}
