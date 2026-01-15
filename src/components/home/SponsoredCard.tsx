import { ExternalLink } from 'lucide-react'

interface SponsoredCardProps {
  sponsor: {
    name: string
    tagline: string
    logo?: string
    url: string
  }
}

export function SponsoredCard({ sponsor }: SponsoredCardProps) {
  return (
    <a
      href={sponsor.url}
      target="_blank"
      rel="noopener noreferrer"
      className="card p-4 bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200 hover:shadow-md transition-shadow block"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-lg border border-yellow-200 flex items-center justify-center">
            {sponsor.logo ? (
              <img src={sponsor.logo} alt={sponsor.name} className="w-6 h-6" />
            ) : (
              <span className="text-sm font-bold text-yellow-600">
                {sponsor.name.charAt(0)}
              </span>
            )}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-medium text-gray-900">{sponsor.name}</span>
              <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
            </div>
            <p className="text-sm text-gray-600">{sponsor.tagline}</p>
          </div>
        </div>
        <span className="badge bg-yellow-100 text-yellow-700 text-xs">Sponsored</span>
      </div>
      <p className="text-xs text-gray-500 mt-3">
        Want to become a sponsor and show your product here?{' '}
        <span className="text-orange-600 hover:underline">Advertise</span>
      </p>
    </a>
  )
}
