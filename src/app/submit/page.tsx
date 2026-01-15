import Link from 'next/link'
import { Rocket, Upload, Globe, Tag, FileText, Image } from 'lucide-react'
import { Header } from '@/components/ui/Header'
import { Footer } from '@/components/ui/Footer'

export default function SubmitPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-b from-white to-[#F0F7FF] py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-[#E8F4FD] text-[#1E3A5F] px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Rocket className="w-4 h-4" />
            Launch Your Product
          </div>
          <h1 className="text-4xl font-bold text-[#1E3A5F] mb-4">Submit Your Product</h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Get discovered by thousands of early adopters and builders. It's completely free!
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-12">
        <div className="max-w-2xl mx-auto px-6">
          <div className="bg-white rounded-2xl border border-gray-100 p-8">
            <form className="space-y-6">
              {/* Product Name */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-[#1E3A5F] mb-2">
                  <Tag className="w-4 h-4" />
                  Product Name
                </label>
                <input
                  type="text"
                  placeholder="e.g., My Awesome App"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#4DD4E8] focus:ring-2 focus:ring-[#4DD4E8]/20 transition-all"
                />
              </div>

              {/* Tagline */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-[#1E3A5F] mb-2">
                  <FileText className="w-4 h-4" />
                  Tagline
                </label>
                <input
                  type="text"
                  placeholder="A short description of your product"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#4DD4E8] focus:ring-2 focus:ring-[#4DD4E8]/20 transition-all"
                />
                <p className="text-xs text-gray-400 mt-1">Max 60 characters</p>
              </div>

              {/* Website */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-[#1E3A5F] mb-2">
                  <Globe className="w-4 h-4" />
                  Website URL
                </label>
                <input
                  type="url"
                  placeholder="https://yourproduct.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#4DD4E8] focus:ring-2 focus:ring-[#4DD4E8]/20 transition-all"
                />
              </div>

              {/* Description */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-[#1E3A5F] mb-2">
                  <FileText className="w-4 h-4" />
                  Description
                </label>
                <textarea
                  placeholder="Tell us more about your product..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#4DD4E8] focus:ring-2 focus:ring-[#4DD4E8]/20 transition-all resize-none"
                />
              </div>

              {/* Category */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-[#1E3A5F] mb-2">
                  Category
                </label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#4DD4E8] focus:ring-2 focus:ring-[#4DD4E8]/20 transition-all bg-white">
                  <option value="">Select a category</option>
                  <option value="ai-tools">AI Tools</option>
                  <option value="developer-tools">Developer Tools</option>
                  <option value="design-tools">Design Tools</option>
                  <option value="productivity">Productivity</option>
                  <option value="marketing">Marketing</option>
                  <option value="fintech">Fintech</option>
                  <option value="no-code">No-Code</option>
                </select>
              </div>

              {/* Logo Upload */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-[#1E3A5F] mb-2">
                  <Image className="w-4 h-4" />
                  Product Logo
                </label>
                <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center hover:border-[#4DD4E8] transition-colors cursor-pointer">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-500">Click to upload or drag and drop</p>
                  <p className="text-xs text-gray-400 mt-1">PNG, JPG up to 2MB</p>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#1E3A5F] text-white py-4 rounded-xl font-medium hover:bg-[#2d4a6f] transition-colors flex items-center justify-center gap-2"
              >
                <Rocket className="w-5 h-5" />
                Submit Product
              </button>

              <p className="text-xs text-gray-400 text-center">
                By submitting, you agree to our <Link href="/terms" className="text-[#4DD4E8] hover:underline">Terms of Service</Link>
              </p>
            </form>
          </div>

          {/* Tips */}
          <div className="mt-8 bg-[#E8F4FD] rounded-2xl p-6">
            <h3 className="font-semibold text-[#1E3A5F] mb-3">Tips for a great submission</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-[#4DD4E8]">✓</span>
                Use a clear, descriptive product name
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4DD4E8]">✓</span>
                Write a compelling tagline that explains what your product does
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4DD4E8]">✓</span>
                Upload a high-quality logo (square format works best)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4DD4E8]">✓</span>
                Choose the most relevant category
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
