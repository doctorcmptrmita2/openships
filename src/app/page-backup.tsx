// BACKUP - Original Landing Page
import { Header } from '@/components/ui/Header'
import { Footer } from '@/components/ui/Footer'
import { HeroSection } from '@/components/home/HeroSection'
import { Sidebar } from '@/components/home/Sidebar'
import { SponsoredCard } from '@/components/home/SponsoredCard'
import { ProductCard } from '@/components/products/ProductCard'
import { db } from '@/lib/db'
import { Rocket, Sparkles, Clock, TrendingUp, Flame, Radio } from 'lucide-react'
import Link from 'next/link'

const mockSponsor = {
  name: 'AI Directories',
  tagline: 'We will manually submit your startup to 100+ directories',
  url: '#'
}

type SortType = 'hot' | 'live' | 'recent' | 'trending'

async function getProducts(category?: string, sort: SortType = 'hot') {
  const now = new Date()
  const oneDayAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000)
  const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)

  let orderBy: any = { launchDate: 'desc' }
  let where: any = { status: 'APPROVED' }

  if (category && category !== 'all') {
    where.category = { slug: category }
  }

  switch (sort) {
    case 'live':
      where.launchDate = { gte: oneDayAgo }
      orderBy = { launchDate: 'desc' }
      break
    case 'recent':
      orderBy = { createdAt: 'desc' }
      break
    case 'trending':
      where.launchDate = { gte: oneWeekAgo }
      orderBy = { launchDate: 'desc' }
      break
    case 'hot':
    default:
      orderBy = { launchDate: 'desc' }
      break
  }

  return await db.product.findMany({
    where,
    include: {
      category: true,
      user: { select: { name: true, image: true, isVerified: true } },
      _count: { select: { upvotes: true, comments: true } }
    },
    orderBy,
    take: 20
  })
}
