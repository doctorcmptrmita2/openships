import Link from 'next/link'
import { db } from '@/lib/db'
import { Trophy, Medal, Award, Crown } from 'lucide-react'
import { Header } from '@/components/ui/Header'
import { Footer } from '@/components/ui/Footer'
import { ProductCard } from '@/components/products/ProductCard'

async function getWinners() {
  return await db.product.findMany({
    where: { status: 'APPROVED' },
    include: {
      category: true,
      user: { select: { name: true } },
      _count: { select: { upvotes: true, comments: true } }
    },
    orderBy: { upvotes: { _count: 'desc' } },
    take: 10
  })
}

export default async function WinnersPage() {
  const winners = await getWinners()
  const [first, second, third, ...rest] = winners

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-b from-white to-[#F0F7FF] py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Trophy className="w-4 h-4" />
            Hall of Fame
          </div>
          <h1 className="text-4xl font-bold text-[#1E3A5F] mb-4">Product Winners</h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Celebrating the most loved products on OpenShip
          </p>
        </div>
      </section>

      {/* Top 3 Podium */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Second Place */}
            {second && (
              <div className="md:order-1 bg-white rounded-2xl border border-gray-100 p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Medal className="w-8 h-8 text-gray-500" />
                </div>
                <div className="text-sm text-gray-500 mb-2">2nd Place</div>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#E8F4FD] to-[#D4EDFC] flex items-center justify-center mx-auto mb-3 overflow-hidden">
                  {second.logo ? (
                    <img src={second.logo} alt={second.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-2xl font-bold text-[#1E3A5F]">{second.name.charAt(0)}</span>
                  )}
                </div>
                <Link href={`/products/${second.slug}`} className="font-semibold text-[#1E3A5F] hover:text-[#4DD4E8]">
                  {second.name}
                </Link>
                <p className="text-sm text-gray-500 mt-1">{second._count.upvotes} upvotes</p>
              </div>
            )}

            {/* First Place */}
            {first && (
              <div className="md:order-2 bg-gradient-to-b from-yellow-50 to-white rounded-2xl border-2 border-yellow-200 p-6 text-center hover:shadow-lg transition-shadow md:-mt-4">
                <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Crown className="w-10 h-10 text-yellow-600" />
                </div>
                <div className="text-sm text-yellow-600 font-medium mb-2">🏆 1st Place</div>
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#E8F4FD] to-[#D4EDFC] flex items-center justify-center mx-auto mb-3 overflow-hidden">
                  {first.logo ? (
                    <img src={first.logo} alt={first.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-3xl font-bold text-[#1E3A5F]">{first.name.charAt(0)}</span>
                  )}
                </div>
                <Link href={`/products/${first.slug}`} className="font-bold text-lg text-[#1E3A5F] hover:text-[#4DD4E8]">
                  {first.name}
                </Link>
                <p className="text-sm text-gray-500 mt-1">{first._count.upvotes} upvotes</p>
              </div>
            )}

            {/* Third Place */}
            {third && (
              <div className="md:order-3 bg-white rounded-2xl border border-gray-100 p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-orange-600" />
                </div>
                <div className="text-sm text-gray-500 mb-2">3rd Place</div>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#E8F4FD] to-[#D4EDFC] flex items-center justify-center mx-auto mb-3 overflow-hidden">
                  {third.logo ? (
                    <img src={third.logo} alt={third.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-2xl font-bold text-[#1E3A5F]">{third.name.charAt(0)}</span>
                  )}
                </div>
                <Link href={`/products/${third.slug}`} className="font-semibold text-[#1E3A5F] hover:text-[#4DD4E8]">
                  {third.name}
                </Link>
                <p className="text-sm text-gray-500 mt-1">{third._count.upvotes} upvotes</p>
              </div>
            )}
          </div>

          {/* Rest of Winners */}
          <h2 className="text-xl font-semibold text-[#1E3A5F] mb-6">Runner Ups</h2>
          <div className="space-y-3">
            {rest.map((product, index) => (
              <ProductCard key={product.id} product={product} rank={index + 4} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
