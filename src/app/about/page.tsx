import Link from 'next/link'
import { Rocket, Users, Heart, Zap, Target, Globe } from 'lucide-react'
import { Header } from '@/components/ui/Header'
import { Footer } from '@/components/ui/Footer'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-b from-white to-[#F0F7FF] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-[#E8F4FD] text-[#1E3A5F] px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Heart className="w-4 h-4" />
            Our Story
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1E3A5F] mb-6">
            Launch Your Dream.<br />
            <span className="text-[#4DD4E8]">Not Your Budget.</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            OpenShip is the open, affordable platform for the next generation of builders. 
            We believe every great product deserves a chance to be discovered.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#1E3A5F] mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                We started OpenShip because we believe the best products should win based on merit, 
                not marketing budgets. Too many great tools never get discovered because their 
                creators can't afford expensive launch platforms.
              </p>
              <p className="text-gray-600">
                Our mission is to democratize product discovery and give every builder a fair 
                chance to reach their audience. Whether you're a solo indie hacker or a growing 
                startup, OpenShip is your launchpad.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl border border-gray-100 p-6 text-center">
                <div className="text-3xl font-bold text-[#1E3A5F]">100+</div>
                <div className="text-sm text-gray-500">Products Launched</div>
              </div>
              <div className="bg-white rounded-2xl border border-gray-100 p-6 text-center">
                <div className="text-3xl font-bold text-[#4DD4E8]">12K+</div>
                <div className="text-sm text-gray-500">Upvotes Given</div>
              </div>
              <div className="bg-white rounded-2xl border border-gray-100 p-6 text-center">
                <div className="text-3xl font-bold text-[#1E3A5F]">50+</div>
                <div className="text-sm text-gray-500">Active Builders</div>
              </div>
              <div className="bg-white rounded-2xl border border-gray-100 p-6 text-center">
                <div className="text-3xl font-bold text-[#4DD4E8]">100%</div>
                <div className="text-sm text-gray-500">Free Forever</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1E3A5F] mb-4">Our Values</h2>
            <p className="text-gray-600">The principles that guide everything we do</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: 'Accessibility', desc: 'Free listings for everyone. No paywalls, no premium tiers for basic features.' },
              { icon: Users, title: 'Community First', desc: 'Built by builders, for builders. Your feedback shapes our roadmap.' },
              { icon: Target, title: 'Quality Focus', desc: 'We curate and verify products to maintain a high-quality directory.' },
            ].map((value) => {
              const Icon = value.icon
              return (
                <div key={value.title} className="text-center">
                  <div className="w-16 h-16 bg-[#E8F4FD] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-[#1E3A5F]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#1E3A5F] mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-r from-[#1E3A5F] to-[#2d5a8f] rounded-3xl p-12 text-center text-white">
            <Rocket className="w-12 h-12 mx-auto mb-6 text-[#4DD4E8]" />
            <h2 className="text-3xl font-bold mb-4">Ready to launch?</h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Join our community of builders and get your product in front of thousands of early adopters.
            </p>
            <Link href="/submit" className="inline-flex items-center gap-2 bg-[#4DD4E8] text-[#1E3A5F] px-8 py-4 rounded-xl font-semibold hover:bg-[#3bc4d8] transition-colors">
              Submit Your Product
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
