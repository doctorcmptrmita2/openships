import Link from 'next/link'

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

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Logo size="md" />
            </Link>
            <p className="text-sm text-gray-500 mb-2">Launch Your Dream. Not Your Budget.</p>
            <p className="text-sm text-gray-400 max-w-xs">
              The open platform for builders to launch products and get discovered.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-[#1E3A5F] mb-4">Product</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><Link href="/products" className="hover:text-[#1E3A5F]">Discover</Link></li>
              <li><Link href="/trending" className="hover:text-[#1E3A5F]">Trending</Link></li>
              <li><Link href="/categories" className="hover:text-[#1E3A5F]">Categories</Link></li>
              <li><Link href="/submit" className="hover:text-[#1E3A5F]">Submit</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#1E3A5F] mb-4">Resources</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><Link href="/blog" className="hover:text-[#1E3A5F]">Blog</Link></li>
              <li><Link href="/deals" className="hover:text-[#1E3A5F]">Deals</Link></li>
              <li><Link href="/advertise" className="hover:text-[#1E3A5F]">Advertise</Link></li>
              <li><Link href="/newsletter" className="hover:text-[#1E3A5F]">Newsletter</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#1E3A5F] mb-4">Legal</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><Link href="/terms" className="hover:text-[#1E3A5F]">Terms</Link></li>
              <li><Link href="/privacy" className="hover:text-[#1E3A5F]">Privacy</Link></li>
              <li><Link href="/about" className="hover:text-[#1E3A5F]">About</Link></li>
              <li><Link href="/contact" className="hover:text-[#1E3A5F]">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>© 2025 OpenShip.io. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-[#1E3A5F]">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="#" className="hover:text-[#1E3A5F]">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
