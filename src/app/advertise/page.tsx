import Link from 'next/link'
import { Megaphone, Users, TrendingUp, Target, CheckCircle, ArrowRight } from 'lucide-react'
import { Header } from '@/components/ui/Header'
import { Footer } from '@/components/ui/Footer'

const plans = [
  {
    name: 'Featured Spot',
    price: '$99',
    period: '/week',
    description: 'Get featured on our homepage',
    features: [
      'Homepage featured section',
      'Priority in search results',
      'Featured badge on listing',
      'Social media mention',
    ],
    popular: false
  },
  {
    name: 'Newsletter Sponsor',
    price: '$199',
    period: '/issue',
    description: 'Reach our engaged subscribers',
    features: [
      'Dedicated newsletter section',
      '5,000+ engaged subscribers',
      'Custom copy and CTA',
      'Performance analytics',
    ],
    popular: true
  },
  {
    name: 'Premium Bundle',
    price: '$399',
    period: '/month',
    description: 'Maximum visibility package',
    features: [
      'All Featured Spot benefits',
      '4 newsletter mentions',
      'Category page banner',
      'Dedicated blog post',
    ],
    popular: false
  },
]

export default function AdvertisePage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-b from-white to-[#F0F7FF] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-[#E8F4FD] text-[#1E3A5F] px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Megaphone className="w-4 h-4" />
            Advertise with Us
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1E3A5F] mb-6">
            Reach Builders & Early Adopters
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connect with thousands of engaged builders, indie hackers, and startup founders actively looking for new tools.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Users className="w-5 h-5 text-[#4DD4E8]" />
                <span className="text-3xl font-bold text-[#1E3A5F]">10K+</span>
              </div>
              <p className="text-sm text-gray-500">Monthly Visitors</p>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-[#4DD4E8]" />
                <span className="text-3xl font-bold text-[#1E3A5F]">5K+</span>
              </div>
              <p className="text-sm text-gray-500">Newsletter Subscribers</p>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Target className="w-5 h-5 text-[#4DD4E8]" />
                <span className="text-3xl font-bold text-[#1E3A5F]">85%</span>
              </div>
              <p className="text-sm text-gray-500">Tech Professionals</p>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <CheckCircle className="w-5 h-5 text-[#4DD4E8]" />
                <span className="text-3xl font-bold text-[#1E3A5F]">4.2%</span>
              </div>
              <p className="text-sm text-gray-500">Avg. Click Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1E3A5F] mb-4">Advertising Options</h2>
            <p className="text-gray-600">Choose the plan that fits your goals</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`bg-white rounded-2xl border-2 p-8 relative ${
                  plan.popular ? 'border-[#4DD4E8] shadow-lg' : 'border-gray-100'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#4DD4E8] text-[#1E3A5F] px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-[#1E3A5F] mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-[#1E3A5F]">{plan.price}</span>
                    <span className="text-gray-500">{plan.period}</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="w-5 h-5 text-[#4DD4E8] flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-xl font-medium transition-colors ${
                    plan.popular
                      ? 'bg-[#1E3A5F] text-white hover:bg-[#2d4a6f]'
                      : 'bg-[#E8F4FD] text-[#1E3A5F] hover:bg-[#D4EDFC]'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-r from-[#1E3A5F] to-[#2d5a8f] rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Need a custom solution?</h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Let's discuss how we can help you reach your target audience effectively.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#4DD4E8] text-[#1E3A5F] px-8 py-4 rounded-xl font-semibold hover:bg-[#3bc4d8] transition-colors">
              Contact Us <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
