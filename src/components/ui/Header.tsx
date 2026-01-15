'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

function Logo({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizes = {
    sm: { icon: 28, text: 'text-lg' },
    md: { icon: 36, text: 'text-xl' },
    lg: { icon: 48, text: 'text-2xl' }
  }
  const { icon, text } = sizes[size]
  
  return (
    <div className="flex items-center gap-3">
      <svg width={icon} height={icon} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 4C24 4 16 14 16 28C16 34 19 38 24 38C29 38 32 34 32 28C32 14 24 4 24 4Z" fill="#1E3A5F"/>
        <circle cx="24" cy="20" r="5" fill="white" stroke="#1E3A5F" strokeWidth="2"/>
        <circle cx="24" cy="20" r="2" fill="#4DD4E8"/>
        <path d="M24 4L21 10H27L24 4Z" fill="#4DD4E8"/>
        <path d="M16 30L10 38L16 34V30Z" fill="#1E3A5F"/>
        <path d="M32 30L38 38L32 34V30Z" fill="#1E3A5F"/>
        <path d="M20 38C20 38 22 44 24 44C26 44 28 38 28 38" stroke="#4DD4E8" strokeWidth="3" strokeLinecap="round"/>
        <path d="M18 40C18 40 21 46 24 46C27 46 30 40 30 40" stroke="#4DD4E8" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
      </svg>
      <div>
        <span className={`font-bold ${text}`}>
          <span className="text-[#1E3A5F]">OpenShip</span>
          <span className="text-[#4DD4E8]">.io</span>
        </span>
      </div>
    </div>
  )
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/">
          <Logo size="md" />
        </Link>
        
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
          <Link href="/products" className="hover:text-[#1E3A5F] transition-colors">Discover</Link>
          <Link href="/trending" className="hover:text-[#1E3A5F] transition-colors">Trending</Link>
          <Link href="/categories" className="hover:text-[#1E3A5F] transition-colors">Categories</Link>
          <Link href="/deals" className="hover:text-[#1E3A5F] transition-colors">Deals</Link>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link href="/login" className="text-sm text-gray-600 hover:text-[#1E3A5F] transition-colors">
            Sign in
          </Link>
          <Link href="/submit" className="bg-[#1E3A5F] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#2d4a6f] transition-colors">
            Launch Product
          </Link>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 text-gray-600"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-4">
          <Link href="/products" className="block text-gray-600 hover:text-[#1E3A5F]">Discover</Link>
          <Link href="/trending" className="block text-gray-600 hover:text-[#1E3A5F]">Trending</Link>
          <Link href="/categories" className="block text-gray-600 hover:text-[#1E3A5F]">Categories</Link>
          <Link href="/deals" className="block text-gray-600 hover:text-[#1E3A5F]">Deals</Link>
          <hr className="border-gray-100" />
          <Link href="/login" className="block text-gray-600 hover:text-[#1E3A5F]">Sign in</Link>
          <Link href="/submit" className="block bg-[#1E3A5F] text-white px-5 py-2.5 rounded-full text-sm font-medium text-center">
            Launch Product
          </Link>
        </div>
      )}
    </header>
  )
}
