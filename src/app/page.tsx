import Link from 'next/link'
import { db } from '@/lib/db'
import { 
  ChevronUp,
  Zap,
  BadgeCheck,
  Calendar,
  ArrowRight,
  TrendingUp,
  Users,
  Globe,
  ExternalLink,
  MessageCircle,
  Flame,
  Award
} from 'lucide-react'
import { Header } from '@/components/ui/Header'
import { Footer } from '@/components/ui/Footer'
import { UpvoteButton } from '@/components/products/UpvoteButton'

export const dynamic = 'force-dynamic'

async function getProducts() {
  return await db.product.findMany({
    where: { status: 'APPROVED' },
    include: {
      category: true,
      user: { select: { name: true } },
      _count: { select: { upvotes: true, comments: true } }
    },
    orderBy: { upvotes: { _count: 'desc' } },
    take: 12
  })
}

async function getStats() {
  const [products, users] = await Promise.all([
    db.product.count({ where: { status: 'APPROVED' } }),
    db.user.count()
  ])
  return { products, users, upvotes: 12500 }
}

export default async function HomePage() {
  const [products, stats] = await Promise.all([getProducts(), getStats()])

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-b from-white to-[#F0F7FF] py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div className="pt-4">
              <div className="inline-flex items-center gap-2 bg-[#E8F4FD] text-[#1E3A5F] px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-[#4DD4E8] rounded-full animate-pulse" />
                {stats.products}+ products launched
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-[#1E3A5F] leading-tight mb-6">
                Launch Your Dream.
                <br />
                <span className="text-[#4DD4E8]">Not Your Budget.</span>
              </h1>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                The open, affordable platform for the next generation of builders. 
                Ship your startup, get discovered by thousands.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Link href="/submit" className="bg-[#1E3A5F] text-white px-8 py-4 rounded-xl font-medium hover:bg-[#2d4a6f] transition-colors flex items-center gap-2 shadow-lg shadow-[#1E3A5F]/20">
                  Submit Your Product
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/products" className="bg-white text-[#1E3A5F] px-8 py-4 rounded-xl font-medium border-2 border-gray-200 hover:border-[#4DD4E8] transition-colors">
                  Browse Products
                </Link>
              </div>

              <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <Zap className="w-4 h-4 text-green-600" />
                  </div>
                  <span>Free Listings</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Calendar className="w-4 h-4 text-blue-600" />
                  </div>
                  <span>Daily Upvotes</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <BadgeCheck className="w-4 h-4 text-purple-600" />
                  </div>
                  <span>Verified Badge</span>
                </div>
              </div>
            </div>

            {/* Right - Today's Top 5 */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-xl shadow-gray-200/50 overflow-hidden">
              <div className="bg-gradient-to-r from-[#1E3A5F] to-[#2d5a8f] px-5 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-white">
                    <Flame className="w-5 h-5 text-orange-400" />
                    <span className="font-semibold">Today's Top 5</span>
                  </div>
                  <Link href="/products" className="text-xs text-white/70 hover:text-white flex items-center gap-1">
                    View all <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
              
              <div className="divide-y divide-gray-50">
                {products.slice(0, 5).map((product, index) => (
                  <div key={product.id} className="flex items-center gap-3 p-4 hover:bg-[#F8FAFC] transition-colors">
                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-sm font-bold ${
                      index === 0 ? 'bg-yellow-100 text-yellow-600' :
                      index === 1 ? 'bg-gray-100 text-gray-500' :
                      index === 2 ? 'bg-orange-100 text-orange-600' :
                      'bg-gray-50 text-gray-400'
                    }`}>
                      {index + 1}
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E8F4FD] to-[#D4EDFC] flex items-center justify-center flex-shrink-0 overflow-hidden">
                      {product.logo ? (
                        <img src={product.logo} alt={product.name} className="w-full h-full object-cover" />
                      ) : (
                        <span className="text-sm font-bold text-[#1E3A5F]">{product.name.charAt(0)}</span>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <Link href={`/products/${product.slug}`} className="font-medium text-sm text-[#1E3A5F] hover:text-[#4DD4E8] truncate block">
                        {product.name}
                      </Link>
                      <p className="text-xs text-gray-400 truncate">{product.tagline}</p>
                    </div>
                    <div className="flex items-center gap-1 text-gray-400 bg-gray-50 px-2.5 py-1.5 rounded-lg hover:bg-[#E8F4FD] hover:text-[#1E3A5F] cursor-pointer transition-colors">
                      <ChevronUp className="w-4 h-4" />
                      <span className="text-sm font-medium">{product._count.upvotes}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="px-4 py-3 bg-[#F8FAFC] border-t border-gray-100">
                <Link href="/submit" className="flex items-center justify-center gap-2 text-sm text-[#1E3A5F] font-medium hover:text-[#4DD4E8]">
                  <span className="w-5 h-5 bg-[#4DD4E8] rounded-full flex items-center justify-center text-white text-xs">+</span>
                  Submit your product
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-y border-gray-100 py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-[#1E3A5F]">{stats.products}+</div>
              <div className="text-sm text-gray-500">Products</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#4DD4E8]">{stats.upvotes.toLocaleString()}+</div>
              <div className="text-sm text-gray-500">Upvotes</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#1E3A5F]">{stats.users}+</div>
              <div className="text-sm text-gray-500">Builders</div>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#FEF3C7] rounded-xl flex items-center justify-center">
                <Flame className="w-5 h-5 text-orange-500" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#1E3A5F]">Today's Top Launches</h2>
                <p className="text-sm text-gray-500">Discover the hottest new products</p>
              </div>
            </div>
            <Link href="/products" className="text-sm text-[#4DD4E8] hover:text-[#1E3A5F] font-medium flex items-center gap-1">
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="space-y-3">
            {products.slice(0, 8).map((product, index) => (
              <div key={product.id} className="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-lg hover:border-[#4DD4E8]/30 transition-all group">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1E3A5F] to-[#2d5a8f] flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#E8F4FD] to-[#D4EDFC] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform overflow-hidden">
                    {product.logo ? (
                      <img src={product.logo} alt={product.name} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-xl font-bold text-[#1E3A5F]">{product.name.charAt(0)}</span>
                    )}
                  </div>
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
                        {product._count.comments}
                      </span>
                    </div>
                  </div>
                  <UpvoteButton productId={product.id} initialCount={product._count.upvotes} />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/products" className="inline-flex items-center gap-2 bg-[#E8F4FD] text-[#1E3A5F] px-6 py-3 rounded-xl font-medium hover:bg-[#D4EDFC] transition-colors">
              View All Products
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1E3A5F] mb-4">Why OpenShip?</h2>
            <p className="text-gray-600 max-w-xl mx-auto">Everything you need to launch and grow your product</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: 'Free Listings', desc: 'Launch your product at absolutely no cost. No hidden fees, no premium requirements.', color: 'bg-green-50', iconColor: 'text-green-600' },
              { icon: Calendar, title: 'Daily/Weekly Upvotes', desc: 'Community-driven product discovery. Get upvoted and climb the rankings every day.', color: 'bg-blue-50', iconColor: 'text-blue-600' },
              { icon: BadgeCheck, title: 'Verified Badge', desc: 'Build trust with verification. Show users your product is legitimate and maintained.', color: 'bg-purple-50', iconColor: 'text-purple-600' },
            ].map((feature) => {
              const Icon = feature.icon
              return (
                <div key={feature.title} className={`${feature.color} rounded-2xl p-8 hover:shadow-lg transition-shadow`}>
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm">
                    <Icon className={`w-7 h-7 ${feature.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-[#1E3A5F] mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1E3A5F] mb-4">How It Works</h2>
            <p className="text-gray-600">Launch your product in minutes</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Sign Up', desc: 'Create your free account', icon: Users },
              { step: '2', title: 'Submit', desc: 'Add your product details', icon: Globe },
              { step: '3', title: 'Get Upvoted', desc: 'Community discovers you', icon: TrendingUp },
              { step: '4', title: 'Grow', desc: 'Reach early adopters', icon: Award },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <div key={item.step} className="relative text-center">
                  {i < 3 && <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-[#E8F4FD]" />}
                  <div className="relative inline-block mb-4">
                    <div className="w-16 h-16 bg-white rounded-2xl border-2 border-[#E8F4FD] flex items-center justify-center shadow-sm">
                      <Icon className="w-7 h-7 text-[#1E3A5F]" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#4DD4E8] rounded-full text-white text-xs font-bold flex items-center justify-center">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="font-semibold text-[#1E3A5F] mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-r from-[#1E3A5F] to-[#2d5a8f] rounded-3xl p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full" />
              <div className="absolute bottom-10 right-10 w-32 h-32 border-2 border-white rounded-full" />
              <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-white rounded-full" />
            </div>
            <div className="relative">
              <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 mb-6">
                <Zap className="w-4 h-4" />
                <span className="text-sm font-medium">100% Free to Launch</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to ship your product?</h2>
              <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
                Join thousands of builders who have launched their products on OpenShip
              </p>
              <Link href="/submit" className="inline-flex items-center gap-2 bg-[#4DD4E8] text-[#1E3A5F] px-8 py-4 rounded-xl font-semibold hover:bg-[#3bc4d8] transition-colors">
                Launch Your Product
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
