import Link from 'next/link'
import { notFound } from 'next/navigation'
import { db } from '@/lib/db'
import { BadgeCheck, ExternalLink, Calendar, User, MessageCircle, ArrowLeft, Share2 } from 'lucide-react'
import { Header } from '@/components/ui/Header'
import { Footer } from '@/components/ui/Footer'
import { UpvoteButton } from '@/components/products/UpvoteButton'

export const dynamic = 'force-dynamic'

async function getProduct(slug: string) {
  return await db.product.findUnique({
    where: { slug },
    include: {
      category: true,
      user: { select: { name: true, image: true } },
      comments: {
        include: { user: { select: { name: true, image: true } } },
        orderBy: { createdAt: 'desc' }
      },
      _count: { select: { upvotes: true, comments: true } }
    }
  })
}

async function getRelatedProducts(categoryId: string | null, currentSlug: string) {
  if (!categoryId) return []
  return await db.product.findMany({
    where: { categoryId, slug: { not: currentSlug }, status: 'APPROVED' },
    include: { category: true, _count: { select: { upvotes: true, comments: true } } },
    take: 4
  })
}

export default async function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = await getProduct(params.slug)
  if (!product) notFound()

  const relatedProducts = await getRelatedProducts(product.categoryId, product.slug)

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/products" className="text-gray-500 hover:text-[#1E3A5F] flex items-center gap-1">
              <ArrowLeft className="w-4 h-4" /> Products
            </Link>
            <span className="text-gray-300">/</span>
            <span className="text-[#1E3A5F] font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Header */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Logo */}
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-gradient-to-br from-[#E8F4FD] to-[#D4EDFC] flex items-center justify-center flex-shrink-0 overflow-hidden">
              {product.logo ? (
                <img src={product.logo} alt={product.name} className="w-full h-full object-cover" />
              ) : (
                <span className="text-4xl md:text-5xl font-bold text-[#1E3A5F]">{product.name.charAt(0)}</span>
              )}
            </div>

            {/* Info */}
            <div className="flex-1">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-3xl font-bold text-[#1E3A5F]">{product.name}</h1>
                    {product.isVerified && <BadgeCheck className="w-6 h-6 text-[#4DD4E8]" />}
                  </div>
                  <p className="text-lg text-gray-600 mb-4">{product.tagline}</p>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                    <span className="bg-[#E8F4FD] text-[#1E3A5F] px-3 py-1 rounded-lg font-medium">
                      {product.category?.name || 'General'}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(product.launchDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {product.user.name}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <UpvoteButton productId={product.id} initialCount={product._count.upvotes} />
                  <button className="p-3 rounded-xl border border-gray-200 text-gray-500 hover:border-[#4DD4E8] hover:text-[#4DD4E8] transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-3 mt-6">
                <a
                  href={product.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1E3A5F] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#2d4a6f] transition-colors flex items-center gap-2"
                >
                  Visit Website <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <div className="bg-white rounded-2xl border border-gray-100 p-6">
                <h2 className="text-xl font-semibold text-[#1E3A5F] mb-4">About</h2>
                <p className="text-gray-600 leading-relaxed">
                  {product.description || product.tagline}
                </p>
              </div>

              {/* Comments */}
              <div className="bg-white rounded-2xl border border-gray-100 p-6">
                <div className="flex items-center gap-2 mb-6">
                  <MessageCircle className="w-5 h-5 text-[#1E3A5F]" />
                  <h2 className="text-xl font-semibold text-[#1E3A5F]">Comments ({product._count.comments})</h2>
                </div>

                {/* Comment Form */}
                <div className="mb-6">
                  <textarea
                    placeholder="Share your thoughts about this product..."
                    className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[#4DD4E8] focus:ring-2 focus:ring-[#4DD4E8]/20 resize-none"
                    rows={3}
                  />
                  <div className="flex justify-end mt-3">
                    <button className="bg-[#1E3A5F] text-white px-5 py-2 rounded-lg font-medium hover:bg-[#2d4a6f] transition-colors text-sm">
                      Post Comment
                    </button>
                  </div>
                </div>

                {/* Comments List */}
                {product.comments.length > 0 ? (
                  <div className="space-y-4">
                    {product.comments.map((comment) => (
                      <div key={comment.id} className="flex gap-3 p-4 bg-[#F8FAFC] rounded-xl">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1E3A5F] to-[#4DD4E8] flex items-center justify-center text-white font-medium">
                          {comment.user.name?.charAt(0) || 'U'}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-medium text-[#1E3A5F]">{comment.user.name}</span>
                            <span className="text-xs text-gray-400">
                              {new Date(comment.createdAt).toLocaleDateString()}
                            </span>
                          </div>
                          <p className="text-gray-600 text-sm">{comment.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-center text-gray-500 py-8">No comments yet. Be the first to share your thoughts!</p>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Stats */}
              <div className="bg-white rounded-2xl border border-gray-100 p-6">
                <h3 className="font-semibold text-[#1E3A5F] mb-4">Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Upvotes</span>
                    <span className="font-semibold text-[#1E3A5F]">{product._count.upvotes}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Comments</span>
                    <span className="font-semibold text-[#1E3A5F]">{product._count.comments}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Launched</span>
                    <span className="font-semibold text-[#1E3A5F]">
                      {new Date(product.launchDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                    </span>
                  </div>
                </div>
              </div>

              {/* Related Products */}
              {relatedProducts.length > 0 && (
                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="font-semibold text-[#1E3A5F] mb-4">Related Products</h3>
                  <div className="space-y-3">
                    {relatedProducts.map((related) => (
                      <Link
                        key={related.id}
                        href={`/products/${related.slug}`}
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#F8FAFC] transition-colors"
                      >
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E8F4FD] to-[#D4EDFC] flex items-center justify-center">
                          <span className="font-bold text-[#1E3A5F]">{related.name.charAt(0)}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-[#1E3A5F] truncate">{related.name}</p>
                          <p className="text-xs text-gray-400 truncate">{related.tagline}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
