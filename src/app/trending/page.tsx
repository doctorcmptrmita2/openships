import Link from 'next/link'
import { db } from '@/lib/db'
import { TrendingUp, Flame, ArrowRight } from 'lucide-react'
import { Header } from '@/components/ui/Header'
import { Footer } from '@/components/ui/Footer'
import { ProductCard } from '@/components/products/ProductCard'

async function getTrendingProducts() {
  return await db.product.findMany({
    where: { status: 'APPROVED' },
    include: {
      category: true,
      user: { select: { name: true } },
      _count: { select: { upvotes: true, comments: true } }
    },
    orderBy: { upvotes: { _count: 'desc' } },
    take: 20
  })
}

export default async function TrendingPage() {
  const products = await getTrendingProducts()

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-b from-white to-[#F0F7FF] py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-[#FEF3C7] text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Flame className="w-4 h-4" />
            Hot Right Now
          </div>
          <h1 className="text-4xl font-bold text-[#1E3A5F] mb-4">Trending Products</h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            The most upvoted and talked about products this week
          </p>
        </div>
      </section>

      {/* Trending List */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          {/* Time Filter */}
          <div className="flex items-center gap-2 mb-8">
            <button className="px-4 py-2 rounded-xl bg-[#1E3A5F] text-white text-sm font-medium">Today</button>
            <button className="px-4 py-2 rounded-xl bg-white text-gray-600 text-sm font-medium hover:bg-[#E8F4FD] hover:text-[#1E3A5F] transition-colors">This Week</button>
            <button className="px-4 py-2 rounded-xl bg-white text-gray-600 text-sm font-medium hover:bg-[#E8F4FD] hover:text-[#1E3A5F] transition-colors">This Month</button>
            <button className="px-4 py-2 rounded-xl bg-white text-gray-600 text-sm font-medium hover:bg-[#E8F4FD] hover:text-[#1E3A5F] transition-colors">All Time</button>
          </div>

          {/* Products */}
          <div className="space-y-3">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} rank={index + 1} />
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-10">
            <button className="bg-white text-[#1E3A5F] px-8 py-3 rounded-xl font-medium border-2 border-gray-200 hover:border-[#4DD4E8] transition-colors flex items-center gap-2 mx-auto">
              Load More <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
