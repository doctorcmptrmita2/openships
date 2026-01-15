import { ProductCard } from './ProductCard'

interface Product {
  id: string
  name: string
  slug: string
  tagline: string
  logo?: string | null
  website: string
  isFeatured?: boolean
  isVerified?: boolean
  category?: { name: string; slug: string } | null
  tags?: { name: string; slug: string }[]
  _count?: { upvotes: number; comments: number }
}

interface ProductListProps {
  products: Product[]
  showRank?: boolean
  title?: string
}

export function ProductList({ products, showRank = false, title }: ProductListProps) {
  if (products.length === 0) {
    return (
      <div className="card p-8 text-center">
        <p className="text-gray-500">No products found</p>
      </div>
    )
  }

  return (
    <div>
      {title && (
        <h2 className="text-lg font-semibold text-gray-900 mb-4">{title}</h2>
      )}
      <div className="space-y-3">
        {products.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            rank={showRank ? index + 1 : undefined}
            isTrending={index < 3}
          />
        ))}
      </div>
    </div>
  )
}
