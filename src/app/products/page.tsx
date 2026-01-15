import Link from 'next/link'
import { db } from '@/lib/db'
import { Search, Filter, ArrowRight } from 'lucide-react'
import { Header } from '@/components/ui/Header'
import { Footer } from '@/components/ui/Footer'
import { ProductCard } from '@/components/products/ProductCard'

async function getProducts() {
  return await db.product.findMany({
    where: { status: 'APPROVED' },
    include: {
      category: true,
      user: { select: { name: true } },
      _count: { select: { upvotes: true, comments: true } }
    },
    orderBy: { upvotes: { _count: 'desc' } },
    take: 50
  })
}

async function getCategories() {
  return await db.category.findMany({
    include: { _count: { select: { products: true } } },
    orderBy: { name: 'asc' }
  })
}

export default async function ProductsPage() {
  const [products, categories] = await Promise.all([getProducts(), getCategories()])

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-b from-white to-[#F0F7FF] py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold text-[#1E3A5F] mb-4">Discover Products</h1>
            <p className="text-gray-600 mb-8">Explore the best tools and products launched by makers worldwide</p>
            
            {/* Search */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 bg-white focus:outline-none focus:border-[#4DD4E8] focus:ring-2 focus:ring-[#4DD4E8]/20 transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar - Categories */}
            <aside className="lg:w-64 flex-shrink-0">
              <div className="bg-white rounded-2xl border border-gray-100 p-5 sticky top-24">
                <div className="flex items-center gap-2 mb-4">
                  <Filter className="w-5 h-5 text-[#1E3A5F]" />
                  <h3 className="font-semibold text-[#1E3A5F]">Categories</h3>
                </div>
                <div className="space-y-1">
                  <Link href="/products" className="flex items-center justify-between px-3 py-2 rounded-lg bg-[#E8F4FD] text-[#1E3A5F] font-medium text-sm">
                    <span>All Products</span>
                    <span className="text-xs bg-[#1E3A5F] text-white px-2 py-0.5 rounded-full">{products.length}</span>
                  </Link>
                  {categories.slice(0, 10).map((category) => (
                    <Link
                      key={category.id}
                      href={`/categories/${category.slug}`}
                      className="flex items-center justify-between px-3 py-2 rounded-lg text-gray-600 hover:bg-[#F8FAFC] hover:text-[#1E3A5F] text-sm transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <span>{category.icon}</span>
                        <span>{category.name}</span>
                      </span>
                      <span className="text-xs text-gray-400">{category._count.products}</span>
                    </Link>
                  ))}
                  <Link href="/categories" className="flex items-center gap-1 px-3 py-2 text-sm text-[#4DD4E8] hover:text-[#1E3A5F] font-medium">
                    View all categories <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </aside>

            {/* Products Grid */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <p className="text-gray-600">{products.length} products found</p>
                <select className="px-4 py-2 rounded-xl border border-gray-200 bg-white text-sm text-gray-600 focus:outline-none focus:border-[#4DD4E8]">
                  <option>Most Upvoted</option>
                  <option>Newest First</option>
                  <option>Oldest First</option>
                </select>
              </div>

              <div className="space-y-3">
                {products.map((product, index) => (
                  <ProductCard key={product.id} product={product} rank={index + 1} />
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-10">
                <button className="bg-white text-[#1E3A5F] px-8 py-3 rounded-xl font-medium border-2 border-gray-200 hover:border-[#4DD4E8] transition-colors">
                  Load More Products
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
