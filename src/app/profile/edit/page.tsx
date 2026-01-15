import Link from 'next/link'
import { ArrowLeft, User, Mail, Globe, Twitter, FileText, Camera } from 'lucide-react'
import { Header } from '@/components/ui/Header'
import { Footer } from '@/components/ui/Footer'

export default function EditProfilePage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Header />

      <div className="max-w-2xl mx-auto px-6 py-12">
        {/* Back Link */}
        <Link href="/profile/johndoe" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#1E3A5F] mb-6">
          <ArrowLeft className="w-4 h-4" />
          Back to profile
        </Link>

        <div className="bg-white rounded-2xl border border-gray-100 p-8">
          <h1 className="text-2xl font-bold text-[#1E3A5F] mb-6">Edit Profile</h1>

          <form className="space-y-6">
            {/* Avatar */}
            <div className="flex items-center gap-6">
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#1E3A5F] to-[#4DD4E8] flex items-center justify-center text-white text-2xl font-bold">
                  J
                </div>
                <button className="absolute bottom-0 right-0 w-8 h-8 bg-white rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#F8FAFC] transition-colors">
                  <Camera className="w-4 h-4 text-gray-600" />
                </button>
              </div>
              <div>
                <p className="font-medium text-[#1E3A5F]">Profile Photo</p>
                <p className="text-sm text-gray-500">JPG or PNG. Max 2MB.</p>
              </div>
            </div>

            {/* Name */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-[#1E3A5F] mb-2">
                <User className="w-4 h-4" />
                Name
              </label>
              <input
                type="text"
                defaultValue="John Doe"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#4DD4E8] focus:ring-2 focus:ring-[#4DD4E8]/20 transition-all"
              />
            </div>

            {/* Username */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-[#1E3A5F] mb-2">
                Username
              </label>
              <div className="flex">
                <span className="px-4 py-3 bg-[#F8FAFC] border border-r-0 border-gray-200 rounded-l-xl text-gray-500">
                  openship.io/
                </span>
                <input
                  type="text"
                  defaultValue="johndoe"
                  className="flex-1 px-4 py-3 rounded-r-xl border border-gray-200 focus:outline-none focus:border-[#4DD4E8] focus:ring-2 focus:ring-[#4DD4E8]/20 transition-all"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-[#1E3A5F] mb-2">
                <Mail className="w-4 h-4" />
                Email
              </label>
              <input
                type="email"
                defaultValue="john@example.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#4DD4E8] focus:ring-2 focus:ring-[#4DD4E8]/20 transition-all"
              />
            </div>

            {/* Bio */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-[#1E3A5F] mb-2">
                <FileText className="w-4 h-4" />
                Bio
              </label>
              <textarea
                defaultValue="Building cool stuff. Indie hacker and product enthusiast."
                rows={3}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#4DD4E8] focus:ring-2 focus:ring-[#4DD4E8]/20 transition-all resize-none"
              />
              <p className="text-xs text-gray-400 mt-1">Max 160 characters</p>
            </div>

            {/* Website */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-[#1E3A5F] mb-2">
                <Globe className="w-4 h-4" />
                Website
              </label>
              <input
                type="url"
                defaultValue="https://johndoe.com"
                placeholder="https://yourwebsite.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#4DD4E8] focus:ring-2 focus:ring-[#4DD4E8]/20 transition-all"
              />
            </div>

            {/* Twitter */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-[#1E3A5F] mb-2">
                <Twitter className="w-4 h-4" />
                Twitter
              </label>
              <div className="flex">
                <span className="px-4 py-3 bg-[#F8FAFC] border border-r-0 border-gray-200 rounded-l-xl text-gray-500">
                  @
                </span>
                <input
                  type="text"
                  defaultValue="johndoe"
                  placeholder="username"
                  className="flex-1 px-4 py-3 rounded-r-xl border border-gray-200 focus:outline-none focus:border-[#4DD4E8] focus:ring-2 focus:ring-[#4DD4E8]/20 transition-all"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4 pt-4">
              <button
                type="submit"
                className="flex-1 bg-[#1E3A5F] text-white py-3 rounded-xl font-medium hover:bg-[#2d4a6f] transition-colors"
              >
                Save Changes
              </button>
              <Link
                href="/profile/johndoe"
                className="px-6 py-3 rounded-xl font-medium border border-gray-200 text-gray-600 hover:bg-[#F8FAFC] transition-colors"
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  )
}
