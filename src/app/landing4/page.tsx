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

// Logo Component
function Logo({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizes = {
    sm: { icon: 28, text: 'text-lg' },
    md: { icon: 36, text: 'text-xl' },
    lg: { icon: 48, text: 'text-2xl' }
  }
  const { icon, text } = sizes[size]
  
  return (
    <div className="flex items-center gap-3">
      <svg width={icon} height={icon} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Rocket Body */}
        <path d="M24 4C24 4 16 14 16 28C16 34 19 38 24 38C29 38 32 34 32 28C32 14 24 4 24 4Z" fill="#1E3A5F"/>
        {/* Rocket Window */}
        <circle cx="24" cy="20" r="5" fill="white" stroke="#1E3A5F" strokeWidth="2"/>
        <circle cx="24" cy="20" r="2" fill="#4DD4E8"/>
        {/* Rocket Tip */}
        <path d="M24 4L21 10H27L24 4Z" fill="#4DD4E8"/>
        {/* Left Fin */}
        <path d="M16 30L10 38L16 34V30Z" fill="#1E3A5F"/>
        {/* Right Fin */}
        <path d="M32 30L38 38L32 34V30Z" fill="#1E3A5F"/>
        {/* Flames */}
        <path d="M20 38C20 38 22 44 24 44C26 44 28 38 28 38" stroke="#4DD4E8" strokeWidth="3" strokeLinecap="round"/>
        <path d="M18 40C18 40 21 46 24 46C27 46 30 40 30 40" stroke="#4DD4E8" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
      </svg>
      <div>
        <span className={`font-bold ${text}`}>
          <span className="text-[#1E3A5F]">OpenShip</span>
          <span className="text-[#4DD4E8]">.io</span>
        </span>
      </div>
    </div>
  )
}

export default async function Landing4Page() {
  const [products, stats] = await Promise.all([getProducts(), getStats()])

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/landing4">
            <Logo size="md" />
          </Link>
          
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <Link href="/products" className="hover:text-[#1E3A5F] transition-colors">Discover</Link>
            <Link href="/trending" className="hover:text-[#1E3A5F] transition-colors">Trending</Link>
            <Link href="/categories" className="hover:text-[#1E3A5F] transition-colors">Categories</Link>
            <Link href="/deals" className="hover:text-[#1E3A5F] transition-colors">Deals</Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/login" className="text-sm text-gray-600 hover:text-[#1E3A5F] transition-colors">
              Sign in
            </Link>
            <Link href="/submit" className="bg-[#1E3A5F] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#2d4a6f] transition-colors">
              Launch Product
            </Link>
          </div>
        </div>
      </header>

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

              {/* Features Mini */}
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
                    {/* Rank */}
                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-sm font-bold ${
                      index === 0 ? 'bg-yellow-100 text-yellow-600' :
                      index === 1 ? 'bg-gray-100 text-gray-500' :
                      index === 2 ? 'bg-orange-100 text-orange-600' :
                      'bg-gray-50 text-gray-400'
                    }`}>
                      {index + 1}
                    </div>

                    {/* Logo */}
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E8F4FD] to-[#D4EDFC] flex items-center justify-center flex-shrink-0 overflow-hidden">
                      {product.logo ? (
                        <img src={product.logo} alt={product.name} className="w-full h-full object-cover" />
                      ) : (
                        <span className="text-sm font-bold text-[#1E3A5F]">{product.name.charAt(0)}</span>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <Link href={`/products/${product.slug}`} className="font-medium text-sm text-[#1E3A5F] hover:text-[#4DD4E8] truncate block">
                        {product.name}
                      </Link>
                      <p className="text-xs text-gray-400 truncate">{product.tagline}</p>
                    </div>

                    {/* Upvote */}
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
          {/* Section Header */}
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

          {/* Product List */}
          <div className="space-y-3">
            {products.slice(0, 8).map((product, index) => (
              <div 
                key={product.id} 
                className="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-lg hover:border-[#4DD4E8]/30 transition-all group"
              >
                <div className="flex items-center gap-4">
                  {/* Rank */}
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1E3A5F] to-[#2d5a8f] flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>

                  {/* Logo */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#E8F4FD] to-[#D4EDFC] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <span className="text-xl font-bold text-[#1E3A5F]">{product.name.charAt(0)}</span>
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
                        {product._count.comments}
                      </span>
                    </div>
                  </div>

                  {/* Upvote */}
                  <UpvoteButton productId={product.id} initialCount={product._count.upvotes} />
                </div>
              </div>
            ))}
          </div>

          {/* View More */}
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
              { 
                icon: Zap, 
                title: 'Free Listings', 
                desc: 'Launch your product at absolutely no cost. No hidden fees, no premium requirements.',
                color: 'bg-green-50',
                iconColor: 'text-green-600'
              },
              { 
                icon: Calendar, 
                title: 'Daily/Weekly Upvotes', 
                desc: 'Community-driven product discovery. Get upvoted and climb the rankings every day.',
                color: 'bg-blue-50',
                iconColor: 'text-blue-600'
              },
              { 
                icon: BadgeCheck, 
                title: 'Verified Badge', 
                desc: 'Build trust with verification. Show users your product is legitimate and maintained.',
                color: 'bg-purple-50',
                iconColor: 'text-purple-600'
              },
            ].map((feature) => {
              const Icon = feature.icon
              return (
                <div key={feature.title} className={`${feature.color} rounded-2xl p-8 hover:shadow-lg transition-shadow`}>
                  <div className={`w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm`}>
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
                  {i < 3 && (
                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-[#E8F4FD]" />
                  )}
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
            {/* Pattern */}
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

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            <div className="col-span-2">
              <Link href="/landing4" className="inline-block mb-4">
                <Logo size="md" />
              </Link>
              <p className="text-sm text-gray-500 mb-2">Launch Your Dream. Not Your Budget.</p>
              <p className="text-sm text-gray-400 max-w-xs">
                The open platform for builders to launch products and get discovered.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-[#1E3A5F] mb-4">Product</h4>
              <ul className="space-y-3 text-sm text-gray-500">
                <li><Link href="/products" className="hover:text-[#1E3A5F]">Discover</Link></li>
                <li><Link href="/trending" className="hover:text-[#1E3A5F]">Trending</Link></li>
                <li><Link href="/categories" className="hover:text-[#1E3A5F]">Categories</Link></li>
                <li><Link href="/submit" className="hover:text-[#1E3A5F]">Submit</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-[#1E3A5F] mb-4">Resources</h4>
              <ul className="space-y-3 text-sm text-gray-500">
                <li><Link href="/blog" className="hover:text-[#1E3A5F]">Blog</Link></li>
                <li><Link href="/deals" className="hover:text-[#1E3A5F]">Deals</Link></li>
                <li><Link href="/advertise" className="hover:text-[#1E3A5F]">Advertise</Link></li>
                <li><Link href="/newsletter" className="hover:text-[#1E3A5F]">Newsletter</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-[#1E3A5F] mb-4">Legal</h4>
              <ul className="space-y-3 text-sm text-gray-500">
                <li><Link href="/terms" className="hover:text-[#1E3A5F]">Terms</Link></li>
                <li><Link href="/privacy" className="hover:text-[#1E3A5F]">Privacy</Link></li>
                <li><Link href="/about" className="hover:text-[#1E3A5F]">About</Link></li>
                <li><Link href="/contact" className="hover:text-[#1E3A5F]">Contact</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-8 flex items-center justify-between text-sm text-gray-400">
            <p>© 2025 OpenShip.io. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-[#1E3A5F]">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" className="hover:text-[#1E3A5F]">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
