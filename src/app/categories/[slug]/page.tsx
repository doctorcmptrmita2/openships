import Link from 'next/link'
import { notFound } from 'next/navigation'
import { db } from '@/lib/db'
import { ArrowLeft, Grid3X3 } from 'lucide-react'
import { Header } from '@/components/ui/Header'
import { Footer } from '@/components/ui/Footer'
import { ProductCard } from '@/components/products/ProductCard'

async function getCategory(slug: string) {
  return await db.category.findUnique({
    where: { slug },
    include: {
      products: {
        where: { status: 'APPROVED' },
        include: {
          category: true,
          _count: { select: { upvotes: true, comments: true } }
        },
        orderBy: { upvotes: { _count: 'desc' } }
      },
      _count: { select: { products: true } }
    }
  })
}

export default async function CategoryPage({ params }: { params: { slug: string } }) {
  const category = await getCategory(params.slug)
  if (!category) notFound()

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-b from-white to-[#F0F7FF] py-12">
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/categories" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#1E3A5F] mb-6">
            <ArrowLeft className="w-4 h-4" />
            All Categories
          </Link>

          <div className="flex items-center gap-4">
            <span className="text-5xl">{category.icon}</span>
            <div>
              <h1 className="text-3xl font-bold text-[#1E3A5F]">{category.name}</h1>
              <p className="text-gray-600">{category._count.products} products in this category</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          {category.products.length > 0 ? (
            <div className="space-y-3">
              {category.products.map((product, index) => (
                <ProductCard key={product.id} product={product} rank={index + 1} />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center">
              <Grid3X3 className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 mb-4">No products in this category yet</p>
              <Link href="/submit" className="text-[#4DD4E8] hover:underline font-medium">
                Be the first to submit
              </Link>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
