import { FileText } from 'lucide-react'
import { Header } from '@/components/ui/Header'
import { Footer } from '@/components/ui/Footer'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-b from-white to-[#F0F7FF] py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-[#E8F4FD] text-[#1E3A5F] px-4 py-2 rounded-full text-sm font-medium mb-6">
            <FileText className="w-4 h-4" />
            Legal
          </div>
          <h1 className="text-4xl font-bold text-[#1E3A5F] mb-4">Terms of Service</h1>
          <p className="text-gray-600">Last updated: January 15, 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-2xl border border-gray-100 p-8 md:p-12">
            <div className="prose prose-gray max-w-none">
              <h2 className="text-xl font-semibold text-[#1E3A5F] mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 mb-6">
                By accessing or using OpenShip, you agree to be bound by these Terms of Service. 
                If you do not agree to these terms, please do not use our service.
              </p>

              <h2 className="text-xl font-semibold text-[#1E3A5F] mb-4">2. Use of Service</h2>
              <p className="text-gray-600 mb-6">
                You may use OpenShip to discover, submit, and upvote products. You agree to use 
                the service only for lawful purposes and in accordance with these terms.
              </p>

              <h2 className="text-xl font-semibold text-[#1E3A5F] mb-4">3. User Accounts</h2>
              <p className="text-gray-600 mb-6">
                You are responsible for maintaining the confidentiality of your account credentials 
                and for all activities that occur under your account.
              </p>

              <h2 className="text-xl font-semibold text-[#1E3A5F] mb-4">4. Product Submissions</h2>
              <p className="text-gray-600 mb-6">
                When submitting a product, you represent that you have the right to share the 
                information provided and that the product does not violate any laws or third-party rights.
              </p>

              <h2 className="text-xl font-semibold text-[#1E3A5F] mb-4">5. Prohibited Conduct</h2>
              <p className="text-gray-600 mb-6">
                You may not use OpenShip to submit spam, malware, or fraudulent products. 
                Vote manipulation and fake accounts are strictly prohibited.
              </p>

              <h2 className="text-xl font-semibold text-[#1E3A5F] mb-4">6. Intellectual Property</h2>
              <p className="text-gray-600 mb-6">
                OpenShip and its original content, features, and functionality are owned by 
                OpenShip and are protected by international copyright and trademark laws.
              </p>

              <h2 className="text-xl font-semibold text-[#1E3A5F] mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-600 mb-6">
                OpenShip shall not be liable for any indirect, incidental, special, consequential, 
                or punitive damages resulting from your use of the service.
              </p>

              <h2 className="text-xl font-semibold text-[#1E3A5F] mb-4">8. Changes to Terms</h2>
              <p className="text-gray-600 mb-6">
                We reserve the right to modify these terms at any time. We will notify users of 
                any material changes via email or through the service.
              </p>

              <h2 className="text-xl font-semibold text-[#1E3A5F] mb-4">9. Contact</h2>
              <p className="text-gray-600">
                For questions about these Terms, please contact us at 
                <a href="mailto:legal@openship.io" className="text-[#4DD4E8] hover:underline ml-1">
                  legal@openship.io
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
