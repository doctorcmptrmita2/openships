import { Mail, MessageCircle, MapPin, Send } from 'lucide-react'
import { Header } from '@/components/ui/Header'
import { Footer } from '@/components/ui/Footer'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-b from-white to-[#F0F7FF] py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-[#E8F4FD] text-[#1E3A5F] px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MessageCircle className="w-4 h-4" />
            Get in Touch
          </div>
          <h1 className="text-4xl font-bold text-[#1E3A5F] mb-4">Contact Us</h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Have a question or feedback? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl border border-gray-100 p-6">
                <div className="w-12 h-12 bg-[#E8F4FD] rounded-xl flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-[#1E3A5F]" />
                </div>
                <h3 className="font-semibold text-[#1E3A5F] mb-2">Email</h3>
                <p className="text-gray-600">hello@openship.io</p>
              </div>

              <div className="bg-white rounded-2xl border border-gray-100 p-6">
                <div className="w-12 h-12 bg-[#E8F4FD] rounded-xl flex items-center justify-center mb-4">
                  <MessageCircle className="w-6 h-6 text-[#1E3A5F]" />
                </div>
                <h3 className="font-semibold text-[#1E3A5F] mb-2">Social</h3>
                <p className="text-gray-600">@openshipio on Twitter</p>
              </div>

              <div className="bg-white rounded-2xl border border-gray-100 p-6">
                <div className="w-12 h-12 bg-[#E8F4FD] rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-[#1E3A5F]" />
                </div>
                <h3 className="font-semibold text-[#1E3A5F] mb-2">Location</h3>
                <p className="text-gray-600">Remote-first, Worldwide</p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl border border-gray-100 p-8">
                <h2 className="text-xl font-semibold text-[#1E3A5F] mb-6">Send us a message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[#1E3A5F] mb-2">Name</label>
                      <input
                        type="text"
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#4DD4E8] focus:ring-2 focus:ring-[#4DD4E8]/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#1E3A5F] mb-2">Email</label>
                      <input
                        type="email"
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#4DD4E8] focus:ring-2 focus:ring-[#4DD4E8]/20 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#1E3A5F] mb-2">Subject</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#4DD4E8] focus:ring-2 focus:ring-[#4DD4E8]/20 transition-all bg-white">
                      <option value="">Select a topic</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Support</option>
                      <option value="partnership">Partnership</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#1E3A5F] mb-2">Message</label>
                    <textarea
                      placeholder="How can we help?"
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#4DD4E8] focus:ring-2 focus:ring-[#4DD4E8]/20 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#1E3A5F] text-white py-4 rounded-xl font-medium hover:bg-[#2d4a6f] transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
