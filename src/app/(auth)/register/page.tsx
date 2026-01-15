import Link from 'next/link'
import { UserPlus, Mail, Lock, User, Github } from 'lucide-react'

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

export default function RegisterPage() {
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
              <UserPlus className="w-6 h-6 text-[#1E3A5F]" />
            </div>
            <h1 className="text-2xl font-bold text-[#1E3A5F]">Create an account</h1>
            <p className="text-gray-500 mt-1">Join the builder community</p>
          </div>

          {/* Social Login */}
          <div className="space-y-3 mb-6">
            <button className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl border border-gray-200 hover:bg-[#F8FAFC] transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span className="text-gray-600 font-medium">Continue with Google</span>
            </button>
            <button className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl border border-gray-200 hover:bg-[#F8FAFC] transition-colors">
              <Github className="w-5 h-5" />
              <span className="text-gray-600 font-medium">Continue with GitHub</span>
            </button>
          </div>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-400">or continue with email</span>
            </div>
          </div>

          {/* Form */}
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#1E3A5F] mb-2">Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#4DD4E8] focus:ring-2 focus:ring-[#4DD4E8]/20 transition-all"
                />
              </div>
            </div>

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

            <div>
              <label className="block text-sm font-medium text-[#1E3A5F] mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#4DD4E8] focus:ring-2 focus:ring-[#4DD4E8]/20 transition-all"
                />
              </div>
              <p className="text-xs text-gray-400 mt-1">Must be at least 8 characters</p>
            </div>

            <button
              type="submit"
              className="w-full bg-[#1E3A5F] text-white py-3 rounded-xl font-medium hover:bg-[#2d4a6f] transition-colors"
            >
              Create account
            </button>
          </form>

          <p className="text-center text-gray-500 mt-6">
            Already have an account?{' '}
            <Link href="/login" className="text-[#4DD4E8] hover:underline font-medium">
              Sign in
            </Link>
          </p>
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          By signing up, you agree to our{' '}
          <Link href="/terms" className="hover:underline">Terms</Link> and{' '}
          <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
        </p>
      </div>
    </div>
  )
}
