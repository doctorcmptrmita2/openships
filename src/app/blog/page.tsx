import Link from 'next/link'
import { BookOpen, Calendar, ArrowRight, User } from 'lucide-react'
import { Header } from '@/components/ui/Header'
import { Footer } from '@/components/ui/Footer'

const posts = [
  {
    slug: 'how-to-launch-product',
    title: 'How to Launch Your Product Successfully',
    excerpt: 'A comprehensive guide to launching your product and getting your first users.',
    author: 'OpenShip Team',
    date: 'Jan 10, 2026',
    category: 'Launch Tips',
    image: '🚀'
  },
  {
    slug: 'building-in-public',
    title: 'The Power of Building in Public',
    excerpt: 'Why sharing your journey can help you grow faster and build a loyal community.',
    author: 'OpenShip Team',
    date: 'Jan 8, 2026',
    category: 'Growth',
    image: '🏗️'
  },
  {
    slug: 'indie-hacker-tools',
    title: 'Essential Tools for Indie Hackers in 2026',
    excerpt: 'Our curated list of must-have tools for solo founders and small teams.',
    author: 'OpenShip Team',
    date: 'Jan 5, 2026',
    category: 'Tools',
    image: '🛠️'
  },
  {
    slug: 'getting-first-users',
    title: 'Getting Your First 100 Users',
    excerpt: 'Practical strategies to acquire your first users without spending money.',
    author: 'OpenShip Team',
    date: 'Jan 2, 2026',
    category: 'Growth',
    image: '👥'
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-b from-white to-[#F0F7FF] py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-[#E8F4FD] text-[#1E3A5F] px-4 py-2 rounded-full text-sm font-medium mb-6">
            <BookOpen className="w-4 h-4" />
            OpenShip Blog
          </div>
          <h1 className="text-4xl font-bold text-[#1E3A5F] mb-4">Insights & Resources</h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Tips, guides, and stories to help you build and launch better products
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-6">
            {posts.map((post) => (
              <article key={post.slug} className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:border-[#4DD4E8]/30 transition-all group">
                <div className="flex gap-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#E8F4FD] to-[#D4EDFC] flex items-center justify-center text-4xl flex-shrink-0">
                    {post.image}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs bg-[#E8F4FD] text-[#1E3A5F] px-2.5 py-1 rounded-lg font-medium">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-400 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                    </div>
                    <Link href={`/blog/${post.slug}`}>
                      <h2 className="text-xl font-semibold text-[#1E3A5F] mb-2 group-hover:text-[#4DD4E8] transition-colors">
                        {post.title}
                      </h2>
                    </Link>
                    <p className="text-gray-600 text-sm mb-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400 flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {post.author}
                      </span>
                      <Link href={`/blog/${post.slug}`} className="text-sm text-[#4DD4E8] hover:text-[#1E3A5F] font-medium flex items-center gap-1">
                        Read more <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-10">
            <button className="bg-white text-[#1E3A5F] px-8 py-3 rounded-xl font-medium border-2 border-gray-200 hover:border-[#4DD4E8] transition-colors">
              Load More Posts
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
