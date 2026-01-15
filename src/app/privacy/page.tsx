import { Shield } from 'lucide-react'
import { Header } from '@/components/ui/Header'
import { Footer } from '@/components/ui/Footer'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-b from-white to-[#F0F7FF] py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-[#E8F4FD] text-[#1E3A5F] px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            Legal
          </div>
          <h1 className="text-4xl font-bold text-[#1E3A5F] mb-4">Privacy Policy</h1>
          <p className="text-gray-600">Last updated: January 15, 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-2xl border border-gray-100 p-8 md:p-12">
            <div className="prose prose-gray max-w-none">
              <h2 className="text-xl font-semibold text-[#1E3A5F] mb-4">1. Information We Collect</h2>
              <p className="text-gray-600 mb-6">
                We collect information you provide directly to us, such as when you create an account, 
                submit a product, or contact us. This may include your name, email address, and any 
                other information you choose to provide.
              </p>

              <h2 className="text-xl font-semibold text-[#1E3A5F] mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-600 mb-6">
                We use the information we collect to provide, maintain, and improve our services, 
                to communicate with you, and to personalize your experience on OpenShip.
              </p>

              <h2 className="text-xl font-semibold text-[#1E3A5F] mb-4">3. Information Sharing</h2>
              <p className="text-gray-600 mb-6">
                We do not sell, trade, or otherwise transfer your personal information to third parties. 
                We may share information with service providers who assist us in operating our platform.
              </p>

              <h2 className="text-xl font-semibold text-[#1E3A5F] mb-4">4. Data Security</h2>
              <p className="text-gray-600 mb-6">
                We implement appropriate security measures to protect your personal information. 
                However, no method of transmission over the Internet is 100% secure.
              </p>

              <h2 className="text-xl font-semibold text-[#1E3A5F] mb-4">5. Cookies</h2>
              <p className="text-gray-600 mb-6">
                We use cookies and similar technologies to enhance your experience, analyze usage, 
                and assist in our marketing efforts.
              </p>

              <h2 className="text-xl font-semibold text-[#1E3A5F] mb-4">6. Your Rights</h2>
              <p className="text-gray-600 mb-6">
                You have the right to access, correct, or delete your personal information. 
                You can also opt out of marketing communications at any time.
              </p>

              <h2 className="text-xl font-semibold text-[#1E3A5F] mb-4">7. Contact Us</h2>
              <p className="text-gray-600">
                If you have any questions about this Privacy Policy, please contact us at 
                <a href="mailto:privacy@openship.io" className="text-[#4DD4E8] hover:underline ml-1">
                  privacy@openship.io
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
