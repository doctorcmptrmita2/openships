import Link from 'next/link'
import { KeyRound, Mail, ArrowLeft } from 'lucide-react'

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <svg width={40} height={40} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 4C24 4 16 14 16 28C16 34 19 38 24 38C29 38 32 34 32 28C32 14 24 4 24 4Z" fill="#1E3A5F"/>
        <circle cx="24" cy="20" r="5" fill="white" stroke="#1E3A5F" strokeWidth="2"/>
        <circle cx="24" cy="20" r="2" fill="#4DD4E8"/>
        <path d="M24 4L21 10H27L24 4Z" fill="#4DD4E8"/>
        <path d="M16 30L10 38L16 34V30Z" fill="#1E3A5F"/>
        <path d="M32 30L38 38L32 34V30Z" fill="#1E3A5F"/>
        <path d="M20 38C20 38 22 44 24 44C26 44 28 38 28 38" stroke="#4DD4E8" strokeWidth="3" strokeLinecap="round"/>
      </svg>
      <span className="text-2xl font-bold">
        <span className="text-[#1E3A5F]">OpenShip</span>
        <span className="text-[#4DD4E8]">.io</span>
      </span>
    </div>
  )
}

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <Logo />
          </Link>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-[#E8F4FD] rounded-xl mb-4">
              <KeyRound className="w-6 h-6 text-[#1E3A5F]" />
            </div>
            <h1 className="text-2xl font-bold text-[#1E3A5F]">Reset password</h1>
            <p className="text-gray-500 mt-1">We'll send you a reset link</p>
          </div>

          {/* Form */}
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#1E3A5F] mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#4DD4E8] focus:ring-2 focus:ring-[#4DD4E8]/20 transition-all"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#1E3A5F] text-white py-3 rounded-xl font-medium hover:bg-[#2d4a6f] transition-colors"
            >
              Send reset link
            </button>
          </form>

          <Link
            href="/login"
            className="flex items-center justify-center gap-2 text-gray-500 hover:text-[#1E3A5F] mt-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to sign in
          </Link>
        </div>
      </div>
    </div>
  )
}
