import Link from 'next/link'
import { db } from '@/lib/db'
import { 
  Rocket, 
  ChevronDown,
  Upload, 
  Heart, 
  Users,
  Star,
  Check,
  Twitter,
  MessageCircle,
  ExternalLink,
  Sparkles,
  TrendingUp,
  Zap,
  Globe,
  Award,
  BadgeCheck,
  Briefcase,
  Gift,
  Calendar,
  ThumbsUp,
  Shield
} from 'lucide-react'
import { UpvoteButton } from '@/components/products/UpvoteButton'

export const dynamic = 'force-dynamic'

async function getProducts() {
  return await db.product.findMany({
    where: { status: 'APPROVED' },
    include: {
      category: true,
      user: { select: { name: true, image: true } },
      _count: { select: { upvotes: true, comments: true } }
    },
    orderBy: { launchDate: 'desc' },
    take: 12
  })
}

async function getStats() {
  const [productCount, userCount] = await Promise.all([
    db.product.count({ where: { status: 'APPROVED' } }),
    db.user.count()
  ])
  return { productCount, userCount }
}

export default async function Landing2Page() {
  const [products, stats] = await Promise.all([getProducts(), getStats()])

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/landing2" className="flex items-center gap-2.5">
              <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                <Rocket className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">
                <span className="text-gray-900">OpenShip</span>
                <span className="text-blue-500">.io</span>
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              <Link href="/products" className="px-4 py-2 text-gray-600 hover:text-gray-900 text-sm font-medium rounded-lg hover:bg-gray-50">
                Discover
              </Link>
              <Link href="/categories" className="px-4 py-2 text-gray-600 hover:text-gray-900 text-sm font-medium rounded-lg hover:bg-gray-50 flex items-center gap-1">
                Categories <ChevronDown className="w-4 h-4" />
              </Link>
              <Link href="/advertise" className="px-4 py-2 text-gray-600 hover:text-gray-900 text-sm font-medium rounded-lg hover:bg-gray-50">
                Pricing
              </Link>
              <Link href="/blog" className="px-4 py-2 text-gray-600 hover:text-gray-900 text-sm font-medium rounded-lg hover:bg-gray-50">
                Blog
              </Link>
            </nav>

            <div className="flex items-center gap-3">
              <Link href="/login" className="text-sm font-medium text-gray-600 hover:text-gray-900 px-4 py-2">
                Login
              </Link>
              <Link href="/submit" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-5 py-2.5 rounded-xl text-sm font-medium transition-all shadow-lg shadow-blue-500/25">
                Launch Your Project
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-white" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                {stats.productCount}+ Products Listed
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Launch Your Dream.</span>
                <br />
                Not Your Budget.
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
                The open, affordable platform for the next generation of builders. Ship your startup, get discovered by thousands.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Link href="/products" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-xl shadow-blue-500/30 flex items-center gap-2">
                  <Globe className="w-5 h-5" />
                  Browse Projects
                </Link>
                <Link href="/submit" className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-xl shadow-orange-500/30 flex items-center gap-2">
                  <Rocket className="w-5 h-5" />
                  Add Your Project
                </Link>
              </div>
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  Free to list
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  Dofollow backlinks
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  10K+ monthly visitors
                </div>
              </div>
            </div>

            {/* Rocket Illustration */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -top-4 -right-4 animate-bounce">
                  <Star className="w-8 h-8 text-yellow-400 fill-yellow-400 drop-shadow-lg" />
                </div>
                <div className="absolute top-12 -right-8 animate-bounce delay-100">
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                </div>
                <div className="absolute -top-2 left-8 animate-bounce delay-200">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                </div>
                
                <svg width="380" height="340" viewBox="0 0 380 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-2xl">
                  <defs>
                    <linearGradient id="rocketBody" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#1D4ED8" />
                    </linearGradient>
                    <linearGradient id="flame" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#FCD34D" />
                      <stop offset="50%" stopColor="#F97316" />
                      <stop offset="100%" stopColor="#EF4444" />
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                      <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
                    </filter>
                  </defs>
                  <ellipse cx="190" cy="310" rx="140" ry="25" fill="#E2E8F0" />
                  <ellipse cx="120" cy="305" rx="50" ry="15" fill="#CBD5E1" />
                  <ellipse cx="260" cy="308" rx="60" ry="18" fill="#CBD5E1" />
                  <path d="M190 50C190 50 140 100 140 200C140 250 160 275 190 275C220 275 240 250 240 200C240 100 190 50 190 50Z" fill="url(#rocketBody)" filter="url(#glow)"/>
                  <circle cx="190" cy="150" r="30" fill="#1E3A5F" stroke="#0F172A" strokeWidth="3"/>
                  <circle cx="190" cy="145" r="18" fill="#60A5FA" opacity="0.7"/>
                  <circle cx="185" cy="140" r="6" fill="white" opacity="0.8"/>
                  <path d="M140 225L95 275L140 250Z" fill="url(#rocketBody)"/>
                  <path d="M240 225L285 275L240 250Z" fill="url(#rocketBody)"/>
                  <rect x="172" y="190" width="36" height="60" rx="6" fill="#EF4444"/>
                  <rect x="180" y="200" width="20" height="40" rx="4" fill="#FCA5A5"/>
                  <path d="M165 275C165 275 178 325 190 340C202 325 215 275 215 275C215 275 202 305 190 305C178 305 165 275 165 275Z" fill="url(#flame)" filter="url(#glow)"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Key Features Banner */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
            {[
              { icon: Zap, title: 'Free Listings', desc: 'Launch at no cost', color: 'from-green-500 to-emerald-500' },
              { icon: ThumbsUp, title: 'Daily Upvotes', desc: 'Community discovery', color: 'from-blue-500 to-cyan-500' },
              { icon: BadgeCheck, title: 'Verified Badge', desc: 'Build trust', color: 'from-purple-500 to-indigo-500' },
              { icon: Briefcase, title: 'Portfolios', desc: 'Shipping history', color: 'from-orange-500 to-pink-500' },
              { icon: Gift, title: 'Startup Deals', desc: 'Curated discounts', color: 'from-rose-500 to-red-500' },
            ].map((feature) => {
              const Icon = feature.icon
              return (
                <div key={feature.title} className="bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-2xl p-4 text-center hover:shadow-lg hover:border-gray-200 transition-all group">
                  <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm">{feature.title}</h4>
                  <p className="text-xs text-gray-500 mt-1">{feature.desc}</p>
                </div>
              )
            })}
          </div>

          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-blue-500" />
                Today's Top Launches
              </h2>
              <p className="text-gray-500 mt-1">Discover the hottest new products</p>
            </div>
            <Link href="/products" className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
              View all <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.slice(0, 6).map((product, index) => (
              <div key={product.id} className="group bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-xl hover:border-blue-200 transition-all duration-300">
                <div className="flex items-start gap-4">
                  {/* Rank Badge */}
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    {index + 1}
                  </div>
                  
                  {/* Logo */}
                  <div className="w-14 h-14 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <span className="text-xl font-bold text-gray-400">{product.name.charAt(0)}</span>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <Link href={`/products/${product.slug}`} className="font-semibold text-gray-900 hover:text-blue-600 transition-colors block truncate">
                      {product.name}
                    </Link>
                    <p className="text-sm text-gray-500 line-clamp-2 mt-1">{product.tagline}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-lg font-medium">
                        {product.category?.name || 'General'}
                      </span>
                    </div>
                  </div>
                  
                  {/* Upvote */}
                  <div className="flex-shrink-0">
                    <UpvoteButton productId={product.id} initialCount={product._count.upvotes} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* More Products */}
          {products.length > 6 && (
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">More Products</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {products.slice(6, 12).map((product) => (
                  <div key={product.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-gray-200">
                      <span className="text-lg font-bold text-gray-400">{product.name.charAt(0)}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <Link href={`/products/${product.slug}`} className="font-medium text-gray-900 hover:text-blue-600 truncate block">
                        {product.name}
                      </Link>
                      <p className="text-sm text-gray-500 truncate">{product.tagline}</p>
                    </div>
                    <UpvoteButton productId={product.id} initialCount={product._count.upvotes} size="sm" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Get your product in front of thousands of early adopters in just 3 simple steps</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-blue-500/30 group-hover:scale-110 transition-transform">
                <Upload className="w-10 h-10 text-white" />
              </div>
              <div className="absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-200 to-transparent hidden md:block" style={{transform: 'translateX(50%)'}} />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">1. Add Your Project</h3>
              <p className="text-gray-500">Register and submit your project in minutes. It's completely free!</p>
            </div>
            
            <div className="relative text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-pink-500/30 group-hover:scale-110 transition-transform">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <div className="absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-transparent via-pink-200 to-transparent hidden md:block" style={{transform: 'translateX(50%)'}} />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">2. Get Upvoted</h3>
              <p className="text-gray-500">Get discovered and upvoted by our community of builders and early adopters</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-purple-500/30 group-hover:scale-110 transition-transform">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">3. Grow Your Audience</h3>
              <p className="text-gray-500">Reach thousands of potential users and grow your startup every week</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              Platform Features
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Everything You Need to Launch</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">OpenShip provides all the tools and exposure you need to successfully launch your product</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Free Listings */}
            <div className="group relative bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-100 hover:shadow-xl hover:shadow-green-500/10 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-green-500/30 group-hover:scale-110 transition-transform">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Free Listings</h3>
              <p className="text-gray-600 mb-4">Launch your product at absolutely no cost. No hidden fees, no premium requirements. Just submit and go live.</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-green-500" /> Unlimited submissions
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-green-500" /> Dofollow backlinks
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-green-500" /> SEO optimized pages
                </li>
              </ul>
            </div>

            {/* Daily/Weekly Upvotes */}
            <div className="group relative bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 border border-blue-100 hover:shadow-xl hover:shadow-blue-500/10 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
                <ThumbsUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Daily/Weekly Upvotes</h3>
              <p className="text-gray-600 mb-4">Community-driven product discovery. Get upvoted by real users and climb the rankings every day.</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-blue-500" /> Ship of the Day awards
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-blue-500" /> Weekly top products
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-blue-500" /> Trending section
                </li>
              </ul>
            </div>

            {/* Verified Badge */}
            <div className="group relative bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-8 border border-purple-100 hover:shadow-xl hover:shadow-purple-500/10 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform">
                <BadgeCheck className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Verified Shipper Badge</h3>
              <p className="text-gray-600 mb-4">Build trust with verification. Show users your product is legitimate and actively maintained.</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-purple-500" /> Trust indicator
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-purple-500" /> Priority in search
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-purple-500" /> Only $4.99 one-time
                </li>
              </ul>
            </div>

            {/* Entrepreneur Portfolios */}
            <div className="group relative bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-8 border border-orange-100 hover:shadow-xl hover:shadow-orange-500/10 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-orange-500/30 group-hover:scale-110 transition-transform">
                <Briefcase className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Entrepreneur Portfolios</h3>
              <p className="text-gray-600 mb-4">Showcase your shipping history. Build your reputation as a serial builder and attract followers.</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-orange-500" /> Public profile page
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-orange-500" /> Product timeline
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-orange-500" /> Social links
                </li>
              </ul>
            </div>

            {/* Startup Deals */}
            <div className="group relative bg-gradient-to-br from-rose-50 to-pink-50 rounded-3xl p-8 border border-rose-100 hover:shadow-xl hover:shadow-rose-500/10 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-rose-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-rose-500/30 group-hover:scale-110 transition-transform">
                <Gift className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Startup Deals</h3>
              <p className="text-gray-600 mb-4">Curated discounts from top tools. Save thousands on AWS, OpenAI, Stripe, and more.</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-rose-500" /> Exclusive discounts
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-rose-500" /> Partner perks
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-rose-500" /> Updated weekly
                </li>
              </ul>
            </div>

            {/* Community */}
            <div className="group relative bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl p-8 border border-teal-100 hover:shadow-xl hover:shadow-teal-500/10 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-teal-500/30 group-hover:scale-110 transition-transform">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Builder Community</h3>
              <p className="text-gray-600 mb-4">Connect with fellow entrepreneurs. Get feedback, find co-founders, and grow together.</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-teal-500" /> Discord community
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-teal-500" /> Weekly newsletter
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-teal-500" /> Founder spotlights
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Pricing That Makes Sense</h2>
            <p className="text-gray-600">No hidden fees. No surprises. Just simple, affordable pricing.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-gray-300 transition-colors">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Free Tier</h3>
                <div className="text-4xl font-bold text-gray-900">$0</div>
                <p className="text-gray-500 mt-2">Forever free</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-gray-600">
                  <Check className="w-5 h-5 text-green-500" /> Basic listing
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <Check className="w-5 h-5 text-green-500" /> Dofollow backlink
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <Check className="w-5 h-5 text-green-500" /> Community support
                </li>
              </ul>
              <Link href="/submit" className="block w-full text-center py-3 border-2 border-gray-200 rounded-xl font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                Get Started
              </Link>
            </div>

            {/* Featured */}
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white relative shadow-2xl shadow-blue-500/30 scale-105">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold mb-2">Featured Launch</h3>
                <div className="text-4xl font-bold">$9.99</div>
                <p className="text-blue-100 mt-2">One-time payment</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-yellow-300" /> 24h on homepage top
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-yellow-300" /> Featured badge
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-yellow-300" /> Newsletter mention
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-yellow-300" /> Priority support
                </li>
              </ul>
              <Link href="/submit" className="block w-full text-center py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
                Launch Featured
              </Link>
            </div>

            {/* Newsletter */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-gray-300 transition-colors">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Newsletter Sponsor</h3>
                <div className="text-4xl font-bold text-gray-900">$19.99</div>
                <p className="text-gray-500 mt-2">5,000+ subscribers</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-gray-600">
                  <Check className="w-5 h-5 text-green-500" /> Top of newsletter
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <Check className="w-5 h-5 text-green-500" /> Dedicated section
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <Check className="w-5 h-5 text-green-500" /> Click analytics
                </li>
              </ul>
              <Link href="/advertise" className="block w-full text-center py-3 border-2 border-gray-200 rounded-xl font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Loved by Builders</h2>
            <p className="text-gray-600">See what founders are saying about OpenShip</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Sarah Chen', role: 'Founder, TaskFlow', text: 'Finally, an affordable place to launch! Got 500+ users in the first week.' },
              { name: 'Mike Johnson', role: 'Indie Hacker', text: 'The best ROI I\'ve ever had on a launch. Simple, effective, and free!' },
              { name: 'Emma Wilson', role: 'CEO, DesignKit', text: 'OpenShip helped us reach our first 1000 users. Highly recommended!' },
            ].map((testimonial, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
                <div className="flex gap-1 mt-4">
                  {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Join Our Newsletter</h2>
          <p className="text-blue-100 mb-8">Get weekly curated products, deals, and insights delivered to your inbox.</p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-4 rounded-xl focus:outline-none focus:ring-4 focus:ring-white/30"
            />
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors shadow-lg">
              Subscribe
            </button>
          </div>
          <p className="text-blue-200 text-sm mt-4">Join 5,000+ founders. No spam, ever.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <Link href="/landing2" className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">OpenShip.io</span>
              </Link>
              <p className="text-gray-400 text-sm">The open directory for the next generation of builders.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/products" className="hover:text-white">Discover</Link></li>
                <li><Link href="/categories" className="hover:text-white">Categories</Link></li>
                <li><Link href="/submit" className="hover:text-white">Submit</Link></li>
                <li><Link href="/advertise" className="hover:text-white">Advertise</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/about" className="hover:text-white">About</Link></li>
                <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
                <li><Link href="/terms" className="hover:text-white">Terms</Link></li>
                <li><Link href="/privacy" className="hover:text-white">Privacy</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Community</h4>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
              <p className="text-gray-400 text-sm mt-4">{stats.productCount}+ Products Listed</p>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
            © 2024 OpenShip.io. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
