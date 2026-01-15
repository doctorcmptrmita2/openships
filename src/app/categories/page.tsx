import Link from 'next/link'
import { db } from '@/lib/db'
import { ArrowRight, Grid3X3 } from 'lucide-react'
import { Header } from '@/components/ui/Header'
import { Footer } from '@/components/ui/Footer'

export const dynamic = 'force-dynamic'

async function getCategories() {
  return await db.category.findMany({
    include: { _count: { select: { products: true } } },
    orderBy: { name: 'asc' }
  })
}

export default async function CategoriesPage() {
  const categories = await getCategories()

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-b from-white to-[#F0F7FF] py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-[#E8F4FD] text-[#1E3A5F] px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Grid3X3 className="w-4 h-4" />
            {categories.length} Categories
          </div>
          <h1 className="text-4xl font-bold text-[#1E3A5F] mb-4">Browse Categories</h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Explore products organized by category to find exactly what you need
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/categories/${category.slug}`}
                className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:border-[#4DD4E8]/30 transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl">{category.icon}</span>
                  <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-[#4DD4E8] group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="font-semibold text-[#1E3A5F] mb-1">{category.name}</h3>
                <p className="text-sm text-gray-500">{category._count.products} products</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
