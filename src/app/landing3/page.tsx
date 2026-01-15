import Link from 'next/link'
import { db } from '@/lib/db'
import { 
  Rocket, 
  ChevronUp,
  ExternalLink,
  ArrowRight,
  Github,
  Twitter,
  Trophy,
  Flame,
  ChevronDown
} from 'lucide-react'
import { UpvoteButton } from '@/components/products/UpvoteButton'

export const dynamic = 'force-dynamic'

async function getProducts() {
  return await db.product.findMany({
    where: { status: 'APPROVED' },
    include: {
      category: true,
      _count: { select: { upvotes: true } }
    },
    orderBy: { launchDate: 'desc' },
    take: 20
  })
}

async function getCategories() {
  return await db.category.findMany({
    include: { _count: { select: { products: true } } },
    orderBy: { name: 'asc' },
    take: 8
  })
}

async function getStats() {
  const productCount = await db.product.count({ where: { status: 'APPROVED' } })
  return { productCount, pageViews: 112448 }
}

export default async function Landing3Page() {
  const [products, categories, stats] = await Promise.all([
    getProducts(), getCategories(), getStats()
  ])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/landing3" className="flex items-center gap-2">
              <div className="w-7 h-7 bg-blue-500 rounded-md flex items-center justify-center">
                <Rocket className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold text-gray-900">Open-Launch</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-[13px] text-gray-600">
              <Link href="/products" className="hover:text-gray-900">Explore</Link>
              <Link href="/submit" className="hover:text-gray-900">Submit Project</Link>
              <Link href="/advertise" className="hover:text-gray-900">Pricing</Link>
              <Link href="/deals" className="hover:text-gray-900">Sponsors</Link>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/login" className="text-[13px] text-gray-600 hover:text-gray-900">Sign in</Link>
            <Link href="/register" className="bg-blue-500 text-white px-3 py-1.5 rounded-md text-[13px] font-medium hover:bg-blue-600">
              Sign Up
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <div className="bg-[#F0F7FF] border-b border-blue-100">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
              <Rocket className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-medium text-gray-900 text-sm">Launch platform for your products</div>
              <div className="text-xs text-gray-500">Submit, get a badge & backlink</div>
            </div>
          </div>
          <div className="text-xs text-gray-400 hidden md:block">FEATURED ON PRODUCTHUNT</div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex gap-8">
          {/* Main */}
          <div className="flex-1 min-w-0">
            {/* Today */}
            <section className="mb-8">
              <h2 className="font-semibold text-gray-900 mb-4">Top Projects Launching Today</h2>
              <div className="space-y-2">
                {products.slice(0, 8).map((product, i) => (
                  <div key={product.id} className="flex items-center gap-3 p-3 rounded-lg border border-gray-100 hover:border-gray-200 hover:bg-gray-50/50 transition-all">
                    <span className="text-xs text-gray-400 w-5">{i + 1}.</span>
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-semibold text-blue-600">{product.name.charAt(0)}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <Link href={`/products/${product.slug}`} className="font-medium text-sm text-gray-900 hover:text-blue-600 truncate">
                          {product.name}
                        </Link>
                        <ExternalLink className="w-3 h-3 text-gray-300" />
                      </div>
                      <p className="text-xs text-gray-500 truncate">{product.tagline}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[10px] text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded">{product.category?.name}</span>
                      </div>
                    </div>
                    <UpvoteButton productId={product.id} initialCount={product._count.upvotes} size="sm" />
                  </div>
                ))}
              </div>
            </section>

            {/* Yesterday */}
            <section className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-gray-900">Yesterday's Launches</h2>
                <Link href="/products" className="text-xs text-blue-500 hover:text-blue-600 flex items-center gap-1">
                  View all <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
              <div className="space-y-2">
                {products.slice(8, 13).map((product, i) => (
                  <div key={product.id} className="flex items-center gap-3 p-3 rounded-lg border border-gray-100 hover:border-gray-200 transition-all">
                    <span className="text-xs text-gray-400 w-5">{i + 1}.</span>
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-50 to-purple-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-semibold text-purple-600">{product.name.charAt(0)}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <Link href={`/products/${product.slug}`} className="font-medium text-sm text-gray-900 hover:text-blue-600 truncate block">
                        {product.name}
                      </Link>
                      <p className="text-xs text-gray-500 truncate">{product.tagline}</p>
                      <span className="text-[10px] text-gray-400">{product.category?.name}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-400 text-xs">
                      <ChevronUp className="w-3.5 h-3.5" />
                      <span>{product._count.upvotes}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Month Best */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-gray-900">This Month's Best</h2>
                <Link href="/winners" className="text-xs text-blue-500 hover:text-blue-600 flex items-center gap-1">
                  View all <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
              <div className="space-y-2">
                {products.slice(0, 5).map((product, i) => (
                  <div key={product.id} className="flex items-center gap-3 p-3 rounded-lg border border-gray-100 hover:border-gray-200 transition-all">
                    <div className="w-6 h-6 rounded bg-amber-100 flex items-center justify-center text-amber-600 text-xs font-bold">{i + 1}</div>
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-semibold text-green-600">{product.name.charAt(0)}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <Link href={`/products/${product.slug}`} className="font-medium text-sm text-gray-900 hover:text-blue-600 truncate block">
                        {product.name}
                      </Link>
                      <p className="text-xs text-gray-500 truncate">{product.tagline}</p>
                      <span className="text-[10px] text-gray-400">{product.category?.name}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-400 text-xs">
                      <ChevronUp className="w-3.5 h-3.5" />
                      <span>{product._count.upvotes}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="w-72 flex-shrink-0 hidden lg:block space-y-4">
            {/* Stats */}
            <div className="border border-gray-100 rounded-lg p-4">
              <div className="text-xs text-gray-400 mb-3">2025 Statistics ✨</div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xl font-bold text-gray-900">{stats.productCount.toLocaleString()}</div>
                  <div className="text-[10px] text-gray-400">Products</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-gray-900">{stats.pageViews.toLocaleString()}</div>
                  <div className="text-[10px] text-gray-400">Page Views</div>
                </div>
              </div>
            </div>

            {/* Links */}
            <div className="border border-gray-100 rounded-lg p-4 space-y-2">
              {[
                { icon: '⚡', name: 'SEO Mode', desc: 'Optimize your listing', badge: 'New' },
                { icon: '🎯', name: 'Ace.me', desc: 'Automate outreach' },
                { icon: '✨', name: 'Flying Start', desc: 'AI-powered launch' },
                { icon: '📊', name: 'Rankdone', desc: 'Track rankings' },
                { icon: '🖼️', name: 'Image Translate AI', desc: 'Translate images', badge: 'Ad' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 cursor-pointer">
                  <span className="text-sm">{item.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-medium text-gray-900">{item.name}</span>
                      {item.badge && <span className="text-[9px] bg-blue-100 text-blue-600 px-1 rounded">{item.badge}</span>}
                    </div>
                    <p className="text-[10px] text-gray-400 truncate">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Special Offer */}
            <div className="border border-blue-200 bg-blue-50/50 rounded-lg p-4">
              <div className="font-medium text-sm text-gray-900 mb-2">Special Offer</div>
              <div className="bg-white rounded-lg p-3 border border-gray-100">
                <div className="text-[10px] text-gray-400 mb-1">SEO Growth Package</div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-2xl font-bold text-gray-900">$59</span>
                  <span className="text-xs text-gray-400 line-through">$199</span>
                </div>
                <ul className="space-y-1 text-[11px] text-gray-600">
                  <li>• Custom SEO article for your product</li>
                  <li>• Permanent backlink - high authority</li>
                  <li>• Spot in "Products we love" newsletter</li>
                </ul>
                <div className="text-[10px] text-orange-500 mt-2">Limited time offer</div>
              </div>
            </div>

            {/* Streak */}
            <div className="border border-gray-100 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <Flame className="w-4 h-4 text-orange-500" />
                <span className="font-medium text-sm text-gray-900">Streak Challenge</span>
              </div>
              <div className="text-center py-3">
                <div className="text-3xl font-bold text-gray-900">0</div>
                <div className="text-[10px] text-gray-400">days streak</div>
              </div>
              <div className="bg-blue-50 rounded p-2 text-[10px]">
                <div className="font-medium text-blue-900 mb-1">Why build a streak?</div>
                <ul className="text-blue-700 space-y-0.5">
                  <li>• Promote your high-streak users, get featured</li>
                  <li>• Automatic priority in rankings</li>
                  <li>• Exclusive community badges</li>
                </ul>
                <button className="w-full mt-2 bg-blue-500 text-white py-1.5 rounded text-[10px] font-medium hover:bg-blue-600">
                  Sign in to start earning rewards
                </button>
              </div>
            </div>

            {/* Categories */}
            <div className="border border-gray-100 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="font-medium text-sm text-gray-900">Top Categories</span>
                <Link href="/categories" className="text-[10px] text-blue-500">View all</Link>
              </div>
              <div className="space-y-1">
                {categories.map((cat) => (
                  <Link key={cat.id} href={`/?category=${cat.slug}`} className="flex items-center justify-between py-1.5 px-2 rounded hover:bg-gray-50 text-xs">
                    <span className="text-gray-700">{cat.name}</span>
                    <span className="text-gray-400">{cat._count.products} projects</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Access */}
            <div className="border border-gray-100 rounded-lg p-4">
              <div className="font-medium text-sm text-gray-900 mb-3">Quick Access</div>
              <div className="space-y-1">
                {['Trending Now', 'Daily Winners', 'Best of Month'].map((item) => (
                  <Link key={item} href="/trending" className="flex items-center justify-between py-1.5 px-2 rounded hover:bg-gray-50 text-xs text-gray-700">
                    {item}
                    <ArrowRight className="w-3 h-3 text-gray-300" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-100 mt-8">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-xs">
            <div className="col-span-2 md:col-span-1">
              <Link href="/landing3" className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
                  <Rocket className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="font-medium text-gray-900">Open-Launch</span>
              </Link>
              <p className="text-gray-400 text-[10px] mb-2">© 2025 Open-Launch. All rights reserved.</p>
              <p className="text-gray-400 text-[10px]">Open source project by Kiro</p>
              <div className="mt-3 inline-flex items-center gap-1.5 bg-orange-50 border border-orange-100 rounded px-2 py-1">
                <Trophy className="w-3 h-3 text-orange-500" />
                <span className="text-[10px] text-orange-600">#1 Project of the Day</span>
              </div>
            </div>
            <div>
              <div className="font-medium text-gray-900 mb-2">DISCOVER</div>
              <div className="space-y-1.5 text-gray-500">
                <Link href="/trending" className="block hover:text-gray-900">Trending</Link>
                <Link href="/categories" className="block hover:text-gray-900">Categories</Link>
                <Link href="/submit" className="block hover:text-gray-900">Submit Project</Link>
                <Link href="/deals" className="block hover:text-gray-900">Alternatives</Link>
              </div>
            </div>
            <div>
              <div className="font-medium text-gray-900 mb-2">RESOURCES</div>
              <div className="space-y-1.5 text-gray-500">
                <Link href="/advertise" className="block hover:text-gray-900">Pricing</Link>
                <Link href="/deals" className="block hover:text-gray-900">Sponsors</Link>
                <Link href="/blog" className="block hover:text-gray-900">Blog</Link>
              </div>
            </div>
            <div>
              <div className="font-medium text-gray-900 mb-2">LEGAL</div>
              <div className="space-y-1.5 text-gray-500">
                <Link href="/terms" className="block hover:text-gray-900">Terms of Service</Link>
                <Link href="/privacy" className="block hover:text-gray-900">Privacy Policy</Link>
                <Link href="/about" className="block hover:text-gray-900">Attribution Badges</Link>
              </div>
            </div>
            <div>
              <div className="font-medium text-gray-900 mb-2">CONNECT</div>
              <div className="space-y-1.5 text-gray-500">
                <a href="#" className="flex items-center gap-1.5 hover:text-gray-900">
                  <Github className="w-3 h-3" /> GitHub
                </a>
                <a href="#" className="flex items-center gap-1.5 hover:text-gray-900">
                  <Twitter className="w-3 h-3" /> Twitter / X
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-100 mt-6 pt-6">
            <div className="text-[10px] text-gray-400 mb-2">FREE TOOLS</div>
            <Link href="/deals" className="text-xs text-gray-600 hover:text-gray-900 bg-gray-100 px-2 py-1 rounded inline-block">
              Deal Calculator
            </Link>
          </div>

          <div className="border-t border-gray-100 mt-6 pt-6 flex items-center justify-between flex-wrap gap-4 text-[10px] text-gray-400">
            <span>VERIFIED BACKLINKS</span>
            <div className="flex items-center gap-4">
              <span>Powered by <span className="text-gray-600">Firefly Stats</span></span>
              <span>🚀 Featured on Startup Fame</span>
            </div>
          </div>
        </div>
      </footer>

      {/* FAB */}
      <Link href="/submit" className="fixed bottom-5 right-5 w-12 h-12 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center shadow-lg text-white text-xl font-light">
        +
      </Link>
    </div>
  )
}
