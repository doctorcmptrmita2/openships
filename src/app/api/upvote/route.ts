import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export const dynamic = 'force-dynamic'

// Mock user ID - in real app this would come from auth session
const MOCK_USER_ID = 'user-1'

export async function POST(request: Request) {
  try {
    const { productId } = await request.json()

    if (!productId) {
      return NextResponse.json({ error: 'Product ID required' }, { status: 400 })
    }

    // Check if user already upvoted
    const existingUpvote = await db.upvote.findUnique({
      where: {
        userId_productId: {
          userId: MOCK_USER_ID,
          productId: productId
        }
      }
    })

    if (existingUpvote) {
      // Remove upvote (toggle off)
      await db.upvote.delete({
        where: { id: existingUpvote.id }
      })

      const count = await db.upvote.count({ where: { productId } })
      return NextResponse.json({ upvoted: false, count })
    } else {
      // Add upvote
      await db.upvote.create({
        data: {
          userId: MOCK_USER_ID,
          productId: productId
        }
      })

      const count = await db.upvote.count({ where: { productId } })
      return NextResponse.json({ upvoted: true, count })
    }
  } catch (error) {
    console.error('Upvote error:', error)
    return NextResponse.json({ error: 'Failed to upvote' }, { status: 500 })
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const productId = searchParams.get('productId')

    if (!productId) {
      return NextResponse.json({ error: 'Product ID required' }, { status: 400 })
    }

    const upvote = await db.upvote.findUnique({
      where: {
        userId_productId: {
          userId: MOCK_USER_ID,
          productId: productId
        }
      }
    })

    const count = await db.upvote.count({ where: { productId } })

    return NextResponse.json({ upvoted: !!upvote, count })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to check upvote' }, { status: 500 })
  }
}
