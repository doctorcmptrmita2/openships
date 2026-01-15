import Link from 'next/link'
import { TrendingUp, Users, Zap, ExternalLink, ChevronRight } from 'lucide-react'

const sponsors = [
  { name: 'AI Directories', tagline: 'Submit to 100+ directories', url: '#' },
  { name: 'LaunchFast', tagline: 'Ship your SaaS in days', url: '#' },
]

const topBuilders = [
  { name: 'John Doe', products: 12, avatar: null },
  { name: 'Jane Smith', products: 8, avatar: null },
  { name: 'Alex Johnson', products: 6, avatar: null },
]

const blogPosts = [
  { title: 'How to launch your product in 2026', date: 'Jan 10' },
  { title: 'SEO tips for indie hackers', date: 'Jan 8' },
]

interface SidebarProps {
  productCount?: number
  categoryCount?: number
}

export function Sidebar({ productCount = 100, categoryCount = 20 }: SidebarProps) {
  return (
    <aside className="space-y-6">
      {/* Monthly Visitors */}
      <div className="card p-4">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
          <TrendingUp className="w-4 h-4" />
          Monthly Visitors
        </div>
        <div className="text-3xl font-bold text-gray-900">135,626</div>
        <div className="text-sm text-gray-500">Last 30 days</div>
        <div className="mt-3 h-12 bg-gradient-to-r from-orange-100 to-orange-200 rounded-lg" />
      </div>

      {/* Sponsors */}
      <div className="card p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-900 flex items-center gap-2">
            <Zap className="w-4 h-4 text-yellow-500" />
            Sponsors
          </h3>
          <Link href="/advertise" className="text-xs text-orange-600 hover:underline">
            Advertise
          </Link>
        </div>
        <div className="space-y-3">
          {sponsors.map((sponsor) => (
            <a
              key={sponsor.name}
              href={sponsor.url}
              className="flex items-start gap-3 p-2 -mx-2 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-bold text-gray-400">
                  {sponsor.name.charAt(0)}
                </span>
              </div>
              <div className="min-w-0">
                <div className="font-medium text-sm text-gray-900 flex items-center gap-1">
                  {sponsor.name}
                  <ExternalLink className="w-3 h-3 text-gray-400" />
                </div>
                <p className="text-xs text-gray-500 truncate">{sponsor.tagline}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Top Builders */}
      <div className="card p-4">
        <h3 className="font-semibold text-gray-900 flex items-center gap-2 mb-4">
          <Users className="w-4 h-4 text-blue-500" />
          Top Builders
        </h3>
        <div className="space-y-3">
          {topBuilders.map((builder, index) => (
            <div key={builder.name} className="flex items-center gap-3">
              <span className="text-sm font-medium text-gray-400 w-4">
                {index + 1}
              </span>
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-xs font-medium text-gray-500">
                  {builder.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-gray-900 truncate">
                  {builder.name}
                </div>
                <div className="text-xs text-gray-500">{builder.products} products</div>
              </div>
            </div>
          ))}
        </div>
        <Link 
          href="/builders" 
          className="flex items-center justify-center gap-1 mt-4 text-sm text-orange-600 hover:underline"
        >
          View all builders
          <ChevronRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Latest from Blog */}
      <div className="card p-4">
        <h3 className="font-semibold text-gray-900 mb-4">Latest from Blog</h3>
        <div className="space-y-3">
          {blogPosts.map((post) => (
            <Link
              key={post.title}
              href="#"
              className="block group"
            >
              <h4 className="text-sm font-medium text-gray-900 group-hover:text-orange-600 line-clamp-2">
                {post.title}
              </h4>
              <p className="text-xs text-gray-500 mt-1">{post.date}</p>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  )
}
