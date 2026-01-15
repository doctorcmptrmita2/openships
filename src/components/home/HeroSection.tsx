import Link from 'next/link'
import { Rocket, Sparkles, Users } from 'lucide-react'

interface HeroSectionProps {
  productCount?: number
}

export function HeroSection({ productCount = 500 }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-orange-50 to-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm mb-6">
            <Sparkles className="w-4 h-4 text-orange-500" />
            <span className="text-sm font-medium text-gray-700">
              100% Free to launch your product
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
            <span className="text-orange-500">Discover</span> standout products.
            <br />
            Build and <span className="text-orange-500">launch</span> where people engage.
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            The most welcoming product community where thousands discover breakthrough 
            products and builders get real feedback, backlinks, and new users.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/submit" className="btn btn-primary text-base px-8 py-3">
              <Rocket className="w-5 h-5" />
              Launch Your Product Now
            </Link>
            <Link href="/products" className="btn btn-secondary text-base px-8 py-3">
              Browse Products
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-12 flex items-center justify-center gap-8 md:gap-12">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-gray-900">{productCount}+</div>
              <div className="text-sm text-gray-500">Products</div>
            </div>
            <div className="w-px h-12 bg-gray-200" />
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-gray-900">10K+</div>
              <div className="text-sm text-gray-500">Monthly Visitors</div>
            </div>
            <div className="w-px h-12 bg-gray-200" />
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-gray-900">DR 50+</div>
              <div className="text-sm text-gray-500">Domain Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-r from-orange-100/50 to-yellow-100/50 rounded-full blur-3xl -z-10" />
    </section>
  )
}
