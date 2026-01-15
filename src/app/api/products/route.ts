import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get('category')
  const limit = parseInt(searchParams.get('limit') || '20')

  const products = await db.product.findMany({
    where: {
      status: 'APPROVED',
      ...(category && category !== 'all' ? {
        category: { slug: category }
      } : {})
    },
    include: {
      category: true,
      user: {
        select: { name: true, image: true, isVerified: true }
      },
      _count: {
        select: { upvotes: true, comments: true }
      }
    },
    orderBy: { launchDate: 'desc' },
    take: limit
  })

  return NextResponse.json(products)
}
