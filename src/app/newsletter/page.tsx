import { Mail, Sparkles, Bell, Gift } from 'lucide-react'
import { Header } from '@/components/ui/Header'
import { Footer } from '@/components/ui/Footer'

export default function NewsletterPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-b from-white to-[#F0F7FF] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-[#E8F4FD] text-[#1E3A5F] px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Mail className="w-4 h-4" />
            Weekly Newsletter
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1E3A5F] mb-6">
            Stay in the Loop
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Get the best new products, startup deals, and builder insights delivered to your inbox every week.
          </p>

          {/* Subscribe Form */}
          <div className="max-w-md mx-auto">
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-4 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-[#4DD4E8] focus:ring-2 focus:ring-[#4DD4E8]/20 transition-all"
              />
              <button className="bg-[#1E3A5F] text-white px-6 py-4 rounded-xl font-medium hover:bg-[#2d4a6f] transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-3">
              Join 5,000+ builders. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1E3A5F] mb-4">What You'll Get</h2>
            <p className="text-gray-600">Every Thursday, straight to your inbox</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl border border-gray-100 p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#FEF3C7] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold text-[#1E3A5F] mb-3">Top Products</h3>
              <p className="text-gray-600">
                Curated selection of the week's best product launches and hidden gems
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Gift className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-[#1E3A5F] mb-3">Exclusive Deals</h3>
              <p className="text-gray-600">
                Special discounts and offers from top tools, only for subscribers
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Bell className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-[#1E3A5F] mb-3">Builder Insights</h3>
              <p className="text-gray-600">
                Tips, strategies, and stories from successful indie hackers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Newsletter */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-[#1E3A5F] mb-2">Sample Newsletter</h2>
            <p className="text-gray-600">Here's what a typical issue looks like</p>
          </div>

          <div className="bg-[#F8FAFC] rounded-2xl border border-gray-200 p-8">
            <div className="border-b border-gray-200 pb-4 mb-6">
              <p className="text-sm text-gray-500">OpenShip Weekly #42</p>
              <h3 className="text-xl font-bold text-[#1E3A5F]">This Week's Top Launches 🚀</h3>
            </div>
            
            <div className="space-y-4 text-gray-600">
              <p>Hey builder! 👋</p>
              <p>Another exciting week in the world of product launches. Here are the highlights:</p>
              
              <div className="bg-white rounded-xl p-4 border border-gray-100">
                <p className="font-medium text-[#1E3A5F]">🏆 Product of the Week</p>
                <p className="text-sm">An AI tool that's changing how teams collaborate...</p>
              </div>

              <div className="bg-white rounded-xl p-4 border border-gray-100">
                <p className="font-medium text-[#1E3A5F]">💰 Deal Alert</p>
                <p className="text-sm">50% off on a popular design tool, exclusive for our readers...</p>
              </div>

              <p className="text-sm text-gray-400 pt-4">
                [Continue reading in your inbox...]
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
