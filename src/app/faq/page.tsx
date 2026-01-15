'use client'

import { useState } from 'react'
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react'
import { Header } from '@/components/ui/Header'
import { Footer } from '@/components/ui/Footer'

const faqs = [
  {
    question: 'Is OpenShip really free?',
    answer: 'Yes! OpenShip is 100% free to use. You can submit your product, get upvotes, and be discovered without paying anything. We believe every builder deserves a chance to be seen.'
  },
  {
    question: 'How do I submit my product?',
    answer: 'Simply create an account, click "Launch Product" in the header, and fill out the submission form. Include your product name, tagline, website URL, and a brief description. Our team will review it within 24-48 hours.'
  },
  {
    question: 'How does the upvoting system work?',
    answer: 'Users can upvote products they find interesting or useful. Products with more upvotes rank higher in our listings. Each user can upvote a product once, and you can remove your upvote at any time.'
  },
  {
    question: 'What makes a product eligible for submission?',
    answer: 'We accept software products, apps, tools, and services. The product should be functional (not just an idea), have a working website, and not violate our terms of service. We don\'t accept illegal products or spam.'
  },
  {
    question: 'How do I get the Verified badge?',
    answer: 'The Verified badge is given to products that have been reviewed and confirmed by our team. To get verified, your product needs to be active, have a professional presence, and meet our quality standards.'
  },
  {
    question: 'Can I edit my product after submission?',
    answer: 'Yes, you can edit your product details at any time from your dashboard. Changes will be reflected immediately, though major changes may require re-review.'
  },
  {
    question: 'How do I report a product?',
    answer: 'If you find a product that violates our guidelines, you can report it by clicking the report button on the product page or contacting us directly at support@openship.io.'
  },
  {
    question: 'Do you offer advertising options?',
    answer: 'Yes! We offer featured spots, newsletter sponsorships, and custom advertising packages. Visit our Advertise page for more details and pricing.'
  },
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#F8FAFC] transition-colors"
      >
        <span className="font-medium text-[#1E3A5F] pr-4">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-[#4DD4E8] flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-5">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-b from-white to-[#F0F7FF] py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-[#E8F4FD] text-[#1E3A5F] px-4 py-2 rounded-full text-sm font-medium mb-6">
            <HelpCircle className="w-4 h-4" />
            Help Center
          </div>
          <h1 className="text-4xl font-bold text-[#1E3A5F] mb-4">Frequently Asked Questions</h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Find answers to common questions about OpenShip
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-4">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-12 bg-[#E8F4FD] rounded-2xl p-8 text-center">
            <h3 className="text-xl font-semibold text-[#1E3A5F] mb-2">Still have questions?</h3>
            <p className="text-gray-600 mb-4">We're here to help. Reach out to our team.</p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#1E3A5F] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#2d4a6f] transition-colors"
            >
              Contact Support
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
