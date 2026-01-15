import Link from 'next/link'
import { Tag, Percent, ExternalLink, Clock } from 'lucide-react'
import { Header } from '@/components/ui/Header'
import { Footer } from '@/components/ui/Footer'

const deals = [
  { name: 'Notion', discount: '50% off', description: 'All-in-one workspace for teams', code: 'OPENSHIP50', expires: 'Dec 31, 2025', logo: '📝' },
  { name: 'Figma', discount: 'Free Pro', description: '3 months free Professional plan', code: 'SHIPFIGMA', expires: 'Jan 15, 2026', logo: '🎨' },
  { name: 'Vercel', discount: '$100 credit', description: 'Cloud hosting credit for startups', code: 'OPENSHIPVC', expires: 'Ongoing', logo: '▲' },
  { name: 'Linear', discount: '6 months free', description: 'Issue tracking for modern teams', code: 'LINEARSHIP', expires: 'Feb 28, 2026', logo: '📊' },
  { name: 'Supabase', discount: '$500 credit', description: 'Open source Firebase alternative', code: 'SUPASHIP', expires: 'Ongoing', logo: '⚡' },
  { name: 'Railway', discount: '$50 credit', description: 'Deploy apps in seconds', code: 'RAILSHIP', expires: 'Mar 31, 2026', logo: '🚂' },
]

export default function DealsPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-b from-white to-[#F0F7FF] py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Percent className="w-4 h-4" />
            Exclusive Offers
          </div>
          <h1 className="text-4xl font-bold text-[#1E3A5F] mb-4">Startup Deals</h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Exclusive discounts and offers from top tools for OpenShip community members
          </p>
        </div>
      </section>

      {/* Deals Grid */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deals.map((deal) => (
              <div key={deal.name} className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:border-[#4DD4E8]/30 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#E8F4FD] to-[#D4EDFC] flex items-center justify-center text-2xl">
                    {deal.logo}
                  </div>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                    {deal.discount}
                  </span>
                </div>
                
                <h3 className="font-semibold text-[#1E3A5F] text-lg mb-1">{deal.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{deal.description}</p>
                
                <div className="flex items-center gap-2 mb-4">
                  <Tag className="w-4 h-4 text-gray-400" />
                  <code className="bg-[#F8FAFC] px-3 py-1 rounded-lg text-sm font-mono text-[#1E3A5F]">{deal.code}</code>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    Expires: {deal.expires}
                  </span>
                  <button className="text-[#4DD4E8] hover:text-[#1E3A5F] text-sm font-medium flex items-center gap-1">
                    Get Deal <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 bg-gradient-to-r from-[#1E3A5F] to-[#2d5a8f] rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-2">Have a deal to share?</h2>
            <p className="text-white/80 mb-6">Partner with us to offer exclusive discounts to our community</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#4DD4E8] text-[#1E3A5F] px-6 py-3 rounded-xl font-medium hover:bg-[#3bc4d8] transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
