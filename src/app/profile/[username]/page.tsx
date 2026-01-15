import Link from 'next/link'
import { Calendar, Globe, Twitter, Edit, BadgeCheck } from 'lucide-react'
import { Header } from '@/components/ui/Header'
import { Footer } from '@/components/ui/Footer'
import { ProductCard } from '@/components/products/ProductCard'

const user = {
  name: 'John Doe',
  username: 'johndoe',
  bio: 'Building cool stuff. Indie hacker and product enthusiast.',
  website: 'https://johndoe.com',
  twitter: 'johndoe',
  isVerified: true,
  joinedAt: 'January 2025',
  products: [
    { id: '1', name: 'My Awesome App', slug: 'my-awesome-app', tagline: 'The best app ever made', website: 'https://example.com', isVerified: true, category: { name: 'AI Tools' }, _count: { upvotes: 42, comments: 5 } },
    { id: '2', name: 'Cool Tool', slug: 'cool-tool', tagline: 'A tool that does cool things', website: 'https://example.com', isVerified: false, category: { name: 'Productivity' }, _count: { upvotes: 18, comments: 2 } },
  ],
  stats: { products: 2, upvotes: 60, comments: 7 }
}

export default function ProfilePage({ params }: { params: { username: string } }) {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Header />

      {/* Profile Header */}
      <section className="bg-gradient-to-b from-white to-[#F0F7FF] py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start gap-6">
            {/* Avatar */}
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#1E3A5F] to-[#4DD4E8] flex items-center justify-center text-white text-3xl font-bold flex-shrink-0">
              {user.name.charAt(0)}
            </div>

            {/* Info */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-2xl font-bold text-[#1E3A5F]">{user.name}</h1>
                {user.isVerified && <BadgeCheck className="w-6 h-6 text-[#4DD4E8]" />}
              </div>
              <p className="text-gray-500 mb-3">@{user.username}</p>
              <p className="text-gray-600 mb-4">{user.bio}</p>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  Joined {user.joinedAt}
                </span>
                {user.website && (
                  <a href={user.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-[#4DD4E8]">
                    <Globe className="w-4 h-4" />
                    Website
                  </a>
                )}
                {user.twitter && (
                  <a href={`https://twitter.com/${user.twitter}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-[#4DD4E8]">
                    <Twitter className="w-4 h-4" />
                    @{user.twitter}
                  </a>
                )}
              </div>
            </div>

            {/* Edit Button */}
            <Link href="/profile/edit" className="bg-white text-[#1E3A5F] px-4 py-2 rounded-xl font-medium border border-gray-200 hover:border-[#4DD4E8] transition-colors flex items-center gap-2">
              <Edit className="w-4 h-4" />
              Edit Profile
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            <div className="bg-white rounded-xl border border-gray-100 p-4 text-center">
              <p className="text-2xl font-bold text-[#1E3A5F]">{user.stats.products}</p>
              <p className="text-sm text-gray-500">Products</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-100 p-4 text-center">
              <p className="text-2xl font-bold text-[#4DD4E8]">{user.stats.upvotes}</p>
              <p className="text-sm text-gray-500">Upvotes</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-100 p-4 text-center">
              <p className="text-2xl font-bold text-[#1E3A5F]">{user.stats.comments}</p>
              <p className="text-sm text-gray-500">Comments</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-xl font-semibold text-[#1E3A5F] mb-6">Products by {user.name}</h2>
          <div className="space-y-3">
            {user.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {user.products.length === 0 && (
            <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center">
              <p className="text-gray-500 mb-4">No products yet</p>
              <Link href="/submit" className="text-[#4DD4E8] hover:underline font-medium">
                Submit your first product
              </Link>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
