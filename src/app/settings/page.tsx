import Link from 'next/link'
import { Settings, Bell, Shield, Trash2, LogOut } from 'lucide-react'
import { Header } from '@/components/ui/Header'
import { Footer } from '@/components/ui/Footer'

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Header />

      <div className="max-w-2xl mx-auto px-6 py-12">
        <h1 className="text-2xl font-bold text-[#1E3A5F] mb-8">Settings</h1>

        <div className="space-y-6">
          {/* Notifications */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#E8F4FD] rounded-xl flex items-center justify-center">
                <Bell className="w-5 h-5 text-[#1E3A5F]" />
              </div>
              <div>
                <h2 className="font-semibold text-[#1E3A5F]">Notifications</h2>
                <p className="text-sm text-gray-500">Manage your notification preferences</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-[#1E3A5F]">Email notifications</p>
                  <p className="text-sm text-gray-500">Receive updates about your products</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#4DD4E8]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#4DD4E8]"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-[#1E3A5F]">Weekly digest</p>
                  <p className="text-sm text-gray-500">Get a summary of top products</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#4DD4E8]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#4DD4E8]"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-[#1E3A5F]">Comment replies</p>
                  <p className="text-sm text-gray-500">Get notified when someone replies</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#4DD4E8]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#4DD4E8]"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Security */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#E8F4FD] rounded-xl flex items-center justify-center">
                <Shield className="w-5 h-5 text-[#1E3A5F]" />
              </div>
              <div>
                <h2 className="font-semibold text-[#1E3A5F]">Security</h2>
                <p className="text-sm text-gray-500">Manage your account security</p>
              </div>
            </div>

            <div className="space-y-4">
              <button className="w-full flex items-center justify-between px-4 py-3 rounded-xl border border-gray-200 hover:bg-[#F8FAFC] transition-colors text-left">
                <div>
                  <p className="font-medium text-[#1E3A5F]">Change password</p>
                  <p className="text-sm text-gray-500">Update your password</p>
                </div>
                <span className="text-gray-400">→</span>
              </button>

              <button className="w-full flex items-center justify-between px-4 py-3 rounded-xl border border-gray-200 hover:bg-[#F8FAFC] transition-colors text-left">
                <div>
                  <p className="font-medium text-[#1E3A5F]">Two-factor authentication</p>
                  <p className="text-sm text-gray-500">Add an extra layer of security</p>
                </div>
                <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded-lg">Off</span>
              </button>
            </div>
          </div>

          {/* Danger Zone */}
          <div className="bg-white rounded-2xl border border-red-100 p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center">
                <Trash2 className="w-5 h-5 text-red-500" />
              </div>
              <div>
                <h2 className="font-semibold text-red-600">Danger Zone</h2>
                <p className="text-sm text-gray-500">Irreversible actions</p>
              </div>
            </div>

            <div className="space-y-4">
              <button className="w-full flex items-center justify-between px-4 py-3 rounded-xl border border-red-200 hover:bg-red-50 transition-colors text-left">
                <div>
                  <p className="font-medium text-red-600">Delete account</p>
                  <p className="text-sm text-gray-500">Permanently delete your account and data</p>
                </div>
              </button>
            </div>
          </div>

          {/* Sign Out */}
          <button className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-gray-200 hover:bg-[#F8FAFC] transition-colors text-gray-600">
            <LogOut className="w-5 h-5" />
            Sign out
          </button>
        </div>
      </div>

      <Footer />
    </div>
  )
}
