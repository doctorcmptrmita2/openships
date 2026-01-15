import Link from 'next/link'
import { LayoutDashboard, Package, ChevronUp, MessageCircle, Plus, Settings, User } from 'lucide-react'
import { Header } from '@/components/ui/Header'
import { Footer } from '@/components/ui/Footer'

const userProducts = [
  { id: 1, name: 'My Awesome App', tagline: 'The best app ever made', upvotes: 42, comments: 5, status: 'APPROVED' },
  { id: 2, name: 'Cool Tool', tagline: 'A tool that does cool things', upvotes: 18, comments: 2, status: 'PENDING' },
]

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Header />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-2xl border border-gray-100 p-5 sticky top-24">
              {/* User Info */}
              <div className="flex items-center gap-3 pb-5 border-b border-gray-100 mb-5">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1E3A5F] to-[#4DD4E8] flex items-center justify-center text-white font-bold">
                  J
                </div>
                <div>
                  <p className="font-semibold text-[#1E3A5F]">John Doe</p>
                  <p className="text-sm text-gray-500">@johndoe</p>
                </div>
              </div>

              {/* Navigation */}
              <nav className="space-y-1">
                <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-[#E8F4FD] text-[#1E3A5F] font-medium">
                  <LayoutDashboard className="w-5 h-5" />
                  Dashboard
                </Link>
                <Link href="/dashboard/products" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-600 hover:bg-[#F8FAFC] hover:text-[#1E3A5F] transition-colors">
                  <Package className="w-5 h-5" />
                  My Products
                </Link>
                <Link href="/profile/johndoe" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-600 hover:bg-[#F8FAFC] hover:text-[#1E3A5F] transition-colors">
                  <User className="w-5 h-5" />
                  Profile
                </Link>
                <Link href="/settings" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-600 hover:bg-[#F8FAFC] hover:text-[#1E3A5F] transition-colors">
                  <Settings className="w-5 h-5" />
                  Settings
                </Link>
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-2xl font-bold text-[#1E3A5F]">Dashboard</h1>
                <p className="text-gray-500">Manage your products and track performance</p>
              </div>
              <Link href="/submit" className="bg-[#1E3A5F] text-white px-5 py-2.5 rounded-xl font-medium hover:bg-[#2d4a6f] transition-colors flex items-center gap-2">
                <Plus className="w-5 h-5" />
                New Product
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white rounded-2xl border border-gray-100 p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-[#E8F4FD] rounded-xl flex items-center justify-center">
                    <Package className="w-5 h-5 text-[#1E3A5F]" />
                  </div>
                  <span className="text-gray-500">Products</span>
                </div>
                <p className="text-3xl font-bold text-[#1E3A5F]">{userProducts.length}</p>
              </div>
              <div className="bg-white rounded-2xl border border-gray-100 p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                    <ChevronUp className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-gray-500">Total Upvotes</span>
                </div>
                <p className="text-3xl font-bold text-[#1E3A5F]">{userProducts.reduce((acc, p) => acc + p.upvotes, 0)}</p>
              </div>
              <div className="bg-white rounded-2xl border border-gray-100 p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-gray-500">Comments</span>
                </div>
                <p className="text-3xl font-bold text-[#1E3A5F]">{userProducts.reduce((acc, p) => acc + p.comments, 0)}</p>
              </div>
            </div>

            {/* Products List */}
            <div className="bg-white rounded-2xl border border-gray-100">
              <div className="px-6 py-4 border-b border-gray-100">
                <h2 className="font-semibold text-[#1E3A5F]">Your Products</h2>
              </div>
              <div className="divide-y divide-gray-100">
                {userProducts.map((product) => (
                  <div key={product.id} className="px-6 py-4 flex items-center justify-between hover:bg-[#F8FAFC] transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#E8F4FD] to-[#D4EDFC] flex items-center justify-center">
                        <span className="font-bold text-[#1E3A5F]">{product.name.charAt(0)}</span>
                      </div>
                      <div>
                        <p className="font-medium text-[#1E3A5F]">{product.name}</p>
                        <p className="text-sm text-gray-500">{product.tagline}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-center">
                        <p className="font-semibold text-[#1E3A5F]">{product.upvotes}</p>
                        <p className="text-xs text-gray-400">upvotes</p>
                      </div>
                      <div className="text-center">
                        <p className="font-semibold text-[#1E3A5F]">{product.comments}</p>
                        <p className="text-xs text-gray-400">comments</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        product.status === 'APPROVED' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {product.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
